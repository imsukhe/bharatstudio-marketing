import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio contact and grievance',
  description: 'BharatStudio support, privacy and security contacts.',
  alternates: { canonical: 'https://bharatstudio.in/legal/contact/' },
}

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <section className="section">
        <div className="container">
          <div className="eyebrow">Contact and grievance</div>
          <h1>Reach the right team.</h1>
          <p className="lede">Use the minimum information needed. BharatStudio support will never ask for your password, UPI PIN, provider secret or overlay token.</p>
          <div className="grid grid-four">
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="label">Product and setup</div>
                <h3>Support</h3>
                <p>Alerts, Companion, OBS setup and account recovery.</p>
                <a href="mailto:support@bharatstudio.in" className="text-link">support@bharatstudio.in →</a>
              </div>
            </article>
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="label">Privacy</div>
                <h3>Privacy concern</h3>
                <p>Access, correction, deactivation or privacy questions.</p>
                <a href="mailto:privacy@bharatstudio.in" className="text-link">privacy@bharatstudio.in →</a>
              </div>
            </article>
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="label">Security</div>
                <h3>Vulnerability report</h3>
                <p>Report a security issue without including secrets or live data.</p>
                <a href="mailto:security@bharatstudio.in" className="text-link">security@bharatstudio.in →</a>
              </div>
            </article>
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="label">Payments</div>
                <h3>Payment concern</h3>
                <p>Receipt, order, refund and provider-status questions.</p>
                <Link href="/legal/refunds/" className="text-link">Payment support →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
