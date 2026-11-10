import { useState } from 'react'
import MainLayout from './layouts/MainLayout'
import Hero from './components/Hero'
import servicios from './data/servicios.json'
import productos from './data/productos.json'

const WHATSAPP_NUMBER = '593999999999'

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export default function App() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')
  const [servicioCotizar, setServicioCotizar] = useState(servicios[0].titulo)
  const [cantidadMetros, setCantidadMetros] = useState(2)
  const [requiereDiseno, setRequiereDiseno] = useState(false)

  const categoriasCatalogo = ['Todos', 'Equipos', 'Accesorios e Insumos']

  const productosFiltrados =
    categoriaActiva === 'Todos'
      ? productos
      : productos.filter((item) => item.categoria === categoriaActiva)

  const mensajeCotizador = `Hola CreaCity, deseo cotizar:\n• Servicio: ${servicioCotizar}\n• Cantidad / Metros estimados: ${cantidadMetros}\n• ¿Requiere diseño o vectorización?: ${
    requiereDiseno ? 'Sí, necesito apoyo de diseño' : 'No, ya tengo archivo listo'
  }`

  const lineasProductosDestacados = [
    {
      titulo: 'Prensas Térmicas Multifunción',
      subtitulo: 'Combos 5 en 1, 8 en 1 y Planchas Planas',
      descripcion:
        'Equipos robustos con control digital de temperatura y presión uniforme para textil, gorras, tazas y platos.',
      color: '#FDB813',
      icono: '🔥',
    },
    {
      titulo: 'Plotters de Corte de Vinil',
      subtitulo: 'Corte de Contorno con Lector Óptico',
      descripcion:
        'Alta precisión milimétrica para vinil textil, vinil adhesivo publicitario, stickers troquelados y señalética.',
      color: '#16A34A',
      icono: '✂️',
    },
    {
      titulo: 'Insumos, Viniles y Repuestos',
      subtitulo: 'Cuchillas, Teflón, Tintas y Sustratos',
      descripcion:
        'Suministros garantizados: cuchillas de 30°/45°/60°, rollos de vinil, láminas de teflón y blancos sublimables.',
      color: '#0284C7',
      icono: '🎨',
    },
  ]

  return (
    <MainLayout>
      {/* SECCIÓN 1: Inicio (Carrusel Amplio + Franja Movible) */}
      <Hero />

      {/* SECCIÓN 2: Servicios -> Fondo Blanco Puro Limpio (#FFFFFF) */}
      <section
        id="servicios"
        className="scroll-mt-[108px] sm:scroll-mt-[124px] lg:scroll-mt-[140px] min-h-[calc(100vh-108px)] sm:min-h-[calc(100vh-124px)] lg:min-h-[calc(100vh-140px)] flex items-center border-b border-slate-200 bg-white py-12 sm:py-16"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
            <div>
              <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-700">
                Servicios Especializados
              </span>
              <h2 className="mt-2.5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Servicios de Personalización Digital
              </h2>
              <p className="mt-1.5 max-w-2xl text-xs sm:text-sm text-slate-600">
                Tecnología de última generación para marcas de ropa, emprendedores, agencias publicitarias y empresas.
              </p>
            </div>
            <p className="font-script text-xl sm:text-2xl text-amber-500">
              Calidad profesional en cada centímetro
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {servicios.map((servicio) => (
              <article
                key={servicio.id}
                style={{ borderTopColor: servicio.badgeColor }}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 border-t-4 bg-white p-5 sm:p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      style={{
                        backgroundColor: `${servicio.badgeColor}20`,
                        color: '#0F172A',
                        borderColor: servicio.badgeColor,
                      }}
                      className="rounded-full border px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider"
                    >
                      {servicio.categoria}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      Formato: <strong className="text-slate-800">{servicio.unidad}</strong>
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-slate-900">
                    {servicio.titulo}
                  </h3>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mt-0.5">
                    {servicio.subtitulo}
                  </p>

                  <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {servicio.descripcion}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                    {servicio.caracteristicas.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <span
                          style={{ color: servicio.badgeColor }}
                          className="font-bold"
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-4">
                  <span className="text-[11px] font-medium text-slate-500">
                    Entrega rápida y garantizada
                  </span>
                  <a
                    href={buildWhatsAppUrl(servicio.mensajeWhatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#16E535] px-4 py-2 text-xs font-bold text-slate-950 shadow-sm transition-transform hover:scale-105"
                  >
                    Cotizar Servicio
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: Productos -> Fondo Crema Ámbar Suave (#FFFBEB) */}
      <section
        id="productos"
        className="scroll-mt-[108px] sm:scroll-mt-[124px] lg:scroll-mt-[140px] min-h-[calc(100vh-108px)] sm:min-h-[calc(100vh-124px)] lg:min-h-[calc(100vh-140px)] flex items-center border-b border-amber-200/70 bg-[#FFFBEB] py-12 sm:py-16"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-amber-200/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-900">
              Líneas de Productos
            </span>
            <h2 className="mt-2.5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Maquinaria e Insumos para tu Taller
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Todo lo que necesitas para iniciar o escalar tu negocio de estampado, sublimación y corte digital con respaldo técnico.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-3">
            {lineasProductosDestacados.map((linea) => (
              <div
                key={linea.titulo}
                className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 text-xl">
                  {linea.icono}
                </div>
                <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-900">
                  {linea.titulo}
                </h3>
                <p
                  style={{ color: linea.color }}
                  className="mt-0.5 text-[11px] font-bold uppercase tracking-wide"
                >
                  {linea.subtitulo}
                </p>
                <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {linea.descripcion}
                </p>
                <a
                  href="#catalogo"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-amber-600"
                >
                  Ver modelos en catálogo &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: Catálogo -> Fondo Gris Pizarra Claro (#F1F5F9) */}
      <section
        id="catalogo"
        className="scroll-mt-[108px] sm:scroll-mt-[124px] lg:scroll-mt-[140px] min-h-[calc(100vh-108px)] sm:min-h-[calc(100vh-124px)] lg:min-h-[calc(100vh-140px)] flex items-center border-b border-slate-200 bg-[#F1F5F9] py-12 sm:py-16"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="inline-block rounded-full bg-slate-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FDB813]">
                Catálogo Oficial CreaCity
              </span>
              <h2 className="mt-2.5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Explora Nuestro Catálogo
              </h2>
              <p className="mt-1.5 max-w-2xl text-xs sm:text-sm text-slate-600">
                Filtra entre equipos profesionales y accesorios o consumibles disponibles para entrega inmediata.
              </p>
            </div>

            {/* Filtro de Categorías */}
            <div className="flex flex-wrap gap-2">
              {categoriasCatalogo.map((cat) => {
                const activa = categoriaActiva === cat
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategoriaActiva(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                      activa
                        ? 'bg-[#FDB813] text-slate-950 shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productosFiltrados.map((producto) => (
              <div
                key={producto.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold text-amber-900">
                      {producto.categoria}
                    </span>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                      {producto.disponibilidad}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-bold text-slate-900">
                    {producto.nombre}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {producto.descripcion}
                  </p>

                  <ul className="mt-3.5 space-y-1 border-t border-slate-100 pt-2.5">
                    {producto.especificaciones.map((esp) => (
                      <li
                        key={esp}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{esp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <a
                    href={buildWhatsAppUrl(producto.mensajeWhatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#FDB813] hover:text-slate-950"
                  >
                    Consultar Precio y Stock
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: Aprende y Emprende -> Fondo Azul Celeste Suave (#EFF6FF) */}
      <section
        id="academia"
        className="scroll-mt-[108px] sm:scroll-mt-[124px] lg:scroll-mt-[140px] min-h-[calc(100vh-108px)] sm:min-h-[calc(100vh-124px)] lg:min-h-[calc(100vh-140px)] flex items-center border-b border-blue-200/70 bg-[#EFF6FF] py-12 sm:py-16"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Tarjeta 1: Talleres "Aprende y Emprende" */}
            <div className="rounded-2xl border border-blue-200 bg-white p-6 sm:p-7 shadow-sm">
              <span className="inline-block rounded-full bg-amber-100 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-800">
                Academia CreaCity
              </span>
              <h2 className="mt-3 text-lg sm:text-xl font-bold text-slate-900">
                Talleres “Aprende y Emprende”
              </h2>
              <p className="mt-0.5 font-script text-xl sm:text-2xl text-emerald-600">
                Domina la personalización desde cero
              </p>
              <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Capacítate de forma 100% práctica en nuestro laboratorio. Aprende manejo de temperaturas, tiempos, plotters de corte, aplicación de DTF Textil y UV, sublimación y cálculo de costos para emprender con éxito.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                <li>✓ Práctica real con prensas térmicas, plotters y materiales incluidos</li>
                <li>✓ Asesoría para elegir tus primeros equipos e insumos</li>
                <li>✓ Cupos limitados con acompañamiento paso a paso</li>
              </ul>
              <div className="mt-5">
                <a
                  href={buildWhatsAppUrl(
                    'Hola CreaCity, quiero información sobre las próximas fechas de los talleres "Aprende y Emprende".'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FDB813] px-5 py-2.5 text-xs font-bold text-slate-950 shadow-sm transition-transform hover:scale-105"
                >
                  Reservar Cupo al Próximo Taller
                </a>
              </div>
            </div>

            {/* Tarjeta 2: Diseñadores Gráficos Propios */}
            <div className="rounded-2xl border border-blue-200 bg-white p-6 sm:p-7 shadow-sm">
              <span className="inline-block rounded-full bg-sky-100 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-sky-800">
                Soporte Creativo In-House
              </span>
              <h3 className="mt-3 text-lg sm:text-xl font-bold text-slate-900">
                Diseñadores Gráficos Propios
              </h3>
              <p className="mt-0.5 font-script text-xl sm:text-2xl text-sky-600">
                Tus archivos listos para imprimir sin estrés
              </p>
              <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                ¿Tu imagen está pixelada o necesitas vectorizar un logotipo para corte láser, plotter o DTF? Nuestro equipo de diseño prepara, depura y optimiza tus archivos para lograr un acabado perfecto.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                <li>✓ Vectorización profesional de logotipos e ilustraciones</li>
                <li>✓ Armado y optimización de metros lineales DTF sin desperdicio</li>
                <li>✓ Ajuste de perfiles de color y líneas de corte para láser y plotter</li>
              </ul>
              <div className="mt-5">
                <a
                  href={buildWhatsAppUrl(
                    'Hola CreaCity, necesito ayuda de sus diseñadores gráficos para vectorizar/preparar mi archivo.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#38BDF8] px-5 py-2.5 text-xs font-bold text-slate-950 shadow-sm transition-transform hover:scale-105"
                >
                  Solicitar Asesoría de Diseño
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: Cotiza -> Fondo Verde Menta Claro (#ECFDF5) */}
      <section
        id="cotiza"
        className="scroll-mt-[108px] sm:scroll-mt-[124px] lg:scroll-mt-[140px] min-h-[calc(100vh-108px)] sm:min-h-[calc(100vh-124px)] lg:min-h-[calc(100vh-140px)] flex items-center bg-[#ECFDF5] py-12 sm:py-16"
      >
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-200 bg-white p-6 sm:p-8 shadow-md">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <span className="inline-block rounded-full bg-emerald-100 px-3 py-0.5 text-[11px] font-bold text-emerald-800">
                  Cotizador Online Directo
                </span>
                <h2 className="mt-2.5 text-xl sm:text-2xl font-bold text-slate-900">
                  Cotiza tu Pedido en Segundos
                </h2>
                <p className="mt-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Selecciona el servicio, indica cuántos metros lineales o unidades necesitas y especifica si requieres apoyo de nuestros{' '}
                  <strong className="text-slate-900">diseñadores gráficos</strong> para preparar o vectorizar tus archivos.
                </p>

                <div className="mt-4 rounded-xl bg-slate-50 p-3.5 border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p className="font-bold text-slate-900">
                    📌 Recomendación para archivos DTF (Textil y UV):
                  </p>
                  <p>• Ancho de lienzo: 58 cm (en rollo de 60 cm).</p>
                  <p>• Formato sugerido: PDF o PNG a 300 DPI con fondo transparente.</p>
                  <p>• ¿No tienes el archivo listo? ¡Nosotros lo armamos por ti!</p>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3.5 rounded-xl bg-slate-50 p-5 border border-slate-200">
                <div>
                  <label
                    htmlFor="select-servicio"
                    className="block text-[11px] font-bold uppercase tracking-wider text-slate-700"
                  >
                    1. Selecciona el Servicio
                  </label>
                  <select
                    id="select-servicio"
                    value={servicioCotizar}
                    onChange={(e) => setServicioCotizar(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:border-[#FDB813] focus:outline-none"
                  >
                    {servicios.map((s) => (
                      <option key={s.id} value={s.titulo}>
                        {s.titulo} — {s.unidad}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="range-metros"
                    className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-700"
                  >
                    <span>2. Cantidad estimada (Metros / Unidades)</span>
                    <span className="rounded-md bg-[#FDB813] px-2 py-0.5 text-xs font-bold text-slate-950">
                      {cantidadMetros}
                    </span>
                  </label>
                  <input
                    id="range-metros"
                    type="range"
                    min="1"
                    max="50"
                    value={cantidadMetros}
                    onChange={(e) => setCantidadMetros(Number(e.target.value))}
                    className="mt-2 w-full accent-[#FDB813] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-medium text-slate-500">
                    <span>1 m / u</span>
                    <span>25 m / u</span>
                    <span>50+ m / u</span>
                  </div>
                </div>

                <div className="pt-0.5">
                  <label className="flex items-center gap-2.5 cursor-pointer rounded-xl border border-slate-200 bg-white p-3 hover:border-amber-400">
                    <input
                      type="checkbox"
                      checked={requiereDiseno}
                      onChange={(e) => setRequiereDiseno(e.target.checked)}
                      className="h-3.5 w-3.5 rounded accent-[#FDB813]"
                    />
                    <span className="text-xs text-slate-800 font-medium">
                      Necesito vectorización o armado de lienzo con diseñador de CreaCity
                    </span>
                  </label>
                </div>

                <a
                  href={buildWhatsAppUrl(mensajeCotizador)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-[#16E535] px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 shadow-sm transition-all hover:scale-[1.01]"
                >
                  Enviar Cotización a WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
