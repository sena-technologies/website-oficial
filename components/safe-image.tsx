"use client"

import Image from "next/image"
import { useState } from "react"

interface SafeImageProps {
  src?: string | null | undefined
  alt: string
  fallbackSrc?: string
  className?: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  sizes?: string
  style?: React.CSSProperties
}

/**
 * Componente SafeImage que previne src vazios e requisições desnecessárias
 * Automaticamente substitui por fallback se src for vazio/inválido
 */
export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  className,
  width,
  height,
  fill,
  priority,
  sizes,
  style,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(() => {
    // Validação inicial do src
    if (!src || src.trim() === "" || src === "undefined" || src === "null") {
      return fallbackSrc
    }
    return src
  })
  
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError && imgSrc !== fallbackSrc) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  const handleLoad = () => {
    setHasError(false)
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      sizes={sizes}
      style={style}
      onError={handleError}
      onLoad={handleLoad}
      {...props}
    />
  )
}
