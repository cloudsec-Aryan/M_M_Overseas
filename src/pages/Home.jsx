import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import ProcurementCard from '../components/ProcurementCard'
import ValueCard from '../components/ValueCard'
import CTASection from '../components/CTASection'
import { cakes, oils, procured } from '../data/content'

const stages = [
  'Oilseed procurement',
  'Seed cleaning and processing',
  'Oil extraction',
  'Edible oil production',
  'Oil cake production',
]

const why = [
  {
    title: 'Modern & Newly Furnished Plant',
    text: 'Operations are organised in a newly furnished processing environment designed for cleanliness, order and efficient flow.',
  },
  {
    title: 'Quality Oilseed Procurement',
    text: 'Raw material selection is treated as the first quality step, with attention to condition and suitability for processing.',
  },
  {
    title: 'Strong Focus on Cleanliness',
    text: 'Hygienic handling, organised work areas and careful storage are built into everyday manufacturing practice.',
  },
  {
    title: 'Consistent Processing Standards',
    text: 'Controlled processing supports a reliable product character from batch to batch.',
  },
  {
    title: 'Food Safety & Quality Consciousness',
    text: 'Food safety awareness and quality-conscious management guide how materials are handled, processed and prepared for supply.',
  },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Mmoverseasindia ! Edible oil | Premium Edible Oil Manufacturer & Oilseed Processing"
        description="MM OVERSEAS is a leading edible oil manufacturing and oilseed processing company producing mustard oil, yellow mustard oil, sesame oil, groundnut oil and nutrient-rich oil cakes."
        keywords="Mustard Oil Manufacturer, Edible Oil Manufacturer Haryana, Yellow Mustard Oil, Sesame Oil, Groundnut Oil, Mustard Cake, Sesame Cake, Groundnut Cake, Oilseed Procurement, Oilseed Processing Bhiwani"
        canonicalPath="/"
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dukbkeh4p/image/upload/v1789363262/mm-overseas/mustard-flowers.jpg"
            alt="Golden yellow mustard flowers in blooming harvest field"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/95 to-cream/50 sm:to-cream/35" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
              Edible Oil Manufacturer • Oilseed Processing
            </span>
            <h1 className="mt-4 font-serif text-3xl leading-[1.12] text-forest xs:text-4xl sm:text-5xl lg:text-[4.2rem]">
              Procured From Trusted Sources.
              <br />
              Carefully Processed.
              <br />
              Made for Better Living.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base lg:text-lg">
              MM OVERSEAS is an edible oil manufacturing and oilseed processing company focused on quality oilseeds,
              hygienic processing and consistent food products.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <Link
                to="/products"
                className="w-full rounded-md bg-forest px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-forest-deep sm:w-auto"
              >
                Explore Our Products
              </Link>
              <Link
                to="/contact"
                className="w-full rounded-md border border-forest/20 bg-white/80 px-6 py-3.5 text-center text-sm font-semibold text-forest backdrop-blur-sm transition hover:border-forest sm:w-auto"
              >
                Talk to Us
              </Link>
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-forest/70 sm:mt-8">
              Oilseed Procurement • Modern Processing • Quality Focused
            </p>
            <div className="mt-6 flex items-center gap-3 sm:hidden">
              <img
                src="https://res.cloudinary.com/dukbkeh4p/image/upload/v1789341473/mm-overseas/logo.png"
                alt="MM OVERSEAS Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="font-serif text-lg font-semibold text-forest">MM OVERSEAS</span>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_50px_rgba(6,75,60,0.12)]">
              <img
                src="https://res.cloudinary.com/dukbkeh4p/image/upload/v1789341877/mm-overseas/hero-purely-sourced.png"
                alt="Purely sourced edible oil with raw mustard seeds, sesame and groundnut kernels"
                className="h-64 w-full object-cover sm:h-[28rem]"
              />
            </div>
            <div className="absolute -right-2 -top-6 hidden rounded-xl border border-line bg-white/95 p-3 shadow-lg backdrop-blur-sm sm:block">
              <img
                src="https://res.cloudinary.com/dukbkeh4p/image/upload/v1789341473/mm-overseas/logo.png"
                alt="MM OVERSEAS Brand Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading eyebrow="Who we are" title="From Quality Seeds to Quality Oils">
              <p>
                At MM OVERSEAS, we believe better oil begins with better seeds. Selected oilseeds are procured with care
                and processed in a modern, hygienic environment to produce quality edible oils and valuable oil cakes.
              </p>
            </SectionHeading>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base">
              Our work spans the oilseed value chain — from procurement through cleaning, extraction and finished
              production — so that each stage supports the next.
            </p>
            <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
              {stages.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-forest font-medium">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-mustard" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line shadow-sm">
            <img
              src="https://res.cloudinary.com/dukbkeh4p/image/upload/v1789363326/mm-overseas/quality-seeds-to-oils.png"
              alt="Quality oilseeds with golden edible oil — from selected seeds to carefully processed oils"
              className="h-full min-h-[260px] sm:min-h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading eyebrow="Edible oils" title="Our Products" align="center">
            <p>
              A focused range of edible oils produced from carefully selected mustard, sesame and groundnut oilseeds.
            </p>
          </SectionHeading>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-4">
            {oils.map((oil) => (
              <ProductCard key={oil.slug} image={oil.image} name={oil.name} description={oil.short} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading eyebrow="Oil cakes" title="Value Beyond Oil">
          <p>
            Our processing also produces quality oil cakes, allowing productive use of oilseed residues and serving
            customers across the oilseed value chain.
          </p>
        </SectionHeading>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {cakes.map((cake) => (
            <article
              key={cake.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-white shadow-[0_4px_20px_rgba(6,75,60,0.04)] transition duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-[0_12px_32px_rgba(6,75,60,0.1)]"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-warm/40">
                  <img
                    src={cake.image}
                    alt={`${cake.name} - MM OVERSEAS byproduct for cattle feed & agriculture`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 rounded bg-orange/90 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs sm:text-xs">
                    Cattle Feed
                  </span>
                </div>
                <div className="p-3 sm:p-5">
                  <h3 className="font-serif text-base font-semibold leading-tight text-forest sm:text-xl lg:text-2xl">
                    {cake.name}
                  </h3>
                  <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-sm leading-relaxed text-muted line-clamp-2">
                    {cake.description}
                  </p>
                </div>
              </div>
              <div className="px-3 pb-3 sm:px-5 sm:pb-5">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-orange transition hover:text-forest"
                >
                  View Spec <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream-warm">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading eyebrow="Sourcing" title="Quality Starts at Procurement">
            <p>
              Quality begins long before processing. Our procurement approach focuses on sourcing good-quality oilseeds
              from reliable sources, with attention to cleanliness, condition and suitability for manufacturing.
            </p>
          </SectionHeading>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 md:grid-cols-3">
            {procured.map((item, idx) => (
              <ProcurementCard
                key={item.name}
                {...item}
                className={idx === 2 ? 'col-span-2 md:col-span-1' : ''}
              />
            ))}
          </div>
          <div className="mt-8 sm:mt-10">
            <Link
              to="/procurement-quality"
              className="inline-flex w-full justify-center rounded-md bg-forest px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-forest-deep sm:w-auto"
            >
              Know More About Our Procurement
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-2xl border border-line bg-white px-5 py-10 shadow-xs sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">Brand philosophy</p>
          <h2 className="mt-3 font-serif text-3xl text-forest sm:mt-4 sm:text-5xl">Our Promise: Achha Khao, Achha Khilao</h2>
          <p className="mt-4 max-w-3xl font-serif text-xl italic leading-snug text-forest-soft sm:mt-6 sm:text-2xl">
            Achha Khao, Achha Khilao — choose good food for yourself, and share it with those around you.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-base">
            For us, quality is personal. We aim to make products we would be comfortable serving to our own families,
            and we extend the same standard of care to customers, partners and everyone associated with our business.
          </p>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard index="01" title="Quality First">
              Careful seed selection and disciplined processing sit at the centre of every product we make.
            </ValueCard>
            <ValueCard index="02" title="Clean & Hygienic Processing">
              Cleanliness is treated as a manufacturing standard, not an afterthought.
            </ValueCard>
            <ValueCard index="03" title="Trust & Transparency">
              We prefer clear communication and dependable working relationships over short-term advantage.
            </ValueCard>
            <ValueCard index="04" title="Shared Growth">
              Progress should include our people, dealers, suppliers and customers — not a few at the expense of others.
            </ValueCard>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading eyebrow="Why MM OVERSEAS" title="A Measured Approach to Quality" />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
            {why.map((item, i) => (
              <article key={item.title} className="rounded-xl border border-line p-5 sm:p-6 transition hover:border-forest/30">
                <p className="font-serif text-3xl text-mustard">0{i + 1}</p>
                <h3 className="mt-3 font-serif text-lg sm:text-xl text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for Quality Edible Oils or Oilseed Products?"
        text="Connect with MM OVERSEAS for product enquiries, procurement requirements and business partnerships."
        primary={{ to: '/contact', label: 'Contact Us' }}
        secondary={{ to: '/contact', label: 'Send Enquiry' }}
      />
    </>
  )
}
