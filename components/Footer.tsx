/**
 * Site footer — ported from the legacy MarketingFooter. Two content
 * corrections, not design changes: links point at the parent-brand IA
 * (adds Companion; legal links move under /legal/, matching the already-
 * approved site structure), and the stat strip drops "Free tier forever" —
 * L08's own acceptance criteria explicitly forbid promising free-forever.
 */
import Link from 'next/link'

const PRODUCT_LINKS = [
  { href: '/apps/alerts/', label: 'Alerts' },
  { href: '/apps/companion/', label: 'Companion' },
  { href: '/features/', label: 'All features' },
  { href: '/compare/', label: 'Compare' },
  { href: '/creators/', label: 'Creators' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/affiliate/', label: 'Referral' },
  { href: '/resources/blog/', label: 'Blog' },
  { href: '/docs/', label: 'Docs' },
]

const LEGAL_LINKS = [
  { href: '/legal/terms/', label: 'Terms of Service' },
  { href: '/legal/privacy/', label: 'Privacy Policy' },
  { href: '/legal/refunds/', label: 'Refund Policy' },
  { href: '/legal/data-rights/', label: 'Data Rights' },
  { href: '/legal/contact/', label: 'Contact & Support' },
]

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="footer-link">
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="BharatStudio home" className="footer-brand-link">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="#F7C948" />
                <path d="M7 8h9a5 5 0 0 1 0 10H7V8Z" fill="#0A0A0F" />
                <circle cx="20" cy="20" r="3" fill="#3B7EF6" />
              </svg>
              <span className="footer-brand-name">
                Bharat<span className="nav-logo-accent">Studio</span>
              </span>
            </Link>
            <p className="footer-tagline">
              Creator tools built around the live moment.
              <br />
              Alerts for viewer support, Companion for broadcast operations.
            </p>
            <div className="footer-stats">
              <div>
                <span className="footer-stat-value">₹0</span>
                <span className="footer-stat-label">Alerts commission</span>
              </div>
              <div>
                <span className="footer-stat-value">4</span>
                <span className="footer-stat-label">plans, one pricing page</span>
              </div>
              <div>
                <span className="footer-stat-value">0 drops</span>
                <span className="footer-stat-label">accepted records kept</span>
              </div>
            </div>
          </div>

          <div>
            <p className="footer-col-heading">Product</p>
            <nav aria-label="Product links" className="footer-nav">
              {PRODUCT_LINKS.map(({ href, label }) => (
                <FooterLink key={href} href={href}>{label}</FooterLink>
              ))}
            </nav>
          </div>

          <div>
            <p className="footer-col-heading">Legal</p>
            <nav aria-label="Legal links" className="footer-nav">
              {LEGAL_LINKS.map(({ href, label }) => (
                <FooterLink key={href} href={href}>{label}</FooterLink>
              ))}
            </nav>
          </div>

          <div>
            <p className="footer-col-heading">Contact</p>
            <div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">General</span>
                <a href="mailto:hello@bharatstudio.in" className="footer-email">hello@bharatstudio.in</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Support</span>
                <a href="mailto:support@bharatstudio.in" className="footer-email">support@bharatstudio.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2026 BharatStudio. Made in Bharat.</p>
          <p className="footer-disclaimer">
            Not affiliated with Razorpay Payments Pvt. Ltd. Payment processing fees are charged by Razorpay and not by BharatStudio.
          </p>
        </div>
      </div>
    </footer>
  )
}
