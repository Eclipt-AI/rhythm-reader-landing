import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalToc } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Rhythm Reader",
  description:
    "The Terms & Conditions and End User License Agreement governing your use of the Rhythm Reader app and website.",
  alternates: { canonical: "/terms" },
};

const toc = [
  { id: "agreement", label: "This agreement" },
  { id: "eligibility", label: "Who may use Rhythm Reader" },
  { id: "accounts", label: "Your account" },
  { id: "licence", label: "Licence to use the app" },
  { id: "subscriptions", label: "Subscriptions, billing and cancellation" },
  { id: "your-content", label: "Your content and who can see it" },
  { id: "copyright", label: "Sheet music and copyright" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "takedown", label: "Copyright complaints (DMCA)" },
  { id: "third-parties", label: "Third-party services" },
  { id: "accuracy", label: "Accuracy of recognition and playback" },
  { id: "availability", label: "Availability and changes" },
  { id: "termination", label: "Suspension and termination" },
  { id: "disclaimers", label: "Disclaimer of warranties" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnity", label: "Indemnification" },
  { id: "law", label: "Governing law and disputes" },
  { id: "apple", label: "Additional terms for Apple App Store users" },
  { id: "google", label: "Additional terms for Google Play users" },
  { id: "export", label: "Export controls and sanctions" },
  { id: "general", label: "General terms" },
  { id: "contact", label: "How to contact us" },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="These Terms are also the End User License Agreement (EULA) for the Rhythm Reader mobile app."
      effectiveDate="13 August 2026"
      lastUpdated="13 August 2026"
    >
      <LegalToc items={toc} />

      <h2 id="agreement">1. This agreement</h2>
      <p>
        These Terms &amp; Conditions (the <strong>&ldquo;Terms&rdquo;</strong>) are a legal
        agreement between you and <strong>Rhythm Reader</strong> (&ldquo;Rhythm Reader&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) covering your use of the Rhythm
        Reader mobile application, the website at rhythmreader.com, and any related features and
        services (together, the <strong>&ldquo;Service&rdquo;</strong>).
      </p>
      <p>
        By downloading, installing, creating an account in, or using the Service, you agree to
        these Terms and to our{" "}
        <Link href="/privacy">Privacy Policy</Link>, which is incorporated into these Terms by
        reference. If you do not agree, do not use the Service.
      </p>
      <div className="callout">
        <p>
          <strong>Notice:</strong> these Terms include a limitation of our liability
          (<a href="#liability">section 15</a>) and describe how subscriptions renew and how to
          cancel them (<a href="#subscriptions">section 5</a>). Please read those sections
          carefully.
        </p>
      </div>

      <h2 id="eligibility">2. Who may use Rhythm Reader</h2>
      <p>
        You must be at least <strong>13 years old</strong> to create an account or use the
        Service. If you are between 13 and the age of legal majority where you live, you may use
        the Service only with the knowledge and agreement of a parent or legal guardian, who
        accepts these Terms on your behalf and is responsible for your use of the Service.
      </p>
      <p>
        The Service is not directed to children under 13 and we do not knowingly allow them to
        register. If you believe a child under 13 has created an account, contact us at{" "}
        <a href="mailto:hello@rhythmreader.com">hello@rhythmreader.com</a> and we will delete
        the account and its data.
      </p>
      <p>
        You may not use the Service if you are barred from doing so under applicable law, or if
        we have previously terminated your account for a breach of these Terms.
      </p>

      <h2 id="accounts">3. Your account</h2>
      <p>
        Some features require an account. You can register with an email address and password, or
        by signing in with Google, Apple, or a phone number. You agree to:
      </p>
      <ul>
        <li>provide accurate information and keep it up to date;</li>
        <li>
          keep your credentials confidential and not share your account with anyone else — you
          are responsible for activity that takes place through your account;
        </li>
        <li>
          tell us promptly at <a href="mailto:hello@rhythmreader.com">hello@rhythmreader.com</a>{" "}
          if you believe your account has been accessed without your permission.
        </li>
      </ul>
      <p>
        You may delete your account at any time from <strong>Settings → Delete account</strong>{" "}
        in the app, or by following the steps at{" "}
        <Link href="/account-deletion">rhythmreader.com/account-deletion</Link>. Deleting your
        account removes your account data as described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2 id="licence">4. Licence to use the app</h2>
      <p>
        Subject to these Terms, we grant you a limited, personal, non-exclusive,
        non-transferable, non-sublicensable, revocable licence to download and use one copy of
        the Rhythm Reader app on a mobile device that you own or control, for your own
        non-commercial use, and to use the website for the same purpose. Where the app is
        obtained through the Apple App Store, this licence is limited to use on Apple-branded
        products you own or control, as permitted by the App Store Terms of Service (including
        the Family Sharing rules that apply there).
      </p>
      <p>You must not, and must not allow anyone else to:</p>
      <ul>
        <li>
          copy, modify, translate, or create derivative works of the Service, except as
          applicable law expressly permits despite this restriction;
        </li>
        <li>
          reverse engineer, decompile, or disassemble any part of the Service, or attempt to
          derive its source code;
        </li>
        <li>
          rent, lease, lend, sell, redistribute, sublicense, or provide the Service to third
          parties as a service of your own;
        </li>
        <li>
          remove or obscure any proprietary notices, or use our name, logo, or branding without
          our written permission;
        </li>
        <li>
          access the Service through automated means, scrape it, or attempt to circumvent any
          rate limit, paywall, access control, or security measure.
        </li>
      </ul>
      <p>
        We and our licensors retain all right, title, and interest in and to the Service,
        including its software, design, text, graphics, and the musical rendering and playback
        technology. These Terms grant you no rights other than the licence described above.
      </p>

      <h2 id="subscriptions">5. Subscriptions, billing and cancellation</h2>
      <p>
        Rhythm Reader offers free features and paid features. Paid features are sold as{" "}
        <strong>auto-renewing subscriptions</strong> through the Apple App Store or Google Play.
      </p>

      <h3>5.1 What you are buying</h3>
      <ul>
        <li>
          <strong>Title of the service:</strong> Rhythm Reader premium access.
        </li>
        <li>
          <strong>Content of the subscription:</strong> access to the paid features described on
          the purchase screen for the whole of the billing period, which currently includes
          unlimited sheet-music scanning and the full set of playback features.
        </li>
        <li>
          <strong>Length and price:</strong> the available billing periods (for example a weekly
          plan or a longer-term plan) and the exact price in your local currency are shown on the
          purchase screen in the app <em>before</em> you confirm the purchase. Prices vary by
          country and are set in the relevant app store.
        </li>
      </ul>

      <h3>5.2 How billing and renewal work</h3>
      <ul>
        <li>
          Payment is charged to your <strong>Apple Account or Google Play account</strong> when
          you confirm the purchase. We never receive or store your card details.
        </li>
        <li>
          <strong>Your subscription renews automatically</strong> at the end of each billing
          period, at the price of the plan you selected, unless you turn off auto-renewal{" "}
          <strong>at least 24 hours before the end of the current period</strong>.
        </li>
        <li>
          Your account is charged for the renewal <strong>within the 24 hours before</strong> the
          end of the current period.
        </li>
        <li>
          You can manage your subscription and turn off auto-renewal at any time after purchase
          in your store account settings — on iOS: <em>Settings → your name → Subscriptions</em>;
          on Android: <em>Google Play → Menu → Subscriptions</em>. You can also reach the
          purchase screen from <strong>Settings → Subscriptions</strong> in the app.
        </li>
        <li>
          Turning off auto-renewal stops future charges but does not cancel the period you have
          already paid for: <strong>the current subscription period cannot be cancelled</strong>{" "}
          part-way through, and your access continues until it ends.
        </li>
      </ul>

      <h3>5.3 Free trials and introductory offers</h3>
      <p>
        Where we offer a free trial or introductory price, its length and terms are shown before
        you sign up. Unless you turn off auto-renewal before the trial ends, the subscription
        converts to a paid subscription automatically at the standard price. If you buy a
        subscription while a free trial is running, <strong>any unused portion of the free trial
        is forfeited</strong>. Free trials and introductory offers may be limited to one per
        user, per Apple Account, or per Google Play account, and may not be combined with other
        offers.
      </p>

      <h3>5.4 Refunds</h3>
      <p>
        Purchases are processed by Apple or Google, so <strong>refunds are handled by them under
        their own policies</strong>, not by us. Request a refund through{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
          reportaproblem.apple.com
        </a>{" "}
        or{" "}
        <a
          href="https://support.google.com/googleplay/answer/2479637"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Play support
        </a>
        . Except where the law requires otherwise, subscription fees are non-refundable and we do
        not provide partial refunds for unused periods. Nothing here limits statutory rights you
        may have as a consumer, including any right to withdraw from a purchase under EU or UK
        consumer law.
      </p>

      <h3>5.5 Price and plan changes</h3>
      <p>
        We may change subscription prices or plans. Any change to the price of an existing
        auto-renewing subscription will be notified to you in advance through the app store, and
        will not take effect until the next billing period after that notice — with the
        opportunity to cancel before it applies, as required by the app store rules and
        applicable law.
      </p>

      <h2 id="your-content">6. Your content and who can see it</h2>
      <p>
        <strong>&ldquo;Your Content&rdquo;</strong> means anything you add to the Service: photos
        of sheet music you scan or select from your photo library, the digital scores derived from
        them, the titles and instrument settings you choose, and any messages you send us.
      </p>
      <p>
        <strong>You keep ownership of Your Content.</strong> We do not claim ownership of the
        scores you scan.
      </p>

      <h3>6.1 Visibility: &ldquo;Only me&rdquo; and &ldquo;Community&rdquo;</h3>
      <p>
        When you save a score, you choose its visibility. This choice matters, so please make it
        deliberately:
      </p>
      <ul>
        <li>
          <strong>Only me</strong> — the score is stored in your account and is not published to
          other users of the Service.
        </li>
        <li>
          <strong>Community</strong> — the score is{" "}
          <strong>published to other Rhythm Reader users</strong>. It can appear in the community
          library and in search results, and other users can view it, save it to their own
          library, and play it back. Treat this as making the score public.
        </li>
      </ul>
      <p>
        Removing a score later stops it being served from the community library going forward,
        but we cannot retrieve copies that other users have already saved or made.
      </p>

      <h3>6.2 The licence you give us</h3>
      <p>
        So that we can operate the Service, you grant us a non-exclusive, worldwide,
        royalty-free licence to host, store, reproduce, and display Your Content, and to make the
        technical copies and adaptations needed to provide it to you — for example transmitting a
        scan for recognition, converting it into a digital score and audio, and generating
        previews and thumbnails. For scores you mark as <strong>Community</strong>, that licence
        also covers distributing and displaying the score to other users of the Service, and it
        includes the right for those users to view and play it back within the Service.
      </p>
      <p>
        This licence is limited to operating, securing, and improving the Service. It does not
        allow us to sell Your Content, licence it to third parties for their own purposes, or use
        it in advertising. It continues for as long as the content remains on the Service, plus a
        short period while backups are cycled out, and — for community scores — for as long as
        needed to serve copies other users have saved. You can end it for any item by deleting
        that item or your account.
      </p>
      <p>
        You are responsible for keeping your own copies of anything important to you. The Service
        is not a backup service.
      </p>

      <h2 id="copyright">7. Sheet music and copyright</h2>
      <div className="callout">
        <p>
          <strong>Most published sheet music is protected by copyright.</strong> Scanning a score
          you do not have the right to copy — or publishing it to the community — may infringe
          someone else&rsquo;s rights. Responsibility for that sits with you, not with us.
        </p>
      </div>
      <p>
        By adding a score to the Service, you represent and warrant that, for that score, at
        least one of the following is true:
      </p>
      <ul>
        <li>you own the copyright in it, or you are authorised by the rights holder;</li>
        <li>
          it is in the public domain, or is made available under a licence that permits what you
          are doing;
        </li>
        <li>
          your use is otherwise permitted by law — for example a personal copy of music you have
          lawfully purchased, or a use that qualifies as fair use or fair dealing in your
          jurisdiction.
        </li>
      </ul>
      <p>
        You further agree that you will <strong>not</strong> set a score to{" "}
        <strong>Community</strong> unless you have the right to share it publicly. A private
        &ldquo;Only me&rdquo; copy of music you own is a very different act from publishing that
        music to other people, and a permission that covers the first does not necessarily cover
        the second.
      </p>
      <p>
        We may remove any content, and restrict or terminate any account, where we believe in good
        faith that rights are being infringed — see <a href="#takedown">section 9</a>.
      </p>

      <h2 id="acceptable-use">8. Acceptable use</h2>
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>
          upload, publish, or share content that infringes intellectual property, privacy, or
          other rights;
        </li>
        <li>
          upload content that is unlawful, defamatory, harassing, hateful, sexually explicit, or
          that depicts or exploits minors;
        </li>
        <li>
          upload material you know to contain malware, or otherwise interfere with, overload, or
          disrupt the Service or its infrastructure;
        </li>
        <li>
          probe or test the vulnerability of the Service, access data or accounts that are not
          yours, or bypass authentication or entitlement checks;
        </li>
        <li>
          impersonate anyone, misrepresent your affiliation, or use the Service to send spam or
          unsolicited promotions;
        </li>
        <li>
          use the Service, or content obtained through it, to build a competing product, or to
          train machine-learning models on other users&rsquo; content;
        </li>
        <li>break any applicable law, or help anyone else do any of the above.</li>
      </ul>
      <p>
        We do not pre-screen user content, but we may review, moderate, and remove content or
        restrict features at our discretion, particularly in response to a report or a legal
        obligation.
      </p>

      <h2 id="takedown">9. Copyright complaints (DMCA)</h2>
      <p>
        If you believe content on the Service infringes your copyright, send a written notice to{" "}
        <a href="mailto:hello@rhythmreader.com">hello@rhythmreader.com</a> with the subject line{" "}
        <em>&ldquo;Copyright notice&rdquo;</em>, including:
      </p>
      <ol>
        <li>your name, address, telephone number, and email address;</li>
        <li>identification of the work you say has been infringed;</li>
        <li>
          identification of the material on the Service you are complaining about, with enough
          detail for us to locate it (for example the score title and the user who posted it);
        </li>
        <li>
          a statement that you have a good-faith belief the use is not authorised by the rights
          holder, its agent, or the law;
        </li>
        <li>
          a statement that the information in your notice is accurate and that, under penalty of
          perjury, you are the rights holder or authorised to act on their behalf;
        </li>
        <li>your physical or electronic signature.</li>
      </ol>
      <p>
        We will remove or disable access to material that is the subject of a valid notice and
        will notify the user who posted it, who may submit a counter-notice containing the
        equivalent information and a statement consenting to jurisdiction. We operate a{" "}
        <strong>repeat infringer policy</strong>: accounts that are the subject of repeated valid
        notices will be terminated. Knowingly submitting a false notice or counter-notice may
        expose you to liability.
      </p>

      <h2 id="third-parties">10. Third-party services</h2>
      <p>
        The Service relies on third-party providers to work, including a sheet-music recognition
        service that processes the images you scan, cloud hosting and authentication, subscription
        management, and search. Our{" "}
        <Link href="/privacy#sharing">Privacy Policy</Link> names these providers and explains
        what each one receives.
      </p>
      <p>
        Those providers act under their own terms and privacy policies. We are not responsible for
        third-party services, websites, or content we do not control, and linking to them is not
        an endorsement. Where the Service uses third-party or open-source components, you agree to
        comply with any additional terms that apply to them.
      </p>

      <h2 id="accuracy">11. Accuracy of recognition and playback</h2>
      <div className="callout">
        <p>
          Rhythm Reader reads printed music automatically. Automatic recognition{" "}
          <strong>is not perfect</strong> and its output should not be treated as an authoritative
          edition of the music.
        </p>
      </div>
      <p>
        Recognition quality depends on the print, the lighting, the angle, handwriting,
        annotations, unusual notation, and other factors. Notes, rhythms, dynamics, tempos,
        repeats, and articulations may be misread, omitted, or added. Playback is an
        interpretation generated by software, not a performance edition.
      </p>
      <p>
        You should always check the result against the original score, and you use the output at
        your own risk — including for practice, teaching, examination preparation, auditions, and
        performance. Rhythm Reader is a practice aid, not a substitute for the printed score or
        for musical instruction.
      </p>

      <h2 id="availability">12. Availability and changes</h2>
      <p>
        We aim to keep the Service available but we do not promise uninterrupted or error-free
        operation. We may modify, add, or remove features, and may impose or change limits (for
        example on scan volume or storage), at any time. Where a change materially reduces a paid
        feature you are actively paying for, we will give reasonable notice through the app or by
        email where we can.
      </p>
      <p>
        Features may be released as beta or experimental. Those are provided as-is, may change or
        be withdrawn without notice, and may be less reliable than the rest of the Service.
      </p>
      <p>
        We may update these Terms. If a change is material, we will give notice in the app, on
        this page, or by email before it takes effect, and will update the &ldquo;Last
        updated&rdquo; date above. Continuing to use the Service after a change takes effect means
        you accept the updated Terms. If you do not accept them, stop using the Service and delete
        your account.
      </p>

      <h2 id="termination">13. Suspension and termination</h2>
      <p>
        You may stop using the Service at any time, and may delete your account as described in{" "}
        <a href="#accounts">section 3</a>. Deleting the app alone does not cancel a subscription —
        cancel that in your app store account settings.
      </p>
      <p>
        We may suspend or terminate your access, with or without notice, if you breach these Terms,
        if we are required to by law, if your use creates a risk or a legal exposure for us or for
        others, or if we discontinue the Service. Where circumstances allow, we will give notice
        first and, where you have paid for a period you can no longer use because we terminated
        without cause, we will provide a pro-rata refund of that unused period where the law
        requires it or the relevant app store permits us to arrange it.
      </p>
      <p>
        On termination, your licence ends and we may delete Your Content. Sections that by their
        nature should survive — including{" "}
        <a href="#your-content">6</a>, <a href="#copyright">7</a>,{" "}
        <a href="#disclaimers">14</a>, <a href="#liability">15</a>,{" "}
        <a href="#indemnity">16</a>, and <a href="#law">17</a> — survive termination.
      </p>

      <h2 id="disclaimers">14. Disclaimer of warranties</h2>
      <p>
        To the fullest extent permitted by law, the Service is provided{" "}
        <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong>, without warranties of
        any kind, whether express, implied, or statutory. We specifically disclaim the implied
        warranties of merchantability, fitness for a particular purpose, title, and
        non-infringement, and we do not warrant that the Service will be uninterrupted, secure,
        error-free, or that recognition results will be accurate or complete.
      </p>
      <p>
        Some jurisdictions do not allow the exclusion of certain warranties or of implied statutory
        consumer rights. In those jurisdictions the exclusions above apply only to the extent
        permitted, and nothing in these Terms affects consumer rights that cannot be waived.
      </p>

      <h2 id="liability">15. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Rhythm Reader will not be liable for indirect,
        incidental, special, consequential, exemplary, or punitive damages, or for lost profits,
        lost revenue, lost data, loss of goodwill, or the cost of substitute services, arising out
        of or relating to your use of, or inability to use, the Service — even if we were advised
        of the possibility.
      </p>
      <p>
        Our total aggregate liability for all claims relating to the Service is limited to the
        greater of <strong>(a)</strong> the amount you paid us for the Service in the twelve months
        before the event giving rise to the claim, or <strong>(b) USD 50</strong>.
      </p>
      <p>
        Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or
        limited, including liability for death or personal injury caused by negligence, for fraud
        or fraudulent misrepresentation, or under mandatory consumer-protection law. Some
        jurisdictions do not allow certain limitations, so parts of this section may not apply to
        you.
      </p>

      <h2 id="indemnity">16. Indemnification</h2>
      <p>
        To the extent permitted by law, you agree to indemnify and hold harmless Rhythm Reader and
        its officers, employees, and contractors from any claims, damages, liabilities, and
        reasonable legal costs arising from content you add to the Service — including any claim
        that a score you scanned or published infringes someone&rsquo;s rights — from your breach
        of these Terms, or from your unlawful use of the Service. We will notify you of any such
        claim and you may control its defence, provided any settlement that imposes an obligation
        on us requires our prior written consent.
      </p>

      <h2 id="law">17. Governing law and disputes</h2>
      <p>
        These Terms and any dispute arising out of them or the Service are governed by the laws of
        the <strong>State of California, United States</strong>, excluding its conflict-of-laws
        rules and the UN Convention on Contracts for the International Sale of Goods.
      </p>
      <p>
        <strong>Please talk to us first.</strong> Most problems can be resolved quickly by email.
        Before filing a claim, you agree to contact us at{" "}
        <a href="mailto:hello@rhythmreader.com">hello@rhythmreader.com</a> and give us{" "}
        <strong>30 days</strong> to resolve the matter informally.
      </p>
      <p>
        If we cannot resolve it, you and we agree that any dispute will be brought exclusively in
        the state or federal courts located in California, and both parties consent to the
        personal jurisdiction of those courts. Either party may bring an individual claim in small
        claims court where it qualifies.
      </p>
      <p>
        If you are a consumer resident in the European Union, the United Kingdom, or another
        jurisdiction whose law gives you the right to bring proceedings in your local courts and
        to rely on your local consumer-protection law, this section does not deprive you of those
        rights.
      </p>

      <h2 id="apple">18. Additional terms for Apple App Store users</h2>
      <p>
        The following applies where you obtained the app from the Apple App Store, and prevails
        over anything inconsistent elsewhere in these Terms:
      </p>
      <ul>
        <li>
          These Terms are between you and Rhythm Reader only, <strong>not with Apple</strong>.
          Apple is not responsible for the app or its content.
        </li>
        <li>
          Apple has <strong>no obligation to furnish maintenance or support</strong> for the app.
        </li>
        <li>
          If the app fails to conform to any applicable warranty, you may notify Apple and Apple
          will refund the purchase price of the app (if any). To the maximum extent permitted by
          law, Apple has <strong>no other warranty obligation</strong> in respect of the app, and
          any other claims, losses, liabilities, damages, costs, or expenses attributable to a
          failure to conform to a warranty are our responsibility, not Apple&rsquo;s.
        </li>
        <li>
          Apple is <strong>not responsible for addressing any claim</strong> by you or a third
          party relating to the app or your use of it, including product liability claims, claims
          that the app fails to conform to a legal or regulatory requirement, and claims arising
          under consumer protection, privacy, or similar legislation — including in connection
          with the app&rsquo;s use of the HealthKit or HomeKit frameworks, where applicable.
        </li>
        <li>
          If a third party claims the app or your use of it infringes their intellectual property,
          Rhythm Reader — not Apple — is solely responsible for the investigation, defence,
          settlement, and discharge of that claim.
        </li>
        <li>
          You represent that you are not located in a country subject to a US Government embargo
          or designated as a &ldquo;terrorist supporting&rdquo; country, and that you are not on
          any US Government list of prohibited or restricted parties.
        </li>
        <li>
          You must comply with applicable third-party terms of agreement when using the app (for
          example, your wireless data plan terms).
        </li>
        <li>
          <strong>Apple and its subsidiaries are third-party beneficiaries of these Terms</strong>{" "}
          and, upon your acceptance, have the right to enforce them against you.
        </li>
      </ul>

      <h2 id="google">19. Additional terms for Google Play users</h2>
      <p>
        Where you obtained the app from Google Play, your use is also subject to the Google Play
        Terms of Service, purchases are processed under Google Play billing, and Google is not a
        party to these Terms. Google is not responsible for the app or for providing support for
        it, and refunds are handled by Google under its policies.
      </p>

      <h2 id="export">20. Export controls and sanctions</h2>
      <p>
        You agree to comply with all applicable export control and sanctions laws, and confirm you
        will not use, export, or re-export the Service in violation of them, including to any
        embargoed territory or to any person on a restricted-party list.
      </p>

      <h2 id="general">21. General terms</h2>
      <ul>
        <li>
          <strong>Entire agreement.</strong> These Terms and the Privacy Policy are the whole
          agreement between you and us about the Service, and replace any earlier understandings
          about it.
        </li>
        <li>
          <strong>Severability.</strong> If any provision is held unenforceable, it will be
          limited or removed to the minimum extent necessary and the rest stays in force.
        </li>
        <li>
          <strong>No waiver.</strong> Not enforcing a provision is not a waiver of our right to
          enforce it later.
        </li>
        <li>
          <strong>Assignment.</strong> You may not assign these Terms without our consent. We may
          assign them to an affiliate or in connection with a merger, acquisition, or sale of
          assets, on notice to you.
        </li>
        <li>
          <strong>Notices.</strong> We may give notice through the app, on this website, or by
          email to the address on your account. Notices to us go to{" "}
          <a href="mailto:hello@rhythmreader.com">hello@rhythmreader.com</a>.
        </li>
        <li>
          <strong>Force majeure.</strong> Neither party is liable for a failure to perform caused
          by events beyond its reasonable control.
        </li>
        <li>
          <strong>No third-party rights,</strong> except as stated for Apple in{" "}
          <a href="#apple">section 18</a>.
        </li>
        <li>
          <strong>Language.</strong> These Terms are written in English; any translation is for
          convenience and the English version prevails.
        </li>
      </ul>

      <h2 id="contact">22. How to contact us</h2>
      <p>
        Questions about these Terms, support requests, and copyright notices all go to{" "}
        <a href="mailto:hello@rhythmreader.com">hello@rhythmreader.com</a>.
      </p>
      {/* TODO(legal): insert the publishing legal entity's registered name and postal
          address here and in /privacy once the entity is confirmed. Store review accepts
          the brand alone, but GDPR Art. 13 expects the controller's identity. */}
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
