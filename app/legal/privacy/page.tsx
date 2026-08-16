import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio privacy policy',
  description: 'BharatStudio privacy policy index and privacy contact.',
  alternates: { canonical: 'https://bharatstudio.in/legal/privacy/' },
}

export default function PrivacyPage() {
  return (
    <main>
      <Nav />
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Privacy policy</div>
          <h1>How BharatStudio handles information.</h1>
          <p className="lede">This page is the public privacy-policy surface. The final dated policy must be approved against the implemented product and applicable professional advice before production launch.</p>
          <div className="notice">Last reviewed: launch preparation. Contact <a href="mailto:privacy@bharatstudio.in">privacy@bharatstudio.in</a> for a privacy question.</div>
          <h2>Information categories</h2>
          <p>Depending on the surface you use, BharatStudio may process account and session information, channel configuration, alert and queue records, payment references, device/session state, support communications and operational security logs.</p>
          <h2>Purpose and access</h2>
          <p>Information is used to authenticate accounts, provide Alerts and Companion, protect the service, maintain payment and alert history, provide support, handle disputes and meet applicable obligations. Access is role-scoped and operational logs are minimised.</p>
          <h2>Account closure</h2>
          <p>When an account is closed, access is deactivated and personal information is stopped from normal product and marketing use. Limited information may remain restricted and audited where required for payments, taxes, fraud prevention, disputes, security or legal obligations. Requests for access, correction, erasure or restriction are reviewed against those obligations.</p>
          <h2>Contact</h2>
          <p>Do not email passwords, overlay tokens, payment credentials or provider secrets. Use <a href="mailto:privacy@bharatstudio.in">privacy@bharatstudio.in</a> with the minimum information needed to locate the request.</p>
          <Link href="/legal/" className="text-link">Back to legal index →</Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
