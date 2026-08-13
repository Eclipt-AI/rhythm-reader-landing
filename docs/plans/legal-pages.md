# Legal pages: Terms & Conditions, Privacy Policy, Account Deletion

**Status:** done — implemented and confirmed by the user on 2026-08-13

Add store-compliant legal documents to the Rhythm Reader landing site so the URLs can be
pasted into App Store Connect and the Google Play Console, and wire the mobile app's
existing (currently placeholder) legal links to them.

## Decisions taken (2026-08-13)

| Question | Answer |
|---|---|
| Provider / controller | `Rhythm Reader` brand only — no entity or postal address yet; a clearly marked TODO stays in both files |
| Governing law | California, USA. CCPA/CPRA section + GDPR section for EU/UK visitors |
| Minimum age | 13+; no knowing collection from under-13s (avoids COPPA) |
| Community sheets | Public UGC. Non-exclusive licence limited to operating the Service, plus a rights warranty and a DMCA takedown process |
| Contact | `hello@rhythmreader.com` for privacy, deletion and takedown requests |
| Diagnostics | Disclose crash reporting only. **Do not** claim analytics — `firebase_analytics` is never called from Dart |

## Verified app behaviour the documents must match

Established by reading `rhythm_reader_mobile`, not by assumption:

| Fact | Source |
|---|---|
| Sign-in: email/password, Google, Apple, phone | `lib/features/auth/application/auth_service/auth_service.dart:28-44` |
| Profile stored: `uid`, `email`, `fullName`, `createdAt`, `settings` | `lib/core/domain/models/app_user/app_user.dart:13-28` |
| Camera + photo library used for scanning | `ios/Runner/Info.plist` (`NSCameraUsageDescription`, `NSPhotoLibraryUsageDescription`), `android/app/src/main/AndroidManifest.xml` (`READ_MEDIA_IMAGES`) |
| **Scans are sent to a third party**: image → PDF → `POST https://scoreflow.app/api/convert` | `lib/features/scanner/application/services/score_flow_service.dart:71` |
| Preview images uploaded to Firebase Storage; sheet metadata + MusicXML refs in Firestore | `lib/features/scanner/presentation/pages/save_score_page/save_score_page.dart:264`, `lib/core/domain/models/sheet/sheet.dart` |
| Sheets are `community` (public, Algolia-searchable) or `onlyMe` | `lib/features/scanner/domain/enums/scan_visibility.dart`, `lib/features/home/presentation/providers/sheets_provider.dart:74` |
| Subscriptions via Adapty, `identify(firebaseUid)`; levels free / weekly / premium | `lib/features/adapty/presentation/providers/adapty/adapty.dart:25`, `lib/features/adapty/domain/constraints/access_level.dart` |
| Crashlytics collection enabled in the **development** flavor only | `lib/main.dart:35` |
| `firebase_analytics` is a dependency but never imported in `lib/` | `pubspec.yaml`, grep |
| Account deletion already implemented in-app via `deleteUserAccount` callable | `lib/features/auth/data/cloud_functions/delete_account_function.dart` |
| Legal links currently point at `https://www.google.com` | `lib/features/home/.../settings_page/settings_page.dart:289,302` |
| No ad SDK, no ad identifier, no location, no microphone, no contacts | pubspec dependency audit |

## What will change

### Landing repo — `next/rhythm-reader-landing`

| File | Change |
|---|---|
| `app/globals.css` | add a scoped `.legal-prose` typography block (no typography plugin available) |
| `app/components/LegalPage.tsx` | **new** — shared shell: minimal sticky header linking back to `/`, title, effective/updated date, prose container, reuses `Footer` |
| `app/terms/page.tsx` | **new** — `/terms`, Terms & Conditions doubling as the app EULA |
| `app/privacy/page.tsx` | **new** — `/privacy`, Privacy Policy |
| `app/account-deletion/page.tsx` | **new** — `/account-deletion`, required by Play for apps with sign-in |
| `app/components/Footer.tsx` | new "Legal" column; existing `#hash` hrefs become `/#hash` so they work off the homepage |
| `app/sitemap.ts`, `app/robots.ts` | **new** — small, helps store reviewers and crawlers reach the pages |
| `docs/README.md` | **new** — the landing site had no documentation at all (flagged as a precondition) |

### Mobile repo — `flutter_projects/rhythm_reader_mobile`

| File | Change |
|---|---|
| `lib/features/home/.../settings_page/settings_page.dart` | replace the two `https://www.google.com` URLs with `https://www.rhythmreader.com/terms` and `/privacy` |
| `lib/features/auth/.../login_page/login_page.dart` | make the two existing non-tappable legal labels actually open those URLs |

### Document coverage

**Terms & Conditions** — acceptance; 13+ eligibility; accounts; licence scope; auto-renewing
subscriptions with every App Store Schedule 2 disclosure (charged to the store account,
auto-renews unless turned off ≥24h before period end, renewal charge window, manage via
account settings, no mid-period cancellation, free-trial forfeiture) and the Play billing
equivalent; user content ownership; **copyright warranty for scanned music**; community
licence; acceptable use; DMCA notice-and-takedown with counter-notice and repeat-infringer
policy; third-party processing (ScoreFlow, Firebase, Adapty, Algolia); **recognition-accuracy
disclaimer**; termination; warranty disclaimer; liability cap with consumer carve-outs;
indemnity; California governing law and venue; the full Apple third-party-beneficiary
acknowledgements; Google Play note; export/sanctions; boilerplate.

**Privacy Policy** — at-a-glance table; categories collected (account, content, purchase,
crash diagnostics, support correspondence); an explicit *not collected* list (no ad ID, no
tracking, no location, no mic, no contacts); camera/photo-library scope; purposes with GDPR
legal bases; sub-processor table naming ScoreFlow, Google Firebase, Adapty, Algolia and the
app stores; "we do not sell or share for cross-context behavioural advertising"; what
community visibility exposes; international transfers; retention; security; GDPR and
CCPA/CPRA rights incl. non-discrimination and appeal; deletion instructions; children;
GPC/DNT; changes; contact.

## What will be affected

Additive. The only edits to existing landing code are Footer link hrefs (`/#about` resolves
correctly from both the homepage and the legal pages) and the `globals.css` addition, which
is namespaced under `.legal-prose`. No existing section, component, or copy changes.
The mobile edits are two URL strings plus wrapping two `Text` widgets in `GestureDetector`s.

## Pros / cons

- **Pro:** documents describe the app as it actually behaves, so the store privacy
  declarations can be filled in directly from the sub-processor table and the *not collected*
  list. The ScoreFlow disclosure in particular is the kind of omission that draws a Play
  Data-safety rejection.
- **Pro:** static routes, zero new dependencies, no client JS beyond what the site already ships.
- **Con:** brand-only provider with no legal entity or postal address is weaker than naming an
  entity, and GDPR Art. 13 expects controller identity — acceptable for store review, worth
  filling in before any EU marketing push.
- **Alternative rejected:** a generator/boilerplate policy. It would not have named ScoreFlow
  or the community-visibility exposure, which are the two disclosures that actually matter here.

## Migrations & preconditions

1. **`www.rhythmreader.com` must serve this build** before the URLs go into App Store Connect
   or Play Console — reviewers fetch them, and a 404 is a rejection.
2. **Fill in the legal entity and postal address** where both documents carry a marked TODO.
3. **`hello@rhythmreader.com` must be monitored** — it is now the stated channel for GDPR/CCPA
   requests (statutory response deadlines) and DMCA notices.
4. **Keep code and disclosure in sync:** the policy claims crash diagnostics and *no*
   analytics. If Analytics is ever wired up, or Crashlytics is enabled in production
   (`main.dart:35` currently limits it to development), the policy and the store privacy
   labels must be updated in the same change. Removing the unused `firebase_analytics`
   dependency is the cleaner resolution.
5. **Store privacy declarations** still need to be completed by hand in both consoles —
   a policy URL does not populate them.
6. Not legal advice: accurate to the code and shaped to both stores' requirements, but a
   lawyer should read it before launch.

## Steps

- [x] Verify actual data flows in the mobile app (sub-processors, permissions, sharing model)
- [x] Confirm the open legal decisions with the user
- [x] Write this plan artifact
- [x] `app/globals.css` — `.legal-prose` typography
- [x] `app/components/LegalPage.tsx` — shared legal shell
- [x] `app/terms/page.tsx`
- [x] `app/privacy/page.tsx`
- [x] `app/account-deletion/page.tsx`
- [x] `app/components/Footer.tsx` — Legal column + `/#` hrefs
- [x] `app/sitemap.ts`, `app/robots.ts`
- [x] `docs/README.md` — landing site baseline documentation
- [x] Mobile: real URLs in `settings_page.dart`, tappable links in `login_page.dart`
- [x] `npm run build` passes; `flutter analyze` clean on the two touched files
- [x] User E2E check, then commit and push both repos
