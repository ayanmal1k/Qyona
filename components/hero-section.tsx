'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 140,
      damping: 20,
      mass: 0.8,
    },
  },
}

export default function HeroSection() {
  const [copied, setCopied] = useState(false)
  const contractAddress = '0x7494327ea33d4f8d99669b767406269da05d972e'

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative w-full min-h-[100dvh] md:min-h-0 md:aspect-[1920/1080] max-w-[1920px] mx-auto flex items-center justify-center bg-[#070114] overflow-hidden">
      {/* ================= DESKTOP BACKGROUND (1920x1080) ================= */}
      <div className="absolute inset-0 hidden md:block select-none pointer-events-none z-0">
        <Image
          src="/new-hero-bg.avif"
          alt="QYONA Cosmic Background"
          fill
          priority
          quality={100}
          className="w-full h-full object-contain object-center"
          sizes="(min-width: 768px) 100vw, 1px"
        />
      </div>

      {/* ================= MOBILE BACKGROUND (1080x1920 Proportions) ================= */}
      <div className="absolute inset-0 block md:hidden select-none pointer-events-none z-0">
        <Image
          src="/hero-bg-mobile.avif"
          alt="QYONA Mobile Background"
          fill
          priority
          quality={100}
          className="w-full h-full object-cover object-bottom"
          sizes="(max-width: 767px) 100vw, 1px"
        />
      </div>

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="relative z-10 w-full h-full flex flex-col justify-start md:justify-center pl-8 sm:pl-12 md:pl-20 lg:pl-28 xl:pl-36 pr-5 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20 pt-10 sm:pt-14 md:pt-0 pb-[380px] sm:pb-[420px] md:pb-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[460px] sm:max-w-[540px] md:max-w-[640px] lg:max-w-[760px] xl:max-w-[840px] flex flex-col items-start text-left"
        >
          {/* 1. QYONA LOGO IMAGE */}
          <motion.div variants={itemVariants} className="relative mb-2.5 sm:mb-3.5 md:mb-5">
            <div className="relative w-[250px] sm:w-[310px] md:w-[440px] lg:w-[540px] xl:w-[620px] h-auto">
              <Image
                src="/logo-text.png"
                alt="QYONA"
                width={680}
                height={200}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]"
              />
            </div>
          </motion.div>

          {/* 2. SUB-HEADING (Bold Spock Essential Font) */}
          <motion.h1 
            variants={itemVariants}
            className="font-spock font-black uppercase text-[22px] sm:text-[26px] md:text-[38px] lg:text-[48px] xl:text-[54px] leading-[1.12] tracking-wide text-white mb-3 sm:mb-4 md:mb-6"
          >
            <span>A COSMIC CREATURE</span>
            <br />
            <span>POWERED BY </span>
            <span className="text-[#a855f7] drop-shadow-[0_0_20px_rgba(168,85,247,0.85)]">
              COMMUNITY
            </span>
          </motion.h1>

          {/* 3. PARAGRAPH (Generic Clean Sans-Serif Font) */}
          <motion.p 
            variants={itemVariants}
            className="font-sans font-normal text-sm sm:text-base md:text-lg lg:text-[20px] xl:text-[22px] text-[#cbd5e1] leading-relaxed max-w-[380px] sm:max-w-[460px] md:max-w-[580px] lg:max-w-[680px] mb-5 sm:mb-6 md:mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            A small creature from another galaxy collecting the energy of the community. The more people join, the stronger QYONA becomes.
          </motion.p>

          {/* 4. ACTION BUTTONS (Prominent Spock Essential Font with Spring Interactions) */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-4 sm:mb-5 md:mb-8 w-full sm:w-auto"
          >
            {/* Primary Button: JOIN THE MISSION (Telegram Link) */}
            <motion.a
              href="https://t.me/QYONAExplorers"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="relative group inline-flex items-center justify-center font-spock font-bold uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[17px] xl:text-[18px] px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 lg:py-4.5 rounded-[12px] md:rounded-[14px] bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] bg-[length:200%_auto] hover:bg-right text-white border border-[#c77dff]/70 shadow-[0_0_25px_rgba(157,78,221,0.6)] hover:shadow-[0_0_50px_rgba(168,85,247,0.95),0_0_20px_rgba(216,180,254,0.7)] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">JOIN THE MISSION</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />
            </motion.a>

            {/* Secondary Button: BUY $QYN (DexScreener Link) */}
            <motion.a
              href="https://dexscreener.com/bsc/0x7494327ea33d4f8d99669b767406269da05d972e"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="relative group inline-flex items-center justify-center font-spock font-bold uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[17px] xl:text-[18px] px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 lg:py-4.5 rounded-[12px] md:rounded-[14px] bg-[#0d0422]/90 hover:bg-[#250d4d]/90 text-white hover:text-[#f3e8ff] border border-[#6b21a8] hover:border-[#c084fc] shadow-[0_0_15px_rgba(126,34,206,0.3)] hover:shadow-[0_0_40px_rgba(192,132,252,0.85)] backdrop-blur-md transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">BUY $QYN</span>
              <span className="absolute inset-0 bg-[#c084fc]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.a>
          </motion.div>

          {/* 5. BNB CHAIN BADGE & CA QUICK COPY PILL */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 sm:gap-3.5"
          >
            <div className="inline-flex items-center gap-2.5 sm:gap-3 md:gap-3.5 px-4 py-2 rounded-full bg-[#12062b]/60 border border-[#a855f7]/30 shadow-[0_0_20px_rgba(168,85,247,0.25)] backdrop-blur-md">
              <span className="font-spock font-semibold text-xs sm:text-sm md:text-base lg:text-[17px] text-[#d8b4fe] tracking-wide drop-shadow-[0_0_14px_rgba(192,132,252,0.9)]">
                QYONA on
              </span>
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
                <Image
                  src="/binance-smart-chain.png"
                  alt="BNB Chain"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-spock font-bold text-xs sm:text-sm md:text-base lg:text-[17px] text-[#F3BA2F] tracking-wider uppercase drop-shadow-[0_0_12px_rgba(243,186,47,0.6)]">
                BNB CHAIN
              </span>
            </div>

            {/* QUICK CA COPY PILL */}
            <div 
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#12062b]/80 border border-[#a855f7]/35 hover:border-[#c084fc]/70 shadow-[0_0_20px_rgba(168,85,247,0.25)] backdrop-blur-md cursor-pointer transition-all duration-300 group relative"
            >
              <span className="font-spock font-bold text-xs sm:text-sm text-[#a855f7] tracking-wider">
                CA:
              </span>
              <span className="font-mono text-xs sm:text-sm text-white/90 group-hover:text-white transition-colors duration-200">
                0x7494...972e
              </span>
              <div className="text-[#d8b4fe] group-hover:scale-110 transition-transform duration-200">
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              </div>

              {copied && (
                <span className="absolute -top-7 right-0 bg-[#a855f7] text-white font-spock text-[10px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap animate-in fade-in zoom-in duration-200">
                  COPIED!
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

