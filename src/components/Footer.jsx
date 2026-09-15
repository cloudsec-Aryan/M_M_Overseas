import { Link } from 'react-router-dom'
import { navLinks, oils, cakes } from '../data/content'
import { contactInfo } from '../data/contact'
import { useEnquiry } from './Layout'

export default function Footer() {
  const { openEnquiry } = useEnquiry()

  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Brand & Direct Contact Column */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Enlarged Brand Logo */}
            <div className="flex items-center gap-4">
              <img
                src="https://res.cloudinary.com/dukbkeh4p/image/upload/v1789341473/mm-overseas/logo.png"
                alt="MM OVERSEAS Logo - Edible Oil Manufacturer"
                className="h-20 w-auto sm:h-24 md:h-28 rounded-2xl bg-white p-2.5 sm:p-3 shadow-lg border border-white/20 transition duration-300 hover:scale-[1.02]"
              />
              <div>
                <p className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  MM OVERSEAS
                </p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-mustard tracking-wide">
                  Edible Oil Manufacturer & Oilseed Processing
                </p>
                <p className="mt-0.5 text-xs text-white/70">
                  Devsar, Bhiwani, Haryana – 127021
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-lg text-xs sm:text-sm leading-relaxed text-white/80">
              Manufacturing pure mustard, yellow mustard, sesame and groundnut edible oils, and nutrient-rich cattle feed oil cakes through modern hygienic processing.
            </p>

            {/* Formatted Contact Information Cards */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {/* Phone Card */}
              <div className="rounded-xl border border-white/15 bg-white/5 p-3.5 backdrop-blur-xs transition hover:border-mustard/50 hover:bg-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mustard">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-mustard text-forest-deep">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </span>
                  Mobile & Helpline
                </div>
                <a
                  href={contactInfo.phoneHref}
                  className="mt-2 block text-sm sm:text-base font-bold text-white transition hover:text-mustard"
                >
                  +91 {contactInfo.phone.slice(0, 5)} {contactInfo.phone.slice(5)}
                </a>
                <div className="mt-1.5 flex items-center gap-2 text-[11px] text-white/70">
                  <a
                    href={`https://wa.me/91${contactInfo.phone}?text=${encodeURIComponent('Hello MM OVERSEAS, I would like to enquire about your products.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-mustard hover:underline"
                  >
                    💬 WhatsApp Chat
                  </a>
                  <span>•</span>
                  <span>Direct Call</span>
                </div>
              </div>

              {/* Mail Card */}
              <div className="rounded-xl border border-white/15 bg-white/5 p-3.5 backdrop-blur-xs transition hover:border-mustard/50 hover:bg-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mustard">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-mustard text-forest-deep">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </span>
                  Official Mail
                </div>
                <a
                  href={contactInfo.emailHref}
                  className="mt-2 block text-xs sm:text-sm font-semibold text-white/95 transition hover:text-mustard break-all"
                >
                  {contactInfo.email}
                </a>
                <p className="mt-1.5 text-[11px] text-white/70">
                  Bulk order & sourcing queries
                </p>
              </div>
            </div>

            {/* SEND ENQUIRY CTA Button with Attractive Favicon/Icon Logic */}
            <div className="mt-5">
              <button
                type="button"
                onClick={openEnquiry}
                className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-mustard via-soft-orange to-mustard bg-[length:200%_auto] px-5 py-3.5 text-center text-sm font-bold text-forest-deep shadow-[0_8px_25px_rgba(244,196,0,0.35)] transition-all duration-300 hover:bg-[position:right_center] hover:shadow-[0_12px_32px_rgba(244,196,0,0.45)] active:scale-[0.98] sm:w-auto"
              >
                {/* Dynamic Send Inquiry Favicon / Icon */}
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-forest-deep text-mustard shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" fillOpacity="0.2" />
                  </svg>
                </span>
                <span className="tracking-wide">Send Inquiry / तुरंत इन्क्वायरी भेजें</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Side-by-Side: Quick Links & Our Products */}
          <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:gap-8 lg:col-span-6 xl:col-span-6 lg:border-t-0 lg:pt-0">
            {/* Quick Links Column */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-mustard">
                Quick Links
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="inline-flex items-center gap-1.5 py-1 text-white/80 transition duration-200 hover:translate-x-1 hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-mustard/60" />
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/terms"
                    className="inline-flex items-center gap-1.5 py-1 text-white/80 transition duration-200 hover:translate-x-1 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-mustard/60" />
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Products Column (Right Beside Quick Links) */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-mustard">
                Our Products
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                {oils.map((oil) => (
                  <li key={oil.slug}>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-1.5 py-1 text-white/80 transition duration-200 hover:translate-x-1 hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-orange/60" />
                      {oil.name}
                    </Link>
                  </li>
                ))}
                {cakes.map((cake) => (
                  <li key={cake.slug}>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-1.5 py-1 text-white/80 transition duration-200 hover:translate-x-1 hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-mustard/60" />
                      {cake.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-white/10 bg-forest-deep/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2.5 px-4 py-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 MM OVERSEAS. All Rights Reserved. Devsar, Bhiwani, Haryana – 127021.</p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="py-1 transition hover:text-white">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/contact" className="py-1 transition hover:text-white">
              Factory Location
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
