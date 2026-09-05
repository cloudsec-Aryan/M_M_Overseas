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
      className={`relative overflow-hidden ${compact ? 'min-h-[52vh]' : 'min-h-[88vh]'} flex items-end`}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/88 via-forest/70 to-forest/25" />
      )}
      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-mustard">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl font-serif text-4xl leading-[1.12] text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{subtitle}</p>}
        {(primary || secondary) && (
          <div className="mt-8 flex flex-wrap gap-3">
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
                className="rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
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
