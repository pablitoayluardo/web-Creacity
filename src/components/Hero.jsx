import { useState, useEffect } from 'react'

const slides = [
  {
    id: 'sublimacion',
    titulo: 'Sublimación Profesional',
    subtitulo: 'Merchandising Corporativo y Textil Full Color',
    descripcion:
      'Personaliza tazas, jarros térmicos, tomatodos, camisetas deportivas, gorras y regalos empresariales con colores vibrantes de alta definición.',
    badge: 'Sublimación HD',
    color: '#FB7185',
    botonTexto: 'Cotizar Sublimación',
    imagen:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'impresion-3d',
    titulo: 'Impresión 3D y Prototipado',
    subtitulo: 'Precisión Digital para Piezas, Trofeos y Modelos',
    descripcion:
      'Materializamos tus ideas en 3D: prototipos funcionales, llaveros corporativos, letras corpóreas, trofeos y piezas especiales a medida.',
    badge: 'Laboratorio 3D',
    color: '#A855F7',
    botonTexto: 'Cotizar Proyecto 3D',
    imagen:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'dtf-textil',
    titulo: 'DTF Textil por Metro (60 cm)',
    subtitulo: 'Estampado sin Límite de Color para Algodón y Poliéster',
    descripcion:
      'Impresión por metros lineales con tinta blanca de alta opacidad, tacto suave, gran elasticidad y máxima resistencia al lavado.',
    badge: 'DTF Textil 60 cm',
    color: '#38BDF8',
    botonTexto: 'Cotizar Metros DTF',
    imagen:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'dtf-uv',
    titulo: 'DTF UV para Rígidos',
    subtitulo: 'Stickers Transferibles con Relieve Táctil y Barniz UV',
    descripcion:
      'Adherencia extrema en frío sobre acrílico, vidrio, metal, madera y plástico. Acabado brillante 3D resistente al agua y rayaduras.',
    badge: 'DTF UV Rígidos',
    color: '#FDB813',
    botonTexto: 'Cotizar DTF UV',
    imagen:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'plotter-corte',
    titulo: 'Plotter de Corte y Viniles',
    subtitulo: 'Equipos de Alta Exactitud, Repuestos e Insumos',
    descripcion:
      'Venta de plotters con lector óptico, cuchillas de repuesto, rollos de vinil textil/adhesivo y servicio de troquelado Print & Cut.',
    badge: 'Equipos & Corte',
    color: '#16E535',
    botonTexto: 'Ver Equipos e Insumos',
    imagen:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=85',
  },
]

const marqueeItems = [
  { label: 'Sublimación Corporativa', tag: 'Full Color', color: '#FB7185', href: '#servicios' },
  { label: 'Impresión 3D & Corte Láser', tag: 'Alta Precisión', color: '#A855F7', href: '#servicios' },
  { label: 'DTF Textil por Metro', tag: 'Ancho 60 cm', color: '#38BDF8', href: '#cotiza' },
  { label: 'DTF UV para Rígidos', tag: 'Barniz Relieve 3D', color: '#FDB813', href: '#cotiza' },
  { label: 'Plotters de Corte de Vinil', tag: 'Equipos en Stock', color: '#16E535', href: '#catalogo' },
  { label: 'Prensas Térmicas Multifunción', tag: 'Combos 5 en 1 / 8 en 1', color: '#FDB813', href: '#catalogo' },
  { label: 'Diseñadores Gráficos Propios', tag: 'Vectorización en Tienda', color: '#38BDF8', href: '#academia' },
  { label: 'Talleres Aprende y Emprende', tag: '100% Prácticos', color: '#16E535', href: '#academia' },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const active = slides[currentSlide]

  return (
    <section
      id="inicio"
      className="w-full bg-white scroll-mt-[108px] sm:scroll-mt-[124px] lg:scroll-mt-[140px]"
    >
      {/* CARRUSEL AMPLIO DE ANCHO COMPLETO (Estilo Betallic) */}
      <div className="relative h-[440px] sm:h-[520px] lg:h-[580px] w-full overflow-hidden bg-slate-900">
        {slides.map((slide, index) => {
          const isCurrent = index === currentSlide
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.imagen}
                alt={slide.titulo}
                className="h-full w-full object-cover"
              />
              {/* Velo limpio lateral para resaltar el texto sin oscurecer toda la foto */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/55 to-transparent" />
            </div>
          )
        })}

        {/* Contenido superpuesto en el Carrusel Amplio */}
        <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-12">
          <div className="max-w-xl text-left">
            <span
              style={{ backgroundColor: active.color }}
              className="inline-block rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-950 shadow-md"
            >
              {active.badge}
            </span>

            <h1 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl leading-snug drop-shadow-sm">
              {active.titulo}
            </h1>

            <p className="mt-1.5 font-script text-xl sm:text-2xl text-[#FDB813]">
              {active.subtitulo}
            </p>

            <p className="mt-2.5 max-w-lg text-xs sm:text-sm text-slate-100 leading-relaxed">
              {active.descripcion}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#cotiza"
                style={{ backgroundColor: active.color }}
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg transition-transform hover:scale-105"
              >
                {active.botonTexto}
                <span>&rarr;</span>
              </a>
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Ver Catálogo
              </a>
            </div>
          </div>
        </div>

        {/* Botones Izquierda / Derecha del Carrusel Amplio */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Anterior diapositiva"
          className="absolute left-3 sm:left-6 top-1/2 z-30 -translate-y-1/2 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-[#FDB813] hover:scale-110"
        >
          &#10094;
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Siguiente diapositiva"
          className="absolute right-3 sm:right-6 top-1/2 z-30 -translate-y-1/2 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-[#FDB813] hover:scale-110"
        >
          &#10095;
        </button>

        {/* Pestañas / Indicadores inferiores dentro del carrusel */}
        <div className="absolute bottom-5 left-0 right-0 z-30 mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 px-4">
          {slides.map((slide, idx) => {
            const isSelected = idx === currentSlide
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider transition-all shadow ${
                  isSelected
                    ? 'bg-[#FDB813] text-slate-950 scale-105'
                    : 'bg-slate-900/75 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm border border-white/25'
                }`}
              >
                {slide.titulo.split(' ')[0]} {slide.id.includes('dtf') || slide.id.includes('3d') ? slide.titulo.split(' ')[1] : ''}
              </button>
            )
          })}
        </div>
      </div>

      {/* FRANJA MOVIBLE DEBAJO DEL CARRUSEL (Marquee Continuo Interactivo) */}
      <div className="relative overflow-hidden border-y border-slate-200 bg-slate-900 py-3 shadow-inner">
        <div className="animate-marquee flex items-center gap-5">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <a
              key={`${item.label}-${idx}`}
              href={item.href}
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-slate-800/90 px-4 py-1.5 transition-all hover:border-[#FDB813] hover:bg-slate-800"
            >
              <span
                style={{ backgroundColor: item.color }}
                className="h-2 w-2 rounded-full shrink-0"
              />
              <span className="text-xs font-semibold text-white whitespace-nowrap group-hover:text-[#FDB813]">
                {item.label}
              </span>
              <span
                style={{
                  backgroundColor: `${item.color}25`,
                  color: item.color,
                }}
                className="rounded-full px-2 py-0.5 text-[10px] font-bold whitespace-nowrap"
              >
                {item.tag}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
