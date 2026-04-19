import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Feynman AI",
};

export default function TermsPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="mx-auto max-w-3xl flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back
          </Link>
          <span className="text-gray-200">/</span>
          <span className="font-semibold text-gray-900 text-sm">Terms of Use</span>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Terms of Use</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: April 19, 2026</p>
        <div className="space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Acceptance of Terms</h2>
            <p>By downloading or using Feynman AI, you agree to be bound by these Terms of Use. If you do not agree, do not use the app.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Permitted Use</h2>
            <p>Feynman AI is for personal, non-commercial educational use. You may not use the app to process content you do not have rights to, or for any unlawful purpose.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Subscriptions & Billing</h2>
            <p>Premium subscriptions are billed monthly or annually through the App Store. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period. Manage or cancel anytime via your Apple ID settings.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Limitation of Liability</h2>
            <p>Feynman AI is provided &ldquo;as is&rdquo;. We are not responsible for inaccuracies in AI-generated content. Always verify important information with authoritative sources.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
            <p>Questions? Email us at <a href="mailto:legal@feynmanai.app" className="text-[#4F46E5] hover:underline">legal@feynmanai.app</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
