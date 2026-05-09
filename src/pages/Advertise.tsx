import { motion } from 'motion/react'
import { S } from '../lib/styles'

const WA_PLAN = (plan: string, price: string) =>
  `https://wa.me/919395616617?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(plan)}%20advertising%20plan%20(${encodeURIComponent(price)})%20on%20Ishan%20Bangla.`

const FORMATS = [
  { ico: '🎬', name: 'Banner Ads',        namebn: 'ভিডিওতে ব্যানার',   desc: 'Your brand inside our news videos. Seen by every viewer, on every replay.',  badge: 'Most Viewed'    },
  { ico: '🖼️', name: 'Poster Ads',        namebn: 'সোশ্যাল মিডিয়া',  desc: 'Branded graphic posts shared across all our social platforms.',              badge: 'High Reach'     },
  { ico: '📹', name: 'Video Ads',          namebn: 'প্রি-রোল ভিডিও',   desc: '15–30 sec unskippable pre-roll before our popular bulletins.',               badge: 'Premium Slot'   },
  { ico: '⭐', name: 'Business Feature',  namebn: 'এক্সক্লুসিভ কভারেজ', desc: 'Full editorial-style story dedicated to your business.',                   badge: 'Best ROI'       },
]

const PLATFORMS = [
  { platform: 'Facebook',    stat: '35M+', unit: 'monthly views',  color: '#1877F2' },
  { platform: 'YouTube',     stat: '6M+',  unit: 'monthly views',  color: '#FF0000' },
  { platform: 'Instagram',   stat: '1M+',  unit: 'monthly reach',  color: '#E1306C' },
  { platform: 'Cable TV',    stat: '1000+',unit: 'households',     color: '#C4870A' },
]

const PLANS = [
  {
    name: 'Starter',
    price: '₹600',
    note: 'For small local businesses',
    features: [
      'Poster ads across social media',
      'Facebook + Instagram reach',
      'Perfect for first-time advertisers',
      '★ FREE Cable TV promotion',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    price: '₹5,000',
    note: '15–30 day campaigns',
    features: [
      'Banner + Video Ads combo',
      'All platforms covered',
      '15–30 day campaign duration',
      'Pre-roll video ad slots',
      '★ FREE Cable TV promotion',
      'Detailed reach report',
    ],
    cta: 'Book This Plan',
    featured: true,
  },
  {
    name: 'Premium',
    price: '₹24,000',
    note: 'Full platform domination',
    features: [
      'Dedicated Business Feature story',
      'Full exposure across all platforms',
      'Editorial-style video coverage',
      'Facebook + YouTube + Instagram',
      '★ FREE Cable TV promotion',
      'Priority placement & scheduling',
      'Monthly performance report',
    ],
    cta: 'Go Premium',
    featured: false,
  },
]

export default function Advertise() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-28"
    >

      {/* ── HERO ── */}
      <section className="bg-[#0D0D0D] border-b-2 border-[#D91C1C] px-5 md:px-10 lg:px-16 py-20 relative overflow-hidden">
        {/* BG texture */}
        <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,#D91C1C,#D91C1C_1px,transparent_1px,transparent_48px)]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={`${S.tag} mb-6`}>Advertise With Us</span>
            <h1 className={`${S.display} text-[70px] sm:text-[100px] md:text-[130px] lg:text-[160px] text-white leading-[0.88] mb-6`}>
              35 Million<br />
              <span className="text-[#D91C1C]">Monthly Views.</span><br />
              Your Brand.
            </h1>
            <p className="font-sans text-white/60 text-base md:text-xl max-w-lg mb-8 leading-relaxed">
              When you advertise on Ishan Bangla, your brand lives inside the content
              that Silchar and Barak Valley trusts every single day.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a href="#pricing" className={S.btnRed}>See Pricing →</a>
            <a
              href="https://wa.me/919395616617?text=Hi%2C%20I%20want%20to%20advertise%20on%20Ishan%20Bangla.%20Please%20share%20the%20packages."
              target="_blank" rel="noopener noreferrer"
              className={S.btnWa}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── PLATFORM REACH ── */}
      <section className={`${S.section} border-b-2 border-[#0D0D0D] bg-[#F5F2EB]`}>
        <div className={S.inner}>
          <div className="flex items-baseline gap-4 mb-10 border-b-2 border-[#0D0D0D] pb-4">
            <h2 className={`${S.display} text-[52px] md:text-[70px]`}>Platform Reach</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PLATFORMS.map(({ platform, stat, unit, color }, i) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`${S.card} p-6`}
                style={{ borderTopColor: color, borderTopWidth: 4 }}
              >
                <div className={`${S.display} text-[48px] md:text-[56px] leading-none mb-1`} style={{ color }}>
                  {stat}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-[#0D0D0D]/50">{unit}</div>
                <div className="font-display text-xl text-[#0D0D0D] mt-1">{platform}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 border-2 border-[#D91C1C] bg-[#D91C1C] p-5 text-center">
            <p className="font-display text-2xl md:text-3xl text-white tracking-wide uppercase">
              📡 From mobile screens to living rooms — full visibility across every platform
            </p>
          </div>
        </div>
      </section>

      {/* ── AD FORMATS ── */}
      <section className={`${S.section} border-b-2 border-[#0D0D0D] bg-[#F5F2EB]`}>
        <div className={S.inner}>
          <div className="flex items-baseline gap-4 mb-10 border-b-2 border-[#0D0D0D] pb-4">
            <h2 className={`${S.display} text-[52px] md:text-[70px]`}>Ad Formats</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FORMATS.map(({ ico, name, namebn, desc, badge }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`${S.card} p-6 flex flex-col`}
              >
                <div className="text-3xl mb-4" aria-hidden="true">{ico}</div>
                <div className={`${S.display} text-2xl mb-1`}>{name}</div>
                <div className="font-bengali text-sm text-[#D91C1C] mb-3">{namebn}</div>
                <p className="font-sans text-sm text-[#0D0D0D]/60 leading-relaxed flex-1">{desc}</p>
                <span className="mt-4 inline-block border border-[#C4870A] text-[#C4870A] font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 w-fit">
                  {badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className={`${S.section} border-b-2 border-[#0D0D0D] bg-[#F5F2EB]`}>
        <div className={S.inner}>
          <div className="text-center mb-12">
            <span className={`${S.tag} mb-4`}>Packages</span>
            <h2 className={`${S.display} text-[52px] md:text-[80px] mt-2`}>Simple, Honest Pricing</h2>
            <p className="font-sans text-[#0D0D0D]/50 mt-2">No hidden fees. No complicated contracts. Start today.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#0D0D0D] [box-shadow:8px_8px_0_#0D0D0D]">
            {PLANS.map(({ name, price, note, features, cta, featured }) => (
              <div
                key={name}
                className={`p-7 border-[#0D0D0D] ${featured ? 'bg-[#0D0D0D] text-white border-x-2' : 'bg-white'} relative`}
              >
                {featured && <div className="absolute -top-px inset-x-0 h-1 bg-[#D91C1C]" />}
                {featured && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#D91C1C] border border-[#D91C1C] px-2 py-0.5 inline-block mb-4">
                    ⭐ Most Popular
                  </span>
                )}
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] mb-2" style={{ color: featured ? 'rgba(255,255,255,0.4)' : 'rgba(13,13,13,0.4)' }}>
                  {name}
                </div>
                <div className={`${S.display} text-[64px] leading-none mb-1 ${featured ? 'text-[#D91C1C]' : 'text-[#0D0D0D]'}`}>
                  {price}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest mb-6" style={{ color: featured ? 'rgba(255,255,255,0.4)' : 'rgba(13,13,13,0.4)' }}>
                  {note}
                </div>
                <ul className="mb-6 flex flex-col gap-2">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm font-sans" style={{ color: f.startsWith('★') ? (featured ? '#D91C1C' : '#C4870A') : (featured ? 'rgba(255,255,255,0.75)' : 'rgba(13,13,13,0.7)') }}>
                      <span className="shrink-0 mt-0.5">{f.startsWith('★') ? '★' : '✓'}</span>
                      {f.replace('★ ', '')}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_PLAN(name, price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={featured ? S.btnRed + ' w-full justify-center' : S.btnOutline + ' w-full justify-center'}
                >
                  {cta} →
                </a>
              </div>
            ))}
          </div>

          {/* Trust copy */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-[#0D0D0D] bg-white p-5 shadow-brutal">
              <p className="font-display text-xl text-[#0D0D0D] mb-1">Already helped local businesses grow</p>
              <p className="font-sans text-sm text-[#0D0D0D]/55">Multiple Silchar businesses have seen direct customer growth through promotion on Ishan Bangla's platforms.</p>
            </div>
            <div className="border-2 border-[#0D0D0D] bg-white p-5 shadow-brutal">
              <p className="font-display text-xl text-[#0D0D0D] mb-1">Your brand where people are watching</p>
              <p className="font-sans text-sm text-[#0D0D0D]/55">35M+ monthly views mean your ad appears inside content Barak Valley already trusts — not beside it.</p>
            </div>
          </div>

          <p className="text-center mt-5 font-mono text-[12px] text-[#0D0D0D]/40 uppercase tracking-widest">
            All plans include <span className="text-[#C4870A]">FREE Cable TV promotion</span>
            {' · '}Custom packages available — <span className="text-[#D91C1C]">WhatsApp to discuss</span>
          </p>
        </div>
      </section>

      {/* ── COLLAB ── */}
      <section className={`${S.section} border-b-2 border-[#0D0D0D] bg-[#0D0D0D]`}>
        <div className={S.inner}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              <span className={`${S.tag} mb-5 !border-white/20 !text-white/50`}>Collaborations</span>
              <h2 className={`${S.display} text-[48px] md:text-[70px] text-white leading-[0.9] mb-4`}>
                Want to feature<br />
                <span className="text-[#D91C1C]">in our videos?</span><br />
                Let's collaborate.
              </h2>
              <p className="font-sans text-white/55 text-base md:text-lg max-w-md leading-relaxed">
                Businesses, creators, NGOs, and public figures — if you have a story worth telling, Ishan Bangla's audience is waiting. We do editorial features, sponsored segments, and co-produced content.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-4">
              <a
                href="https://wa.me/919395616617?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20collaboration%20with%20Ishan%20Bangla."
                target="_blank" rel="noopener noreferrer"
                className={S.btnWa}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp to Collaborate
              </a>
              <div className="border-2 border-white/10 p-4 flex flex-col gap-2">
                {['Editorial Feature', 'Sponsored Segment', 'Co-produced Content', 'Live Coverage'].map(t => (
                  <div key={t} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D91C1C] shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREERS ── */}
      <section className={`${S.section} border-b-2 border-[#0D0D0D] bg-[#F5F2EB]`}>
        <div className={S.inner}>
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="flex-1">
              <span className={`${S.tag} mb-5`}>Careers</span>
              <h2 className={`${S.display} text-[48px] md:text-[70px] leading-[0.9] mb-4`}>
                Join the fastest<br />growing network<br />
                <span className="text-[#D91C1C]">in Barak Valley.</span>
              </h2>
              <p className="font-sans text-[#0D0D0D]/55 text-base md:text-lg max-w-md leading-relaxed">
                We're always on the lookout for passionate journalists, videographers, and digital storytellers who care about local news.
              </p>
            </div>
            <div className="shrink-0 md:w-72">
              <div className="border-2 border-[#0D0D0D] bg-white [box-shadow:6px_6px_0_#0D0D0D] p-7 text-center">
                <div className="font-mono text-[11px] uppercase tracking-widest text-[#0D0D0D]/40 mb-3">Current Openings</div>
                <div className={`${S.display} text-[56px] leading-none text-[#0D0D0D]/15 mb-3`}>0</div>
                <p className="font-sans text-sm text-[#0D0D0D]/55 leading-relaxed mb-5">
                  No openings at the moment.<br />Stay tuned — we grow fast.
                </p>
                <a
                  href="https://wa.me/919395616617?text=Hi%2C%20I%27m%20interested%20in%20career%20opportunities%20at%20Ishan%20Bangla."
                  target="_blank" rel="noopener noreferrer"
                  className={`${S.btnOutline} w-full justify-center text-sm`}
                >
                  Get Notified →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#D91C1C] border-b-2 border-[#0D0D0D] px-5 md:px-10 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${S.display} text-[60px] md:text-[90px] text-white mb-4`}
          >
            Let's Grow Your Business.
          </motion.h2>
          <p className="font-bengali text-white/75 text-lg mb-8">
            আপনার ব্যবসাকে লক্ষ মানুষের কাছে পৌঁছে দিন
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['35M+ Viewers', 'From ₹600', '24-hr Setup', 'Free TV Promo'].map(pt => (
              <span key={pt} className="font-mono text-[12px] text-white/60 uppercase tracking-widest border border-white/30 px-3 py-1.5">
                {pt}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919395616617?text=Hi%2C%20I%20want%20to%20advertise%20on%20Ishan%20Bangla.%20Please%20share%20the%20packages."
              target="_blank" rel="noopener noreferrer"
              className={`${S.btnInk} !shadow-[4px_4px_0_#fff] hover:!shadow-[6px_6px_0_#fff]`}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Now
            </a>
            <a href="tel:+919395616617" className={`${S.btnOutline} !text-white !border-white [box-shadow:4px_4px_0_#fff]`}>
              📞 Call Us
            </a>
            <a href="mailto:ishanbanglanews@gmail.com" className={`${S.btnOutline} !text-white !border-white [box-shadow:4px_4px_0_#fff]`}>
              ✉️ Email
            </a>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
