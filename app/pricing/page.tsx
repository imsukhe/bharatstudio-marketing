import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { MultiCompareTable } from '@/components/CompareTable'

export const metadata: Metadata = {
  title: 'BharatStudio Alerts pricing',
  description: 'Compare BharatStudio Free, Pro, Creator and Studio plans for Alerts, which today also carries Companion access.',
  alternates: { canonical: 'https://bharatstudio.in/pricing/' },
}

const PLANS = [
  {
    label: 'Free', price: '₹0', body: 'Start with the core support experience.',
    features: ['Public tip page', '1 active queue', 'Basic (browser) TTS', 'Companion access', '8 Companion action slots', 'BharatStudio watermark on tip page and alert'],
    cta: 'Start free', featured: false,
  },
  {
    label: 'Pro', price: '₹199', body: 'More control for a growing stream.',
    features: ['2 active queues', 'Premium AI TTS — 20,000 chars/month', 'Quiet mode', 'Companion access', '16 Companion action slots', 'No watermark'],
    cta: 'Choose Pro', featured: false,
  },
  {
    label: 'Creator', price: '₹399', body: 'Deeper customisation and creator operations.',
    features: ['3 active queues', 'Premium AI TTS — 40,000 chars/month', 'Priority queue mode', 'Queue approval required', '2 moderator seats', 'Companion access', '32 Companion action slots'],
    cta: 'Choose Creator', featured: true,
  },
  {
    label: 'Studio', price: '₹599', body: 'The broadest individual creator plan.',
    features: ['5 active queues', 'Premium AI TTS — 60,000 chars/month', 'Priority queue mode', 'Queue approval required', '5 moderator seats', 'Companion access', '64 Companion action slots'],
    cta: 'Choose Studio', featured: false,
  },
]

const COMPARISON_ROWS = [
  ['Public tip page and creator-direct flow', 'Included', 'Included', 'Included', 'Included'],
  ['BharatStudio commission', '0%', '0%', '0%', '0%'],
  ['Active queues', '1', '2', '3', '5'],
  ['Queue modes', 'FIFO', '+ stacked, pills, aggregated', '+ priority', 'Same as Creator'],
  ['Queue approval required', '—', '—', 'Yes', 'Yes'],
  ['On-screen items at once', '3', '5', '8', '12'],
  ['Message character ceiling', '100', '150', '300', '500'],
  ['Alert display time', '6s', '8s', '12s', '20s'],
  ['Basic (browser) TTS', 'Yes', 'Yes', 'Yes', 'Yes'],
  ['Premium AI TTS (11 Indian languages)', '—', '20,000 chars/mo', '40,000 chars/mo', '60,000 chars/mo'],
  ['Quiet mode', '—', 'Yes', 'Yes', 'Yes'],
  ['Moderator seats', '0', '0', '2', '5'],
  ['BharatStudio watermark', 'Yes', '—', '—', '—'],
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
          <div className="eyebrow">BharatStudio Alerts — plans</div>
          <h1>Pick the room you need.</h1>
          <p className="lede">
            These are the Alerts plans — the only BharatStudio product that needs an account.
            Every plan includes the core Alerts journey, with capabilities controlled by the
            current entitlement version. Companion is a separate product that works alongside
            Alerts; today, Companion access ships as part of every Alerts plan.
          </p>
          <p className="lede">
            <strong>0% commission on every plan.</strong> BharatStudio charges a flat monthly
            subscription, not a cut of what your viewers send you.
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
                <Link href={`/download/?plan=${label.toLowerCase()}`} className={featured ? 'btn-primary' : 'btn-ghost'}>{cta}</Link>
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
          <MultiCompareTable
            firstHead="Capability"
            heads={['Free', 'Pro', 'Creator', 'Studio']}
            rows={COMPARISON_ROWS.map(([feature, ...values]) => ({ feature, values }))}
          />
        </div>
      </section>

      <section className="section" data-product="stream">
        <div className="container grid grid-two">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">BharatStudio Stream</div>
              <h2>Its own pricing, no account needed.</h2>
              <p>Stream is a separate mobile app with its own pricing — it is not billed through an Alerts plan and does not require a BharatStudio account. See <Link href="/stream/" className="text-link">the Stream page →</Link> for what it does.</p>
            </div>
          </article>
          <article className="card-bezel" data-product="mirror">
            <div className="card-inner panel">
              <div className="label">BharatStudio Mirror</div>
              <h2>One licence key. No account, no subscription page here.</h2>
              <p>Mirror runs LAN-only against a local licence key — not a BharatStudio account, and not an Alerts plan. See <Link href="/mirror/" className="text-link">the Mirror page →</Link> for details.</p>
            </div>
          </article>
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
