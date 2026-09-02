'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Users, 
  Target, 
  Bell, 
  Clock, 
  Gift, 
  Gem, 
  Shield, 
  Award, 
  Key, 
  Send 
} from 'lucide-react'

// Custom X (Twitter) Icon Component
function XIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function WhitelistSection() {
  const perks = [
    { icon: <Clock className="w-5 h-5 text-[#c084fc]" />, title: 'Early Access' },
    { icon: <Gift className="w-5 h-5 text-[#c084fc]" />, title: 'Priority Events' },
    { icon: <Gem className="w-5 h-5 text-[#c084fc]" />, title: 'Collectibles' },
    { icon: <Shield className="w-5 h-5 text-[#c084fc]" />, title: 'Ecosystem Access' },
    { icon: <Award className="w-5 h-5 text-[#c084fc]" />, title: 'Exclusive Rewards' },
    { icon: <Key className="w-5 h-5 text-[#c084fc]" />, title: 'Special Access' },
  ]

  const joinSteps = [
    {
      icon: <XIcon className="w-5 h-5 text-[#c084fc] flex-shrink-0" />,
      text: 'Follow QYONA on X',
      href: 'https://x.com',
    },
    {
      icon: <Send className="w-5 h-5 text-[#c084fc] flex-shrink-0" />,
      text: 'Join the official Telegram community',
      href: 'https://t.me',
    },
    {
      icon: <Users className="w-5 h-5 text-[#c084fc] flex-shrink-0" />,
      text: 'Stay active in the community',
    },
    {
      icon: <Target className="w-5 h-5 text-[#c084fc] flex-shrink-0" />,
      text: 'Complete future whitelist missions',
    },
    {
      icon: <Bell className="w-5 h-5 text-[#c084fc] flex-shrink-0" />,
      text: 'Watch for the official whitelist announcement',
    },
  ]

  return (
    <section id="whitelist" className="relative w-full overflow-hidden bg-[#070114] py-16 sm:py-24 lg:py-28">
      {/* 1. BLACK & DEEP PURPLE COSMIC GRADIENT BASE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070114] via-[#0d0221] to-[#070114] pointer-events-none z-0" />

      {/* 2. MULTI-LAYERED COSMIC NEBULA RADIAL GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[1400px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7B2CBF]/35 via-[#9D4EDD]/20 to-transparent blur-[110px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#a855f7]/25 via-[#5c1d91]/12 to-transparent blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#4A00E0]/25 via-[#250d4d]/15 to-transparent blur-[90px] pointer-events-none z-0" />

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
          { top: '12%', left: '7%', size: 3.5, delay: 0 },
          { top: '24%', left: '92%', size: 3, delay: 0.6 },
          { top: '65%', left: '9%', size: 4, delay: 1.2 },
          { top: '85%', left: '88%', size: 2.5, delay: 0.4 },
          { top: '18%', left: '50%', size: 4.5, delay: 1.5 },
          { top: '78%', left: '44%', size: 3, delay: 0.8 },
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

      {/* 5. MAIN SECTION CONTENT */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ================= LEFT & MIDDLE COLUMN (TEXT + ICON MASCOT + PERKS BOX) ================= */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left">
            
            {/* TOP HEADER CONTENT & MASCOT FLEX */}
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
              
              {/* TEXT CONTENT (LEFT) */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-7 flex flex-col items-start"
              >
                {/* SUB-LABEL */}
                <span className="font-spock font-bold text-xs sm:text-sm text-[#a855f7] tracking-[0.2em] uppercase mb-2 drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">
                  QYONA — WHITELIST
                </span>

                {/* MAIN TITLE (Animated Gradient Title) */}
                <motion.h2
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="font-spock font-black uppercase text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-wide bg-gradient-to-r from-white via-[#f3e8ff] via-[#c084fc] via-[#a855f7] via-[#e9d5ff] to-white bg-[length:250%_auto] bg-clip-text text-transparent mb-4 drop-shadow-[0_0_25px_rgba(168,85,247,0.65)]"
                >
                  THE JOURNEY<br />BEGINS
                </motion.h2>

                {/* PARAGRAPH 1 */}
                <p className="font-sans font-normal text-sm sm:text-base text-[#cbd5e1] leading-relaxed mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  QYONA is a community-driven Web3 universe built around exploration, storytelling and participation.
                </p>

                {/* PARAGRAPH 2 */}
                <p className="font-sans font-normal text-sm sm:text-base text-[#cbd5e1] leading-relaxed mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  The QYONA journey combines an evolving story, community missions, digital culture, and the QYN token ecosystem.
                </p>

                {/* PARAGRAPH 3 */}
                <p className="font-sans font-normal text-sm sm:text-base text-[#cbd5e1] leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Whitelist members will receive early access to selected QYONA opportunities and future community events.
                </p>
              </motion.div>

              {/* MASCOT CHARACTER USING PUBLIC/ICON.PNG (RIGHT/CENTER) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.15 },
                  scale: { duration: 0.6, delay: 0.15 },
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="md:col-span-5 flex items-center justify-center relative my-4 md:my-0"
              >
                {/* Background purple glow behind mascot */}
                <div className="absolute inset-0 bg-purple-600/30 blur-3xl rounded-full scale-90 pointer-events-none" />

                <Image
                  src="/icon.png"
                  alt="QYONA Mascot"
                  width={420}
                  height={420}
                  priority
                  className="relative z-10 w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] h-auto object-contain drop-shadow-[0_0_35px_rgba(168,85,247,0.8)] hover:scale-105 transition-transform duration-500 ease-out"
                />
              </motion.div>
            </div>

            {/* BOTTOM PERKS BOX: THE FIRST CIRCLE OF EXPLORERS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full relative rounded-[24px] overflow-hidden bg-[#0c0420]/80 backdrop-blur-xl border border-purple-500/35 shadow-[0_15px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] p-5 sm:p-6 lg:p-7 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-400/60 before:to-transparent"
            >
              {/* BOX TITLE */}
              <h3 className="font-spock font-bold text-xs sm:text-sm text-[#a855f7] tracking-[0.2em] uppercase mb-1 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
                THE FIRST CIRCLE OF EXPLORERS
              </h3>

              {/* SUBTITLE */}
              <p className="font-sans font-normal text-xs sm:text-sm text-[#cbd5e1] mb-5">
                Join early. Participate. Explore together. The future of QYONA is built by its community.
              </p>

              {/* 6 PERK BADGES */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {perks.map((perk) => (
                  <div
                    key={perk.title}
                    className="flex flex-col items-center text-center p-3 rounded-[16px] bg-[#140833]/80 border border-purple-500/25 hover:border-purple-400/50 hover:bg-[#1f0b4d]/80 transition-all duration-300 group shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                  >
                    <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-purple-500/30 transition-all duration-300">
                      {perk.icon}
                    </div>
                    <span className="font-spock font-bold text-[11px] sm:text-xs text-white leading-snug group-hover:text-[#c084fc] transition-colors duration-200">
                      {perk.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN (HOW TO JOIN CARD) ================= */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#0c0420]/85 backdrop-blur-2xl border border-purple-500/35 shadow-[0_20px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.2),0_0_40px_rgba(157,78,221,0.25)] p-6 sm:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-400/60 before:to-transparent"
            >
              {/* CARD TITLE */}
              <h3 className="font-spock font-black text-xl sm:text-2xl text-[#c084fc] uppercase tracking-wider mb-6 text-left drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                HOW TO JOIN
              </h3>

              {/* ACTION STEPS LIST */}
              <div className="flex flex-col gap-3.5 mb-6">
                {joinSteps.map((step) => {
                  const content = (
                    <div className="w-full bg-[#070114]/85 hover:bg-[#130630]/90 border border-purple-500/30 hover:border-purple-400/60 rounded-[18px] p-3.5 sm:p-4 flex items-center gap-3.5 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] group">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/15 group-hover:bg-purple-500/30 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                        {step.icon}
                      </div>
                      <span className="font-spock font-bold text-xs sm:text-sm text-white group-hover:text-[#c084fc] text-left leading-snug transition-colors duration-200">
                        {step.text}
                      </span>
                    </div>
                  )

                  return step.href ? (
                    <a
                      key={step.text}
                      href={step.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={step.text} className="block w-full">
                      {content}
                    </div>
                  )
                })}
              </div>

              {/* WARNING / DISCLAIMER BOX AT BOTTOM */}
              <div className="w-full rounded-[18px] bg-purple-950/40 border border-purple-500/25 p-4 text-left">
                <p className="font-sans text-xs sm:text-xs text-[#cbd5e1] leading-relaxed">
                  <span className="font-spock font-bold text-pink-400 uppercase tracking-wide">Important:</span> Whitelist spots are limited and eligibility will be based on the official QYONA campaign rules.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
