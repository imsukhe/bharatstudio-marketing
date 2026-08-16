import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio features — Alerts and Companion',
  description: 'Explore the BharatStudio Alerts and Companion product surfaces for creators.',
  alternates: { canonical: 'https://bharatstudio.in/features/' },
}

const ALERTS_FEATURES = [
  { title: 'Public tip page', body: 'Creator-specific public surface with amount, message and payment-status guidance.' },
  { title: 'Alert templates', body: 'Approved visual library with language, text, branding, timing and motion configuration.' },
  { title: 'Queue control', body: 'FIFO, multi-queue routing, stacking, aggregation and operator actions within approved limits.' },
  { title: 'OBS browser source', body: 'Scoped overlay sessions with setup, rotation, revocation, reconnect and replay behavior.' },
  { title: 'Moderation', body: 'Approve, hold, suppress or replay alert content without deleting the accepted record.' },
  { title: 'History', body: 'Review alert status and delivery history with role-scoped visibility.' },
  { title: 'Quiet mode', body: 'Keep tips off-screen, show subtle pills, or require operator approval for sensitive scenes.' },
  { title: 'Durable recovery', body: 'Disconnects, worker retries and display limits do not drop accepted payment or alert evidence.' },
]

const COMPANION_FEATURES = [
  { title: 'Recent activity', body: 'See what arrived and what needs attention without opening the full dashboard.' },
  { title: 'Health and connection', body: 'View freshness, overlay connection and helper state from an authorised surface.' },
  { title: 'Bounded actions', body: 'Pause, resume and test approved queues with server-side role and lease checks.' },
  { title: 'Sessions and devices', body: 'Review active sessions and revoke access through the server-owned account surface.' },
  { title: 'Mobile', body: 'iOS and Android companion access for context and approved actions.' },
  { title: 'Desktop helper', body: 'Windows and macOS helper for consented local OBS integrations when enabled.' },
  { title: 'Notifications', body: 'Operational notification preferences without exposing donor or payment payloads.' },
  { title: 'Recovery help', body: 'Bounded guidance for connection, session and stream setup issues.' },
]

export default function FeaturesPage() {
  return (
    <main>
      <Nav />

      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Product map</div>
          <h1>Two products. One calmer broadcast.</h1>
          <p className="lede">
            Alerts handles viewer support and on-screen delivery. Companion gives authorised
            people the context and controls they need while the stream is live.
          </p>
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
          <div className="grid grid-four">
            {ALERTS_FEATURES.map(({ title, body }) => (
              <article key={title} className="card-bezel">
                <div className="card-inner panel">
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
            <p>Companion is included with the Alerts package for the current model, with capabilities controlled by plan entitlements.</p>
          </div>
          <div className="grid grid-four">
            {COMPANION_FEATURES.map(({ title, body }) => (
              <article key={title} className="card-bezel">
                <div className="card-inner panel">
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
