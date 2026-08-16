import type { Metadata, Viewport } from 'next'
import { Rajdhani, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

/*
 * Font mechanism ported verbatim from the legacy BharatStudio Alerts
 * marketing site (apps/web/src/app/layout.tsx). next/font/google self-hosts
 * the actual font files at build time — no external CDN request at runtime,
 * no manual asset sourcing, and no CSP font-src exception needed beyond
 * 'self'. Sora/Poppins are dropped: those were loaded only for the Alerts
 * dashboard's in-app font-picker preview, not used on any marketing page.
 */
const rajdhani = Rajdhani({
  weight: ['600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rajdhani',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: {
    default: 'BharatStudio — Creator tools built for your broadcast',
    template: '%s — BharatStudio',
  },
  description:
    'BharatStudio brings Alerts and Companion together for Indian creators: viewer support, broadcast overlays and authorised stream operations.',
  metadataBase: new URL('https://bharatstudio.in'),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${rajdhani.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
