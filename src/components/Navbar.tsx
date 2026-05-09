import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

const LINKS = [
  { to: '/',          label: 'Home'      },
  { to: '/advertise', label: 'Advertise' },
  { to: '/report',    label: 'Report'    },
  { to: '/team',      label: 'Team'      },
  { to: '/about',     label: 'About'     },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ── Main bar ── */}
      <header className="fixed top-0 inset-x-0 z-50 border-b-2 border-[#0D0D0D] bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto px-5 md:px-10 h-28 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <img
              src="/assets/logo.png"
              alt="Ishan Bangla News"
              className="h-[104px] w-auto object-contain transition-opacity duration-150 group-hover:opacity-90"
            />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D91C1C] border border-[#D91C1C] px-1.5 py-0.5 hidden md:block">
              LIVE
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-display text-lg uppercase tracking-wide px-3 py-1 transition-colors duration-100 ` +
                  (isActive
                    ? 'text-[#D91C1C]'
                    : 'text-white/70 hover:text-white')
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Social icons + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Social icons — desktop */}
            <div className="hidden lg:flex items-center gap-2 border-r border-white/10 pr-3">
              <a href="https://www.youtube.com/@Ishanbanglanews" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="text-white/40 hover:text-[#FF0000] transition-colors duration-150">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://facebook.com/profile.php?id=100063811603096" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="text-white/40 hover:text-[#1877F2] transition-colors duration-150">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/ishan_banglanews/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="text-white/40 hover:text-[#E1306C] transition-colors duration-150">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
            <Link
              to="/advertise"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#D91C1C] text-white border-2 border-[#D91C1C] px-4 py-1.5 font-display text-lg uppercase tracking-wide transition-all duration-100 hover:bg-white hover:text-[#D91C1C] hover:border-white select-none"
            >
              বিজ্ঞাপন দিন
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(v => !v)}
              className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed top-28 inset-x-0 z-40 bg-[#0D0D0D] border-b-2 border-[#D91C1C] md:hidden"
          >
            <nav className="flex flex-col py-4 px-5">
              {LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-display text-3xl uppercase tracking-wide py-2 border-b border-white/10 ` +
                    (isActive ? 'text-[#D91C1C]' : 'text-white')
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/advertise"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex bg-[#D91C1C] text-white border-2 border-[#D91C1C] px-4 py-2 font-display text-2xl uppercase tracking-wide w-fit"
              >
                বিজ্ঞাপন দিন
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
