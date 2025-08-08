"use client"

import Link from "next/link"
import { ReactNode } from "react"

interface SafeLinkProps {
  href?: string | null | undefined
  children: ReactNode
  className?: string
  target?: string
  rel?: string
  onClick?: () => void
  fallbackBehavior?: "disable" | "prevent" | "hash"
}

/**
 * Componente SafeLink que previne href vazios e requisições desnecessárias
 * Opções de fallback: disable (desabilita), prevent (preventDefault), hash (href="#")
 */
export default function SafeLink({
  href,
  children,
  className,
  target,
  rel,
  onClick,
  fallbackBehavior = "hash",
  ...props
}: SafeLinkProps) {
  // Validação do href
  const isValidHref = href && href.trim() !== "" && href !== "undefined" && href !== "null"
  
  if (!isValidHref) {
    switch (fallbackBehavior) {
      case "disable":
        return (
          <span className={`${className} cursor-not-allowed opacity-50`}>
            {children}
          </span>
        )
      
      case "prevent":
        return (
          <a 
            className={className}
            onClick={(e) => {
              e.preventDefault()
              onClick?.()
            }}
            role="button"
            tabIndex={0}
            {...props}
          >
            {children}
          </a>
        )
      
      case "hash":
      default:
        return (
          <Link
            href="#"
            className={className}
            target={target}
            rel={rel}
            onClick={(e) => {
              e.preventDefault()
              onClick?.()
            }}
            {...props}
          >
            {children}
          </Link>
        )
    }
  }

  return (
    <Link
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  )
}
