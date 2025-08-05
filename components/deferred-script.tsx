"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

interface DeferredScriptProps {
  src?: string
  id?: string
  strategy?: "lazyOnload" | "afterInteractive" | "beforeInteractive"
  children?: string
  onLoad?: () => void
  priority?: boolean
}

/**
 * Componente para carregamento otimizado de scripts
 * Carrega scripts apenas após a página estar totalmente renderizada
 */
export default function DeferredScript({
  src,
  id,
  strategy = "lazyOnload",
  children,
  onLoad,
  priority = false
}: DeferredScriptProps) {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Espera a página carregar completamente antes de carregar scripts não críticos
    if (priority) {
      setShouldLoad(true)
    } else {
      const timer = setTimeout(() => {
        setShouldLoad(true)
      }, 100) // Pequeno delay para não bloquear renderização inicial

      return () => clearTimeout(timer)
    }
  }, [priority])

  useEffect(() => {
    // Carrega scripts quando a página estiver idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        setShouldLoad(true)
      })
    } else {
      // Fallback para browsers que não suportam requestIdleCallback
      setTimeout(() => {
        setShouldLoad(true)
      }, 200)
    }
  }, [])

  if (!shouldLoad) {
    return null
  }

  return (
    <Script
      src={src}
      id={id}
      strategy={strategy}
      onLoad={onLoad}
    >
      {children}
    </Script>
  )
}
