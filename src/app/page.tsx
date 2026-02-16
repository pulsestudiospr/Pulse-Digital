"use client";

import { useState } from "react";

/* ─── ICONS (inline SVG) ─── */
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
  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const IconArrow = () => (
  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

/* ─── NAVBAR ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Precios", href: "#precios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse-dot" />
          </div>
          <span className="font-semibold text-lg tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
            Pulse<span className="text-indigo-400">Digital</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors font-medium"
          >
            Empezar
          </a>
        </div>

        {/* Mobile toggle */}
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="text-center px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors font-medium">
              Empezar
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
    <section className="relative min-h-screen flex items-center justify-center grid-bg pt-16">
      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse-dot" />
            Estudio Digital en Puerto Rico
          </div>
        </div>

        <h1 className="animate-fade-in-up animate-delay-100 text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6" style={{ fontFamily: "var(--font-space)" }}>
          Tu negocio merece una{" "}
          <span className="gradient-text">presencia digital</span>{" "}
          que venda
        </h1>

        <p className="animate-fade-in-up animate-delay-200 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Creamos páginas web profesionales que convierten visitantes en clientes.
          Rápidas, modernas, y diseñadas para tu negocio.
        </p>

        <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-all font-medium text-lg glow-hover"
          >
            Cotización Gratis
            <IconArrow />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-zinc-700 hover:border-zinc-500 transition-colors text-zinc-300 hover:text-white"
          >
            Ver Servicios
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up animate-delay-400 mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "24h", label: "Entrega express" },
            { value: "100%", label: "Responsive" },
            { value: "24/7", label: "Soporte" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-bold gradient-text" style={{ fontFamily: "var(--font-space)" }}>{s.value}</div>
              <div className="text-xs md:text-sm text-zinc-500 mt-1">{s.label}</div>
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
      icon: <IconCode />,
      title: "Diseño Web",
      desc: "Páginas modernas, rápidas y optimizadas para móvil. Diseño personalizado que refleja la identidad de tu negocio.",
    },
    {
      icon: <IconRocket />,
      title: "SEO & Performance",
      desc: "Tu página aparece en Google. Optimización de velocidad y contenido para que tus clientes te encuentren.",
    },
    {
      icon: <IconChart />,
      title: "Mantenimiento",
      desc: "Actualizaciones, cambios de contenido y monitoreo continuo. Tu página siempre funcionando perfecta.",
    },
    {
      icon: <IconShield />,
      title: "Hosting & Seguridad",
      desc: "SSL, hosting rápido, backups automáticos. Tu página segura y siempre disponible.",
    },
    {
      icon: <IconPhone />,
      title: "Mobile First",
      desc: "El 80% de tus clientes te buscan desde el celular. Cada página se diseña primero para móvil.",
    },
    {
      icon: <IconClock />,
      title: "Entrega Rápida",
      desc: "No esperes semanas. Páginas profesionales listas en 24-72 horas.",
    },
  ];

  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Servicios</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
            Todo lo que tu negocio necesita
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            Un servicio completo: desde el diseño hasta el mantenimiento mensual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="gradient-border group p-6 bg-[#111] rounded-2xl hover:bg-[#161616] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500/20 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-space)" }}>{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS ─── */
function Process() {
  const steps = [
    { n: "01", title: "Conversamos", desc: "Nos cuentas sobre tu negocio, qué necesitas, y cómo quieres verte." },
    { n: "02", title: "Diseñamos", desc: "Creamos tu página personalizada con contenido profesional." },
    { n: "03", title: "Lanzamos", desc: "Publicamos tu página en 24-72 horas. Tú revisas y apruebas." },
    { n: "04", title: "Mantenemos", desc: "Soporte continuo, actualizaciones y cambios cuando los necesites." },
  ];

  return (
    <section id="proceso" className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Proceso</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
            Simple y directo
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            Sin complicaciones. Te hacemos fácil tener presencia digital.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
              )}
              <div className="text-4xl font-bold text-indigo-500/20 mb-4" style={{ fontFamily: "var(--font-space)" }}>{s.n}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-space)" }}>{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
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
      period: "único",
      desc: "Ideal para negocios que empiezan",
      features: [
        "Página de 1-3 secciones",
        "Diseño responsive",
        "Optimización SEO básica",
        "Entrega en 24-48h",
        "1 revisión incluida",
      ],
      cta: "Empezar",
      featured: false,
    },
    {
      name: "Professional",
      price: "$599",
      period: "único",
      desc: "Para negocios que quieren destacar",
      features: [
        "Página completa (5-8 secciones)",
        "Diseño premium personalizado",
        "SEO avanzado",
        "Google Maps + Reviews",
        "Menú / Catálogo digital",
        "3 revisiones incluidas",
        "Entrega en 48-72h",
      ],
      cta: "Elegir Plan",
      featured: true,
    },
    {
      name: "Mantenimiento",
      price: "$79",
      period: "/mes",
      desc: "Tu página siempre al día",
      features: [
        "Hosting incluido",
        "Actualizaciones ilimitadas",
        "Soporte prioritario",
        "Monitoreo 24/7",
        "Backups automáticos",
        "Reporte mensual",
      ],
      cta: "Suscribirse",
      featured: false,
    },
  ];

  return (
    <section id="precios" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Precios</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
            Transparente y justo
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            Sin sorpresas. Sabes exactamente lo que pagas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                p.featured
                  ? "bg-indigo-500/10 border border-indigo-500/30 glow scale-[1.02]"
                  : "bg-[#111] border border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-500 text-xs font-medium">
                  Más Popular
                </div>
              )}
              <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-space)" }}>{p.name}</h3>
              <p className="text-zinc-500 text-sm mt-1">{p.desc}</p>
              <div className="mt-6 mb-6">
                <span className="text-4xl font-bold" style={{ fontFamily: "var(--font-space)" }}>{p.price}</span>
                <span className="text-zinc-500 ml-1">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                    <IconCheck />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`block text-center py-3 rounded-full font-medium transition-all ${
                  p.featured
                    ? "bg-indigo-500 hover:bg-indigo-600 text-white"
                    : "bg-white/5 hover:bg-white/10 text-white border border-zinc-700"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT / CTA ─── */
function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Contacto</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
          ¿Listo para empezar?
        </h2>
        <p className="text-zinc-400 mt-4 max-w-xl mx-auto mb-10">
          Escríbenos y en menos de 24 horas tienes tu cotización.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:pulsedigitalstudios@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-600 transition-all font-medium text-lg glow-hover"
          >
            <IconMail />
            pulsedigitalstudios@gmail.com
          </a>
        </div>

        <div className="mt-8 text-zinc-500 text-sm">
          San Juan, Puerto Rico 🇵🇷
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
          <div className="w-6 h-6 rounded-md bg-indigo-500/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
          </div>
          <span className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Pulse Digital Studios
          </span>
        </div>
        <div className="flex gap-6 text-sm text-zinc-500">
          <a href="#servicios" className="hover:text-zinc-300 transition-colors">Servicios</a>
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
      <Services />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
