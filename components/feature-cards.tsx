'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface Feature {
  icon: string
  title: string
  description: string
  width: number
  height: number
  imgClass: string
}

const features: Feature[] = [
  {
    icon: '/icons/communityy.png',
    title: 'COMMUNITY POWER',
    description: 'Every member adds energy to QYONA and makes the galaxy grow.',
    width: 537,
    height: 444,
    imgClass: 'w-11 sm:w-14 h-auto object-contain drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]',
  },
  {
    icon: '/icons/lightning.png',
    title: 'STRONGER TOGETHER',
    description: 'The more explorers join, the more powerful QYONA becomes.',
    width: 287,
    height: 458,
    imgClass: 'h-10 sm:h-13 w-auto object-contain drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]',
  },
  {
    icon: '/icons/planett.png',
    title: 'EXPLORE & EARN',
    description: 'Join missions, spread the word and earn rewards across the galaxy.',
    width: 565,
    height: 389,
    imgClass: 'w-11 sm:w-14 h-auto object-contain drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]',
  },
  {
    icon: '/icons/rockett (1).png',
    title: 'BUILT FOR THE FUTURE',
    description: 'QYONA is here for the long journey. Our future is the stars.',
    width: 439,
    height: 498,
    imgClass: 'h-10 sm:h-13 w-auto object-contain drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]',
  },
]

export default function FeatureCards() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070114] py-12 sm:py-16 lg:py-20">
      {/* 1. BLACK & DEEP PURPLE COSMIC LINEAR GRADIENT BASE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070114] via-[#0d0221] to-[#070114] pointer-events-none z-0" />

      {/* 2. MULTI-LAYERED COSMIC NEBULA RADIAL GRADIENTS MATCHING HERO */}
      {/* Center Deep Purple Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1300px] h-[350px] sm:h-[450px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7B2CBF]/40 via-[#9D4EDD]/20 to-transparent blur-[90px] rounded-full pointer-events-none z-0" />
      
      {/* Top-Left Violet Accent Flare */}
      <div className="absolute top-0 left-[10%] w-[500px] h-[300px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#a855f7]/30 via-[#5c1d91]/15 to-transparent blur-[80px] pointer-events-none z-0" />

      {/* Bottom-Right Cosmic Indigo Flare */}
      <div className="absolute bottom-0 right-[10%] w-[500px] h-[300px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#4A00E0]/30 via-[#250d4d]/20 to-transparent blur-[80px] pointer-events-none z-0" />

      {/* 3. PURE CSS STARFIELD MESH PATTERN */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none z-0 mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
            radial-gradient(circle at 45% 65%, rgba(216, 180, 254, 0.9) 1.5px, transparent 1.5px),
            radial-gradient(circle at 75% 35%, rgba(255, 255, 255, 0.7) 1px, transparent 1.px),
            radial-gradient(circle at 85% 85%, rgba(192, 132, 252, 0.8) 1.2px, transparent 1.2px),
            radial-gradient(circle at 30% 90%, rgba(255, 255, 255, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />

      {/* 4. COSMIC TWINKLING STARS & SPARKLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Pulsing Star Dots */}
        {[
          { top: '10%', left: '6%', size: 3, delay: 0 },
          { top: '24%', left: '90%', size: 2.5, delay: 0.6 },
          { top: '65%', left: '8%', size: 3.5, delay: 1.2 },
          { top: '85%', left: '94%', size: 2, delay: 0.4 },
          { top: '16%', left: '52%', size: 4, delay: 1.5 },
          { top: '78%', left: '46%', size: 2.5, delay: 0.8 },
          { top: '40%', left: '95%', size: 3, delay: 1.7 },
          { top: '90%', left: '26%', size: 3.5, delay: 0.3 },
          { top: '48%', left: '3%', size: 2, delay: 1.1 },
          { top: '94%', left: '68%', size: 3, delay: 1.4 },
        ].map((star, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, scale: 0.8 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 2.5 + (i % 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: star.delay,
            }}
            className="absolute rounded-full bg-white shadow-[0_0_10px_#d8b4fe]"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}

        {/* Sparkling 4-Point Cosmic Stars */}
        {[
          { top: '14%', left: '15%', size: 18, delay: 0.2 },
          { top: '80%', left: '86%', size: 22, delay: 0.9 },
          { top: '26%', left: '82%', size: 16, delay: 1.6 },
          { top: '82%', left: '16%', size: 18, delay: 0.5 },
          { top: '50%', left: '50%', size: 14, delay: 1.1 },
        ].map((sparkle, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{ opacity: 0.25, scale: 0.7, rotate: 0 }}
            animate={{
              opacity: [0.25, 1, 0.25],
              scale: [0.7, 1.2, 0.7],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 3.8 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: sparkle.delay,
            }}
            className="absolute text-[#d8b4fe]"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-[0_0_12px_rgba(216,180,254,0.95)]">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* 5. FEATURE CARDS CONTAINER */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0c0420]/70 backdrop-blur-2xl border border-purple-500/35 shadow-[0_20px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.2),0_0_50px_rgba(157,78,221,0.25)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-400/60 before:to-transparent"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-purple-500/20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center text-center p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:bg-white/[0.04]"
              >
                {/* ICON WITH PURPLE GLOW */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-5 sm:mb-6">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={feature.width}
                    height={feature.height}
                    className={`${feature.imgClass} group-hover:scale-125 group-hover:drop-shadow-[0_0_30px_rgba(192,132,252,0.95)] transition-all duration-400 ease-out`}
                  />
                </div>

                {/* TITLE WITH PURPLE HOVER ANIMATION */}
                <h3 className="font-spock font-bold text-sm sm:text-base md:text-lg tracking-wider text-white group-hover:text-[#c084fc] uppercase mb-2.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.9)] transition-all duration-300 ease-out">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="font-sans font-normal text-xs sm:text-sm text-[#cbd5e1] group-hover:text-white leading-relaxed max-w-[260px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

