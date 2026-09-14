import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/content'
import { contactInfo } from '../data/contact'
import { useEnquiry } from './Layout'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { openEnquiry } = useEnquiry()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-white/95 shadow-[0_8px_30px_rgba(6,75,60,0.08)] backdrop-blur-md'
            : 'bg-cream/85 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
            <img
              src="https://res.cloudinary.com/dukbkeh4p/image/upload/v1789341473/mm-overseas/logo.png"
              alt="MM OVERSEAS Logo - Edible Oil Manufacturer"
              className="h-12 w-auto sm:h-14 md:h-16 lg:h-[4.2rem] object-contain transition-all"
            />
            <span className="sr-only">MM OVERSEAS home</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-md px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    isActive ? 'text-forest font-semibold' : 'text-muted hover:text-forest'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={openEnquiry}
              className="hidden rounded-md bg-forest px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-deep sm:inline-flex"
            >
              Enquire Now
            </button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/60 text-forest transition active:scale-95 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex h-4 w-5 flex-col justify-between">
                <span className={`h-0.5 w-full bg-forest transition-transform duration-300 ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
                <span className={`h-0.5 w-full bg-forest transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-forest transition-transform duration-300 ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {open && (
          <div
            id="mobile-menu"
            className="border-t border-line bg-white/98 shadow-2xl backdrop-blur-xl lg:hidden animate-fade-up max-h-[82vh] overflow-y-auto"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4" aria-label="Mobile">
              <div className="divide-y divide-line/60">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-3.5 text-base transition-colors ${
                        isActive
                          ? 'font-bold text-forest'
                          : 'font-medium text-ink hover:text-forest'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <span className="text-sm text-mustard" aria-hidden>→</span>
                  </NavLink>
                ))}
              </div>

              {/* Mobile quick actions inside menu */}
              <div className="mt-5 rounded-xl border border-line bg-cream p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest/70">
                  Quick Connect
                </p>
                <div className="mt-3 space-y-2 text-xs text-muted">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-forest">Phone:</span>
                    <a href={contactInfo.phoneHref} className="text-forest font-medium underline">
                      {contactInfo.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-forest">Email:</span>
                    <a href={contactInfo.emailHref} className="truncate text-forest">
                      {contactInfo.email}
                    </a>
                  </p>
                  <p className="text-[11px] text-muted/90">
                    📍 {contactInfo.addressLine1}, {contactInfo.addressLine2}
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a
                    href={contactInfo.phoneHref}
                    className="flex items-center justify-center rounded-lg border border-forest/20 bg-white py-2.5 text-center text-xs font-semibold text-forest shadow-xs active:bg-cream"
                  >
                    📞 Call Us
                  </a>
                  <a
                    href={`https://wa.me/91${contactInfo.phone}?text=${encodeURIComponent('Hello MM OVERSEAS, I would like to enquire about your edible oils.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-lg bg-emerald-700 py-2.5 text-center text-xs font-semibold text-white shadow-xs active:bg-emerald-800"
                  >
                    💬 WhatsApp
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    openEnquiry()
                  }}
                  className="mt-3 w-full rounded-lg bg-forest py-3 text-center text-sm font-semibold text-white shadow-sm transition active:bg-forest-deep"
                >
                  Send Detailed Enquiry
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-forest-deep/30 backdrop-blur-xs lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
