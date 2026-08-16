/**
 * Shared alert-card visual, ported from the legacy marketing site's
 * alert-card.tsx. Used by the homepage demo widget and the Alerts product
 * page. All styling is class-based (globals.css) — no inline style props,
 * per the committed style-src 'self' CSP (no unsafe-inline).
 */

export function SoundWave({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      aria-hidden="true"
      className="sound-wave"
      data-active={active}
    >
      {[1, 4, 7, 10, 13, 16, 19].map((x, i) => (
        <rect
          key={x}
          x={x}
          y={active ? 0 : 4}
          width={2}
          height={active ? 14 : 6}
          rx={1}
          fill="#F7C948"
          opacity={active ? (i % 2 === 0 ? 0.8 : 0.5) : 0.25}
        />
      ))}
    </svg>
  )
}

export interface AlertCardProps {
  donor: string
  amount: number
  message: string
  visible: boolean
  showBadge: boolean
  caption?: string
}

export function AlertCard({ donor, amount, message, visible, showBadge, caption }: AlertCardProps) {
  const isMega = amount >= 1000
  const isSuper = amount >= 500 && !isMega
  const tier = isMega ? 'mega' : isSuper ? 'super' : 'default'

  return (
    <div className="alert-card-outer">
      <div
        aria-live="polite"
        className="alert-card-anim"
        data-visible={visible}
        data-tier={tier}
        data-badge={showBadge}
      >
        <div aria-hidden="true" className="alert-card-glow" />
        <div className="alert-card-body">
          <div aria-hidden="true" className="alert-card-shimmer" />
          {isMega && <div aria-hidden="true" className="alert-card-corner" />}
          <div className="alert-card-row">
            <div className="alert-card-avatar">{donor.charAt(0).toUpperCase()}</div>
            <div className="alert-card-main">
              <div className="alert-card-head">
                <span className="alert-card-donor">{donor}</span>
                <span className="alert-card-amount">₹{amount.toLocaleString('en-IN')}</span>
              </div>
              <p className="alert-card-message">{message}</p>
              <div className="alert-card-voice-row">
                <SoundWave active={visible} />
                <span className="alert-card-voice-label">AI voice</span>
              </div>
            </div>
          </div>
          <div className="alert-card-badge" aria-hidden={!showBadge}>
            · BharatStudio
          </div>
        </div>
      </div>
      {caption && <p className="alert-card-caption">{caption}</p>}
    </div>
  )
}
