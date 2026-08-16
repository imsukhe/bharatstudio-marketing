#!/usr/bin/env node
/**
 * Post-build CSP header generator.
 *
 * Next.js App Router's static export emits genuine inline `<script>` tags
 * per page (the `self.__next_f.push(...)` RSC hydration payload) — this is
 * structural to the framework, not something this build controls away.
 * script-src 'unsafe-inline' is explicitly forbidden by the approved CSP
 * decision, so every page's exact inline-script hashes must be allow-
 * listed instead.
 *
 * Cloudflare Pages' own documented _headers behaviour makes a single
 * global rule insufficient: "An incoming request which matches multiple
 * rules' URL patterns will inherit all rules' headers," and "If a header
 * is applied twice in the _headers file, the values are joined with a
 * comma separator." A comma-joined Content-Security-Policy is treated as
 * *multiple independent policies*, each enforced — so a global
 * `script-src 'self'` merged with a per-page hash addition would still
 * block the hashed script, because the global policy has no hash
 * exception. Every route therefore needs its own complete CSP line.
 *
 * Run automatically as part of `npm run build` (see package.json). If
 * this script is ever skipped, the affected page's CSP will not match its
 * actual inline-script hashes and hydration will fail closed — safer than
 * failing open, but it must not be allowed to go stale silently. CI should
 * treat a missing/failed run of this script as a build failure.
 */
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'out')
const HEADERS_PATH = join(OUT_DIR, '_headers')

const BASE_CSP_DIRECTIVES = [
  "default-src 'self'",
  "base-uri 'none'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  // script-src is completed per-route below with that page's real hashes.
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  'upgrade-insecure-requests',
]

function findHtmlFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      if (entry === '_next') continue // build assets, not routes
      findHtmlFiles(full, files)
    } else if (entry.endsWith('.html')) {
      files.push(full)
    }
  }
  return files
}

function extractInlineScriptHashes(html) {
  const hashes = []
  // Matches <script ...>...</script> WITHOUT an src= attribute — those are
  // external chunk references and are already covered by script-src 'self'.
  const scriptRe = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g
  let match
  while ((match = scriptRe.exec(html)) !== null) {
    const content = match[1]
    if (!content || content.trim() === '') continue
    const hash = createHash('sha256').update(content, 'utf8').digest('base64')
    hashes.push(`'sha256-${hash}'`)
  }
  return hashes
}

function filePathToRoute(filePath) {
  const rel = relative(OUT_DIR, filePath).replace(/\\/g, '/')
  if (rel === 'index.html') return '/'
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`
  return `/${rel}` // e.g. 404.html, _not-found.html
}

function main() {
  const htmlFiles = findHtmlFiles(OUT_DIR)
  const blocks = []

  blocks.push(
    [
      '/*',
      '  X-Content-Type-Options: nosniff',
      '  Referrer-Policy: strict-origin-when-cross-origin',
      '  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()',
      '  Strict-Transport-Security: max-age=31536000; includeSubDomains',
    ].join('\n')
  )

  let totalHashes = 0
  for (const file of htmlFiles.sort()) {
    const html = readFileSync(file, 'utf8')
    const hashes = extractInlineScriptHashes(html)
    const route = filePathToRoute(file)
    const scriptSrc = hashes.length > 0 ? `script-src 'self' ${hashes.join(' ')}` : "script-src 'self'"
    totalHashes += hashes.length
    const csp = [...BASE_CSP_DIRECTIVES.slice(0, 5), scriptSrc, ...BASE_CSP_DIRECTIVES.slice(5)].join('; ')
    blocks.push([route, `  Content-Security-Policy: ${csp}`].join('\n'))
  }

  blocks.push(
    [
      '/.well-known/security.txt',
      '  Content-Type: text/plain; charset=utf-8',
      '  Cache-Control: public, max-age=86400, must-revalidate',
    ].join('\n')
  )

  blocks.push(
    [
      '/*.html',
      '  X-Content-Type-Options: nosniff',
      '  Cache-Control: public, max-age=300, must-revalidate',
    ].join('\n')
  )

  writeFileSync(HEADERS_PATH, blocks.join('\n\n') + '\n')
  console.log(
    `generate-csp-headers: wrote ${htmlFiles.length} route-specific CSP blocks ` +
      `(${totalHashes} inline-script hashes total) to out/_headers`
  )
}

main()
