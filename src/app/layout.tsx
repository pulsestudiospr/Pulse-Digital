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
  title: "Pulse Digital Studios | Diseño Web Profesional — Puerto Rico",
  description:
    "Páginas web profesionales para negocios locales en Puerto Rico. Restaurantes, barberías, salones, talleres y más. Entrega en 72 horas.",
  keywords: ["diseño web", "Puerto Rico", "páginas web", "web design", "negocios locales", "San Juan"],
  metadataBase: new URL("https://pulsedigitalstudios.tech"),
  openGraph: {
    title: "Pulse Digital Studios",
    description: "Diseño web profesional para negocios locales en Puerto Rico.",
    url: "https://pulsedigitalstudios.tech",
    siteName: "Pulse Digital Studios",
    locale: "es_PR",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Pulse Digital Studios" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulse Digital Studios",
    description: "Diseño web profesional para negocios locales en Puerto Rico.",
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
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
