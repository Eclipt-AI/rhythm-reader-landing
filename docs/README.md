# Rhythm Reader — Landing Site

Marketing site and legal-document host for the **Rhythm Reader** mobile app, served at
`https://www.rhythmreader.com`.

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · TypeScript.

## Relationship to the mobile app

This repository is the public web face of the Flutter app in
`flutter_projects/rhythm_reader_mobile`. There is **no shared code and no API between
them** — the coupling is exactly three URLs, which the app opens in an external browser
and which are also submitted to App Store Connect and the Play Console:

| URL | Referenced from |
|---|---|
| `/terms` | `LegalUrls.terms` — app Settings and Login screens; both store listings |
| `/privacy` | `LegalUrls.privacy` — app Settings and Login screens; both store listings |
| `/account-deletion` | `LegalUrls.accountDeletion` — Play Console Data safety form |
| `/` | app Settings → "About Rhythm Reader" |

Those constants live in the mobile repo at `lib/core/domain/constants.dart`. **Renaming or
removing a route here breaks live links inside a shipped app build** and can trigger a
store rejection, so treat these four paths as a public contract.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build; all routes should prerender as static
```

## Structure

```
app/
├── layout.tsx              # root layout, fonts (Inter + Plus Jakarta), site metadata, metadataBase
├── page.tsx                # the single-page marketing site, composed of the sections below
├── globals.css             # Tailwind v4 theme tokens + .legal-prose typography
├── sitemap.ts, robots.ts   # generated /sitemap.xml and /robots.txt
├── terms/page.tsx          # /terms — Terms & Conditions (also the app EULA)
├── privacy/page.tsx        # /privacy — Privacy Policy
├── account-deletion/page.tsx  # /account-deletion — Play-required deletion instructions
└── components/
    ├── Header.tsx          # sticky nav; client component, same-page hash anchors
    ├── Hero.tsx            # top section with app screenshots
    ├── HowToUse.tsx        # scan → process → play walkthrough
    ├── Representation.tsx  # notation-rendering explainer
    ├── About.tsx           # product/mission section
    ├── Community.tsx       # community library section
    ├── Join.tsx            # download / QR-code CTA (qrcode.react)
    ├── Contact.tsx         # client component; composes a mailto: from the form fields
    ├── Footer.tsx          # site footer, incl. the Legal column
    ├── SectionBadge.tsx    # small pill label used above section headings
    ├── AnimateOnScroll.tsx # scroll-reveal wrapper (motion)
    └── LegalPage.tsx       # shared shell + LegalToc for the three legal routes
public/assets/              # app icon and phone screenshots
docs/plans/                 # approved implementation plans (committed project history)
```

## Conventions

- **The homepage is one page of anchored sections.** `Header` and `Footer` navigate with
  hash links. Footer hashes are written **root-relative** (`/#about`) so they also work
  from the legal routes; header hashes are bare (`#about`) because `Header` only ever
  renders on the homepage.
- **Design tokens live in `globals.css`** under `@theme inline` — `primary` (#F5761A),
  `dark`, `body`, `muted`, `surface`, plus `--font-inter` / `--font-plus-jakarta`. Use the
  token utilities (`text-body`, `bg-surface`, `text-primary`) rather than raw hex values.
- **Server components by default.** Only `Header`, `Contact`, and `AnimateOnScroll` are
  `"use client"`, because they hold state or observe scroll. The legal routes are fully
  static.
- **Legal documents are hand-written JSX**, not markdown or CMS content, styled by the
  `.legal-prose` block in `globals.css` (the site has no typography plugin). Each long
  document opens with a `LegalToc` whose ids must match its `<h2 id="…">` anchors.
- **No analytics, ads, or cookies** are set by this site — a claim the privacy policy makes
  explicitly, so keep it true or update `app/privacy/page.tsx` in the same change.

## Legal documents

`docs/plans/legal-pages.md` records why each document says what it says, including the
table of verified mobile-app data flows behind the privacy policy (notably that scans are
sent to the third-party recognition service `scoreflow.app`). Read it before editing the
documents — the text is deliberately matched to shipped app behaviour, and to what the two
app stores require.

Both documents carry a `TODO(legal)` marker where the publishing legal entity's registered
name and postal address should go once confirmed.
