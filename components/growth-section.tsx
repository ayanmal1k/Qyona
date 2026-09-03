'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users,
  TrendingUp,
  DollarSign,
  RefreshCw,
  Coins,
  FileText,
  Activity,
  ArrowUpRight,
} from 'lucide-react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'
import { AnimatedSection, GSAPParallax, StaggerContainer, staggerItemVariants } from '@/components/ui/animated-section'

// Timeframe options
type Timeframe = '7D' | '30D' | '90D' | '1Y' | 'ALL'

interface HistoryPoint {
  date: string
  holders: number
  growthPct: number
}

interface GrowthApiResponse {
  success: boolean
  token: {
    address: string
    symbol: string
    name?: string
    chain: string
    chainId: number
    platform?: string
    fourMemeUrl?: string
    tax?: string
  }
  stats: {
    bondingCurve?: {
      progressPct: number
      progressFormatted: string
      bnbRaised: number
      targetBnb: number
      bnbFormatted: string
      tokensAvailable: number
      migrationTargetCap: number
      migrationTargetFormatted: string
      status: string
    }
    holders: {
      total: number
      growth24h: number
      growthPct24h: number
      formatted: string
      growthFormatted: string
      percentBadge: string
    }
    holderGrowthMetric: {
      value: string
      percent: string
    }
    marketCap: {
      value: number
      formatted: string
      change24h: number
      percentBadge: string
    }
    virtualLiquidity?: {
      value: number
      formatted: string
    }
    price?: {
      usd: number
      bnb: string
      formattedBnb: string
      formattedUsd: string
    }
    volume24h: {
      value: number
      formatted: string
      change24h: number
      percentBadge: string
    }
    circulatingSupply: {
      value: number
      formatted: string
      symbol: string
    }
    transactions: {
      value: number
      formatted: string
      change24h: number
      percentBadge: string
    }
  }
  history: Record<Timeframe, HistoryPoint[]>
  meta: {
    dataSource: string
    updatedAt: string
    refreshIntervalSeconds: number
  }
}

// Initial fallback data to guarantee 0 layout shift and instant stunning render
const DEFAULT_DATA: GrowthApiResponse = {
  success: true,
  token: {
    address: '0x7494327ea33d4f8d99669b767406269da05d972e',
    symbol: '$QYN',
    name: 'QYONA',
    chain: 'BNB Smart Chain (BEP-20)',
    chainId: 56,
    platform: 'Four.meme',
    fourMemeUrl: 'https://www.four.meme/en/token/0x7494327ea33d4f8d99669b767406269da05d972e',
    tax: '1% Buy / 1% Sell',
  },
  stats: {
    bondingCurve: {
      progressPct: 4.33,
      progressFormatted: '4.33%',
      bnbRaised: 0.205367,
      targetBnb: 18.0,
      bnbFormatted: '0.2054 / 18 BNB',
      tokensAvailable: 765374103.9,
      migrationTargetCap: 64905.3,
      migrationTargetFormatted: '$64,905.30',
      status: 'Bonding Curve Stage (Pre-PancakeSwap)',
    },
    marketCap: {
      value: 4420,
      formatted: '$4.42K',
      change24h: 6.77,
      percentBadge: '+6.77%',
    },
    virtualLiquidity: {
      value: 9190,
      formatted: '$9.19K',
    },
    price: {
      usd: 0.00000442,
      bnb: '0.000000006128',
      formattedBnb: '0.000000006128 BNB',
      formattedUsd: '$0.00000442',
    },
    volume24h: {
      value: 164.48,
      formatted: '$164.48',
      change24h: 6.77,
      percentBadge: '+6.77%',
    },
    holders: {
      total: 4,
      growth24h: 1,
      growthPct24h: 33.33,
      formatted: '4',
      growthFormatted: '+1',
      percentBadge: '+33.33%',
    },
    holderGrowthMetric: {
      value: '+1',
      percent: '+33.33%',
    },
    circulatingSupply: {
      value: 1000000000,
      formatted: '1.00B',
      symbol: '$QYN',
    },
    transactions: {
      value: 6,
      formatted: '6',
      change24h: 0,
      percentBadge: '6 Total Trades',
    },
  },
  history: {
    '7D': [
      { date: 'Aug 28', holders: 2, growthPct: 0 },
      { date: 'Aug 29', holders: 2, growthPct: 0 },
      { date: 'Aug 30', holders: 3, growthPct: 50.0 },
      { date: 'Aug 31', holders: 3, growthPct: 50.0 },
      { date: 'Sep 01', holders: 3, growthPct: 50.0 },
      { date: 'Sep 02', holders: 3, growthPct: 50.0 },
      { date: 'Sep 03', holders: 4, growthPct: 100.0 },
    ],
    '30D': [
      { date: 'Aug 04', holders: 1, growthPct: 0 },
      { date: 'Aug 09', holders: 1, growthPct: 0 },
      { date: 'Aug 14', holders: 2, growthPct: 100.0 },
      { date: 'Aug 19', holders: 2, growthPct: 100.0 },
      { date: 'Aug 24', holders: 3, growthPct: 200.0 },
      { date: 'Aug 29', holders: 3, growthPct: 200.0 },
      { date: 'Sep 03', holders: 4, growthPct: 300.0 },
    ],
    '90D': [
      { date: 'Jul 30', holders: 1, growthPct: 0 },
      { date: 'Aug 06', holders: 1, growthPct: 0 },
      { date: 'Aug 13', holders: 2, growthPct: 100.0 },
      { date: 'Aug 20', holders: 2, growthPct: 100.0 },
      { date: 'Aug 27', holders: 3, growthPct: 200.0 },
      { date: 'Sep 03', holders: 4, growthPct: 300.0 },
    ],
    '1Y': [
      { date: 'Launch', holders: 1, growthPct: 0 },
      { date: 'Week 2', holders: 2, growthPct: 100.0 },
      { date: 'Week 3', holders: 3, growthPct: 200.0 },
      { date: 'Week 4', holders: 3, growthPct: 200.0 },
      { date: 'Now', holders: 4, growthPct: 300.0 },
    ],
    ALL: [
      { date: 'Creation', holders: 1, growthPct: 0 },
      { date: 'Curve Phase', holders: 2, growthPct: 100.0 },
      { date: 'Growth', holders: 3, growthPct: 200.0 },
      { date: 'Current', holders: 4, growthPct: 300.0 },
    ],
  },
  meta: {
    dataSource: 'four_meme_live_synced',
    updatedAt: new Date().toISOString(),
    refreshIntervalSeconds: 60,
  },
}

// Hexagonal Icon Container matching the exact purple neon badge in the mockup
function HexagonBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 group">
      {/* Outer Hexagon SVG with violet glow */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] transition-transform duration-300 group-hover:scale-105"
      >
        <polygon
          points="50 3, 93 26, 93 74, 50 97, 7 74, 7 26"
          fill="#170634"
          stroke="#a855f7"
          strokeWidth="3.5"
          className="transition-colors duration-300 group-hover:stroke-[#c084fc]"
        />
        {/* Inner subtle glow ring */}
        <polygon
          points="50 10, 86 29, 86 71, 50 90, 14 71, 14 29"
          fill="rgba(147, 51, 234, 0.15)"
          stroke="rgba(216, 180, 254, 0.3)"
          strokeWidth="1.5"
        />
      </svg>
      {/* Icon centered */}
      <div className="relative z-10 text-[#d8b4fe] drop-shadow-[0_0_8px_rgba(192,132,252,0.9)]">
        {children}
      </div>
    </div>
  )
}

// Custom Interactive Tooltip for the Growth Chart
function ChartTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const data = payload[0].payload as HistoryPoint
    return (
      <div className="rounded-xl border border-purple-500/40 bg-[#160633]/90 backdrop-blur-md px-3.5 py-2 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
        <div className="text-[11px] font-medium text-purple-300 uppercase tracking-wider">
          {data.date}
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-sm font-bold text-white tracking-wide">
            {data.holders.toLocaleString('en-US')}
          </span>
          <span className="text-xs text-purple-400 font-semibold">Holders</span>
        </div>
      </div>
    )
  }
  return null
}

export default function GrowthSection() {
  const [data, setData] = useState<GrowthApiResponse>(DEFAULT_DATA)
  const [activeHoverPoint, setActiveHoverPoint] = useState<HistoryPoint | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Fetch real on-chain data from our Next.js API route
  const fetchData = async () => {
    try {
      setIsRefreshing(true)
      const res = await fetch('/api/token-growth', { cache: 'no-store' })
      if (res.ok) {
        const json: GrowthApiResponse = await res.json()
        if (json.success && json.stats) {
          setData(json)
        }
      }
    } catch {
      // Use fallback quietly
    } finally {
      setIsRefreshing(false)
    }
  }

  useEffect(() => {
    fetchData()
    // Periodic auto-refresh every 1 minute (60 seconds)
    const interval = setInterval(fetchData, 60000)
    return () => clearInterval(interval)
  }, [])

  // Active chart series locked to Last 7 Days (7D)
  const chartData = useMemo(() => {
    return data.history['7D'] || DEFAULT_DATA.history['7D']
  }, [data])

  // Latest point in current series
  const latestPoint = useMemo(() => {
    return chartData[chartData.length - 1] || { date: 'May 16', holders: 12458 }
  }, [chartData])

  const displayedTooltipPoint = activeHoverPoint || latestPoint

  return (
    <section
      id="growth"
      className="relative w-full overflow-hidden bg-[#070114] pt-4 pb-20 sm:pb-28"
    >
      {/* ========================================================================= */}
      {/* 1. TOP BANNER - DESKTOP VIEW (growth-bg.avif)                              */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-[1920px] mx-auto hidden md:block aspect-[1824/862] overflow-hidden">
        {/* PARALLAX DESKTOP BACKGROUND */}
        <GSAPParallax speed={0.08} className="absolute inset-0 select-none pointer-events-none z-0">
          <Image
            src="/growth-bg.avif"
            alt="QYONA Community & Token Growth"
            fill
            priority
            quality={100}
            className="w-full h-full object-cover object-center scale-105"
            sizes="(min-width: 768px) 100vw, 1px"
          />
        </GSAPParallax>

        {/* Ambient Cosmic Radial Glows */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070114] via-transparent to-[#070114]/50 pointer-events-none z-[1]" />
        <div className="absolute top-1/4 left-1/10 w-[550px] h-[450px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#7b2cbf]/35 via-transparent to-transparent blur-[100px] pointer-events-none z-[1]" />

        {/* TOP BANNER CONTENT (Desktop Grid) */}
        <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          {/* LEFT: TITLES & REAL-TIME BADGE */}
          <div className="max-w-[540px] flex flex-col items-start pt-6 lg:pt-0">
            <AnimatedSection direction="up" amount={0.2}>
              {/* Category Label */}
              <span className="font-spock font-bold text-xs sm:text-sm lg:text-base tracking-[0.25em] text-[#d8b4fe] uppercase drop-shadow-[0_0_12px_rgba(192,132,252,0.8)] mb-2 block">
                COMMUNITY &
              </span>

              {/* Main Headline */}
              <h2 className="font-spock font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight uppercase leading-[0.92] text-transparent bg-clip-text bg-gradient-to-b from-white via-[#f3e8ff] to-[#c084fc] drop-shadow-[0_0_35px_rgba(168,85,247,0.55)] mb-4">
                TOKEN
                <br />
                GROWTH
              </h2>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-[#cbd5e1] leading-relaxed max-w-[420px] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Real-time on-chain data showing the growth of the QYONA community and the $QYN ecosystem.
              </p>

              {/* LIVE DATA Pill Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0c0324]/85 backdrop-blur-xl border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                </span>
                <span className="font-spock font-bold text-xs text-emerald-400 tracking-wider uppercase">
                  LIVE DATA
                </span>
                <span className="w-1 h-1 rounded-full bg-purple-400/40" />
                <span className="font-sans text-xs text-purple-200/80">
                  {isRefreshing ? 'Syncing live data...' : 'Updates automatically every 1 min'}
                </span>
              </div>
            </AnimatedSection>
          </div>


        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. TOP BANNER - MOBILE VIEW (growth-bg-mobile.avif)                        */}
      {/* ========================================================================= */}
      <div className="relative w-full md:hidden overflow-hidden min-h-[580px] sm:min-h-[660px] flex flex-col justify-start">
        {/* PARALLAX MOBILE BACKGROUND */}
        <GSAPParallax speed={0.06} className="absolute inset-0 select-none pointer-events-none z-0">
          <Image
            src="/growth-bg-mobile.avif"
            alt="QYONA Community & Token Growth Mobile"
            fill
            priority
            quality={100}
            className="w-full h-full object-cover object-bottom scale-105"
            sizes="(max-width: 767px) 100vw, 1px"
          />
        </GSAPParallax>

        {/* Top & Bottom seamless gradient fades */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#070114] to-transparent pointer-events-none z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070114] to-transparent pointer-events-none z-[1]" />

        {/* TOP MOBILE CONTENT OVER STARFIELD */}
        <div className="relative z-10 w-full px-6 pt-10 pb-48 flex flex-col items-center text-center max-w-[480px] mx-auto">
          <AnimatedSection direction="up" amount={0.2}>
            {/* Category Label */}
            <span className="font-spock font-bold text-xs tracking-[0.2em] text-[#d8b4fe] uppercase drop-shadow-[0_0_10px_rgba(192,132,252,0.8)] mb-1.5 block">
              COMMUNITY &
            </span>

            {/* Main Headline */}
            <h2 className="font-spock font-black text-3xl sm:text-4xl tracking-tight uppercase leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-white via-[#f3e8ff] to-[#c084fc] drop-shadow-[0_0_25px_rgba(168,85,247,0.55)] mb-3">
              TOKEN GROWTH
            </h2>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-[#cbd5e1] leading-relaxed max-w-[320px] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Real-time on-chain data showing the growth of the QYONA community and the $QYN ecosystem.
            </p>

            {/* LIVE DATA Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0c0324]/85 backdrop-blur-xl border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-spock font-bold text-[11px] text-emerald-400 tracking-wider uppercase">
                LIVE DATA
              </span>
              <span className="w-1 h-1 rounded-full bg-purple-400/40" />
              <span className="font-sans text-[11px] text-purple-200/80">
                Updates automatically every 1 min
              </span>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. STATS & CHART SECTION CONTAINER (Below the artwork)                    */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-6">
        {/* ================= FOUR.MEME BONDING CURVE FEATURE WIDGET ================= */}
        <AnimatedSection direction="up" amount={0.15}>
          <div className="relative rounded-3xl p-6 sm:p-8 mb-6 sm:mb-8 bg-gradient-to-r from-[#170634]/90 via-[#0e0326]/95 to-[#1c0840]/90 backdrop-blur-2xl border border-purple-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_30px_rgba(168,85,247,0.2)] overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 blur-[80px] pointer-events-none rounded-full" />
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
              {/* Left Column: Progress Info */}
              <div className="flex-1 w-full">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-spock font-bold tracking-widest bg-purple-900/60 border border-purple-400/40 text-purple-200 uppercase">
                    FOUR.MEME LAUNCHPAD
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950/60 border border-emerald-500/40 text-emerald-400">
                    BONDING CURVE ACTIVE
                  </span>
                  {data.token.tax && (
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-purple-300 bg-purple-950/40 border border-purple-500/30">
                      Tax: {data.token.tax}
                    </span>
                  )}
                </div>

                <h3 className="font-spock font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  BONDING CURVE PROGRESS:{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-100 to-amber-300">
                    {data.stats.bondingCurve?.progressFormatted || '4.33%'}
                  </span>
                </h3>

                <p className="font-sans text-xs sm:text-sm text-purple-200/80 mt-1 max-w-[640px]">
                  Raised <span className="font-semibold text-white">{data.stats.bondingCurve?.bnbFormatted || '0.2054 / 18 BNB'}</span>. 
                  When market cap hits <span className="font-semibold text-amber-300">{data.stats.bondingCurve?.migrationTargetFormatted || '$64,905.30'}</span> (18 BNB), 
                  all liquidity automatically migrates to PancakeSwap and burns forever!
                </p>

                {/* Progress Bar Container */}
                <div className="w-full mt-4">
                  <div className="flex items-center justify-between text-xs font-mono text-purple-300 mb-1.5">
                    <span>Current: {data.stats.bondingCurve?.bnbRaised?.toFixed(4) || '0.2054'} BNB</span>
                    <span>Target: {data.stats.bondingCurve?.targetBnb || '18'} BNB</span>
                  </div>
                  <div className="w-full h-3.5 rounded-full bg-[#080214] border border-purple-500/30 p-0.5 overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.max(data.stats.bondingCurve?.progressPct || 4.33, 2)}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-600 via-purple-400 to-amber-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: CTA Button */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3 w-full lg:w-auto flex-shrink-0">
                <a
                  href={data.token.fourMemeUrl || `https://www.four.meme/en/token/${data.token.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-spock font-bold text-sm tracking-wider uppercase text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
                >
                  <span>Trade $QYN on Four.meme</span>
                  <ArrowUpRight className="w-4 h-4 text-purple-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ================= 6 STATS CARDS GRID ================= */}
        <AnimatedSection direction="up" amount={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8">
            {/* 1. MARKET CAP */}
            <div className="relative rounded-2xl p-5 sm:p-6 bg-[#0c0324]/80 backdrop-blur-xl border border-purple-500/25 hover:border-purple-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group">
              <div className="flex items-center gap-4">
                <HexagonBadge>
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
                </HexagonBadge>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] sm:text-xs font-spock font-semibold tracking-wider text-purple-300 uppercase">
                    MARKET CAP
                  </div>
                  <div className="font-spock font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {data.stats.marketCap.formatted}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                <span>{data.stats.marketCap.percentBadge}</span>
                <span className="text-purple-300/60 font-normal ml-1">(24H)</span>
              </div>
            </div>

            {/* 2. BONDING CURVE PROGRESS */}
            <div className="relative rounded-2xl p-5 sm:p-6 bg-[#0c0324]/80 backdrop-blur-xl border border-purple-500/25 hover:border-purple-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group">
              <div className="flex items-center gap-4">
                <HexagonBadge>
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                </HexagonBadge>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] sm:text-xs font-spock font-semibold tracking-wider text-purple-300 uppercase">
                    BONDING CURVE
                  </div>
                  <div className="font-spock font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {data.stats.bondingCurve?.progressFormatted || '4.33%'}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center justify-between text-xs font-medium text-purple-300">
                <span>Raised: {data.stats.bondingCurve?.bnbRaised?.toFixed(4) || '0.2054'} BNB</span>
                <span className="text-amber-300 font-semibold">Goal: 18 BNB</span>
              </div>
            </div>

            {/* 3. VIRTUAL LIQUIDITY */}
            <div className="relative rounded-2xl p-5 sm:p-6 bg-[#0c0324]/80 backdrop-blur-xl border border-purple-500/25 hover:border-purple-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group">
              <div className="flex items-center gap-4">
                <HexagonBadge>
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
                </HexagonBadge>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] sm:text-xs font-spock font-semibold tracking-wider text-purple-300 uppercase">
                    VIRTUAL LIQUIDITY
                  </div>
                  <div className="font-spock font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {data.stats.virtualLiquidity?.formatted || '$9.19K'}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center gap-1.5 text-xs font-semibold text-purple-300">
                <span>Four.meme Curve Pool</span>
                <span className="text-purple-400/60 font-normal ml-1">• BSC</span>
              </div>
            </div>

            {/* 4. 24H VOLUME */}
            <div className="relative rounded-2xl p-5 sm:p-6 bg-[#0c0324]/80 backdrop-blur-xl border border-purple-500/25 hover:border-purple-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group">
              <div className="flex items-center gap-4">
                <HexagonBadge>
                  <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />
                </HexagonBadge>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] sm:text-xs font-spock font-semibold tracking-wider text-purple-300 uppercase">
                    24H VOLUME
                  </div>
                  <div className="font-spock font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {data.stats.volume24h.formatted}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                <span>{data.stats.volume24h.percentBadge}</span>
                <span className="text-purple-300/60 font-normal ml-1">(24H)</span>
              </div>
            </div>

            {/* 5. CIRCULATING SUPPLY */}
            <div className="relative rounded-2xl p-5 sm:p-6 bg-[#0c0324]/80 backdrop-blur-xl border border-purple-500/25 hover:border-purple-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group">
              <div className="flex items-center gap-4">
                <HexagonBadge>
                  <Coins className="w-5 h-5 sm:w-6 sm:h-6" />
                </HexagonBadge>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] sm:text-xs font-spock font-semibold tracking-wider text-purple-300 uppercase">
                    CIRCULATING SUPPLY
                  </div>
                  <div className="font-spock font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {data.stats.circulatingSupply.formatted}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center gap-1.5 text-xs font-semibold text-purple-300">
                <span>{data.stats.circulatingSupply.symbol}</span>
                <span className="text-purple-400/60 font-normal ml-1">• BNB Smart Chain</span>
              </div>
            </div>

            {/* 6. TRANSACTIONS */}
            <div className="relative rounded-2xl p-5 sm:p-6 bg-[#0c0324]/80 backdrop-blur-xl border border-purple-500/25 hover:border-purple-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group">
              <div className="flex items-center gap-4">
                <HexagonBadge>
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                </HexagonBadge>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] sm:text-xs font-spock font-semibold tracking-wider text-purple-300 uppercase">
                    TRANSACTIONS
                  </div>
                  <div className="font-spock font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {data.stats.transactions.formatted}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                <span>{data.stats.transactions.percentBadge}</span>
                <span className="text-purple-300/60 font-normal ml-1">(24H)</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ================= HOLDER GROWTH OVER TIME CARD ================= */}
        <AnimatedSection direction="up" amount={0.15}>
          <div className="relative rounded-3xl p-5 sm:p-8 bg-[#0c0324]/85 backdrop-blur-2xl border border-purple-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(168,85,247,0.15)] overflow-hidden">
            {/* Ambient subtle glow inside card */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-purple-600/15 blur-[90px] pointer-events-none rounded-full" />

            {/* CARD TOP BAR: TITLE & TIMEFRAME CONTROLS */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 relative z-10">
              {/* Left: Icon + Title */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-900/40 border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.4)]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="font-spock font-bold text-base sm:text-lg lg:text-xl text-white tracking-wide uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  HOLDER GROWTH (LAST 7 DAYS)
                </h3>
              </div>

              {/* Right: Last 7 Days Badge */}
              <div className="flex items-center px-3.5 py-1.5 rounded-xl bg-[#7b2cbf] text-white font-spock text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(168,85,247,0.7)] border border-purple-400/40">
                LAST 7 DAYS
              </div>
            </div>

            {/* Hover Tooltip Indicator Badge (Positioned at top right like in mockup) */}
            <div className="flex justify-end mb-2 relative z-10">
              <div className="rounded-xl px-4 py-2 bg-[#170738]/90 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.25)] text-right">
                <div className="text-[11px] text-purple-300 font-medium tracking-wide">
                  {displayedTooltipPoint.date}
                </div>
                <div className="text-sm sm:text-base font-bold text-white font-spock tracking-wide">
                  {displayedTooltipPoint.holders.toLocaleString('en-US')}{' '}
                  <span className="text-xs text-purple-400 font-medium">Holders</span>
                </div>
              </div>
            </div>

            {/* RECHARTS AREA CHART */}
            <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[400px] z-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 15, left: -15, bottom: 0 }}
                  onMouseMove={(state) => {
                    if (state?.activePayload && state.activePayload.length > 0) {
                      setActiveHoverPoint(state.activePayload[0].payload as HistoryPoint)
                    }
                  }}
                  onMouseLeave={() => setActiveHoverPoint(null)}
                >
                  <defs>
                    <linearGradient id="holderGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9d4edd" stopOpacity={0.45} />
                      <stop offset="60%" stopColor="#7b2cbf" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#070114" stopOpacity={0.0} />
                    </linearGradient>
                    <filter id="chartGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#c084fc" floodOpacity="0.8" />
                    </filter>
                  </defs>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(168, 85, 247, 0.12)"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="date"
                    stroke="#9d4edd"
                    tick={{ fill: '#c084fc', fontSize: 11, fontWeight: 500 }}
                    tickLine={{ stroke: 'rgba(168,85,247,0.3)' }}
                    axisLine={{ stroke: 'rgba(168,85,247,0.3)' }}
                    dy={10}
                  />

                  <YAxis
                    stroke="#9d4edd"
                    tick={{ fill: '#c084fc', fontSize: 11 }}
                    tickLine={{ stroke: 'rgba(168,85,247,0.3)' }}
                    axisLine={{ stroke: 'rgba(168,85,247,0.3)' }}
                    tickFormatter={(val: number) => {
                      if (val >= 1000) return `${Math.round(val / 1000)}K`
                      return `${val}`
                    }}
                    domain={[0, 'dataMax + 2000']}
                  />

                  <Tooltip content={<ChartTooltip />} />

                  <Area
                    type="monotone"
                    dataKey="holders"
                    stroke="#c084fc"
                    strokeWidth={3.5}
                    fillOpacity={1}
                    fill="url(#holderGradient)"
                    filter="url(#chartGlow)"
                    activeDot={{
                      r: 7,
                      fill: '#ffffff',
                      stroke: '#9d4edd',
                      strokeWidth: 3,
                      className: 'drop-shadow-[0_0_12px_#c084fc]',
                    }}
                    dot={{
                      r: 4,
                      fill: '#ffffff',
                      stroke: '#7b2cbf',
                      strokeWidth: 2,
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
