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
    <section className="w-full bg-[#070114] py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0c0420]/60 backdrop-blur-2xl border border-purple-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.2),0_0_40px_rgba(157,78,221,0.2)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-400/50 before:to-transparent z-10"
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
                className="group flex flex-col items-center text-center p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:bg-white/[0.03]"
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
