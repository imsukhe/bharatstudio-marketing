import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BharatStudio compatibility',
  description: 'Supported browser, OBS, mobile and desktop requirements for BharatStudio Alerts and Companion.',
  alternates: { canonical: 'https://bharatstudio.in/compatibility/' },
}

const ROWS: Array<[string, string, string, string, 'check' | 'coming']> = [
  ['Alerts dashboard', 'Modern desktop browser with HTTPS', 'Google Sign-In and supported network', 'Available for staging', 'check'],
  ['Public tip page', 'Modern mobile or desktop browser', 'Supported payment flow and network', 'Available for staging', 'check'],
  ['OBS overlay', 'OBS browser source', 'Overlay URL, scene and browser-source dimensions', 'Available for staging', 'check'],
  ['Companion mobile', 'iOS 15.1+ / Android API 26+', 'Supported app build, Google Sign-In and notification permissions', 'Store/device gate', 'coming'],
  ['Companion Windows', 'WinUI 3 / supported Windows release', 'Signed helper and local OBS connection when enabled', 'Build/signing gate', 'coming'],
  ['Companion macOS', 'SwiftUI / supported macOS release', 'Signed/notarised helper and local OBS connection when enabled', 'Build/signing gate', 'coming'],
]

export default function CompatibilityPage() {
  return (
    <main>
      <Nav />

      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Compatibility</div>
          <h1>Know what your setup can do.</h1>
          <p className="lede">
            Alerts is designed around a modern browser and OBS browser source. Companion
            capabilities vary by platform and release status.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="table-wrap">
            <table className="comparison">
              <thead>
                <tr><th>Surface</th><th>Supported boundary</th><th>What you need</th><th>Release status</th></tr>
              </thead>
              <tbody>
                {ROWS.map(([surface, boundary, need, status, kind]) => (
                  <tr key={surface}>
                    <td>{surface}</td>
                    <td>{boundary}</td>
                    <td>{need}</td>
                    <td><span className={kind}>{status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-two">
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">OBS</div>
              <h2>Browser source, not a public local API.</h2>
              <p>Alerts uses a scoped web overlay session. Companion desktop, when enabled, uses local-only authenticated OBS controls. No public browser page should connect directly to your local OBS port.</p>
            </div>
          </article>
          <article className="card-bezel">
            <div className="card-inner panel">
              <div className="label">Reliability</div>
              <h2>Limits do not decide correctness.</h2>
              <p>Plan limits can restrict new configuration or presentation choices. They cannot delete or acknowledge accepted payment, queue or alert evidence.</p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
