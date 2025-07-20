"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useAnalytics } from "../hooks/use-analytics"
import { forwardRef } from "react"

interface TrackedButtonProps extends React.ComponentProps<typeof Button> {
  trackingName: string
  trackingLocation: string
  trackingType?: "button" | "contact"
}

const TrackedButton = forwardRef<HTMLButtonElement, TrackedButtonProps>(
  ({ trackingName, trackingLocation, trackingType = "button", onClick, children, ...props }, ref) => {
    const { trackButtonClick, trackContactClick } = useAnalytics()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Track the click
      if (trackingType === "contact") {
        trackContactClick(trackingName, trackingLocation)
      } else {
        trackButtonClick(trackingName, trackingLocation)
      }

      // Call original onClick if provided
      if (onClick) {
        onClick(e)
      }
    }

    return (
      <Button ref={ref} onClick={handleClick} {...props}>
        {children}
      </Button>
    )
  },
)

TrackedButton.displayName = "TrackedButton"

export default TrackedButton
