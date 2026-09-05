import { Link } from 'react-router-dom'
import { navLinks, oils } from '../data/content'
import { contactInfo } from '../data/contact'
import { useEnquiry } from './Layout'

export default function Footer() {
  const { openEnquiry } = useEnquiry()

  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <img src="/logo.png" alt="MM OVERSEAS" className="mb-5 h-24 w-auto rounded-md bg-white p-2 sm:h-28" />
          <p className="font-serif text-2xl text-white">MM OVERSEAS</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">
            Edible Oil Manufacturing • Oilseed Processing • Procurement
          </p>
          <div className="mt-5 space-y-1 text-sm text-white/75">
            <p>{contactInfo.addressLine1}</p>
            <p>{contactInfo.addressLine2}</p>
            <p>
              <a href={contactInfo.phoneHref} className="transition hover:text-white">
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <a href={contactInfo.emailHref} className="transition hover:text-white">
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-mustard">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-white/80 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/terms" className="text-white/80 transition hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-mustard">Products</p>
          <ul className="space-y-2 text-sm">
            {oils.map((oil) => (
              <li key={oil.slug}>
                <Link to="/products" className="text-white/80 transition hover:text-white">
                  {oil.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/products" className="text-white/80 transition hover:text-white">
                Oil Cakes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-mustard">Connect</p>
          <p className="text-sm leading-relaxed text-white/75">
            For product enquiries, procurement requirements and business partnerships.
          </p>
          <button
            type="button"
            onClick={openEnquiry}
            className="mt-5 inline-flex rounded-md bg-mustard px-4 py-2.5 text-sm font-semibold text-forest-deep transition hover:bg-soft-orange"
          >
            Enquire Now
          </button>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 MM OVERSEAS. All Rights Reserved.</p>
          <Link to="/terms" className="transition hover:text-white">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
