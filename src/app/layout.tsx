import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Diseño Web Puerto Rico | Pulse Digital Studios — San Juan, PR",
  description:
    "Diseño web profesional para negocios locales en Puerto Rico. Restaurantes, barberías, salones y talleres. Página lista en 72 horas desde $299. Llama hoy.",
  keywords: ["diseño web Puerto Rico", "páginas web San Juan", "web design PR", "diseño web restaurantes", "página web negocio local", "diseño web barberías Puerto Rico"],
  metadataBase: new URL("https://pulsedigitalstudios.tech"),
  alternates: {
    canonical: "https://pulsedigitalstudios.tech",
  },
  openGraph: {
    title: "Diseño Web para Negocios Locales | Pulse Digital Studios",
    description: "Páginas web profesionales desde $299. Restaurantes, barberías, salones en Puerto Rico. Lista en 72 horas.",
    url: "https://pulsedigitalstudios.tech",
    siteName: "Pulse Digital Studios",
    locale: "es_PR",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Pulse Digital Studios — Diseño Web Puerto Rico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño Web Puerto Rico | Pulse Digital Studios",
    description: "Páginas web profesionales desde $299 para negocios locales en Puerto Rico.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Pulse Digital Studios",
              "description": "Diseño web profesional para negocios locales en Puerto Rico",
              "url": "https://pulsedigitalstudios.tech",
              "telephone": "+1-787-607-4747",
              "email": "pulsedigitalstudios@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Juan",
                "addressRegion": "PR",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.4655,
                "longitude": -66.1057
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                "opens": "08:00",
                "closes": "20:00"
              },
              "priceRange": "$299-$599",
              "sameAs": []
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cuánto cuesta una página web para mi negocio?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nuestros planes empiezan en $299 para páginas de 1-3 secciones y $599 para páginas profesionales de 5-8 secciones. Mantenimiento mensual desde $99."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto tiempo toma tener mi página lista?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Entregamos páginas Starter en 24-48 horas y páginas Professional en 48-72 horas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Hacen páginas web para restaurantes y barberías en Puerto Rico?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, nos especializamos en negocios locales de Puerto Rico: restaurantes, barberías, salones de belleza, talleres mecánicos y más."
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
