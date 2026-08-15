import assert from 'node:assert/strict';
import { access, readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import test from 'node:test';

const root = new URL('../public/', import.meta.url);
const pages = ['index.html', 'apps/alerts/index.html', 'apps/companion/index.html', 'pricing/index.html', 'support/index.html', 'legal/index.html'];

function localTargetPath(href) {
  if (!href.startsWith('/') || href.startsWith('//')) return null;
  const withoutQuery = href.split(/[?#]/, 1)[0];
  if (withoutQuery === '/') return 'index.html';
  if (withoutQuery.endsWith('/')) return `${withoutQuery.slice(1)}index.html`;
  return withoutQuery.slice(1);
}

test('public marketing pages have safe metadata and navigation', async () => {
  for (const page of pages) {
    const html = await readFile(new URL(page, root), 'utf8');
    assert.match(html, /<title>[^<]+<\/title>/, page);
    assert.match(html, /<meta name="description" content="[^"]+"\s*\/?\s*>/, page);
    assert.match(html, /href="\/styles\.css"|href="\.\.\/\.\.\/styles\.css"/, page);
    assert.match(html, /BharatStudio/, page);
    assert.doesNotMatch(html, /DATABASE_URL|RAZORPAY_KEY|client_secret|x-razorpay/i, page);
    assert.doesNotMatch(html, /YouTube|SuperChat|Enterprise/i, page);
  }
});

test('all published internal links resolve to a checked-in public target', async () => {
  for (const page of pages) {
    const html = await readFile(new URL(page, root), 'utf8');
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1]);
    for (const href of hrefs) {
      const target = localTargetPath(href);
      if (!target) continue;
      await access(new URL(target, root));
    }
  }
});

test('static discovery files are present', async () => {
  const robots = await readFile(new URL('robots.txt', root), 'utf8');
  const sitemap = await readFile(new URL('sitemap.xml', root), 'utf8');
  assert.match(robots, /Sitemap:/);
  assert.match(sitemap, /<urlset/);
  assert.match(sitemap, /bharatstudio\.in/);
});

test('static deployment security boundary is present and does not enable browser integrations', async () => {
  const headers = await readFile(new URL('_headers', root), 'utf8');
  assert.match(headers, /Content-Security-Policy:/);
  assert.match(headers, /script-src 'none'/);
  assert.match(headers, /connect-src 'none'/);
  assert.match(headers, /frame-ancestors 'none'/);
  assert.match(headers, /Strict-Transport-Security:/);
  assert.match(headers, /Permissions-Policy:.*camera=\(\)/);

  const security = await readFile(new URL('.well-known/security.txt', root), 'utf8');
  assert.match(security, /^Contact: mailto:privacy@bharatstudio\.in$/m);
  assert.match(security, /^Expires: 2027-08-15T00:00:00\.000Z$/m);
  assert.match(security, /^Canonical: https:\/\/bharatstudio\.in\/.well-known\/security\.txt$/m);
});

test('support surface contains only the expected static page', async () => {
  const entries = await readdir(new URL('support/', root));
  assert.deepEqual(entries, ['index.html']);
  assert.equal(join('public', 'support', 'index.html'), 'public/support/index.html');
});
