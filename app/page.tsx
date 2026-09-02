import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import TokenomicsSection from '@/components/tokenomics-section'
import RoadmapSection from '@/components/roadmap-section'
import WhitelistSection from '@/components/whitelist-section'
import SocialSection from '@/components/social-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#070114]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <WhitelistSection />
      <SocialSection />
      <Footer />
    </main>
  )
}






