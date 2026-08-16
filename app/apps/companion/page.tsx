import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio Companion — Your broadcast, at a glance',
  description:
    'BharatStudio Companion brings authorised broadcast state and bounded controls to the web, iOS, Android, Windows and macOS.',
  alternates: { canonical: 'https://bharatstudio.in/apps/companion/' },
}

export default function CompanionPage() {
  return (
    <main>
      <Nav />

      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">BharatStudio Companion</div>
          <h1>
            Your broadcast, <span className="gradient-text">at a glance.</span>
          </h1>
          <p className="lede">
            Companion is the connected operational surface for Alerts: web, iOS, Android and
            optional native desktop surfaces for authorised state, bounded actions and consented
            local controls.
          </p>
          <div className="actions">
            <Link href="/download/" className="btn-primary">Choose your surface</Link>
            <Link href="/pricing/" className="btn-ghost">See included access</Link>
          </div>
        </div>
      </header>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="label">One Companion. Three surfaces.</div>
              <h2>Use the screen that fits your stream.</h2>
            </div>
            <p>Companion is free with the Alerts package for the current launch model; plan entitlements control available capabilities.</p>
          </div>
          <div className="grid grid-three">
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="icon-box">W</div>
                <div className="label">Web console</div>
                <h3>Second-screen operations.</h3>
                <p>See recent alert activity, queue state, health, connection status, notification preferences, sessions and help without connecting a browser directly to local OBS.</p>
                <Link href="/docs/companion/" className="text-link">Web capabilities →</Link>
              </div>
            </article>
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="icon-box">M</div>
                <div className="label">iOS &amp; Android</div>
                <h3>Keep context close.</h3>
                <p>Use the mobile companion for authorised channel state, bounded actions, notifications and recovery guidance while you stream.</p>
                <Link href="/download/" className="text-link">Mobile availability →</Link>
              </div>
            </article>
            <article className="card-bezel">
              <div className="card-inner panel">
                <div className="icon-box">D</div>
                <div className="label">Windows &amp; macOS</div>
                <h3>A local helper, when needed.</h3>
                <p>The optional native helper is for consented local integrations, secure OS credential storage and scoped OBS controls—not a general-purpose local API.</p>
                <Link href="/compatibility/" className="text-link">Desktop requirements →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-two">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">What you can see</div>
              <h2>Operational context, not private noise.</h2>
              <ul>
                <li>Recent alert activity and delivery state</li>
                <li>Connection and helper freshness</li>
                <li>Plan and feature availability</li>
                <li>Device and session inventory</li>
                <li>Server-backed notification preferences</li>
                <li>Bounded help and recovery guidance</li>
              </ul>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">What you can do</div>
              <h2>Bounded actions, server-authorised.</h2>
              <ul>
                <li>Pause or resume an approved queue</li>
                <li>Send a synthetic test alert</li>
                <li>Manage approved Companion layouts</li>
                <li>Revoke sessions and control leases</li>
                <li>Connect through the native helper when enabled</li>
                <li>Use scoped OBS controls with explicit confirmation</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Independent by design</div>
              <h2>Companion can pause. It cannot erase.</h2>
              <p className="lede">
                Companion limits, disconnection or a disabled control surface must never change
                accepted payment, webhook, queue or alert evidence. Alerts remains the durable
                source of truth.
              </p>
              <div className="actions">
                <Link href="/apps/alerts/" className="btn-ghost">Explore Alerts</Link>
                <Link href="/support/" className="text-link">Need help choosing a surface? →</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
