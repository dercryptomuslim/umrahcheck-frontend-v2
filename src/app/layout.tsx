import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UmrahCheck - Premium Halal Hotels für deine Umrah',
  description: 'Die erste KI-Beratung für deine Umrah. Finde die besten Halal Hotels in Makkah & Medina.',
  keywords: 'Umrah, Halal Hotels, Makkah, Medina, KI-Beratung, Premium Hotels',
  authors: [{ name: 'UmrahCheck Team' }],
  creator: 'UmrahCheck',
  publisher: 'UmrahCheck',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'UmrahCheck - Premium Halal Hotels für deine Umrah',
    description: 'Die erste KI-Beratung für deine Umrah. Finde die besten Halal Hotels in Makkah & Medina.',
    url: 'https://umrahcheck.com',
    siteName: 'UmrahCheck',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UmrahCheck - Premium Halal Hotels',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UmrahCheck - Premium Halal Hotels für deine Umrah',
    description: 'Die erste KI-Beratung für deine Umrah. Finde die besten Halal Hotels in Makkah & Medina.',
    images: ['/images/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
