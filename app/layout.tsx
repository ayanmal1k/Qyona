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
  metadataBase: new URL('https://qyona.com'),
  title: {
    default: 'QYONA - A Cosmic Creature Powered by Community | $QYN',
    template: '%s | QYONA',
  },
  description:
    'A small creature from another galaxy collecting the energy of the community. Join the QYONA Universe powered by BNB Chain ($QYN).',
  keywords: [
    'QYONA',
    'QYN',
    'BNB Chain',
    'BNB',
    'Crypto',
    'Web3 Universe',
    'Cosmic Creature',
    'Meme Coin',
    'Crypto Community',
    'BSC Token',
  ],
  authors: [{ name: 'QYONA Community', url: 'https://qyona.com' }],
  creator: 'QYONA',
  publisher: 'QYONA',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png' },
    ],
  },
  openGraph: {
    title: 'QYONA - A Cosmic Creature Powered by Community',
    description:
      'A small creature from another galaxy collecting the energy of the community. The more people join, the stronger QYONA becomes.',
    url: 'https://qyona.com',
    siteName: 'QYONA Universe',
    images: [
      {
        url: '/new-hero-bg.avif',
        width: 1920,
        height: 1080,
        alt: 'QYONA Cosmic Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QYONA - A Cosmic Creature Powered by Community',
    description:
      'A small creature from another galaxy collecting the energy of the community. Join the QYONA Universe powered by BNB Chain ($QYN).',
    site: '@MrJunglePro',
    creator: '@MrJunglePro',
    images: ['/new-hero-bg.avif'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#070114',
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
