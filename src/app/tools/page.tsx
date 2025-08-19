import { Metadata } from 'next';
import { ToolsSection } from '@/components/sections/tools-section';

export const metadata: Metadata = {
  title: 'Tools & Guides - UmrahCheck | Visa, Packliste, Restaurant Guide',
  description: 'Kostenlose Umrah-Tools: Saudi eVisa Guide, digitale Packliste, Restaurant-Guide für Mekka & Medina. Alles für deine perfekte Umrah-Vorbereitung.',
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen">
      <ToolsSection />
    </main>
  );
}