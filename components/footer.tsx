'use client'

import Image from 'next/image'
import { Send } from 'lucide-react'

function XIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#05000e] border-t border-purple-500/20 py-6 sm:py-7 px-4 sm:px-8 lg:px-12 relative z-10">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        
        {/* LEFT: CHARACTER ICON + LOGO TEXT */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
            <Image
              src="/icon.png"
              alt="QYONA"
              width={36}
              height={36}
              className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.85)]"
            />
          </div>
          <span className="font-spock font-black text-lg sm:text-xl text-white tracking-wider uppercase drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
            QYONA
          </span>
        </div>

        {/* CENTER: COPYRIGHT TEXT */}
        <div className="font-sans text-xs sm:text-sm text-[#cbd5e1] text-center">
          &copy; 2026 QYONA. All Rights Reserved.
        </div>

        {/* RIGHT: CIRCULAR SOCIAL BUTTONS */}
        <div className="flex items-center gap-3">
          {/* Telegram Circle Icon Button */}
          <a
            href="https://t.me/QYONAExplorers"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#140833]/80 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/30 flex items-center justify-center text-[#d8b4fe] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] group"
          >
            <Send className="w-4 h-4 text-[#d8b4fe] group-hover:text-white transition-colors duration-200" />
          </a>

          {/* X (Twitter) Circle Icon Button */}
          <a
            href="https://x.com/MrJunglePro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#140833]/80 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/30 flex items-center justify-center text-[#d8b4fe] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] group"
          >
            <XIcon className="w-4 h-4 text-[#d8b4fe] group-hover:text-white transition-colors duration-200" />
          </a>
        </div>

      </div>
    </footer>
  )
}
