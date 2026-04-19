export const runtime = "edge";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getfeynman.app"),
  title: "Feynman AI — Study Smarter, Not Harder",
  description:
    "Turn PDFs, YouTube videos, audio recordings, and photos into smart notes, quizzes, and flashcards. Master any topic with the Feynman Technique.",
  keywords: [
    "AI study app",
    "Feynman technique",
    "smart notes",
    "flashcards",
    "quizzes",
    "PDF summarizer",
    "YouTube notes",
    "spaced repetition",
    "study tool",
    "AI learning",
  ],
  authors: [{ name: "Feynman AI" }],
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Feynman AI — Study Smarter, Not Harder",
    description:
      "Turn PDFs, YouTube videos, audio recordings, and photos into smart notes, quizzes, and flashcards. Master any topic with the Feynman Technique.",
    url: "https://getfeynman.app",
    siteName: "Feynman AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.jpg",
        width: 512,
        height: 512,
        alt: "Feynman AI — AI-Powered Study Tool",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Feynman AI — Study Smarter, Not Harder",
    description:
      "Turn PDFs, YouTube videos, audio recordings, and photos into smart notes, quizzes, and flashcards.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');})();`,
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
