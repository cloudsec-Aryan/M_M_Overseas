import { Link } from 'react-router-dom'

export default function CTASection({ title, text, primary, secondary }) {
  return (
    <section className="bg-forest">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mustard">MM OVERSEAS</p>
        <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {primary && (
            <Link
              to={primary.to}
              className="rounded-md bg-mustard px-6 py-3 text-sm font-semibold text-forest-deep transition hover:bg-soft-orange"
            >
              {primary.label}
            </Link>
          )}
          {secondary && (
            <Link
              to={secondary.to}
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
