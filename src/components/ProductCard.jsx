import { Link } from 'react-router-dom'

export default function ProductCard({ image, name, description, to = '/products', cta = 'Learn More' }) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-white shadow-[0_4px_20px_rgba(6,75,60,0.04)] transition duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-[0_12px_32px_rgba(6,75,60,0.1)]">
      <div>
        <div className="relative aspect-[4/3] overflow-hidden bg-cream-warm/40">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute top-2 left-2 rounded bg-forest/90 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs sm:text-xs">
            100% Pure
          </span>
        </div>
        <div className="p-3 sm:p-5">
          <h3 className="font-serif text-base font-semibold leading-tight text-forest sm:text-xl lg:text-2xl">
            {name}
          </h3>
          <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-sm leading-relaxed text-muted line-clamp-2 sm:line-clamp-3">
            {description}
          </p>
        </div>
      </div>
      <div className="px-3 pb-3 sm:px-5 sm:pb-5">
        <Link
          to={to}
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-orange transition hover:text-forest"
        >
          {cta} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
