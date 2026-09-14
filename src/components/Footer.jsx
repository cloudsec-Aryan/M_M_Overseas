import { Link } from 'react-router-dom'
import { navLinks, oils } from '../data/content'
import { contactInfo } from '../data/contact'
import { useEnquiry } from './Layout'

export default function Footer() {
  const { openEnquiry } = useEnquiry()

  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <img
            src="https://res.cloudinary.com/dukbkeh4p/image/upload/v1789341473/mm-overseas/logo.png"
            alt="MM OVERSEAS Logo - Edible Oil Manufacturer"
            className="mb-4 h-16 w-auto rounded-xl bg-white p-2 shadow-xs sm:h-20"
          />
          <p className="font-serif text-2xl text-white">MM OVERSEAS</p>
          <p className="mt-2 max-w-xs text-xs sm:text-sm leading-relaxed text-white/75">
            Edible Oil Manufacturing • Oilseed Processing • Sourcing
          </p>
          <div className="mt-4 space-y-1.5 text-xs sm:text-sm text-white/75">
            <p className="leading-relaxed">{contactInfo.addressLine1}, {contactInfo.addressLine2}</p>
            <p>
              <a href={contactInfo.phoneHref} className="inline-block py-1 text-white font-medium underline transition hover:text-mustard">
                📞 +91 {contactInfo.phone}
              </a>
            </p>
            <p>
              <a href={contactInfo.emailHref} className="inline-block py-1 text-white/90 transition hover:text-mustard">
                ✉️ {contactInfo.email}
              </a>
            </p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-mustard sm:mb-4">Quick Links</p>
          <ul className="space-y-1 sm:space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="inline-block py-1.5 text-white/80 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/terms" className="inline-block py-1.5 text-white/80 transition hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-mustard sm:mb-4">Our Products</p>
          <ul className="space-y-1 sm:space-y-2 text-sm">
            {oils.map((oil) => (
              <li key={oil.slug}>
                <Link to="/products" className="inline-block py-1.5 text-white/80 transition hover:text-white">
                  {oil.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/products" className="inline-block py-1.5 text-white/80 transition hover:text-white">
                Cattle Feed Oil Cakes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-mustard sm:mb-4">Connect With Us</p>
          <p className="text-xs sm:text-sm leading-relaxed text-white/75">
            For product enquiries, procurement requirements, and bulk business partnerships.
          </p>
          <div className="mt-4 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={openEnquiry}
              className="rounded-lg bg-mustard px-4 py-2.5 text-center text-xs sm:text-sm font-semibold text-forest-deep shadow-xs transition hover:bg-soft-orange active:scale-98"
            >
              Enquire Now
            </button>
            <a
              href={`https://wa.me/91${contactInfo.phone}?text=${encodeURIComponent('Hello MM OVERSEAS, I would like to enquire about your edible oils.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-center text-xs sm:text-sm font-semibold text-white backdrop-blur-xs transition hover:bg-white/20 active:scale-98"
            >
              💬 WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-sm lg:px-8">
          <p>© 2026 MM OVERSEAS. All Rights Reserved. Devsar, Bhiwani, Haryana.</p>
          <Link to="/terms" className="py-1 transition hover:text-white">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
