import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getauthorai.app"),
  title: "Author AI — Write Your Story, Powered by AI",
  description:
    "Author AI is the iOS writing companion built for storytellers. AI-assisted drafting, character creation, plot outlining, and worldbuilding — all in one beautiful app.",
  keywords: [
    "AI writing app",
    "story writing iOS",
    "book writing assistant",
    "novel writing app",
    "character creator",
    "worldbuilding app",
    "fiction writing AI",
    "plot outline generator",
    "creative writing assistant",
    "AI author tool",
  ],
  authors: [{ name: "Author AI" }],
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Author AI — Write Your Story, Powered by AI",
    description:
      "The iOS writing companion for storytellers. AI-assisted drafting, character creation, plot outlining, and worldbuilding.",
    url: "https://getauthorai.app",
    siteName: "Author AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Author AI — AI-Powered Writing App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Author AI — Write Your Story, Powered by AI",
    description:
      "The iOS writing companion for storytellers. AI-assisted drafting, character creation, plot outlining, and worldbuilding.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full`} suppressHydrationWarning>
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
