import { Metadata } from 'next';
import { PreisvergleichSection } from '@/components/sections/preisvergleich-section';

export const metadata: Metadata = {
  title: 'Preisvergleich - UmrahCheck | Ehrliches Feedback zu deinem Angebot',
  description: 'Lade dein Umrah-Angebot hoch und erhalte ehrliches Feedback mit Einsparpotenzial. Kostenlose Analyse in 2 Minuten.',
};

export default function PreisvergleichPage() {
  return (
    <main className="min-h-screen">
      <PreisvergleichSection />
    </main>
  );
}