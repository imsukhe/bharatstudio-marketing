import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio resources — guides and product updates',
  description: 'BharatStudio creator guides, setup resources, compatibility information and product updates.',
  alternates: { canonical: 'https://bharatstudio.in/resources/' },
}

export default function ResourcesPage() {
  return (
    <main>
      <Nav />

      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Resources</div>
          <h1>Everything you need to go live with confidence.</h1>
          <p className="lede">
            A clear path from choosing a product to setting up your browser source, Companion
            surfaces and support route.
          </p>
          <div className="actions">
            <Link href="/setup/" className="btn-primary">Start with setup</Link>
            <Link href="/docs/" className="btn-ghost">Browse docs</Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container grid grid-three">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="icon-box">01</div>
              <div className="label">Learn</div>
              <h3>Creator docs</h3>
              <p>Understand the Alerts and Companion surfaces, boundaries and operating model before you configure.</p>
              <Link href="/docs/" className="text-link">Read the docs →</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="icon-box">02</div>
              <div className="label">Launch</div>
              <h3>Setup guide</h3>
              <p>Follow the public tip page, scoped overlay, OBS browser-source and first-test journey.</p>
              <Link href="/setup/" className="text-link">Set up Alerts →</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="icon-box">03</div>
              <div className="label">Know</div>
              <h3>Compatibility</h3>
              <p>Review the supported browser, OBS, mobile and desktop floors before you install anything.</p>
              <Link href="/compatibility/" className="text-link">Check compatibility →</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-two">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Product updates</div>
              <h2>Read the release story.</h2>
              <p>Public updates explain product changes, availability and important user-facing behaviour without exposing internal architecture or private operations.</p>
              <Link href="/resources/blog/" className="btn-ghost">Open updates</Link>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">When something feels wrong</div>
              <h2>Use the right route.</h2>
              <p>Check status for a published incident, then use support for account, payment, alert, safety or privacy help.</p>
              <div className="actions">
                <Link href="/status/" className="text-link">System status →</Link>
                <Link href="/support/" className="text-link">Support →</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
