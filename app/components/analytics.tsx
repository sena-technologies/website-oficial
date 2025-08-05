"use client"

import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

// Configuração do Google Analytics
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
    dataLayer: Record<string, any>[]
  }
}

// Função para enviar eventos para o GA4
export const gtag = (command: string, targetId: string, config?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(command, targetId, config)
  }
}

// Função para tracking de page views
export const trackPageView = (url: string) => {
  gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

// Função para tracking de eventos personalizados
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  gtag("event", eventName, {
    event_category: "engagement",
    event_label: parameters?.label || "",
    value: parameters?.value || 0,
    ...parameters,
  })
}

// Função para tracking de conversões
export const trackConversion = (conversionName: string, parameters?: Record<string, any>) => {
  gtag("event", "conversion", {
    send_to: GA_MEASUREMENT_ID,
    event_category: "conversion",
    event_label: conversionName,
    ...parameters,
  })

  // Também enviar como evento personalizado
  gtag("event", conversionName, {
    event_category: "conversion",
    ...parameters,
  })
}

// Hook para tracking automático de page views
export function usePageTracking() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")
      trackPageView(url)
    }
  }, [pathname, searchParams])
}

// Componente principal do Analytics
export default function Analytics() {
  usePageTracking()

  return (
    <>
      {/* Google Analytics - Lazy Loading para não bloquear */}
      <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} 
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Google Analytics carregado')
        }}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: false
          });
        `}
      </Script>

      {/* Google Tag Manager - Lazy Loading */}
      <Script id="google-tag-manager" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </Script>
    </>
  )
}
