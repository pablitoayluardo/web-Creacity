import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WHATSAPP_FLOAT_URL =
  'https://wa.me/593999999999?text=Hola%20CreaCity%2C%20necesito%20asesor%C3%ADa%20para%20un%20pedido.'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <a
        href={WHATSAPP_FLOAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#16E535] px-5 py-3 text-xs sm:text-sm font-extrabold text-slate-950 shadow-xl shadow-[#16E535]/30 transition-transform hover:scale-105"
      >
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp Directo</span>
      </a>
    </div>
  )
}
