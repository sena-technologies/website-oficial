"use client"

import { useEffect } from "react"
import { useAnalytics } from "../hooks/use-analytics"

export default function ScrollTracker() {
  const { trackScrollDepth } = useAnalytics()

  useEffect(() => {
    let ticking = false
    const scrollDepths = [25, 50, 75, 90, 100]
    const trackedDepths = new Set<number>()

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          const scrollPercent = Math.round((scrollTop / docHeight) * 100)

          scrollDepths.forEach((depth) => {
            if (scrollPercent >= depth && !trackedDepths.has(depth)) {
              trackedDepths.add(depth)
              trackScrollDepth(depth)
            }
          })

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [trackScrollDepth])

  return null
}
