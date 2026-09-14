import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { cakes, oils } from '../data/content'
import { contactInfo } from '../data/contact'
import { useEnquiry } from '../components/Layout'

export default function Products() {
  const { openEnquiry } = useEnquiry()

  return (
    <>
      <Seo
        title="Edible Oils & Oil Cakes | Mustard, Yellow Mustard, Sesame & Groundnut | MM OVERSEAS"
        description="Explore MM OVERSEAS product range — cold-pressed & hygienically extracted mustard oil, yellow mustard oil, sesame oil, groundnut oil, and nutrient-rich oil cakes."
        keywords="Mustard Oil, Yellow Mustard Oil, Sesame Oil, Groundnut Oil, Mustard Cake, Sesame Cake, Groundnut Cake, Edible Oil Supplier India, Cattle Feed Oil Cake"
        canonicalPath="/products"
      />
      <HeroSection
        compact
        image="https://res.cloudinary.com/dukbkeh4p/image/upload/v1789341754/mm-overseas/oil-bottles.jpg"
        eyebrow="Our products"
        title="Products Made From Carefully Selected Oilseeds"
        subtitle="A focused range of edible oils and oil cakes produced through oilseed procurement, hygienic processing and quality-conscious manufacturing."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading eyebrow="Category 01" title="Edible Oils">
          <p>
            Our edible oil range is produced from selected mustard seeds, yellow mustard seeds, sesame seeds and
            groundnut kernels — each handled with attention to cleanliness and consistency.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-8 sm:mt-12">
          {oils.map((oil, i) => (
            <article
              key={oil.slug}
              className={`grid overflow-hidden rounded-2xl border border-line bg-white shadow-xs transition hover:shadow-md lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="min-h-[240px] sm:min-h-[300px]">
                <img
                  src={oil.image}
                  alt={`${oil.name} - Pure edible oil processed by MM OVERSEAS`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                <span className="w-fit rounded-full border border-orange/30 bg-orange/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange">
                  Edible oil
                </span>
                <h3 className="mt-3 font-serif text-3xl text-forest sm:text-4xl">{oil.name}</h3>
                <p className="mt-2 text-sm font-semibold text-forest-soft">
                  Raw Material: <span className="font-normal text-muted">{oil.rawMaterial}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{oil.description}</p>
                <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                  <button
                    type="button"
                    onClick={openEnquiry}
                    className="flex-1 rounded-md bg-forest px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-forest-deep sm:flex-initial"
                  >
                    Enquire Now
                  </button>
                  <a
                    href={`https://wa.me/91${contactInfo.phone}?text=${encodeURIComponent(`Hello MM OVERSEAS, I would like to enquire about ${oil.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-md border border-emerald-600 bg-emerald-50/80 px-4 py-3 text-center text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading eyebrow="Category 02" title="Oil Cakes">
            <p>
              Oil cakes are produced as part of our oilseed processing operations and form an important part of the
              agricultural value chain.
            </p>
          </SectionHeading>
          <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2">
            {cakes.map((cake) => (
              <article key={cake.slug} className="grid overflow-hidden rounded-xl border border-line bg-cream/30 shadow-xs transition hover:shadow-md md:grid-cols-2">
                <img
                  src={cake.image}
                  alt={`${cake.name} - MM OVERSEAS byproduct for cattle feed & organic fertilizer`}
                  className="h-52 w-full object-cover md:h-full"
                />
                <div className="flex flex-col justify-center p-5 sm:p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-mustard">
                    Oil Cake
                  </span>
                  <h3 className="mt-1 font-serif text-2xl text-forest sm:text-3xl">{cake.name}</h3>
                  <p className="mt-1.5 text-xs font-semibold text-forest-soft">
                    From: <span className="font-normal text-muted">{cake.rawMaterial}</span>
                  </p>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted">{cake.description}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={openEnquiry}
                      className="text-xs sm:text-sm font-bold text-orange hover:text-forest"
                    >
                      Enquire Online →
                    </button>
                    <a
                      href={`https://wa.me/91${contactInfo.phone}?text=${encodeURIComponent(`Hello MM OVERSEAS, I would like to enquire about ${cake.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-700 hover:underline"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a product discussion?"
        text="Share your requirement for edible oils or oil cakes and our team will follow up with the relevant information."
        primary={{ to: '/contact', label: 'Send Enquiry' }}
        secondary={{ to: '/procurement-quality', label: 'Procurement & Quality' }}
      />
    </>
  )
}
