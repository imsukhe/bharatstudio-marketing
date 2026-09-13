# Pending: full-site redesign (Home v2 — "broadcast stage")

**Status:** paused mid-review, not approved, not wired into the live site. Parked here so it isn't lost between sessions — pick back up when ready.

## What's here

- `home-v2-broadcast-stage.html` — standalone, self-contained preview of the new Home page direction. Open directly in any browser (no build step, no server needed). Not a Next.js page, not linked from `app/`, does not affect the real build.

## Where this came from

Full-site redesign requested to make the marketing site more competitive with Streamlabs, StreamElements, Kick, and Twitch creator pages, while staying inside the existing brand tokens (gold `#F7C948` / blue `#3B7EF6` / near-black `#0A0A0F`, Rajdhani / DM Sans / JetBrains Mono — no new palette, no new type system).

Grounded in live, dated competitor research (WebFetch/Browser, fetched 2026-08-26) plus `ui-ux-pro-max` design-system search. Two iterations happened before pausing:

1. **v1** — recolored/reworded the existing site's layout skeleton (pill nav, 2-col hero, equal-card sections). User feedback: *"still feels like the old site only, not much has changed, still not comparable to other competitors or attractive."*
2. **v2** (this file) — structurally rebuilt in response: full-width "broadcast stage" hero (real browser-source chrome + live-firing `AlertCard` + scrolling tip ticker baked into the scene, replacing the small boxed widget), oversized centered headline, asymmetric "suite" section (one featured Alerts panel + stacked rows for Companion/Stream/Streamer, instead of 4 equal cards), HUD corner brackets + scanline texture, diagonal section seam. No user feedback received yet on v2 — this is the open question to resume with.

## Positioning decision already made (don't re-litigate)

Home repositioned from "Alerts + 0% commission" as the entire pitch to **platform-first**: BharatStudio as a suite (Alerts, Companion — both live; Stream — in development, iOS repo exists, mobile broadcasting, no PC/capture card; Streamer — roadmap, mirrors iPhone to Windows, Windows-first/iOS-source). Commission-free stays a strong claim but scoped to Alerts specifically (comparison band, feature bento, pricing strip all carry an "Alerts ·" eyebrow now), not the whole company's headline.

## Known open item — not blocking, but real

`bharatstudio-requirements/active/launch/00_LAUNCH_SCOPE_AUTHORITY.md` (dated 2026-08-14) currently scopes the *approved public v1 product* to Alerts + Companion only. The Stream/Streamer roadmap teaser on this page doesn't contradict that (same pattern as the existing "available at launch gate" language already used for Companion mobile), but if the site is meant to keep talking about Stream/Streamer beyond a light teaser, that governance doc should get a matching update — separate task from this design pass.

## Resuming this later

- Only Home has been iterated on. Every other page (Features, Alerts, Companion, Pricing, Compare, Creators, Resources, Docs, Support, Setup, Status, Affiliate, Compatibility, Legal) is still on the old design entirely — nothing below Home has started.
- Next step when picking this back up: get explicit feedback on v2's direction (does the broadcast-stage hero and asymmetric suite section land, or does it need another pass?), then carry the approved system through the rest of the site page by page.
- Full competitor research (Streamlabs, StreamElements, Kick, Twitch Creator Camp) is preserved in this conversation's history, not re-saved as a separate doc — re-run it fresh if too much time has passed before resuming, since CLAUDE.md requires dated evidence for competitor claims.
