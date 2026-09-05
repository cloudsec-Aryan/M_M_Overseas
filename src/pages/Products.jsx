import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { cakes, oils } from '../data/content'

export default function Products() {
  return (
    <>
      <Seo
        title="Products | Mustard, Sesame & Groundnut Oils | MM OVERSEAS"
        description="Explore MM OVERSEAS edible oils — mustard oil, yellow mustard oil, sesame oil and groundnut oil — together with mustard, sesame and groundnut oil cakes."
      />
      <HeroSection
        compact
        image="/images/oil-bottles.jpg"
        eyebrow="Our products"
        title="Products Made From Carefully Selected Oilseeds"
        subtitle="A focused range of edible oils and oil cakes produced through oilseed procurement, hygienic processing and quality-conscious manufacturing."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="Category 01" title="Edible Oils">
          <p>
            Our edible oil range is produced from selected mustard seeds, yellow mustard seeds, sesame seeds and
            groundnut kernels — each handled with attention to cleanliness and consistency.
          </p>
        </SectionHeading>
        <div className="mt-12 grid gap-8">
          {oils.map((oil, i) => (
            <article
              key={oil.slug}
              className={`grid overflow-hidden rounded-2xl border border-line bg-white lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="min-h-[280px]">
                <img src={oil.image} alt={oil.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">Edible oil</p>
                <h3 className="mt-3 font-serif text-4xl text-forest">{oil.name}</h3>
                <p className="mt-3 text-sm font-medium text-forest-soft">Raw material: {oil.rawMaterial}</p>
                <p className="mt-4 text-base leading-relaxed text-muted">{oil.description}</p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex w-fit rounded-md bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest-deep"
                >
                  Enquire
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow="Category 02" title="Oil Cakes">
            <p>
              Oil cakes are produced as part of our oilseed processing operations and form an important part of the
              agricultural value chain.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {cakes.map((cake) => (
              <article key={cake.slug} className="grid overflow-hidden rounded-xl border border-line md:grid-cols-2">
                <img src={cake.image} alt={cake.name} className="h-56 w-full object-cover md:h-full" />
                <div className="flex flex-col justify-center p-7">
                  <h3 className="font-serif text-3xl text-forest">{cake.name}</h3>
                  <p className="mt-2 text-sm font-medium text-forest-soft">From: {cake.rawMaterial}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{cake.description}</p>
                  <Link to="/contact" className="mt-6 text-sm font-semibold text-orange">
                    Enquire →
                  </Link>
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
