import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/content'
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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white/95 shadow-[0_8px_30px_rgba(6,75,60,0.08)] backdrop-blur-md'
          : 'bg-cream/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="MM OVERSEAS" className="h-16 w-auto sm:h-[4.5rem]" />
          <span className="sr-only">MM OVERSEAS home</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                  isActive ? 'text-forest' : 'text-muted hover:text-forest'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openEnquiry}
            className="hidden rounded-md bg-forest px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-deep sm:inline-flex"
          >
            Enquire Now
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-forest lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex h-4 w-5 flex-col justify-between">
              <span className={`h-0.5 w-full bg-forest transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`h-0.5 w-full bg-forest transition ${open ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-forest transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-line py-3 text-base ${isActive ? 'font-semibold text-forest' : 'text-ink'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                openEnquiry()
              }}
              className="mt-4 rounded-md bg-forest px-4 py-3 text-center font-semibold text-white"
            >
              Enquire Now
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
