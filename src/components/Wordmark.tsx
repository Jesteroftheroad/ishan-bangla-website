/** Shared wordmark — "ঈশান বাংলা"
 *  Both words in Noto Sans Bengali.
 *  ঈশান → white   বাংলা → Signal Red (#D91C1C)
 *  Used in Navbar + anywhere a logo-replacement is needed.
 *  The actual image logo lives only in Footer.
 */

type Size = 'sm' | 'md' | 'lg'

const SIZES: Record<Size, string> = {
  sm: 'text-[18px]',
  md: 'text-[22px]',
  lg: 'text-[30px]',
}

export function Wordmark({ size = 'md' }: { size?: Size }) {
  return (
    <span className="inline-flex items-baseline gap-[0.2em] leading-none select-none">
      <span className={`font-bengali font-extrabold text-white ${SIZES[size]}`}>ঈশান</span>
      <span className={`font-bengali font-extrabold text-signal ${SIZES[size]}`}>বাংলা</span>
    </span>
  )
}
