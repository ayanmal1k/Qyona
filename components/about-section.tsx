'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection, StaggerContainer, staggerItemVariants, GSAPParallax } from '@/components/ui/animated-section'

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
    imgClass: 'w-10 md:w-11 lg:w-13 h-auto object-contain drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]',
  },
  {
    icon: '/icons/lightning.png',
    title: 'STRONGER TOGETHER',
    description: 'The more explorers join, the more powerful QYONA becomes.',
    width: 287,
    height: 458,
    imgClass: 'h-9 md:h-10 lg:h-12 w-auto object-contain drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]',
  },
  {
    icon: '/icons/planett.png',
    title: 'EXPLORE & EARN',
    description: 'Join missions, spread the word and earn rewards across the galaxy.',
    width: 565,
    height: 389,
    imgClass: 'w-10 md:w-11 lg:w-13 h-auto object-contain drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]',
  },
  {
    icon: '/icons/rockett (1).png',
    title: 'BUILT FOR THE FUTURE',
    description: 'QYONA is here for the long journey. Our future is the stars.',
    width: 439,
    height: 498,
    imgClass: 'h-9 md:h-10 lg:h-12 w-auto object-contain drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#070114] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. DESKTOP & TABLET VIEW (md: and above, 1920x1080 Aspect Ratio)          */}
      {/* Background image (about-bg.avif). Top 35% height is Feature Cards,        */}
      {/* Below 65% height is About Section with title in custom font bold.         */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-[1920px] mx-auto hidden md:flex md:flex-col md:aspect-[1920/1080] md:min-h-[720px] lg:min-h-[820px] xl:min-h-[960px] overflow-hidden">
        {/* DESKTOP BACKGROUND IMAGE WITH GSAP PARALLAX (1920x1080) */}
        <GSAPParallax speed={0.1} className="absolute inset-0 select-none pointer-events-none z-0">
          <Image
            src="/about-bg.avif"
            alt="QYONA About Background"
            fill
            priority
            quality={100}
            className="w-full h-full object-cover xl:object-contain object-center scale-105"
            sizes="(min-width: 768px) 100vw, 1px"
          />
        </GSAPParallax>

        {/* SUBTLE VIOLET GLOW OVERLAY FOR HARMONIOUS INTEGRATION */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070114]/40 via-transparent to-[#070114]/60 pointer-events-none z-[1]" />

        {/* TOP 35%: FEATURE CARDS CONTAINER */}
        <div className="relative z-10 w-full h-[35%] flex items-center justify-center max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-14 pt-6 md:pt-8 lg:pt-10">
          <AnimatedSection direction="up" amount={0.15} className="w-full">
            <div className="w-full relative rounded-[22px] lg:rounded-[28px] overflow-hidden bg-[#0c0420]/65 backdrop-blur-xl border border-purple-500/35 shadow-[0_15px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2),0_0_35px_rgba(157,78,221,0.2)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-400/60 before:to-transparent">
              <StaggerContainer className="grid grid-cols-4 divide-x divide-purple-500/20" staggerDelay={0.08}>
                {features.map((feature) => (
                  <motion.div
                    key={feature.title}
                    variants={staggerItemVariants}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group flex flex-col items-center text-center p-4 lg:p-6 xl:p-7 transition-all duration-300 hover:bg-white/[0.03]"
                  >
                    {/* ICON WITH PURPLE GLOW */}
                    <div className="relative w-11 h-11 lg:w-13 lg:h-13 xl:w-15 xl:h-15 flex items-center justify-center mb-2.5 lg:mb-3.5">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={feature.width}
                        height={feature.height}
                        className={`${feature.imgClass} group-hover:scale-115 group-hover:drop-shadow-[0_0_24px_rgba(192,132,252,0.95)] transition-all duration-300 ease-out`}
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className="font-spock font-bold text-xs lg:text-sm xl:text-base tracking-wider text-white group-hover:text-[#c084fc] uppercase mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_16px_rgba(168,85,247,0.9)] transition-all duration-300 ease-out">
                      {feature.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="font-sans font-normal text-xs lg:text-xs xl:text-sm text-[#cbd5e1] group-hover:text-white leading-relaxed max-w-[240px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors duration-300">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>

        {/* BELOW 65%: ABOUT SECTION CONTENT (DESKTOP) */}
        {/* Left side is left empty for mascot character in background; right side contains title & text */}
        <div className="relative z-10 w-full h-[65%] max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-14 pb-8 lg:pb-14 flex items-center">
          <div className="w-full grid grid-cols-12 gap-6 items-center">
            {/* Left 5 cols empty for character in background */}
            <div className="col-span-5 pointer-events-none select-none" aria-hidden="true" />

            {/* Right 7 cols with title in custom font bold */}
            <div className="col-span-7 pl-2 lg:pl-6 xl:pl-10">
              <AnimatedSection direction="left" amount={0.2} className="flex flex-col items-start text-left">
                {/* Purple Label */}
                <span className="font-spock font-bold text-xs lg:text-sm xl:text-base text-[#a855f7] tracking-[0.2em] uppercase drop-shadow-[0_0_14px_rgba(168,85,247,0.9)] mb-2.5 inline-block">
                  ABOUT QYONA
                </span>

                {/* Headline (Animated Cosmic Gradient Title with Hover Interaction) */}
                <motion.h2
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  whileHover={{
                    scale: 1.03,
                    x: 4,
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    scale: { type: 'spring', stiffness: 350, damping: 18 },
                    x: { type: 'spring', stiffness: 350, damping: 18 },
                  }}
                  className="cursor-pointer font-spock font-black uppercase text-2xl md:text-3xl lg:text-[40px] xl:text-[48px] leading-[1.12] tracking-wide bg-gradient-to-r from-white via-[#f3e8ff] via-[#c084fc] via-[#9333ea] via-[#e9d5ff] via-white to-[#c084fc] bg-[length:250%_auto] bg-clip-text text-transparent mb-4 lg:mb-5 drop-shadow-[0_0_25px_rgba(168,85,247,0.65)] hover:drop-shadow-[0_0_50px_rgba(216,180,254,0.95)] transition-all duration-300 select-none"
                >
                  A JOURNEY BEYOND<br />THE STARS
                </motion.h2>

                {/* Paragraph 1 */}
                <p className="font-sans font-normal text-xs md:text-sm lg:text-base xl:text-[17px] text-[#cbd5e1] leading-relaxed mb-3.5 max-w-[560px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  QYONA comes from a distant galaxy where energy is life. Now QYONA has found a new{' '}
                  <span className="text-[#a855f7] font-medium drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
                    home
                  </span>{' '}
                  here on Earth — with YOU.
                </p>

                {/* Paragraph 2 */}
                <p className="font-sans font-normal text-xs md:text-sm lg:text-base xl:text-[17px] text-[#cbd5e1] leading-relaxed max-w-[560px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Help QYONA collect the energy of the community and become the brightest star in the universe.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE VIEW (< md)                                                     */}
      {/* Feature cards rendered on current black & purple cosmic gradient + stars; */}
      {/* then About section on about-bg-mobile.avif with bottom 40% empty.         */}
      {/* ========================================================================= */}
      <div className="block md:hidden w-full bg-[#070114]">
        {/* MOBILE FEATURE CARDS ON CURRENT BG WITH GRADIENT & STARS */}
        <div className="relative w-full overflow-hidden bg-[#070114] py-10 px-4 sm:px-6">
          {/* Cosmic gradient base */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070114] via-[#0d0221] to-[#070114] pointer-events-none z-0" />

          {/* Central purple nebula glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[320px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7B2CBF]/35 via-[#9D4EDD]/15 to-transparent blur-[80px] rounded-full pointer-events-none z-0" />

          {/* Starfield pattern */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none z-0 mix-blend-screen"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 25%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
                radial-gradient(circle at 75% 35%, rgba(216, 180, 254, 0.9) 1.5px, transparent 1.5px),
                radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.7) 1px, transparent 1.5px)
              `,
              backgroundSize: '100px 100px',
            }}
          />

          <AnimatedSection direction="up" amount={0.15} className="relative z-10 w-full max-w-[500px] mx-auto">
            <div className="relative rounded-[22px] overflow-hidden bg-[#0c0420]/75 backdrop-blur-xl border border-purple-500/35 divide-y divide-purple-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_30px_rgba(157,78,221,0.2)]">
              <StaggerContainer staggerDelay={0.1}>
                {features.map((feature) => (
                  <motion.div
                    key={feature.title}
                    variants={staggerItemVariants}
                    className="flex flex-col items-center text-center p-5 sm:p-6"
                  >
                    <div className="relative w-12 h-12 flex items-center justify-center mb-3">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={feature.width}
                        height={feature.height}
                        className={feature.imgClass}
                      />
                    </div>
                    <h3 className="font-spock font-bold text-sm tracking-wider text-white uppercase mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {feature.title}
                    </h3>
                    <p className="font-sans font-normal text-xs text-[#cbd5e1] leading-relaxed max-w-[280px]">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>

        {/* MOBILE ABOUT SECTION (ABOUT-BG-MOBILE.AVIF) WITH BOTTOM 40% EMPTY */}
        <div className="relative w-full overflow-hidden bg-[#070114] min-h-[760px] sm:min-h-[850px] flex flex-col justify-start">
          {/* MOBILE BACKGROUND IMAGE WITH GSAP PARALLAX */}
          <GSAPParallax speed={0.1} className="absolute inset-0 select-none pointer-events-none z-0">
            <Image
              src="/about-bg-mobile.avif"
              alt="About QYONA Mobile Background"
              fill
              priority
              quality={100}
              className="w-full h-full object-cover object-bottom scale-105"
              sizes="(max-width: 767px) 100vw, 1px"
            />
          </GSAPParallax>

          {/* Top gradient overlay to merge seamlessly */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#070114] to-transparent pointer-events-none z-[1]" />

          {/* CONTENT AT TOP, BOTTOM 40% LEFT EMPTY FOR CHARACTER ARTWORK */}
          <div className="relative z-10 w-full px-6 sm:px-8 pt-10 sm:pt-14 pb-[40%] sm:pb-[400px] flex flex-col items-start text-left max-w-[480px] mx-auto">
            <AnimatedSection direction="up" amount={0.2}>
              {/* Purple Label */}
              <span className="font-spock font-bold text-xs sm:text-sm text-[#a855f7] tracking-[0.2em] uppercase drop-shadow-[0_0_15px_rgba(168,85,247,0.9)] mb-2 block">
                ABOUT QYONA
              </span>

              {/* Headline (Animated Cosmic Gradient Title with Hover Interaction) */}
              <motion.h2
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  backgroundPosition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  scale: { type: 'spring', stiffness: 350, damping: 18 },
                }}
                className="cursor-pointer font-spock font-black uppercase text-2xl sm:text-3xl leading-[1.15] tracking-wide bg-gradient-to-r from-white via-[#f3e8ff] via-[#c084fc] via-[#9333ea] via-[#e9d5ff] via-white to-[#c084fc] bg-[length:250%_auto] bg-clip-text text-transparent mb-4 drop-shadow-[0_0_20px_rgba(168,85,247,0.65)] hover:drop-shadow-[0_0_45px_rgba(216,180,254,0.95)] transition-all duration-300 select-none"
              >
                A JOURNEY BEYOND<br />THE STARS
              </motion.h2>

              {/* Paragraph 1 */}
              <p className="font-sans font-normal text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                QYONA comes from a distant galaxy where energy is life. Now QYONA has found a new{' '}
                <span className="text-[#a855f7] font-medium drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
                  home
                </span>{' '}
                here on Earth — with YOU.
              </p>

              {/* Paragraph 2 */}
              <p className="font-sans font-normal text-xs sm:text-sm text-[#cbd5e1] leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                Help QYONA collect the energy of the community and become the brightest star in the universe.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
