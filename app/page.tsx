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
            <div className="eyebrow">0% commission. Always.</div>
            <h1>
              Keep every rupee <span className="gradient-text">your viewers send you.</span>
            </h1>
            <p className="lede">
              No commission. No hidden fees. No checkout surprises. Alerts and Companion for
              viewer support and broadcast operations. Stream and Mirror for going live and
              mirroring your phone — no account needed for either.
            </p>
            <div className="actions">
              <Link href="/alerts/" className="btn-primary">Explore Alerts</Link>
              <Link href="/features/" className="text-link">See every product →</Link>
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
              <div className="label">One brand. Three products.</div>
              <h2>Everything has a clear job.</h2>
            </div>
            <p>Start with the part of BharatStudio you need today. Alerts and Companion require a BharatStudio account; Stream and Mirror don't.</p>
          </div>
          <div className="grid grid-three">
            <article className="card-bezel">
              <div className="card-inner panel panel--stretch">
                <div className="icon-box">01</div>
                <div className="label">BharatStudio Alerts</div>
                <h3>Support that reaches the stream.</h3>
                <p>Creator-direct tipping, a public tip page, browser-source overlays, configurable queues, moderation and history. Companion access ships alongside every plan today. Account required.</p>
                <Link href="/alerts/" className="text-link">Explore Alerts →</Link>
              </div>
            </article>
            <article className="card-bezel" data-product="stream">
              <div className="card-inner panel panel--stretch">
                <div className="icon-box">02</div>
                <div className="label">BharatStudio Stream</div>
                <h3>Go live from your phone.</h3>
                <p>Mobile live streaming with its own pricing. No BharatStudio account needed.</p>
                <Link href="/stream/" className="text-link">Explore Stream →</Link>
              </div>
            </article>
            <article className="card-bezel" data-product="mirror">
              <div className="card-inner panel panel--stretch">
                <div className="icon-box">03</div>
                <div className="label">BharatStudio Mirror</div>
                <h3>Your phone on your desktop.</h3>
                <p>LAN-only screen mirroring with a local licence key. No account, no cloud.</p>
                <Link href="/mirror/" className="text-link">Explore Mirror →</Link>
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
          <div className="bento-grid">
            {[
              { icon: '▣', title: 'Browser-source ready', body: 'Use a scoped overlay URL in OBS. Rotate or revoke it from the authorised Alerts dashboard.', span: 'lg' },
              { icon: '✓', title: 'Durable by design', body: 'Plan, display and Companion limits never erase accepted payment or alert evidence.', span: 'wide' },
              { icon: '↗', title: 'Made for India', body: 'Creator-first pricing, INR support and an experience shaped for local languages and streaming habits.', span: 'sm' },
              { icon: '◎', title: 'Stay in control', body: 'Choose when alerts are loud, quiet, stacked, moderated or shown only to your operator view.', span: 'sm' },
            ].map(({ icon, title, body, span }) => (
              <article
                key={title}
                className={`card-bezel feature-card bento-tile${span === 'lg' ? ' bento-tile--lg' : span === 'wide' ? ' bento-tile--wide' : ''}`}
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
                <Link href="/alerts/#companion" className="btn-ghost">Meet Companion</Link>
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
