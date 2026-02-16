"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";

/* ─── SCROLL ANIMATION ─── */
function useInView(threshold = 0.15) {
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
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-space)" }}>P</span>
          </div>
          <span className="font-semibold text-lg tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
            Pulse<span className="text-indigo-400">Digital</span> <span className="text-zinc-400 font-normal">Studios</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">{l.label}</a>
          ))}
          <a href="#contacto" className="text-sm px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-all font-medium">Comenzar</a>
        </div>
        <button className="md:hidden text-zinc-400" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{l.label}</a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="text-center px-5 py-2.5 rounded-full bg-indigo-500 font-medium">Comenzar</a>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg pt-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse-dot" />
              San Juan, Puerto Rico
            </div>
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5" style={{ fontFamily: "var(--font-space)" }}>
            Tu negocio.
            <br />
            <span className="gradient-text">Online.</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 text-zinc-400 text-lg max-w-md mb-8">
            Páginas web para negocios locales. Rápidas, modernas, y listas en 72 horas.
          </p>

          <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-3">
            <a href="#contacto" className="group inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all font-medium shadow-xl shadow-indigo-500/20">
              Cotización Gratis <IconArrow />
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-zinc-800 hover:border-zinc-600 transition-colors text-zinc-300">
              Ver Trabajo
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="animate-fade-in-up animate-delay-300 hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-purple-600/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Dashboard analytics"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 bg-[#111]/90 backdrop-blur-sm rounded-xl p-4 border border-zinc-800">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
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
    <section className="py-16 border-y border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-center text-zinc-500 text-sm mb-8">Tecnologías que usamos</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40">
            {["Next.js", "React", "Tailwind", "Vercel", "TypeScript"].map((t) => (
              <span key={t} className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-space)" }}>{t}</span>
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
      desc: "Moderno, rápido, y optimizado para móvil.",
    },
    {
      img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
      title: "SEO & Google",
      desc: "Que tus clientes te encuentren primero.",
    },
    {
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      title: "Mantenimiento",
      desc: "Cambios y soporte cuando lo necesites.",
    },
  ];

  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-xs font-medium tracking-widest uppercase">Servicios</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
              Lo que hacemos
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="group rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 bg-[#111]">
                <div className="h-48 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "var(--font-space)" }}>{s.title}</h3>
                  <p className="text-zinc-400 text-sm">{s.desc}</p>
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
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
      tags: ["Menú digital", "Reservas"],
    },
    {
      name: "Elite Barber Studio",
      type: "Barbería",
      img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
      tags: ["Booking", "Galería"],
    },
    {
      name: "AutoPro Workshop",
      type: "Taller Mecánico",
      img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
      tags: ["Servicios", "WhatsApp"],
    },
    {
      name: "Glow Beauty Salon",
      type: "Salón de Belleza",
      img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
      tags: ["Citas online", "Portfolio"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-xs font-medium tracking-widest uppercase">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
              Nuestro trabajo
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-2 mb-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-white/70">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-space)" }}>{p.name}</h3>
                  <p className="text-zinc-400 text-sm">{p.type}</p>
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
    { emoji: "📞", title: "Nos contactas", desc: "WhatsApp, email, o llamada." },
    { emoji: "🔍", title: "Analizamos", desc: "Tu negocio, clientes, y competencia." },
    { emoji: "🎨", title: "Diseñamos", desc: "Página personalizada en 48-72h." },
    { emoji: "🚀", title: "Lanzamos", desc: "Online y recibiendo clientes." },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-xs font-medium tracking-widest uppercase">Proceso</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
              4 pasos. Así de simple.
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="text-center">
                <span className="text-4xl block mb-4">{s.emoji}</span>
                <h3 className="font-semibold mb-1" style={{ fontFamily: "var(--font-space)" }}>{s.title}</h3>
                <p className="text-zinc-500 text-sm">{s.desc}</p>
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
      features: ["Todo lo básico", "Cambios ilimitados", "Soporte WhatsApp prioritario", "Reportes mensuales"],
      featured: false,
    },
  ];

  return (
    <section id="precios" className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-xs font-medium tracking-widest uppercase">Precios</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
              Sin sorpresas
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div className={`rounded-2xl p-7 h-full flex flex-col ${
                p.featured
                  ? "bg-gradient-to-b from-indigo-500/10 to-transparent border border-indigo-500/30 shadow-xl shadow-indigo-500/10"
                  : "bg-[#111] border border-zinc-800"
              }`}>
                {p.featured && (
                  <div className="text-xs text-indigo-400 font-medium mb-4">★ Popular</div>
                )}
                <h3 className="font-semibold" style={{ fontFamily: "var(--font-space)" }}>{p.name}</h3>
                <div className="mt-3 mb-6">
                  <span className="text-4xl font-bold" style={{ fontFamily: "var(--font-space)" }}>{p.price}</span>
                  <span className="text-zinc-500 text-sm ml-2">{p.period}</span>
                </div>
                <ul className="space-y-2.5 mb-8 flex-grow">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <IconCheck /><span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className={`block text-center py-3 rounded-full text-sm font-medium transition-all ${
                  p.featured
                    ? "bg-indigo-500 hover:bg-indigo-600"
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
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
              alt="Modern workspace"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 to-[#0a0a0a]/40 flex items-center">
              <div className="px-8 md:px-16 max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-space)" }}>
                  Tu competencia ya está online.
                </h2>
                <p className="text-zinc-300 mb-6">No te quedes atrás. Empieza hoy.</p>
                <a href="#contacto" className="group inline-flex items-center px-7 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors">
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
    <section id="contacto" className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
              Hablemos
            </h2>
            <p className="text-zinc-400 mt-3">Cotización gratis en menos de 24 horas.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">
          <FadeIn>
            {sent ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <p className="font-semibold" style={{ fontFamily: "var(--font-space)" }}>¡Enviado!</p>
                  <p className="text-zinc-500 text-sm mt-1">Te respondemos pronto.</p>
                </div>
              </div>
            ) : (
              <form action="https://formsubmit.co/pulsedigitalstudios@gmail.com" method="POST" onSubmit={() => setSent(true)} className="space-y-4">
                <input type="hidden" name="_subject" value="Nuevo contacto desde pulsedigitalstudios.tech" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="text" name="nombre" required placeholder="Nombre" className="w-full px-4 py-3 rounded-xl bg-[#111] border border-zinc-800 focus:border-indigo-500 focus:outline-none text-white placeholder-zinc-600 text-sm" />
                <input type="text" name="negocio" required placeholder="Negocio" className="w-full px-4 py-3 rounded-xl bg-[#111] border border-zinc-800 focus:border-indigo-500 focus:outline-none text-white placeholder-zinc-600 text-sm" />
                <input type="text" name="contacto" required placeholder="Email o teléfono" className="w-full px-4 py-3 rounded-xl bg-[#111] border border-zinc-800 focus:border-indigo-500 focus:outline-none text-white placeholder-zinc-600 text-sm" />
                <textarea rows={3} name="mensaje" placeholder="¿Qué necesitas?" className="w-full px-4 py-3 rounded-xl bg-[#111] border border-zinc-800 focus:border-indigo-500 focus:outline-none text-white placeholder-zinc-600 text-sm resize-none" />
                <button type="submit" className="w-full py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 font-medium text-sm transition-all">Enviar</button>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-4">
              <a href="mailto:pulsedigitalstudios@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-zinc-800 hover:border-indigo-500/50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400"><IconMail /></div>
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-zinc-500 text-xs">pulsedigitalstudios@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.me/17876074747" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-zinc-800 hover:border-green-500/50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400"><IconWhatsApp /></div>
                <div>
                  <div className="text-sm font-medium">WhatsApp</div>
                  <div className="text-zinc-500 text-xs">(787) 607-4747</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-lg">📍</div>
                <div>
                  <div className="text-sm font-medium">San Juan, PR</div>
                  <div className="text-zinc-500 text-xs">Lun-Sáb 8AM-8PM</div>
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
    <footer className="border-t border-zinc-800/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">P</span>
          </div>
          <span className="text-sm text-zinc-500">© {new Date().getFullYear()} Pulse Digital Studios</span>
        </div>
        <div className="flex gap-6 text-xs text-zinc-500">
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
