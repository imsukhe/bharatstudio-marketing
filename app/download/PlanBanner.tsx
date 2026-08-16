'use client'

/*
 * Reflects the plan a visitor picked on /pricing back to them on /download —
 * closes the "every pricing CTA loses your choice" gap: all four /pricing
 * buttons link here with a `?plan=` query param; this renders what carried
 * through instead of the visitor's choice silently vanishing. No new
 * pricing facts — the labels below just restate the already-published
 * /pricing tier names, and the component renders nothing when the param is
 * absent or unrecognised.
 */
import { useSearchParams } from 'next/navigation'

const PLAN_LABELS: Record<string, string> = {
  free: 'Free',
  pro: 'Pro',
  creator: 'Creator',
  studio: 'Studio',
}

export function PlanBanner() {
  const params = useSearchParams()
  const plan = params.get('plan')?.toLowerCase()
  const label = plan ? PLAN_LABELS[plan] : undefined

  if (!label) return null

  return (
    <div className="notice" role="status">
      Continuing with the <strong>{label}</strong> plan — open Alerts below to finish setup.
    </div>
  )
}
