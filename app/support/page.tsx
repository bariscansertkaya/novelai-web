import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — Author AI",
};

export default function SupportPage() {
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
          <span className="font-semibold text-[var(--text-primary)] text-sm">Support</span>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16 text-center">
        <div className="w-16 h-16 bg-[var(--accent-tint)] dark:bg-[#2A2218] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[var(--accent)]" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">We&apos;re here to help you write.</h1>
        <p className="text-[var(--text-muted)] leading-relaxed mb-10 max-w-md mx-auto">
          Have a question about your subscription, found a bug, or want to suggest a feature? We read every message and respond within 24 hours.
        </p>
        <a
          href="mailto:support@authorai.app"
          className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-deep)] text-white font-semibold px-7 py-4 rounded-2xl transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          support@authorai.app
        </a>
      </main>
    </div>
  );
}
