import { useState } from 'react'
import { motion } from 'motion/react'
import { S } from '../lib/styles'

const STEPS = [
  {
    n: '01',
    title: 'Fill the Form',
    titlebn: 'ফর্ম পূরণ করুন',
    body: 'Enter your name, location, and a brief description of what happened.',
  },
  {
    n: '02',
    title: 'Share Evidence',
    titlebn: 'প্রমাণ শেয়ার করুন',
    body: 'Attach photos, videos, or voice notes via WhatsApp to strengthen the story.',
  },
  {
    n: '03',
    title: 'We Publish',
    titlebn: 'আমরা প্রকাশ করি',
    body: 'Our team verifies and publishes important stories within hours of submission.',
  },
]

const GUIDELINES = [
  'Be accurate — only report what you personally witnessed or have direct evidence of.',
  'Include your location as precisely as possible (area, road, landmark).',
  'Avoid speculation — describe what happened, not what you think caused it.',
  'Your identity is kept confidential if you request it.',
  'Do not submit false or misleading information.',
]

export default function ReportNews() {
  const [name, setName]     = useState('')
  const [loc, setLoc]       = useState('')
  const [story, setStory]   = useState('')

  const handleWA = () => {
    const parts = ['Hi, I want to report a news story to Ishan Bangla.']
    if (name)  parts.push(`Name: ${name}`)
    if (loc)   parts.push(`Location: ${loc}`)
    if (story) parts.push(`Story: ${story}`)
    const url = `https://wa.me/919395616617?text=${encodeURIComponent(parts.join('\n'))}`
    window.open(url, '_blank')
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-20"
    >

      {/* ── HERO ── */}
      <section className="bg-[#F5F2EB] border-b-2 border-[#0D0D0D] px-5 md:px-10 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={`${S.tag} mb-5`}>Community Journalism</span>
            <h1 className={`${S.display} text-[70px] sm:text-[100px] md:text-[130px] text-[#0D0D0D] leading-[0.88] mt-2 mb-4`}>
              You Saw It<br />
              <span className="text-[#D91C1C]">First.</span>
            </h1>
            <p className="font-bengali text-[#0D0D0D]/60 text-lg md:text-xl max-w-lg mb-2 leading-relaxed">
              আপনিই পারেন সংবাদদাতা হতে। আপনার চোখে দেখা সত্য কথাটি লক্ষ মানুষের কাছে পৌঁছে দিন।
            </p>
            <p className="font-sans text-[#0D0D0D]/40 text-sm">
              Your identity is kept strictly confidential upon request.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#0D0D0D] border-b-2 border-[#D91C1C] px-5 md:px-10 lg:px-16 py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${S.display} text-[40px] md:text-[56px] text-white mb-10 border-b border-white/10 pb-4`}>
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STEPS.map(({ n, title, titlebn, body }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="border-2 border-white/15 p-6 hover:border-[#D91C1C] transition-colors duration-200"
              >
                <div className={`${S.display} text-[80px] text-[#D91C1C] leading-none mb-4`}>{n}</div>
                <div className={`${S.display} text-3xl text-white mb-1`}>{title}</div>
                <div className="font-bengali text-sm text-[#D91C1C] mb-3">{titlebn}</div>
                <p className="font-sans text-white/55 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="bg-[#F5F2EB] border-b-2 border-[#0D0D0D] px-5 md:px-10 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left: Guidelines */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`${S.display} text-[44px] md:text-[56px] mb-8 border-b-2 border-[#0D0D0D] pb-4`}>
              Submission Guidelines
            </h2>
            <ul className="flex flex-col gap-4">
              {GUIDELINES.map((g, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`${S.display} text-[#D91C1C] text-lg shrink-0`}>{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-sans text-sm text-[#0D0D0D]/65 leading-relaxed">{g}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-2 border-[#0D0D0D] bg-[#0D0D0D] p-5">
              <p className="font-mono text-[12px] uppercase tracking-widest text-white/50 mb-1">Direct WhatsApp</p>
              <p className="font-display text-2xl text-white">+91 93956 16617</p>
              <p className="font-sans text-white/40 text-sm mt-1">Send photos/videos directly to this number</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="border-2 border-[#0D0D0D] bg-white [box-shadow:6px_6px_0_#0D0D0D] p-7">
              <h3 className={`${S.display} text-3xl mb-6 border-b-2 border-[#0D0D0D] pb-3`}>
                📩 Submit Your Story
              </h3>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#0D0D0D]/40 mb-1.5 block">
                    Your Name
                  </label>
                  <input
                    className={S.input}
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your name (optional)"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#0D0D0D]/40 mb-1.5 block">
                    Location / এলাকার নাম
                  </label>
                  <input
                    className={S.input}
                    type="text"
                    value={loc}
                    onChange={e => setLoc(e.target.value)}
                    placeholder="e.g. Silchar, Sonai, Lakhipur..."
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#0D0D0D]/40 mb-1.5 block">
                    What Happened / কী ঘটেছে
                  </label>
                  <textarea
                    className={S.textarea}
                    rows={4}
                    value={story}
                    onChange={e => setStory(e.target.value)}
                    placeholder="Describe the event briefly..."
                  />
                </div>

                <button onClick={handleWA} className={S.btnWa + ' w-full justify-center text-base'}>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send via WhatsApp
                </button>

                <p className="text-center font-mono text-[10px] text-[#0D0D0D]/30 uppercase tracking-widest">
                  Or call: +91 9395616617
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
