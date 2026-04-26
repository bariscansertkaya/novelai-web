import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Author AI",
};

export default function TermsPage() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <header className="bg-[var(--bg-alt)] border-b border-[var(--border)] px-6 py-4">
        <div className="mx-auto max-w-3xl flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-sm">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back
          </Link>
          <span className="text-[var(--border-strong)]">/</span>
          <span className="font-semibold text-[var(--text-primary)] text-sm">Terms of Use</span>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-3">Terms of Use</h1>
        <p className="text-[var(--text-muted)] text-sm mb-10">Last updated: April 26, 2026</p>
        <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">Acceptance of Terms</h2>
            <p>By downloading or using Author AI, you agree to be bound by these Terms of Use. If you do not agree, do not use the app.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">Permitted Use</h2>
            <p>Author AI is for personal creative writing use. You may not use the app to produce content that infringes on others&apos; copyrights, or for any unlawful purpose. The AI writing assistance tools are designed to complement your own creative work.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">Subscriptions &amp; Billing</h2>
            <p>Author AI is a subscription-only application. Subscriptions are billed monthly or annually through the App Store and auto-renew unless cancelled at least 24 hours before the end of the current period. There is no free tier. Manage or cancel anytime via your Apple ID settings.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">Limitation of Liability</h2>
            <p>Author AI is provided &ldquo;as is&rdquo;. We are not responsible for inaccuracies in AI-generated content suggestions. AI assistance is a creative tool — editorial judgment remains yours.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">Contact</h2>
            <p>Questions? Email us at <a href="mailto:support@authorai.app" className="text-[var(--accent)] hover:text-[var(--accent-deep)] hover:underline">support@authorai.app</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
