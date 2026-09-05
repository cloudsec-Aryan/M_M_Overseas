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
        title="MM OVERSEAS | Edible Oil Manufacturer & Oilseed Processing"
        description="MM OVERSEAS is an edible oil manufacturing and oilseed processing company producing mustard oil, yellow mustard oil, sesame oil, groundnut oil and oil cakes."
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/mustard-flowers.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/92 to-cream/35" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">
              Edible oil manufacturer • Oilseed processing
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.08] text-forest sm:text-6xl lg:text-[4.4rem]">
              Procured From Trusted Sourced.
              <br />
              Carefully Processed.
              <br />
              Made for Better Living.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              MM OVERSEAS is an edible oil manufacturing and oilseed processing company focused on quality oilseeds,
              hygienic processing and consistent food products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="rounded-md bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-deep"
              >
                Explore Our Products
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-forest/20 bg-white px-6 py-3 text-sm font-semibold text-forest transition hover:border-forest"
              >
                Talk to Us
              </Link>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-forest/70">
              Oilseed Procurement • Modern Processing • Quality Focused
            </p>
            <img src="/logo.png" alt="" className="mt-6 h-16 w-auto sm:hidden" />
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_60px_rgba(6,75,60,0.12)]">
              <img
                src="/images/hero-purely-sourced.jpg"
                alt="Golden edible oil with mustard seeds, sesame seeds and groundnuts"
                className="h-72 w-full object-cover sm:h-[28rem]"
              />
            </div>
            <div className="absolute -right-2 -top-6 hidden rounded-xl border border-line bg-white/95 p-3 shadow-lg sm:block">
              <img src="/logo.png" alt="MM OVERSEAS" className="h-16 w-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we are" title="From Quality Seeds to Quality Oils">
              <p>
                At MM OVERSEAS, we believe better oil begins with better seeds. Selected oilseeds are procured with care
                and processed in a modern, hygienic environment to produce quality edible oils and valuable oil cakes.
              </p>
            </SectionHeading>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              Our work spans the oilseed value chain — from procurement through cleaning, extraction and finished
              production — so that each stage supports the next.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {stages.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-forest">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-mustard" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line">
            <img
              src="/images/quality-seeds-to-oils.jpg"
              alt="Quality oilseeds with golden edible oil — from selected seeds to carefully processed oils"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow="Edible oils" title="Our Products" align="center">
            <p>
              A focused range of edible oils produced from carefully selected mustard, sesame and groundnut oilseeds.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {oils.map((oil) => (
              <ProductCard key={oil.slug} image={oil.image} name={oil.name} description={oil.short} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="Oil cakes" title="Value Beyond Oil">
          <p>
            Our processing also produces quality oil cakes, allowing productive use of oilseed residues and serving
            customers across the oilseed value chain.
          </p>
        </SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cakes.map((cake) => (
            <article key={cake.slug} className="overflow-hidden rounded-xl border border-line bg-white">
              <img src={cake.image} alt={cake.name} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-serif text-2xl text-forest">{cake.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream-warm">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow="Sourcing" title="Quality Starts at Procurement">
            <p>
              Quality begins long before processing. Our procurement approach focuses on sourcing good-quality oilseeds
              from reliable sources, with attention to cleanliness, condition and suitability for manufacturing.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {procured.map((item) => (
              <ProcurementCard key={item.name} {...item} />
            ))}
          </div>
          <Link
            to="/procurement-quality"
            className="mt-10 inline-flex rounded-md bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-deep"
          >
            Know More About Our Procurement
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-2xl border border-line bg-white px-6 py-12 sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">Brand philosophy</p>
          <h2 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">Our Promise: Achha Khao, Achha Khilao</h2>
          <p className="mt-6 max-w-3xl font-serif text-2xl italic leading-snug text-forest-soft">
            Achha Khao, Achha Khilao — choose good food for yourself, and share it with those around you.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
            For us, quality is personal. We aim to make products we would be comfortable serving to our own families,
            and we extend the same standard of care to customers, partners and everyone associated with our business.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow="Why MM OVERSEAS" title="A Measured Approach to Quality" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {why.map((item, i) => (
              <article key={item.title} className="rounded-xl border border-line p-6">
                <p className="font-serif text-3xl text-mustard">0{i + 1}</p>
                <h3 className="mt-3 font-serif text-xl text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
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
