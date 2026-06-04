/* =========================================================================
   Ishan Bangla — Advertise page
   React 19 + TypeScript · Tailwind CSS v4 (CSS-first) · motion/react v11

   Design system:
     • Neobrutalism is the default — parchment grounds, 2px ink borders,
       hard offset shadows (5px 5px 0 #0D0D0D), sharp corners, Bebas at scale.
     • Dark cinematic is a scoped exception — used in Ad Formats and Why/CTA
       sections (#141414 surfaces, soft borders, subtle glow), but keeps
       brutalist structure (sharp corners, red accents).
   ========================================================================= */

import { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useInView,
  type Variants,
} from "motion/react";

/* ------------------------------------------------------------------ */
/* Shared motion variants                                               */
/* ------------------------------------------------------------------ */

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

const stagger = (gap = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap } },
});

const cardUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const fromLeft: Variants = {
  hidden: { opacity: 0, x: -44 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

const fromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE, delay: 0.2 } },
};

const word: Variants = {
  hidden: { y: "0.5em", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.18, 0.85, 0.25, 1] as [number, number, number, number] },
  },
};

const inViewOnce = { once: true, amount: 0.3 } as const;

const BRUTAL = "shadow-[5px_5px_0_#0d0d0d]";
const SECTION_X = "px-5 md:px-10 lg:px-16";
const SECTION_Y = "py-16 md:py-24";

/* ------------------------------------------------------------------ */
/* Content data                                                         */
/* ------------------------------------------------------------------ */

interface StatCard {
  plat: string;
  to: number;
  suffix: string;
  label: string;
  secLabel: string;
  secVal: string;
  accent: string;
}

const STATS: StatCard[] = [
  { plat: "YouTube",   to: 15,  suffix: "M", label: "Monthly views", secLabel: "Subscribers",  secVal: "265K",        accent: "#FF0000" },
  { plat: "Facebook",  to: 40,  suffix: "M", label: "Monthly views", secLabel: "Followers",    secVal: "115K",        accent: "#1877F2" },
  { plat: "Instagram", to: 10,  suffix: "M", label: "Monthly views", secLabel: "Format",       secVal: "Reels & Feed",accent: "#E1306C" },
  { plat: "Cable TV",  to: 800, suffix: "+", label: "Households",    secLabel: "Coverage",     secVal: "Barak Valley",accent: "#0D0D0D" },
];

interface Format {
  num: string;
  tag: string;
  name: string;
  plats: { n: string; c: string }[];
  desc: string;
}

const FORMATS: Format[] = [
  {
    num: "01",
    tag: "Most Popular",
    name: "Social Media Post",
    plats: [{ n: "Facebook", c: "#1877F2" }, { n: "Instagram", c: "#E1306C" }],
    desc: "A branded graphic or reel posted on our channels — reaching your exact local audience.",
  },
  {
    num: "02",
    tag: "High Trust",
    name: "Video Mention",
    plats: [{ n: "YouTube", c: "#FF0000" }, { n: "Cable TV", c: "#F5F2EB" }],
    desc: "Your brand mentioned by our anchor during a news segment. High trust — it feels like an editorial endorsement.",
  },
  {
    num: "03",
    tag: "Best For Brand Building",
    name: "Sponsored Story",
    plats: [{ n: "Facebook", c: "#1877F2" }, { n: "YouTube", c: "#FF0000" }],
    desc: "A dedicated 2–5 minute feature about your business. A storytelling format that works for restaurants, clinics and schools.",
  },
  {
    num: "04",
    tag: "Trending",
    name: "Business Feature Reel",
    plats: [{ n: "Instagram", c: "#E1306C" }, { n: "YouTube Shorts", c: "#FF0000" }],
    desc: "A 30–60 second branded video reel. Fast-cut, modern format made for younger audiences.",
  },
];

interface PriceFormat {
  num: string;
  name: string;
  note?: string;
  desc: string;
  rows: [string, string][];
}

const PRICING: PriceFormat[] = [
  {
    num: "Format 01",
    name: "Poster Banner Ads",
    desc: "A static banner placed across our posts and posters.",
    rows: [["3 Days", "₹600"], ["7 Days", "₹800"], ["15 Days", "₹2,000"], ["30 Days", "₹4,000"], ["60 Days", "₹8,000"]],
  },
  {
    num: "Format 02",
    name: "Banner Ads in Videos",
    desc: "Your banner displayed inside our news videos.",
    rows: [["3 Days", "₹1,000"], ["7 Days", "₹1,200"], ["15 Days", "₹2,500"], ["30 Days", "₹5,000"], ["60 Days", "₹10,000"]],
  },
  {
    num: "Format 03",
    name: "Video Ads",
    note: "(Intro / Outro)",
    desc: "A video spot at the start or end of our news segments.",
    rows: [["3 Days", "₹1,500"], ["7 Days", "₹3,000"], ["15 Days", "₹6,000"], ["30 Days", "₹12,000"], ["60 Days", "₹24,000"]],
  },
  {
    num: "Format 04",
    name: "Dedicated Business Feature",
    desc: "A full feature story dedicated entirely to your business.",
    rows: [["3 Days", "₹2,000"], ["7 Days", "₹4,000"], ["15 Days", "₹8,000"], ["30 Days", "₹16,000"], ["60 Days", "₹32,000"]],
  },
];

const WHY: { h: string; p: string }[] = [
  { h: "Deep Trust",              p: "Viewers rely on our news every day — your brand inherits that hard-earned credibility." },
  { h: "High Engagement",         p: "Millions of interactions, shares and comments every week across our platforms." },
  { h: "Natural Brand Placement", p: "Your business appears inside the content people already choose to watch." },
  { h: "Not Just Online — We Reach Homes", p: "From the phone in their hand to the TV in their living room across Silchar." },
];

/* ------------------------------------------------------------------ */
/* Hooks & small components                                             */
/* ------------------------------------------------------------------ */

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
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

function useIdlePulse(delay: number): boolean {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    let timer = window.setTimeout(() => setPulse(true), delay);
    const cancel = () => {
      window.clearTimeout(timer);
      setPulse(false);
      window.removeEventListener("scroll", cancel);
      window.removeEventListener("pointermove", cancel);
    };
    window.addEventListener("scroll", cancel, { passive: true });
    window.addEventListener("pointermove", cancel, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", cancel);
      window.removeEventListener("pointermove", cancel);
    };
  }, [delay]);
  return pulse;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-5 inline-flex items-center gap-3 font-mono text-[13px] font-semibold uppercase tracking-[0.25em] text-signal">
      <span className="h-0.5 w-10 bg-signal" />
      {children}
    </span>
  );
}

function WaGlyph() {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-ink">
      <span className="h-[7px] w-[7px] rounded-full bg-ink" />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

function Hero() {
  const ctaPulse = useIdlePulse(3000);

  return (
    <section className="relative z-[3] mx-auto max-w-6xl px-5 pb-12 pt-4 md:px-10 md:pb-20 md:pt-8 lg:px-16">
      <div className={`grid grid-cols-1 items-stretch border-2 border-ink bg-parchment md:grid-cols-[60%_40%] ${BRUTAL}`}>
        {/* LEFT */}
        <motion.div
          className="flex flex-col justify-center p-7 md:p-10 lg:p-12"
          initial="hidden"
          animate="show"
          variants={stagger(0.12)}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Advertise with Ishan Bangla</Eyebrow>
          </motion.div>

          <h1 className="mb-6 font-bebas text-[clamp(46px,6vw,88px)] leading-[0.88] tracking-wide">
            <motion.span className="block" variants={stagger(0.1)}>
              {["YOUR", "AD."].map((w) => (
                <span key={w} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                  <motion.span className="inline-block" variants={word}>{w}</motion.span>
                </span>
              ))}
            </motion.span>
            <motion.span className="block text-signal" variants={stagger(0.1)}>
              {["65", "MILLION", "EYES."].map((w) => (
                <span key={w} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                  <motion.span className="inline-block" variants={word}>{w}</motion.span>
                </span>
              ))}
            </motion.span>
          </h1>

          <motion.p variants={fadeUp} className="mb-8 max-w-[46ch] font-serif text-[clamp(17px,1.5vw,21px)] leading-[1.5] text-[#33302a]">
            The Barak Valley's most-watched Bengali news channel — across YouTube, Facebook, Instagram and Cable TV.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-[18px] flex flex-wrap items-center gap-4">
            <a
              href="#rates"
              className={`inline-flex items-center gap-3 whitespace-nowrap border-2 border-ink bg-signal px-[30px] pb-[14px] pt-[18px] font-bebas text-[24px] leading-none tracking-wide text-white ${BRUTAL} transition-[transform,box-shadow] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#0d0d0d]`}
            >
              GET AD RATES
            </a>
            <motion.a
              href="https://wa.me/919395616617?text=Hi%2C%20I%20want%20to%20advertise%20on%20Ishan%20Bangla."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              animate={ctaPulse ? { x: [0, -2, 0], y: [0, -2, 0] } : { x: 0, y: 0 }}
              transition={ctaPulse ? { duration: 1.1, repeat: 1, ease: "easeInOut" } : { duration: 0.2 }}
              className={`inline-flex items-center gap-3 whitespace-nowrap border-2 border-ink bg-wa px-[30px] pb-[14px] pt-[18px] font-bebas text-[24px] leading-none tracking-wide text-ink ${BRUTAL} transition-[transform,box-shadow] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#0d0d0d]`}
            >
              <WaGlyph />
              WHATSAPP US
            </motion.a>
          </motion.div>

          <motion.p variants={fadeUp} className="inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#6b6660]">
            <span className="inline-block h-[7px] w-[7px] border-[1.5px] border-ink bg-wa" />
            Trusted by local businesses across Barak Valley
          </motion.p>
        </motion.div>

        {/* RIGHT — dark broadcast panel */}
        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden border-t-2 border-ink bg-ink p-7 md:border-l-2 md:border-t-0 md:p-10">
          <motion.div
            className="flex w-full max-w-[300px] flex-col border-2 border-parchment bg-surface shadow-[8px_8px_0_#d91c1c]"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          >
            <div className="flex items-center justify-between border-b-2 border-[#2b2b2b] px-3.5 py-[11px]">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.16em] text-white">
                <motion.span
                  className="inline-block h-[9px] w-[9px] bg-signal"
                  animate={{ opacity: [1, 1, 0.2, 0.2] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "linear", times: [0, 0.499, 0.5, 1] }}
                />
                LIVE
              </span>
              <span className="text-right font-bengali text-sm font-bold leading-tight text-parchment">ঈশান বাংলা</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 px-4 py-9 text-center md:py-11">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8d8d8d]">Total monthly reach</span>
              <span className="font-bebas text-[clamp(78px,9vw,120px)] leading-[0.8] text-white">65M+</span>
              <span className="font-serif text-sm italic text-[#c9c4bb]">eyes on your ad</span>
            </div>
            <div className="border-t-2 border-parchment bg-signal px-3.5 py-[9px] text-center font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              Live from Silchar · Barak Valley
            </div>
          </motion.div>
        </div>
      </div>

      {/* red break rule */}
      <hr className="mt-8 h-[3px] border-0 bg-signal md:mt-12" />

      {/* platform stat cards */}
      <motion.div
        className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-12 md:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={inViewOnce}
        variants={stagger(0.08)}
      >
        {STATS.map((s) => (
          <motion.article
            key={s.plat}
            variants={cardUp}
            className={`group relative flex flex-col border-2 border-ink bg-[#FCFBF7] px-6 pb-6 pt-7 ${BRUTAL} transition-[transform,box-shadow] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#0d0d0d]`}
          >
            <span className="absolute inset-x-0 top-0 h-[3px]" style={{ background: s.accent }} />
            <span className="mb-2.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink">{s.plat}</span>
            <span className="font-bebas text-[clamp(72px,6.6vw,94px)] leading-[0.84] tabular-nums text-signal">
              <CountUp to={s.to} suffix={s.suffix} />
            </span>
            <span className="mt-0.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8a847a]">{s.label}</span>
            <div className="mt-[18px] flex flex-col gap-[3px] border-t-2 border-ink pt-3.5">
              <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#8a847a]">{s.secLabel}</span>
              <span className="font-bebas text-[32px] leading-none tracking-wide text-ink">{s.secVal}</span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Ad Formats — dark cinematic section                                  */
/* ------------------------------------------------------------------ */

function AdFormats() {
  return (
    <section className={`relative z-[3] overflow-hidden border-t-2 border-ink bg-ink text-white ${SECTION_X} ${SECTION_Y}`}>
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 z-[1] select-none font-bebas text-[clamp(120px,15vw,230px)] leading-[0.8] tracking-[6px] text-white/5 [writing-mode:vertical-rl] [transform:translateY(-50%)_rotate(180deg)]"
      >
        AD FORMATS
      </span>

      <div className="relative z-[2] mx-auto max-w-6xl">
        <motion.header
          className="mb-10 max-w-[760px] md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          variants={fromLeft}
        >
          <Eyebrow>What We Offer</Eyebrow>
          <h2 className="m-0 mb-[18px] font-bebas text-[clamp(46px,6.4vw,72px)] leading-none tracking-wide text-white">
            <span className="block whitespace-nowrap">Four Ways To</span>
            <span className="block whitespace-nowrap">Reach The Valley</span>
          </h2>
          <p className="m-0 max-w-[50ch] font-serif text-[17px] leading-[1.55] text-white/70">
            Choose the format that fits your goal. Mix and match across packages.
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          variants={stagger(0.08)}
        >
          {FORMATS.map((f) => (
            <motion.article
              key={f.num}
              variants={cardUp}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col border border-white/15 bg-surface px-8 pb-8 pt-[30px] transition-[border-color,box-shadow] hover:border-white/40 hover:shadow-[0_14px_44px_rgba(0,0,0,0.5),0_0_30px_rgba(217,28,28,0.08)]"
            >
              <div className="mb-2 flex items-start justify-between gap-4">
                <span className="font-bebas text-[80px] leading-[0.78] text-signal">{f.num}</span>
                <span className="mt-1.5 shrink-0 whitespace-nowrap bg-signal px-3 py-[7px] font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white">
                  {f.tag}
                </span>
              </div>
              <h3 className="mb-4 font-bebas text-[32px] leading-none tracking-wide text-white">{f.name}</h3>
              <div className="mb-4 flex flex-wrap gap-[18px]">
                {f.plats.map((p) => (
                  <span key={p.n} className="inline-flex items-center gap-2 font-mono text-[11.5px] font-semibold uppercase tracking-[0.12em] text-white/85">
                    <span className="inline-block h-[9px] w-[9px]" style={{ background: p.c }} />
                    {p.n}
                  </span>
                ))}
              </div>
              <p className="m-0 max-w-[42ch] font-serif text-sm leading-[1.55] text-white/70">{f.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pricing                                                              */
/* ------------------------------------------------------------------ */

function Pricing() {
  return (
    <section id="rates" className={`relative z-[3] border-t-2 border-ink bg-parchment ${SECTION_X} ${SECTION_Y}`}>
      <div className="mx-auto max-w-6xl">
        <motion.header
          className="mb-10 flex flex-col items-start md:mb-14"
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          variants={fadeUp}
        >
          <Eyebrow>Advertising Packages</Eyebrow>
          <h2 className="m-0 mb-[18px] font-bebas text-[clamp(34px,4.6vw,64px)] leading-[1.04] tracking-wide text-ink">
            <span className="block whitespace-normal md:whitespace-nowrap">Your Format. Your Duration. Your Budget.</span>
          </h2>
          <p className="m-0 max-w-[46ch] font-serif text-[17px] leading-[1.55] text-[#43403a]">
            No hidden fees. Start any day. Cancel anytime.
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          variants={stagger(0.09)}
        >
          {PRICING.map((p) => (
            <motion.article
              key={p.num}
              variants={cardUp}
              className={`group relative flex flex-col border-2 border-ink bg-white px-[38px] pb-9 pt-[38px] ${BRUTAL} transition-[transform,box-shadow] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#0d0d0d]`}
            >
              <span className="mb-2.5 inline-flex items-center gap-[9px] font-mono text-xs font-semibold uppercase tracking-[0.2em] text-signal">
                <span className="h-0.5 w-4 bg-signal" />
                {p.num}
              </span>
              <h3 className="mb-[7px] font-bebas text-[32px] leading-none tracking-wide text-ink">
                {p.name}
                {p.note && <span className="ml-1.5 text-[0.6em] text-[#8a847a]">{p.note}</span>}
              </h3>
              <p className="m-0 font-serif text-[15px] leading-[1.45] text-[#56524b]">{p.desc}</p>

              <div className="my-6">
                {p.rows.map(([dur, price], i) => (
                  <div
                    key={dur}
                    className={`flex items-baseline justify-between gap-4 py-[15px] ${
                      i < p.rows.length - 1 ? "border-b border-ink/20" : ""
                    }`}
                  >
                    <span className="font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-[#33302a]">{dur}</span>
                    <span className="font-bebas text-[30px] leading-[0.9] tracking-wide text-signal">{price}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/919395616617?text=Hi%2C%20I%20want%20to%20advertise%20on%20Ishan%20Bangla.%20Please%20share%20the%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block w-full border-2 border-ink bg-ink px-[22px] pb-3 pt-4 text-center font-bebas text-[23px] leading-none tracking-wide text-white shadow-[4px_4px_0_#0d0d0d] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[4px_7px_0_#0d0d0d]"
              >
                GET STARTED
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* bonus banner */}
        <motion.div
          className="mt-7 flex flex-wrap items-center justify-center gap-[18px] border-2 border-t-[3px] border-ink border-t-signal bg-ink px-6 py-7 text-center shadow-[5px_5px_0_#d91c1c] md:mt-9 md:px-10"
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          variants={fadeUp}
        >
          <span className="shrink-0 bg-signal px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-white">Bonus</span>
          <span className="font-bebas text-[clamp(24px,2.5vw,34px)] leading-[1.05] tracking-wide text-white">
            Every plan includes <em className="not-italic text-signal [white-space:nowrap]">Free Cable TV Promotion</em> in Silchar
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why Ishan Bangla                                                     */
/* ------------------------------------------------------------------ */

function Why() {
  return (
    <section className={`relative z-[3] overflow-hidden border-t-2 border-ink bg-ink text-white ${SECTION_X} ${SECTION_Y}`}>
      <div className="mx-auto max-w-6xl">
        <motion.header
          className="mb-12 max-w-[980px] md:mb-[72px]"
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          variants={fromLeft}
        >
          <Eyebrow>Why Ishan Bangla</Eyebrow>
          <h2 className="m-0 font-bebas text-[clamp(46px,7vw,88px)] leading-[0.96] tracking-wide text-white">
            We Don't Run Ads.<br />We Run <span className="text-signal">Attention.</span>
          </h2>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-4 md:gap-[30px]"
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          variants={stagger(0.1)}
        >
          {WHY.map((w) => (
            <motion.div key={w.h} variants={cardUp} className="border-t-[3px] border-signal pt-[22px]">
              <h3 className="mb-3.5 min-h-[2.1em] font-bebas text-[27px] leading-[1.04] tracking-wide text-white">{w.h}</h3>
              <p className="m-0 font-serif text-[15px] leading-[1.6] text-white/70">{w.p}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                            */
/* ------------------------------------------------------------------ */

function FinalCta() {
  const waPulse = useIdlePulse(2000);

  return (
    <section className={`relative z-[3] border-t-[3px] border-signal bg-ink text-white ${SECTION_X} ${SECTION_Y}`}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-11 md:grid-cols-[1.5fr_1fr] md:gap-[clamp(36px,5vw,72px)]">
        {/* LEFT */}
        <motion.div initial="hidden" whileInView="show" viewport={inViewOnce} variants={fromLeft}>
          <Eyebrow>Let's Talk</Eyebrow>
          <h2 className="m-0 mb-[22px] max-w-[16ch] font-bebas text-[clamp(46px,6.4vw,72px)] leading-[0.98] tracking-wide text-white">
            Ready To Reach <span className="text-signal">65 Million</span> People?
          </h2>
          <p className="m-0 mb-[34px] max-w-[48ch] font-serif text-[16px] leading-[1.6] text-white/70">
            Message us today. We'll find the right format and duration for your budget. Most campaigns go live within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://wa.me/919395616617?text=Hi%2C%20I%20want%20to%20advertise%20on%20Ishan%20Bangla."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us Now"
              animate={waPulse ? { x: [0, -2, 0], y: [0, -2, 0] } : { x: 0, y: 0 }}
              transition={waPulse ? { duration: 1.1, repeat: 1, ease: "easeInOut" } : { duration: 0.2 }}
              className="inline-flex items-center gap-3 border-2 border-ink bg-wa px-[30px] pb-[14px] pt-[18px] font-bebas text-[24px] leading-none tracking-wide text-ink shadow-[5px_5px_0_#000] transition-[transform,box-shadow] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000]"
            >
              <WaGlyph />
              WHATSAPP US NOW
            </motion.a>
            <a
              href="mailto:ishanbanglanews@gmail.com"
              className="inline-flex items-center gap-3 border-2 border-white/55 bg-transparent px-[30px] pb-[14px] pt-[18px] font-bebas text-[24px] leading-none tracking-wide text-white transition-colors hover:border-white hover:bg-white/[0.06]"
            >
              EMAIL US
            </a>
          </div>
        </motion.div>

        {/* RIGHT — contact card */}
        <motion.div
          className="flex flex-col border border-white/15 bg-white/5 p-7 md:p-9"
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          variants={fromRight}
        >
          <div className="flex flex-col gap-1.5 border-b border-white/10 pb-[18px]">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">Phone / WhatsApp</span>
            <a href="https://wa.me/919395616617" className="font-serif text-[clamp(19px,1.8vw,23px)] leading-tight text-white transition-colors hover:text-wa">
              +91 93956 16617
            </a>
          </div>
          <div className="flex flex-col gap-1.5 border-b border-white/10 py-[18px]">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">Email</span>
            <a href="mailto:ishanbanglanews@gmail.com" className="font-serif text-[clamp(19px,1.8vw,23px)] leading-tight text-white transition-colors hover:text-wa">
              ishanbanglanews@gmail.com
            </a>
          </div>
          <span className="mt-[22px] inline-flex items-center gap-[9px] font-mono text-[11.5px] font-semibold uppercase tracking-[0.2em] text-white/40">
            <span className="inline-block h-[7px] w-[7px] bg-wa" />
            Mon–Sat · 9AM–8PM · Silchar, Assam
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page export — fits into the existing router + fixed Navbar           */
/* ------------------------------------------------------------------ */

export default function Advertise() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-[92px]"
    >
      {/* subtle film grain overlay */}
      <div className="grain" aria-hidden />
      <Hero />
      <AdFormats />
      <Pricing />
      <Why />
      <FinalCta />
    </motion.main>
  );
}
