"use client"

import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "left"
  delay?: 0 | 1 | 2 | 3 | 4 | 5
}

export function Reveal({ children, className, direction = "up", delay = 0 }: RevealProps) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={cn(
        direction === "up" ? "reveal-up" : "reveal-left",
        delay > 0 && `reveal-delay-${delay}`,
        className
      )}
    >
      {children}
    </div>
  )
}
