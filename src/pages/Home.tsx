/* =========================================================================
   Ishan Bangla — Home page
   React 19 + TypeScript · Tailwind CSS v4 (CSS-first) · motion/react v11

   Apple-style scroll storytelling meets modern Indian editorial journalism.
   Pairs with index.css (fonts + @theme tokens + .grain / .hero-bg / .scroll-line).
   ========================================================================= */

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView, type Variants } from "motion/react";

/* ------------------------------------------------------------------ */
/* Motion primitives                                                    */
/* ------------------------------------------------------------------ */

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay },
  }),
};

const VIEWPORT = { once: true, amount: 0.3 } as const;

function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof motion;
}) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      custom={delay}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------ */
/* Count-up (0 → target, 1.5s ease-out, once in view)                  */
/* ------------------------------------------------------------------ */

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const HERO_STATS = [
  { to: 265, suffix: "K", label: ["YouTube", "Subscribers"] },
  { to: 115, suffix: "K", label: ["Facebook", "Followers"] },
  { to: 15,  suffix: "M", label: ["Monthly",  "Views"]      },
  { to: 800, suffix: "+", label: ["Cable TV",  "Households"] },
] as const;

const SIDE_STORIES = [
  { title: "Silchar Medical College opens new pediatric wing",             date: "May 31, 2026" },
  { title: "Bengali literary festival returns to Karimganj this winter",   date: "May 30, 2026" },
  { title: "New bridge over Barak River cuts travel to Hailakandi",        date: "May 29, 2026" },
];

const BOTTOM_STORIES = [
  { title: "Cachar hill farmers turn to organic tea cultivation",           date: "May 28, 2026 · 3 min read" },
  { title: "Silchar railway station modernization enters final phase",      date: "May 27, 2026 · 2 min read" },
];

const VALUES = [
  { label: "Truth First",  body: "Verified, on-the-ground reporting from across the Barak Valley." },
  { label: "Local Voice",  body: "Stories in Bengali, for the people who live them every day."      },
  { label: "Daily Trust",  body: "The newsroom Silchar has turned to, morning after morning."       },
];

const ADV_LINES = ["YOUR BRAND.", "BARAK VALLEY'S", "ATTENTION."];

/* ------------------------------------------------------------------ */
/* Section 1 — Hero                                                     */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative flex h-screen min-h-[600px] w-full flex-col items-center justify-center overflow-hidden">
      <div className="hero-bg" aria-hidden />

      <div className="relative z-[2] px-6 text-center">
        <motion.h1
          className="font-bengali text-[clamp(80px,15vw,200px)] font-extrabold leading-[0.9] -tracking-[2px] text-white [white-space:nowrap]"
          initial={{ opacity: 0, filter: "blur(18px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
        >
          <span className="text-brand">ঈশান</span> বাংলা
        </motion.h1>
        <motion.p
          className="mt-5 font-bebas text-[18px] tracking-[0.3em] text-white/50 md:mt-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
        >
          THE VOICE OF BARAK VALLEY
        </motion.p>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-0 z-[2] flex h-14 items-center justify-between border-t border-white/10 px-5 md:px-10 lg:px-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 1.5 }}
      >
        <span className="font-bengali text-sm font-bold text-white/55">ঈশান বাংলা</span>
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 md:inline">
          65M+ Monthly Reach · Silchar, Assam
        </span>
        <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
          Scroll
          <span className="scroll-line" />
        </span>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 2 — Statement                                                */
/* ------------------------------------------------------------------ */

function Statement() {
  return (
    <section className="bg-black px-5 py-[clamp(110px,22vh,220px)] text-center md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        <Reveal as="div" className="font-bebas text-[clamp(80px,13vw,160px)] leading-[0.92] tracking-wide text-white">
          35 MILLION PEOPLE.
        </Reveal>
        <Reveal as="div" delay={0.4} className="font-bebas text-[clamp(80px,13vw,160px)] leading-[0.92] tracking-wide text-signal">
          EVERY MONTH.
        </Reveal>
        <Reveal as="p" delay={0.7} className="mx-auto mt-9 max-w-[600px] font-serif text-xl leading-[1.6] text-white/60 md:mt-12">
          Across YouTube, Facebook, Instagram and Cable TV — Ishan Bangla is where Barak Valley gets its news. Every single day.
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-[900px] grid-cols-2 gap-y-11 md:mt-24 md:grid-cols-4 md:gap-y-0">
          {HERO_STATS.map((s, i) => (
            <Reveal
              key={s.label.join()}
              delay={i * 0.12}
              className={`relative px-3 md:px-6 lg:px-[30px] ${
                i > 0
                  ? "md:before:absolute md:before:left-0 md:before:top-1/2 md:before:h-16 md:before:w-px md:before:-translate-y-1/2 md:before:bg-white/10 md:before:content-['']"
                  : ""
              }`}
            >
              <div className="font-bebas text-[clamp(40px,5vw,52px)] leading-none tabular-nums text-white">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase leading-[1.5] tracking-[0.16em] text-white/40">
                {s.label[0]}<br />{s.label[1]}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3 — Latest News (editorial, warm white)                      */
/* ------------------------------------------------------------------ */

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-signal before:h-0.5 before:w-[34px] before:bg-signal before:content-[''] ${className}`}>
      {children}
    </span>
  );
}

function Thumb({ ph, ratio }: { ph: string; ratio: string }) {
  return (
    <div
      className="relative w-full overflow-hidden border border-ink/15 bg-[#e7e2d6] after:absolute after:inset-0 after:flex after:items-center after:justify-center after:font-mono after:text-[11px] after:uppercase after:tracking-[0.2em] after:text-[#9a948a] after:content-[attr(data-ph)]"
      data-ph={ph}
      style={{ aspectRatio: ratio }}
    />
  );
}

function LatestNews() {
  return (
    <section className="bg-warm px-5 py-[clamp(80px,12vh,140px)] text-ink md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-10 md:mb-16">
          <Eyebrow>Latest from the Valley</Eyebrow>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
          {/* lead story */}
          <Reveal as="article" className="border-ink/15 pb-9 md:border-b-0 md:border-r md:pb-0 md:pr-7 lg:pr-14">
            <Thumb ph="Lead story image" ratio="16/9" />
            <div className="mb-3.5 mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-signal">Cachar District</div>
            <h2 className="mb-4 inline-block cursor-pointer font-bebas text-[clamp(34px,3.6vw,48px)] leading-none tracking-wide text-ink hover:underline hover:decoration-signal hover:underline-offset-[5px]">
              Barak Valley flood relief reaches 12,000 families across Cachar
            </h2>
            <p className="mb-[18px] max-w-[54ch] font-serif text-[17px] leading-[1.6] text-[#3a3631]">
              District administration and local volunteers coordinate the largest relief drive of the season as waters recede along the Barak river belt.
            </p>
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#8a847a]">June 1, 2026 · 4 min read</div>
          </Reveal>

          {/* side list */}
          <Reveal as="div" delay={0.15} className="flex flex-col md:pl-7 lg:pl-14">
            {SIDE_STORIES.map((s, i) => (
              <div key={s.title} className={`border-b border-ink/15 py-[22px] transition-transform duration-300 hover:-translate-y-[3px] ${i === 0 ? "pt-0 md:pt-0" : ""}`}>
                <h3 className="mb-2 inline-block cursor-pointer font-bebas text-2xl leading-[1.05] tracking-wide text-ink hover:underline hover:decoration-signal hover:underline-offset-4">
                  {s.title}
                </h3>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#8a847a]">{s.date}</div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* two equal */}
        <div className="mt-11 grid grid-cols-1 gap-9 md:mt-16 md:grid-cols-2 md:gap-14">
          {BOTTOM_STORIES.map((s, i) => (
            <Reveal as="article" key={s.title} delay={i * 0.12}>
              <Thumb ph="Story image" ratio="16/9" />
              <h3 className="mb-2.5 mt-[18px] inline-block cursor-pointer font-bebas text-[26px] leading-[1.05] tracking-wide text-ink hover:underline hover:decoration-signal hover:underline-offset-4">
                {s.title}
              </h3>
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#8a847a]">{s.date}</div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 md:mt-[72px]">
          <a
            href="https://www.youtube.com/@Ishanbanglanews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border-b border-transparent font-mono text-xs uppercase tracking-[0.16em] text-signal transition-colors hover:border-signal"
          >
            All stories on YouTube →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 4 — Broadcast statement                                      */
/* ------------------------------------------------------------------ */

function Broadcast() {
  return (
    <section className="bg-ink px-5 py-[clamp(110px,20vh,210px)] text-center md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        <Reveal as="div" className="font-bebas text-[clamp(60px,10vw,120px)] leading-[0.94] tracking-wide text-white">
          NOT JUST NEWS.
        </Reveal>
        <Reveal as="div" delay={0.3} className="font-bebas text-[clamp(60px,10vw,120px)] leading-[0.94] tracking-wide text-white/30">
          YOUR COMMUNITY. YOUR STORIES.
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-[860px] grid-cols-1 gap-10 md:mt-24 md:grid-cols-3 md:gap-[clamp(28px,5vw,72px)]">
          {VALUES.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.15} className="border-t-2 border-signal pt-5 text-left">
              <div className="mb-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white">{v.label}</div>
              <p className="font-serif text-base leading-[1.55] text-white/60">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 5 — Advertise CTA (warm white)                               */
/* ------------------------------------------------------------------ */

function AdvertiseCta() {
  return (
    <section className="overflow-hidden bg-warm px-5 py-[clamp(90px,15vh,170px)] text-ink md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-[clamp(36px,5vw,72px)]">
        <div>
          <Reveal className="mb-6 block">
            <Eyebrow>Grow with us</Eyebrow>
          </Reveal>

          <motion.h2
            className="mb-[26px] font-bebas text-[clamp(60px,8vw,100px)] leading-[0.9] tracking-wide text-ink"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.3 } } }}
          >
            {ADV_LINES.map((ln) => (
              <motion.span
                key={ln}
                className="block"
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
              >
                {ln}
              </motion.span>
            ))}
          </motion.h2>

          <Reveal as="p" delay={0.3} className="mb-[34px] max-w-[46ch] font-serif text-lg leading-[1.6] text-ink/70">
            65 million monthly views across platforms. Starting at ₹600. Cable TV included free.
          </Reveal>

          <Reveal delay={0.45} className="flex flex-wrap gap-4">
            <a
              href="/advertise"
              className="inline-flex items-center gap-2.5 border-2 border-ink bg-ink px-[30px] pb-[13px] pt-[17px] font-bebas text-[23px] leading-none tracking-wide text-white transition-transform duration-200 hover:-translate-y-[3px]"
            >
              SEE AD PACKAGES →
            </a>
            <a
              href="https://wa.me/919395616617?text=Hi%2C%20I%20want%20to%20advertise%20on%20Ishan%20Bangla."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border-2 border-ink bg-wa px-[30px] pb-[13px] pt-[17px] font-bebas text-[23px] leading-none tracking-wide text-ink transition-transform duration-200 hover:-translate-y-[3px]"
            >
              WHATSAPP US
            </a>
          </Reveal>
        </div>

        {/* ghosted decorative number */}
        <Reveal delay={0.2} className="flex flex-col items-center justify-center text-center">
          <div className="font-bebas text-[clamp(100px,18vw,180px)] leading-[0.82] tracking-wide text-signal/60">65M+</div>
          <div className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/30">Monthly Reach</div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page export — fits into the existing router + fixed Navbar            */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-[100px] bg-black"
    >
      <div className="grain" aria-hidden />
      <Hero />
      <Statement />
      <LatestNews />
      <Broadcast />
      <AdvertiseCta />
    </motion.main>
  );
}
