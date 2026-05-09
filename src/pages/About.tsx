import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { S } from '../lib/styles'

const VALUES = [
  { n: '01', title: 'Truth First',     titlebn: 'সত্যই প্রথম',    body: 'Every story is verified before publishing. We would rather be second than wrong.'   },
  { n: '02', title: 'Community Voice', titlebn: 'সম্প্রদায়ের কণ্ঠ', body: 'We exist to amplify the people of Barak Valley — not just report about them.'      },
  { n: '03', title: 'Local Impact',    titlebn: 'স্থানীয় প্রভাব',  body: 'Our work drives real change — in policy, business, and everyday lives of Silchar.' },
]

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-[100px]"
    >

      {/* ── HERO ── */}
      <section className="bg-[#F5F2EB] border-b-2 border-[#0D0D0D] px-5 md:px-10 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={`${S.tag} mb-5`}>About Ishan Bangla</span>
            <h1 className={`${S.display} text-[70px] sm:text-[100px] md:text-[130px] text-[#0D0D0D] leading-[0.88] mt-2 mb-5`}>
              The Voice of<br />
              <span className="text-[#D91C1C]">Barak Valley.</span>
            </h1>
            <p className="font-bengali text-[#0D0D0D]/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              ঈশান বাংলা — বরাক উপত্যকার সবচেয়ে বিশ্বস্ত সংবাদ মাধ্যম।
              সিলচর থেকে প্রকাশিত, কোটি মানুষের হৃদয়ে পৌঁছানো।
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="bg-[#0D0D0D] border-b-2 border-[#D91C1C] px-5 md:px-10 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D91C1C] border border-[#D91C1C] px-2 py-0.5 inline-block mb-6">
              Our Mission
            </span>
            <h2 className={`${S.display} text-[52px] md:text-[68px] text-white leading-none mb-6`}>
              Truthful.<br />
              Fast.<br />
              <span className="text-[#D91C1C]">Fearless.</span>
            </h2>
            <p className="font-sans text-white/60 leading-relaxed text-base md:text-lg max-w-md">
              In a region where voices are often unheard, Ishan Bangla exists to amplify
              the truth — from breaking political news to the stories of everyday people in Silchar.
              We reach millions because we never compromise on accuracy or speed.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-3"
          >
            {[
              { num: '35M+', label: 'Monthly Facebook' },
              { num: '6M+',  label: 'Monthly YouTube'  },
              { num: '1M+',  label: 'Monthly Instagram' },
              { num: '1000+',label: 'Cable Homes'       },
            ].map(({ num, label }) => (
              <div key={label} className="border-2 border-white/15 p-5 hover:border-[#D91C1C] transition-colors duration-200">
                <div className={`${S.display} text-[44px] text-[#D91C1C] leading-none mb-1`}>{num}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className={`${S.section} border-b-2 border-[#0D0D0D] bg-[#F5F2EB]`}>
        <div className={S.inner}>
          <div className="flex items-baseline gap-4 mb-10 border-b-2 border-[#0D0D0D] pb-4">
            <h2 className={`${S.display} text-[52px] md:text-[70px]`}>Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {VALUES.map(({ n, title, titlebn, body }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`${S.card} p-7`}
              >
                <div className={`${S.display} text-[80px] text-[#D91C1C] leading-none mb-4`}>{n}</div>
                <div className={`${S.display} text-3xl mb-1`}>{title}</div>
                <div className="font-bengali text-sm text-[#D91C1C] mb-3">{titlebn}</div>
                <p className="font-sans text-sm text-[#0D0D0D]/60 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="bg-[#0D0D0D] px-5 md:px-10 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${S.display} text-[52px] md:text-[80px] text-white mb-10 border-b border-white/10 pb-6`}
          >
            Get In Touch
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Email',     value: 'ishanbanglanews@gmail.com',  href: 'mailto:ishanbanglanews@gmail.com'                          },
              { label: 'Phone',     value: '+91 93956 16617',            href: 'tel:+919395616617'                                         },
              { label: 'Facebook',  value: 'Ishan Bangla News',          href: 'https://facebook.com/profile.php?id=100063811603096'       },
              { label: 'Instagram', value: '@ishan_banglanews',          href: 'https://www.instagram.com/ishan_banglanews/'               },
              { label: 'WhatsApp',  value: '+91 93956 16617',            href: 'https://wa.me/919395616617'                                },
              { label: 'Location',  value: 'Silchar, Assam, India',      href: '#'                                                         },
            ].map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                className="border-2 border-white/15 p-6 hover:border-[#D91C1C] transition-colors duration-200 group"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-2">{label}</div>
                <div className="font-display text-xl text-white group-hover:text-[#D91C1C] transition-colors duration-150">{value}</div>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/advertise" className={S.btnRed}>Start Advertising →</Link>
            <Link to="/report" className={`${S.btnOutline} !text-white !border-white/40 [box-shadow:4px_4px_0_rgba(255,255,255,0.2)]`}>
              Report News →
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
