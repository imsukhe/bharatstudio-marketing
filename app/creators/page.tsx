import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { CreatorsGallery } from './CreatorsGallery'

/*
 * /creators — gallery of BharatStudio creators.
 *
 * The legacy site's /creators (apps/web/src/app/(marketing)/creators/) was a
 * Server Component that fetched live rows from an internal Fastify API
 * (GET /api/v1/creators/featured) at request time. That architecture can't
 * carry over as-is: this repo builds as a static export with no server at
 * request time. Instead, CreatorsGallery is a client component that fetches
 * GET /v1/public/featured from bharatstudio-alerts after hydration — the one
 * approved cross-origin call on this site, gated behind
 * NEXT_PUBLIC_ALERTS_API_ORIGIN (unset in dev/most builds; see
 * scripts/generate-csp-headers.mjs for the /creators/-only connect-src
 * widening this requires, and .env.example for the variable).
 *
 * Zero-creators fallback (generic copy, no fabricated sample rows) still
 * ships whenever the origin is unconfigured, the fetch fails, or the
 * directory is genuinely empty — this page must never show placeholder
 * creator data.
 */
export const metadata: Metadata = {
  title: 'Creators — BharatStudio Alerts',
  description:
    'Indian streamers using BharatStudio Alerts to earn from their communities — Hindi, Tamil, Telugu and more languages. 0% commission on every tip, every plan.',
  alternates: { canonical: 'https://bharatstudio.in/creators/' },
}

const LANGUAGES = [
  'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Marathi', 'Bengali', 'Gujarati', 'Punjabi', 'Odia', 'English',
]

export default function CreatorsPage() {
  return (
    <main>
      <Nav />

      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Real creators. Real earnings.</div>
          <h1>
            Meet the creators <span className="gradient-text">earning with BharatStudio.</span>
          </h1>
          <p className="lede">
            Indian streamers across 11 languages — collecting tips directly from their
            communities. <strong>0% commission</strong> on every plan.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <CreatorsGallery
            fallback={
              <div className="gallery-empty">
                <div className="icon-box">B</div>
                <h2>The public gallery goes live with the first cohort.</h2>
                <p>
                  This page lists real, opted-in BharatStudio creators — check back once the first
                  creators have joined and turned on their public listing. No sample or placeholder
                  creator data is shown in the meantime.
                </p>
                <div className="lang-pill-row">
                  {LANGUAGES.map((lang) => <span className="lang-pill" key={lang}>{lang}</span>)}
                </div>
              </div>
            }
          />
        </div>
      </section>

      <section className="section section-alt footer-cta">
        <div className="container">
          <h2>Ready to start earning from your community?</h2>
          <p className="lede footer-cta-lede">Set up your tip page and keep 100% of every tip you collect — 0% commission on every plan.</p>
          <div className="actions footer-cta-actions">
            <Link href="/download/" className="btn-primary">Get started free</Link>
            <Link href="/pricing/" className="btn-ghost">See pricing</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
