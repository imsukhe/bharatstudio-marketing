import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

/*
 * Custom 404 — Next.js App Router's default not-found page uses inline
 * style attributes internally, which the committed CSP (style-src 'self',
 * no unsafe-inline) blocks. This page also gives a broken link the same
 * BharatStudio design system instead of framework boilerplate.
 */
export default function NotFound() {
  return (
    <main>
      <Nav />
      <section className="page-hero">
        <div className="container">
          <div className="label">404</div>
          <h1>This page moved, or never existed.</h1>
          <p className="lede">
            Check the link, or head back to the homepage. Product, pricing and setup guides are
            in the navigation above.
          </p>
          <div className="actions">
            <Link href="/" className="btn-primary">Back to home</Link>
            <Link href="/support/" className="btn-ghost">Contact support</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
