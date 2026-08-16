import type { NextConfig } from 'next'

// Static export — this repository owns only the public marketing surface and
// must not run a server, hold secrets, or reach the database/payment
// boundary (bharatstudio-marketing repository charter). Output ships as
// static HTML/CSS/JS to Cloudflare Pages, matching the previous deployment
// target. Security headers live in public/_headers (Cloudflare Pages'
// static-header convention) since a static export has no request-time
// headers() hook to attach them to.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // emit <route>/index.html — matches every internal
  // link (`/apps/alerts/`), sitemap.xml, and the CSP generator's route
  // mapping. Without this, static export emits `<route>.html` files that
  // don't resolve for trailing-slash URLs on Cloudflare Pages.
  images: {
    unoptimized: true, // static export cannot use the Next.js Image server
  },
}

export default nextConfig
