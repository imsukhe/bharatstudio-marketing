/**
 * Static blog posts — BharatStudio product updates and creator guides.
 *
 * Ported verbatim from the legacy BharatStudio Alerts marketing site
 * (apps/web/src/app/(marketing)/blog/posts.ts). Content is dated, static and
 * does not require a live CMS fetch — a correct fit for this repo's static
 * export architecture.
 */

export type BlogPost = {
  slug: string
  title: string
  description: string
  category: 'Product' | 'Creator tips' | 'Technology' | 'Company'
  publishedAt: string // ISO date string
  readMinutes: number
  content: string // Markdown-like plain text, rendered by BlogContent
  featured?: boolean
}

export const POSTS: BlogPost[] = [
  {
    slug: 'why-we-built-bharatstudio',
    title: 'Why we built BharatStudio Alerts',
    description:
      "Indian streamers deserve tools built for India — not workarounds, not broken UPI, not 8% commissions. Here's the exact problem we set out to fix.",
    category: 'Company',
    publishedAt: '2026-07-15',
    readMinutes: 5,
    featured: true,
    content: `
## The problem we couldn't ignore

Every Indian streamer we talked to had the same complaints.

Their current setup was held together with duct tape. Some would keep a second phone open during stream, watching for bank notifications. Others had a friend in Discord who would paste tip details whenever they saw one come in. The most organised would check their payment history between games and shout out missed tips after the fact.

The tools that existed were built for Twitch with card payments in the US. India was an afterthought — and it showed. UPI either didn't work or required a third-party workaround that broke every few months. Settlement would take days and go through currency conversion. And somehow the platforms doing this were still charging 5–8% on every tip.

**The commission issue was the one that bothered us most.** Indian streamers were creating real value — building communities, entertaining thousands, producing content for years — and giving a meaningful cut to a platform that didn't even build for them.

## What we wanted to build

We wanted alerts that worked the way a creator actually lives their stream. Payment comes in → your stream reacts → your community sees it → you get the money.

No manual steps. No refresh and check. No "wait for the next game break to read out missed tips." Just a live, animated alert with the donor's name and message, read aloud in the language your community speaks.

And we wanted the pricing to be honest. Flat subscription. Zero commission. The price is the price — no surprises, no percentage taken from your earnings.

## What we built

BharatStudio Alerts is a Razorpay-connected donation alert tool. When a viewer pays — via GPay, PhonePe, Paytm, a debit card, or any other method — the payment goes directly to your Razorpay account. We're the alert layer on top: the animated card that plays on stream, the AI voice that reads the message aloud, the tip history you can filter and export.

The overlay runs as a Browser Source in OBS. It connects to our servers and plays the alert within moments of the payment being confirmed.

The AI voice reads the donor's message aloud in 11 Indian languages: Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, Gujarati, Punjabi, Odia, and English. The language is detected automatically, or you can fix it to one language in your settings.

This is what we launched with. We're building the rest publicly.
    `.trim(),
  },
  {
    slug: 'obs-browser-source-setup-india',
    title: 'Setting up donation alerts in OBS — complete guide for Indian streamers',
    description:
      'A step-by-step guide to adding BharatStudio Alerts to your stream. Works with OBS Studio, Streamlabs, and Streamyard.',
    category: 'Creator tips',
    publishedAt: '2026-07-22',
    readMinutes: 6,
    content: `
## How donation alerts work in OBS

OBS has a layer type called "Browser Source." It lets you embed a live web page inside your stream — and we use this to display donation alerts. When a viewer tips you, our overlay page plays an animated card with their name, amount, and an AI-voiced message. Your audience sees it on stream in real time.

You paste a URL — your personal overlay URL — into OBS once. That's it. Every time a viewer pays, your OBS reacts automatically.

## Step-by-step setup

### 1. Complete your BharatStudio onboarding

Before you can get your overlay URL, you need to finish onboarding:
- Connect your Razorpay account (where payments will land)
- Choose your alert style (font, animation, AI voice language)

If you haven't done this yet, go to **app.bharatstudio.in → Onboarding**.

### 2. Copy your overlay URL

After onboarding, go to **Dashboard → Settings → Overlay URL**. Copy the full URL shown there. Keep this URL private — it's personal to your account. You can reset it any time from the same settings page.

### 3. Add it to OBS

In OBS Studio:
1. In the **Sources** panel, click **+** → **Browser**
2. Name it something like "BharatStudio Alerts"
3. Paste your overlay URL into the **URL** field
4. Set **Width** to **1920** and **Height** to **1080** (match your stream resolution)
5. Check **"Shutdown source when not visible"** — saves performance when you're in a non-alert scene
6. Click **OK**

### 4. Position the overlay

The overlay is fully transparent. Place it on top of your game or camera layers in OBS. Alerts will appear in the corner you picked during onboarding.

### 5. Test it

In your BharatStudio dashboard, click **Send test alert**. You should see the alert play in OBS within a second or two. If it doesn't show up, check that the Browser Source is unmuted in the OBS Audio Mixer.

## Streamlabs and Streamyard

Both support Browser Source. The process is the same — find "Browser Source" in your scene editor, paste the URL, set to 1920×1080.

In Streamlabs: **Scene Editor → + → Browser Source**.
In Streamyard: **Overlays → Custom URL**.

## Common issues

**Alert doesn't appear:** Make sure your overlay URL is correct and the Browser Source is visible in the active scene.

**No sound:** OBS mutes Browser Source audio by default. In the **Audio Mixer**, find your Browser Source and unmute it.

**Alert appears behind game content:** Reorder your scene layers — drag the BharatStudio layer above your game and camera sources.

**Alert was reset:** If you regenerated your overlay URL in settings, update the URL in OBS to match.
    `.trim(),
  },
  {
    slug: 'how-viewers-tip-your-stream',
    title: 'How your viewers send you tips — all the payment methods explained',
    description:
      "GPay, PhonePe, Paytm, debit cards, credit cards, netbanking — here's how donation pages work and what your viewers actually see.",
    category: 'Creator tips',
    publishedAt: '2026-07-29',
    readMinutes: 4,
    content: `
## What your viewers see

When a viewer goes to your tip page — bharatstudio.in/tips/yourhandle — they see a simple form with your name, your channel avatar, and a set of amount options. They pick an amount, type a message, and tap "Send tip."

After that, Razorpay's payment page opens. This is the same payment screen they use for online shopping, food delivery, and everything else — so it's already familiar.

## Payment methods that work

BharatStudio uses Razorpay to handle payments, which means your viewers can pay with:

- **UPI** — GPay, PhonePe, Paytm, BHIM, any UPI app they already have
- **Debit cards** — Visa, Mastercard, RuPay
- **Credit cards** — including international cards
- **Netbanking** — most major Indian banks
- **Wallets** — Paytm wallet, Freecharge, and others

The most common is UPI — it's 3 taps and done. But international viewers or those without UPI can still tip with a card. Nothing is blocked.

## What happens after they pay

As soon as the payment goes through, two things happen at the same time:

1. The tip amount lands in your Razorpay account — Razorpay settles to your bank account on their standard schedule
2. An animated alert fires on your OBS overlay — your stream reacts in real time

There's no manual step. No "check your phone and announce it." The alert plays automatically with the donor's name and message, read aloud in the language you've set.

## Minimum tip amounts

Each plan has a minimum tip amount to keep your alerts meaningful:

| Your plan | Minimum tip |
|---|---|
| Free | ₹50 |
| Pro | ₹50 |
| Creator | ₹30 |
| Studio | ₹20 |

Tips below the minimum aren't blocked — they're just not shown on stream. The viewer still pays and you still receive the money; the alert just doesn't fire.

## What about Razorpay's fee?

Razorpay charges a standard payment processing fee on each transaction — the same fee you pay on any Razorpay payment. This fee goes to Razorpay, not to us. BharatStudio takes 0% of every tip on every plan. Check current rates at [razorpay.com/pricing](https://razorpay.com/pricing/).
    `.trim(),
  },
  {
    slug: 'ai-voice-alerts-11-languages',
    title: 'AI voice alerts in 11 Indian languages — how to set it up',
    description:
      "BharatStudio reads donation messages aloud in Hindi, Tamil, Telugu, and 8 more Indian languages. Here's how to pick the right setting for your stream.",
    category: 'Creator tips',
    publishedAt: '2026-08-01',
    readMinutes: 5,
    content: `
## Why AI voice matters on a live stream

Reading out every donation message yourself interrupts your commentary. Skipping it feels rude. AI voice solves this — every tip gets acknowledged, in the language your community speaks, without you stopping what you're doing.

The AI voice reads the donor's name and their message. Your audience hears it in real time.

## Languages supported

BharatStudio supports 11 Indian languages for AI-voiced alerts:

| Language | Works on |
|---|---|
| Hindi | Pro, Creator, Studio |
| Tamil | Pro, Creator, Studio |
| Telugu | Pro, Creator, Studio |
| Kannada | Pro, Creator, Studio |
| Malayalam | Pro, Creator, Studio |
| Marathi | Pro, Creator, Studio |
| Bengali | Pro, Creator, Studio |
| Gujarati | Pro, Creator, Studio |
| Punjabi | Pro, Creator, Studio |
| Odia | Pro, Creator, Studio |
| English | All plans including Free |

Free tier alerts use English-only browser voice. Pro and above unlock all 11 languages.

## How to set your language

Go to **Dashboard → Alert Settings → AI Voice**. You have two options:

**Auto-detect** (default) — The AI reads each message in whatever language it's written in. A Hindi message gets read in Hindi; an English message in English. Good for communities that mix languages.

**Fixed language** — Every message gets read in one language, regardless of what the donor typed. Good if your community is predominantly one language and you want consistency.

## Message length limits

Each plan has a cap on how long a tipped message can be. Longer messages mean a longer AI reading — the limits keep your stream flowing.

| Plan | Message cap |
|---|---|
| Free | 100 characters |
| Pro | 150 characters |
| Creator | 200 characters |
| Studio | 300 characters |

Viewers can type longer messages, but only the first N characters get read aloud. The full message is visible in your tip history.

## Monthly voice minutes

AI voice is compute-intensive, so each plan has a monthly allowance. Most streamers never hit it — a full-length Studio message uses about 300 characters out of a 100,000-character monthly allowance. The allowance resets on the 1st of each month.

If you do run out, alerts still play but without voice — the animated card shows as normal, just silently.
    `.trim(),
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export function getFeaturedPost(): BlogPost | undefined {
  return POSTS.find((p) => p.featured)
}
