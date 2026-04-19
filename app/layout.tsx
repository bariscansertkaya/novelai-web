export const runtime = "edge";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feynman AI. Study Smarter, Not Harder",
  description:
    "Turn PDFs, YouTube videos, audio recordings, and photos into smart notes, quizzes, and flashcards. Master any topic with the Feynman Technique.",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Feynman AI. Study Smarter, Not Harder",
    description:
      "Turn PDFs, YouTube videos, audio recordings, and photos into smart notes, quizzes, and flashcards.",
    type: "website",
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
