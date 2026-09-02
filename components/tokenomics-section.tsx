'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Copy, Check, Lock, ShieldCheck, Coins, Database } from 'lucide-react'

export default function TokenomicsSection() {
  const [copied, setCopied] = useState(false)
  const contractAddress = '0x7494327ea33d4f8d99669b767406269da05d972e'

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const metrics = [
    {
      icon: (
        <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0">
          <Image
            src="/binance-smart-chain.png"
            alt="BNB Chain"
            width={28}
            height={28}
            className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(243,186,47,0.9)]"
          />
        </div>
      ),
      label: 'CHAIN',
      value: 'BNB Chain',
      valueClass: 'text-[#F3BA2F] drop-shadow-[0_0_14px_rgba(243,186,47,0.85)]',
    },
    {
      icon: <Coins className="w-6 h-6 sm:w-7 sm:h-7 text-[#c084fc] flex-shrink-0 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]" />,
      label: 'TAX',
      value: '1% Buy / 1% Sell',
      valueClass: 'text-white drop-shadow-[0_0_12px_rgba(192,132,252,0.6)]',
    },
    {
      icon: <Database className="w-6 h-6 sm:w-7 sm:h-7 text-[#c084fc] flex-shrink-0 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]" />,
      label: 'SUPPLY',
      value: '1,000,000,000 $QYN',
      valueClass: 'text-white drop-shadow-[0_0_12px_rgba(192,132,252,0.6)]',
    },
    {
      icon: <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-[#c084fc] flex-shrink-0 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]" />,
      label: 'LP',
      value: 'Locked',
      valueClass: 'text-white drop-shadow-[0_0_12px_rgba(192,132,252,0.6)]',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#c084fc] flex-shrink-0 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]" />,
      label: 'OWNERSHIP',
      value: 'Renounced',
      valueClass: 'text-white drop-shadow-[0_0_12px_rgba(192,132,252,0.6)]',
    },
  ]

  return (
    <section id="tokenomics" className="relative w-full overflow-hidden bg-[#070114] py-16 sm:py-24 lg:py-28">
      {/* 1. BLACK & DEEP PURPLE COSMIC GRADIENT BASE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070114] via-[#0d0221] to-[#070114] pointer-events-none z-0" />

      {/* 2. MULTI-LAYERED COSMIC NEBULA RADIAL GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[1400px] h-[450px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7B2CBF]/40 via-[#9D4EDD]/25 to-transparent blur-[110px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#a855f7]/30 via-[#5c1d91]/15 to-transparent blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#4A00E0]/30 via-[#250d4d]/20 to-transparent blur-[90px] pointer-events-none z-0" />

      {/* 3. PURE CSS STARFIELD MESH PATTERN */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none z-0 mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.85) 1.2px, transparent 1.2px),
            radial-gradient(circle at 50% 70%, rgba(216, 180, 254, 0.95) 1.8px, transparent 1.8px),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.75) 1.2px, transparent 1.2px),
            radial-gradient(circle at 90% 80%, rgba(192, 132, 252, 0.85) 1.4px, transparent 1.4px),
            radial-gradient(circle at 35% 85%, rgba(255, 255, 255, 0.7) 1.2px, transparent 1.2px)
          `,
          backgroundSize: '110px 110px',
        }}
      />

      {/* 4. COSMIC TWINKLING STARS & SPARKLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[
          { top: '15%', left: '8%', size: 3.5, delay: 0 },
          { top: '25%', left: '92%', size: 3, delay: 0.6 },
          { top: '70%', left: '12%', size: 4, delay: 1.2 },
          { top: '85%', left: '88%', size: 2.5, delay: 0.4 },
          { top: '18%', left: '50%', size: 4.5, delay: 1.5 },
          { top: '78%', left: '44%', size: 3, delay: 0.8 },
          { top: '42%', left: '95%', size: 3.5, delay: 1.7 },
          { top: '88%', left: '30%', size: 4, delay: 0.3 },
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
          { top: '12%', left: '18%', size: 20, delay: 0.2 },
          { top: '82%', left: '82%', size: 24, delay: 0.9 },
          { top: '28%', left: '78%', size: 18, delay: 1.6 },
          { top: '75%', left: '20%', size: 20, delay: 0.5 },
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

      {/* 5. MAIN TOKENOMICS CARD CONTAINER */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-[#0c0420]/80 backdrop-blur-2xl border border-purple-500/40 shadow-[0_30px_80px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.25),0_0_60px_rgba(157,78,221,0.3)] p-6 sm:p-10 lg:p-14 xl:p-16 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-400/70 before:to-transparent"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* ================= LEFT COLUMN: TOKEN TICKER & CONTRACT ================= */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              {/* TOKEN TICKER LABEL */}
              <span className="font-spock font-bold text-sm sm:text-base text-[#a855f7] tracking-[0.2em] uppercase mb-1 drop-shadow-[0_0_14px_rgba(168,85,247,0.9)]">
                TOKEN TICKER
              </span>

              {/* MAIN TICKER */}
              <h3 className="font-spock font-black text-5xl sm:text-6xl lg:text-7xl leading-tight text-[#a855f7] drop-shadow-[0_0_30px_rgba(168,85,247,0.95)] mb-1">
                $QYN
              </h3>

              {/* TICKER SUBTITLE */}
              <p className="font-spock font-bold text-xs sm:text-sm text-[#cbd5e1] tracking-wider uppercase mb-8 sm:mb-10">
                QYONA&apos;S ENERGY SYMBOL
              </p>

              {/* CONTRACT LABEL */}
              <span className="font-spock font-bold text-sm sm:text-base text-[#a855f7] tracking-[0.2em] uppercase mb-3 drop-shadow-[0_0_14px_rgba(168,85,247,0.9)]">
                OFFICIAL CONTRACT
              </span>

              {/* CONTRACT ADDRESS BOX WITH COPY BUTTON */}
              <div 
                onClick={handleCopy}
                className="w-full max-w-[380px] bg-[#070114]/95 hover:bg-[#140630]/95 border border-purple-500/40 hover:border-purple-400/80 rounded-[18px] p-4 sm:p-4.5 flex items-center justify-between gap-3 cursor-pointer transition-all duration-300 shadow-[inset_0_2px_6px_rgba(0,0,0,0.7),0_0_20px_rgba(168,85,247,0.15)] group"
              >
                <div className="flex flex-col overflow-hidden">
                  <span className="font-mono text-xs sm:text-sm text-white/90 group-hover:text-white transition-colors duration-200 break-all leading-snug font-medium">
                    {contractAddress}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-purple-500/20 group-hover:bg-purple-500/40 text-[#d8b4fe] transition-all duration-300 flex-shrink-0 relative shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  )}

                  {copied && (
                    <span className="absolute -top-9 right-0 bg-[#a855f7] text-white font-spock text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xl animate-in fade-in zoom-in duration-200 whitespace-nowrap">
                      COPIED!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* ================= MIDDLE COLUMN: TOKENOMICS SPACECRAFT IMAGE ================= */}
            <div className="lg:col-span-4 flex items-center justify-center my-4 lg:my-0">
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  scale: { duration: 0.7, delay: 0.15 },
                  opacity: { duration: 0.7, delay: 0.15 },
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] flex items-center justify-center"
              >
                {/* Background glow behind spacecraft */}
                <div className="absolute inset-0 bg-purple-600/30 blur-3xl rounded-full scale-95 pointer-events-none" />

                <Image
                  src="/tokenomics-img.png"
                  alt="QYONA Spacecraft"
                  width={540}
                  height={540}
                  priority
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(168,85,247,0.85)] hover:scale-105 transition-transform duration-500 ease-out"
                />
              </motion.div>
            </div>

            {/* ================= RIGHT COLUMN: PROMINENT TOKEN METRICS LIST ================= */}
            <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6 justify-center pl-0 lg:pl-6">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  {/* Metric Icon Container */}
                  <div className="w-13 h-13 sm:w-15 sm:h-15 lg:w-16 lg:h-16 rounded-2xl bg-[#140833]/90 border border-purple-500/35 flex items-center justify-center group-hover:border-purple-400 group-hover:bg-[#220c54] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 shadow-[0_6px_16px_rgba(0,0,0,0.6)] flex-shrink-0">
                    {metric.icon}
                  </div>

                  {/* Metric Label & Value (All in Spock Bold / Black Font) */}
                  <div className="flex flex-col items-start text-left group-hover:translate-x-1.5 transition-transform duration-300">
                    <span className="font-spock font-bold text-xs sm:text-sm lg:text-base text-[#a855f7] tracking-[0.18em] uppercase drop-shadow-[0_0_10px_rgba(168,85,247,0.85)] mb-0.5">
                      {metric.label}
                    </span>
                    <span className={`font-spock font-black text-lg sm:text-xl lg:text-2xl xl:text-[26px] ${metric.valueClass} tracking-wide leading-snug`}>
                      {metric.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
