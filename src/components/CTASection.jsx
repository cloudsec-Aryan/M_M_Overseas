import { Link } from 'react-router-dom'

export default function CTASection({ title, text, primary, secondary }) {
  return (
    <section className="bg-forest">
      <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mustard">MM OVERSEAS</p>
        <h2 className="mt-3 font-serif text-2xl sm:text-4xl lg:text-5xl text-white">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base">{text}</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center">
          {primary && (
            <Link
              to={primary.to}
              className="w-full rounded-md bg-mustard px-6 py-3.5 text-center text-sm font-semibold text-forest-deep shadow-sm transition hover:bg-soft-orange sm:w-auto"
            >
              {primary.label}
            </Link>
          )}
          {secondary && (
            <Link
              to={secondary.to}
              className="w-full rounded-md border border-white/30 px-6 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
