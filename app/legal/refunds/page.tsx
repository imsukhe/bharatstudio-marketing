import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio refunds and payment support',
  description: 'BharatStudio payment and refund support information.',
  alternates: { canonical: 'https://bharatstudio.in/legal/refunds/' },
}

export default function RefundsPage() {
  return (
    <main>
      <Nav />
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Payments and refunds</div>
          <h1>Payment questions have a clear path.</h1>
          <p className="lede">BharatStudio Alerts keeps payment and alert records separate from presentation. A payment concern is reviewed against the provider record and the immutable local history.</p>
          <div className="notice">For a payment or refund request, contact <a href="mailto:support@bharatstudio.in">support@bharatstudio.in</a>. Never send card numbers, UPI PINs, passwords, API keys or overlay tokens.</div>
          <h2>What to include</h2>
          <ul>
            <li>Public receipt or order reference, if available</li>
            <li>Approximate date and amount</li>
            <li>Creator/channel public handle</li>
            <li>A short description of the issue</li>
          </ul>
          <h2>What happens next</h2>
          <p>Support checks the request against the provider-confirmed status, local payment evidence and applicable policy. A browser timeout or missing webhook is not treated as proof that a payment failed; reconciliation may be required.</p>
          <h2>Creator subscriptions</h2>
          <p>Subscription cancellation, auto-renewal, price protection and applicable refund treatment follow the published plan and dated terms. Support does not change historical payment or alert records.</p>
          <Link href="/support/" className="text-link">Contact support →</Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
