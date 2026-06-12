import { FaWhatsapp } from 'react-icons/fa6'
import { siteConfig } from '../data/siteConfig'

export default function FloatingButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.phoneRaw}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white text-2xl shadow-lg shadow-green-500/40 hover:scale-110 hover:bg-green-600 transition-all duration-300 animate-bounce"
    >
      <FaWhatsapp />
    </a>
  )
}
