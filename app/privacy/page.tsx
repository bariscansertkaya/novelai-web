import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Feynman AI",
};

export default function PrivacyPage() {
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
          <span className="font-semibold text-gray-900 text-sm">Privacy Policy</span>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: April 19, 2026</p>
        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
            <p>Feynman AI collects only the information necessary to provide you with a personalized study experience: your email address for account creation, the content you choose to import (PDFs, audio files, images, YouTube URLs), and usage analytics to improve the app.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Data</h2>
            <p>Your data is used solely to generate notes, quizzes, and flashcards within the app. We do not sell, share, or use your personal study content to train AI models. All content is encrypted in transit and at rest.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Data Retention</h2>
            <p>You can delete your account and all associated data at any time from within the app settings. Deleted data is permanently removed from our servers within 30 days.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
            <p>For privacy-related questions, contact us at <a href="mailto:privacy@feynmanai.app" className="text-[#4F46E5] hover:underline">privacy@feynmanai.app</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
