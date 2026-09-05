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

  return (
    <>
      <Seo
        title="Contact Us | MM OVERSEAS"
        description="Contact MM OVERSEAS in Devsar, Bhiwani for edible oil, oil cake, oilseed procurement and partnership enquiries."
      />
      <HeroSection
        compact
        image="/images/rapeseed.jpg"
        eyebrow="Contact"
        title="Let's Build a Better Oilseed Value Chain Together"
        subtitle="Share a product, procurement or partnership enquiry. Reach us in Devsar, Bhiwani or use the form below."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <button
              key={card.title}
              type="button"
              onClick={openEnquiry}
              className="rounded-xl border border-line bg-white p-6 text-left transition hover:border-forest/30 hover:shadow-[0_12px_30px_rgba(6,75,60,0.06)]"
            >
              <h2 className="font-serif text-2xl text-forest">{card.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{card.text}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-orange">Enquire →</span>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">Reach us</p>
            <h2 className="mt-3 font-serif text-4xl text-forest">Enquiry details</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              We welcome business, product, procurement and partnership conversations.
            </p>
            <dl className="mt-8 space-y-6 text-sm">
              <div>
                <dt className="font-semibold text-forest">Address</dt>
                <dd className="mt-1 text-muted">
                  {contactInfo.addressLine1}
                  <br />
                  {contactInfo.addressLine2}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-forest">Phone</dt>
                <dd className="mt-1">
                  <a href={contactInfo.phoneHref} className="text-muted transition hover:text-forest">
                    {contactInfo.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-forest">Email</dt>
                <dd className="mt-1">
                  <a href={contactInfo.emailHref} className="text-muted transition hover:text-forest">
                    {contactInfo.email}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-8 overflow-hidden rounded-xl border border-line bg-cream">
              <iframe
                title="MM OVERSEAS location — Devsar, Bhiwani"
                src={mapSrc}
                className="min-h-[220px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-line p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-forest">Submit an enquiry</h2>
            <p className="mt-2 mb-8 text-sm text-muted">
              This form is currently a user-interface prototype. For a direct response, call or email us using the
              details on this page.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
