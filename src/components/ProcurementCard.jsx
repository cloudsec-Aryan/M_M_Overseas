export default function ProcurementCard({ image, name, text }) {
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-white">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl text-forest">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
      </div>
    </article>
  )
}
