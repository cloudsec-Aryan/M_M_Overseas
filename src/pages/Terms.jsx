import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { termsContent } from '../data/terms'
import { contactInfo } from '../data/contact'

export default function Terms() {
  const [lang, setLang] = useState('en')
  const content = termsContent[lang]
  const isHi = lang === 'hi'

  return (
    <>
      <Seo
        title="Terms & Conditions | MM OVERSEAS"
        description="Terms and conditions of MM OVERSEAS covering jurisdiction in Bhiwani, payment terms, vehicle dispatch and bargains through authorised brokers and channel partners."
      />

      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-soft to-forest-deep" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, #F4C400 0%, transparent 40%), radial-gradient(circle at 80% 10%, #F59A00 0%, transparent 35%)',
          }}
        />
        <div className="relative mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white p-2 shadow-lg sm:h-20 sm:w-20">
              <img src="/favicon-source.png" alt="MM OVERSEAS" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mustard">
                {isHi ? 'कानूनी जानकारी' : 'Legal Information'}
              </p>
              <h1 className="mt-2 font-serif text-4xl text-white sm:text-5xl">{content.title}</h1>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85">{content.intro}</p>

          <div
            className="mt-8 inline-flex rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-sm"
            role="group"
            aria-label={isHi ? 'भाषा चुनें' : 'Choose language'}
          >
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                lang === 'en' ? 'bg-mustard text-forest-deep shadow-sm' : 'text-white hover:bg-white/10'
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang('hi')}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                lang === 'hi' ? 'bg-mustard text-forest-deep shadow-sm' : 'text-white hover:bg-white/10'
              }`}
            >
              हिंदी
            </button>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: isHi ? 'क्षेत्राधिकार' : 'Jurisdiction',
                value: isHi ? 'भिवानी, हरियाणा' : 'Bhiwani, Haryana',
              },
              {
                label: isHi ? 'भुगतान' : 'Payment',
                value: isHi ? 'शर्तों के अनुसार' : 'As per agreed terms',
              },
              {
                label: isHi ? 'डिस्पैच' : 'Dispatch',
                value: isHi ? 'भुगतान के बाद' : 'After payment',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-line bg-white px-5 py-4 shadow-[0_8px_24px_rgba(6,75,60,0.04)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">{item.label}</p>
                <p className="mt-2 font-serif text-xl text-forest">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5" lang={isHi ? 'hi' : 'en'}>
            {content.sections.map((section, index) => (
              <article
                key={section.heading}
                className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-[0_10px_30px_rgba(6,75,60,0.04)] transition hover:border-forest/20 hover:shadow-[0_16px_40px_rgba(6,75,60,0.08)] sm:p-8"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-mustard via-orange to-forest opacity-80" />
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream font-serif text-lg text-forest ring-1 ring-line">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="font-serif text-2xl text-forest sm:text-3xl">{section.heading}</h2>
                    <p className="mt-3 text-base leading-relaxed text-muted">{section.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-forest/15 bg-forest px-6 py-8 text-cream sm:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mustard">
                  {isHi ? 'सहायता' : 'Need clarity?'}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85">{content.note}</p>
                <p className="mt-4 text-sm text-white/70">
                  {contactInfo.addressLine1}, {contactInfo.addressLine2}
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 rounded-md bg-mustard px-5 py-3 text-sm font-semibold text-forest-deep transition hover:bg-soft-orange"
              >
                {isHi ? 'संपर्क करें' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
