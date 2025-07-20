"use client"

import { useCallback } from "react"
import { trackEvent, trackConversion } from "../components/analytics"

export function useAnalytics() {
  // Tracking de cliques em botões
  const trackButtonClick = useCallback((buttonName: string, location: string) => {
    trackEvent("button_click", {
      button_name: buttonName,
      location: location,
      event_category: "engagement",
    })
  }, [])

  // Tracking de conversões do formulário
  const trackFormSubmission = useCallback((formType: string, success: boolean) => {
    if (success) {
      trackConversion("form_submission", {
        form_type: formType,
        event_category: "conversion",
        value: 1,
      })
    }

    trackEvent("form_submit", {
      form_type: formType,
      success: success,
      event_category: "form",
    })
  }, [])

  // Tracking de cliques em contato
  const trackContactClick = useCallback((contactType: string, location: string) => {
    trackEvent("contact_click", {
      contact_type: contactType,
      location: location,
      event_category: "contact",
    })

    // Também trackear como conversão
    trackConversion("contact_intent", {
      contact_type: contactType,
      location: location,
    })
  }, [])

  // Tracking de visualização de seções
  const trackSectionView = useCallback((sectionName: string) => {
    trackEvent("section_view", {
      section_name: sectionName,
      event_category: "engagement",
    })
  }, [])

  // Tracking de downloads
  const trackDownload = useCallback((fileName: string, fileType: string) => {
    trackEvent("file_download", {
      file_name: fileName,
      file_type: fileType,
      event_category: "download",
    })
  }, [])

  // Tracking de scroll depth
  const trackScrollDepth = useCallback((percentage: number) => {
    trackEvent("scroll_depth", {
      scroll_percentage: percentage,
      event_category: "engagement",
    })
  }, [])

  return {
    trackButtonClick,
    trackFormSubmission,
    trackContactClick,
    trackSectionView,
    trackDownload,
    trackScrollDepth,
  }
}
