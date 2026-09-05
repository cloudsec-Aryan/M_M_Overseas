import { Outlet, useLocation } from 'react-router-dom'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import EnquiryPopup from './EnquiryPopup'
import Preloader from './Preloader'

const EnquiryContext = createContext(null)

export function useEnquiry() {
  const ctx = useContext(EnquiryContext)
  if (!ctx) throw new Error('useEnquiry must be used within Layout')
  return ctx
}

const POPUP_SESSION_KEY = 'mm-enquiry-auto-shown'

export default function Layout() {
  const { pathname } = useLocation()
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  const openEnquiry = useCallback(() => setEnquiryOpen(true), [])
  const closeEnquiry = useCallback(() => setEnquiryOpen(false), [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    let shown = false
    try {
      shown = sessionStorage.getItem(POPUP_SESSION_KEY) === '1'
    } catch {
      shown = false
    }
    if (shown) return undefined

    const timer = window.setTimeout(() => {
      setEnquiryOpen(true)
      try {
        sessionStorage.setItem(POPUP_SESSION_KEY, '1')
      } catch {
        /* ignore */
      }
    }, 15000)

    return () => window.clearTimeout(timer)
  }, [])

  const value = useMemo(() => ({ openEnquiry, closeEnquiry }), [openEnquiry, closeEnquiry])

  return (
    <EnquiryContext.Provider value={value}>
      <div className="min-h-screen bg-cream text-ink">
        <Preloader />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-forest"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="page-enter">
          <Outlet />
        </main>
        <Footer />
        <EnquiryPopup open={enquiryOpen} onClose={closeEnquiry} />
      </div>
    </EnquiryContext.Provider>
  )
}
