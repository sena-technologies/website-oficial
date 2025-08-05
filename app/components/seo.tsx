'use client'

import { useEffect } from 'react'
import { organizationSchema } from '@/lib/schema'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noindex = false
}: SEOProps) {
  
  useEffect(() => {
    // Adicionar schema markup ao documento
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(organizationSchema)
    script.id = 'organization-schema'
    
    // Remove script anterior se existir
    const existingScript = document.getElementById('organization-schema')
    if (existingScript) {
      existingScript.remove()
    }
    
    document.head.appendChild(script)
    
    return () => {
      const scriptToRemove = document.getElementById('organization-schema')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [])

  useEffect(() => {
    // Atualizar meta tags dinamicamente se fornecidas
    if (title) {
      document.title = title
      updateMetaTag('og:title', title)
      updateMetaTag('twitter:title', title)
    }
    
    if (description) {
      updateMetaTag('description', description)
      updateMetaTag('og:description', description)
      updateMetaTag('twitter:description', description)
    }
    
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }
    
    if (canonical) {
      updateCanonical(canonical)
    }
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage)
      updateMetaTag('twitter:image', ogImage)
    }
    
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow')
    }
  }, [title, description, keywords, canonical, ogImage, noindex])

  return null
}

// Funções auxiliares
function updateMetaTag(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`) ||
             document.querySelector(`meta[property="${name}"]`)
  
  if (!meta) {
    meta = document.createElement('meta')
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      meta.setAttribute('property', name)
    } else {
      meta.setAttribute('name', name)
    }
    document.head.appendChild(meta)
  }
  
  meta.setAttribute('content', content)
}

function updateCanonical(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]')
  
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  
  canonical.setAttribute('href', url)
}
