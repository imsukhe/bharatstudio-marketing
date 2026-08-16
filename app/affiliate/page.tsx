import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

/*
 * /affiliate — restored from the legacy BharatStudio Alerts marketing site
 * (apps/web/src/app/(marketing)/affiliate/page.tsx), rewritten with CSS
 * classes instead of inline styles. The programme is explicitly not live yet
 * in the source content ("rolling out soon", "Preview only — not a live
 * page") and is preserved that way here — no new claims of availability are
 * added. Sign-up CTAs point at this site's own /download/ funnel rather than
 * the legacy monorepo's app-relative /login, matching how every other page
 * on this site links to the product.
 */
export const metadata: Metadata = {
  title: 'Referral Programme — Refer a creator, both win',
  description:
    'Refer another Indian streamer to BharatStudio Alerts. When they activate a paid plan, you both get 1 free month — matched to the higher of your two plan tiers.',
  alternates: { canonical: 'https://bharatstudio.in/affiliate/' },
}

const DISQUALIFIERS = [
  'Referral of yourself — same Razorpay PAN or linked bank account',
  'Account created from the same device and IP as the referrer (shared network is flagged for manual review — email us proactively if this applies)',
  "First donation paid from the creator's own UPI account",
  'Subscription refunded or charged back within 14 days',
  'Referred account already existed before clicking your link',
]

const QUAL_STEPS = [
  { status: 'Step 1', label: 'New account created via your link', note: 'Tracking starts. No credit issued yet. Retroactive referrals (existing accounts clicking your link later) are not accepted.' },
  { status: 'Step 2', label: 'Razorpay KYC cleared', note: 'Real identity verified via PAN + bank account. Duplicate PAN with your account or a prior referral = automatic disqualification.' },
  { status: 'Step 3', label: 'Paid plan activated (Pro, Creator, or Studio)', note: 'Financial commitment confirmed. 14-day refund window starts here. Free plan sign-ups still qualify — reward defaults to Pro for both.' },
  { status: 'Step 4', label: 'First genuine viewer donation received (≥₹50)', note: "Proves they actually went live. The donor's UPI account must differ from the creator's own Razorpay account, phone, or linked bank. Self-tips don't count." },
  { status: 'Step 5 ✅', label: '14 days pass without a refund → both credited', note: 'Both accounts receive 1 free month at the higher of your two plan tiers. Applied at next renewal.', final: true },
]

export default function AffiliatePage() {
  const mailSubject = encodeURIComponent('Referral programme — early access interest')
  const mailBody = encodeURIComponent(
    "Hi,\n\nI'd like to join the BharatStudio referral programme when it launches.\n\nMy name:\nMy stream channel:\nApprox. monthly viewers:\n",
  )

  return (
    <main>
      <Nav />

      <section className="section">
        <div className="container">
          <div className="compare-intro">
            <div className="label">Referral programme</div>
            <h1>
              Refer a creator.<br /><span className="gradient-text">Both of you win.</span>
            </h1>
            <p className="lede">
              Share your referral link. When the creator you refer activates a paid plan and
              receives their first real viewer donation, you both get{' '}
              <strong>1 free month — at the higher of your two plan tiers</strong>. Refer someone
              going Creator; you get Creator free too.
            </p>
            <p className="muted">
              Referral links are rolling out soon. Sign up below and we&apos;ll email your
              personal link when it&apos;s ready.
            </p>
          </div>

          <section aria-label="Reward details" className="compare-section">
            <h2>The reward</h2>
            <div className="grid grid-two">
              <article className="card-bezel">
                <div className="card-inner panel">
                  <div className="label">You (the referrer)</div>
                  <h3>1 month free — at your tier or theirs</h3>
                  <p>You get 1 free month at whichever plan is higher — yours or your referred creator&apos;s. Already on Creator? If they activate Pro, you still get Creator free. Credited after a 14-day hold.</p>
                </div>
              </article>
              <article className="card-bezel">
                <div className="card-inner panel">
                  <div className="label">Your referred creator</div>
                  <h3>1 month free — on their plan</h3>
                  <p>Activate Pro, Creator, or Studio via your referrer&apos;s link — next billing cycle is ₹0. Join on Free? You both still get 1 month of Pro as the minimum reward.</p>
                </div>
              </article>
            </div>

            <div className="tier-table">
              <div className="tier-table-head">
                <span>Your plan</span><span>They activate</span><span>Both get</span>
              </div>
              <div className="tier-row"><span>Free</span><span>Free or Pro</span><span>1 month Pro</span></div>
              <div className="tier-row"><span>Free</span><span>Creator</span><span>1 month Creator</span></div>
              <div className="tier-row"><span>Free</span><span>Studio</span><span>1 month Studio</span></div>
              <div className="tier-row"><span>Pro</span><span>Free or Pro</span><span>1 month Pro</span></div>
              <div className="tier-row"><span>Creator</span><span>Pro or Creator</span><span>1 month Creator</span></div>
              <div className="tier-row"><span>Studio</span><span>any paid plan</span><span>1 month Studio</span></div>
            </div>
            <p className="compare-legend">
              Non-cashable service credits. Max 3 credits per calendar year — no monthly cap,
              stack them all. Resets to 0 on 1 January.
            </p>
          </section>

          <section aria-label="How referrals work" className="compare-section">
            <h2>How it works</h2>
            <div className="steps">
              <div className="step">
                <div>
                  <h3>Get your referral link</h3>
                  <p>Your unique link lives in Dashboard → Settings → Referrals once the system launches. Share it on stream, in your bio, or wherever your community hangs out.</p>
                </div>
              </div>
              <div className="step">
                <div>
                  <h3>They sign up, connect Razorpay, activate a paid plan</h3>
                  <p>Your referred creator signs up via your link, connects their Razorpay account, and activates Pro, Creator, or Studio. Free sign-ups count — both of you still get 1 month of Pro.</p>
                </div>
              </div>
              <div className="step">
                <div>
                  <h3>Both accounts are credited after a 14-day hold</h3>
                  <p>Once they receive a genuine ≥₹50 viewer donation and 14 days pass without a refund, both accounts are credited automatically. Tier = the higher of your two plans.</p>
                </div>
              </div>
            </div>
          </section>

          <section aria-label="Register interest" className="card-bezel compare-section">
            <div className="card-inner panel">
              <h3>Get early access</h3>
              <p>Referral links are rolling out in batches. Create a free account, then email us — we&apos;ll send your personal link as soon as it&apos;s ready.</p>
              <div className="actions">
                <Link href="/download/" className="btn-primary">Start free first →</Link>
                <a href={`mailto:hello@bharatstudio.in?subject=${mailSubject}&body=${mailBody}`} className="btn-ghost">
                  Register interest via email
                </a>
              </div>
              <p className="compare-legend">You need a BharatStudio account to get a referral link. Create one free above first.</p>
            </div>
          </section>

          <section aria-label="Programme rules" className="compare-section">
            <details className="rules-disclosure">
              <summary>
                <span>How we qualify referrals</span>
                <span className="expand-label">expand</span>
              </summary>
              <div className="rules-body">
                <p className="lede">
                  Every referral goes through a five-step verification before credit fires.
                  Here&apos;s exactly what we check — and what disqualifies a referral.
                </p>

                <div className="qual-steps">
                  {QUAL_STEPS.map(({ status, label, note, final }) => (
                    <div className={final ? 'qual-step qual-final' : 'qual-step'} key={status}>
                      <span className="qual-status">{status}</span>
                      <div>
                        <h4>{label}</h4>
                        <p>{note}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="x-list">
                  <p className="x-list-label">Automatic disqualification</p>
                  {DISQUALIFIERS.map((item) => (
                    <div className="x-item" key={item}><p>{item}</p></div>
                  ))}
                </div>

                <div className="info-note">
                  <p>
                    <strong>Credit limits:</strong> Max 3 credits per calendar year — no monthly
                    cap, earn all 3 in the same month if you want, and stack them. Unused credits
                    carry forward within the year. Resets to 0 on 1 January. Credits are
                    non-cashable service credits — no cash payouts, ever.
                  </p>
                </div>
              </div>
            </details>
          </section>

          <section aria-label="Referral FAQ" className="compare-section">
            <h2>FAQ</h2>
            <div className="faq">
              <details>
                <summary>Is there a limit on how many creators I can refer?</summary>
                <p>No limit on referrals. Credits cap at 3 per calendar year — but you can earn all 3 in the same month if you want. Stack them and use them whenever. The counter resets to 0 on 1 January every year.</p>
              </details>
              <details>
                <summary>Which tier do we actually get — theirs or mine?</summary>
                <p>Both of you get 1 free month at whichever is higher: your current plan or the plan your referred creator activates — minimum Pro. If you&apos;re on Creator and they activate Pro, you both get Creator. If you&apos;re on Free and they activate Studio, you both get Studio. Neither of you ever gets less than Pro.</p>
              </details>
              <details>
                <summary>What counts as a genuine first donation?</summary>
                <p>A single donation of ₹50 or more from a real viewer — someone whose UPI account is different from the creator&apos;s own Razorpay account, phone number, or linked bank. Self-tips from any device or app don&apos;t qualify.</p>
              </details>
              <details>
                <summary>Can I tip the referred creator myself to help them qualify?</summary>
                <p>No. Donations from your own UPI account are detected and don&apos;t count. The first donation must come from a real viewer — someone with no financial or account link to either of you.</p>
              </details>
              <details>
                <summary>What if they refund their subscription?</summary>
                <p>Any pending credit is cancelled. If the refund is within 14 days of the subscription payment, the credit never fires in the first place — that&apos;s what the 14-day hold is for.</p>
              </details>
              <details>
                <summary>Can I cash out referral credits?</summary>
                <p>No. Referral credits are non-transferable service credits — they can only reduce your BharatStudio subscription bill. There is no cashout path and there won&apos;t be one.</p>
              </details>
            </div>
          </section>

          <section aria-label="Dashboard referral preview" className="compare-section">
            <div className="label">Coming soon</div>
            <h2>How it looks in your dashboard</h2>
            <p className="lede">
              When referral links launch, you&apos;ll find them under{' '}
              <code>Dashboard → Settings → Referrals</code>.
            </p>

            <div className="mock-window" aria-hidden="true">
              <div className="mock-titlebar">
                <div className="mock-dot" /><div className="mock-dot" /><div className="mock-dot" />
                <span className="mock-url">app.bharatstudio.in / settings / referrals</span>
              </div>
              <div className="mock-body">
                <div className="mock-sidebar">
                  <div className="mock-sidebar-item">▦ Overview</div>
                  <div className="mock-sidebar-item">◎ Alerts</div>
                  <div className="mock-sidebar-item">◈ Payments</div>
                  <div className="mock-sidebar-item">⊞ Customise</div>
                  <div className="mock-sidebar-item">⚙ Settings</div>
                  <div className="mock-sidebar-item">Account</div>
                  <div className="mock-sidebar-item">Overlay URL</div>
                  <div className="mock-sidebar-item active">Referrals</div>
                  <div className="mock-sidebar-item">Billing</div>
                </div>
                <div className="mock-main">
                  <h4>Referrals</h4>
                  <p className="muted">Share your link. Both get 1 free month — matched to the higher plan.</p>

                  <div className="mock-link-box">
                    <p className="x-list-label">Your referral link</p>
                    <div className="mock-link-row">
                      <div className="mock-link-value">bharatstudio.in?ref=<strong>yourname</strong></div>
                      <div className="mock-pill gold">Copy link</div>
                      <div className="mock-pill ghost">Share ↗</div>
                    </div>
                  </div>

                  <div className="mock-stats">
                    <div className="mock-stat"><p className="mock-stat-label">Link clicks</p><p className="mock-stat-value">—</p><span className="mock-stat-sub">Awaiting traffic</span></div>
                    <div className="mock-stat"><p className="mock-stat-label">Signed up</p><p className="mock-stat-value">—</p><span className="mock-stat-sub">via your link</span></div>
                    <div className="mock-stat"><p className="mock-stat-label">Converted</p><p className="mock-stat-value">—</p><span className="mock-stat-sub">activated paid plan</span></div>
                    <div className="mock-stat"><p className="mock-stat-label">Credits this year</p><p className="mock-stat-value">0 / 3</p><span className="mock-stat-sub">resets 1 Jan</span></div>
                  </div>

                  <p className="x-list-label">Recent referrals</p>
                  <div className="mock-empty">No referrals yet. Share your link to get started.</div>
                </div>
              </div>
            </div>
            <p className="compare-legend">
              Preview only — not a live page. The actual dashboard panel ships with referral link
              generation.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
