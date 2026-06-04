/* =========================================================================
   Ishan Bangla — Team page  (Apple-minimal redesign)
   React 19 + TypeScript · Tailwind CSS v4 · motion/react v11
   ========================================================================= */

import { motion, type Variants } from 'motion/react'

/* ── Shared motion ───────────────────────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1]
const VP = { once: true, amount: 0.2 } as const

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: d } }),
}
function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} custom={delay} variants={reveal}
      initial="hidden" whileInView="show" viewport={VP}>
      {children}
    </motion.div>
  )
}

/* ── Team data ───────────────────────────────────────────────────────────── */
const CEO = {
  photo: 'subrata-roy.jpeg', name: 'Subrata Roy', role: 'Founder & CEO',
  bio: 'The founder and driving force behind Ishan Bangla, Subrata Roy built the channel from the ground up into Barak Valley\'s most-watched news platform — rooted in a vision of independent, community-first journalism.',
}
const LEADERSHIP = [
  { photo: 'chayan-bhatt.jpeg',  name: 'Chayan Bhatt',  role: 'Chief News Editor',       bio: 'Chayan Bhatt sets the editorial agenda for every bulletin, overseeing breaking news coverage, story selection, and journalistic standards across all platforms.' },
  { photo: 'sayan-chanda.jpeg',  name: 'Sayan Chanda',  role: 'Operations & Marketing',  bio: 'Keeping the newsroom running smoothly — coordinating teams, schedules, and resources so the channel delivers on time, every time.' },
]
const EDITORIAL = [
  { photo: 'siddhartha-kumar-das.jpeg', name: 'Siddhartha Kumar Das', role: 'News Editor',         bio: 'Shaping the daily news desk — from leads to final copy, Siddhartha ensures every story meets Ishan Bangla\'s standard for accuracy and impact.' },
  { photo: 'abhijeet-bhatt.jpeg',       name: 'Abhijeet Bhatt',       role: 'Reporter / Editorial', bio: 'Tracking civic, social, and political stories with sharp attention to detail and a commitment to community-driven journalism.' },
]
const ANCHORS = [
  { photo: 'souvik-bhattacharjee.jpeg', name: 'Souvik Bhattacharjee', role: 'Anchor & Host', bio: 'Commanding the studio with authority and clarity — Souvik anchors key bulletins and special coverage for Ishan Bangla.' },
  { photo: 'kumkum-chakraborty.jpeg',   name: 'Kumkum Chakraborty',   role: 'Anchor & Host', bio: 'A trusted presence on screen, Kumkum brings warmth and precision to every bulletin she hosts.' },
  { photo: 'aprajita-das.jpeg',         name: 'Aprajita Das',         role: 'Anchor & Host', bio: 'Engaging audiences with poise and depth — Aprajita is a compelling voice at the Ishan Bangla anchor desk.' },
  { photo: 'anamika-paul.jpeg',         name: 'Anamika Paul',         role: 'Anchor & Host', bio: 'Delivering news with confidence and composure, Anamika connects the channel to its audience every broadcast.' },
  { photo: 'jui-paul.jpeg',            name: 'Jui Paul',             role: 'Anchor & Host', bio: 'Bringing energy and clarity to live broadcasts — Jui is a familiar and trusted face for Ishan Bangla viewers.' },
  { photo: 'chandrima-mazumder.jpeg',  name: 'Chandrima Mazumder',   role: 'Anchor & Host', bio: 'A seasoned presence behind the mic and on camera, Chandrima gives every story the gravity it deserves.' },
]
const PRODUCTION = [
  { photo: 'monima-sinha.jpeg',         name: 'Monima Sinha',         role: 'Publisher'    },
  { photo: 'biplab-sharma.jpeg',        name: 'Biplab Sharma',        role: 'Video Editor' },
  { photo: 'dugraprasad-sonar.jpeg',    name: 'Dugraprasad Sonar',    role: 'Video Editor' },
  { photo: 'debarun-roy-chowdhury.jpeg',name: 'Debarun Roy Chowdhury',role: 'Video Editor' },
  { photo: 'bablu-rajbhar.jpeg',        name: 'Bablu Rajbhar',        role: 'Video Editor' },
]
const REPORTERS = [
  { photo: 'shamindra-paul.jpeg', name: 'Shamindra Paul', role: 'Reporter' },
  { photo: 'dilwor.png',          name: 'Dilwor',         role: 'Reporter' },
  { photo: 'bhola.jpeg',          name: 'Bhola',          role: 'Reporter' },
  { photo: 'deep-deb.jpeg',       name: 'Deep Deb',       role: 'Reporter' },
  { photo: 'kuntal-kuri.jpeg',    name: 'Kuntal Kuri',    role: 'Reporter' },
  { photo: 'bappi-acharjee.jpeg', name: 'Bappi Acharjee', role: 'Reporter' },
]
const CORRESPONDENTS = [
  { photo: 'abul-kalam-laskar.jpeg',       name: 'Abul Kalam Laskar',       role: 'Correspondent' },
  { photo: 'shubankar-malakar.jpeg',       name: 'Shubankar Malakar',       role: 'Correspondent' },
  { photo: 'rahatul-aktar-barbhuiya.jpeg', name: 'Rahatul Aktar Barbhuiya', role: 'Correspondent' },
  { photo: 'sultan-ahmed-barlaskar.jpeg',  name: 'Sultan Ahmed Barlaskar',  role: 'Correspondent' },
  { photo: 'urmi-paul.jpeg',               name: 'Urmi Paul',               role: 'Correspondent' },
  { photo: 'sourijith-dhar.jpeg',          name: 'Sourijith Dhar',          role: 'Correspondent' },
  { photo: 'susmita-das.jpeg',             name: 'Susmita Das',             role: 'Correspondent' },
  { photo: 'pradipta-purkayastha.jpeg',    name: 'Pradipta Purkayastha',    role: 'Correspondent' },
  { photo: 'purnajyoti-dey.jpeg',          name: 'Purnajyoti Dey',          role: 'Correspondent' },
]

/* ── Portrait card (Leadership, Editorial, Anchors) ─────────────────────── */
function PortraitCard({ photo, name, role, bio, i, dark = false }: {
  photo: string; name: string; role: string; bio: string; i: number; dark?: boolean
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
      className={`group flex flex-col border transition-[border-color,transform] duration-300 hover:-translate-y-1 ${
        dark
          ? 'bg-[#141414] border-white/10 hover:border-white/30'
          : 'bg-white border-ink/10 hover:border-ink/30'
      }`}
    >
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden bg-black/10">
        <img
          src={`/assets/team/${photo}`}
          alt={name}
          onError={e => { (e.currentTarget as HTMLImageElement).src = `https://i.pravatar.cc/400?img=${20 + i * 7}` }}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${dark ? 'from-[#141414]/60 to-transparent' : 'from-black/20 to-transparent'}`} />
      </div>
      {/* Info */}
      <div className="px-5 py-5 flex flex-col gap-2 flex-1">
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-signal">{role}</span>
        <h3 className={`font-bebas text-[24px] leading-tight ${dark ? 'text-white' : 'text-ink'}`}>{name}</h3>
        <p className={`font-serif text-[13px] leading-relaxed ${dark ? 'text-white/45' : 'text-ink/55'}`}>{bio}</p>
      </div>
    </motion.article>
  )
}

/* ── Compact card (Production, Reporter, Correspondent) ─────────────────── */
function CompactCard({ photo, name, role, i }: { photo: string; name: string; role: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: i * 0.05, ease: EASE }}
      className="group flex flex-col items-center text-center gap-3 py-6 px-3"
    >
      {/* Circular photo */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-ink/10 bg-ink/5 shrink-0">
        <img
          src={`/assets/team/${photo}`}
          alt={name}
          onError={e => { (e.currentTarget as HTMLImageElement).src = `https://i.pravatar.cc/200?img=${30 + i * 4}` }}
          className="w-full h-full object-cover object-top transition-transform duration-400 ease-out group-hover:scale-[1.08]"
        />
      </div>
      <div>
        <h3 className="font-bebas text-[17px] leading-tight text-ink mb-0.5">{name}</h3>
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/45">{role}</span>
      </div>
    </motion.div>
  )
}

/* ── Section wrappers ────────────────────────────────────────────────────── */
function DarkSection({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="bg-[#0a0a0a] border-b border-white/[0.05] px-5 md:px-10 lg:px-16 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal block mb-3">{label}</span>
          <h2 className="font-bebas text-[clamp(36px,5vw,60px)] text-white leading-none">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

function LightSection({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="bg-warm border-b border-ink/[0.06] px-5 md:px-10 lg:px-16 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal block mb-3">{label}</span>
          <h2 className="font-bebas text-[clamp(36px,5vw,60px)] text-ink leading-none">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function Team() {
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
            The People Behind<br /><span className="text-signal">The News.</span>
          </motion.h1>
          <motion.p
            className="font-serif text-[18px] text-white/55 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}>
            Journalists, editors, anchors and producers dedicated to bringing
            Barak Valley's stories to 35 million viewers every month.
          </motion.p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-warm border-b border-ink/[0.06] px-5 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={VP} transition={{ duration: 0.75, ease: EASE }}
            className="border-2 border-ink overflow-hidden aspect-square max-w-[480px]">
            <img
              src={`/assets/team/${CEO.photo}`}
              alt={CEO.name}
              onError={e => { (e.currentTarget as HTMLImageElement).src = 'https://i.pravatar.cc/600?img=11' }}
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={VP} transition={{ duration: 0.75, ease: EASE, delay: 0.15 }}>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal block mb-4">{CEO.role}</span>
            <h2 className="font-bebas text-[64px] md:text-[80px] text-ink leading-[0.88] mb-6">{CEO.name}</h2>
            <p className="font-serif text-[16px] text-ink/75 leading-[1.75] mb-6 max-w-[44ch]">{CEO.bio}</p>
            <p className="font-bengali text-ink/35 text-sm">সর্বদা প্রথম, সর্বদা সঠিক।</p>
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <DarkSection label="Leadership" title="Senior Leadership">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LEADERSHIP.map((m, i) => <PortraitCard key={m.photo} {...m} i={i} dark />)}
        </div>
      </DarkSection>

      {/* EDITORIAL */}
      <LightSection label="Editorial" title="Editorial Desk">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EDITORIAL.map((m, i) => <PortraitCard key={m.photo} {...m} i={i} />)}
        </div>
      </LightSection>

      {/* ANCHORS & HOSTS */}
      <DarkSection label="On Screen" title="Anchors & Hosts">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ANCHORS.map((m, i) => <PortraitCard key={m.photo} {...m} i={i} dark />)}
        </div>
      </DarkSection>

      {/* PRODUCTION */}
      <LightSection label="Behind the Camera" title="Production">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 divide-x divide-y divide-ink/[0.06] border border-ink/[0.06]">
          {PRODUCTION.map((m, i) => <CompactCard key={m.photo} {...m} i={i} />)}
        </div>
      </LightSection>

      {/* REPORTERS */}
      <LightSection label="Field Reporting" title="Reporters">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 divide-x divide-y divide-ink/[0.06] border border-ink/[0.06]">
          {REPORTERS.map((m, i) => <CompactCard key={m.photo} {...m} i={i} />)}
        </div>
      </LightSection>

      {/* CORRESPONDENTS */}
      <LightSection label="Across the Valley" title="Correspondents">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 divide-x divide-y divide-ink/[0.06] border border-ink/[0.06]">
          {CORRESPONDENTS.map((m, i) => <CompactCard key={m.photo} {...m} i={i} />)}
        </div>
      </LightSection>

      {/* JOIN US */}
      <section className="bg-[#0a0a0a] px-5 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-bebas text-[clamp(40px,7vw,92px)] text-white leading-[0.9] mb-5">
              Want To Join<br />The Newsroom?
            </h2>
            <p className="font-serif text-[17px] text-white/55 max-w-lg leading-relaxed mb-10">
              Passionate about journalism? We're always looking for reporters,
              videographers, and digital creators who care about Barak Valley's stories.
            </p>
            <a
              href="https://wa.me/919395616617?text=Hi%2C%20I%27m%20interested%20in%20joining%20the%20Ishan%20Bangla%20team."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-wa text-ink px-8 pb-[14px] pt-[18px] font-bebas text-[22px] leading-none tracking-wide transition-transform duration-200 hover:-translate-y-[3px]"
            >
              WhatsApp Us
            </a>
          </Reveal>
        </div>
      </section>
    </motion.main>
  )
}
