import { Metadata } from 'next';
import { AngeboteSection } from '@/app/components/sections/angebote-section';

export const metadata: Metadata = {
  title: 'Live Angebote - UmrahCheck | Budget-optimierte Flug & Hotel Kombis',
  description: 'Entdecke live Umrah-Angebote mit optimaler Budgetaufteilung. Flüge + Hotels intelligent kombiniert für beste Preise.',
  keywords: 'Umrah Angebote, Budget Optimierung, Flug Hotel Kombinationen, Live Preise, Halal Hotels',
  openGraph: {
    title: 'Live Angebote - UmrahCheck | Budget-optimierte Umrah Reisen',
    description: 'Entdecke live Umrah-Angebote mit intelligenter 50/45/5 Budgetaufteilung. Flüge + Hotels optimal kombiniert.',
    url: 'https://umrahcheck.de/angebote',
    siteName: 'UmrahCheck',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UmrahCheck Live Angebote',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Angebote - UmrahCheck | Budget-optimierte Umrah Reisen',
    description: 'Entdecke live Umrah-Angebote mit intelligenter Budgetaufteilung.',
    images: ['/images/twitter-image.jpg'],
  },
};

export default function AngebotePage() {
  return (
    <main className="min-h-screen">
      <AngeboteSection />
    </main>
  );
}