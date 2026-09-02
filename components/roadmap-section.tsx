'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection, StaggerContainer, staggerItemVariants } from '@/components/ui/animated-section'

interface RoadmapPhase {
  number: string
  phaseLabel: string
  title: string
  status?: string
  image: string
  items: string[]
}

const roadmapPhases: RoadmapPhase[] = [
  {
    number: '01',
    phaseLabel: 'PHASE 01',
    title: 'AWAKENING',
    status: 'IN PROGRESS',
    image: '/roadmap/1-.avif',
    items: [
      'Launch the QYONA Universe',
      'Establish the official QYONA character',
      'Begin the Mission Log story',
      'Build the first community',
      'Grow X and Telegram organically',
      'Develop the official website',
    ],
  },
  {
    number: '02',
    phaseLabel: 'PHASE 02',
    title: 'DISCOVERY',
    status: 'NEXT',
    image: '/roadmap/2-.avif',
    items: [
      'Continue the QYONA Mission series',
      'Launch community missions',
      'Introduce the QYONA Whitelist',
      'Reveal additional QYONA Universe lore',
      'Expand community activities',
      'Prepare the next stage of the ecosystem',
    ],
  },
  {
    number: '03',
    phaseLabel: 'PHASE 03',
    title: 'ACTIVATION',
    image: '/roadmap/3-.avif',
    items: [
      'Official website launch',
      'QYN ecosystem information',
      'Community events',
      'Whitelist activation',
      'NFT / digital collectible concepts',
      'Additional QYONA Universe experiences',
    ],
  },
  {
    number: '04',
    phaseLabel: 'PHASE 04',
    title: 'THE UNIVERSE',
    image: '/roadmap/4-.avif',
    items: [
      'Expand the QYONA storyline',
      'Introduce new worlds and characters',
      'Community-driven events',
      'New digital experiences',
      'Ecosystem expansion',
      'Continue building the QYONA Universe together',
    ],
  },
  {
    number: '05',
    phaseLabel: 'PHASE 05',
    title: 'BEYOND',
    image: '/roadmap/5-.avif',
    items: [
      'The destination is unknown.',
      "QYONA's universe will evolve together with its community.",
      'New missions.',
      'New discoveries.',
      'New worlds.',
    ],
  },
]

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative w-full overflow-hidden bg-[#070114] py-16 sm:py-24 lg:py-28">
      {/* 1. BLACK & DEEP PURPLE COSMIC GRADIENT BASE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070114] via-[#0d0221] to-[#070114] pointer-events-none z-0" />

      {/* 2. MULTI-LAYERED COSMIC NEBULA RADIAL GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[1400px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7B2CBF]/35 via-[#9D4EDD]/20 to-transparent blur-[110px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[350px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#a855f7]/25 via-[#5c1d91]/12 to-transparent blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[350px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#4A00E0]/25 via-[#250d4d]/15 to-transparent blur-[90px] pointer-events-none z-0" />

      {/* 3. PURE CSS STARFIELD MESH PATTERN */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none z-0 mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(255, 255, 255, 0.8) 1.2px, transparent 1.2px),
            radial-gradient(circle at 45% 65%, rgba(216, 180, 254, 0.9) 1.8px, transparent 1.8px),
            radial-gradient(circle at 75% 35%, rgba(255, 255, 255, 0.75) 1.2px, transparent 1.2px),
            radial-gradient(circle at 85% 85%, rgba(192, 132, 252, 0.85) 1.4px, transparent 1.4px),
            radial-gradient(circle at 30% 90%, rgba(255, 255, 255, 0.7) 1.2px, transparent 1.2px)
          `,
          backgroundSize: '110px 110px',
        }}
      />

      {/* 4. COSMIC TWINKLING STARS & SPARKLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[
          { top: '10%', left: '6%', size: 3.5, delay: 0 },
          { top: '22%', left: '94%', size: 3, delay: 0.6 },
          { top: '68%', left: '10%', size: 4, delay: 1.2 },
          { top: '88%', left: '90%', size: 2.5, delay: 0.4 },
          { top: '16%', left: '52%', size: 4.5, delay: 1.5 },
          { top: '76%', left: '46%', size: 3, delay: 0.8 },
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
            className="absolute rounded-full bg-white shadow-[0_0_12px_#d8b4fe]"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}

        {[
          { top: '14%', left: '16%', size: 20, delay: 0.2 },
          { top: '82%', left: '84%', size: 24, delay: 0.9 },
          { top: '26%', left: '80%', size: 18, delay: 1.6 },
        ].map((sparkle, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{ opacity: 0.25, scale: 0.7, rotate: 0 }}
            animate={{
              opacity: [0.25, 1, 0.25],
              scale: [0.7, 1.25, 0.7],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 4 + i,
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
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-[0_0_14px_rgba(216,180,254,0.95)]">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* 5. MAIN SECTION CONTAINER */}
      <div className="relative z-10 w-full max-w-[1530px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER: ROCKET ICON + QYONA ROADMAP TITLE + SUBTITLE ================= */}
        <AnimatedSection direction="up" amount={0.15}>
          <div className="flex flex-col items-center text-center mb-10 sm:mb-14 lg:mb-16">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
              {/* ROCKET ICON FROM PUBLIC/ICONS */}
              <div className="relative w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                <Image
                  src="/icons/rockett (1).png"
                  alt="Rocket"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.95)]"
                />
              </div>

              {/* MAIN TITLE (Custom Font Bold) */}
              <h2 className="font-spock font-black uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.85)]">
                QYONA ROADMAP
              </h2>
            </div>

            {/* SUBTITLE */}
            <p className="font-spock font-bold text-xs sm:text-sm md:text-base text-[#cbd5e1] tracking-[0.2em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              TOGETHER, WE EXPLORE. TOGETHER, WE BUILD.
            </p>
          </div>
        </AnimatedSection>

        {/* ================= ROADMAP CONTAINER FRAME ================= */}
        <AnimatedSection direction="up" amount={0.1} delay={0.1}>
          <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-[#0c0420]/75 backdrop-blur-2xl border border-purple-500/35 shadow-[0_25px_80px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.2),0_0_50px_rgba(157,78,221,0.25)] p-4 sm:p-6 lg:p-7 xl:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-400/60 before:to-transparent">
            {/* DESKTOP CONNECTING LINE PASSING THROUGH PHASE BADGES (LG ONLY) */}
            <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-purple-500/30 via-[#a855f7] to-purple-500/30 shadow-[0_0_14px_#a855f7] z-0 pointer-events-none" />

            {/* 5 PHASE CARDS GRID */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-3.5 xl:gap-4 relative z-10" staggerDelay={0.09}>
              {roadmapPhases.map((phase) => (
                <motion.div
                  key={phase.number}
                  variants={staggerItemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative flex flex-col items-center text-left rounded-[24px] overflow-hidden bg-[#070118]/85 border border-purple-500/30 hover:border-purple-400/70 transition-all duration-300 p-4 sm:p-5 hover:shadow-[0_15px_40px_rgba(168,85,247,0.3)]"
                >
                  {/* 1. PHASE LABEL */}
                  <span className="font-spock font-bold text-[11px] sm:text-xs text-[#a855f7] tracking-[0.2em] uppercase mb-2 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
                    {phase.phaseLabel}
                  </span>

                  {/* 2. HEXAGON NUMBER BADGE */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3">
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#a855f7] group-hover:text-[#c084fc] transition-colors duration-300 drop-shadow-[0_0_14px_rgba(168,85,247,0.85)]">
                      <polygon points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" fill="#12052b" stroke="currentColor" strokeWidth="4" />
                    </svg>
                    <span className="relative z-10 font-spock font-black text-xl sm:text-2xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
                      {phase.number}
                    </span>
                  </div>

                  {/* 3. PHASE TITLE */}
                  <h3 className="font-spock font-black text-base sm:text-lg lg:text-base xl:text-lg text-white uppercase tracking-wider text-center mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-[#c084fc] transition-colors duration-300">
                    {phase.title}
                  </h3>

                  {/* 4. OPTIONAL STATUS BADGE */}
                  {phase.status && (
                    <span className="px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-spock font-bold uppercase tracking-wider bg-purple-500/20 text-[#d8b4fe] border border-purple-400/40 shadow-[0_0_12px_rgba(168,85,247,0.4)] mb-3">
                      {phase.status}
                    </span>
                  )}
                  {!phase.status && <div className="h-6 mb-1" />}

                  {/* 5. CHARACTER IMAGE FROM PUBLIC/ROADMAP (NEWER AVIF IMAGES WITH MORE HEIGHT) */}
                  <div className="relative w-full h-[260px] sm:h-[320px] md:h-[340px] lg:h-[260px] xl:h-[300px] 2xl:h-[350px] rounded-[20px] overflow-hidden mb-5 bg-[#0a021c]">
                    <Image
                      src={phase.image}
                      alt={phase.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {/* Subtle bottom gradient overlay for smooth blending */}
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#070118] via-[#070118]/40 to-transparent pointer-events-none" />
                  </div>

                  {/* 6. BULLET POINTS LIST */}
                  <ul className="w-full flex flex-col gap-2 mt-1">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] shadow-[0_0_8px_#a855f7] mt-1.5 flex-shrink-0" />
                        <span className="font-sans font-normal text-xs sm:text-xs xl:text-[13px] text-[#cbd5e1] leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
