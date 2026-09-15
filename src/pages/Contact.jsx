import Seo from '../components/Seo'
import HeroSection from '../components/HeroSection'
import ContactForm from '../components/ContactForm'
import { contactInfo } from '../data/contact'
import { useEnquiry } from '../components/Layout'

const cards = [
  {
    title: 'Business Enquiries',
    text: 'Discuss supply, partnerships and general commercial requirements with the MM OVERSEAS team.',
  },
  {
    title: 'Product Enquiries',
    text: 'Ask about mustard oil, yellow mustard oil, sesame oil, groundnut oil and oil cakes.',
  },
  {
    title: 'Procurement Enquiries',
    text: 'Speak with us about mustard seeds, groundnut kernels, sesame seeds and related sourcing.',
  },
  {
    title: 'Dealer / Partnership Enquiries',
    text: 'Explore dealer and business-partner conversations grounded in fairness and long-term collaboration.',
  },
]

export default function Contact() {
  const { openEnquiry } = useEnquiry()
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contactInfo.mapQuery)}&output=embed`

  const waMessage = encodeURIComponent('Hello MM OVERSEAS, I would like to make an enquiry regarding your products and services.')
  const waHref = `https://wa.me/91${contactInfo.phone}?text=${waMessage}`

  return (
    <>
      <Seo
        title="Contact MM OVERSEAS | Edible Oil Manufacturer Devsar Bhiwani Haryana"
        description="Get in touch with MM OVERSEAS for bulk edible oils, mustard oil, yellow mustard oil, sesame oil, groundnut oil, oil cakes and oilseed procurement. Phone: +91 7419907550."
        keywords="Contact MM Overseas, Edible Oil Supplier Contact, Mustard Oil Bhiwani, Devsar Bhiwani Edible Oil, Oilseed Procurement Contact Haryana"
        canonicalPath="/contact"
      />
      <HeroSection
        compact
        image="https://res.cloudinary.com/dukbkeh4p/image/upload/v1789363328/mm-overseas/rapeseed.jpg"
        eyebrow="Contact"
        title="Let's Build a Better Oilseed Value Chain Together"
        subtitle="Share a product, procurement or partnership enquiry. Reach us in Devsar, Bhiwani or use the form below."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {cards.map((card) => (
            <button
              key={card.title}
              type="button"
              onClick={openEnquiry}
              className="group rounded-xl border border-line bg-white p-5 text-left transition hover:border-forest/40 hover:shadow-[0_12px_30px_rgba(6,75,60,0.08)] sm:p-6 active:scale-98"
            >
              <h2 className="font-serif text-xl sm:text-2xl text-forest group-hover:text-forest-deep">{card.title}</h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">{card.text}</p>
              <span className="mt-4 inline-block text-xs sm:text-sm font-semibold text-orange group-hover:text-forest">Enquire Online →</span>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
          <div>
            <span className="w-fit rounded-full border border-orange/30 bg-orange/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
              Reach us
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-forest">Enquiry Details & Office</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We welcome business, product, procurement and partnership conversations.
            </p>

            {/* Quick Contact Buttons for Mobile & Desktop */}
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <a
                href={contactInfo.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl bg-forest px-4 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-forest-deep active:scale-98"
              >
                <span>📞</span>
                <span>Call +91 {contactInfo.phone.slice(0, 5)} {contactInfo.phone.slice(5)}</span>
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 active:scale-98"
              >
                <span>💬</span>
                <span>WhatsApp Us</span>
              </a>
            </div>

            <dl className="mt-8 space-y-5 text-sm">
              <div className="rounded-xl border border-line bg-cream/40 p-4">
                <dt className="font-semibold text-forest">📍 Manufacturing Plant & Office</dt>
                <dd className="mt-1 text-muted">
                  {contactInfo.addressLine1}
                  <br />
                  {contactInfo.addressLine2}
                </dd>
              </div>
              <div className="rounded-xl border border-line bg-cream/40 p-4">
                <dt className="font-semibold text-forest">📞 Direct Phone</dt>
                <dd className="mt-1">
                  <a href={contactInfo.phoneHref} className="text-forest font-semibold underline transition hover:text-forest-deep">
                    +91 {contactInfo.phone.slice(0, 5)} {contactInfo.phone.slice(5)}
                  </a>
                </dd>
              </div>
              <div className="rounded-xl border border-line bg-cream/40 p-4">
                <dt className="font-semibold text-forest">✉️ Email Support</dt>
                <dd className="mt-1">
                  <a href={contactInfo.emailHref} className="text-forest font-medium underline transition hover:text-forest-deep">
                    {contactInfo.email}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-6 overflow-hidden rounded-xl border border-line bg-cream shadow-xs">
              <iframe
                title="MM OVERSEAS location — Devsar, Bhiwani"
                src={mapSrc}
                className="min-h-[220px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white p-5 shadow-xs sm:p-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-forest">Submit an Enquiry</h2>
            <p className="mt-2 mb-6 text-xs sm:text-sm text-muted">
              Fill in your details below and our team will get in touch with you promptly.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
