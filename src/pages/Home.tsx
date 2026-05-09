import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import VideoPlayer from '../components/VideoPlayer'
import { S } from '../lib/styles'

// ── Animated counter hook ─────────────────────────────────────────────────────
function useCounter(target: number, duration = 1800) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || fired.current) return
      fired.current = true
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        setVal(Math.floor(ease * target))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return { val, ref }
}


// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({
  target, suffix, label, sublabel, delay = 0,
}: { target: number; suffix: string; label: string; sublabel: string; delay?: number }) {
  const { val, ref } = useCounter(target)
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`${S.card} p-6`}
    >
      <div className={`${S.display} text-[56px] md:text-[72px] text-[#D91C1C] leading-none mb-1`}>
        {val}{suffix}
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0D0D0D]/50 mb-1">{label}</div>
      <div className="font-bengali text-sm text-[#0D0D0D]/60">{sublabel}</div>
    </motion.div>
  )
}

// ── Video preview card ────────────────────────────────────────────────────────
function VideoCard({
  videoId, title, tag, delay = 0,
}: { videoId: string; title: string; tag: string; delay?: number }) {
  return (
    <motion.a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`${S.card} overflow-hidden group cursor-pointer`}
    >
      <div className="relative aspect-video bg-[#0D0D0D] overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <span className="font-mono text-[10px] text-[#D91C1C] uppercase tracking-widest">{tag}</span>
          <p className="font-display text-white text-xl leading-tight mt-0.5">{title}</p>
        </div>
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 border-2 border-white bg-white/10 flex items-center justify-center group-hover:bg-[#D91C1C] group-hover:border-[#D91C1C] transition-colors duration-200">
            <svg className="w-6 h-6 fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
    </motion.a>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-[100px]"
    >
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[680px] max-h-[1000px] flex flex-col overflow-hidden bg-[#080808]">

        {/* ── Video background ── */}
        <VideoPlayer className="absolute inset-0 z-0" overlayClass="" />

        {/* ── Cinematic overlay stack ── */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          {/* base dark veil */}
          <div className="absolute inset-0 bg-[#080808]/75" />
          {/* center spotlight — keeps type readable */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 45%, transparent 30%, rgba(8,8,8,0.82) 100%)' }} />
          {/* bottom fade to next section */}
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />
          {/* top fade */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#080808]/60 to-transparent" />
          {/* film grain texture */}
          <div
            className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
          />
        </div>

        {/* ── Left red accent bar ── */}
        <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent via-[#D91C1C] to-transparent z-10 opacity-70" />

        {/* ── Broadcast bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 px-7 md:px-12 lg:px-16 py-3.5 flex items-center justify-between border-b border-white/[0.06]"
        >
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#D91C1C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D91C1C] animate-pulse" />
              Live
            </span>
            <span className="w-px h-3 bg-white/15" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/28 hidden sm:block">
              Silchar · Barak Valley · Assam
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://www.youtube.com/@Ishanbanglanews" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
              className="text-white/22 hover:text-[#FF0000] transition-colors duration-200">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://facebook.com/profile.php?id=100063811603096" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="text-white/22 hover:text-[#1877F2] transition-colors duration-200">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/ishan_banglanews/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-white/22 hover:text-[#E1306C] transition-colors duration-200">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </motion.div>

        {/* ── Main content — centered ── */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-12 lg:px-16">
          <div className="w-full max-w-4xl text-center">

            {/* Eyebrow label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <span className="h-px w-10 bg-[#D91C1C]/60" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/38">
                বরাক উপত্যকার সেরা সংবাদ মাধ্যম
              </span>
              <span className="h-px w-10 bg-[#D91C1C]/60" />
            </motion.div>

            {/* Bengali title — uncropped with generous padding */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="py-2"
            >
              <h1
                className="font-bengali font-black leading-[1.05] tracking-tight"
                style={{ fontSize: 'clamp(64px, 15vw, 172px)' }}
              >
                <span className="text-[#1B3EC8]">ঈশান</span>
                <span className="text-white/10 mx-2 md:mx-3">·</span>
                <span className="text-[#D91C1C]">বাংলা</span>
              </h1>
            </motion.div>

            {/* Thin rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-7 origin-center"
            />

            {/* English headline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[18px] sm:text-[22px] md:text-[26px] text-white/72 uppercase tracking-[0.12em] mb-2"
            >
              Breaking News. Real Stories. Local Impact.
            </motion.p>

            {/* Bengali tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.78 }}
              className="font-bengali text-[15px] md:text-[17px] text-white/32 mb-10"
            >
              সর্বদা প্রথম — সর্বদা সঠিক
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/advertise"
                className="inline-flex items-center gap-2 bg-[#D91C1C] text-white border border-[#D91C1C] px-7 py-3.5 font-display text-[18px] uppercase tracking-wide transition-all duration-200 hover:bg-white hover:text-[#D91C1C] hover:border-white"
              >
                Advertise With Us
              </Link>
              <Link
                to="/report"
                className="inline-flex items-center gap-2 bg-transparent text-white border border-white/30 px-7 py-3.5 font-display text-[18px] uppercase tracking-wide transition-all duration-200 hover:border-white/70 hover:bg-white/8"
              >
                Report News
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="relative z-10 border-t border-white/[0.07] bg-black/40 backdrop-blur-md"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-0 flex divide-x divide-white/[0.07]">
            {[
              { num: '35M+', label: 'Monthly Facebook',   icon: 'fb'  },
              { num: '6M+',  label: 'Monthly YouTube',    icon: 'yt'  },
              { num: '1M+',  label: 'Monthly Instagram',  icon: 'ig'  },
              { num: '1000+',label: 'Cable Households',   icon: 'tv'  },
            ].map(({ num, label, icon }) => (
              <div key={label} className="flex-1 flex flex-col items-center justify-center py-4 px-3 gap-0.5 min-w-0">
                <span className="font-display text-[22px] sm:text-[28px] md:text-[32px] text-white leading-none">{num}</span>
                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.18em] text-white/30 text-center leading-tight hidden sm:block">{label}</span>
                {/* mobile: short label */}
                <span className="font-mono text-[8px] uppercase tracking-widest text-white/30 sm:hidden">{icon === 'fb' ? 'FB' : icon === 'yt' ? 'YT' : icon === 'ig' ? 'IG' : 'TV'}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </section>

      {/* ── STATS ── */}
      <section className="bg-[#F5F2EB] border-b-2 border-[#0D0D0D] px-5 md:px-10 lg:px-16 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10 border-b-2 border-[#0D0D0D] pb-4">
            <h2 className={`${S.display} text-[52px] md:text-[70px] text-[#0D0D0D]`}>Our Numbers</h2>
            <span className="font-bengali text-[#0D0D0D]/40 text-lg hidden md:block">আমাদের সংখ্যা</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard target={35}   suffix="M+"  label="Facebook Views"    sublabel="ফেসবুকে প্রতি মাসে"     delay={0}    />
            <StatCard target={6}    suffix="M+"  label="YouTube Views"    sublabel="ইউটিউবে প্রতি মাসে"    delay={0.08} />
            <StatCard target={1}    suffix="M+"  label="Instagram Reach"  sublabel="ইনস্টাগ্রামে প্রতি মাসে" delay={0.16} />
            <StatCard target={1000} suffix="+"   label="Cable Households" sublabel="ক্যাবল টিভিতে"           delay={0.24} />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-mono text-[13px] uppercase tracking-widest text-[#0D0D0D]/40 text-center mt-8"
          >
            👉 This is where Silchar pays attention — every single day.
          </motion.p>
        </div>
      </section>

      {/* ── LATEST COVERAGE ── */}
      <section className="bg-[#F5F2EB] px-5 md:px-10 lg:px-16 py-14 border-b-2 border-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between gap-4 mb-10 border-b-2 border-[#0D0D0D] pb-4">
            <h2 className={`${S.display} text-[52px] md:text-[70px]`}>Latest Coverage</h2>
            <a
              href="https://www.youtube.com/@Ishanbanglanews"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] uppercase tracking-widest text-[#D91C1C] hover:underline hidden sm:block"
            >
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <VideoCard videoId="aHRfDs0XWvI" title="Night Bulletin — 24 Apr 2026"                              tag="Night Bulletin"  delay={0}    />
            <VideoCard videoId="z5jc9WxwoxY" title="Mid-Day Express — 26 Apr 2026"                             tag="Daily Bulletin"  delay={0.08} />
            <VideoCard videoId="U0hNyA0fZ8M" title="কালাইনে তীব্র ছাত্র আন্দোলন! প্রশাসন বনাম ছাত্রদের সংঘাত" tag="Breaking"        delay={0.16} />
            <VideoCard videoId="3tqk0qwr7Rg" title="বিদেশি নোটিশ · ৮৫ বছরের বৃদ্ধা · দখল মুক্ত ১৫ হেক্টর জমি" tag="Local News"      delay={0.24} />
            <VideoCard videoId="oLrGCTdY5t8" title="স্কুল সংযুক্তিকরণ · জেলাশাসক বদলি · শিলচর স্টেশন"       tag="Regional"        delay={0.32} />
            <VideoCard videoId="HyeohRRRC58" title="শিলচরের রাস্তায় মৃত্যু ফাঁদ! দুর্ভোগে ক্ষুব্ধ জনতা"    tag="Breaking"        delay={0.40} />
          </div>
        </div>
      </section>

      {/* ── PODCAST / INTERVIEWS ── */}
      <section className="bg-[#0D0D0D] px-5 md:px-10 lg:px-16 py-16 border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-10 pb-5 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D91C1C] block mb-3">Audio · Video</span>
              <h2 className="font-display text-[52px] md:text-[70px] text-white leading-none">
                Podcast &amp; Interviews
              </h2>
            </div>
            <a
              href="https://www.youtube.com/playlist?list=PLI7DwlvMoLQPcAU_iSVIbEyv9N5E1ONT_"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-[#D91C1C] border border-[#D91C1C]/40 px-4 py-2 hover:bg-[#D91C1C] hover:text-white hover:border-[#D91C1C] transition-all duration-200 hidden sm:block"
            >
              View All →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { videoId: 'qFme8jwBii4', title: 'Podcast Episode', tag: 'Podcast' },
              { videoId: '0f1wswXBYyQ', title: 'Interview', tag: 'Interview' },
              { videoId: 'UW9D5JXmBHg', title: 'Podcast Episode', tag: 'Podcast' },
            ].map(({ videoId, tag }, i) => (
              <motion.a
                key={videoId}
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden bg-[#141414] border border-white/[0.07] block
                  transition-[transform,box-shadow] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(217,28,28,0.18)]"
              >
                {/* thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-[#0a0a0a]">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt={tag}
                    className="w-full h-full object-cover transition-transform duration-[480ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-[#141414]/20 to-transparent" />

                  {/* mic icon — podcast feel */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:border-[#D91C1C] group-hover:bg-[#D91C1C]/20 transition-all duration-300">
                      <svg className="w-5 h-5 fill-white ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>

                  {/* tag chip */}
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white bg-[#D91C1C] px-2 py-0.5">
                      {tag}
                    </span>
                  </div>
                </div>

                {/* bottom bar */}
                <div className="px-5 py-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                    ঈশান বাংলা · Ishan Bangla
                  </span>
                  <svg className="w-4 h-4 text-white/20 group-hover:text-[#D91C1C] transition-colors duration-200 fill-current" viewBox="0 0 24 24"><path d="M14 5l7 7-7 7M3 12h18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                </div>

                {/* bottom red sweep */}
                <div className="absolute bottom-0 inset-x-0 h-px bg-[#D91C1C] scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
              </motion.a>
            ))}
          </div>

          {/* mobile view all */}
          <div className="mt-6 sm:hidden text-center">
            <a
              href="https://www.youtube.com/playlist?list=PLI7DwlvMoLQPcAU_iSVIbEyv9N5E1ONT_"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-widest text-[#D91C1C] border border-[#D91C1C]/40 px-5 py-2.5 inline-block"
            >
              View All →
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY ADVERTISE TEASER ── */}
      <section className="bg-[#0D0D0D] px-5 md:px-10 lg:px-16 py-16 border-b-2 border-[#D91C1C]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={`${S.tag} mb-4 !text-[#D91C1C] !border-[#D91C1C]`}>Advertising</span>
            <h2 className={`${S.display} text-[60px] md:text-[90px] lg:text-[110px] text-white mb-6`}>
              We Don't Run Ads.<br />
              <span className="text-[#D91C1C]">We Run Attention.</span>
            </h2>
            <p className="font-sans text-white/60 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              3 million eyes watching Silchar's most trusted platform. Your brand, inside the content they already trust.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { n: '01', title: 'Deep Trust',        body: 'People rely on us daily. Your ad carries our credibility.' },
              { n: '02', title: 'High Engagement',   body: 'Millions of views, shares, and comments every week.'       },
              { n: '03', title: 'Natural Placement', body: 'Woven into content — not beside it. Seamless exposure.'   },
            ].map(({ n, title, body }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-2 border-white/20 p-6 hover:border-[#D91C1C] transition-colors duration-200"
              >
                <div className={`${S.display} text-[60px] text-white/10 leading-none mb-3`}>{n}</div>
                <div className={`${S.display} text-3xl text-[#D91C1C] mb-2`}>{title}</div>
                <p className="font-sans text-white/60 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
          <Link to="/advertise" className={S.btnRed}>
            See Pricing & Packages →
          </Link>
        </div>
      </section>

      {/* ── REPORT NEWS CTA ── */}
      <section className="bg-[#D91C1C] px-5 md:px-10 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 border border-white/40 px-2 py-0.5 inline-block mb-5">
              Community Journalism
            </span>
            <h2 className={`${S.display} text-[60px] md:text-[80px] text-white leading-none mb-4`}>
              You Saw It<br />First.
            </h2>
            <p className="font-bengali text-white/80 text-base md:text-lg max-w-md mb-6 leading-relaxed">
              আপনি যদি কোনো গুরুত্বপূর্ণ ঘটনার সাক্ষী হন — আমাদের জানান।
              আপনার খবর পৌঁছে যাবে লক্ষ মানুষের কাছে।
            </p>
            <Link to="/report" className={`${S.btnInk} !shadow-[4px_4px_0_#fff] hover:!shadow-[6px_6px_0_#fff]`}>
              Submit Your Story →
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="border-2 border-white/30 bg-white/10 p-6"
          >
            <div className="flex flex-col gap-4">
              {['Fill a quick form or WhatsApp directly', 'Share photo / video evidence', 'We verify & publish within hours'].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className={`${S.display} text-5xl text-white/30 leading-none shrink-0 w-12`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-sans text-white text-sm leading-relaxed pt-2">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
