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
    { label: "Proceso", href: "#proceso" },
    { label: "Precios", href: "#precios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-white/[0.06]" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <polyline points="6,16 10,16 13,8 17,24 21,11 24,16 27,16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-semibold text-[15px] tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
            Pulse<span className="text-indigo-400">Digital</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] text-zinc-500 hover:text-white transition-colors duration-200">{l.label}</a>
          ))}
          <a href="#contacto" className="text-[13px] px-5 py-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-all font-medium">Comenzar</a>
        </div>
        <button className="md:hidden text-zinc-400 p-2" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base text-zinc-400 hover:text-white transition-colors">{l.label}</a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="text-center px-5 py-2.5 rounded-full bg-white text-black font-medium text-sm">Comenzar</a>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center py-32">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-500 text-xs font-medium mb-10 tracking-wide">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
            Diseño web en San Juan, PR
          </div>
        </div>

        <h1 className="animate-fade-in-up animate-delay-100 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
          Tu negocio
          <br />
          merece estar{" "}
          <span className="gradient-text">online</span>
        </h1>

        <p className="animate-fade-in-up animate-delay-200 text-zinc-500 text-lg sm:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
          Diseñamos páginas web para negocios locales.
          <br className="hidden sm:block" />
          Rápidas, modernas, listas en 72 horas.
        </p>

        <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacto" className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 transition-all font-medium text-[15px]">
            Cotización gratis <IconArrow />
          </a>
          <a href="#precios" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.03] transition-all text-zinc-400 text-[15px]">
            Ver precios
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up animate-delay-400 mt-20 flex items-center justify-center gap-12 sm:gap-16">
          {[
            { num: "72h", label: "Entrega" },
            { num: "$299", label: "Desde" },
            { num: "100%", label: "Responsive" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ fontFamily: "var(--font-space)" }}>{s.num}</div>
              <div className="text-zinc-600 text-xs mt-1 tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
function Services() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      title: "Diseño Web",
      desc: "Páginas rápidas, modernas, y optimizadas para móvil.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      title: "SEO & Google",
      desc: "Que tus clientes te encuentren primero.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H20.8" />
        </svg>
      ),
      title: "Mantenimiento",
      desc: "Cambios, actualizaciones, y soporte cuando lo necesites.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Velocidad",
      desc: "Carga en menos de 2 segundos. Siempre.",
    },
  ];

  return (
    <section id="servicios" className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-indigo-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">Servicios</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Todo lo que necesitas
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="group p-6 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-5 group-hover:bg-indigo-500/15 transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-[15px] mb-2">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SHOWCASE (Real image) ─── */
function Showcase() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.06]">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
              alt="Diseño web profesional"
              className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <p className="text-zinc-400 text-sm mb-2">Especialistas en</p>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Restaurantes · Barberías · Salones · Talleres
              </h3>
              <p className="text-zinc-500 text-sm mt-3 max-w-lg">
                Negocios locales en Puerto Rico que quieren crecer con una presencia web profesional.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── PROCESS ─── */
function Process() {
  const steps = [
    { num: "01", title: "Nos contactas", desc: "WhatsApp o llamada. Sin compromiso." },
    { num: "02", title: "Analizamos", desc: "Tu negocio, clientes, y competencia." },
    { num: "03", title: "Diseñamos", desc: "Página personalizada en 48–72 horas." },
    { num: "04", title: "Lanzamos", desc: "Online y recibiendo clientes." },
  ];

  return (
    <section id="proceso" className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-indigo-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">Proceso</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Así de simple
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.1}>
              <div className="relative">
                <span className="text-6xl font-bold text-white/[0.04] block mb-4" style={{ fontFamily: "var(--font-space)" }}>{s.num}</span>
                <h3 className="text-base font-semibold mb-2">{s.title}</h3>
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
      features: ["1–3 secciones", "Responsive", "SEO básico", "Entrega 24–48h"],
      featured: false,
    },
    {
      name: "Professional",
      price: "$599",
      period: "pago único",
      features: ["5–8 secciones", "Diseño premium", "SEO avanzado", "Menú / Catálogo", "Google Maps", "Entrega 48–72h"],
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
    <section id="precios" className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-indigo-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">Precios</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Sin sorpresas
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.08}>
              <div className={`rounded-2xl p-5 sm:p-6 h-full flex flex-col relative ${
                p.featured
                  ? "bg-white/[0.04] border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/[0.08]"
                  : "border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              }`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] text-white font-medium bg-indigo-500 px-3.5 py-0.5 rounded-full">Popular</div>
                )}
                <h3 className="font-medium text-sm text-zinc-400">{p.name}</h3>
                <div className="mt-3 mb-6">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-space)" }}>{p.price}</span>
                  <span className="text-zinc-600 text-xs ml-1">/{p.period}</span>
                </div>
                <ul className="space-y-2.5 mb-8 flex-grow">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
                      <IconCheck /><span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className={`block text-center py-2.5 rounded-full text-sm font-medium transition-all ${
                  p.featured
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08]"
                }`}>Comenzar</a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="py-28 md:py-40">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-indigo-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">Contacto</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Hablemos
            </h2>
            <p className="text-zinc-500 mt-4 text-lg">Cotización gratis en menos de 24 horas.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">
          <FadeIn>
            {sent ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-4xl mb-3">✓</div>
                  <p className="text-lg font-semibold">Enviado</p>
                  <p className="text-zinc-500 mt-1 text-sm">Te respondemos en menos de 24 horas.</p>
                </div>
              </div>
            ) : (
              <form action="https://formsubmit.co/pulsedigitalstudios@gmail.com" method="POST" onSubmit={() => setSent(true)} className="space-y-4">
                <input type="hidden" name="_subject" value="Nuevo contacto desde pulsedigitalstudios.tech" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="text" name="nombre" required placeholder="Tu nombre" className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/25 text-white placeholder-zinc-600 text-sm transition-all" />
                <input type="text" name="negocio" required placeholder="Nombre del negocio" className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/25 text-white placeholder-zinc-600 text-sm transition-all" />
                <input type="text" name="contacto" required placeholder="Email o teléfono" className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/25 text-white placeholder-zinc-600 text-sm transition-all" />
                <textarea rows={3} name="mensaje" placeholder="¿Qué necesitas?" className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/25 text-white placeholder-zinc-600 text-sm resize-none transition-all" />
                <button type="submit" className="w-full py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all">Enviar mensaje</button>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-3">
              <a href="https://wa.me/17876074747" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] hover:border-green-500/30 hover:bg-green-500/[0.03] transition-all group">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500/15 transition-colors"><IconWhatsApp /></div>
                <div>
                  <div className="font-medium text-sm">WhatsApp</div>
                  <div className="text-zinc-500 text-xs mt-0.5">(787) 607-4747</div>
                </div>
              </a>

              <a href="mailto:pulsedigitalstudios@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] hover:border-indigo-500/30 hover:bg-indigo-500/[0.03] transition-all group">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/15 transition-colors"><IconMail /></div>
                <div>
                  <div className="font-medium text-sm">Email</div>
                  <div className="text-zinc-500 text-xs mt-0.5">pulsedigitalstudios@gmail.com</div>
                </div>
              </a>

              <a href="tel:+17876074747" className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] hover:border-purple-500/30 hover:bg-purple-500/[0.03] transition-all group">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/15 transition-colors"><IconPhone /></div>
                <div>
                  <div className="font-medium text-sm">Llámanos</div>
                  <div className="text-zinc-500 text-xs mt-0.5">(787) 607-4747</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06]">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-sm">📍</div>
                <div>
                  <div className="font-medium text-sm">San Juan, PR</div>
                  <div className="text-zinc-500 text-xs mt-0.5">Lun–Sáb · 8AM–8PM</div>
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
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-6 h-6">
              <polyline points="6,16 10,16 13,8 17,24 21,11 24,16 27,16" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xs text-zinc-600">© {new Date().getFullYear()} Pulse Digital Studios</span>
        </div>
        <div className="flex gap-6 text-xs text-zinc-600">
          <a href="#servicios" className="hover:text-zinc-400 transition-colors">Servicios</a>
          <a href="#proceso" className="hover:text-zinc-400 transition-colors">Proceso</a>
          <a href="#precios" className="hover:text-zinc-400 transition-colors">Precios</a>
          <a href="#contacto" className="hover:text-zinc-400 transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── WHATSAPP FLOATING ─── */
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/17876074747"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:scale-105"
      aria-label="WhatsApp"
    >
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
