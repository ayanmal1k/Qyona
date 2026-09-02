'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'TOKENOMICS', href: '#tokenomics' },
    { name: 'ROADMAP', href: '#roadmap' },
    { name: 'FAQ', href: '#whitelist' },
    { name: 'COMMUNITY', href: '#socials' },
  ]

  return (
    <header className="w-full bg-[#05000e] border-b border-purple-500/20 py-4 px-4 sm:px-8 lg:px-12 relative z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        
        {/* LEFT: CHARACTER ICON + LOGO TEXT */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
            <Image
              src="/icon.png"
              alt="QYONA"
              width={36}
              height={36}
              priority
              className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.85)] group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="font-spock font-black text-xl sm:text-2xl text-white tracking-wider uppercase drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
            QYONA
          </span>
        </a>

        {/* CENTER: DESKTOP NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-spock font-bold text-xs xl:text-sm text-[#cbd5e1] hover:text-[#c084fc] tracking-wider uppercase transition-colors duration-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] hover:drop-shadow-[0_0_12px_rgba(192,132,252,0.8)]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* RIGHT: JOIN MISSION BUTTON (TELEGRAM LINK) & MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          {/* JOIN MISSION BUTTON */}
          <motion.a
            href="https://t.me/QYONAExplorers"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-flex items-center justify-center font-spock font-bold uppercase tracking-wider text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-[12px] bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] text-white border border-[#c77dff]/60 shadow-[0_0_20px_rgba(157,78,221,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.9)] transition-all duration-300"
          >
            JOIN MISSION
          </motion.a>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#140833] border border-purple-500/30 text-[#d8b4fe] hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU DROPDOWN DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full overflow-hidden bg-[#0a021c] border-b border-purple-500/30 px-4 py-6 mt-3"
          >
            <div className="flex flex-col gap-4 items-center text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-spock font-bold text-sm text-[#cbd5e1] hover:text-[#c084fc] tracking-wider uppercase transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://t.me/QYONAExplorers"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center font-spock font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-[12px] bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] text-white border border-[#c77dff]/60 shadow-[0_0_20px_rgba(157,78,221,0.5)] w-full max-w-[260px]"
              >
                JOIN MISSION
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
