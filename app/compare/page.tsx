import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { CompareTable } from '@/components/CompareTable'
import { CommissionCalculator } from '@/components/CommissionCalculator'

/*
 * /compare — restored from the legacy BharatStudio Alerts marketing site
 * (apps/web/src/app/(marketing)/compare/page.tsx), rewritten with CSS
 * classes instead of inline styles. D-C053: no competitor names in any
 * rendered HTML. The "other platforms" price range below is corrected from
 * the legacy source's stale ₹199–₹449 to this repo's current approved
 * /pricing figures (₹199–₹499) — everything else is ported verbatim,
 * including the existing hedged/pending-review language.
 */
export const metadata: Metadata = {
  title: 'Compare donation alert tools — BharatStudio',
  description:
    'Transparent comparison of manual methods, scraping tools, and subscription platforms. 0% commission, AI voice in 11 Indian languages, UPI-native.',
  alternates: { canonical: 'https://bharatstudio.in/compare/' },
}

export default function ComparePage() {
  return (
    <main>
      <Nav />

      <section className="section">
        <div className="container">
          <div className="compare-intro">
            <h1>Full transparency. No hiding.</h1>
            <p className="lede">
              We&apos;d rather you compare us openly than discover the difference after
              you&apos;re locked in.
            </p>
            <div className="compare-note">
              <p>
                We don&apos;t name competitors because the landscape changes. These comparisons
                reflect what&apos;s common across manual methods and third-party alert tools as of
                2026 and our own testing. If something is wrong, email us:{' '}
                <a href="mailto:hello@bharatstudio.in">hello@bharatstudio.in</a>
              </p>
            </div>
          </div>

          <section aria-label="vs manual methods" className="compare-section">
            <div className="label">Section A</div>
            <h2>If you&apos;re doing this manually right now</h2>
            <p className="lede">
              Reading tips off your phone, shouting them out yourself, hoping you didn&apos;t miss
              one while you were mid-game.
            </p>
            <CompareTable
              leftHead="Manual / phone notification"
              rows={[
                { feature: 'Tip detection', left: "You notice it — or you don't", right: 'Alert triggers the instant payment clears' },
                { feature: 'OBS alert', left: false, right: 'Lottie animation + custom sound' },
                { feature: 'AI voice reads the tip', left: 'You read it aloud yourself', right: 'AI voice in 11 Indian languages (paid tiers)' },
                { feature: 'Alert timing', left: '30–120 seconds if you see it', right: 'Under a second, every time' },
                { feature: 'Missed tips during stream', left: 'Permanent loss — no way to recover', right: '72-hour buffer + auto-resync on reconnect' },
                { feature: 'Tip history / ledger', left: 'Notes app or memory', right: 'Searchable ledger + CSV export' },
                { feature: 'Commission', left: '0%', right: '0% on every tier, including Free' },
                { feature: 'Monthly cost', left: '₹0', right: '₹0 (Free tier, permanently)' },
                { feature: 'ToS compliance', left: true, right: true },
              ]}
            />
            <div className="compare-cta-row">
              <p>You&apos;re already spending the time. Stop losing the moments.</p>
              <Link href="/download/" className="btn-primary">Start free →</Link>
            </div>
          </section>

          <section aria-label="vs scraping tools" className="compare-section">
            <div className="label">Section B</div>
            <h2>If you&apos;re using a third-party alert tool or scraper</h2>
            <p className="lede">
              Other tools read your phone notifications or capture your screen. They work — until
              an app update breaks them, and you find out mid-stream.
            </p>
            <CompareTable
              leftHead="Typical third-party alert tool"
              rows={[
                { feature: 'How it works', left: 'Reads phone notifications or screen', right: 'Connected directly to your payment account — nothing to break' },
                { feature: 'Payment provider ToS', left: 'warn', right: 'Official Razorpay integration' },
                { feature: 'Account risk', left: "Possible — these tools aren't officially supported", right: 'Low — official Razorpay partner integration' },
                { feature: 'Reliability', left: 'Breaks whenever the app or OS updates', right: 'Stays working regardless of app updates' },
                { feature: 'Alert speed', left: '30–120 seconds', right: 'Under a second' },
                { feature: 'AI voice in Indian languages', left: 'Usually unavailable', right: 'AI voice in 11 Indian languages (paid tiers)' },
                { feature: 'Alert customisation', left: 'Limited or none', right: '4 built-in themes + appearance editor (paid tiers)' },
                { feature: 'Your money stays yours', left: 'Third party may hold payment data', right: 'Your Razorpay account — we never touch your funds' },
                { feature: 'India data privacy', left: 'Unknown', right: 'Viewer consent collected at checkout' },
                { feature: 'Commission', left: '0–5% on some tools', right: '0% on every tier, including Free' },
              ]}
            />
            <p className="compare-legend">
              ⚠ row indicates our assessment only — we are not legal advisors. ToS risk varies by
              tool. Razorpay Technology Partner status pending official approval.
            </p>
          </section>

          <section aria-label="vs other subscription platforms" className="compare-section">
            <div className="label">Section C</div>
            <h2>If you&apos;re paying for another alert platform</h2>
            <p className="lede">
              Some platforms are built for international streamers and adapted for India. We were
              built for India from day one.
            </p>
            <CompareTable
              leftHead="Other platforms (common)"
              rows={[
                { feature: 'Commission on tips', left: '2–8% per tip †', right: '0% on every tier' },
                { feature: 'Monthly subscription', left: '₹500–₹2,999/month or USD equivalent', right: '₹199–₹499/month (GST inclusive)' },
                { feature: 'AI voice in Indian languages', left: false, right: '11 Indian languages with Indian accents' },
                { feature: 'Payment methods', left: 'Cards only, or UPI in USD', right: 'UPI, cards, netbanking, wallets — whatever your viewers use' },
                { feature: 'Server location', left: 'US / EU', right: 'Mumbai, India' },
                { feature: 'Alert speed (India)', left: 'Slower — servers outside India ‡', right: 'Fast — India-based servers' },
                { feature: 'India data privacy', left: 'Unknown', right: 'Viewer consent collected at checkout' },
                { feature: 'Pricing transparency', left: 'Fees sometimes revealed at checkout', right: 'All pricing on /pricing — no checkout surprises' },
                { feature: 'Annual discount', left: 'Often 20% off monthly rate', right: '2 months free (equivalent value)' },
                { feature: 'Free tier', left: 'Trial only — 7 to 30 days', right: 'Permanent free tier. No card required.' },
              ]}
            />
            <p className="compare-legend">
              † Commission range from internal research — not sourced from any competitor&apos;s
              public pricing page. Verify independently before switching.<br />
              ‡ Latency estimate — cross-region round trip. Not a measured benchmark.
            </p>
          </section>

          <section aria-label="Commission savings calculator" className="compare-section">
            <div className="label">Calculator</div>
            <h2>Run the numbers yourself</h2>
            <p className="lede">
              Adjust the commission rate and your monthly tip volume to see what commission-based
              pricing actually costs.
            </p>
            <CommissionCalculator />
          </section>

          <section aria-label="Why we don't name competitors" className="card-bezel why-not-card">
            <div className="card-inner panel">
              <h3>Why we don&apos;t name them</h3>
              <p>We could list 12 competitors and mark ✗ next to everything they do. We chose not to.</p>
              <p>
                Products change. Pricing changes. What&apos;s true today may not be tomorrow. If
                you want to compare, check their pricing page and ours side by side.
              </p>
              <p>
                What doesn&apos;t change: we will always show you our full pricing upfront, take
                0% commission, build for India first, and not hide fees in a checkout.
              </p>
            </div>
          </section>

          <section aria-label="What makes us different" className="compare-section">
            <div className="label">What makes us different</div>
            <h2>Five things that don&apos;t change.</h2>
            <div className="grid grid-two">
              <article className="card-bezel">
                <div className="card-inner panel">
                  <div className="label">0% commission, always.</div>
                  <p>Every rupee your viewer sends goes to your Razorpay account. We charge a subscription — a flat fee — not a cut of your earnings. A ₹1,000 tip on the Free tier still reaches you at ₹1,000 (minus Razorpay&apos;s standard gateway fee, which applies regardless of which tool you use).</p>
                </div>
              </article>
              <article className="card-bezel">
                <div className="card-inner panel">
                  <div className="label">Your payment account. Your money.</div>
                  <p>We use Razorpay&apos;s integration to create payment links on your behalf. BharatStudio never holds your funds, never processes settlements, and is never in the money flow. Razorpay settles directly to your bank account, on Razorpay&apos;s standard schedule.</p>
                </div>
              </article>
              <article className="card-bezel">
                <div className="card-inner panel">
                  <div className="label">Built for India, not adapted for India.</div>
                  <p>AI voice in 11 Indian languages. Every payment method your viewers already use. Servers in India. Viewer consent at checkout. We didn&apos;t add these as features later — they were in the design from day one.</p>
                </div>
              </article>
              <article className="card-bezel">
                <div className="card-inner panel">
                  <div className="label">Transparent pricing. No checkout surprises.</div>
                  <p>Every tier, every feature, every restriction is on /pricing. We don&apos;t show you a lower price and reveal commission at checkout. What you read is what you pay — GST included in every displayed price.</p>
                </div>
              </article>
              <article className="card-bezel">
                <div className="card-inner panel">
                  <div className="label">You can leave whenever you want.</div>
                  <p>Your payment data stays in your Razorpay account. You can export your full tip history as CSV at any time. If you cancel, you have 30 days to download everything. We don&apos;t hold your data hostage.</p>
                </div>
              </article>
            </div>
          </section>

          <section aria-label="Final call to action" className="compare-section">
            <h3>Seen enough?</h3>
            <p className="lede">Start on the Free tier. No card, no commitment. Upgrade when it makes sense.</p>
            <div className="actions">
              <Link href="/download/" className="btn-primary">Start for free →</Link>
              <Link href="/pricing/" className="btn-ghost">See pricing →</Link>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
