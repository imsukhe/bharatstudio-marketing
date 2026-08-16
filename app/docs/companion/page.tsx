import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio Companion guide',
  description: 'Understand BharatStudio Companion surfaces, roles, sessions, health and recovery.',
  alternates: { canonical: 'https://bharatstudio.in/docs/companion/' },
}

const STEPS = [
  { title: 'Sign in', body: 'Use the approved account sign-in flow. The server decides which channels and roles are available.' },
  { title: 'Select a channel', body: 'All actions are scoped to an authorised channel. A valid queue target is required for Companion actions.' },
  { title: 'Review state', body: 'Check recent activity, connection health, sessions, notifications and available feature locks.' },
  { title: 'Perform a bounded action', body: 'Pause, resume or send a synthetic test alert only when your role, lease and plan allow it.' },
]

export default function CompanionDocsPage() {
  return (
    <main>
      <Nav />

      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Companion guide</div>
          <h1>Keep the broadcast in view.</h1>
          <p className="lede">
            Companion is a connected surface for authorised operations. It is not the source of
            payment truth and it cannot bypass server roles or plan entitlements.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container article">
          <h2>What Companion includes</h2>
          <p>Use the web console, mobile app or native desktop helper according to your platform and release availability. The same account can access the surfaces allowed for the channel and plan.</p>
          <div className="steps">
            {STEPS.map(({ title, body }) => (
              <div className="step" key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
          <h2>Recovery</h2>
          <p>If Companion is unavailable, Alerts continues to own accepted payments, queues, alert delivery and replay. Revoke the affected session, reconnect the surface and contact support if the issue persists.</p>
          <Link href="/support/" className="text-link">Open support →</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
