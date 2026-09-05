import Seo from '../components/Seo'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'

const areas = [
  {
    title: 'Oilseed Procurement',
    text: 'Selected mustard seeds, groundnut kernels and sesame seeds are sourced with attention to quality and handling.',
  },
  {
    title: 'Oilseed Processing',
    text: 'Raw materials are cleaned and processed in a modern plant environment designed for organised, hygienic operations.',
  },
  {
    title: 'Edible Oil Manufacturing',
    text: 'Mustard oil, yellow mustard oil, sesame oil and groundnut oil are produced through controlled manufacturing practices.',
  },
  {
    title: 'Oil Cake Production',
    text: 'Oil cakes are produced as part of processing, supporting productive use of oilseed residues across the value chain.',
  },
  {
    title: 'Business Supply & Partnerships',
    text: 'We work with customers and partners who value consistent products, clear communication and long-term collaboration.',
  },
]

const timeline = [
  { n: '01', title: 'Source', text: 'Selected oilseeds are procured from suitable sources.' },
  { n: '02', title: 'Clean', text: 'Raw materials are handled and cleaned with attention to quality and hygiene.' },
  { n: '03', title: 'Process', text: 'Oilseeds are processed using controlled manufacturing practices.' },
  { n: '04', title: 'Produce', text: 'Edible oils and oil cakes are produced with a focus on consistency.' },
  { n: '05', title: 'Supply', text: 'Products are prepared for customers and business partners.' },
]

const gallery = [
  { src: '/images/kitchen.jpg', label: 'Clean working environment', caption: 'Placeholder — hygienic food-handling imagery pending plant photographs' },
  { src: '/images/storage.jpg', label: 'Organised handling', caption: 'Placeholder — organised storage imagery, not MM OVERSEAS premises' },
  { src: '/images/mustard-seeds.jpg', label: 'Oilseeds', caption: 'Mustard seeds and related oilseed materials' },
  { src: '/images/oil-pour.jpg', label: 'Edible oil', caption: 'Representative edible oil photography' },
  { src: '/images/harvest.jpg', label: 'Agricultural origin', caption: 'Representative agricultural imagery' },
  { src: '/images/mustard-field.jpg', label: 'Mustard crop', caption: 'Mustard / rapeseed field photography' },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us | MM OVERSEAS"
        description="MM OVERSEAS is an edible oil manufacturer and oilseed processor working with selected mustard, sesame and groundnut oilseeds."
      />
      <HeroSection
        compact
        image="/images/harvest.jpg"
        eyebrow="About MM OVERSEAS"
        title="Built Around Quality, Trust & Better Food"
        subtitle="MM OVERSEAS is an edible oil manufacturing and oilseed processing company working with selected oilseeds to produce edible oils and oil cakes."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="Our work" title="From procurement to finished products">
            <p>
              Our work begins with the procurement of selected oilseeds and continues through cleaning, processing, oil
              extraction and the production of oil cakes. Every stage is approached with attention to quality,
              cleanliness and consistency.
            </p>
          </SectionHeading>
          <p className="self-center text-base leading-relaxed text-muted">
            We do not treat manufacturing as a single isolated step. Procurement, hygiene, processing discipline and
            finished-product care are connected — because the character of the oil reflects the care taken before it
            reaches the bottle.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {areas.map((area, i) => (
            <article key={area.title} className="rounded-xl border border-line bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">0{i + 1}</p>
              <h3 className="mt-3 font-serif text-2xl text-forest">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow="Our plant" title="A Modern Processing Environment">
            <p>
              Our newly furnished plant has been developed with a strong focus on cleanliness, organised operations and
              efficient processing. We maintain a systematic approach across procurement, cleaning, processing, storage
              and handling.
            </p>
          </SectionHeading>
          <p className="mt-6 max-w-3xl text-sm text-muted">
            Photographs below include representative industry imagery. Actual MM OVERSEAS plant photographs can replace
            these placeholders when available.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <figure key={item.label} className="overflow-hidden rounded-xl border border-line bg-cream">
                <img src={item.src} alt={item.label} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="p-4">
                  <p className="font-medium text-forest">{item.label}</p>
                  <p className="mt-1 text-xs text-muted">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="Our approach" title="A Clear Path From Seed to Supply" />
        <ol className="mt-12 grid gap-6 md:grid-cols-5">
          {timeline.map((step) => (
            <li key={step.n} className="relative rounded-xl border border-line bg-white p-6">
              <p className="font-serif text-4xl text-mustard">{step.n}</p>
              <h3 className="mt-3 font-serif text-2xl text-forest">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTASection
        title="Speak with the MM OVERSEAS team"
        text="We welcome conversations about edible oils, oil cakes, oilseed procurement and long-term supply partnerships."
        primary={{ to: '/contact', label: 'Contact Us' }}
        secondary={{ to: '/products', label: 'View Products' }}
      />
    </>
  )
}
