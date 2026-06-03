/* =========================================================================
   Ishan Bangla — About page  (Apple-minimal redesign)
   React 19 + TypeScript · Tailwind CSS v4 · motion/react v11
   ========================================================================= */

import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView, type Variants } from 'motion/react'
import { Link } from 'react-router-dom'

/* ── Motion ──────────────────────────────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1]
const VP = { once: true, amount: 0.25 } as const

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE, delay: d } }),
}
function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} custom={delay} variants={reveal}
      initial="hidden" whileInView="show" viewport={VP}>
      {children}
    </motion.div>
  )
}

/* ── Count-up ────────────────────────────────────────────────────────────── */
function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
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
  { to: 35,  suffix: 'M+', label: 'Total Views', sub: 'Across all platforms' },
  { to: 265, suffix: 'K',  label: 'YouTube',     sub: 'Subscribers'          },
  { to: 115, suffix: 'K',  label: 'Facebook',    sub: 'Followers'            },
  { to: 800, suffix: '+',  label: 'Cable TV',    sub: 'Households'           },
]
const VALUES = [
  { title: 'Truth First',     body: 'Every story is verified before publishing. We would rather be second than wrong.' },
  { title: 'Community Voice', body: 'We exist to amplify the people of Barak Valley — not just report about them.'     },
  { title: 'Local Impact',    body: 'Our work drives real change — in policy, business, and everyday lives.'           },
]

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-[100px]"
    >

      {/* HERO */}
      <section className="bg-[#0a0a0a] border-b border-signal/60 px-5 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="font-bebas text-[clamp(48px,8vw,120px)] text-white leading-[0.9] mb-5"
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}>
            The Voice Of<br /><span className="text-signal">Barak Valley.</span>
          </motion.h1>
          <motion.p
            className="font-serif text-[18px] text-white/55 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}>
            Ishan Bangla is the most trusted Bengali news channel in Silchar and the Barak Valley —
            reporting the stories that matter to millions every day.
          </motion.p>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-warm border-b border-ink/[0.07] px-5 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal block mb-4">Our Mission</span>
            <h2 className="font-bebas text-[clamp(40px,6vw,72px)] text-ink leading-[0.9] mb-8">
              News That Belongs<br />To The Valley.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              <p className="font-serif text-[17px] text-ink/70 leading-[1.7]">
                In a region where voices are often unheard, Ishan Bangla exists to amplify the truth —
                from breaking political news to the stories of everyday people in Silchar.
              </p>
              <p className="font-serif text-[17px] text-ink/70 leading-[1.7]">
                We reach millions because we never compromise on accuracy, speed, or our commitment
                to the communities we serve across Barak Valley.
              </p>
            </div>
          </Reveal>

          {/* Stat grid */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/[0.08] border border-ink/[0.08]">
            {STATS.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="bg-warm px-6 py-8 text-center">
                <div className="font-bebas text-[clamp(38px,4.5vw,54px)] text-signal leading-none tabular-nums mb-1">
                  <CountUp to={s.to} suffix={s.suffix} />
                </div>
                <div className="font-bebas text-[17px] text-ink leading-tight">{s.label}</div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-ink/40 mt-1">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#0a0a0a] border-b border-white/[0.05] px-5 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal block mb-4">Our Values</span>
            <h2 className="font-bebas text-[clamp(40px,6vw,72px)] text-white leading-[0.9]">
              Three Things.<br />No Compromise.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-[clamp(28px,4vw,64px)]">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.12}>
                <div className="border-t-2 border-signal pt-6">
                  <h3 className="font-bebas text-[28px] text-white mb-3 tracking-wide">{v.title}</h3>
                  <p className="font-serif text-[15px] text-white/55 leading-[1.7]">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-warm border-b border-ink/[0.07] px-5 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal block mb-4">Get In Touch</span>
            <h2 className="font-bebas text-[clamp(48px,7vw,80px)] text-ink leading-[0.88] mb-10">Let's Talk.</h2>
            <ul className="flex flex-col gap-7">
              <li>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 block mb-1.5">WhatsApp</span>
                <a href="https://wa.me/919395616617" target="_blank" rel="noopener noreferrer"
                  className="font-serif text-[20px] text-ink hover:text-signal transition-colors duration-150">
                  +91 93956 16617
                </a>
              </li>
              <li>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 block mb-1.5">Email</span>
                <a href="mailto:ishanbanglanews@gmail.com"
                  className="font-serif text-[18px] text-ink hover:text-signal transition-colors duration-150">
                  ishanbanglanews@gmail.com
                </a>
              </li>
              <li>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 block mb-1.5">Location</span>
                <span className="font-serif text-[18px] text-ink/65">Silchar, Assam, India</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-4 md:pt-[82px]">
            <Link to="/advertise"
              className="flex items-center justify-between border-2 border-ink bg-signal px-8 pb-[14px] pt-[18px] font-bebas text-[22px] leading-none tracking-wide text-white transition-transform duration-200 hover:-translate-y-[3px] group">
              Advertise With Us
              <span className="text-white/60 group-hover:translate-x-1 transition-transform duration-150">→</span>
            </Link>
            <Link to="/report"
              className="flex items-center justify-between border-2 border-ink bg-ink px-8 pb-[14px] pt-[18px] font-bebas text-[22px] leading-none tracking-wide text-white transition-transform duration-200 hover:-translate-y-[3px] group">
              Report News
              <span className="text-white/60 group-hover:translate-x-1 transition-transform duration-150">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </motion.main>
  )
}
