import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "./Footer";

type LegalPageProps = {
  title: string;
  subtitle?: string;
  effectiveDate: string;
  lastUpdated: string;
  children: React.ReactNode;
};

/**
 * Shared shell for the legal documents (/terms, /privacy, /account-deletion).
 *
 * Deliberately does not reuse `Header`: that component is a client component whose
 * nav is a set of same-page hash anchors, which are meaningless on a legal page.
 */
export default function LegalPage({
  title,
  subtitle,
  effectiveDate,
  lastUpdated,
  children,
}: LegalPageProps) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[820px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/app_icon.svg"
              alt="Rhythm Reader"
              width={32}
              height={32}
            />
            <span className="text-primary font-bold text-lg font-[family-name:var(--font-plus-jakarta)]">
              Rhythm Reader
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-body hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to site
          </Link>
        </div>
      </header>

      <main className="bg-white">
        <div className="max-w-[820px] mx-auto px-6 py-14 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-dark font-[family-name:var(--font-plus-jakarta)] tracking-tight">
            {title}
          </h1>
          {subtitle && <p className="mt-4 text-lg text-body">{subtitle}</p>}

          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-1 text-sm text-muted border-t border-gray-100 pt-6">
            <div className="flex gap-2">
              <dt className="font-medium text-body">Effective:</dt>
              <dd>{effectiveDate}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-body">Last updated:</dt>
              <dd>{lastUpdated}</dd>
            </div>
          </dl>

          <article className="legal-prose mt-4">{children}</article>

          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/terms" className="text-body hover:text-primary transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="text-body hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/account-deletion"
              className="text-body hover:text-primary transition-colors"
            >
              Delete your account
            </Link>
            <a
              href="mailto:hello@rhythmreader.com"
              className="text-body hover:text-primary transition-colors"
            >
              hello@rhythmreader.com
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

/** Anchored in-page table of contents used at the top of the long documents. */
export function LegalToc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="mt-8 rounded-2xl border border-gray-100 bg-surface p-6"
    >
      <h2 className="!mt-0 !mb-3 !text-base !font-semibold">Contents</h2>
      {/* Numbering comes from the <ol> marker, so it always matches the
          section numbers in the document body — do not hardcode it. */}
      <ol className="!mb-0 space-y-1 text-sm">
        {items.map((item) => (
          <li key={item.id} className="!mb-0">
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
