import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/providers/smooth-scroll'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spockEssential = localFont({
  src: [
    {
      path: '../public/Spock Essential Alt 1/SpockEssAlt1-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/Spock Essential Alt 1/SpockEssAlt1-ThinIt.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../public/Spock Essential Alt 1/SpockEssAlt1-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/Spock Essential Alt 1/SpockEssAlt1-UltraLightIt.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../public/Spock Essential Alt 1/SpockEssAlt1-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/Spock Essential Alt 1/SpockEssAlt1-LightIt.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/Spock Essential Alt 1/SpockEssAlt1-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/Spock Essential Alt 1/SpockEssAlt1-RegularIt.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/Spock Essential Alt 1/SpockEssAlt1-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/Spock Essential Alt 1/SpockEssAlt1-BoldIt.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/Spock Essential Alt 1/SpockEssAlt1-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/Spock Essential Alt 1/SpockEssAlt1-BlackIt.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-spock',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'QYONA - A Cosmic Creature Powered by Community',
  description: 'A small creature from another galaxy collecting the energy of the community. The more people join, the stronger QYONA becomes.',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spockEssential.variable} ${geist.variable} dark`}>
      <body className="font-sans antialiased bg-[#070114] text-white selection:bg-purple-600 selection:text-white min-h-screen overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
