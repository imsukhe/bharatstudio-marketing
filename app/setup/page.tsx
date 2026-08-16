import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Set up BharatStudio Alerts with OBS',
  description: 'Set up a BharatStudio Alerts public tip page, overlay session and OBS browser source.',
  alternates: { canonical: 'https://bharatstudio.in/setup/' },
}

const STEPS = [
  { title: 'Create or open your creator channel', body: 'Sign in through the approved account flow and open the channel you want to configure. Channel roles and plan entitlements are server-authoritative.' },
  { title: 'Configure your public tip page', body: 'Set the creator-facing page details, accepted minimum and approved payment configuration. Never put private provider secrets in a public page or browser source.' },
  { title: 'Choose alert behavior', body: 'Select a template, language, text, duration, queue behavior, quiet mode and moderation rules within your plan. Preview long names and messages before going live.' },
  { title: 'Create an overlay session', body: 'Create a scoped session from the authorised Alerts dashboard. Copy the generated URL exactly; do not post it publicly. Rotate or revoke it if it is exposed.' },
  { title: 'Add a Browser Source in OBS', body: 'In OBS, add a Browser Source to the selected scene, paste the scoped overlay URL and choose the dimensions recommended by the preview. Keep the source on the same scene where you want alerts.' },
  { title: 'Send a test alert', body: 'Use the dashboard test action. Verify entry animation, readable hold state, exit/reset, queue ordering and reduced-motion behavior before accepting live support.' },
]

export default function SetupPage() {
  return (
    <main>
      <Nav />

      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Alerts setup</div>
          <h1>From public tip page to OBS in a few steps.</h1>
          <p className="lede">
            This guide describes the creator flow. The final provider and production URLs are
            published only after the corresponding release gates are complete.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container article">
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
          <div className="notice">
            If an overlay disconnects, do not delete or recreate payment records. Reconnect the
            source or use the cursor/replay path; accepted alert evidence remains durable.
          </div>
          <h2>Before going live</h2>
          <ul>
            <li>Confirm your public page shows the intended creator and accepting-tips state.</li>
            <li>Confirm the browser source is scoped to your channel and not shared.</li>
            <li>Test long display names, multiple queues and quiet/pro broadcast mode.</li>
            <li>Keep a recovery contact available during the first live session.</li>
          </ul>
          <div className="actions">
            <Link href="/apps/alerts/" className="btn-primary">Open Alerts</Link>
            <Link href="/support/" className="btn-ghost">Need help? Contact support</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
