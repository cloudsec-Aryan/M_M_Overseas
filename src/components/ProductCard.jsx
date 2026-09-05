import { Link } from 'react-router-dom'

export default function ProductCard({ image, name, description, to = '/products', cta = 'Learn More' }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-line bg-white shadow-[0_10px_30px_rgba(6,75,60,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(6,75,60,0.08)]">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl text-forest">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
        <Link to={to} className="mt-5 inline-flex text-sm font-semibold text-orange transition hover:text-forest">
          {cta} →
        </Link>
      </div>
    </article>
  )
}
