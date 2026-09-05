import { useEffect } from 'react'

const defaultTitle = 'MM OVERSEAS | Edible Oil Manufacturer & Oilseed Processing'
const defaultDescription =
  'MM OVERSEAS is an edible oil manufacturing and oilseed processing company producing mustard oil, yellow mustard oil, sesame oil, groundnut oil and oil cakes.'

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title || defaultTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description || defaultDescription)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title || defaultTitle)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description || defaultDescription)
  }, [title, description])

  return null
}
