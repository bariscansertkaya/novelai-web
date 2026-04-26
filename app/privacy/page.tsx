import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Author AI",
};

export default function PrivacyPage() {
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
          <span className="font-semibold text-[var(--text-primary)] text-sm">Privacy Policy</span>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-3">Privacy Policy</h1>
        <p className="text-[var(--text-muted)] text-sm mb-10">Last updated: April 26, 2026</p>
        <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">No Account Required</h2>
            <p>Author AI does not require you to create an account or sign in. There is no registration, no email address collected, and no user profile stored on our servers. You open the app and start writing.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">Your Writing Stays on Your Device</h2>
            <p>All creative content you produce in Author AI — your story drafts, character notes, world-building files, outlines, and preferences — is stored exclusively on your device. This data never leaves your device and is never transmitted to or stored on our servers.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">Information We Collect</h2>
            <p>The only data we collect is purchase transaction information, processed by Apple through the App Store. This is used solely to validate your active subscription. We do not receive or store payment details. Apple&apos;s handling of this data is governed by <a href="https://www.apple.com/legal/privacy/" className="text-[var(--accent)] hover:text-[var(--accent-deep)] hover:underline" target="_blank" rel="noopener noreferrer">Apple&apos;s Privacy Policy</a>.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">AI and Your Content</h2>
            <p>We do not use your creative work to train AI models. Ever. Your drafts, characters, and ideas are yours. They remain on your device and are not shared with third parties for any purpose.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">Contact</h2>
            <p>For privacy-related questions, contact us at <a href="mailto:support@authorai.app" className="text-[var(--accent)] hover:text-[var(--accent-deep)] hover:underline">support@authorai.app</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
