import { useEffect, useState } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const minTimer = window.setTimeout(() => setLeaving(true), 1400)
    return () => window.clearTimeout(minTimer)
  }, [])

  useEffect(() => {
    if (!leaving) return undefined
    const hideTimer = window.setTimeout(() => setVisible(false), 450)
    return () => window.clearTimeout(hideTimer)
  }, [leaving])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-cream transition-opacity duration-500 ${
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden={!leaving}
      role="status"
      aria-live="polite"
      aria-label="Loading MM OVERSEAS"
    >
      <div className="relative flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44">
        <span className="preloader-ring absolute inset-0 rounded-full border-2 border-line border-t-mustard border-r-orange" />
        <span className="absolute inset-2 rounded-full border border-forest/10 bg-white shadow-[0_12px_40px_rgba(6,75,60,0.08)]" />
        <img
          src="/logo.png"
          alt="MM OVERSEAS"
          className="relative z-10 h-20 w-auto animate-pulse sm:h-24"
        />
      </div>
      <span className="sr-only">Loading</span>
    </div>
  )
}
