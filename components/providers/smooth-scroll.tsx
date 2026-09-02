'use client'

import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    // Attach lenis to window for global smooth scroll calls
    ;(window as any).__lenis = lenis

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', () => {
      ScrollTrigger.update()
    })

    // Add Lenis's raf to GSAP's ticker
    const updateGsap = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateGsap)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(updateGsap)
      delete (window as any).__lenis
      lenis.destroy()
    }

  }, [])

  return <>{children}</>
}

