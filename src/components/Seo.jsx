import { useEffect } from 'react'

const defaultTitle = 'Mmoverseasindia ! Edible oil | Edible Oil Manufacturer & Oilseed Processing'
const defaultDescription =
  'MM OVERSEAS is a premier edible oil manufacturing and oilseed processing company producing premium mustard oil, yellow mustard oil, sesame oil, groundnut oil and oil cakes in Devsar, Bhiwani, Haryana.'
const defaultKeywords =
  'Mustard Oil Manufacturer, Edible Oil Manufacturer, Mustard Oil, Yellow Mustard Oil, Sesame Oil, Groundnut Oil, Mustard Cake, Sesame Cake, Groundnut Cake, Oilseed Procurement, Mustard Seed Procurement, Sesame Seed Procurement, Groundnut Procurement, Oilseed Processing, MM Overseas Bhiwani, Edible Oil Haryana'

export default function Seo({
  title,
  description,
  keywords,
  canonicalPath,
  image = 'https://res.cloudinary.com/dukbkeh4p/image/upload/v1789341473/mm-overseas/logo.png',
  schema,
}) {
  useEffect(() => {
    const finalTitle = title || defaultTitle
    const finalDesc = description || defaultDescription
    const finalKeywords = keywords || defaultKeywords

    // Document title
    document.title = finalTitle

    // Helper to set or create meta tag
    const setMeta = (selector, attr, val) => {
      let el = document.querySelector(selector)
      if (!el && val) {
        el = document.createElement('meta')
        if (selector.includes('property=')) {
          const prop = selector.match(/property="([^"]+)"/)?.[1]
          if (prop) el.setAttribute('property', prop)
        } else if (selector.includes('name=')) {
          const nm = selector.match(/name="([^"]+)"/)?.[1]
          if (nm) el.setAttribute('name', nm)
        }
        document.head.appendChild(el)
      }
      if (el && val) el.setAttribute(attr, val)
    }

    // Standard meta
    setMeta('meta[name="description"]', 'content', finalDesc)
    setMeta('meta[name="keywords"]', 'content', finalKeywords)

    // Canonical link
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.mmoverseasindia.com'
    const path = canonicalPath || (typeof window !== 'undefined' ? window.location.pathname : '/')
    const fullUrl = `${origin}${path}`

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', fullUrl)

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', finalTitle)
    setMeta('meta[property="og:description"]', 'content', finalDesc)
    setMeta('meta[property="og:url"]', 'content', fullUrl)
    setMeta('meta[property="og:image"]', 'content', image.startsWith('http') ? image : `${origin}${image}`)

    // Twitter
    setMeta('meta[name="twitter:title"]', 'content', finalTitle)
    setMeta('meta[name="twitter:description"]', 'content', finalDesc)
    setMeta('meta[name="twitter:image"]', 'content', image.startsWith('http') ? image : `${origin}${image}`)

    // Dynamic Schema script if provided
    let schemaScript = document.getElementById('dynamic-page-schema')
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script')
        schemaScript.id = 'dynamic-page-schema'
        schemaScript.type = 'application/ld+json'
        document.head.appendChild(schemaScript)
      }
      schemaScript.textContent = JSON.stringify(schema)
    } else if (schemaScript) {
      schemaScript.remove()
    }
  }, [title, description, keywords, canonicalPath, image, schema])

  return null
}
