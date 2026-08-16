import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { AlertDemoWidget } from '@/components/AlertDemo'

export default function HomePage() {
  return (
    <main>
      <Nav />

      <header className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">The creator control room for Bharat</div>
            <h1>
              Make every live moment feel <span className="gradient-text">like yours.</span>
            </h1>
            <p className="lede">
              BharatStudio connects the public support experience with the tools creators use
              while they stream: Alerts for viewer support and Companion for authorised
              broadcast operations.
            </p>
            <div className="actions">
              <Link href="/apps/alerts/" className="btn-primary">Explore Alerts</Link>
              <Link href="/apps/companion/" className="btn-ghost">Explore Companion</Link>
            </div>
          </div>
          <div className="hero-visual-frame" aria-label="BharatStudio product preview">
            <AlertDemoWidget />
          </div>
        </div>
      </header>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="label">One brand. Two products.</div>
              <h2>Everything has a clear job.</h2>
            </div>
            <p>Start with the part of BharatStudio you need today. Add the other surface when it makes your setup better.</p>
          </div>
          <div className="grid grid-two">
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="icon-box">01</div>
                <div className="label">BharatStudio Alerts</div>
                <h3>Support that reaches the stream.</h3>
                <p>Creator-direct tipping, a public tip page, browser-source overlays, configurable queues, moderation and history.</p>
                <Link href="/apps/alerts/" className="text-link">Explore Alerts →</Link>
              </div>
            </article>
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="icon-box">02</div>
                <div className="label">BharatStudio Companion</div>
                <h3>Your broadcast, at a glance.</h3>
                <p>Web, iOS, Android and optional native desktop surfaces for authorised state, operations and consented local controls.</p>
                <Link href="/apps/companion/" className="text-link">Explore Companion →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="label">Why BharatStudio</div>
              <h2>Designed for confidence while you are live.</h2>
            </div>
            <p>Clear product boundaries keep your broadcast simple and your accepted records durable.</p>
          </div>
          <div className="grid grid-four">
            {[
              { icon: '↗', title: 'Made for India', body: 'Creator-first pricing, INR support and an experience shaped for local languages and streaming habits.' },
              { icon: '◎', title: 'Stay in control', body: 'Choose when alerts are loud, quiet, stacked, moderated or shown only to your operator view.' },
              { icon: '▣', title: 'Browser-source ready', body: 'Use a scoped overlay URL in OBS. Rotate or revoke it from the authorised Alerts dashboard.' },
              { icon: '✓', title: 'Durable by design', body: 'Plan, display and Companion limits never erase accepted payment or alert evidence.' },
            ].map(({ icon, title, body }) => (
              <article key={title} className="card-bezel feature-card">
                <div className="card-inner panel">
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
        <div className="container grid grid-two">
          <article className="card-bezel card-bezel--gold">
            <div className="card-inner panel">
              <div className="label">Start with Alerts</div>
              <h2>Turn support into a stream moment.</h2>
              <p>Set up your public tip page, connect the browser source and make the experience yours with approved styles and queue controls.</p>
              <div className="actions">
                <Link href="/setup/" className="btn-primary">See the setup guide</Link>
              </div>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Add Companion</div>
              <h2>Keep the broadcast in view.</h2>
              <p>See recent activity, health, connection state and server-authorised controls across the surfaces that fit your setup.</p>
              <div className="actions">
                <Link href="/apps/companion/" className="btn-ghost">Meet Companion</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">A clear promise</div>
              <h2>Support should feel personal. Operations should feel calm.</h2>
              <p className="lede">
                BharatStudio keeps the public experience focused and the creator experience
                powerful — without exposing your private dashboard, payment records or
                operational details on the marketing site.
              </p>
              <div className="actions">
                <Link href="/features/" className="btn-ghost">View the product map</Link>
                <Link href="/pricing/" className="text-link">Compare plans →</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
