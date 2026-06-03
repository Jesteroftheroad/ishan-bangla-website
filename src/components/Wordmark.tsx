/** Shared text wordmark — "ঈশান BANGLA"
 *  ঈশান  → Noto Sans Bengali, white
 *  BANGLA → Bebas Neue, Signal Red
 *  Used in Navbar (md) and wherever a logo-replacement is needed.
 *  The actual image logo lives only in Footer.
 */

type Size = 'sm' | 'md' | 'lg'

const SIZES: Record<Size, { bengali: string; bebas: string }> = {
  sm: { bengali: 'text-[20px]', bebas: 'text-[20px]' },
  md: { bengali: 'text-[26px]', bebas: 'text-[26px]' },
  lg: { bengali: 'text-[34px]', bebas: 'text-[34px]' },
}

export function Wordmark({ size = 'md' }: { size?: Size }) {
  const s = SIZES[size]
  return (
    <span className="inline-flex items-baseline gap-1.5 leading-none select-none">
      <span className={`font-bengali font-extrabold text-white ${s.bengali}`}>ঈশান</span>
      <span className={`font-bebas text-signal tracking-wide ${s.bebas}`}>BANGLA</span>
    </span>
  )
}
