import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio legal, privacy and policies',
  description: 'BharatStudio public legal, privacy, refund and product policy pages.',
  alternates: { canonical: 'https://bharatstudio.in/legal/' },
}

export default function LegalPage() {
  return (
    <main>
      <Nav />

      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Legal and privacy</div>
          <h1>Clear product boundaries.</h1>
          <p className="lede">
            These pages explain how BharatStudio presents its products, handles account and
            support information, and routes payment or privacy questions. Dated legal/provider
            approval is required before public production launch.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container grid grid-four">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Privacy</div>
              <h3>Privacy policy</h3>
              <p>Account, payment, alert, support and operational data boundaries.</p>
              <Link href="/legal/privacy/" className="text-link">Read privacy →</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Terms</div>
              <h3>Terms of use</h3>
              <p>Product use, creator responsibilities, acceptable use and service changes.</p>
              <Link href="/legal/terms/" className="text-link">Read terms →</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Payments</div>
              <h3>Refunds</h3>
              <p>How to raise a payment or refund concern without sharing sensitive data.</p>
              <Link href="/legal/refunds/" className="text-link">Read refunds →</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Contact</div>
              <h3>Grievance and contact</h3>
              <p>Privacy, security, support and formal concern routes.</p>
              <Link href="/legal/contact/" className="text-link">View contacts →</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-two">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Open source</div>
              <h2>Licenses and notices.</h2>
              <p>Third-party libraries and product notices are listed separately from the marketing copy.</p>
              <Link href="/legal/licenses/" className="text-link">View notices →</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Publication status</div>
              <h2>Versioned before launch.</h2>
              <p>Pricing, refund, privacy, retention, provider, tax and app-store statements are published with effective dates only after the required review evidence exists.</p>
              <Link href="/support/" className="text-link">Ask a question →</Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
