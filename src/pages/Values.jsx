import Seo from '../components/Seo'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import ValueCard from '../components/ValueCard'
import CTASection from '../components/CTASection'

const values = [
  {
    index: '01',
    title: 'Quality for Our Families',
    text: 'We aim to make products with the same care and quality expectations that we would want for our own family.',
  },
  {
    index: '02',
    title: 'Our People Matter',
    text: 'Workers and team members are an important part of our organisation. People who work with us should be treated with respect and dignity, and regarded as part of a larger business family.',
  },
  {
    index: '03',
    title: 'Fair Dealer Relationships',
    text: 'Our approach to dealer relationships is built around trust, stability and mutual growth. Healthy business relationships should create opportunity rather than unnecessary internal competition.',
  },
  {
    index: '04',
    title: 'Shared Growth',
    text: 'Everyone’s progress matters. We aim to grow together with our employees, dealers, suppliers, customers and business partners.',
  },
  {
    index: '05',
    title: 'Quality Over Shortcuts',
    text: 'We believe long-term trust is more valuable than short-term gains, and we prefer disciplined quality over hurried convenience.',
  },
]

export default function Values() {
  return (
    <>
      <Seo
        title="Our Values | Achha Khao, Achha Khilao | MM OVERSEAS"
        description="MM OVERSEAS is guided by Achha Khao, Achha Khilao — a philosophy of quality for families, respect for people, fair partnerships and shared growth."
      />
      <HeroSection
        compact
        image="/images/family-food.jpg"
        eyebrow="Our values"
        title="Our Values Define How We Work"
        subtitle="Quality is not only a manufacturing outcome. It is a way of choosing what we would serve ourselves, and what we are prepared to share with others."
      />

      <section className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">Brand philosophy</p>
        <h2 className="mt-6 font-serif text-5xl leading-tight text-forest sm:text-7xl">Achha Khao, Achha Khilao</h2>
        <div className="mx-auto mt-6 h-px w-24 bg-mustard" />
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted">
          We believe that quality is not only about producing a product; it is about creating something we can
          confidently choose for ourselves, our families and the people we care about.
        </p>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {values.map((v) => (
              <ValueCard key={v.index} index={v.index} title={v.title}>
                {v.text}
              </ValueCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src="/images/partners-growing-together.jpg"
            alt="Business partners shaking hands over edible oil and oilseeds — growing together"
            className="min-h-[360px] w-full rounded-2xl object-cover"
          />
          <div>
            <SectionHeading eyebrow="Dealer policy" title="Growing Together With Our Partners">
              <p>
                We value long-term relationships with our dealers and business partners. Our approach is based on
                fairness, mutual respect and sustainable growth rather than unnecessary competition.
              </p>
            </SectionHeading>
            <p className="mt-6 text-base leading-relaxed text-muted">
              This is a statement of company philosophy, not a contractual guarantee. Commercial terms, territories and
              appointment details are discussed individually and documented separately as required.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s grow with care"
        text="If our values align with how you work, we would be glad to discuss products, procurement or partnership."
        primary={{ to: '/contact', label: 'Start a Conversation' }}
        secondary={{ to: '/about', label: 'About the Company' }}
      />
    </>
  )
}
