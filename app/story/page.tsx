import { Metadata } from 'next';
import { StorySection } from '@/components/sections/story-section';

export const metadata: Metadata = {
  title: 'Unsere Story - UmrahCheck | Von Medina aus für die Ummah',
  description: 'Erfahre, warum Mustafa Ali UmrahCheck gegründet hat. Aus 5+ Jahren in Medina und 40-50 Umrahs entstanden ehrliche, transparente Umrah-Angebote.',
};

export default function StoryPage() {
  return (
    <main className="min-h-screen">
      <StorySection />
    </main>
  );
}