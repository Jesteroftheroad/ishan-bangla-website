/**
 * Shared Neobrutalist design tokens for Ishan Bangla.
 * Import S from here to keep className strings DRY across pages.
 */
export const S = {
  /* ── Containers ── */
  page:    'min-h-screen bg-[#F5F2EB] text-[#0D0D0D]',
  section: 'px-5 md:px-10 lg:px-16 py-16 md:py-24',
  inner:   'max-w-6xl mx-auto',

  /* ── Cards ── */
  card:
    'border-2 border-[#0D0D0D] bg-white shadow-brutal transition-all duration-150 ' +
    'hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutal-lg',

  cardRed:
    'border-2 border-[#0D0D0D] bg-[#D91C1C] text-white shadow-brutal transition-all duration-150 ' +
    'hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutal-lg',

  cardInk:
    'border-2 border-[#0D0D0D] bg-[#0D0D0D] text-white shadow-brutal-red transition-all duration-150 ' +
    'hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutal-red-lg',

  /* ── Buttons ── */
  btnRed:
    'inline-flex items-center gap-2 bg-[#D91C1C] text-white ' +
    'border-2 border-[#0D0D0D] shadow-brutal ' +
    'px-6 py-3 font-display text-xl uppercase tracking-wide cursor-pointer ' +
    'transition-all duration-100 select-none ' +
    'hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg ' +
    'active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-sm',

  btnInk:
    'inline-flex items-center gap-2 bg-[#0D0D0D] text-white ' +
    'border-2 border-[#0D0D0D] shadow-brutal-red ' +
    'px-6 py-3 font-display text-xl uppercase tracking-wide cursor-pointer ' +
    'transition-all duration-100 select-none ' +
    'hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-red-lg ' +
    'active:translate-x-[2px] active:translate-y-[2px]',

  btnOutline:
    'inline-flex items-center gap-2 bg-transparent text-[#0D0D0D] ' +
    'border-2 border-[#0D0D0D] shadow-brutal ' +
    'px-6 py-3 font-display text-xl uppercase tracking-wide cursor-pointer ' +
    'transition-all duration-100 select-none ' +
    'hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg ' +
    'active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-sm',

  btnWa:
    'inline-flex items-center gap-2 bg-[#25D366] text-white ' +
    'border-2 border-[#0D0D0D] shadow-brutal ' +
    'px-6 py-3 font-display text-xl uppercase tracking-wide cursor-pointer ' +
    'transition-all duration-100 select-none ' +
    'hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg ' +
    'active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-sm',

  /* ── Typography ── */
  display:   'font-display leading-none tracking-tight',
  tag:       'font-mono text-[11px] uppercase tracking-[0.2em] text-[#D91C1C] border border-[#D91C1C] px-2 py-0.5 inline-block',
  tagInk:    'font-mono text-[11px] uppercase tracking-[0.2em] text-[#0D0D0D] border border-[#0D0D0D] px-2 py-0.5 inline-block',
  rule:      'border-t-2 border-[#0D0D0D]',

  /* ── Form ── */
  input:
    'w-full border-2 border-[#0D0D0D] bg-white px-4 py-3 font-sans text-[#0D0D0D] ' +
    'placeholder:text-[#0D0D0D]/40 focus:outline-none focus:shadow-brutal transition-shadow duration-150',

  textarea:
    'w-full border-2 border-[#0D0D0D] bg-white px-4 py-3 font-sans text-[#0D0D0D] resize-none ' +
    'placeholder:text-[#0D0D0D]/40 focus:outline-none focus:shadow-brutal transition-shadow duration-150',
} as const
