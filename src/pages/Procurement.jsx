import Seo from '../components/Seo'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import ProcurementCard from '../components/ProcurementCard'
import CTASection from '../components/CTASection'
import { procured } from '../data/content'

const selection = [
  { title: 'Seed Quality', text: 'Attention to the condition and character of oilseeds before they enter processing.' },
  { title: 'Cleanliness', text: 'Raw materials are assessed and handled with hygiene in mind from the first stage.' },
  { title: 'Storage & Handling', text: 'Organised storage and careful handling help protect material quality.' },
  { title: 'Processing Suitability', text: 'Seeds are selected for their fitness for edible oil manufacturing.' },
  { title: 'Consistency', text: 'A steady sourcing approach supports more consistent processing outcomes.' },
]

const flow = ['Procurement', 'Initial Selection', 'Cleaning', 'Processing', 'Quality Check', 'Product']

export default function Procurement() {
  return (
    <>
      <Seo
        title="Oilseed Procurement & Quality Standards | Mustard, Sesame & Groundnut | MM OVERSEAS"
        description="MM OVERSEAS procures quality mustard seeds, groundnut kernels and sesame seeds with disciplined grading, hygienic handling and fair pricing for farmers and suppliers in Haryana."
        keywords="Oilseed Procurement Haryana, Mustard Seed Sourcing, Sesame Seed Procurement, Groundnut Procurement Bhiwani, Seed Quality Inspection, Raw Material Sourcing"
        canonicalPath="/procurement-quality"
      />
      <HeroSection
        compact
        image="/images/grains.jpg"
        eyebrow="Procurement & quality"
        title="Quality Begins With Better Procurement"
        subtitle="At MM OVERSEAS, procurement is an important part of our quality approach. We focus on sourcing suitable oilseeds and maintaining attention to raw material quality before processing begins."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading eyebrow="Currently procured" title="Oilseeds We Source">
          <p>
            Our present procurement focus includes mustard seeds, groundnut kernels and sesame seeds — materials chosen
            for their role in our edible oil and oil cake production.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-6 sm:mt-12 md:grid-cols-3">
          {procured.map((item) => (
            <ProcurementCard key={item.name} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading eyebrow="Quality selection" title="What We Look For" />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">
            {selection.map((item) => (
              <article key={item.title} className="rounded-xl border border-line p-5 sm:p-6 shadow-xs transition hover:border-forest/30">
                <h3 className="font-serif text-xl sm:text-2xl text-forest">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted sm:mt-3">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading eyebrow="Process" title="From Procurement to Product" align="center" />
        <ol className="mt-8 sm:mt-12 flex flex-col items-center gap-2 sm:gap-3">
          {flow.map((step, i) => (
            <li key={step} className="flex w-full max-w-md flex-col items-center">
              <div className="w-full rounded-xl border border-line bg-white px-5 py-3.5 sm:py-4 text-center font-semibold text-sm sm:text-base tracking-wide text-forest shadow-xs">
                {step}
              </div>
              {i < flow.length - 1 && (
                <span className="my-1 text-orange text-lg" aria-hidden>
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-cream-warm">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Compliance" title="Food Safety & Hygiene">
              <p>
                Food safety and cleanliness are integral to our operations. Our manufacturing approach emphasises
                hygienic handling, organised processes and quality-conscious management.
              </p>
            </SectionHeading>
          </div>
          <aside className="rounded-2xl border border-line bg-white p-8 shadow-[0_12px_40px_rgba(6,75,60,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">Food safety</p>
            <h3 className="mt-3 font-serif text-3xl text-forest">FSSAI Compliant</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              MM OVERSEAS operates with FSSAI compliance. License details are available on request and will be published
              here once confirmed.
            </p>
            <p className="mt-5 rounded-md bg-cream px-4 py-3 text-sm text-forest">
              FSSAI License details available on request / to be updated.
            </p>
          </aside>
        </div>
      </section>

      <CTASection
        title="Discuss oilseed supply or quality requirements"
        text="Whether you are enquiring about procurement, processing or finished products, we welcome a professional conversation."
        primary={{ to: '/contact', label: 'Contact Us' }}
        secondary={{ to: '/values', label: 'Our Values' }}
      />
    </>
  )
}
