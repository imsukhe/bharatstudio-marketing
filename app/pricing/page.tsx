import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio pricing — Alerts with Companion access',
  description: 'Compare BharatStudio Free, Pro, Creator and Studio plans for Alerts and Companion.',
  alternates: { canonical: 'https://bharatstudio.in/pricing/' },
}

const PLANS = [
  {
    label: 'Free', price: '₹0', body: 'Start with the core support experience.',
    features: ['Public tip page', 'Starter alert experience', 'Companion access', '8 Companion action slots'],
    cta: 'Start free', featured: false,
  },
  {
    label: 'Pro', price: '₹199', body: 'More control for a growing stream.',
    features: ['Expanded configuration', 'More queue and presentation options', 'Companion access', '16 Companion action slots'],
    cta: 'Choose Pro', featured: false,
  },
  {
    label: 'Creator', price: '₹399', body: 'Deeper customisation and creator operations.',
    features: ['Creator configuration set', 'Expanded queues and controls', 'Companion access', '32 Companion action slots'],
    cta: 'Choose Creator', featured: true,
  },
  {
    label: 'Studio', price: '₹499', body: 'The broadest individual creator plan.',
    features: ['Studio configuration set', 'Highest v1 individual limits', 'Companion access', '64 Companion action slots'],
    cta: 'Choose Studio', featured: false,
  },
]

const COMPARISON_ROWS = [
  ['Public tip page and creator-direct flow', 'Included', 'Included', 'Included', 'Included'],
  ['Approved alert library access', 'Starter', 'Expanded', 'Creator', 'Full v1 individual catalogue'],
  ['Customisation', 'Default / one style', 'Expanded', 'Advanced', 'Broadest individual set'],
  ['Companion action slots', '8', '16', '32', '64'],
  ['Companion surfaces', 'Web + mobile access', 'Web + mobile access', 'Web + mobile access', 'Web + mobile + desktop eligibility'],
  ['Accepted payment/alert evidence', 'Never discarded by limits', 'Never discarded by limits', 'Never discarded by limits', 'Never discarded by limits'],
]

export default function PricingPage() {
  return (
    <main>
      <Nav />

      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">BharatStudio plans</div>
          <h1>Pick the room you need.</h1>
          <p className="lede">
            Every plan includes the core Alerts journey. Companion is the connected operational
            surface, with capabilities controlled by the current entitlement version.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="price-grid">
            {PLANS.map(({ label, price, body, features, cta, featured }) => (
              <article key={label} className={featured ? 'price-card featured' : 'price-card'}>
                {featured && <span className="ribbon">Most control</span>}
                <div className="label">{label}</div>
                <div className="price">{price} <small>/ month</small></div>
                <p>{body}</p>
                <ul>
                  {features.map((f) => (
                    <li key={f}><span className="check">✓</span> {f}</li>
                  ))}
                </ul>
                <Link href="/download/" className={featured ? 'btn-primary' : 'btn-ghost'}>{cta}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="label">Plan comparison</div>
              <h2>What changes by plan?</h2>
            </div>
            <p>Payment and alert durability are platform-wide guarantees. Plan limits affect new configuration and presentation only.</p>
          </div>
          <div className="table-wrap">
            <table className="comparison">
              <thead>
                <tr><th>Capability</th><th>Free</th><th>Pro</th><th>Creator</th><th>Studio</th></tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => <td key={i}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-two">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Annual billing</div>
              <h2>Ten months paid. Twelve months of service.</h2>
              <p>Annual service follows the approved offer: ten months are charged for twelve months of service. Auto-renewal requires clear consent, notice and self-serve cancellation.</p>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Price protection</div>
              <h2>Clear rules for early subscribers.</h2>
              <p>An early paid subscriber keeps the subscribed tier price for 12 months while continuously subscribed. A 30-day payment-failure grace period preserves protection; explicit cancellation ends it, and a later rejoin uses the then-current price.</p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
