'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

// Custom X (Twitter) Icon Component
function XIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function SocialSection() {
  return (
    <section id="socials" className="relative w-full overflow-hidden bg-[#070114] py-14 sm:py-20 lg:py-24">
      {/* 1. BLACK & DEEP PURPLE COSMIC GRADIENT BASE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070114] via-[#0d0221] to-[#070114] pointer-events-none z-0" />

      {/* 2. MULTI-LAYERED COSMIC NEBULA RADIAL GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1300px] h-[350px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7B2CBF]/35 via-[#9D4EDD]/20 to-transparent blur-[100px] rounded-full pointer-events-none z-0" />

      {/* 3. MAIN SECTION CONTAINER */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= DESKTOP & TABLET VIEW (MD: AND ABOVE) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#0c0420]/80 backdrop-blur-2xl border border-purple-500/35 shadow-[0_25px_70px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.2),0_0_50px_rgba(157,78,221,0.25)] min-h-[340px] lg:min-h-[400px] xl:min-h-[440px] items-center before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-400/60 before:to-transparent"
        >
          {/* DESKTOP BACKGROUND IMAGE (/social-bg.avif) */}
          <div className="absolute inset-0 select-none pointer-events-none z-0">
            <Image
              src="/social-bg.avif"
              alt="Join The QYONA Galaxy"
              fill
              priority
              quality={100}
              className="w-full h-full object-cover object-center"
              sizes="(min-width: 768px) 100vw, 1px"
            />
          </div>

          {/* DESKTOP CONTENT (LEFT ALIGNED) */}
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-start text-left pl-8 sm:pl-12 lg:pl-16 xl:pl-20 pr-8 py-10 max-w-[680px] lg:max-w-[760px]">
            {/* HEADING */}
            <h2 className="font-spock font-black uppercase text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] leading-[1.1] text-white mb-2.5 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              JOIN THE QYONA GALAXY
            </h2>

            {/* SUBTITLE */}
            <p className="font-spock font-bold text-xs sm:text-sm lg:text-base text-[#cbd5e1] tracking-wider uppercase mb-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              THE SPACECRAFT IS WAITING FOR{' '}
              <span className="text-[#a855f7] drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">
                NEW EXPLORERS.
              </span>
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Button 1: JOIN TELEGRAM */}
              <motion.a
                href="https://t.me/QYONAExplorers"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                className="relative group inline-flex items-center justify-center font-spock font-bold uppercase tracking-wider text-xs sm:text-sm lg:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-[14px] bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] bg-[length:200%_auto] hover:bg-right text-white border border-[#c77dff]/70 shadow-[0_0_25px_rgba(157,78,221,0.6)] hover:shadow-[0_0_45px_rgba(168,85,247,0.95)] transition-all duration-300 gap-2.5 overflow-hidden"
              >
                <Send className="w-5 h-5 text-white flex-shrink-0" />
                <span className="relative z-10">JOIN TELEGRAM</span>
              </motion.a>

              {/* Button 2: FOLLOW ON X */}
              <motion.a
                href="https://x.com/MrJunglePro"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                className="relative group inline-flex items-center justify-center font-spock font-bold uppercase tracking-wider text-xs sm:text-sm lg:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-[14px] bg-[#0d0422]/90 hover:bg-[#250d4d]/90 text-white hover:text-[#f3e8ff] border border-[#6b21a8] hover:border-[#c084fc] shadow-[0_0_15px_rgba(126,34,206,0.3)] hover:shadow-[0_0_35px_rgba(192,132,252,0.85)] backdrop-blur-md transition-all duration-300 gap-2.5 overflow-hidden"
              >
                <XIcon className="w-5 h-5 text-white flex-shrink-0" />
                <span className="relative z-10">FOLLOW ON X</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* ================= MOBILE VIEW (< MD) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="block md:hidden relative w-full rounded-[28px] overflow-hidden bg-[#0c0420]/85 border border-purple-500/35 shadow-[0_20px_60px_rgba(0,0,0,0.85)] min-h-[620px] sm:min-h-[700px] flex flex-col justify-start"
        >
          {/* MOBILE BACKGROUND IMAGE (/social-bg-mobile.jpg) */}
          <div className="absolute inset-0 select-none pointer-events-none z-0">
            <Image
              src="/social-bg-mobile.jpg"
              alt="Join The QYONA Galaxy Mobile"
              fill
              priority
              quality={100}
              className="w-full h-full object-cover object-bottom"
              sizes="100vw"
            />
          </div>

          {/* MOBILE CONTENT AT TOP, BOTTOM LEFT EMPTY FOR MASCOT ARTWORK */}
          <div className="relative z-10 w-full p-6 sm:p-8 pt-8 sm:pt-10 pb-[340px] sm:pb-[400px] flex flex-col items-start text-left">
            {/* HEADING */}
            <h2 className="font-spock font-black uppercase text-2xl sm:text-3xl leading-[1.12] text-white mb-2 drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
              JOIN THE QYONA GALAXY
            </h2>

            {/* SUBTITLE */}
            <p className="font-spock font-bold text-xs sm:text-sm text-[#cbd5e1] tracking-wider uppercase mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              THE SPACECRAFT IS WAITING FOR{' '}
              <span className="text-[#a855f7] drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">
                NEW EXPLORERS.
              </span>
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full">
              {/* Button 1: JOIN TELEGRAM */}
              <motion.a
                href="https://t.me/QYONAExplorers"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center font-spock font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 rounded-[14px] bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] text-white border border-[#c77dff]/70 shadow-[0_0_20px_rgba(157,78,221,0.6)] gap-2.5"
              >
                <Send className="w-4 h-4 text-white flex-shrink-0" />
                <span>JOIN TELEGRAM</span>
              </motion.a>

              {/* Button 2: FOLLOW ON X */}
              <motion.a
                href="https://x.com/MrJunglePro"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center font-spock font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 rounded-[14px] bg-[#0d0422]/90 text-white border border-[#6b21a8] shadow-[0_0_15px_rgba(126,34,206,0.3)] gap-2.5 backdrop-blur-md"
              >
                <XIcon className="w-4 h-4 text-white flex-shrink-0" />
                <span>FOLLOW ON X</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
