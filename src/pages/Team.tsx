import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { S } from '../lib/styles'

// ── Team data ─────────────────────────────────────────────────────────────────
// Photos → public/assets/team/<filename>

const CEO = {
  photo: 'subrata-roy.jpeg',
  name: 'Subrata Roy',
  role: 'CEO & Founder',
  bio: 'The founder and driving force behind Ishan Bangla, Subrata Roy built the channel from the ground up into Barak Valley\'s most-watched news platform — rooted in a vision of independent, community-first journalism.',
}

const LEADERSHIP = [
  {
    photo: 'chayan-bhatt.jpeg',
    name: 'Chayan Bhatt',
    role: 'Chief News Editor',
    bio: 'Chayan Bhatt sets the editorial agenda for every bulletin, overseeing breaking news coverage, story selection, and journalistic standards across all platforms.',
  },
  {
    photo: 'sayan-chanda.jpeg',
    name: 'Sayan Chanda',
    role: 'Operations and Marketing',
    bio: 'Keeping the newsroom running smoothly — coordinating teams, schedules, and resources so the channel delivers on time, every time.',
  },
]

const EDITORIAL = [
  {
    photo: 'siddhartha-kumar-das.jpeg',
    name: 'Siddhartha Kumar Das',
    role: 'News Editor',
    bio: 'Shaping the daily news desk — from leads to final copy, Siddhartha ensures every story meets Ishan Bangla\'s standard for accuracy and impact.',
  },
  {
    photo: 'abhijeet-bhatt.jpeg',
    name: 'Abhijeet Bhatt',
    role: 'Reporter / Editorial',
    bio: 'Tracking civic, social, and political stories with sharp attention to detail and a commitment to community-driven journalism.',
  },
]

const REPORTERS = [
  {
    photo: 'shamindra-paul.jpeg',
    name: 'Shamindra Paul',
    role: 'Reporter',
    bio: 'On the ground across Barak Valley — Shamindra brings first-hand accounts and ground-level stories directly to the audience.',
  },
  {
    photo: 'dilwor.png',
    name: 'Dilwor',
    role: 'Reporter',
    bio: 'Building trust with communities across Silchar and reporting the stories that matter most to everyday people in the valley.',
  },
  {
    photo: 'bhola.jpeg',
    name: 'Bhola',
    role: 'Reporter',
    bio: 'A trusted face across the districts — Bhola\'s reporting connects the channel to every corner of Barak Valley.',
  },
  {
    photo: 'deep-deb.jpeg',
    name: 'Deep Deb',
    role: 'Reporter',
    bio: 'Covering breaking developments and street-level stories that keep Barak Valley informed in real time.',
  },
  {
    photo: 'kuntal-kuri.jpeg',
    name: 'Kuntal Kuri',
    role: 'Reporter',
    bio: 'Digging into local politics, community issues, and human interest stories across the region.',
  },
  {
    photo: 'bappi-acharjee.jpeg',
    name: 'Bappi Acharjee',
    role: 'Reporter',
    bio: 'Fast and reliable on the field — Bappi brings raw, unfiltered ground reports to the Ishan Bangla audience.',
  },
]

const CORRESPONDENTS = [
  {
    photo: 'abul-kalam-laskar.jpeg',
    name: 'Abul Kalam Laskar',
    role: 'Correspondent',
    bio: 'Covering local developments and keeping communities connected to Ishan Bangla\'s news network.',
  },
  {
    photo: 'shubankar-malakar.jpeg',
    name: 'Shubankar Malakar',
    role: 'Correspondent',
    bio: 'Reporting from the ground and bringing regional stories to a wider audience.',
  },
  {
    photo: 'rahatul-aktar-barbhuiya.jpeg',
    name: 'Rahatul Aktar Barbhuiya',
    role: 'Correspondent',
    bio: 'Connecting communities through accurate, timely reporting across the Barak Valley region.',
  },
  {
    photo: 'sultan-ahmed-barlaskar.jpeg',
    name: 'Sultan Ahmed Barlaskar',
    role: 'Correspondent',
    bio: 'A trusted voice in local correspondence — delivering news that matters to people at the grassroots.',
  },
  {
    photo: 'urmi-paul.jpeg',
    name: 'Urmi Paul',
    role: 'Correspondent',
    bio: 'Bringing a sharp eye and community focus to every story she covers across Silchar and surrounding areas.',
  },
  {
    photo: 'sourijith-dhar.jpeg',
    name: 'Sourijith Dhar',
    role: 'Correspondent',
    bio: 'Field-driven and community-focused, Sourijith keeps the channel connected to voices across the valley.',
  },
  {
    photo: 'susmita-das.jpeg',
    name: 'Susmita Das',
    role: 'Correspondent',
    bio: 'Delivering reliable local correspondence that strengthens Ishan Bangla\'s reach across the region.',
  },
  {
    photo: 'pradipta-purkayastha.jpeg',
    name: 'Pradipta Purkayastha',
    role: 'Correspondent',
    bio: 'Bringing in-depth local reporting and community stories that reflect the pulse of Barak Valley.',
  },
  {
    photo: 'purnajyoti-dey.jpeg',
    name: 'Purnajyoti Dey',
    role: 'Correspondent',
    bio: 'A dedicated correspondent covering ground-level developments across the region with accuracy and care.',
  },
]

const ANCHORS = [
  {
    photo: 'souvik-bhattacharjee.jpeg',
    name: 'Souvik Bhattacharjee',
    role: 'Anchor & Host',
    bio: 'Commanding the studio with authority and clarity — Souvik anchors key bulletins and special coverage for Ishan Bangla.',
  },
  {
    photo: 'kumkum-chakraborty.jpeg',
    name: 'Kumkum Chakraborty',
    role: 'Anchor & Host',
    bio: 'A trusted presence on screen, Kumkum brings warmth and precision to every bulletin she hosts.',
  },
  {
    photo: 'aprajita-das.jpeg',
    name: 'Aprajita Das',
    role: 'Anchor & Host',
    bio: 'Engaging audiences with poise and depth — Aprajita is a compelling voice at the Ishan Bangla anchor desk.',
  },
  {
    photo: 'anamika-paul.jpeg',
    name: 'Anamika Paul',
    role: 'Anchor & Host',
    bio: 'Delivering news with confidence and composure, Anamika connects the channel to its audience every broadcast.',
  },
  {
    photo: 'jui-paul.jpeg',
    name: 'Jui Paul',
    role: 'Anchor & Host',
    bio: 'Bringing energy and clarity to live broadcasts — Jui is a familiar and trusted face for Ishan Bangla viewers.',
  },
  {
    photo: 'chandrima-mazumder.jpeg',
    name: 'Chandrima Mazumder',
    role: 'Anchor & Host',
    bio: 'A seasoned presence behind the mic and on camera, Chandrima gives every story the gravity it deserves.',
  },
]

const PRODUCTION = [
  {
    photo: 'monima-sinha.jpeg',
    name: 'Monima Sinha',
    role: 'Publisher',
    bio: 'Overseeing the channel\'s publishing operations — ensuring every piece of content reaches the right audience at the right time across all platforms.',
  },
  {
    photo: 'biplab-sharma.jpeg',
    name: 'Biplab Sharma',
    role: 'Video Editor',
    bio: 'Cutting and crafting the visual stories that make Ishan Bangla compelling — from breaking bulletins to in-depth features.',
  },
  {
    photo: 'dugraprasad-sonar.jpeg',
    name: 'Dugraprasad Sonar',
    role: 'Video Editor',
    bio: 'Bringing raw footage to life with precision editing and broadcast-quality production for every story that airs.',
  },
  {
    photo: 'debarun-roy-chowdhury.jpeg',
    name: 'Debarun Roy Chowdhury',
    role: 'Video Editor',
    bio: 'Combining technical expertise and storytelling instinct to produce visually powerful news content across digital and cable.',
  },
  {
    photo: 'bablu-rajbhar.jpeg',
    name: 'Bablu Rajbhar',
    role: 'Video Editor',
    bio: 'Handling fast-turnaround edits under deadline pressure — essential to the speed and quality of Ishan Bangla\'s daily output.',
  },
]

// ── Design tokens ─────────────────────────────────────────────────────────────
const ease = 'cubic-bezier(0.16,1,0.3,1)'

// ── CEO card — cinematic featured ─────────────────────────────────────────────
function CeoCard({ photo, name, bio }: typeof CEO) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="group overflow-hidden bg-[#111] border border-white/[0.07]"
      style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.7)' }}
    >
      <div className="flex flex-col lg:flex-row">

        {/* ── Image panel ── */}
        <div className="relative lg:w-[44%] aspect-[3/4] lg:aspect-auto overflow-hidden bg-[#0a0a0a]">
          <img
            src={`/assets/team/${photo}`}
            alt={name}
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://i.pravatar.cc/800?img=11' }}
            className={`w-full h-full object-cover object-top transition-transform duration-[700ms] ease-[${ease}] group-hover:scale-[1.04]`}
          />
          {/* cinematic gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 via-transparent to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111] hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 to-transparent hidden lg:block" />
        </div>

        {/* ── Content panel ── */}
        <div className="flex-1 flex flex-col justify-center px-8 py-10 lg:px-14 lg:py-16 relative">
          {/* vertical red accent */}
          <div className="absolute left-0 top-10 bottom-10 w-[3px] bg-gradient-to-b from-transparent via-[#D91C1C] to-transparent hidden lg:block" />

          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#D91C1C] mb-5 block">
            CEO &amp; Founder
          </span>
          <h2 className="font-display text-[56px] md:text-[80px] text-white leading-[0.88] mb-5">
            {name}
          </h2>
          <div className="w-10 h-[2px] bg-[#D91C1C] mb-7" />
          <p className="font-sans text-white/50 text-[15px] leading-[1.8] mb-10 max-w-lg">
            {bio}
          </p>
          <blockquote className="border-l-[2px] border-[#D91C1C]/30 pl-5">
            <p className="font-sans italic text-white/28 text-sm leading-relaxed">
              "সর্বদা প্রথম, সর্বদা সঠিক — this is what Ishan Bangla stands for."
            </p>
          </blockquote>
        </div>
      </div>
    </motion.div>
  )
}

// ── Leader card — 3:4 portrait, full image fill ────────────────────────────────
function LeaderCard({
  photo, name, role, bio, i,
}: { photo: string; name: string; role: string; bio: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <div
        className={`group relative overflow-hidden bg-[#111] border border-white/[0.06] h-full cursor-default
          transition-[transform,box-shadow] duration-[400ms] ease-[${ease}]
          hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(217,28,28,0.22)]`}
      >
        {/* portrait image fills top 70% */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
          <img
            src={`/assets/team/${photo}`}
            alt={name}
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://i.pravatar.cc/600?img=${20 + i * 10}` }}
            className={`w-full h-full object-cover object-top transition-transform duration-[550ms] ease-[${ease}] group-hover:scale-[1.06]`}
          />
          {/* gradient revealing name at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/30 to-transparent" />

          {/* name overlaid on image */}
          <div className="absolute bottom-0 inset-x-0 px-6 pb-6">
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#D91C1C] mb-2">{role}</div>
            <h3 className="font-display text-white text-[26px] leading-tight">{name}</h3>
          </div>

          {/* red bottom sweep on hover */}
          <div className={`absolute bottom-0 inset-x-0 h-[2px] bg-[#D91C1C] scale-x-0 group-hover:scale-x-100 transition-transform duration-[450ms] ease-[${ease}] origin-left`} />
        </div>

        {/* bio below image */}
        <div className="px-6 py-5 border-t border-white/[0.05]">
          <p className="font-sans text-[12px] text-white/38 leading-relaxed">{bio}</p>
        </div>
      </div>
    </motion.div>
  )
}

// ── Staff card — square, 3-col sections ───────────────────────────────────────
function StaffCard({
  photo, name, role, bio, i, fallbackSeed = 30,
}: { photo: string; name: string; role: string; bio: string; i: number; fallbackSeed?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`group relative overflow-hidden bg-[#111] border border-white/[0.06] cursor-default
          transition-[transform,box-shadow] duration-[360ms] ease-[${ease}]
          hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(217,28,28,0.18)]`}
      >
        {/* square image */}
        <div className="relative aspect-square overflow-hidden bg-[#0a0a0a]">
          <img
            src={`/assets/team/${photo}`}
            alt={name}
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://i.pravatar.cc/400?img=${fallbackSeed}` }}
            className={`w-full h-full object-cover object-top transition-transform duration-[480ms] ease-[${ease}] group-hover:scale-[1.07]`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111]/65 via-transparent to-transparent" />

          {/* role label — slides up on hover */}
          <div className={`absolute bottom-0 inset-x-0 bg-[#D91C1C] px-4 py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-[360ms] ease-[${ease}]`}>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/90">{role}</span>
          </div>
        </div>

        {/* info */}
        <div className="px-5 pt-4 pb-5">
          <h3 className="font-display text-[18px] text-white leading-snug mb-1">{name}</h3>
          <div className="font-mono text-[9px] uppercase tracking-widest text-[#D91C1C]/60 mb-3">{role}</div>
          <p className="font-sans text-[11px] text-white/35 leading-relaxed">{bio}</p>
        </div>

        {/* bottom red sweep */}
        <div className={`absolute bottom-0 inset-x-0 h-px bg-[#D91C1C] scale-x-0 group-hover:scale-x-100 transition-transform duration-[420ms] ease-[${ease}] origin-left`} />
      </div>
    </motion.div>
  )
}

// ── Compact card — portrait 3:4, 5-col sections ───────────────────────────────
function CompactCard({
  photo, name, role, i, fallbackSeed = 30,
}: { photo: string; name: string; role: string; bio: string; i: number; fallbackSeed?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`group relative overflow-hidden bg-[#111] border border-white/[0.06] cursor-default
          transition-[transform,box-shadow] duration-[340ms] ease-[${ease}]
          hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(217,28,28,0.16)]`}
      >
        {/* portrait image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
          <img
            src={`/assets/team/${photo}`}
            alt={name}
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://i.pravatar.cc/400?img=${fallbackSeed}` }}
            className={`w-full h-full object-cover object-top transition-transform duration-[450ms] ease-[${ease}] group-hover:scale-[1.06]`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 via-[#111]/10 to-transparent" />

          {/* name over image */}
          <div className="absolute bottom-0 inset-x-0 px-3 pb-3">
            <h3 className="font-display text-white text-[14px] leading-tight">{name}</h3>
          </div>

          {/* red sweep */}
          <div className={`absolute bottom-0 inset-x-0 h-px bg-[#D91C1C] scale-x-0 group-hover:scale-x-100 transition-transform duration-[380ms] ease-[${ease}] origin-left`} />
        </div>

        {/* role */}
        <div className="px-3 py-2.5">
          <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#D91C1C]/55">{role}</div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Section wrapper ───────────────────────────────────────────────────────────
function TeamSection({ title, titlebn, children }: { title: string; titlebn: string; children: React.ReactNode }) {
  return (
    <section className="bg-[#0D0D0D] border-b border-white/[0.05] px-5 md:px-10 lg:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-4 mb-10 pb-5 border-b border-white/[0.08]">
          <h2 className="font-display text-[44px] md:text-[62px] text-white leading-none">{title}</h2>
          <span className="font-bengali text-white/18 text-base hidden md:block">{titlebn}</span>
        </div>
        {children}
      </div>
    </section>
  )
}


// ── Page ──────────────────────────────────────────────────────────────────────
export default function Team() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-20"
    >

      {/* ── HERO ── */}
      <section className="bg-[#0D0D0D] border-b-2 border-[#D91C1C] px-5 md:px-10 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D91C1C] border border-[#D91C1C] px-2 py-0.5 inline-block mb-6">
              Our Team — আমাদের দল
            </span>
            <h1 className="font-display text-[70px] sm:text-[100px] md:text-[130px] text-white leading-[0.88] mb-5">
              The People<br />
              <span className="text-[#D91C1C]">Behind the News.</span>
            </h1>
            <p className="font-sans text-white/50 text-base md:text-lg max-w-2xl leading-relaxed">
              Journalists, editors, and producers dedicated to bringing Barak Valley's stories to 35 million viewers every month.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CEO & FOUNDER ── */}
      <section className="bg-[#0D0D0D] border-b border-white/[0.05] px-5 md:px-10 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10 pb-5 border-b border-white/[0.08]">
            <h2 className="font-display text-[44px] md:text-[62px] text-white leading-none">Founder</h2>
            <span className="font-bengali text-white/18 text-base hidden md:block">প্রতিষ্ঠাতা</span>
          </div>
          <CeoCard {...CEO} />
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <TeamSection title="Leadership" titlebn="নেতৃত্ব">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LEADERSHIP.map((m, i) => (
            <LeaderCard key={m.photo} {...m} i={i} />
          ))}
        </div>
      </TeamSection>

      {/* ── EDITORIAL ── */}
      <TeamSection title="Editorial" titlebn="সম্পাদকীয়">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EDITORIAL.map((m, i) => (
            <StaffCard key={m.photo} {...m} i={i} fallbackSeed={35 + i * 7} />
          ))}
        </div>
      </TeamSection>

      {/* ── ANCHOR & HOST ── */}
      <TeamSection title="Anchor &amp; Host" titlebn="উপস্থাপক">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ANCHORS.map((m, i) => (
            <StaffCard key={m.photo} {...m} i={i} fallbackSeed={80 + i * 4} />
          ))}
        </div>
      </TeamSection>

      {/* ── PRODUCTION ── */}
      <TeamSection title="Production" titlebn="প্রযোজনা দল">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {PRODUCTION.map((m, i) => (
            <CompactCard key={m.photo} {...m} i={i} fallbackSeed={55 + i * 8} />
          ))}
        </div>
      </TeamSection>

      {/* ── REPORTERS ── */}
      <TeamSection title="Reporter" titlebn="সংবাদদাতা">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {REPORTERS.map((m, i) => (
            <CompactCard key={m.photo} {...m} i={i} fallbackSeed={42 + i * 6} />
          ))}
        </div>
      </TeamSection>

      {/* ── CORRESPONDENTS ── */}
      <TeamSection title="Correspondent" titlebn="প্রতিনিধি">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {CORRESPONDENTS.map((m, i) => (
            <CompactCard key={m.photo} {...m} i={i} fallbackSeed={70 + i * 5} />
          ))}
        </div>
      </TeamSection>


      {/* ── JOIN US ── */}
      <section className="bg-[#0D0D0D] px-5 md:px-10 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={`${S.display} text-[52px] md:text-[80px] text-white mb-4 border-b border-white/10 pb-6`}>
              Join The<br />
              <span className="text-[#D91C1C]">Newsroom.</span>
            </h2>
            <p className="font-sans text-white/50 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              Passionate about journalism? Want to tell the stories of Barak Valley to millions?
              We're always looking for reporters, videographers, and digital creators.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:ishanbanglanews@gmail.com?subject=Job Application — Ishan Bangla"
                className={S.btnRed}
              >
                Send Your Resume →
              </a>
              <Link
                to="/about"
                className={`${S.btnOutline} !text-white !border-white/40 [box-shadow:4px_4px_0_rgba(255,255,255,0.2)]`}
              >
                About The Channel →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
