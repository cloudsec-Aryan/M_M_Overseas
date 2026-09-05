import { useState } from 'react'
import { contactInfo } from '../data/contact'

const types = [
  'Business Enquiries',
  'Product Enquiries',
  'Procurement Enquiries',
  'Dealer / Partnership Enquiries',
]

export default function ContactForm({ compact = false, idPrefix = '', onSubmitted }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={`rounded-xl border border-line bg-cream text-center ${compact ? 'p-6' : 'p-8'}`}>
        <p className="font-serif text-3xl text-forest">Thank you</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Your enquiry has been noted. This form is currently a front-end prototype. For a quicker response, call{' '}
          <a href={contactInfo.phoneHref} className="font-medium text-forest">
            {contactInfo.phone}
          </a>{' '}
          or email{' '}
          <a href={contactInfo.emailHref} className="font-medium text-forest">
            {contactInfo.email}
          </a>
          .
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-orange"
          onClick={() => {
            if (onSubmitted) {
              onSubmitted()
              return
            }
            setSubmitted(false)
          }}
        >
          {onSubmitted ? 'Close' : 'Send another enquiry'}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? 'space-y-4' : 'space-y-5'} noValidate>
      <div className={`grid gap-4 ${compact ? '' : 'gap-5'} sm:grid-cols-2`}>
        <Field label="Name" id={`${idPrefix}name`} required compact={compact} />
        <Field label="Company Name" id={`${idPrefix}company`} compact={compact} />
        <Field label="Phone Number" id={`${idPrefix}phone`} type="tel" required compact={compact} />
        <Field label="Email" id={`${idPrefix}email`} type="email" required compact={compact} />
      </div>
      <div>
        <label htmlFor={`${idPrefix}enquiryType`} className="mb-2 block text-sm font-medium text-forest">
          Enquiry Type
        </label>
        <select
          id={`${idPrefix}enquiryType`}
          name="enquiryType"
          required
          className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm outline-none ring-forest/20 focus:ring-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select an enquiry type
          </option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`${idPrefix}message`} className="mb-2 block text-sm font-medium text-forest">
          Message
        </label>
        <textarea
          id={`${idPrefix}message`}
          name="message"
          required
          rows={compact ? 4 : 5}
          className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm outline-none ring-forest/20 focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-deep"
      >
        Submit Enquiry
      </button>
    </form>
  )
}

function Field({ label, id, type = 'text', required, compact }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-forest">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className={`w-full rounded-md border border-line bg-white px-4 text-sm outline-none ring-forest/20 focus:ring-2 ${
          compact ? 'py-2.5' : 'py-3'
        }`}
      />
    </div>
  )
}
