'use client'

import { useRef, useEffect, ReactNode } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'
  amount?: number
  margin?: string
}

export function AnimatedSection({
  children,
  className = '',
  id,
  delay = 0,
  direction = 'up',
  amount = 0.2,
  margin = '0px 0px -5% 0px',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount, margin: margin as any })


  const getVariants = (): Variants => {
    let initialX = 0
    let initialY = 0
    let initialScale = 1

    switch (direction) {
      case 'up':
        initialY = 40
        break
      case 'down':
        initialY = -40
        break
      case 'left':
        initialX = 50
        break
      case 'right':
        initialX = -50
        break
      case 'scale':
        initialScale = 0.92
        initialY = 20
        break
      case 'none':
        break
    }

    return {
      hidden: {
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: initialScale,
        filter: 'blur(4px)',
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0], // smooth cubic-bezier
        },
      },
    }
  }

  return (
    <motion.div
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface GSAPParallaxProps {
  children: ReactNode
  className?: string
  speed?: number // Speed factor, e.g. -0.2 to 0.2
}

export function GSAPParallax({ children, className = '', speed = 0.15 }: GSAPParallaxProps) {
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!targetRef.current || typeof window === 'undefined') return

    const element = targetRef.current

    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: () => speed * 150,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
    })

    return () => ctx.revert()
  }, [speed])

  return (
    <div ref={targetRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  amount?: number
  margin?: string
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.12,
  amount = 0.15,
  margin = '0px 0px -5% 0px',
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount, margin: margin as any })


  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}
