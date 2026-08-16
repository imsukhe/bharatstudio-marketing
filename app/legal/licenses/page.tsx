import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio licenses and notices',
  description: 'BharatStudio open-source and third-party notices.',
  alternates: { canonical: 'https://bharatstudio.in/legal/licenses/' },
}

export default function LicensesPage() {
  return (
    <main>
      <Nav />
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Licenses and notices</div>
          <h1>Third-party notices.</h1>
          <p className="lede">The production release will publish the complete dependency and asset notices for each shipped surface.</p>
          <h2>What will be listed</h2>
          <ul>
            <li>Open-source package name, version and license</li>
            <li>Third-party fonts, icons, audio and visual assets</li>
            <li>Provider and platform notices where required</li>
            <li>Attribution and source links where required</li>
          </ul>
          <div className="notice">This page is a publication index during launch preparation. The dated release notice is required before production launch.</div>
          <Link href="/legal/" className="text-link">Back to legal index →</Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
