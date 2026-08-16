import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio data rights request',
  description: 'How to contact BharatStudio about access, correction, deactivation and privacy concerns.',
  alternates: { canonical: 'https://bharatstudio.in/legal/data-rights/' },
}

export default function DataRightsPage() {
  return (
    <main>
      <Nav />
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Privacy and data rights</div>
          <h1>Ask us about your data.</h1>
          <p className="lede">For access, correction, deactivation, retention or another privacy concern, email <a href="mailto:privacy@bharatstudio.in">privacy@bharatstudio.in</a>.</p>
          <div className="notice">
            <strong>Do not send secrets.</strong><br />
            Never include passwords, UPI PINs, API keys, overlay tokens or full payment credentials in a request.
          </div>
          <h2>Include enough context to find the right account</h2>
          <p>Use the account email or a safe public reference, explain the request, and tell us whether it concerns Alerts, Companion, a public tip, a payment reference or a support case. We may need to verify identity before disclosing account information.</p>
          <h2>What happens next</h2>
          <p>We log the request, verify the requester, identify applicable records and obligations, and respond through the privacy process. Account closure immediately deactivates access and stops normal product and marketing use; limited information may remain restricted for payment, tax, fraud, dispute, security or legal purposes according to the published policy.</p>
          <p>This page is an access route, not a promise that every record can be erased immediately. The current policy and applicable law govern the response.</p>
          <div className="actions">
            <a href="mailto:privacy@bharatstudio.in" className="btn-primary">Email privacy</a>
            <Link href="/legal/privacy/" className="btn-ghost">Read privacy policy</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
