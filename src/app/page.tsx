"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";

/* ─── SCROLL ANIMATION HOOK ─── */
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
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── ICONS ─── */
const IconCode = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);
const IconRocket = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);
const IconChart = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);
const IconShield = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);
const IconClock = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconPhone = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
);
const IconMail = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);
const IconArrow = () => (
  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);
const IconWhatsApp = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const IconStar = () => (
  <svg className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
    { label: "Portfolio", href: "#portfolio" },
    { label: "Proceso", href: "#proceso" },
    { label: "Precios", href: "#precios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
            <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-space)" }}>P</span>
          </div>
          <span className="font-semibold text-lg tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
            Pulse<span className="text-indigo-400">Digital</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="text-sm px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-all font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40">
            Cotización Gratis
          </a>
        </div>

        <button className="md:hidden text-zinc-400" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="text-center px-5 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors font-medium">
              Cotización Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg pt-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse-dot" />
            Estudio Digital — San Juan, Puerto Rico
          </div>
        </div>

        <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6" style={{ fontFamily: "var(--font-space)" }}>
          Llevamos tu negocio al{" "}
          <span className="gradient-text">mundo digital</span>
        </h1>

        <p className="animate-fade-in-up animate-delay-200 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Páginas web profesionales para restaurantes, salones, talleres y negocios locales en Puerto Rico. 
          Diseñadas para convertir visitantes en clientes.
        </p>

        <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacto" className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all font-medium text-lg shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40">
            Cotización Gratis
            <IconArrow />
          </a>
          <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 transition-colors text-zinc-300 hover:text-white">
            Ver Nuestro Trabajo
          </a>
        </div>

        <div className="animate-fade-in-up animate-delay-400 mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-2xl mx-auto">
          {[
            { value: "24-72h", label: "Tiempo de entrega" },
            { value: "100%", label: "Responsive" },
            { value: "24/7", label: "Soporte continuo" },
            { value: "$0", label: "Cotización" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text" style={{ fontFamily: "var(--font-space)" }}>{s.value}</div>
              <div className="text-xs sm:text-sm text-zinc-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
}

/* ─── SOCIAL PROOF BAR ─── */
function SocialProof() {
  return (
    <section className="py-12 border-y border-zinc-800/50 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => <IconStar key={i} />)}
              </div>
              <span className="text-zinc-400 text-sm ml-2">Calidad garantizada</span>
            </div>
            <div className="h-4 w-px bg-zinc-800 hidden md:block" />
            <div className="text-zinc-400 text-sm flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              Negocios reales en Puerto Rico
            </div>
            <div className="h-4 w-px bg-zinc-800 hidden md:block" />
            <div className="text-zinc-400 text-sm flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              Entrega en 24-72 horas
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeIn>
            <div>
              <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Sobre Nosotros</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight leading-tight" style={{ fontFamily: "var(--font-space)" }}>
                Somos el equipo digital que tu negocio necesita
              </h2>
              <p className="text-zinc-400 mt-6 leading-relaxed">
                En Pulse Digital Studios entendemos que tu negocio ya es exitoso — lo que falta es que el mundo lo vea online. 
                Nos especializamos en negocios locales de Puerto Rico: restaurantes, barberías, salones de belleza, talleres, 
                gimnasios y más.
              </p>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                No somos una agencia genérica. Investigamos tu negocio, tus clientes, y tus reviews antes de diseñar. 
                El resultado: una página web que realmente representa quién eres y atrae a los clientes que ya te buscan en Google.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Enfoque local PR", icon: "🇵🇷" },
                  { label: "Diseño personalizado", icon: "🎨" },
                  { label: "Soporte en español", icon: "💬" },
                  { label: "Precios justos", icon: "💰" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-sm text-zinc-300">
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-3xl blur-2xl" />
              <div className="relative bg-[#111] border border-zinc-800 rounded-3xl p-8 md:p-10">
                <div className="space-y-6">
                  {[
                    { num: "01", text: "Investigamos tu negocio y competencia" },
                    { num: "02", text: "Diseñamos una página que convierte" },
                    { num: "03", text: "Entregamos en tiempo récord" },
                    { num: "04", text: "Mantenemos todo funcionando" },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4 items-start">
                      <span className="text-indigo-500 font-bold text-sm font-mono bg-indigo-500/10 px-2.5 py-1 rounded-lg">{step.num}</span>
                      <span className="text-zinc-300 text-sm leading-relaxed pt-0.5">{step.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
function Services() {
  const services = [
    { icon: <IconCode />, title: "Diseño Web Profesional", desc: "Páginas modernas con diseño personalizado. No usamos templates genéricos — cada sitio se construye desde cero para tu negocio." },
    { icon: <IconRocket />, title: "SEO & Google", desc: "Optimizamos tu página para que aparezcas cuando tus clientes buscan en Google. Más visibilidad = más clientes." },
    { icon: <IconChart />, title: "Mantenimiento Mensual", desc: "Actualizaciones de contenido, monitoreo y soporte continuo. Tu página siempre actualizada y funcionando." },
    { icon: <IconShield />, title: "Hosting & Seguridad", desc: "SSL gratuito, hosting ultrarrápido, y backups automáticos. Tu página segura y siempre online." },
    { icon: <IconPhone />, title: "100% Mobile First", desc: "El 80% de tus clientes te buscan desde el celular. Diseñamos primero para móvil, después para desktop." },
    { icon: <IconClock />, title: "Entrega en 24-72h", desc: "No esperes semanas. Páginas profesionales listas en días, no meses. Revisiones incluidas." },
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Servicios</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
              Todo lo que tu negocio necesita
            </h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
              Servicio completo de presencia digital. Desde el diseño hasta el mantenimiento.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="gradient-border group p-6 bg-[#0f0f0f] rounded-2xl hover:bg-[#141414] transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-space)" }}>{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
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
      name: "Restaurante La Isla",
      type: "Restaurante • Santurce",
      color: "from-orange-500/20 to-red-500/20",
      accent: "bg-orange-500",
      features: ["Menú digital", "Reservaciones", "Google Maps"],
    },
    {
      name: "Elite Barber Studio",
      type: "Barbería • Condado",
      color: "from-blue-500/20 to-cyan-500/20",
      accent: "bg-blue-500",
      features: ["Booking online", "Galería", "Reviews"],
    },
    {
      name: "AutoPro Workshop",
      type: "Taller Mecánico • Bayamón",
      color: "from-green-500/20 to-emerald-500/20",
      accent: "bg-green-500",
      features: ["Servicios", "Cotizador", "WhatsApp directo"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
              Diseños que convierten
            </h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
              Ejemplos del tipo de páginas que creamos para negocios como el tuyo.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.15}>
              <div className="group rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-500 bg-[#111]">
                {/* Mock browser window */}
                <div className={`relative h-56 bg-gradient-to-br ${p.color} p-4`}>
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="ml-3 h-5 w-40 bg-white/10 rounded-full" />
                  </div>
                  {/* Mock content */}
                  <div className="space-y-2">
                    <div className={`h-3 w-24 ${p.accent} rounded-full opacity-60`} />
                    <div className="h-5 w-48 bg-white/20 rounded" />
                    <div className="h-3 w-36 bg-white/10 rounded" />
                    <div className="mt-4 flex gap-2">
                      <div className={`h-8 w-24 ${p.accent} rounded-full opacity-80`} />
                      <div className="h-8 w-20 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Ver proyecto →
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg" style={{ fontFamily: "var(--font-space)" }}>{p.name}</h3>
                  <p className="text-zinc-500 text-sm mt-0.5">{p.type}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-zinc-500 text-sm">
              ¿Quieres ver cómo se vería la página de <span className="text-indigo-400">tu negocio</span>? Te hacemos un demo gratis.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── PROCESS ─── */
function Process() {
  const steps = [
    { n: "01", title: "Nos contactas", desc: "Llámanos, escríbenos por WhatsApp, o envía un email. Te respondemos en menos de 2 horas.", emoji: "📞" },
    { n: "02", title: "Investigamos tu negocio", desc: "Analizamos tus reviews, redes, competencia, y lo que te hace único.", emoji: "🔍" },
    { n: "03", title: "Diseñamos tu página", desc: "Creamos un diseño personalizado. Tú revisas y apruebas antes de publicar.", emoji: "🎨" },
    { n: "04", title: "¡Estás online!", desc: "Publicamos tu página y te damos soporte continuo. Cambios cuando quieras.", emoji: "🚀" },
  ];

  return (
    <section id="proceso" className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Proceso</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
              Así de fácil
            </h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
              De la llamada a tu página online en menos de 72 horas.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.12}>
              <div className="relative text-center sm:text-left">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[65%] w-full h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
                )}
                <span className="text-3xl mb-4 block">{s.emoji}</span>
                <div className="text-xs font-mono text-indigo-500 mb-2">{s.n}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-space)" }}>{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
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
      desc: "Ideal para empezar con presencia online",
      features: [
        "Página de 1-3 secciones",
        "Diseño responsive",
        "Optimización SEO básica",
        "Entrega en 24-48h",
        "1 revisión incluida",
        "SSL gratuito",
      ],
      cta: "Empezar",
      featured: false,
    },
    {
      name: "Professional",
      price: "$599",
      period: "pago único",
      desc: "Para negocios que quieren destacar",
      features: [
        "Página completa (5-8 secciones)",
        "Diseño premium personalizado",
        "SEO avanzado + Google My Business",
        "Menú / Catálogo / Booking",
        "Google Maps + Reviews integrados",
        "3 revisiones incluidas",
        "Entrega en 48-72h",
      ],
      cta: "Elegir Plan",
      featured: true,
    },
    {
      name: "Mantenimiento",
      price: "$79",
      period: "mensual",
      desc: "Tu página siempre al día",
      features: [
        "Hosting premium incluido",
        "Actualizaciones ilimitadas",
        "Soporte prioritario por WhatsApp",
        "Monitoreo 24/7",
        "Backups automáticos",
        "Reporte mensual de visitas",
      ],
      cta: "Suscribirse",
      featured: false,
    },
  ];

  return (
    <section id="precios" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Precios</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
              Transparente y justo
            </h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
              Sin letra pequeña. Sabes exactamente lo que pagas y lo que recibes.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.12}>
              <div className={`relative rounded-2xl p-7 md:p-8 transition-all duration-300 h-full flex flex-col ${
                p.featured
                  ? "bg-gradient-to-b from-indigo-500/10 to-purple-500/5 border border-indigo-500/30 shadow-xl shadow-indigo-500/10 scale-[1.02]"
                  : "bg-[#111] border border-zinc-800 hover:border-zinc-700"
              }`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-xs font-medium shadow-lg">
                    Más Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-space)" }}>{p.name}</h3>
                <p className="text-zinc-500 text-sm mt-1">{p.desc}</p>
                <div className="mt-5 mb-6">
                  <span className="text-4xl font-bold" style={{ fontFamily: "var(--font-space)" }}>{p.price}</span>
                  <span className="text-zinc-500 ml-2 text-sm">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                      <IconCheck />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className={`block text-center py-3.5 rounded-full font-medium transition-all ${
                  p.featured
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-white/5 hover:bg-white/10 text-white border border-zinc-700 hover:border-zinc-600"
                }`}>
                  {p.cta}
                </a>
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
    <section id="contacto" className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Contacto</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
              ¿Listo para dar el paso?
            </h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
              Escríbenos y recibe tu cotización gratis en menos de 24 horas.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact form */}
          <FadeIn>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-5"
            >
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-space)" }}>¡Mensaje enviado!</h3>
                  <p className="text-zinc-400">Te respondemos en menos de 24 horas.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="text-sm text-zinc-400 mb-1.5 block">Nombre</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl bg-[#111] border border-zinc-800 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-zinc-400 mb-1.5 block">Negocio</label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre de tu negocio"
                      className="w-full px-4 py-3 rounded-xl bg-[#111] border border-zinc-800 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-zinc-400 mb-1.5 block">Email o teléfono</label>
                    <input
                      type="text"
                      required
                      placeholder="Para contactarte"
                      className="w-full px-4 py-3 rounded-xl bg-[#111] border border-zinc-800 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-zinc-400 mb-1.5 block">¿Qué necesitas?</label>
                    <textarea
                      rows={3}
                      placeholder="Cuéntanos sobre tu negocio y qué buscas..."
                      className="w-full px-4 py-3 rounded-xl bg-[#111] border border-zinc-800 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 text-white placeholder-zinc-600 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 font-medium transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                  >
                    Enviar Mensaje
                  </button>
                </>
              )}
            </form>
          </FadeIn>

          {/* Contact info */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-space)" }}>También nos puedes contactar por:</h3>
              </div>

              <a href="mailto:pulsedigitalstudios@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-zinc-800 hover:border-indigo-500/50 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                  <IconMail />
                </div>
                <div>
                  <div className="text-sm text-zinc-400">Email</div>
                  <div className="text-white text-sm font-medium">pulsedigitalstudios@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.me/17877000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-zinc-800 hover:border-green-500/50 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500/20 transition-colors">
                  <IconWhatsApp />
                </div>
                <div>
                  <div className="text-sm text-zinc-400">WhatsApp</div>
                  <div className="text-white text-sm font-medium">Escríbenos directo</div>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-[#111] border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">Ubicación</div>
                    <div className="text-white text-sm font-medium">San Juan, Puerto Rico 🇵🇷</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#111] border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center text-2xl">
                    ⏰
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">Horario</div>
                    <div className="text-white text-sm font-medium">Lun-Sáb: 8AM - 8PM</div>
                  </div>
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
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs" style={{ fontFamily: "var(--font-space)" }}>P</span>
            </div>
            <span className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Pulse Digital Studios. Todos los derechos reservados.
            </span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#servicios" className="hover:text-zinc-300 transition-colors">Servicios</a>
            <a href="#portfolio" className="hover:text-zinc-300 transition-colors">Portfolio</a>
            <a href="#precios" className="hover:text-zinc-300 transition-colors">Precios</a>
            <a href="#contacto" className="hover:text-zinc-300 transition-colors">Contacto</a>
          </div>
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
      <SocialProof />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
