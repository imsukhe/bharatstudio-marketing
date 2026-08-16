'use client'

import { useState, useEffect, useRef } from 'react'
import { AlertCard } from './AlertCard'

/* Sample data — same content as the legacy homepage demo widget. */
const SAMPLE_ALERTS = [
  { donor: 'Rohan', amount: 501, message: 'Op gameplay bhai 🔥 aur dikhao' },
  { donor: 'Priya', amount: 200, message: 'Best stream today! ❤️' },
  { donor: 'ArjunGG', amount: 1001, message: 'Keep grinding! Love from Pune 💪' },
  { donor: 'Siddharth', amount: 51, message: 'First tip ever! GG' },
  { donor: 'KamalKing', amount: 2000, message: 'Legend stream. Teri fans from Delhi 🔥' },
]

export function AlertDemoWidget() {
  const [customName, setCustomName] = useState('')
  const [alertIndex, setAlertIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [showBadge, setShowBadge] = useState(false) // default = Pro view (no badge)
  const cycleRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const currentBase = SAMPLE_ALERTS[alertIndex % SAMPLE_ALERTS.length]!
  const currentAlert = { ...currentBase, donor: customName.trim() || currentBase.donor }

  const triggerAlert = () => {
    setVisible(false)
    setTimeout(() => {
      setVisible(true)
      setAlertIndex((i) => i + 1)
    }, 220)
  }

  useEffect(() => {
    const initial = setTimeout(() => {
      setVisible(true)
      cycleRef.current = setInterval(triggerAlert, 7000)
    }, 1200)
    return () => {
      clearTimeout(initial)
      if (cycleRef.current) clearInterval(cycleRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomName(e.target.value)
    if (cycleRef.current) clearInterval(cycleRef.current)
    setVisible(false)
    setTimeout(() => {
      setVisible(true)
      cycleRef.current = setInterval(triggerAlert, 7000)
    }, 280)
  }

  return (
    <div className="demo-widget">
      <div className="demo-header-row">
        <div className="demo-live-label">
          <span className="demo-live-dot" />
          Live preview
        </div>
        <div role="group" aria-label="Preview tier" className="demo-tier-toggle">
          {[
            { label: 'Pro', badge: false },
            { label: 'Free tier', badge: true },
          ].map(({ label, badge }) => (
            <button
              key={label}
              type="button"
              role="radio"
              aria-checked={showBadge === badge}
              onClick={() => setShowBadge(badge)}
              className="demo-tier-btn"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-card-slot">
        <AlertCard
          donor={currentAlert.donor}
          amount={currentAlert.amount}
          message={currentAlert.message}
          visible={visible}
          showBadge={showBadge}
        />
      </div>

      <div className="demo-name-field">
        <label htmlFor="demo-name" className="demo-name-label">
          Enter your name to preview →
        </label>
        <input
          id="demo-name"
          type="text"
          value={customName}
          onChange={handleNameChange}
          placeholder="YourHandle"
          maxLength={30}
          autoComplete="off"
          className="demo-name-input"
        />
      </div>

      <p className="demo-hint">This is what your OBS will show. Live. Every tip.</p>
    </div>
  )
}
