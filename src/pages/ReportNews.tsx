/* =========================================================================
   Ishan Bangla — Report News page  (Apple-minimal redesign)
   React 19 + TypeScript · Tailwind CSS v4 · motion/react v11
   ========================================================================= */

import { useState } from 'react'
import { motion, type Variants } from 'motion/react'

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

/* ── Data ────────────────────────────────────────────────────────────────── */
const STEPS = [
  { n: '01', title: 'Fill the Form',     body: 'Enter your name, location, and a brief description of what happened.'          },
  { n: '02', title: 'Share Evidence',    body: 'Attach photos, videos, or voice notes via WhatsApp to strengthen the story.'   },
  { n: '03', title: 'We Publish',        body: 'Our team verifies and publishes important stories within hours of submission.'  },
]

const GUIDELINES = [
  'Share only what you personally witnessed or have direct evidence of.',
  'Include the location and time of the event as precisely as possible.',
  'Photos and videos significantly strengthen your report.',
  'False or misleading reports will be rejected immediately.',
  'Your identity is kept strictly confidential upon request.',
]

/* ── Form field component ────────────────────────────────────────────────── */
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45 block mb-2">{label}</label>
      {children}
    </div>
  )
}

const INPUT_CLS = 'w-full border border-ink/20 bg-white px-4 py-3 font-serif text-[15px] text-ink placeholder:text-ink/30 focus:outline-none focus:border-signal transition-colors duration-150'
const TEXTAREA_CLS = `${INPUT_CLS} resize-none`

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function ReportNews() {
  const [name, setName]   = useState('')
  const [loc, setLoc]     = useState('')
  const [story, setStory] = useState('')

  const handleWA = () => {
    const parts = ['Hi, I want to report a news story to Ishan Bangla.']
    if (name)  parts.push(`Name: ${name}`)
    if (loc)   parts.push(`Location: ${loc}`)
    if (story) parts.push(`Story: ${story}`)
    window.open(
      `https://wa.me/919395616617?text=${encodeURIComponent(parts.join('\n'))}`,
      '_blank', 'noopener,noreferrer'
    )
  }

  return (
    <motion.main
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-[92px]"
    >

      {/* HERO */}
      <section className="bg-[#0a0a0a] border-b border-signal/60 px-5 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="font-bebas text-[clamp(48px,8vw,120px)] text-white leading-[0.9] mb-5"
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}>
            You Saw It<br /><span className="text-signal">First.</span>
          </motion.h1>
          <motion.p
            className="font-serif text-[18px] text-white/55 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}>
            Be a community journalist. Share what you witnessed and let us bring your story
            to 35 million people across Barak Valley.
          </motion.p>
          <motion.p
            className="font-mono text-[11px] uppercase tracking-widest text-white/28 mt-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}>
            Identity kept confidential on request.
          </motion.p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-warm border-b border-ink/[0.07] px-5 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal block mb-4">Process</span>
            <h2 className="font-bebas text-[clamp(36px,5vw,60px)] text-ink leading-[0.9]">
              Three Steps To Your Story.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STEPS.map(({ n, title, body }, i) => (
              <motion.div key={n}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ duration: 0.65, delay: i * 0.1, ease: EASE }}
                className="bg-white border border-ink/10 px-7 py-8 flex flex-col gap-4">
                <span className="font-bebas text-[80px] text-signal leading-[0.78]">{n}</span>
                <h3 className="font-bebas text-[28px] text-ink leading-tight tracking-wide">{title}</h3>
                <p className="font-serif text-[15px] text-ink/60 leading-[1.65]">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBMISSION */}
      <section className="bg-warm border-b border-ink/[0.07] px-5 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink/10 overflow-hidden">

          {/* Left — dark guidelines panel */}
          <div className="bg-[#0a0a0a] px-8 py-10 md:px-10 md:py-12">
            <Reveal>
              <h3 className="font-bebas text-[32px] text-white mb-6 tracking-wide">Before You Submit</h3>
              <ul className="flex flex-col gap-5">
                {GUIDELINES.map((g, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-bebas text-signal text-[18px] leading-tight shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-serif text-[14px] text-white/60 leading-[1.65]">{g}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-white/[0.08]">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-2">Direct WhatsApp</p>
                <a href="https://wa.me/919395616617" target="_blank" rel="noopener noreferrer"
                  className="font-bebas text-[28px] text-white hover:text-signal transition-colors duration-150 block">
                  +91 93956 16617
                </a>
                <p className="font-serif text-[13px] text-white/35 mt-1">Send photos & videos directly to this number.</p>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="bg-white px-8 py-10 md:px-10 md:py-12 flex flex-col">
            <Reveal className="flex flex-col gap-6 flex-1">
              <h3 className="font-bebas text-[32px] text-ink tracking-wide">Submit Your Story</h3>
              <Field label="Your Name (optional)">
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  className={INPUT_CLS}
                />
              </Field>
              <Field label="Location / এলাকার নাম">
                <input
                  type="text"
                  value={loc}
                  onChange={e => setLoc(e.target.value)}
                  placeholder="e.g. Silchar, Sonai, Lakhipur…"
                  className={INPUT_CLS}
                />
              </Field>
              <Field label="What Happened">
                <textarea
                  rows={5}
                  value={story}
                  onChange={e => setStory(e.target.value)}
                  placeholder="Describe the event briefly…"
                  className={TEXTAREA_CLS}
                />
              </Field>
              <button
                onClick={handleWA}
                className="w-full flex items-center justify-center gap-3 bg-wa text-ink px-6 pb-[14px] pt-[18px] font-bebas text-[22px] leading-none tracking-wide transition-transform duration-200 hover:-translate-y-[2px] mt-auto"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send via WhatsApp
              </button>
              <p className="text-center font-mono text-[10px] text-ink/30 uppercase tracking-widest">
                Or call: +91 93956 16617
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
