import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalToc } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Rhythm Reader",
  description:
    "How Rhythm Reader collects, uses, shares, and protects your personal information — including what happens to the sheet music you scan.",
  alternates: { canonical: "/privacy" },
};

const toc = [
  { id: "summary", label: "At a glance" },
  { id: "who-we-are", label: "Who we are" },
  { id: "what-we-collect", label: "What we collect" },
  { id: "not-collected", label: "What we do not collect" },
  { id: "camera", label: "Camera and photo library" },
  { id: "how-we-use", label: "How we use your information" },
  { id: "sharing", label: "Who we share it with" },
  { id: "community", label: "What community sharing makes public" },
  { id: "transfers", label: "International transfers" },
  { id: "retention", label: "How long we keep it" },
  { id: "security", label: "Security" },
  { id: "rights", label: "Your privacy rights" },
  { id: "deletion", label: "Deleting your data" },
  { id: "children", label: "Children and schools" },
  { id: "dnt", label: "Do Not Track and Global Privacy Control" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "How to contact us" },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="What Rhythm Reader collects, why, who else sees it, and how to get it deleted."
      effectiveDate="13 August 2026"
      lastUpdated="13 August 2026"
    >
      <LegalToc items={toc} />

      <h2 id="summary">1. At a glance</h2>
      <p>
        This summary is not a substitute for the full policy below, but it covers the parts people
        most want to know.
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Short answer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>What do you collect?</td>
              <td>
                Your account details, the sheet music you scan and the scores derived from it, your
                subscription status, crash diagnostics, and anything you email us.
              </td>
            </tr>
            <tr>
              <td>Do my scans leave my phone?</td>
              <td>
                <strong>Yes.</strong> To turn a photo into a playable score we send it to our
                recognition provider, ScoreFlow. See{" "}
                <a href="#sharing">section 7</a>.
              </td>
            </tr>
            <tr>
              <td>Do you sell my data?</td>
              <td>
                <strong>No.</strong> We do not sell personal information and do not share it for
                cross-context behavioural advertising.
              </td>
            </tr>
            <tr>
              <td>Do you track me for ads?</td>
              <td>
                No. There is no advertising SDK in the app, we do not use the advertising
                identifier, and we do not track you across other apps or websites.
              </td>
            </tr>
            <tr>
              <td>Can other people see my scores?</td>
              <td>
                Only the ones you save as <strong>Community</strong>. Scores saved as{" "}
                <strong>Only me</strong> are not published. See <a href="#community">section 8</a>.
              </td>
            </tr>
            <tr>
              <td>How do I delete everything?</td>
              <td>
                <strong>Settings → Delete account</strong> in the app, which deletes your account
                and its data. See <a href="#deletion">section 13</a>.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="who-we-are">2. Who we are</h2>
      <p>
        This policy explains how <strong>Rhythm Reader</strong> (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;, &ldquo;our&rdquo;) handles personal information when you use the Rhythm
        Reader mobile app, the website at rhythmreader.com, and related services (the{" "}
        <strong>&ldquo;Service&rdquo;</strong>). For the purposes of the EU and UK GDPR we are the{" "}
        <strong>data controller</strong> for that information.
      </p>
      {/* TODO(legal): insert the publishing legal entity's registered name and postal
          address here and in /terms once the entity is confirmed. GDPR Art. 13 expects
          the controller's identity and contact details. */}
      <p>
        Contact: <a href="mailto:hello@rhythmreader.com">hello@rhythmreader.com</a>. Our{" "}
        <Link href="/terms">Terms &amp; Conditions</Link> govern your use of the Service.
      </p>

      <h2 id="what-we-collect">3. What we collect</h2>

      <h3>3.1 Account information</h3>
      <p>
        You can sign in with an email address and password, or with Google, Apple, or your phone
        number. Depending on the method, we receive and store:
      </p>
      <ul>
        <li>
          a user ID that identifies your account, your <strong>email address</strong>, your{" "}
          <strong>name</strong> where the sign-in provider supplies one, and the date your account
          was created;
        </li>
        <li>
          your <strong>phone number</strong>, if you choose phone sign-in;
        </li>
        <li>
          your in-app preferences — for example your chosen instrument, score scale, and
          playback-line setting.
        </li>
      </ul>
      <p>
        Authentication is handled by <strong>Google Firebase Authentication</strong>. If you use a
        password, it is stored by Firebase in hashed form and we never see it. If you use Sign in
        with Apple and choose to hide your email, we receive only Apple&rsquo;s relay address.
      </p>

      <h3>3.2 Content you create</h3>
      <ul>
        <li>
          <strong>Photos of sheet music</strong> you capture with the camera or select from your
          photo library, including any cropping you apply;
        </li>
        <li>
          the <strong>digital score</strong> produced from each scan (its musical notation data and
          a preview image);
        </li>
        <li>
          the details you attach to it — <strong>title</strong>, chosen{" "}
          <strong>instrument</strong>, <strong>visibility</strong> (Community or Only me), tempo
          preference, and creation date;
        </li>
        <li>
          library actions such as saving or liking a score, so your library persists across
          devices.
        </li>
      </ul>

      <h3>3.3 Subscription and purchase information</h3>
      <p>
        Paid features are sold through the Apple App Store and Google Play. Those stores process
        the payment — <strong>we never receive or store your card number or bank details</strong>.
        Through our subscription-management provider <strong>Adapty</strong> we receive and store
        your subscription status and entitlement level, the plan and store involved, transaction
        and receipt identifiers, renewal and expiry dates, trial status, and country. Adapty is
        given your Rhythm Reader user ID so your subscription follows your account across devices.
      </p>

      <h3>3.4 Device and diagnostic information</h3>
      <p>
        When the app crashes or hits a serious error, <strong>Google Crashlytics</strong> collects a
        diagnostic report so we can fix it. Those reports typically include the device model,
        operating-system version, app version, locale, the time of the crash, the technical stack
        trace, and a randomly generated installation identifier. They are not used to build a
        profile of you or to advertise to you.
      </p>

      <h3>3.5 Messages you send us</h3>
      <p>
        If you email us or use the contact form on our website, we receive what you put in it. The
        website form is submitted through your own email application and may include your name,
        email address, age, school or organisation, instrument, musical affiliation, and your
        message. Only fill in the fields you are comfortable sharing.
      </p>

      <h3>3.6 Website visits</h3>
      <p>
        The rhythmreader.com website does not set advertising or analytics cookies. Like almost all
        websites it is served by a hosting provider that keeps short-lived technical server logs
        (IP address, request time, page requested, user agent) for security and reliability.
      </p>

      <h2 id="not-collected">4. What we do not collect</h2>
      <p>To be explicit, the app does not collect or use:</p>
      <ul>
        <li>
          <strong>advertising identifiers</strong> (IDFA / Android Advertising ID), and there is no
          advertising SDK in the app;
        </li>
        <li>
          <strong>tracking data</strong> — we do not track you across other companies&rsquo; apps
          or websites, and we do not share data with data brokers;
        </li>
        <li>
          <strong>precise or coarse location</strong> data;
        </li>
        <li>
          <strong>microphone audio</strong>, your contacts, calendar, health data, or your browsing
          history;
        </li>
        <li>
          photos from your library other than the ones you actively pick for a scan.
        </li>
      </ul>

      <h2 id="camera">5. Camera and photo library</h2>
      <p>
        The app asks for camera access so you can photograph sheet music, and for photo-library
        access so you can pick an existing image instead. Both are used{" "}
        <strong>only while you are scanning</strong> — nothing is captured in the background, and
        we only receive the specific images you choose to scan. You can refuse or withdraw either
        permission in your device settings; scanning will not work without at least one of them,
        but the rest of the app continues to function.
      </p>

      <h2 id="how-we-use">6. How we use your information</h2>
      <p>
        The table below lists our purposes and, for people in the EU, UK, and other GDPR
        jurisdictions, the legal basis for each.
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Information used</th>
              <th>Legal basis (GDPR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Create and maintain your account; sign you in</td>
              <td>Account information</td>
              <td>Performance of our contract with you</td>
            </tr>
            <tr>
              <td>
                Convert your scans into playable scores and store your library across devices
              </td>
              <td>Photos you scan, derived scores, score details</td>
              <td>Performance of our contract with you</td>
            </tr>
            <tr>
              <td>Publish scores you mark as Community, and make them searchable</td>
              <td>Score, preview, title, instrument, creator ID</td>
              <td>Performance of our contract, at your instruction</td>
            </tr>
            <tr>
              <td>Sell, activate, and restore subscriptions; prevent purchase abuse</td>
              <td>Subscription and purchase information</td>
              <td>Performance of our contract; our legitimate interests</td>
            </tr>
            <tr>
              <td>Diagnose crashes, fix bugs, keep the Service secure and reliable</td>
              <td>Device and diagnostic information</td>
              <td>
                Our legitimate interests in a working, secure product (and consent where required)
              </td>
            </tr>
            <tr>
              <td>Respond to your support requests and questions</td>
              <td>Messages you send us</td>
              <td>Performance of our contract; our legitimate interests</td>
            </tr>
            <tr>
              <td>Enforce our Terms, handle copyright notices, prevent abuse</td>
              <td>Account information, content, diagnostics</td>
              <td>Our legitimate interests; compliance with legal obligations</td>
            </tr>
            <tr>
              <td>Comply with law and respond to lawful requests</td>
              <td>As required</td>
              <td>Compliance with legal obligations</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We do not use your scans or your library to train machine-learning models for unrelated
        purposes, and we do not make decisions about you by automated means that have legal or
        similarly significant effects.
      </p>

      <h2 id="sharing">7. Who we share it with</h2>
      <p>
        We do not sell your personal information. We share it only with service providers who
        process it on our behalf, under contract and only for the purposes below.
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>What it receives</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>ScoreFlow</strong> (scoreflow.app)
              </td>
              <td>
                The sheet-music image you scan, sent as a document for conversion, plus the
                resulting notation data
              </td>
              <td>
                Optical music recognition — turning your photo into a machine-readable score. This
                is the step that makes the app work.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Google Firebase</strong> (Authentication, Firestore, Cloud Storage, Cloud
                Functions, Crashlytics)
              </td>
              <td>
                Account information, score metadata and preview images, crash diagnostics
              </td>
              <td>Authentication, database and file hosting, backend logic, crash reporting</td>
            </tr>
            <tr>
              <td>
                <strong>Adapty</strong>
              </td>
              <td>Your user ID and subscription/purchase status</td>
              <td>Subscription management, entitlement checks, purchase restoration</td>
            </tr>
            <tr>
              <td>
                <strong>Algolia</strong>
              </td>
              <td>
                Metadata of scores published to the community (title, instrument, creator ID) and
                search queries
              </td>
              <td>Powering search across the community library</td>
            </tr>
            <tr>
              <td>
                <strong>Apple</strong> and <strong>Google Play</strong>
              </td>
              <td>Purchase and billing data, which they collect directly from you</td>
              <td>Processing payments, renewals, and refunds under their own privacy policies</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>We may also disclose information:</p>
      <ul>
        <li>
          <strong>to other users</strong>, but only the content you chose to publish — see{" "}
          <a href="#community">section 8</a>;
        </li>
        <li>
          <strong>when the law requires it</strong> — to comply with a valid legal request, or to
          establish, exercise, or defend legal claims, including responding to copyright notices;
        </li>
        <li>
          <strong>to protect people</strong> — where we reasonably believe disclosure is necessary
          to prevent fraud, abuse, or harm to someone;
        </li>
        <li>
          <strong>in a corporate transaction</strong> — if the Service is involved in a merger,
          acquisition, or sale of assets, in which case we will notify you and the acquirer will be
          bound by a policy no less protective, or you can delete your account first.
        </li>
      </ul>

      <h2 id="community">8. What community sharing makes public</h2>
      <div className="callout">
        <p>
          Saving a score as <strong>Community</strong> publishes it to other Rhythm Reader users.
          Saving it as <strong>Only me</strong> does not.
        </p>
      </div>
      <p>
        For a score you publish to the community, other users can see its preview image, title,
        instrument, and notation, can find it through search, and can save it to their own library
        and play it back. Choose <strong>Only me</strong> for anything you would rather keep
        private.
      </p>
      <p>
        You can change your mind: deleting a score, or your account, stops us serving it from the
        community library going forward. We cannot, however, retrieve copies other users already
        saved.
      </p>

      <h2 id="transfers">9. International transfers</h2>
      <p>
        We and our providers operate primarily in the <strong>United States</strong>, so if you use
        the Service from elsewhere your information will be transferred to and processed in the US
        and in other countries where our providers operate. Those countries may have different data
        protection laws than yours.
      </p>
      <p>
        Where we transfer personal information out of the EEA, the UK, or Switzerland, we rely on
        an appropriate safeguard under Chapter V of the GDPR — normally the European
        Commission&rsquo;s <strong>Standard Contractual Clauses</strong> (with the UK Addendum
        where relevant) in our contracts with providers, or a valid adequacy decision or
        certification where one applies. You can ask us for details using the contact address
        below.
      </p>

      <h2 id="retention">10. How long we keep it</h2>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Information</th>
              <th>Retention</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account information</td>
              <td>Until you delete your account</td>
            </tr>
            <tr>
              <td>Your scores, previews, and library</td>
              <td>Until you delete the item or your account</td>
            </tr>
            <tr>
              <td>Scans sent for recognition</td>
              <td>
                Kept by our recognition provider only as long as needed to perform and support the
                conversion, under its own retention policy
              </td>
            </tr>
            <tr>
              <td>Subscription and purchase records</td>
              <td>
                For the life of the subscription and afterwards where we need them for accounting,
                tax, or dispute purposes
              </td>
            </tr>
            <tr>
              <td>Crash diagnostics</td>
              <td>Retained on a rolling basis by Crashlytics, typically up to 90 days</td>
            </tr>
            <tr>
              <td>Support correspondence</td>
              <td>Normally up to 24 months after the matter is resolved</td>
            </tr>
            <tr>
              <td>Backups</td>
              <td>Deleted data may persist in encrypted backups for a short cycle before erasure</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="security">11. Security</h2>
      <p>
        We use industry-standard measures to protect your information, including encryption in
        transit (HTTPS/TLS) for everything the app sends, encryption at rest at our cloud
        providers, access controls that restrict who on our side can reach production data, and
        server-side rules that check a request&rsquo;s identity before it can read or write your
        data.
      </p>
      <p>
        No system is perfectly secure, so we cannot guarantee absolute security. Please use a
        strong, unique password and tell us promptly at{" "}
        <a href="mailto:hello@rhythmreader.com">hello@rhythmreader.com</a> if you suspect a problem
        with your account. Where the law requires it, we will notify you and the relevant regulator
        of a personal data breach.
      </p>

      <h2 id="rights">12. Your privacy rights</h2>

      <h3>12.1 Everyone</h3>
      <p>
        Whatever your location, you can access most of your information directly in the app, change
        your account details and preferences, choose the visibility of every score, withdraw camera
        and photo-library permissions in your device settings, and delete individual scores or your
        entire account.
      </p>

      <h3>12.2 EEA, UK, and Switzerland (GDPR)</h3>
      <p>You have the right to:</p>
      <ul>
        <li>
          <strong>access</strong> the personal data we hold about you, and receive a copy;
        </li>
        <li>
          <strong>rectify</strong> data that is inaccurate or incomplete;
        </li>
        <li>
          <strong>erase</strong> your data (&ldquo;right to be forgotten&rdquo;);
        </li>
        <li>
          <strong>restrict</strong> or <strong>object to</strong> processing based on our
          legitimate interests;
        </li>
        <li>
          <strong>data portability</strong> — receive data you provided in a structured,
          machine-readable format;
        </li>
        <li>
          <strong>withdraw consent</strong> at any time, where we rely on consent;
        </li>
        <li>
          <strong>lodge a complaint</strong> with your local supervisory authority — though we
          would appreciate the chance to resolve it first.
        </li>
      </ul>

      <h3>12.3 California (CCPA/CPRA) and other US states</h3>
      <p>
        If you are a California resident you have the right to know what personal information we
        collect, use, and disclose and to receive a copy of it; to correct inaccurate information;
        to delete it; and to opt out of its sale or sharing for cross-context behavioural
        advertising and of profiling in furtherance of significant decisions.
      </p>
      <p>
        <strong>
          We do not sell personal information, we do not share it for cross-context behavioural
          advertising, and we do not use it for that kind of profiling
        </strong>
        , so there is nothing for you to opt out of. We collect the categories described in{" "}
        <a href="#what-we-collect">section 3</a> — identifiers, commercial information relating to
        your subscription, internet or device activity in the form of crash diagnostics, and the
        audio/visual content you scan — for the business purposes in{" "}
        <a href="#how-we-use">section 6</a>, and we disclose them to the service providers in{" "}
        <a href="#sharing">section 7</a>. We do not knowingly collect sensitive personal
        information for the purpose of inferring characteristics about you. We will not
        discriminate against you for exercising your rights. Residents of other US states with
        comparable laws have similar rights and may use the same contact route.
      </p>

      <h3>12.4 How to exercise your rights</h3>
      <p>
        Email <a href="mailto:hello@rhythmreader.com">hello@rhythmreader.com</a> from the address
        on your account, or tell us which account the request concerns. We will verify your
        identity — normally by confirming control of the account email — before we act, and will
        respond within the time the applicable law allows (one month under the GDPR, 45 days under
        the CCPA, each extendable where permitted with notice to you). Exercising these rights is
        free unless a request is manifestly excessive. An authorised agent may submit a request on
        your behalf with proof of authority. If we refuse a request, we will explain why, and you
        may ask us to reconsider by replying to that decision.
      </p>

      <h2 id="deletion">13. Deleting your data</h2>
      <p>
        <strong>In the app:</strong> open <strong>Settings</strong> and choose{" "}
        <strong>Delete account</strong>. This permanently deletes your account and the associated
        data, including your scores and library. It cannot be undone.
      </p>
      <p>
        <strong>By email:</strong> write to{" "}
        <a href="mailto:hello@rhythmreader.com">hello@rhythmreader.com</a> from your account
        address with the subject <em>&ldquo;Delete my account&rdquo;</em>.
      </p>
      <p>
        Full instructions, and details of what is deleted and what we are required to keep, are on
        our <Link href="/account-deletion">account deletion page</Link>. Note that deleting your
        account does not cancel a subscription — cancel that in your Apple or Google Play account
        settings, or you may continue to be billed.
      </p>

      <h2 id="children">14. Children and schools</h2>
      <p>
        The Service is intended for people aged <strong>13 and over</strong>. We do not knowingly
        collect personal information from children under 13. If we learn that we have, we will
        delete it promptly.
      </p>
      <p>
        If you are a parent or guardian and believe your child under 13 has given us information,
        contact <a href="mailto:hello@rhythmreader.com">hello@rhythmreader.com</a> and we will
        remove it and close the account.
      </p>
      <p>
        Teachers and schools: Rhythm Reader is not currently offered as a school-administered
        service and we do not sign student-data agreements or act as a school official under FERPA.
        Students should use the app with individual accounts under these terms, and staff should not
        create accounts on behalf of under-13 pupils.
      </p>

      <h2 id="dnt">15. Do Not Track and Global Privacy Control</h2>
      <p>
        Because we do not track users across sites or apps and set no advertising cookies, there is
        no cross-site tracking for a browser signal to switch off. Our website does not respond
        differently to Do Not Track or Global Privacy Control signals, and no behaviour changes as
        a result.
      </p>

      <h2 id="changes">16. Changes to this policy</h2>
      <p>
        We will update this policy when our practices change. The &ldquo;Last updated&rdquo; date
        at the top always reflects the current version. If a change is material — for example a new
        category of data, a new provider, or a new purpose — we will give notice in the app, on
        this page, or by email before it takes effect, and will obtain your consent where the law
        requires it.
      </p>

      <h2 id="contact">17. How to contact us</h2>
      <p>
        For privacy questions, data requests, or deletion requests:{" "}
        <a href="mailto:hello@rhythmreader.com">hello@rhythmreader.com</a>.
      </p>
      <p>
        Rhythm Reader
        <br />
        Email: <a href="mailto:hello@rhythmreader.com">hello@rhythmreader.com</a>
        <br />
        Web: <a href="https://www.rhythmreader.com">www.rhythmreader.com</a>
      </p>
    </LegalPage>
  );
}
