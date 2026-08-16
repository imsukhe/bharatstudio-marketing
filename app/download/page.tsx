import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { PlanBanner } from './PlanBanner'

export const metadata: Metadata = {
  title: 'Get BharatStudio — Alerts and Companion',
  description: 'Choose the BharatStudio Alerts web experience, Companion mobile app or desktop helper when available.',
  alternates: { canonical: 'https://bharatstudio.in/download/' },
}

export default function DownloadPage() {
  return (
    <main>
      <Nav />

      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Choose your surface</div>
          <h1>Start where your broadcast starts.</h1>
          <p className="lede">
            Alerts is a web product. Companion adds web, mobile and optional desktop surfaces.
            Choose a path below and keep the same BharatStudio account.
          </p>
          <Suspense fallback={null}>
            <PlanBanner />
          </Suspense>
          <div className="actions">
            <Link href="/apps/alerts/" className="btn-primary">Open Alerts</Link>
            <Link href="/pricing/" className="btn-ghost">See pricing</Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container grid grid-four">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="icon-box">A</div>
              <div className="label">Alerts web</div>
              <h3>Open Alerts</h3>
              <p>Configure your public tip page, queues, overlay and creator settings in the web dashboard.</p>
              <Link href="/apps/alerts/" className="btn-primary">Open Alerts</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="icon-box">i</div>
              <div className="label">iOS</div>
              <h3>Companion for iPhone</h3>
              <p>Mobile availability, Apple account and store-review status will be published with the release.</p>
              <span className="coming">Available at launch gate</span>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="icon-box">▹</div>
              <div className="label">Android</div>
              <h3>Companion for Android</h3>
              <p>Mobile availability, Play Store account and store-review status will be published with the release.</p>
              <span className="coming">Available at launch gate</span>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="icon-box">D</div>
              <div className="label">Windows &amp; macOS</div>
              <h3>Desktop helper</h3>
              <p>Optional native helper for consented local OBS controls and diagnostics.</p>
              <span className="coming">Available at launch gate</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-two">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Before you begin</div>
              <h2>Check your setup.</h2>
              <p>Alerts uses a browser source in OBS. Companion surfaces require the supported platform, account sign-in and server-authorised access.</p>
              <Link href="/compatibility/" className="text-link">View compatibility →</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Need help?</div>
              <h2>Follow the setup path.</h2>
              <p>Use the Alerts setup guide for the public tip page, payment connection, overlay session and OBS browser source.</p>
              <Link href="/setup/" className="text-link">Open setup guide →</Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
