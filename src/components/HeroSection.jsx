import { Link } from 'react-router-dom'

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  image,
  overlay = true,
  compact = false,
  children,
}) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? 'min-h-[42vh] sm:min-h-[52vh]' : 'min-h-[72vh] sm:min-h-[85vh]'} flex items-end`}
    >
      <img
        src={image}
        alt={eyebrow ? `${eyebrow} - MM OVERSEAS` : 'MM OVERSEAS Edible Oil Manufacturing'}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest/75 to-forest/30 sm:bg-gradient-to-r" />
      )}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-mustard sm:mb-4">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl font-serif text-3xl leading-[1.15] text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-base lg:text-lg">{subtitle}</p>}
        {(primary || secondary) && (
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
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
                className="w-full rounded-md border border-white/40 bg-white/10 px-6 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
