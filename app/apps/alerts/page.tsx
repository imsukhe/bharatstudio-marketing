import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio Alerts — Support that reaches the stream',
  description:
    'BharatStudio Alerts gives creators a public tip page, configurable browser-source overlays, durable queues and calm stream controls.',
  alternates: { canonical: 'https://bharatstudio.in/apps/alerts/' },
}

export default function AlertsPage() {
  return (
    <main>
      <Nav />

      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">BharatStudio Alerts</div>
          <h1>
            Turn support into a <span className="gradient-text">stream moment.</span>
          </h1>
          <p className="lede">
            A creator-direct tipping surface with a public tip page, browser-source overlay,
            configurable queues and a dashboard built to keep every accepted alert accounted for.
          </p>
          <div className="actions">
            <Link href="/setup/" className="btn-primary">Set up your overlay</Link>
            <Link href="/pricing/" className="btn-ghost">Compare plans</Link>
          </div>
          <div className="metric-row">
            <div className="metric"><strong>₹10</strong><span>default tip floor, configurable by creator</span></div>
            <div className="metric"><strong>1 URL</strong><span>scoped browser-source overlay setup</span></div>
            <div className="metric"><strong>4 plans</strong><span>Free, Pro, Creator and Studio</span></div>
            <div className="metric"><strong>0 drops</strong><span>accepted records are not discarded by limits</span></div>
          </div>
        </div>
      </header>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="label">The Alerts surface</div>
              <h2>Built around the moment.</h2>
            </div>
            <p>Every part of the creator flow has a job—from the public tip page to what appears in the scene.</p>
          </div>
          <div className="grid grid-four">
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="icon-box">₹</div>
                <h3>Public tipping</h3>
                <p>Give viewers a focused public page to support the creator with the approved payment flow.</p>
              </div>
            </article>
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="icon-box">✦</div>
                <h3>Configurable alerts</h3>
                <p>Choose approved styles, text, language, position, scale, motion and display timing — including AI voice in 11 Indian languages, Lottie animation and 4 built-in themes (paid tiers).</p>
              </div>
            </article>
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="icon-box">≋</div>
                <h3>Durable queues</h3>
                <p>Accepted alerts remain recoverable across disconnects, retries, display limits and worker failures — a 72-hour buffer auto-resyncs on reconnect.</p>
              </div>
            </article>
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="icon-box">◌</div>
                <h3>Quiet control</h3>
                <p>Hold, moderate, suppress, replay or keep an alert off-screen while preserving its record.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-two">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">For the viewer</div>
              <h2>A simple way to support.</h2>
              <p>The public tip page keeps the viewer journey focused. Creator-facing configuration, private history and operational controls stay behind the authorised product boundary.</p>
              <ul>
                <li>Creator-specific public tip page</li>
                <li>Clear amount and message guidance</li>
                <li>Provider-confirmed payment status</li>
                <li>Receipt and support pathways</li>
              </ul>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">For the creator</div>
              <h2>Make the alert yours.</h2>
              <p>Use the dashboard to set your minimum, configure queues and choose how each event behaves on stream. Higher plans unlock more configuration without changing the no-drop guarantee.</p>
              <ul>
                <li>Overlay sessions that can be rotated or revoked</li>
                <li>Per-queue styles, timing and presentation rules</li>
                <li>History, moderation and replay controls, with a searchable ledger and CSV export</li>
                <li>Browser-source setup built for OBS</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="label">Your scene, your rules</div>
              <h2>Show it. Stack it. Keep it quiet.</h2>
            </div>
            <p>Alerts supports the broadcast modes creators actually need—not every tip has to interrupt gameplay.</p>
          </div>
          <div className="grid">
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="icon-box">✦</div>
                <h3>Full alert mode</h3>
                <p>Show the selected animation, text, sound and optional TTS for moments you want the audience to see.</p>
              </div>
            </article>
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="icon-box">◌</div>
                <h3>Quiet / pro broadcast mode</h3>
                <p>Keep an alert in the dashboard, show a subtle pill or require operator approval before it reaches the scene.</p>
              </div>
            </article>
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="icon-box">≋</div>
                <h3>Queue presentation</h3>
                <p>Use FIFO by default, then configure one-by-one, stacked or aggregated presentation within your plan.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Works with your scene</div>
              <h2>One browser source.</h2>
              <p>Create a scoped overlay session, add it to OBS as a browser source, then rotate or revoke it whenever you need.</p>
              <Link href="/setup/" className="text-link">Read OBS setup →</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Want more control?</div>
              <h2>Companion is ready when you are.</h2>
              <p>Use Companion as the connected operational surface for recent alerts, health, connection state and bounded actions.</p>
              <Link href="/apps/companion/" className="text-link">Explore Companion →</Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
