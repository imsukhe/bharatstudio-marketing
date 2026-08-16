import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio creator docs',
  description: 'BharatStudio creator documentation for Alerts, Companion and broadcast setup.',
  alternates: { canonical: 'https://bharatstudio.in/docs/' },
}

export default function DocsPage() {
  return (
    <main>
      <Nav />

      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Creator docs</div>
          <h1>From first setup to live stream.</h1>
          <p className="lede">
            Short, practical guidance for BharatStudio Alerts and Companion. Product behavior is
            always subject to the current plan and published policy.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container grid grid-two">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="icon-box">01</div>
              <div className="label">Start here</div>
              <h2>Alerts setup</h2>
              <p>Connect your public tip page, configure your payment path, create an overlay session and add it to OBS.</p>
              <Link href="/setup/" className="btn-primary">Open setup guide</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="icon-box">02</div>
              <div className="label">Operate calmly</div>
              <h2>Companion guide</h2>
              <p>Understand web, mobile and desktop surfaces, roles, leases, sessions, health and recovery.</p>
              <Link href="/docs/companion/" className="btn-ghost">Open Companion guide</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="label">Guides</div>
              <h2>Find the right answer.</h2>
            </div>
          </div>
          <div className="grid grid-four">
            <article className="card-bezel">
              <div className="card-inner panel">
                <h3>Overlay and OBS</h3>
                <p>Create, rotate and revoke the scoped browser source.</p>
                <Link href="/setup/" className="text-link">Read guide →</Link>
              </div>
            </article>
            <article className="card-bezel">
              <div className="card-inner panel">
                <h3>Queues and styles</h3>
                <p>Understand timing, stacking, moderation, quiet mode and plan options.</p>
                <Link href="/apps/alerts/" className="text-link">See Alerts →</Link>
              </div>
            </article>
            <article className="card-bezel">
              <div className="card-inner panel">
                <h3>Plans and limits</h3>
                <p>See which limits affect configuration and which guarantees never change.</p>
                <Link href="/pricing/" className="text-link">Compare plans →</Link>
              </div>
            </article>
            <article className="card-bezel">
              <div className="card-inner panel">
                <h3>Recovery and support</h3>
                <p>Use safe recovery steps and contact the right support path.</p>
                <Link href="/support/" className="text-link">Get support →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
