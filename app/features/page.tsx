import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { AlertCard } from '@/components/AlertCard'

export const metadata: Metadata = {
  title: 'BharatStudio Alerts features',
  description: 'Explore BharatStudio Alerts and Companion, the connected surface creators pair with it.',
  alternates: { canonical: 'https://bharatstudio.in/features/' },
}

const ALERTS_FEATURES = [
  { icon: '₹', title: 'Public tip page', body: 'Creator-specific public surface with amount, message and payment-status guidance.', span: 'lg' },
  { icon: '✦', title: 'Alert templates', body: 'Approved visual library with 4 built-in themes, Lottie animation, custom sound and AI voice in 11 Indian languages (paid tiers).', span: 'wide' },
  { icon: '≋', title: 'Queue control', body: 'FIFO, multi-queue routing, stacking, aggregation and operator actions within approved limits.', span: 'sm' },
  { icon: '▣', title: 'OBS browser source', body: 'Scoped overlay sessions with setup, rotation, revocation, reconnect and replay behavior.', span: 'sm' },
  { icon: '◎', title: 'Moderation', body: 'Approve, hold, suppress or replay alert content without deleting the accepted record.', span: 'sm' },
  { icon: '⟲', title: 'History', body: 'Review alert status and delivery history with role-scoped visibility, a searchable ledger and CSV export.', span: 'sm' },
  { icon: '◌', title: 'Quiet mode', body: 'Keep tips off-screen, show subtle pills, or require operator approval for sensitive scenes.', span: 'sm' },
  { icon: '◈', title: 'Durable recovery', body: 'Disconnects, worker retries and display limits do not drop accepted payment or alert evidence — a 72-hour buffer auto-resyncs on reconnect.', span: 'sm' },
]

const COMPANION_FEATURES = [
  { icon: '⬡', title: 'Health and connection', body: 'View freshness, overlay connection and helper state from an authorised surface.', span: 'lg' },
  { icon: '◫', title: 'Bounded actions', body: 'Pause, resume and test approved queues with server-side role and lease checks.', span: 'wide' },
  { icon: '◔', title: 'Recent activity', body: 'See what arrived and what needs attention without opening the full dashboard.', span: 'sm' },
  { icon: '⌗', title: 'Sessions and devices', body: 'Review active sessions and revoke access through the server-owned account surface.', span: 'sm' },
  { icon: 'M', title: 'Mobile', body: 'iOS and Android companion access for context and approved actions.', span: 'sm' },
  { icon: 'D', title: 'Desktop helper', body: 'Windows and macOS helper for consented local OBS integrations when enabled.', span: 'sm' },
  { icon: '◉', title: 'Notifications', body: 'Operational notification preferences without exposing donor or payment payloads.', span: 'sm' },
  { icon: '✚', title: 'Recovery help', body: 'Bounded guidance for connection, session and stream setup issues.', span: 'sm' },
]

export default function FeaturesPage() {
  return (
    <main>
      <Nav />

      <header className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">BharatStudio Alerts</div>
            <h1>One product. <span className="gradient-text">Zero commission.</span></h1>
            <p className="lede">
              Alerts handles viewer support and on-screen delivery. Companion is a separate
              product that works alongside Alerts, giving authorised people the context and
              controls they need while the stream is live. Today, Companion access ships as part
              of every Alerts plan, so anyone on Alerts already has it.
            </p>
            <p className="lede">
              Looking for BharatStudio Stream or BharatStudio Mirror? Those are separate products
              with their own pages — see <Link href="/stream/" className="text-link">Stream</Link> and{' '}
              <Link href="/mirror/" className="text-link">Mirror</Link>.
            </p>
            <div className="actions">
              <Link href="/pricing/" className="btn-primary">See pricing</Link>
              <Link href="/compare/" className="text-link">Compare plans →</Link>
            </div>
          </div>
          <div className="hero-visual-frame" aria-label="BharatStudio Alerts preview">
            <AlertCard
              donor="Priya"
              amount={701}
              message="itni der se dekh rahi hu, finally sub ho gayi 🎉"
              visible={true}
              showBadge={false}
            />
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="label">Alerts</div>
              <h2>Everything around the alert.</h2>
            </div>
            <p>From public tipping to the browser source in OBS, Alerts keeps the accepted event and its presentation connected.</p>
          </div>
          <div className="bento-grid">
            {ALERTS_FEATURES.map(({ icon, title, body, span }) => (
              <article
                key={title}
                className={`card-bezel bento-tile${span === 'lg' ? ' bento-tile--lg' : span === 'wide' ? ' bento-tile--wide' : ''}`}
              >
                <div className="card-inner panel bento-tile-inner">
                  <div className="icon-box">{icon}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="label">Companion</div>
              <h2>The operational layer.</h2>
            </div>
            <p>Companion is a separate product that works alongside Alerts; today, access ships as part of every Alerts plan, with capabilities controlled by plan entitlements.</p>
          </div>
          <div className="bento-grid">
            {COMPANION_FEATURES.map(({ icon, title, body, span }) => (
              <article
                key={title}
                className={`card-bezel bento-tile${span === 'lg' ? ' bento-tile--lg' : span === 'wide' ? ' bento-tile--wide' : ''}`}
              >
                <div className="card-inner panel bento-tile-inner">
                  <div className="icon-box">{icon}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Current launch boundary</div>
              <h2>Clear boundaries are part of the product.</h2>
              <p>External platform ingestion, organisation-level administration, bulk allocation, payment routing and settlement controls are outside the current launch surface. The site will publish them only after their requirements, implementation and external reviews are complete.</p>
              <Link href="/docs/" className="text-link">Read the creator docs →</Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
