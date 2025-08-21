import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { FloatingWhatsApp } from '@/components/ui/floating-whatsapp'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

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
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'UmrahCheck',
  },
  metadataBase: new URL('https://umrahcheck-frontend-v2.vercel.app'),
  openGraph: {
    title: 'UmrahCheck - Premium Halal Hotels für deine Umrah',
    description: 'Die erste KI-Beratung für deine Umrah. Finde die besten Halal Hotels in Makkah & Medina.',
    url: 'https://umrahcheck-frontend-v2.vercel.app',
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

export const viewport: Viewport = {
  themeColor: '#10b981',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script 
          id="Cookiebot" 
          src="https://consent.cookiebot.com/uc.js" 
          data-cbid="fd402bfe-7103-44fe-bda6-a685244210c9" 
          data-blockingmode="auto" 
          type="text/javascript"
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp 
          phoneNumber="966560630947"
          message="Assalamu alaikum! Ich interessiere mich für eine Umrah-Beratung mit Mustafa aus Medina."
          showAfter={3000}
        />
      </body>
    </html>
  )
}
