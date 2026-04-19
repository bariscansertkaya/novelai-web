import Image from "next/image";
import { ThemeToggle } from "./components/ThemeToggle";

const APP_STORE_URL = "https://apps.apple.com/us/app/feynman-ai-study-notes-maker/id6738310899";

const inputSources = [
  {
    bg: "bg-red-50 dark:bg-red-900/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-red-500" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "PDF & Documents",
    description: "Upload textbooks, lecture slides, or any document. Get structured summaries in seconds.",
  },
  {
    bg: "bg-rose-50 dark:bg-rose-900/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-rose-500" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
      </svg>
    ),
    title: "YouTube Videos",
    description: "Paste any YouTube link. Feynman AI transcribes and condenses the lecture for you.",
  },
  {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-blue-500" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
    title: "Audio & Voice",
    description: "Record live lectures or upload audio files. Every word is captured and summarized.",
  },
  {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-emerald-500" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
    title: "Photos & Images",
    description: "Snap a photo of handwritten notes or a textbook page. OCR + AI handles the rest.",
  },
];

const showcaseItems = [
  {
    mockup: "/mockup/1.png",
    label: "Smart Notes",
    title: "Any content. Instant structured notes.",
    description:
      "Feynman AI reads your material and produces clean, hierarchical notes. No fluff, just the concepts that matter. Works with PDFs, YouTube videos, audio recordings, and photos.",
    bullets: ["Auto-generated summaries", "Key concept extraction", "Organized by topic"],
  },
  {
    mockup: "/mockup/2.png",
    label: "Adaptive Quizzes",
    title: "Test yourself. Find your weak spots.",
    description:
      "Multiple-choice and open-ended questions are generated directly from your notes. Every quiz adapts to what you're studying so you never waste time on what you already know.",
    bullets: ["Auto-generated questions", "Multiple quiz formats", "Instant feedback"],
  },
  {
    mockup: "/mockup/3.png",
    label: "Flashcards",
    title: "Spaced repetition, built in.",
    description:
      "Flashcards are created automatically from your study material. The built-in spaced repetition system schedules reviews at the optimal moment for long-term retention.",
    bullets: ["Auto-created from notes", "Spaced repetition scheduling", "Offline review"],
  },
  {
    mockup: "/mockup/4.png",
    label: "Feynman Technique",
    title: "Teach it back. Master it for real.",
    description:
      "The most powerful learning technique in the world, built right into the app. Explain a concept in simple words, get AI feedback on gaps, and repeat until you truly understand.",
    bullets: ["Guided explanation prompts", "AI gap analysis", "Targeted review suggestions"],
  },
];

const steps = [
  {
    number: "01",
    title: "Import Your Content",
    description: "Add a PDF, paste a YouTube link, record audio, or snap a photo. Any format works.",
  },
  {
    number: "02",
    title: "AI Generates Notes",
    description: "Our AI analyzes your content and produces clean, structured study notes automatically.",
  },
  {
    number: "03",
    title: "Practice & Review",
    description: "Reinforce what you learned with auto-generated quizzes and spaced-repetition flashcards.",
  },
  {
    number: "04",
    title: "Master with Feynman",
    description: "Explain concepts in plain words. Get AI feedback on gaps in your understanding.",
  },
];

const testimonials = [
  {
    initials: "EK",
    name: "Elif K.",
    role: "Medical Student",
    text: "I used to spend hours summarizing lecture recordings. Feynman AI does it in seconds and the quizzes are spot on for exam prep.",
  },
  {
    initials: "MT",
    name: "Marcus T.",
    role: "University Student",
    text: "The Feynman technique feature is unlike anything I've seen. It forces real understanding instead of just memorization.",
  },
  {
    initials: "PS",
    name: "Priya S.",
    role: "High School Senior",
    text: "I paste YouTube lecture links and get a full flashcard deck ready to review. My grades improved a full letter in one semester.",
  },
];

const faqs = [
  {
    q: "What content formats are supported?",
    a: "Feynman AI supports PDF and DOCX documents, MP3/M4A/WAV audio files, JPG/PNG images, and YouTube video URLs. More formats are coming soon.",
  },
  {
    q: "How does the Feynman Technique feature work?",
    a: "After generating notes on a topic, the app prompts you to explain it in your own simple words. The AI identifies gaps in your understanding and suggests targeted review. It mirrors the classic Feynman learning method.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The free plan includes 10 note imports per month, basic quizzes, and flashcards. Premium unlocks unlimited imports, advanced quiz modes, audio transcription, and priority AI processing.",
  },
  {
    q: "Does it work offline?",
    a: "Note review and flashcard sessions work fully offline. AI generation for new imports requires an internet connection.",
  },
  {
    q: "Is my data private?",
    a: "Your documents and notes are encrypted in transit and at rest. We never use your personal study data to train AI models.",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#F59E0B" className="w-4 h-4">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Feynman AI",
  operatingSystem: "iOS",
  applicationCategory: "EducationApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://getfeynman.app",
  description:
    "Turn PDFs, YouTube videos, audio recordings, and photos into smart notes, quizzes, and flashcards. Master any topic with the Feynman Technique.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
};

export default function Home() {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#09090B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#FAFAFA]/80 dark:bg-[#09090B]/80 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-700/60">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.jpg"
              alt="Feynman AI"
              width={32}
              height={32}
              className="rounded-xl"
            />
            <span className="font-bold text-gray-900 dark:text-white text-lg tracking-tight">Feynman AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <a href="#features" className="hover:text-gray-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-gray-900 dark:hover:text-white transition-colors">How it Works</a>
            <a href="#faq" className="hover:text-gray-900 dark:hover:text-white transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={APP_STORE_URL}>
              <Image src="/app-store.svg" alt="Download on the App Store" width={130} height={44} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-24 pb-28 md:pt-32 md:pb-36">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-[#0088FE] text-sm font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100 dark:border-blue-800">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0088FE]" />
              AI-Powered Study Tool
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              Turn Anything Into{" "}
              <span className="text-[#0088FE]">Deep Knowledge</span>
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              Import PDFs, YouTube videos, audio recordings, or photos. Feynman AI generates smart notes, quizzes, and flashcards. Then helps you truly master any topic.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
              <a href={APP_STORE_URL}>
                <Image
                  src="/app-store.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={54}
                />
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Stars />
                <span className="font-medium text-gray-600 dark:text-gray-300">Free to start</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/mockup/0.png"
              alt="Feynman AI app screenshot"
              width={260}
              height={532}
              className="drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Input Sources */}
      <section id="features" className="px-6 py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-[#0088FE] text-sm font-bold uppercase tracking-widest mb-3">
              Any Format, Instantly
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Import from anywhere
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              No matter how your course material is delivered, Feynman AI can process it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {inputSources.map((s) => (
              <div
                key={s.title}
                className="bg-[#FAFAFA] dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mb-4`}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="px-6 py-24 dark:bg-[#09090B]">
        <div className="mx-auto max-w-5xl space-y-28">
          {showcaseItems.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={item.mockup}
                  alt={item.label}
                  width={240}
                  height={490}
                  className="drop-shadow-xl"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-[#0088FE] text-sm font-bold uppercase tracking-widest mb-3">
                  {item.label}
                </p>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 justify-center md:justify-start">
                      <div className="w-5 h-5 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 text-[#0088FE]" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 8l4 4 7-7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feynman Technique Highlight */}
      <section className="px-6 py-24 bg-[#0088FE] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full mb-7 border border-white/20">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            The Feynman Technique
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Don&apos;t just memorize.{" "}
            <span className="text-blue-200">Truly understand.</span>
          </h2>
          <p className="text-xl text-blue-200 leading-relaxed max-w-2xl mx-auto mb-10">
            Named after Nobel laureate Richard Feynman. If you can&apos;t explain it simply, you don&apos;t understand it yet. Feynman AI guides you through this process, identifies gaps, and gets you to true mastery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {[
              { step: "1", title: "Study the notes", desc: "Review the AI-generated summary of your material." },
              { step: "2", title: "Explain it simply", desc: "Describe the concept as if teaching a complete beginner." },
              { step: "3", title: "Fill the gaps", desc: "AI pinpoints weak areas and guides targeted review." },
            ].map((item) => (
              <div key={item.step} className="bg-white/10 rounded-2xl p-5 border border-white/15">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-3">
                  {item.step}
                </div>
                <h3 className="text-white font-bold mb-1.5">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="px-6 py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-[#0088FE] text-sm font-bold uppercase tracking-widest mb-3">
              Simple & Fast
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              How it works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.number} className="bg-[#FAFAFA] dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-5">
                  <span className="text-[#0088FE] font-extrabold text-sm">{s.number}</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 dark:bg-[#09090B]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-[#0088FE] text-sm font-bold uppercase tracking-widest mb-3">
              Student Reviews
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Loved by learners worldwide
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-7 border border-gray-100 dark:border-gray-700 flex flex-col gap-4"
              >
                <Stars />
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <div className="w-9 h-9 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-[#0088FE] font-bold text-xs border border-blue-100 dark:border-blue-800">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-14">
            <p className="text-[#0088FE] text-sm font-bold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Common questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-[#FAFAFA] dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer select-none list-none font-semibold text-gray-900 dark:text-white hover:text-[#0088FE] dark:hover:text-[#0088FE] transition-colors">
                  {faq.q}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5 text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-500 dark:text-gray-400 leading-relaxed text-[15px]">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 dark:bg-[#09090B]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-700 p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-50/80 dark:bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="Feynman AI"
                width={64}
                height={64}
                className="rounded-2xl mx-auto mb-6"
              />
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                Start learning smarter today
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
                Join thousands of students who have already transformed the way they study. Free to start. No credit card required.
              </p>
              <div className="flex justify-center">
                <a href={APP_STORE_URL}>
                  <Image
                    src="/app-store.svg"
                    alt="Download on the App Store"
                    width={160}
                    height={54}
                  />
                </a>
              </div>
              <p className="mt-5 text-sm text-gray-400 dark:text-gray-500">Free plan · No credit card · iOS 16+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-6 py-10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.jpg" alt="Feynman AI" width={28} height={28} className="rounded-lg" />
            <span className="font-bold text-gray-900 dark:text-white">Feynman AI</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400 dark:text-gray-500">
            <a href="/privacy" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Terms of Use</a>
            <a href="/support" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Support</a>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-500">© {new Date().getFullYear()} Feynman AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
