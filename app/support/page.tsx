import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio support — help for creators',
  description: 'BharatStudio support for Alerts, Companion, OBS setup, payments and privacy concerns.',
  alternates: { canonical: 'https://bharatstudio.in/support/' },
}

export default function SupportPage() {
  return (
    <main>
      <Nav />

      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Support</div>
          <h1>Help that knows the stream.</h1>
          <p className="lede">
            Find setup guidance, report a problem or reach the right payment and privacy contact
            without exposing private account details in a public form.
          </p>
          <div className="actions">
            <a href="mailto:support@bharatstudio.in" className="btn-primary">Contact support</a>
            <Link href="/status/" className="btn-ghost">Check status</Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container grid grid-four">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Setup</div>
              <h3>Alerts and OBS</h3>
              <p>Public tip page, overlay session, browser source, queue and test-alert guidance.</p>
              <Link href="/setup/" className="text-link">Open setup →</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Companion</div>
              <h3>Connection and actions</h3>
              <p>Web, mobile, desktop, session, health and bounded control guidance.</p>
              <Link href="/docs/companion/" className="text-link">Open guide →</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Payments</div>
              <h3>Payment or refund</h3>
              <p>Provide only public receipt/reference details and an approximate time.</p>
              <Link href="/legal/refunds/" className="text-link">Payment support →</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Privacy</div>
              <h3>Data concern</h3>
              <p>Access, correction, deactivation or privacy questions.</p>
              <Link href="/legal/data-rights/" className="text-link">Data rights →</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-two">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Safe support</div>
              <h2>We never need your password.</h2>
              <p>Do not send Google passwords, Razorpay secrets, UPI PINs, overlay tokens, API keys or full payment credentials. Support can guide recovery and session revocation through approved flows.</p>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Incident path</div>
              <h2>When the stream is live.</h2>
              <p>Check the system status page, verify the overlay connection, preserve the public receipt/reference and contact support. Accepted payment and alert evidence remains independent from presentation.</p>
              <Link href="/status/" className="text-link">View status →</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container faq">
          <details>
            <summary>My alert is not showing. What should I check?</summary>
            <p>Confirm the OBS browser source is active, the scoped overlay session has not expired or been revoked, and the overlay can reconnect. Do not create a second payment because an alert is delayed.</p>
          </details>
          <details>
            <summary>Can I show tips quietly?</summary>
            <p>Yes. Alerts supports quiet/pro broadcast modes, subtle presentation, moderation and operator approval according to your configuration and plan.</p>
          </details>
          <details>
            <summary>How do I report a security issue?</summary>
            <p>Use <a href="mailto:security@bharatstudio.in">security@bharatstudio.in</a> and send no credentials or live data.</p>
          </details>
        </div>
      </section>

      <Footer />
    </main>
  )
}
