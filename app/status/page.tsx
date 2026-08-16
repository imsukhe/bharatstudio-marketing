import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio system status',
  description: 'BharatStudio public system status and maintenance information.',
  alternates: { canonical: 'https://bharatstudio.in/status/' },
}

export default function StatusPage() {
  return (
    <main>
      <Nav />

      <section className="section">
        <div className="container">
          <div className="eyebrow">System status</div>
          <h1>Know what is happening.</h1>
          <p className="lede">
            This public page will show current service health and maintenance notices after the
            production monitoring and incident process are enabled.
          </p>
          <div className="card-bezel status-callout">
            <div className="card-inner panel">
              <div className="label">Launch preparation</div>
              <h2><span className="coming">●</span> Status feed not yet connected</h2>
              <p>The static marketing site does not infer live payment, alert or Companion health. For an active incident, contact support and check the latest published notice.</p>
              <Link href="/support/" className="btn-ghost">Contact support</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-four">
          <article className="card-bezel">
            <div className="card-inner panel">
              <h3>Alerts</h3>
              <p>Public page, payment handoff, overlay and durable delivery.</p>
              <span className="muted">Monitoring pending deployment</span>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <h3>Companion Web</h3>
              <p>Authorised web console and server projections.</p>
              <span className="muted">Monitoring pending deployment</span>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <h3>Companion Mobile</h3>
              <p>iOS and Android availability and notifications.</p>
              <span className="muted">Store/release gate</span>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <h3>Companion Desktop</h3>
              <p>Windows and macOS helper availability.</p>
              <span className="muted">Build/release gate</span>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
