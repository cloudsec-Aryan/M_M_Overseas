import { contactInfo } from '../data/contact'
import { useEnquiry } from './Layout'

export default function MobileQuickBar() {
  const { openEnquiry } = useEnquiry()

  const waMessage = encodeURIComponent(
    'Hello MM OVERSEAS, I would like to enquire about your edible oils and oilseed products.'
  )
  const waHref = `https://wa.me/91${contactInfo.phone}?text=${waMessage}`

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-3 inset-x-3 z-40 md:hidden animate-fade-up"
    >
      <div className="mx-auto max-w-md rounded-2xl border border-white/20 bg-forest-deep/95 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="grid grid-cols-3 gap-1.5">
          {/* Direct Phone Call */}
          <a
            href={contactInfo.phoneHref}
            className="flex flex-col items-center justify-center gap-1 rounded-xl bg-white/10 px-2 py-2 text-[11px] font-semibold text-cream transition active:scale-95 active:bg-white/20"
            aria-label={`Call MM OVERSEAS at ${contactInfo.phone}`}
          >
            <svg
              className="h-4 w-4 text-mustard"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call Now</span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 rounded-xl bg-emerald-700/80 px-2 py-2 text-[11px] font-semibold text-white transition active:scale-95 active:bg-emerald-600"
            aria-label="Chat with MM OVERSEAS on WhatsApp"
          >
            <svg
              className="h-4 w-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.04c-.24.68-1.4 1.25-1.92 1.33-.51.08-1.17.11-3.77-.96-3.32-1.37-5.46-4.74-5.63-4.96-.16-.22-1.35-1.8-1.35-3.43 0-1.63.85-2.43 1.15-2.76.3-.33.66-.41.88-.41.22 0 .44 0 .63.01.2.01.47-.08.73.55.27.65.92 2.25 1 2.42.08.17.13.37.02.59-.11.22-.17.36-.33.55-.16.19-.34.42-.49.56-.16.16-.33.34-.14.67.19.33.84 1.38 1.8 2.24 1.24 1.1 2.29 1.44 2.62 1.6.33.16.52.14.71-.08.2-.22.84-.98 1.06-1.32.22-.34.44-.28.74-.17.3.11 1.91.9 2.24 1.06.33.16.55.24.63.38.08.14.08.82-.16 1.5z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Instant Enquiry Modal */}
          <button
            type="button"
            onClick={openEnquiry}
            className="flex flex-col items-center justify-center gap-1 rounded-xl bg-mustard px-2 py-2 text-[11px] font-bold text-forest-deep shadow-sm transition active:scale-95 active:bg-orange"
            aria-label="Open enquiry form"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </aside>
  )
}
