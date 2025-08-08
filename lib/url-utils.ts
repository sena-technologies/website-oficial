/**
 * Utilitários para validação e sanitização de URLs
 * Previne src/href vazios que causam requisições desnecessárias
 */

/**
 * Verifica se uma URL é válida e não está vazia
 */
export function isValidUrl(url: unknown): url is string {
  if (typeof url !== "string") return false
  
  const trimmedUrl = url.trim()
  
  // Verifica se não está vazio
  if (trimmedUrl === "") return false
  
  // Verifica se não são valores de placeholder/debug
  if (trimmedUrl === "undefined" || trimmedUrl === "null") return false
  if (trimmedUrl.includes("XXXXXXXXXX")) return false
  if (trimmedUrl.includes("placeholder") && trimmedUrl.includes("undefined")) return false
  
  return true
}

/**
 * Sanitiza uma URL, retornando fallback se inválida
 */
export function sanitizeUrl(url: unknown, fallback = "#"): string {
  return isValidUrl(url) ? url : fallback
}

/**
 * Sanitiza src de imagem, retornando placeholder se inválido
 */
export function sanitizeImageSrc(src: unknown, fallback = "/placeholder.svg"): string {
  return isValidUrl(src) ? src : fallback
}

/**
 * Previne requisições vazias em elementos img/link
 */
export function preventEmptyRequests() {
  if (typeof window === "undefined") return
  
  // Intercepta cliques em links vazios
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    const link = target.closest("a")
    
    if (link && (!link.href || link.href === "" || link.href === window.location.href + "#")) {
      e.preventDefault()
    }
  })
  
  // Verifica imagens com src vazio
  const checkImages = () => {
    const images = document.querySelectorAll("img")
    images.forEach((img) => {
      if (!img.src || img.src === "" || img.src === window.location.href) {
        console.warn("Imagem com src vazio detectada:", img)
        img.src = "/placeholder.svg"
      }
    })
  }
  
  // Executa verificação inicial e observa mudanças
  checkImages()
  
  const observer = new MutationObserver(checkImages)
  observer.observe(document.body, { childList: true, subtree: true })
}
