export default function SectionHeading({ eyebrow, title, children, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange">{eyebrow}</p>
      )}
      <h2 className="font-serif text-4xl leading-tight text-forest sm:text-5xl">{title}</h2>
      {children && <div className="mt-5 text-base leading-relaxed text-muted">{children}</div>}
    </div>
  )
}
