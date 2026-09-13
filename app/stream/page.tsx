import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio Stream — go live from your phone',
  description:
    'BharatStudio Stream is a mobile live-streaming app. No BharatStudio account needed, and separate pricing from Alerts.',
  alternates: { canonical: 'https://bharatstudio.in/stream/' },
}

export default function StreamPage() {
  return (
    <main data-product="stream">
      <Nav />

      <header className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">BharatStudio Stream</div>
            <h1>
              Go live from your phone. <span className="gradient-text">No account needed.</span>
            </h1>
            <p className="lede">
              Stream is a mobile live-streaming app — camera, audio and broadcast controls in your
              pocket. It does not require a BharatStudio account, and it is priced and sold
              separately from Alerts.
            </p>
            <div className="actions">
              <Link href="/download/" className="btn-primary">Get Stream</Link>
              <Link href="/pricing/" className="text-link">See pricing →</Link>
            </div>
            <div className="metric-row">
              <div className="metric"><strong>No account</strong><span>open the app and go live</span></div>
              <div className="metric"><strong>Own pricing</strong><span>separate from Alerts plans</span></div>
              <div className="metric"><strong>Mobile-first</strong><span>iOS and Android</span></div>
            </div>
          </div>
        </div>
      </header>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="label">What Stream does</div>
              <h2>Broadcast from the device you already have.</h2>
            </div>
            <p>Stream handles the capture and broadcast side — camera, mic, scene basics and a stable outgoing connection.</p>
          </div>
          <div className="bento-grid">
            <article className="card-bezel bento-tile bento-tile--lg">
              <div className="card-inner panel bento-tile-inner">
                <div className="icon-box">▶</div>
                <h3>Mobile broadcast</h3>
                <p>Stream directly from your phone's camera and microphone, with on-device controls for the essentials.</p>
              </div>
            </article>
            <article className="card-bezel bento-tile">
              <div className="card-inner panel bento-tile-inner">
                <div className="icon-box">◈</div>
                <h3>Outbound connection</h3>
                <p>A stable outgoing broadcast connection to the destination you configure — set up per stream.</p>
              </div>
            </article>
            <article className="card-bezel bento-tile">
              <div className="card-inner panel bento-tile-inner">
                <div className="icon-box">✦</div>
                <h3>No BharatStudio account</h3>
                <p>Stream works on its own. It doesn't ask for the account Alerts and Companion use.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Where destination support stands today</div>
              <h2>We're not going to claim more than what's live.</h2>
              <p>
                Destination platform connectors are in active development. We publish exactly
                which destinations are available, and when, once each one has cleared its own
                platform approval — not before. Check back here or on{' '}
                <Link href="/status/" className="text-link">system status</Link> for the current
                state.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container band">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Pair it with Alerts</div>
              <h2>Streaming and viewer support work together.</h2>
              <p>BharatStudio Alerts adds public tipping and on-screen alerts to any stream — including one broadcast with Stream. Alerts needs its own account and its own plan.</p>
              <Link href="/alerts/" className="text-link">Explore Alerts →</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">On the same device</div>
              <h2>Mirroring your phone instead?</h2>
              <p>BharatStudio Mirror puts your phone's screen on your desktop over your local network — a different product, its own licence key, no account either.</p>
              <Link href="/mirror/" className="text-link">Explore Mirror →</Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
