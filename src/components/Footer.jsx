export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="h-1.5 w-full bg-gradient-to-r from-[#FDB813] via-[#16E535] to-[#38BDF8]" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Identidad con Logo Grande sobre fondo limpio */}
          <div>
            <img
              src="/logo-creacity.png"
              alt="CreaCity Logo"
              className="h-20 w-auto object-contain"
            />
            <p className="mt-3 text-xs text-slate-600 leading-relaxed">
              Laboratorio de personalización publicitaria, estampado textil, corte/grabado digital y venta de equipos e insumos.
            </p>
          </div>

          {/* Columna 2: Menú Rápido */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navegación
            </h3>
            <ul className="mt-3 space-y-2 text-xs font-medium">
              <li>
                <a href="#inicio" className="hover:text-[#E09F00] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#0284C7] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-[#E09F00] transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-[#16A34A] transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#academia" className="hover:text-[#E09F00] transition-colors">
                  Aprende y Emprende
                </a>
              </li>
              <li>
                <a href="#cotiza" className="hover:text-[#16A34A] transition-colors">
                  Cotiza
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Especialidades */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Especialidades
            </h3>
            <ul className="mt-3 space-y-2 text-xs font-medium">
              <li>
                <a href="#servicios" className="hover:text-[#0284C7] transition-colors">
                  DTF Textil por Metro (60 cm)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#0284C7] transition-colors">
                  DTF UV para Rígidos
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#E11D48] transition-colors">
                  Sublimación y Merchandising
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#9333EA] transition-colors">
                  Impresión 3D y Plotter de Corte
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Atención */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Atención Personalizada
            </h3>
            <ul className="mt-3 space-y-2 text-xs font-medium">
              <li className="flex items-start gap-2">
                <span>💬</span>
                <span>Cotizaciones inmediatas vía WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🎨</span>
                <span>Diseñadores propios para vectorización</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🚀</span>
                <span>Talleres prácticos “Aprende y Emprende”</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {currentYear} CreaCity. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2 font-semibold text-slate-700">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FDB813]" />
            <span>Crea</span>
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#16E535]" />
            <span>City — Diseño y Personalización a tu alcance</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
