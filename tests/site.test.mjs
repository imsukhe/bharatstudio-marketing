import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';

/*
 * Tests run against the built static-export output (`out/`), not `app/`
 * source — this repo builds with `next build && node scripts/generate-csp-
 * headers.mjs` (see package.json). Run `npm run build` before `npm test`.
 *
 * Rewritten for the Next.js App Router migration: the previous version of
 * this file read flat HTML straight out of `public/`, which no longer
 * exists as page content (public/ now holds only static assets and
 * discovery files — robots.txt, sitemap.xml, favicon, security.txt).
 */
const root = new URL('../out/', import.meta.url);

const PAGES = [
  'index.html', 'apps/alerts/index.html', 'apps/companion/index.html',
  'features/index.html', 'pricing/index.html', 'download/index.html',
  'compatibility/index.html', 'docs/index.html', 'docs/companion/index.html',
  'setup/index.html', 'resources/index.html', 'resources/blog/index.html',
  'resources/blog/why-we-built-bharatstudio/index.html',
  'resources/blog/obs-browser-source-setup-india/index.html',
  'resources/blog/how-viewers-tip-your-stream/index.html',
  'resources/blog/ai-voice-alerts-11-languages/index.html',
  'support/index.html', 'status/index.html', 'legal/index.html',
  'legal/privacy/index.html', 'legal/terms/index.html', 'legal/refunds/index.html',
  'legal/contact/index.html', 'legal/licenses/index.html', 'legal/data-rights/index.html',
  'creators/index.html', 'compare/index.html', 'affiliate/index.html',
];

function localTargetPath(href) {
  if (!href.startsWith('/') || href.startsWith('//')) return null;
  const withoutQuery = href.split(/[?#]/, 1)[0];
  if (withoutQuery === '/') return 'index.html';
  if (withoutQuery.endsWith('/')) return `${withoutQuery.slice(1)}index.html`;
  return withoutQuery.slice(1);
}

test('built marketing pages have safe metadata and no leaked secrets', async () => {
  for (const page of PAGES) {
    const html = await readFile(new URL(page, root), 'utf8');
    assert.match(html, /<title>[^<]+<\/title>/, page);
    assert.match(html, /<meta name="description" content="[^"]+"\s*\/?\s*>/, page);
    assert.match(html, /BharatStudio/, page);
    assert.doesNotMatch(html, /DATABASE_URL|RAZORPAY_KEY|client_secret|x-razorpay|YouTube|SuperChat|Enterprise/i, page);
  }
});

test('all published internal links resolve to a built output target', async () => {
  for (const page of PAGES) {
    const html = await readFile(new URL(page, root), 'utf8');
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
    for (const href of hrefs) {
      const target = localTargetPath(href);
      if (!target) continue;
      await access(new URL(target, root));
    }
  }
});

test('no inline style attributes anywhere in built HTML (CSP style-src is self-only)', async () => {
  for (const page of PAGES) {
    const html = await readFile(new URL(page, root), 'utf8');
    // Matches a real HTML style="..." attribute — not the literal word
    // "style" appearing inside the RSC hydration JSON payload.
    assert.doesNotMatch(html, /\sstyle="/, page);
  }
});

test('the /streamers redirect resolves to /features', async () => {
  // Static export renders next/navigation's redirect() as a client-side
  // navigation shim (no server at request time) — assert the built page
  // references its /features target rather than shipping dead content.
  const html = await readFile(new URL('streamers/index.html', root), 'utf8');
  assert.match(html, /\/features/);
});

test('static discovery files are present in the build output', async () => {
  const robots = await readFile(new URL('robots.txt', root), 'utf8');
  const sitemap = await readFile(new URL('sitemap.xml', root), 'utf8');
  assert.match(robots, /Sitemap:/);
  assert.match(sitemap, /<urlset/);
  assert.match(sitemap, /bharatstudio\.in/);
  for (const page of PAGES) {
    if (page === 'index.html') continue;
    const route = `/${page.replace(/index\.html$/, '')}`;
    assert.match(sitemap, new RegExp(`https://bharatstudio\\.in${route.replace(/\//g, '\\/')}`), page);
  }
});

test('generated _headers has a per-route CSP with no unsafe-inline and a global security baseline', async () => {
  const headers = await readFile(new URL('_headers', root), 'utf8');

  // Global, non-CSP baseline applies to every route.
  assert.match(headers, /^\/\*$/m);
  assert.match(headers, /Strict-Transport-Security:/);
  assert.match(headers, /X-Content-Type-Options: nosniff/);
  assert.match(headers, /Permissions-Policy:.*camera=\(\)/);

  // Every route gets its own complete CSP block (Cloudflare _headers joins
  // repeated headers with a comma into independent, ANDed policies — a
  // single global script-src line would not be extendable per-route).
  for (const page of PAGES) {
    const route = page === 'index.html' ? '/' : `/${page.replace(/index\.html$/, '')}`;
    const routeLine = new RegExp(`^${route.replace(/[/]/g, '\\/')}$`, 'm');
    assert.match(headers, routeLine, `missing _headers block for ${route}`);
  }

  assert.doesNotMatch(headers, /unsafe-inline/);
  assert.doesNotMatch(headers, /unsafe-eval/);
  assert.match(headers, /script-src 'self'/);
  assert.match(headers, /style-src 'self'/);
  assert.match(headers, /connect-src 'self'/);
  assert.match(headers, /frame-ancestors 'none'/);

  const security = await readFile(new URL('.well-known/security.txt', root), 'utf8');
  assert.match(security, /^Contact: mailto:privacy@bharatstudio\.in$/m);
  assert.match(security, /^Canonical: https:\/\/bharatstudio\.in\/.well-known\/security\.txt$/m);
});

test('/creators ships the honest empty state by default, no fabricated creator rows, and connect-src stays self-only without a configured API origin', async () => {
  // This test runs against a default build (no NEXT_PUBLIC_ALERTS_API_ORIGIN
  // set) — see .env.example. If that ever changes for local/CI builds, this
  // assertion is the guard against silently shipping a widened CSP or fake
  // sample creators.
  const html = await readFile(new URL('creators/index.html', root), 'utf8');
  assert.match(html, /gallery goes live with the first cohort/i);
  assert.doesNotMatch(html, /sample creator/i);

  const headers = await readFile(new URL('_headers', root), 'utf8');
  const creatorsBlock = headers.split('\n\n').find((block) => block.startsWith('/creators/\n'));
  assert.ok(creatorsBlock, 'missing _headers block for /creators/');
  assert.match(creatorsBlock, /connect-src 'self';/, 'connect-src must stay self-only when NEXT_PUBLIC_ALERTS_API_ORIGIN is unset');
});
