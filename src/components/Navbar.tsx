import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Wordmark } from './Wordmark'

const LINKS = [
  { to: '/',          label: 'Home'      },
  { to: '/advertise', label: 'Advertise' },
  { to: '/report',    label: 'Report'    },
  { to: '/team',      label: 'Team'      },
  { to: '/about',     label: 'About'     },
]

const TICKER_ITEMS = [
  'Reach 50 Million+ viewers across all platforms',
  'Fastest growing media channel in Barak Valley',
  'Advertise from ₹600 — WhatsApp us now',
  '35M+ Monthly Facebook Views',
  'Breaking news from Silchar & Barak Valley — live, verified, first',
  'Send us your story on WhatsApp: +91 93956 16617',
  'Trusted by millions across Assam since day one',
]

const YT = 'https://www.youtube.com/@Ishanbanglanews'
const FB = 'https://facebook.com/profile.php?id=100063811603096'
const IG = 'https://www.instagram.com/ishan_banglanews/'

function SocialIcons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a href={YT} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
        className="text-white/30 hover:text-[#FF0000] transition-colors duration-150">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </a>
      <a href={FB} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
        className="text-white/30 hover:text-[#1877F2] transition-colors duration-150">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
      <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
        className="text-white/30 hover:text-[#E1306C] transition-colors duration-150">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      </a>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">

        {/* ── ROW 1: Main Navbar ── */}
        <div className="bg-[#0D0D0D] border-b border-white/[0.07]">
          {/* Full-width flex with padding — no max-w centering container */}
          <div className="px-5 md:px-10 lg:px-16 h-[60px] flex items-center justify-between gap-6">

            {/* LEFT — Wordmark */}
            <Link to="/" className="flex items-center shrink-0 transition-opacity duration-200 hover:opacity-80">
              <Wordmark size="md" />
            </Link>

            {/* CENTER — Nav links (desktop) */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-8 flex-1 justify-center">
              {LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    'relative font-bebas text-[15px] lg:text-[16px] uppercase tracking-[0.1em] py-1 transition-colors duration-150 group/link ' +
                    (isActive ? 'text-white' : 'text-white/45 hover:text-white/90')
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      <span className={`absolute -bottom-0.5 left-0 h-px bg-signal transition-all duration-200 ease-out ${
                        isActive ? 'w-full' : 'w-0 group-hover/link:w-full'
                      }`} />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* RIGHT — Socials + CTA button + Hamburger */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Social icons — large screens only */}
              <SocialIcons className="hidden lg:flex" />
              <span className="hidden lg:block w-px h-4 bg-white/[0.1]" />

              {/* "ADVERTISE WITH US" button */}
              <Link
                to="/advertise"
                className="hidden sm:inline-flex items-center bg-[#D91C1C] text-white px-4 py-2 font-bebas text-[14px] uppercase tracking-[0.08em] transition-all duration-150 hover:bg-white hover:text-[#D91C1C] select-none whitespace-nowrap"
              >
                Advertise With Us
              </Link>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setOpen(v => !v)}
                className="md:hidden flex flex-col justify-center gap-[5px] w-7 h-7 cursor-pointer shrink-0"
                aria-label="Toggle menu"
              >
                <span className={`block h-px bg-white/70 transition-all duration-200 origin-center ${open ? 'w-6 rotate-45 translate-y-[6px]' : 'w-6'}`} />
                <span className={`block h-px bg-white/70 transition-opacity duration-200 w-6 ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-px bg-white/70 transition-all duration-200 origin-center ${open ? 'w-6 -rotate-45 -translate-y-[6px]' : 'w-6'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* ── ROW 2: Breaking News Ticker ── */}
        <div className="bg-[#D91C1C] flex items-center overflow-hidden h-8 border-b border-[#0D0D0D]">
          <div className="shrink-0 flex items-center gap-1.5 px-3 border-r border-white/20 h-full bg-[#8C0E13]">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white font-medium">⚡ Breaking</span>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#D91C1C] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#D91C1C] to-transparent z-10 pointer-events-none" />
            <div className="ticker-inner flex items-center whitespace-nowrap">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-3 px-6 font-mono text-[12px] text-white tracking-wide">
                  <span className="text-white/40 text-[8px]">◆</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="fixed top-[92px] inset-x-0 z-40 bg-[#0D0D0D] border-b border-white/[0.08] md:hidden"
          >
            <nav className="flex flex-col px-6 py-4">
              {LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    'font-bebas text-xl uppercase tracking-widest py-3.5 border-b border-white/[0.05] transition-colors duration-150 ' +
                    (isActive ? 'text-signal' : 'text-white/60 hover:text-white')
                  }
                >
                  {label}
                </NavLink>
              ))}

              {/* Bottom row: CTA + Socials */}
              <div className="flex items-center justify-between mt-5 pt-1">
                <Link
                  to="/advertise"
                  onClick={() => setOpen(false)}
                  className="inline-flex bg-[#D91C1C] text-white px-5 py-2.5 font-bebas text-base uppercase tracking-wider hover:bg-white hover:text-[#D91C1C] transition-colors duration-150"
                >
                  Advertise With Us
                </Link>
                <SocialIcons />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
