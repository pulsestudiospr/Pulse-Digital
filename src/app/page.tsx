"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";

/* ─── SCROLL ANIMATION ─── */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>{children}</div>
  );
}

/* ─── ICONS ─── */
const IconArrow = () => (
  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);
const IconMail = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
const IconWhatsApp = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const IconPhone = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

/* ─── NAVBAR ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Trabajo", href: "#portfolio" },
    { label: "Precios", href: "#precios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-18 flex items-center justify-between" style={{ height: "72px" }}>
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center overflow-hidden shadow-lg shadow-indigo-500/20">
            <svg viewBox="0 0 32 32" className="w-9 h-9">
              <polyline points="6,16 10,16 13,8 17,24 21,11 24,16 27,16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-semibold text-lg tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
            Pulse<span className="text-indigo-400">Digital</span> <span className="text-zinc-400 font-normal hidden sm:inline">Studios</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">{l.label}</a>
          ))}
          <a href="#contacto" className="text-sm px-6 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-all font-medium shadow-lg shadow-indigo-500/20">Comenzar</a>
        </div>
        <button className="md:hidden text-zinc-400 p-2" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg text-zinc-400 hover:text-white transition-colors">{l.label}</a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="text-center px-6 py-3 rounded-full bg-indigo-500 font-medium text-base">Comenzar</a>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center grid-bg overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-500/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full grid lg:grid-cols-2 gap-16 items-center py-28 lg:py-0">
        <div>
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs font-medium mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse-dot" />
              San Juan, Puerto Rico
            </div>
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            Tu negocio.
            <br />
            <span className="gradient-text">Online.</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 text-zinc-400 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed">
            Páginas web para negocios locales. Rápidas, modernas, y listas en 72 horas.
          </p>

          <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4">
            <a href="#contacto" className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all font-medium text-base shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40">
              Cotización Gratis <IconArrow />
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 hover:bg-white/5 transition-all text-zinc-300 text-base">
              Ver Trabajo
            </a>
          </div>

          {/* Social proof */}
          <div className="animate-fade-in-up animate-delay-400 mt-12 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1,2,3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border-2 border-[#0a0a0a] flex items-center justify-center text-[10px]">
                  {["🍕","✂️","🔧"][i-1]}
                </div>
              ))}
            </div>
            <p className="text-zinc-500 text-sm">Negocios locales confían en nosotros</p>
          </div>
        </div>

        {/* Hero image */}
        <div className="animate-fade-in-up animate-delay-300 hidden md:block">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500/20 to-purple-600/10 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl shadow-black/50">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Diseño web profesional para negocios en Puerto Rico"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 bg-[#111]/90 backdrop-blur-md rounded-xl p-4 border border-zinc-800/80">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-dot" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Tu página está live</div>
                    <div className="text-xs text-zinc-500">Recibiendo visitantes 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── LOGOS / TRUST ─── */
function Trust() {
  return (
    <section className="py-12 border-y border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-4 opacity-30">
            {["Next.js", "React", "Tailwind", "Vercel", "TypeScript"].map((t) => (
              <span key={t} className="text-base font-semibold tracking-tight" style={{ fontFamily: "var(--font-space)" }}>{t}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
function Services() {
  const services = [
    {
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
      title: "Diseño Web",
      desc: "Páginas modernas, rápidas, y optimizadas para móvil. Tu negocio con presencia profesional.",
      alt: "Servicio de diseño web para negocios locales en San Juan PR",
    },
    {
      img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
      title: "SEO & Google",
      desc: "Que tus clientes te encuentren primero cuando busquen en Google.",
      alt: "Optimización SEO para negocios en Puerto Rico",
    },
    {
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      title: "Mantenimiento",
      desc: "Cambios, actualizaciones, y soporte técnico cuando lo necesites.",
      alt: "Mantenimiento y soporte web para negocios puertorriqueños",
    },
  ];

  return (
    <section id="servicios" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-indigo-400 text-xs font-medium tracking-[0.2em] uppercase">Servicios</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
              Lo que hacemos
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.12}>
              <div className="group rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-500 bg-[#111] hover:bg-[#141414]">
                <div className="h-56 overflow-hidden">
                  <img src={s.img} alt={s.alt || s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PORTFOLIO ─── */
function Portfolio() {
  const projects = [
    {
      name: "La Isla Restaurant",
      type: "Restaurante",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      tags: ["Menú digital", "Reservas"],
      alt: "Página web para restaurante en Puerto Rico",
    },
    {
      name: "Elite Barber Studio",
      type: "Barbería",
      img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
      tags: ["Booking", "Galería"],
      alt: "Diseño web para barbería en San Juan",
    },
    {
      name: "AutoPro Workshop",
      type: "Taller Mecánico",
      img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      tags: ["Servicios", "WhatsApp"],
      alt: "Página web para taller mecánico en Puerto Rico",
    },
    {
      name: "Glow Beauty Salon",
      type: "Salón de Belleza",
      img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      tags: ["Citas online", "Portfolio"],
      alt: "Diseño web para salón de belleza en Puerto Rico",
    },
  ];

  return (
    <section id="portfolio" className="py-28 md:py-36 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-indigo-400 text-xs font-medium tracking-[0.2em] uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
              Nuestro trabajo
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden h-80 sm:h-96 cursor-pointer">
                <img src={p.img} alt={p.alt || p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="flex gap-2 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-semibold">{p.name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{p.type}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
function Process() {
  const steps = [
    { num: "01", title: "Nos contactas", desc: "WhatsApp, email, o llamada. Sin compromiso." },
    { num: "02", title: "Analizamos", desc: "Tu negocio, clientes, y competencia." },
    { num: "03", title: "Diseñamos", desc: "Página personalizada en 48-72 horas." },
    { num: "04", title: "Lanzamos", desc: "Online y recibiendo clientes al instante." },
  ];

  return (
    <section className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-indigo-400 text-xs font-medium tracking-[0.2em] uppercase">Proceso</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
              Así de simple
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {steps.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.12}>
              <div className="relative text-center lg:text-left">
                <span className="text-5xl lg:text-6xl font-bold text-indigo-500/10 block mb-3" style={{ fontFamily: "var(--font-space)" }}>{s.num}</span>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "pago único",
      features: ["1-3 secciones", "Responsive", "SEO básico", "Entrega 24-48h"],
      featured: false,
    },
    {
      name: "Professional",
      price: "$599",
      period: "pago único",
      features: ["5-8 secciones", "Diseño premium", "SEO avanzado", "Menú / Catálogo", "Google Maps", "Entrega 48-72h"],
      featured: true,
    },
    {
      name: "Mantenimiento",
      price: "$99",
      period: "mensual",
      features: ["Hosting incluido", "Cambios mensuales", "Soporte por email", "Monitoreo 24/7"],
      featured: false,
    },
    {
      name: "Mantenimiento Pro",
      price: "$149",
      period: "mensual",
      features: ["Todo lo básico", "Cambios ilimitados", "Soporte WhatsApp", "Reportes mensuales"],
      featured: false,
    },
  ];

  return (
    <section id="precios" className="py-28 md:py-36 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-indigo-400 text-xs font-medium tracking-[0.2em] uppercase">Precios</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
              Sin sorpresas
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div className={`rounded-2xl p-5 sm:p-7 h-full flex flex-col relative ${
                p.featured
                  ? "bg-gradient-to-b from-indigo-500/10 to-transparent border-2 border-indigo-500/40 shadow-2xl shadow-indigo-500/10 scale-[1.02]"
                  : "bg-[#111] border border-zinc-800 hover:border-zinc-700 transition-colors"
              }`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs text-white font-medium bg-indigo-500 px-4 py-1 rounded-full shadow-lg">Popular</div>
                )}
                <h3 className="font-semibold text-sm sm:text-base">{p.name}</h3>
                <div className="mt-3 mb-5 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-space)" }}>{p.price}</span>
                  <span className="text-zinc-500 text-xs sm:text-sm ml-1 block sm:inline mt-1 sm:mt-0">/{p.period}</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                      <IconCheck /><span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className={`block text-center py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  p.featured
                    ? "bg-indigo-500 hover:bg-indigo-600 shadow-lg shadow-indigo-500/20"
                    : "bg-white/5 hover:bg-white/10 border border-zinc-800"
                }`}>Comenzar</a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA IMAGE ─── */
function CtaBanner() {
  return (
    <section className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
              alt="Oficina moderna de diseño web en Puerto Rico"
              className="w-full h-[350px] sm:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-transparent flex items-center">
              <div className="px-8 sm:px-12 md:px-16 max-w-xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
                  Tu competencia ya está online.
                </h2>
                <p className="text-zinc-300 text-base sm:text-lg mb-8">No te quedes atrás. Empieza hoy.</p>
                <a href="#contacto" className="group inline-flex items-center px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors shadow-xl">
                  Hablar con nosotros <IconArrow />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="py-28 md:py-36 bg-[#070707]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-xs font-medium tracking-[0.2em] uppercase">Contacto</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
              Hablemos
            </h2>
            <p className="text-zinc-400 mt-4 text-lg">Cotización gratis en menos de 24 horas.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn>
            {sent ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <p className="text-xl font-semibold">¡Enviado!</p>
                  <p className="text-zinc-500 mt-2">Te respondemos en menos de 24 horas.</p>
                </div>
              </div>
            ) : (
              <form action="https://formsubmit.co/pulsedigitalstudios@gmail.com" method="POST" onSubmit={() => setSent(true)} className="space-y-5">
                <input type="hidden" name="_subject" value="Nuevo contacto desde pulsedigitalstudios.tech" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="text" name="nombre" required placeholder="Tu nombre" className="w-full px-5 py-4 rounded-xl bg-[#111] border border-zinc-800 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 text-white placeholder-zinc-600 text-base transition-all" />
                <input type="text" name="negocio" required placeholder="Nombre del negocio" className="w-full px-5 py-4 rounded-xl bg-[#111] border border-zinc-800 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 text-white placeholder-zinc-600 text-base transition-all" />
                <input type="text" name="contacto" required placeholder="Email o teléfono" className="w-full px-5 py-4 rounded-xl bg-[#111] border border-zinc-800 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 text-white placeholder-zinc-600 text-base transition-all" />
                <textarea rows={4} name="mensaje" placeholder="¿Qué necesitas?" className="w-full px-5 py-4 rounded-xl bg-[#111] border border-zinc-800 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 text-white placeholder-zinc-600 text-base resize-none transition-all" />
                <button type="submit" className="w-full py-4 rounded-full bg-indigo-500 hover:bg-indigo-600 font-medium text-base transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30">Enviar Mensaje</button>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-5">
              <a href="mailto:pulsedigitalstudios@gmail.com" className="flex items-center gap-5 p-5 rounded-xl bg-[#111] border border-zinc-800 hover:border-indigo-500/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors"><IconMail /></div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-zinc-500 text-sm mt-0.5">pulsedigitalstudios@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.me/17876074747" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 rounded-xl bg-[#111] border border-zinc-800 hover:border-green-500/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500/20 transition-colors"><IconWhatsApp /></div>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-zinc-500 text-sm mt-0.5">(787) 607-4747</div>
                </div>
              </a>

              <a href="tel:+17876074747" className="flex items-center gap-5 p-5 rounded-xl bg-[#111] border border-zinc-800 hover:border-purple-500/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors"><IconPhone /></div>
                <div>
                  <div className="font-medium">Llámanos</div>
                  <div className="text-zinc-500 text-sm mt-0.5">(787) 607-4747</div>
                </div>
              </a>

              <div className="flex items-center gap-5 p-5 rounded-xl bg-[#111] border border-zinc-800">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-lg">📍</div>
                <div>
                  <div className="font-medium">San Juan, PR</div>
                  <div className="text-zinc-500 text-sm mt-0.5">Lun–Sáb · 8AM–8PM</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 32 32" className="w-7 h-7">
              <polyline points="6,16 10,16 13,8 17,24 21,11 24,16 27,16" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm text-zinc-500">© {new Date().getFullYear()} Pulse Digital Studios</span>
        </div>
        <div className="flex gap-8 text-sm text-zinc-500">
          <a href="#servicios" className="hover:text-zinc-300 transition-colors">Servicios</a>
          <a href="#portfolio" className="hover:text-zinc-300 transition-colors">Trabajo</a>
          <a href="#precios" className="hover:text-zinc-300 transition-colors">Precios</a>
          <a href="#contacto" className="hover:text-zinc-300 transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  );
}
