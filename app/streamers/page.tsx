import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

/*
 * /streamers — redirects to /features.
 *
 * The legacy BharatStudio Alerts site consolidated /streamers into /features
 * (apps/web/src/app/(marketing)/streamers/page.tsx already redirected there
 * via next/navigation's redirect()). That call only works with a live
 * Next.js server at request time — verified empirically here: calling it
 * from a Server Component under `output: 'export'` builds a broken
 * "__next_error__" fallback page instead of a working redirect, since
 * static export has no server to issue the 3xx. A <meta http-equiv=
 * "refresh"> plus a visible fallback link is the correct static-export
 * equivalent — no inline <script>, CSP-compliant by construction.
 */
export const metadata: Metadata = {
  title: 'Redirecting to BharatStudio features…',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://bharatstudio.in/features/' },
}

export default function StreamersRedirectPage() {
  return (
    <main>
      {/*
       * React 19 hoists <meta>/<title>/<link> rendered anywhere in the tree
       * up into <head> — verified in the built output, not assumed. This is
       * the CSP-safe, no-inline-script way to issue a client-side redirect
       * from a statically-exported page.
       */}
      <meta httpEquiv="refresh" content="0; url=/features/" />
      <Nav />
      <section className="page-hero">
        <div className="container">
          <div className="label">Redirecting</div>
          <h1>This page moved to Features.</h1>
          <p className="lede">
            /streamers and /features cover the same product map now. If you are not redirected
            automatically, use the link below.
          </p>
          <div className="actions">
            <Link href="/features/" className="btn-primary">Go to Features</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
