'use client'

/*
 * Commission-savings calculator — /compare
 * Ported from the legacy BharatStudio Alerts marketing site
 * (components/marketing/commission-calculator.tsx), rewritten with CSS
 * classes instead of inline styles. Uses generic labels only — does not
 * name any competitor. BharatStudio Pro fee (₹199) matches the current
 * approved /pricing figures.
 */
import { useState, useId } from 'react'

function fmt(n: number) {
  return '₹' + Math.round(n).toLocaleString('en-IN')
}

// BharatStudio's own paid tiers — matches the current approved /pricing
// figures. Free isn't offered here since the calculator exists to compare
// commission-based pricing against a flat subscription; Free has no
// subscription fee to compare.
const BSA_TIERS: { value: string; label: string; fee: number }[] = [
  { value: 'pro', label: 'Pro (₹199/mo)', fee: 199 },
  { value: 'creator', label: 'Creator (₹399/mo)', fee: 399 },
  { value: 'studio', label: 'Studio (₹499/mo)', fee: 499 },
]

export function CommissionCalculator() {
  const [rate, setRate] = useState(10) // percent
  const [volume, setVolume] = useState(10000)
  const [tier, setTier] = useState('pro')

  const sliderId = useId()
  const volumeId = useId()
  const tierId = useId()

  // Other platform (generic, no competitor named)
  const commission = (volume * rate) / 100
  const gstOnCommission = commission * 0.18
  const platformFee = 249
  const gatewayFee = volume * 0.02 // 2% UPI — identical in both columns
  const platformTotal = commission + gstOnCommission + platformFee + gatewayFee

  // BharatStudio — selected tier
  const bsaCommission = 0
  const bsaGstOnCommission = 0
  const bsaFee = BSA_TIERS.find((t) => t.value === tier)?.fee ?? BSA_TIERS[0].fee
  const bsaTierLabel = BSA_TIERS.find((t) => t.value === tier)?.label.split(' (')[0] ?? 'Pro'
  const bsaTotal = bsaFee + gatewayFee

  const savings = platformTotal - bsaTotal

  return (
    <div className="calculator">
      <p className="label">How much does commission cost you?</p>
      <h3>Adjust the sliders to see your monthly cost difference.</h3>
      <p className="calc-intro">
        Razorpay&apos;s payment processing fee is shown in both columns — it applies regardless of
        which tool you use.
      </p>

      <div className="calc-inputs">
        <div className="calc-field">
          <label htmlFor={sliderId}>
            <span>Other platform commission</span>
            <span className="calc-field-value bad">{rate}%</span>
          </label>
          <input
            id={sliderId}
            type="range"
            min={5}
            max={20}
            step={1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            aria-label={`Commission rate: ${rate}%`}
          />
          <div className="calc-range-labels"><span>5%</span><span>20%</span></div>
        </div>

        <div className="calc-field">
          <label htmlFor={volumeId}>Monthly tip volume</label>
          <div className="calc-amount-wrap">
            <span className="calc-amount-prefix" aria-hidden="true">₹</span>
            <input
              id={volumeId}
              type="number"
              min={1000}
              max={500000}
              step={1000}
              value={volume}
              onChange={(e) => {
                const v = Number(e.target.value)
                if (v > 0) setVolume(v)
              }}
              aria-label="Monthly tip volume in rupees"
            />
          </div>
        </div>

        <div className="calc-field">
          <label htmlFor={tierId}>Your BharatStudio plan</label>
          <select
            id={tierId}
            value={tier}
            onChange={(e) => setTier(e.target.value)}
            aria-label="BharatStudio plan to compare against"
          >
            {BSA_TIERS.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="calc-results">
        <div className="calc-row-head">
          <span></span><span>Other platform</span><span>BharatStudio {bsaTierLabel}</span>
        </div>
        <div className="calc-row">
          <span>Commission</span>
          <span className="calc-num bad">{fmt(commission)}</span>
          <span className="calc-num">{fmt(bsaCommission)}</span>
        </div>
        <div className="calc-row">
          <span>GST on commission (18%)</span>
          <span className="calc-num">{fmt(gstOnCommission)}</span>
          <span className="calc-num">{fmt(bsaGstOnCommission)}</span>
        </div>
        <div className="calc-row">
          <span>Monthly platform fee</span>
          <span className="calc-num">{fmt(platformFee)}</span>
          <span className="calc-num">{fmt(bsaFee)}</span>
        </div>
        <div className="calc-row">
          <span>Razorpay gateway fee (est.)</span>
          <span className="calc-num">{fmt(gatewayFee)}</span>
          <span className="calc-num">{fmt(gatewayFee)}</span>
        </div>
        <div className="calc-total">
          <span>Total monthly cost</span>
          <span className="calc-num bad">{fmt(platformTotal)}</span>
          <span className="calc-num good">{fmt(bsaTotal)}</span>
        </div>
      </div>

      {savings > 0 && (
        <div className="calc-savings" role="status" aria-live="polite" aria-label={`Estimated monthly saving: ${fmt(savings)}`}>
          <span className="calc-savings-amount">{fmt(savings)}</span>
          <span className="calc-savings-text">
            estimated monthly saving at {rate}% commission and {fmt(volume)} in tips. That&apos;s{' '}
            <strong>{fmt(savings * 12)} / year.</strong>
          </span>
        </div>
      )}

      <p className="calc-footnote">
        Estimate only. Gateway fee is an approximation — actual Razorpay rates depend on payment
        method and your agreement. Check{' '}
        <a href="https://razorpay.com/pricing/" target="_blank" rel="noopener noreferrer">razorpay.com/pricing</a>{' '}
        for current rates. GST of 18% applies to the commission charged by the other platform only.
      </p>
    </div>
  )
}
