import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Analytics from "./components/analytics"
import ScrollTracker from "./components/scroll-tracker"
import SEO from "./components/seo"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://senatechnologies.com.br'),
  title: {
    default: "Sena Technologies - Desenvolvimento Web e Apps em Joinville-SC | Santa Catarina",
    template: "%s | Sena Technologies Joinville-SC"
  },
  description:
    "🚀 Sena Technologies: Especialistas em desenvolvimento web, aplicativos mobile, sistemas personalizados e automações para MEIs, pequenas empresas e profissionais liberais nas regiões Sul e Sudeste do Brasil. Atendemos SC, PR, RS, SP, RJ, MG e ES. Transformação digital acessível e resultados garantidos.",
  keywords: [
    // Keywords principais - Joinville e região
    "desenvolvimento web Joinville",
    "criação de sites Joinville SC",
    "aplicativo mobile Joinville",
    "sistema web Joinville",
    "desenvolvimento web Santa Catarina",
    "criação de sites Blumenau",
    "desenvolvimento web Florianópolis",
    "programador Joinville",
    "desenvolvedor web Santa Catarina",
    
    // Keywords regionais SC
    "desenvolvimento web Vale do Itajaí",
    "criação de sites SC",
    "aplicativo mobile Santa Catarina",
    "desenvolvimento web Belo Horizonte",
    "criação de sites Sudeste",
    
    // Serviços principais
    "aplicativos mobile",
    "sistemas personalizados",
    "chatbot WhatsApp",
    "e-commerce",
    "loja virtual",
    
    // Long tail keywords - Sul
    "programador Joinville SC",
    "desenvolvedor web Curitiba PR",
    "empresa tecnologia Porto Alegre RS",
    "sites para empresas Santa Catarina",
    "aplicativo mobile Paraná",
    
    // Long tail keywords - Sudeste
    "programador São Paulo SP", 
    "desenvolvedor web Rio de Janeiro RJ",
    "empresa tecnologia Belo Horizonte MG",
    "sites para empresas São Paulo",
    "sistemas personalizados Minas Gerais",
    
    // Cidades específicas
    "Joinville", "Blumenau", "Florianópolis",
    "Curitiba", "Londrina", "Maringá", 
    "Porto Alegre", "Caxias do Sul", "Pelotas",
    "São Paulo", "Campinas", "Santos",
    "Rio de Janeiro", "Niterói", "Petrópolis",
    "Belo Horizonte", "Uberlândia", "Juiz de Fora",
    
    // Negócio específico
    "MEI", "pequenas empresas", "profissionais liberais",
    "transformação digital", "automação comercial",
    
    // Técnico
    "React", "Next.js", "TypeScript", "Node.js",
    "API", "integração", "CRM", "ERP", "chatbot"
  ].join(", "),
  authors: [{ name: "Igor Paes", url: "https://senatechnologies.com.br" }],
  creator: "Sena Technologies",
  publisher: "Sena Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://senatechnologies.com",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://senatechnologies.com.br",
    title: "Sena Technologies - Desenvolvimento Web Sul e Sudeste do Brasil",
    description:
      "🚀 Transforme seu negócio com soluções digitais personalizadas! Desenvolvemos sites, apps, sistemas e automações para MEIs e pequenas empresas nas regiões Sul e Sudeste. Atendemos SC, PR, RS, SP, RJ, MG, ES. Orçamento gratuito!",
    siteName: "Sena Technologies",
    images: [
      {
        url: "/Frame-3.webp",
        width: 1200,
        height: 630,
        alt: "Sena Technologies - Desenvolvimento Web Sul e Sudeste do Brasil",
        type: "image/webp",
      },
      {
        url: "/Frame-3.webp",
        width: 1200,
        height: 630,
        alt: "Sena Technologies - Soluções em Tecnologia",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@senatechnologies",
    creator: "@igorpaes",
    title: "Sena Technologies - Desenvolvimento Web Sul e Sudeste",
    description: "🚀 Transformamos ideias em soluções digitais! Sites, apps, sistemas e automações nas regiões Sul e Sudeste do Brasil. Orçamento gratuito!",
    images: [
      {
        url: "/logo-sena.webp",
        alt: "Sena Technologies - Desenvolvimento Web Sul e Sudeste",
      }
    ],
  },
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
    yahoo: "yahoo-verification-code-here",
  },
  category: "Technology",
  classification: "Software Development",
  generator: "Next.js 15.2.4",
  applicationName: "Sena Technologies",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#2d89ef",
    "msapplication-config": "/browserconfig.xml",
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Resource Hints - apenas recursos críticos no head */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preload de scripts críticos apenas se necessário */}
        <link rel="modulepreload" href="/_next/static/chunks/vendors-64358f97d58841aa.js" />
        
        {/* Meta tags e links críticos */}
        <link rel="icon" type="image/webp" sizes="32x32" href="/ellipse-1.webp" />
        <link rel="icon" type="image/webp" sizes="16x16" href="/ellipse-1.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/ellipse-1.webp" />
        <meta name="msapplication-TileImage" content="/ellipse-1.webp" />
        <link rel="canonical" href="https://senatechnologies.com.br" />
        <meta name="geo.region" content="BR-SC" />
        <meta name="geo.placename" content="JOINVILLE" />
        <meta name="geo.position" content="-26.3044;-48.8487" />
        <meta name="ICBM" content="-26.3044, -48.8487" />
        
        {/* Preload apenas de recursos críticos */}
        <link rel="preload" href="/ellipse-1.webp" as="image" type="image/webp" />
        <link rel="preload" href="/logo-sena.webp" as="image" type="image/webp" />
      </head>
      <body className={inter.className}>
        <SEO canonical="https://senatechnologies.com.br" />
        <Suspense fallback={<div>Loading...</div>}>
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

        {/* SCRIPTS MOVIDOS PARA O FINAL - Não bloqueiam renderização */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
