import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio terms of use',
  description: 'BharatStudio terms of use index.',
  alternates: { canonical: 'https://bharatstudio.in/legal/terms/' },
}

export default function TermsPage() {
  return (
    <main>
      <Nav />
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Terms of use</div>
          <h1>Use the product with clarity.</h1>
          <p className="lede">This page is the public terms surface. The final dated terms must be approved against the implemented product before production launch.</p>
          <div className="notice">Questions about these terms: <a href="mailto:support@bharatstudio.in">support@bharatstudio.in</a>.</div>
          <h2>Products</h2>
          <p>BharatStudio provides Alerts and Companion surfaces. Availability, limits and supported platforms are described in the current plan and product documentation.</p>
          <h2>Account and channel responsibility</h2>
          <p>You are responsible for protecting account access, overlay URLs, payment connection information and the content you choose to display. Do not use the service for unlawful, abusive, deceptive or unauthorised activity.</p>
          <h2>Limits and durable records</h2>
          <p>Plan limits can restrict new configuration or presentation choices. They do not delete accepted payment or alert evidence. Operational actions remain subject to server-side role, lease, security and entitlement checks.</p>
          <h2>Changes and cancellation</h2>
          <p>Material pricing or product changes are versioned and communicated with effective dates. Subscription cancellation and renewal behavior follow the published offer and applicable refund policy.</p>
          <Link href="/legal/" className="text-link">Back to legal index →</Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
