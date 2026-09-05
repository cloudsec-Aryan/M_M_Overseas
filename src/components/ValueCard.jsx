export default function ValueCard({ index, title, children }) {
  return (
    <article className="rounded-xl border border-line bg-white p-7 shadow-[0_8px_24px_rgba(6,75,60,0.04)]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{index}</p>
      <h3 className="mt-3 font-serif text-2xl text-forest">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{children}</p>
    </article>
  )
}
