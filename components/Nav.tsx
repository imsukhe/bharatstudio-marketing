'use client'

/**
 * Site navigation — floating pill, ported from the legacy MarketingNav
 * (chrome, hamburger morph, mobile overlay stagger). Two adaptations,
 * both required by this repository's own boundary, not design choices:
 *
 *  - No auth-check fetch. Legacy nav lived inside the authenticated Alerts
 *    app and checked session state via a same-origin API route. This repo
 *    is static-only and must not own dashboard/session state
 *    (REPOSITORY-STRUCTURE.md) — the CTA is a plain link, unconditionally.
 *  - Products/Resources use <details>/<summary> dropdowns instead of a
 *    flat link list, matching the parent-brand IA (multiple products) the
 *    legacy Alerts-only nav never needed.
 *
 * No inline style anywhere — CSP style-src 'self', no unsafe-inline.
 */
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const PRODUCT_LINKS = [
  { href: '/apps/alerts/', label: 'Alerts', hint: 'viewer support & overlays' },
  { href: '/apps/companion/', label: 'Companion', hint: 'web, mobile & desktop' },
  { href: '/features/', label: 'All features' },
  { href: '/compare/', label: 'Compare', hint: 'vs manual & other tools' },
  { href: '/creators/', label: 'Creators', hint: 'who uses BharatStudio' },
]

const RESOURCE_LINKS = [
  { href: '/resources/', label: 'Resource hub' },
  { href: '/docs/', label: 'Creator docs' },
  { href: '/setup/', label: 'Alerts setup guide' },
  { href: '/compatibility/', label: 'Compatibility' },
  { href: '/resources/blog/', label: 'Product updates' },
  { href: '/status/', label: 'System status' },
]

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeMenu()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closeMenu])

  useEffect(() => {
    // Class toggle, not element.style — the CSP style-src 'self' with no
    // unsafe-inline governs JS style-property assignment the same way it
    // governs an inline style="" attribute.
    document.body.classList.toggle('no-scroll', menuOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [menuOpen])

  return (
    <>
      <div className="nav-wrap">
        <div className="nav-pill">
          <Link href="/" aria-label="BharatStudio home" className="nav-logo">
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect width="28" height="28" rx="6" fill="#F7C948" />
              <path d="M7 8h9a5 5 0 0 1 0 10H7V8Z" fill="#0A0A0F" />
              <circle cx="20" cy="20" r="3" fill="#3B7EF6" />
            </svg>
            <span className="nav-logo-text">
              Bharat<span className="nav-logo-accent">Studio</span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="nav-desktop">
            <details className="nav-menu">
              <summary>Products</summary>
              <div className="nav-dropdown">
                <span className="nav-dropdown-eyebrow">Explore</span>
                {PRODUCT_LINKS.map(({ href, label, hint }) => (
                  <Link key={href} href={href}>
                    <span>{label}</span>
                    {hint && <span className="muted">{hint}</span>}
                  </Link>
                ))}
              </div>
            </details>
            <details className="nav-menu">
              <summary>Resources</summary>
              <div className="nav-dropdown">
                <span className="nav-dropdown-eyebrow">Learn</span>
                {RESOURCE_LINKS.map(({ href, label }) => (
                  <Link key={href} href={href}>
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/pricing/" className="nav-link">Pricing</Link>
            <Link href="/support/" className="nav-link">Support</Link>
          </nav>

          <div className="nav-right">
            <Link href="/download/" className="nav-cta nav-desktop-flex">Get started</Link>
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="nav-hamburger"
            >
              <span className="ham-wrap" aria-hidden="true">
                <span className={`ham-line ham-top${menuOpen ? ' is-open' : ''}`} />
                <span className={`ham-line ham-mid${menuOpen ? ' is-open' : ''}`} />
                <span className={`ham-line ham-bot${menuOpen ? ' is-open' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        role={menuOpen ? 'dialog' : undefined}
        aria-modal={menuOpen ? 'true' : undefined}
        aria-label="Mobile navigation menu"
        aria-hidden={!menuOpen}
        className="nav-mobile-overlay"
        data-open={menuOpen}
        onClick={(e) => e.target === e.currentTarget && closeMenu()}
      >
        <nav aria-label="Mobile navigation" className="nav-mobile-links">
          <span className="nav-mobile-group-label">Products</span>
          {PRODUCT_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={closeMenu} className="nav-mobile-link">
              {label}
            </Link>
          ))}
          <span className="nav-mobile-group-label">More</span>
          <Link href="/resources/blog/" onClick={closeMenu} className="nav-mobile-link">Blog</Link>
          <Link href="/pricing/" onClick={closeMenu} className="nav-mobile-link">Pricing</Link>
          <Link href="/support/" onClick={closeMenu} className="nav-mobile-link">Support</Link>
        </nav>
        <div className="nav-mobile-actions">
          <Link href="/download/" onClick={closeMenu} className="nav-mobile-cta">Get started</Link>
        </div>
      </div>
    </>
  )
}
