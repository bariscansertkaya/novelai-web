import Image from "next/image";
import { ThemeToggle } from "./components/ThemeToggle";

const APP_STORE_URL = "https://apps.apple.com/us/app/id6737721884";

const writingTools = [
  {
    bg: "bg-[var(--accent-tint)] dark:bg-[#2A2218]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[var(--accent)]" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
    title: "AI Writing Assistant",
    description: "Stuck on a scene? The AI suggests continuations, rewrites awkward passages, and adapts to your voice the more you write.",
  },
  {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-amber-600" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "Character Creator",
    description: "Give your characters depth that lasts 400 pages. Build rich backstories, track motivations, relationships, and arcs. All searchable from anywhere in your draft.",
  },
  {
    bg: "bg-stone-100 dark:bg-stone-800/40",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-stone-500" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
    title: "Plot & Outline Tool",
    description: "Structure your story before you write it. Or reverse-outline after. Author AI identifies pacing gaps, missing beats, and suggests narrative alternatives.",
  },
  {
    bg: "bg-[#EDE6D8] dark:bg-[#26333F]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[var(--text-secondary)]" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3.284 14.253A8.959 8.959 0 0 1 3 12c0-1.016.135-2.001.386-2.918" />
      </svg>
    ),
    title: "Worldbuilding",
    description: "Capture your world's rules, geography, cultures, and lore in an organized library. The AI cross-references your world notes as you write to keep everything consistent.",
  },
];

const showcaseItems = [
  {
    mockup: "/mockup/1.png",
    label: "AI Writing Assistant",
    title: "Write more. Struggle less. Sound like yourself.",
    description:
      "Author AI studies your prose style as you draft — the rhythm of your sentences, the words you favor, the way you handle dialogue — then offers suggestions that feel like you on a great day, not a generic AI. Think of it as a collaborator who has read everything you've written and wants to help you say it better.",
    bullets: ["Context-aware sentence completions", "Tone and style matching", "Scene and chapter continuations"],
  },
  {
    mockup: "/mockup/2.png",
    label: "Character Creator",
    title: "Characters your readers will remember for years.",
    description:
      "Every great story lives or dies by its people. The Character Creator guides you through building complete human beings — with conflicting desires, hidden wounds, and believable voices. Reference any character mid-draft with a tap, and let the AI flag when a character acts out of alignment with their own history.",
    bullets: ["Guided backstory and motivation builder", "Relationship mapping between characters", "In-draft character consistency checks"],
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us about your writing",
    description:
      "Share your experience level, your goal (fun, publication, or both), your preferred genres, and your POV preference. Author AI uses this to personalize everything from day one.",
  },
  {
    number: "02",
    title: "Start your project",
    description:
      "Create a new story, import an existing draft, or begin with a blank page. Set up your characters, outline your plot, or dive straight into Chapter One — your call.",
  },
  {
    number: "03",
    title: "Write with AI at your side",
    description:
      "The AI suggests continuations, offers alternatives, flags inconsistencies, and helps you push through blocks — always in service of your story, never replacing your judgment.",
  },
  {
    number: "04",
    title: "Refine, revise, and finish",
    description:
      "Review your draft with AI-assisted editing, check character and world consistency, and export a clean manuscript. From first sentence to final page.",
  },
];

const testimonials = [
  {
    initials: "MR",
    name: "Margaret R.",
    role: "Fantasy novelist, working on her third book",
    text: "I've tried every writing app on the market. Author AI is the first one that actually understands story structure. The character consistency checking alone has saved me from embarrassing continuity errors twice. It doesn't write my book for me — it helps me write a better one.",
  },
  {
    initials: "JO",
    name: "James O.",
    role: "Thriller writer, published independently",
    text: "The plot outlining tool changed how I work. I used to spend days reorganizing index cards on my floor. Now I can restructure an entire act in minutes, see where the tension drops, and fix it before I've written a word of the chapter. My books are tighter because of it.",
  },
  {
    initials: "SN",
    name: "Sofía N.",
    role: "Romance author, writing for joy",
    text: "I write purely for fun, but Author AI makes me feel like a serious writer. The onboarding actually asked about my goals — and when I said 'I just love telling stories,' it adjusted. There's no pressure to be publishable. It just helps me write stories I'm proud of.",
  },
];

const faqs = [
  {
    q: "Is Author AI for beginners or experienced writers?",
    a: "Both. During onboarding you tell Author AI your experience level — beginner, intermediate, or experienced — and it calibrates its assistance accordingly. Beginners get more guidance and explanation; experienced writers get a collaborator that respects their craft. You can update your preferences any time in settings.",
  },
  {
    q: "Does the AI write my book for me?",
    a: "No — and that's intentional. Author AI is a writing companion, not a ghostwriter. It suggests, it assists, it flags inconsistencies, and it helps you get unstuck. Every word that ends up in your manuscript is a word you chose. Your voice remains yours.",
  },
  {
    q: "What genres does Author AI support?",
    a: "Fantasy, science fiction, romance, thriller, mystery, literary fiction, historical fiction, horror, and more. The AI understands genre conventions — tropes, pacing expectations, reader expectations — and can help you work within them or deliberately subvert them. You select your genres during onboarding and can add more at any time.",
  },
  {
    q: "How does the subscription work?",
    a: "Author AI is a subscription-only app, billed monthly or annually through the App Store. There is no free tier — we believe the writing tools we offer are worth paying for, and a subscription model lets us keep improving them without compromise. You can manage or cancel your subscription at any time through your Apple ID settings.",
  },
  {
    q: "Is my writing private?",
    a: "Completely. Author AI requires no account and no sign-in. Your drafts, characters, notes, and world-building files are stored entirely on your device and never sent to our servers. We do not use your creative work to train AI models, ever. Your stories belong to you.",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#B8893A" className="w-4 h-4">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Author AI",
  operatingSystem: "iOS",
  applicationCategory: "ProductivityApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://getauthorai.app",
  description:
    "Author AI is the AI-powered writing companion for iOS. Draft stories, build characters, outline plots, and construct worlds — all guided by a personalized AI that understands your genre and voice.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
};

export default function Home() {
  return (
    <div className="bg-[var(--bg)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)]/60">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Author AI"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-[var(--text-primary)] text-lg tracking-tight">Author AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--text-muted)] font-medium">
            <a href="#features" className="hover:text-[var(--text-primary)] transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-[var(--text-primary)] transition-colors">How it Works</a>
            <a href="#faq" className="hover:text-[var(--text-primary)] transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={APP_STORE_URL}>
              <Image src="/app-store.svg" alt="Download on the App Store" width={130} height={44} className="w-[130px] h-[44px]" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-24 pb-28 md:pt-32 md:pb-36">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#F2E6CA]/60 dark:bg-[#B8893A]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EDE6D8]/50 dark:bg-[#B8893A]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[var(--accent-tint)] dark:bg-[#2A2218] text-[var(--accent)] text-sm font-semibold px-4 py-2 rounded-full mb-7 border border-[var(--color-line2)]">
              <span className="text-base leading-none">✦</span>
              AI-Powered Writing for iOS
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-6">
              Your Story,{" "}
              <br />
              Written{" "}
              <span className="text-[var(--accent)]">Brilliantly.</span>
            </h1>
            <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              Author AI is the writing companion that thinks with you. Not for you. Draft chapters, build unforgettable characters, map your plot, and shape entire worlds. All in one iOS app, tailored to your genre and voice.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
              <a href={APP_STORE_URL}>
                <Image
                  src="/app-store.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={54}
                  className="w-[160px] h-[54px]"
                />
              </a>
              <div className="flex items-center gap-3 text-sm">
                <Stars />
                <span className="font-medium text-[var(--text-secondary)]">Subscription · iOS 16+</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/mockup/0.png"
              alt="Author AI app screenshot"
              width={260}
              height={532}
              className="drop-shadow-2xl w-[260px] h-[532px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section id="features" className="px-6 py-24 bg-[var(--bg-alt)]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-[var(--accent-deep)] text-sm font-bold uppercase tracking-widest mb-3">
              Every tool a writer needs
            </p>
            <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              From first idea to final page
            </h2>
            <p className="mt-4 text-lg text-[var(--text-muted)] max-w-xl mx-auto">
              Author AI brings together AI assistance, creative structure, and your unique vision into one seamless workflow.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {writingTools.map((tool) => (
              <div
                key={tool.title}
                className="bg-[var(--bg)] rounded-2xl p-6 border border-[var(--border)]"
              >
                <div className={`w-12 h-12 ${tool.bg} rounded-xl flex items-center justify-center mb-4`}>
                  {tool.icon}
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{tool.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="px-6 py-24 bg-[var(--bg)]">
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
                  className="drop-shadow-xl w-[240px] h-[490px]"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-[var(--accent)] text-sm font-bold uppercase tracking-widest mb-3">
                  {item.label}
                </p>
                <h3 className="text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 justify-center md:justify-start">
                      <div className="w-5 h-5 bg-[var(--accent-tint)] dark:bg-[#2A2218] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 text-[var(--accent)]" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 8l4 4 7-7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--text-secondary)] font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accent Banner — Personalization */}
      <section className="px-6 py-24 bg-[#1F2A37] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B8893A]/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B8893A]/6 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#F2E6CA] text-sm font-semibold px-4 py-2 rounded-full mb-7 border border-white/15">
            <span className="text-base leading-none">✦</span>
            Personalized to your writing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            An AI that reads the room.{" "}
            <br />
            <span className="text-[#B8893A]">Every room in your story.</span>
          </h2>
          <p className="text-xl text-[#C9BEA6] leading-relaxed max-w-2xl mx-auto mb-10">
            When you first open Author AI, you tell it a little about yourself: your experience level, whether you write for the joy of it or with publishing in mind, your favorite genres, your preferred point of view. From that moment, every suggestion, every nudge, every generated line is calibrated to you — not a template of what writing should look like, but what <em>your</em> writing should look like.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {[
              {
                title: "Tailored to your genre",
                desc: "Fantasy, thriller, romance, literary fiction — the AI understands genre conventions and helps you work with them or deliberately against them.",
              },
              {
                title: "Matched to your ambition",
                desc: "Writing for fun, aiming for publication, or somewhere between — Author AI adjusts the depth and rigor of its assistance to match your goals.",
              },
              {
                title: "Grows with your voice",
                desc: "The more you write in Author AI, the better it understands your style. It doesn't flatten you into generic prose — it amplifies what makes your writing yours.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white/8 rounded-2xl p-5 border border-white/10">
                <div className="w-8 h-8 bg-[#B8893A]/20 rounded-lg flex items-center justify-center text-[#B8893A] font-bold text-sm mb-3">
                  ✦
                </div>
                <h3 className="text-white font-bold mb-1.5">{card.title}</h3>
                <p className="text-[#C9BEA6] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="px-6 py-24 bg-[var(--bg-alt)]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-[var(--accent-deep)] text-sm font-bold uppercase tracking-widest mb-3">
              Simple by design
            </p>
            <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              How Author AI works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.number} className="bg-[var(--bg)] rounded-2xl p-6 border border-[var(--border)]">
                <div className="w-12 h-12 bg-[var(--accent-tint)] dark:bg-[#2A2218] rounded-xl flex items-center justify-center mb-5">
                  <span className="text-[var(--accent)] font-bold text-sm">{s.number}</span>
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 bg-[var(--bg)]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-[var(--accent-deep)] text-sm font-bold uppercase tracking-widest mb-3">
              Writer Reviews
            </p>
            <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              From writers who take their craft seriously.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[var(--bg-alt)] rounded-2xl p-7 border border-[var(--border)] flex flex-col gap-4"
              >
                <Stars />
                <p className="text-[var(--text-secondary)] leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-[var(--border)]">
                  <div className="w-9 h-9 bg-[var(--accent-tint)] dark:bg-[#2A2218] rounded-full flex items-center justify-center text-[var(--accent)] font-bold text-xs border border-[var(--border-strong)]">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm">{t.name}</div>
                    <div className="text-xs text-[var(--text-muted)]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-24 bg-[var(--bg-alt)]">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-14">
            <p className="text-[var(--accent-deep)] text-sm font-bold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              Questions from writers like you.
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-[var(--bg)] rounded-2xl border border-[var(--border)] overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer select-none list-none font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                  {faq.q}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5 text-[var(--text-muted)] group-open:rotate-180 transition-transform flex-shrink-0"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-[var(--text-muted)] leading-relaxed text-[15px]">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-[var(--bg)]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="bg-[var(--bg-alt)] rounded-3xl border border-[var(--border)] p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[var(--accent-tint)]/60 dark:bg-[#B8893A]/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Author AI"
                width={64}
                height={64}
                className="rounded-2xl mx-auto mb-6"
              />
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
                Begin the story only you can write.
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed mb-8 max-w-md mx-auto">
                Author AI is the iOS writing companion built for storytellers who take their craft seriously. Whether you write for the pure love of it or with publication in your sights. Download today and meet the AI that writes alongside you, not instead of you.
              </p>
              <div className="flex justify-center">
                <a href={APP_STORE_URL}>
                  <Image
                    src="/app-store.svg"
                    alt="Download on the App Store"
                    width={160}
                    height={54}
                    className="w-[160px] h-[54px]"
                  />
                </a>
              </div>
              <p className="mt-5 text-sm text-[var(--text-muted)]">Subscription · iOS 16+ · Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bg-alt)] border-t border-[var(--border)] px-6 py-10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Author AI" width={28} height={28} className="rounded-lg" />
            <span className="font-bold text-[var(--text-primary)]">Author AI</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
            <a href="/privacy" className="hover:text-[var(--text-secondary)] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[var(--text-secondary)] transition-colors">Terms of Use</a>
            <a href="/support" className="hover:text-[var(--text-secondary)] transition-colors">Support</a>
          </div>
          <p className="text-sm text-[var(--text-muted)]">© {new Date().getFullYear()} Author AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
