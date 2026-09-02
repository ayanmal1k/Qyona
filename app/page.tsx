import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import TokenomicsSection from '@/components/tokenomics-section'

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#070114]">
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
    </main>
  )
}


