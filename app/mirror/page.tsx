import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio Mirror — your phone on your desktop',
  description:
    'BharatStudio Mirror mirrors your phone screen to your desktop over your local network. No account, no cloud — a local licence key, LAN-only.',
  alternates: { canonical: 'https://bharatstudio.in/mirror/' },
}

export default function MirrorPage() {
  return (
    <main data-product="mirror">
      <Nav />

      <header className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">BharatStudio Mirror</div>
            <h1>
              Your phone on your desktop. <span className="gradient-text">No account. No cloud.</span>
            </h1>
            <p className="lede">
              Mirror sends your phone's screen to your desktop over your own local network. It
              needs no BharatStudio account and no BharatStudio backend — just a local licence
              key, stored on your machine.
            </p>
            <div className="actions">
              <Link href="/download/" className="btn-primary">Get Mirror</Link>
              <Link href="/pricing/" className="text-link">See pricing →</Link>
            </div>
            <div className="metric-row">
              <div className="metric"><strong>No account</strong><span>a local licence key instead</span></div>
              <div className="metric"><strong>LAN-only</strong><span>no network egress beyond your local network for mirroring</span></div>
              <div className="metric"><strong>Desktop</strong><span>Windows and macOS</span></div>
            </div>
          </div>
        </div>
      </header>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="label">What Mirror does</div>
              <h2>The most standalone product in the lineup.</h2>
            </div>
            <p>Mirror is built to work with nothing but your phone, your desktop and your local network.</p>
          </div>
          <div className="bento-grid">
            <article className="card-bezel bento-tile bento-tile--lg">
              <div className="card-inner panel bento-tile-inner">
                <div className="icon-box">▣</div>
                <h3>Screen mirroring</h3>
                <p>Mirror your phone's screen to your desktop, over your local network, for capture, review or recording.</p>
              </div>
            </article>
            <article className="card-bezel bento-tile">
              <div className="card-inner panel bento-tile-inner">
                <div className="icon-box">⛭</div>
                <h3>MP4 recording</h3>
                <p>Record the mirrored session locally as MP4.</p>
              </div>
            </article>
            <article className="card-bezel bento-tile">
              <div className="card-inner panel bento-tile-inner">
                <div className="icon-box">🔑</div>
                <h3>Licence key, not an account</h3>
                <p>Activation is a licence key stored in your OS credential store — not a BharatStudio sign-in, and not tied to any other BharatStudio product.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Privacy by construction</div>
              <h2>Mirroring traffic doesn't leave your network.</h2>
              <p>Mirror's mirroring path has no network egress beyond your local network. There's no account to create and nothing about your stream setup for BharatStudio to see.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container band">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Streaming from your phone instead?</div>
              <h2>BharatStudio Stream broadcasts, Mirror displays.</h2>
              <p>If you want to go live directly from your phone rather than mirror it to a desktop, that's Stream — also no account needed.</p>
              <Link href="/stream/" className="text-link">Explore Stream →</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Adding viewer support?</div>
              <h2>Alerts brings tipping and on-screen alerts.</h2>
              <p>BharatStudio Alerts is a separate product with its own account and plans — pair it with whatever you're streaming or mirroring with.</p>
              <Link href="/alerts/" className="text-link">Explore Alerts →</Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
