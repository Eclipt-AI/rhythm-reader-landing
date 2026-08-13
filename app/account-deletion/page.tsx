import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Delete Your Account | Rhythm Reader",
  description:
    "How to delete your Rhythm Reader account and data — in the app or by email — and what happens to your scores when you do.",
  alternates: { canonical: "/account-deletion" },
};

export default function AccountDeletionPage() {
  return (
    <LegalPage
      title="Delete your account and data"
      subtitle="You can delete your Rhythm Reader account yourself, at any time, from inside the app."
      effectiveDate="13 August 2026"
      lastUpdated="13 August 2026"
    >
      <h2 id="in-app">Option 1: delete it in the app (fastest)</h2>
      <ol>
        <li>Open the Rhythm Reader app and make sure you are signed in.</li>
        <li>
          Go to <strong>Settings</strong>.
        </li>
        <li>
          Scroll to the bottom and tap <strong>Delete account</strong>.
        </li>
        <li>Confirm when prompted.</li>
      </ol>
      <p>
        Your account and its data are deleted straight away. This cannot be undone, so export or
        note down anything you want to keep first.
      </p>

      <h2 id="by-email">Option 2: ask us by email</h2>
      <p>
        If you cannot sign in, or you would rather we did it, email{" "}
        <a href="mailto:hello@rhythmreader.com?subject=Delete%20my%20account">
          hello@rhythmreader.com
        </a>{" "}
        with the subject <strong>&ldquo;Delete my account&rdquo;</strong>.
      </p>
      <ul>
        <li>
          Send it from the <strong>email address on your account</strong> where possible — that is
          how we verify the request.
        </li>
        <li>
          If you signed up with a phone number or with Sign in with Apple using a hidden email,
          tell us which sign-in method you used and the phone number or relay address, so we can
          locate the account.
        </li>
        <li>
          We confirm deletion within <strong>30 days</strong>, and usually much sooner.
        </li>
      </ul>

      <h2 id="what-is-deleted">What gets deleted</h2>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>What happens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Your sign-in account and profile (email, name, phone number, preferences)</td>
              <td>Deleted</td>
            </tr>
            <tr>
              <td>Your scanned scores, preview images, and notation data</td>
              <td>Deleted</td>
            </tr>
            <tr>
              <td>Your library — saved and liked scores</td>
              <td>Deleted</td>
            </tr>
            <tr>
              <td>Scores you published to the Community</td>
              <td>
                Removed from the community library and from search. Copies other users already
                saved to their own libraries cannot be recalled.
              </td>
            </tr>
            <tr>
              <td>Crash diagnostics</td>
              <td>
                Not linked to your account identity and age out automatically on the provider&rsquo;s
                rolling schedule
              </td>
            </tr>
            <tr>
              <td>Purchase and subscription records</td>
              <td>
                Retained where we are required to keep them for accounting, tax, or dispute purposes,
                then deleted
              </td>
            </tr>
            <tr>
              <td>Encrypted backups</td>
              <td>Deleted data may persist in backups for a short cycle before erasure</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="subscription">Important: cancel your subscription separately</h2>
      <div className="callout">
        <p>
          <strong>Deleting your account does not cancel a paid subscription.</strong> Subscriptions
          are billed by Apple or Google, not by us, so you must cancel there or billing continues.
        </p>
      </div>
      <ul>
        <li>
          <strong>iPhone / iPad:</strong> Settings → your name → Subscriptions → Rhythm Reader →
          Cancel Subscription.
        </li>
        <li>
          <strong>Android:</strong> Google Play → menu → Subscriptions → Rhythm Reader → Cancel
          subscription.
        </li>
      </ul>
      <p>
        Cancelling stops future renewals; the period you have already paid for runs to its end. For
        refunds, contact{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
          Apple
        </a>{" "}
        or{" "}
        <a
          href="https://support.google.com/googleplay/answer/2479637"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Play
        </a>
        , who handle them under their own policies.
      </p>

      <h2 id="more">More information</h2>
      <p>
        See our <Link href="/privacy">Privacy Policy</Link> for what we collect and how long we keep
        it, and our <Link href="/terms">Terms &amp; Conditions</Link> for the rules that apply to
        accounts. Questions about a deletion request:{" "}
        <a href="mailto:hello@rhythmreader.com">hello@rhythmreader.com</a>.
      </p>
    </LegalPage>
  );
}
