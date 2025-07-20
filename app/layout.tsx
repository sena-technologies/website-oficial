import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Analytics from "./components/analytics"
import ScrollTracker from "./components/scroll-tracker"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sena Technologies - Soluções que movem o seu negócio para o próximo nível",
  description:
    "Especialistas em transformação digital para pequenas empresas, MEIs e profissionais liberais. Desenvolvimento web, apps, sistemas personalizados, bots e integrações.",
  keywords:
    "desenvolvimento web, aplicativos mobile, sistemas personalizados, chatbot whatsapp, MEI, pequenas empresas, profissionais liberais, transformação digital",
  authors: [{ name: "Sena Technologies" }],
  creator: "Sena Technologies",
  publisher: "Sena Technologies",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://senatechnologies.com",
    title: "Sena Technologies - Soluções que movem o seu negócio para o próximo nível",
    description:
      "Especialistas em transformação digital para pequenas empresas, MEIs e profissionais liberais. Soluções acessíveis e eficazes.",
    siteName: "Sena Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sena Technologies - Soluções em Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sena Technologies - Soluções Inovadoras em Tecnologia",
    description: "Transformamos ideias em soluções digitais. Entre em contato!",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#06b6d4",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.webp" />
        <link rel="canonical" href="https://senatechnologies.com" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São Paulo" />
        <meta name="geo.position" content="-23.5505;-46.6333" />
        <meta name="ICBM" content="-23.5505, -46.6333" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <Analytics />
          <ScrollTracker />
          {children}
        </Suspense>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  )
}
