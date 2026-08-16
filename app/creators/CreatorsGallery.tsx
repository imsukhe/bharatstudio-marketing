'use client'

import { useEffect, useState } from 'react'

/*
 * Client-side fetch of GET /v1/public/featured (bharatstudio-alerts).
 * This is the one approved cross-origin call on this static-export site —
 * see scripts/generate-csp-headers.mjs for the /creators/-only connect-src
 * widening, gated on NEXT_PUBLIC_ALERTS_API_ORIGIN being set at build time.
 *
 * Self-serve opt-in on the creator side (featured_consent), no admin
 * curation — a creator's own dashboard toggle is the only way a row
 * appears here. Deliberately no avatar, no billing tier: the API doesn't
 * return them (see bharatstudio-alerts's
 * packages/db/migrations/0072_v1_l03_featured_creator_listing.sql for why).
 */

type FeaturedCreator = { handle: string; displayName: string; acceptingTips: boolean; locale: string }
type GalleryState =
  | { status: 'unconfigured' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'ready'; creators: FeaturedCreator[] }

const API_ORIGIN = process.env.NEXT_PUBLIC_ALERTS_API_ORIGIN

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function parseFeaturedCreators(value: unknown): FeaturedCreator[] {
  if (!isRecord(value) || value.schemaVersion !== 'v1' || !Array.isArray(value.creators)) return []
  const creators: FeaturedCreator[] = []
  for (const entry of value.creators) {
    if (
      !isRecord(entry) ||
      typeof entry.handle !== 'string' || !/^[A-Za-z0-9._-]{1,64}$/.test(entry.handle) ||
      typeof entry.displayName !== 'string' || entry.displayName.length === 0 || entry.displayName.length > 120 ||
      typeof entry.acceptingTips !== 'boolean' ||
      typeof entry.locale !== 'string' || entry.locale.length === 0 || entry.locale.length > 16
    ) continue // one malformed row must not blank the whole gallery
    creators.push({ handle: entry.handle, displayName: entry.displayName, acceptingTips: entry.acceptingTips, locale: entry.locale })
  }
  return creators.slice(0, 100)
}

const LOCALE_LABELS: Record<string, string> = {
  'en-IN': 'English', 'hi-IN': 'Hindi', 'bn-IN': 'Bengali', 'ta-IN': 'Tamil', 'te-IN': 'Telugu',
  'mr-IN': 'Marathi', 'gu-IN': 'Gujarati', 'kn-IN': 'Kannada', 'ml-IN': 'Malayalam', 'pa-IN': 'Punjabi',
  'or-IN': 'Odia', 'as-IN': 'Assamese', 'ur-IN': 'Urdu',
}

export function CreatorsGallery({ fallback }: { fallback: React.ReactNode }) {
  const [state, setState] = useState<GalleryState>(API_ORIGIN ? { status: 'loading' } : { status: 'unconfigured' })

  useEffect(() => {
    if (!API_ORIGIN) return
    let cancelled = false
    fetch(`${API_ORIGIN}/v1/public/featured`, { cache: 'no-store' })
      .then(async (response) => (response.ok ? parseFeaturedCreators(await response.json()) : []))
      .then((creators) => { if (!cancelled) setState(creators.length > 0 ? { status: 'ready', creators } : { status: 'empty' }) })
      .catch(() => { if (!cancelled) setState({ status: 'empty' }) })
    return () => { cancelled = true }
  }, [])

  if (state.status !== 'ready') return fallback

  return (
    <div className="grid" role="list">
      {state.creators.map((creator) => (
        <div className="card-bezel" key={creator.handle} role="listitem">
          <div className="card-inner creator-card">
            <div className="creator-card-avatar" aria-hidden="true">{creator.displayName.charAt(0).toUpperCase()}</div>
            <h3>{creator.displayName}</h3>
            <p className="creator-card-handle">@{creator.handle}</p>
            <div className="lang-pill-row creator-card-langs">
              <span className="lang-pill">{LOCALE_LABELS[creator.locale] ?? creator.locale}</span>
              {creator.acceptingTips && <span className="lang-pill creator-card-open">Accepting tips</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
