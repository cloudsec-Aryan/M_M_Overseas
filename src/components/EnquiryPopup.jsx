import { useEffect, useId, useRef } from 'react'
import ContactForm from './ContactForm'

export default function EnquiryPopup({ open, onClose }) {
  const titleId = useId()
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-forest-deep/60 backdrop-blur-xs"
        aria-label="Close enquiry popup"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-t-3xl sm:rounded-2xl border border-line bg-white shadow-[0_30px_80px_rgba(6,75,60,0.25)]"
      >
        <div className="mx-auto mt-2.5 h-1 w-12 rounded-full bg-forest/20 sm:hidden" />
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-line bg-cream/95 px-5 py-3.5 backdrop-blur-md sm:px-7 sm:py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">MM OVERSEAS</p>
            <h2 id={titleId} className="mt-1 font-serif text-2xl sm:text-3xl text-forest">
              Send an Enquiry
            </h2>
            <p className="mt-0.5 text-xs sm:text-sm text-muted">
              Product, procurement or partnership — we would be glad to hear from you.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-white text-forest transition hover:bg-forest hover:text-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="px-5 py-5 sm:px-7 sm:py-6">
          <ContactForm compact idPrefix="popup-" onSubmitted={onClose} />
        </div>
      </div>
    </div>
  )
}
