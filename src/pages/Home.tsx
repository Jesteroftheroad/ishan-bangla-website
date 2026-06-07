/* =========================================================================
   Ishan Bangla — Home page
   React 19 + TypeScript · Tailwind CSS v4 · motion/react v11
   ========================================================================= */

import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, animate, useInView, type Variants } from 'motion/react'

/* ── Motion primitives ───────────────────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1]

const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: EASE, delay },
  }),
}
const VP = { once: true, amount: 0.25 } as const

function Reveal({ children, delay = 0, className, as = 'div' }: {
  children: React.ReactNode; delay?: number; className?: string; as?: keyof typeof motion
}) {
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp className={className} custom={delay} variants={reveal}
      initial="hidden" whileInView="show" viewport={VP}>
      {children}
    </Comp>
  )
}

/* ── Count-up ────────────────────────────────────────────────────────────── */
function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.5, ease: 'easeOut', onUpdate: v => setVal(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{val.toLocaleString('en-US')}{suffix}</span>
}

/* ── Data ────────────────────────────────────────────────────────────────── */
const STATS = [
  { to: 265,  suffix: 'K', label: ['YouTube',   'Subscribers'] },
  { to: 115,  suffix: 'K', label: ['Facebook',  'Followers']   },
  { to: 15,   suffix: 'M', label: ['Monthly',   'Views']       },
  { to: 800,  suffix: '+', label: ['Cable TV',  'Households']  },
] as const

const ADV_LINES = ['YOUR BRAND.', 'BARAK VALLEY\'S', 'ATTENTION.']

const YT  = 'https://www.youtube.com/@Ishanbanglanews'
const FB  = 'https://facebook.com/profile.php?id=100063811603096'
const IG  = 'https://www.instagram.com/ishan_banglanews/'
const WA  = 'https://wa.me/919395616617?text=Hi%2C%20I%20want%20to%20advertise%20on%20Ishan%20Bangla.'

const VALUES = [
  { label: 'Truth First',  body: 'Verified, on-the-ground reporting from across the Barak Valley.'  },
  { label: 'Local Voice',  body: 'Stories in Bengali, for the people who live them every day.'       },
  { label: 'Daily Trust',  body: 'The newsroom Silchar has turned to, morning after morning.'        },
]

/* ── Social icon SVGs ────────────────────────────────────────────────────── */
function YTIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}
function FBIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}
function IGIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

/* ── Section 1: Hero ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative flex h-screen min-h-[600px] w-full flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/hero-silchar.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.4) 40%, rgba(10,10,10,0.8) 100%)',
        }}
        aria-hidden
      />

      {/* Title */}
      <div className="relative z-[2] px-6 text-center">
        <motion.h1
          className="font-bengali text-[clamp(72px,14vw,190px)] font-extrabold leading-[0.9] -tracking-[2px] [white-space:nowrap]"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, filter: 'blur(18px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
        >
          <span className="text-white">ঈশান</span>
          <span className="text-signal"> বাংলা</span>
        </motion.h1>
        <motion.p
          className="mt-5 font-bebas text-[18px] tracking-[0.3em] text-white/90 md:mt-8"
          style={{ textShadow: '0 2px 30px rgba(0,0,0,0.8)' }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
        >
          BARAK VALLEY'S FASTEST GROWING MEDIA CHANNEL
        </motion.p>
      </div>

      {/* Bottom strip — tagline + social icons + scroll indicator */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-[2] flex h-14 items-center justify-between border-t border-white/10 px-5 md:px-10 lg:px-16 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 1.5 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35 hidden sm:block">
          65M+ Monthly Reach · Silchar, Assam
        </span>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {[
            { href: YT, label: 'YouTube',   Icon: YTIcon },
            { href: FB, label: 'Facebook',  Icon: FBIcon },
            { href: IG, label: 'Instagram', Icon: IGIcon },
          ].map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={label}
              className="text-white/40 hover:text-white hover:scale-110 transition-all duration-150">
              <Icon />
            </a>
          ))}
        </div>

        <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
          Scroll
          <span className="scroll-line" />
        </span>
      </motion.div>
    </section>
  )
}

/* ── Section 2: Statement ────────────────────────────────────────────────── */
function Statement() {
  return (
    <section className="bg-black px-5 py-[clamp(100px,20vh,200px)] text-center md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        <Reveal as="div" className="font-bebas text-[clamp(72px,12vw,150px)] leading-[0.92] tracking-wide text-white">
          35 MILLION PEOPLE.
        </Reveal>
        <Reveal as="div" delay={0.35} className="font-bebas text-[clamp(72px,12vw,150px)] leading-[0.92] tracking-wide text-signal">
          EVERY MONTH.
        </Reveal>
        <Reveal as="p" delay={0.65} className="mx-auto mt-8 max-w-[560px] font-serif text-lg leading-[1.65] text-white/55 md:mt-11">
          Across YouTube, Facebook, Instagram and Cable TV — Ishan Bangla is where
          Barak Valley gets its news. Every single day.
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[900px] grid-cols-2 gap-y-10 md:mt-20 md:grid-cols-4 md:gap-y-0">
          {STATS.map((s, i) => (
            <Reveal key={s.label.join()} delay={i * 0.1}
              className={`relative px-3 md:px-6 lg:px-8 ${
                i > 0 ? "md:before:absolute md:before:left-0 md:before:top-1/2 md:before:h-14 md:before:w-px md:before:-translate-y-1/2 md:before:bg-white/10 md:before:content-['']" : ''
              }`}>
              <div className="font-bebas text-[clamp(38px,4.5vw,50px)] leading-none tabular-nums text-white">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-2.5 font-mono text-[10px] uppercase leading-[1.5] tracking-[0.16em] text-white/38">
                {s.label[0]}<br />{s.label[1]}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Section 3: Top Videos (hardcoded) ──────────────────────────────────── */
const TOP_VIDEOS = [
  {
    id:    'qFme8jwBii4',
    title: 'বিধায়ক নির্বাচিত হয়ে ঈশান বাংলায় প্রথম সাক্ষাৎকারে কি বললেন আমিনুল হক লস্কর?',
    tag:   'Interview',
  },
  {
    id:    'UW9D5JXmBHg',
    title: 'মতামত অনুষ্ঠানে অভিজিৎ ভট্টাচার্যের মুখোমুখি তৃণমূল সাংসদ সুস্মিতা দেব',
    tag:   'Opinion',
  },
  {
    id:    '0f1wswXBYyQ',
    title: 'মতামত অনুষ্ঠানে অভিজিৎ ভট্টাচার্যের মুখোমুখি তৃণমূল কংগ্রেসের যাদবপুর লোকসভার সাংসদ সাঈনী ঘোষ।',
    tag:   'Opinion',
  },
  {
    id:    'cszFbJDtF3o',
    title: 'POINT BLANK | নেতাদের উড়েছে ঘুম! আরশোলা বাহিনীর এন্ট্রিতে কাঁপছে দিল্লি!',
    tag:   'Point Blank',
  },
  {
    id:    '9AFvbDE97bA',
    title: 'ISHAN BANGLA MID-DAY EXPRESS 08-05-2026.',
    tag:   'Bulletin',
  },
  {
    id:    'vXCqZuXLaGU',
    title: 'OPINION POLL | AI বিশ্লেষণ, জনতার মতামত, ধলাইর প্রার্থীদের নিয়ে',
    tag:   'Opinion Poll',
  },
  {
    id:    'DonjE3KSVAs',
    title: 'DAILY EVENING SHOW | "ওসমান হাদীর হত্যা কারা করিয়েছে জানি" — মমতা বন্দ্যোপাধ্যায়ের মন্তব্য নিয়ে',
    tag:   'Evening Show',
  },
  {
    id:    'KuaEydC5_Uw',
    title: 'DAILY EVENING SHOW | রাজদীপ রায় কি শিলচরে জিততে পারবেন!',
    tag:   'Evening Show',
  },
  {
    id:    'SkEgzQDOtkc',
    title: 'DAILY EVENING SHOW | কাল ভোট। বরাকের আসনগুলিতে কি হতে পারে?',
    tag:   'Evening Show',
  },
]

function VideoCard({ id, title, tag, delay }: { id: string; title: string; tag: string; delay: number }) {
  const url = `https://www.youtube.com/watch?v=${id}`
  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className="group block"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-white/[0.04] mb-4">
        <img
          src={thumb}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-12 h-12 rounded-full bg-signal/90 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        {/* Red sweep on hover */}
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-signal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
        {/* Tag chip */}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white bg-signal/90 px-2 py-0.5">
            {tag}
          </span>
        </div>
      </div>
      {/* Title */}
      <h3 className="font-bengali text-[15px] leading-snug text-white/85 group-hover:text-white transition-colors duration-150 line-clamp-2">
        {title}
      </h3>
    </motion.a>
  )
}

function LatestVideos() {
  return (
    <section className="bg-[#0a0a0a] px-5 py-[clamp(80px,14vh,140px)] md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-10 md:mb-14 flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal inline-flex items-center gap-3 mb-4">
              <span className="h-0.5 w-8 bg-signal" />Most Viewed
            </span>
            <h2 className="font-bebas text-[clamp(40px,6vw,72px)] leading-none text-white">
              Top Videos
            </h2>
          </div>
          <a href={YT} target="_blank" rel="noopener noreferrer"
            className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-150 hidden sm:block">
            View All →
          </a>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {TOP_VIDEOS.map((v, i) => (
            <VideoCard key={v.id} {...v} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Section 4: Broadcast ────────────────────────────────────────────────── */
function Broadcast() {
  return (
    <section className="bg-ink px-5 py-[clamp(100px,18vh,190px)] text-center md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        <Reveal as="div" className="font-bebas text-[clamp(56px,9vw,110px)] leading-[0.94] tracking-wide text-white">
          NOT JUST NEWS.
        </Reveal>
        <Reveal as="div" delay={0.25} className="font-bebas text-[clamp(56px,9vw,110px)] leading-[0.94] tracking-wide text-white/25">
          YOUR COMMUNITY. YOUR STORIES.
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[860px] grid-cols-1 gap-9 md:mt-20 md:grid-cols-3 md:gap-[clamp(24px,4vw,60px)]">
          {VALUES.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.12} className="border-t-2 border-signal pt-5 text-left">
              <div className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white">{v.label}</div>
              <p className="font-serif text-[15px] leading-[1.6] text-white/55">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Section 5: Advertise CTA ────────────────────────────────────────────── */
function AdvertiseCta() {
  return (
    <section className="overflow-hidden bg-warm px-5 py-[clamp(90px,14vh,160px)] text-ink md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-[clamp(36px,5vw,72px)]">
        <div>
          <Reveal className="mb-5 block">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal inline-flex items-center gap-3">
              <span className="h-0.5 w-8 bg-signal" />Grow with us
            </span>
          </Reveal>

          <motion.h2
            className="mb-6 font-bebas text-[clamp(56px,7.5vw,96px)] leading-[0.9] tracking-wide text-ink"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.25 } } }}
          >
            {ADV_LINES.map(ln => (
              <motion.span key={ln} className="block"
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}>
                {ln}
              </motion.span>
            ))}
          </motion.h2>

          <Reveal as="p" delay={0.25} className="mb-8 max-w-[44ch] font-serif text-lg leading-[1.65] text-ink/65">
            65 million monthly views across platforms. Starting at ₹600. Cable TV included free.
          </Reveal>

          <Reveal delay={0.4} className="flex flex-wrap gap-4">
            <Link to="/advertise"
              className="inline-flex items-center gap-2.5 border-2 border-ink bg-ink px-8 pb-[13px] pt-[17px] font-bebas text-[22px] leading-none tracking-wide text-white transition-transform duration-200 hover:-translate-y-[3px]">
              See Ad Packages →
            </Link>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border-2 border-ink bg-wa px-8 pb-[13px] pt-[17px] font-bebas text-[22px] leading-none tracking-wide text-ink transition-transform duration-200 hover:-translate-y-[3px]">
              WhatsApp Us
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex flex-col items-center justify-center text-center">
          <div className="font-bebas text-[clamp(90px,16vw,170px)] leading-[0.82] tracking-wide text-signal/55">65M+</div>
          <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/30">Monthly Reach</div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-[92px] bg-black"
    >
      <div className="grain" aria-hidden />
      <Hero />
      <Statement />
      <LatestVideos />
      <Broadcast />
      <AdvertiseCta />
    </motion.main>
  )
}
