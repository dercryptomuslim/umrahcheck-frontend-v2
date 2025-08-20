import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  DollarSign,
  Plane,
  Hotel,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Warum Umrah-Reisen so teuer geworden sind – und wie du trotzdem sparen kannst",
  description:
    "Die Kosten für Umrah-Reisen sind in den letzten Jahren drastisch gestiegen. Erfahre die wahren Gründe und wie du trotzdem eine erschwingliche Pilgerreise planst. ✈️ Spare bis zu 2.000€!",
  keywords: "Umrah Kosten, Umrah günstig, Umrah sparen, Umrah Preise, günstige Umrah, Umrah Budget, Mekka Reise Kosten, Umrah 2024 Preise",
  alternates: {
    canonical: "https://umrahcheck.de/blog/umrah-preise-sparen",
  },
  openGraph: {
    title: "Warum Umrah-Reisen so teuer geworden sind – Spartipps",
    description:
      "Die Kosten für Umrah-Reisen sind drastisch gestiegen. Erfahre die wahren Gründe und wie du trotzdem bis zu 2.000€ sparen kannst.",
    url: "https://umrahcheck.de/blog/umrah-preise-sparen",
    siteName: "UmrahCheck",
    type: "article",
    publishedTime: "2024-08-20T10:00:00Z",
    authors: ["Mustafa Ali"],
    section: "Umrah Planung",
    tags: ["Umrah Kosten", "Sparen", "Budget", "Reiseplanung"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warum Umrah-Reisen so teuer geworden sind – Spartipps",
    description:
      "Erfahre die wahren Gründe für teure Umrah-Reisen und wie du trotzdem bis zu 2.000€ sparen kannst.",
  },
};

export default function UmrahPreiseSparenPage() {
  const publishDate = new Date("2024-08-20");

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[--cream-light] to-[--sand]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white py-8">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-lg text-white hover:bg-white hover:text-[--midnight] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zum Blog
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <div className="overflow-hidden shadow-xl border-0 bg-white/90 backdrop-blur rounded-lg">
              <div className="relative h-64 md:h-80">
                <img 
                  src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Kaaba in Mekka - Umrah Pilgerreise"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-[--primary-gold] text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Kosten & Sparen
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-[--midnight] mb-6 leading-tight">
                  Warum Umrah-Reisen so teuer geworden sind – und wie du trotzdem sparen kannst
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>Mustafa Ali</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{publishDate.toLocaleDateString('de-DE')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>8 Min Lesezeit</span>
                  </div>
                  <button className="ml-auto border border-gray-300 px-3 py-1 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4 mr-2 inline" />
                    Teilen
                  </button>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Als praktizierender Muslim, der selbst schon mehrmals die Umrah gemacht hat, verstehe ich den Schmerz, 
                  wenn man die aktuellen Preise für Umrah-Reisen sieht. Was früher 800-1.200€ kostete, liegt heute oft 
                  bei 2.500-4.000€ – und das für dieselben Hotels und Flüge!
                </p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="space-y-8">
            
            {/* Problem Statement */}
            <div className="bg-red-50 border-red-200 border rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Die harte Realität</h3>
                  <p className="text-red-700">
                    Eine Familie mit 4 Personen zahlt heute oft 12.000-16.000€ für eine 2-wöchige Umrah – 
                    ein Betrag, der viele gläubige Muslime von ihrer spirituellen Reise abhält.
                  </p>
                </div>
              </div>
            </div>

            {/* Why so expensive */}
            <div className="bg-white/90 backdrop-blur shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[--midnight] mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[--primary-gold]" />
                Warum sind Umrah-Reisen so teuer geworden?
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[--midnight] mb-3">1. Gestiegene Nachfrage nach Corona</h3>
                  <p className="text-gray-700 mb-3">
                    Nach den Corona-Beschränkungen ist die Nachfrage explodiert. Millionen von Muslimen weltweit 
                    hatten ihre Umrah aufgeschoben und wollten 2022-2024 nachholen. Das Angebot blieb gleich, 
                    die Nachfrage verdoppelte sich.
                  </p>
                  <div className="bg-[--cream] p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Beispiel:</strong> Hotels in Mekka, die 2019 noch 150€/Nacht kosteten, 
                      verlangen heute 400-600€/Nacht für dieselben Zimmer.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[--midnight] mb-3">2. Monopolstellung der Reiseanbieter</h3>
                  <p className="text-gray-700 mb-3">
                    Viele deutsche Umrah-Anbieter nutzen ihre Marktposition aus. Sie wissen: Muslime haben 
                    oft wenig Zeit, selbst zu recherchieren, und vertrauen auf "Rundum-sorglos-Pakete".
                  </p>
                  <div className="bg-[--cream] p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Die Wahrheit:</strong> Diese Anbieter buchen oft dieselben Hotels und Flüge, 
                      die du selbst finden könntest – nur mit 200-300% Aufschlag.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[--midnight] mb-3">3. Versteckte Kosten und überteuerte "Services"</h3>
                  <p className="text-gray-700 mb-3">
                    Viele Anbieter locken mit niedrigen Grundpreisen, verstecken aber Kosten für:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Visum-Service (40€ für 10 Minuten Arbeit)</li>
                    <li>"Spirituelle Begleitung" (300€ für ein paar Duas)</li>
                    <li>Transfer-Service (80€ für eine 20€ Uber-Fahrt)</li>
                    <li>Gruppenverpflegung (25€/Tag für 5€ Essen)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Solution Section */}
            <div className="bg-green-50 border-green-200 border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-green-600" />
                So sparst du trotzdem bei deiner Umrah
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    1. Buche Flug und Hotel separat
                  </h3>
                  <p className="text-green-700 mb-3">
                    Statt Pauschalreisen: Buche Flüge über Skyscanner/Momondo und Hotels direkt. 
                    Das kann 40-60% der Kosten sparen.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <p className="text-sm text-green-600">
                      <strong>Ersparnis-Beispiel:</strong> Pauschalreise 3.500€ vs. Eigenorganisation 1.400€ = 2.100€ gespart!
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Plane className="w-5 h-5" />
                    2. Flexible Reisezeiten nutzen
                  </h3>
                  <p className="text-green-700 mb-3">
                    Meide deutsche Schulferien und islamische Feiertage. Am günstigsten: 
                    Januar-Februar und September-Oktober.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <p className="text-sm text-green-600">
                      <strong>Tipp:</strong> Eine Woche früher oder später kann 800-1.200€ pro Person sparen.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Hotel className="w-5 h-5" />
                    3. Hotelstandort clever wählen
                  </h3>
                  <p className="text-green-700 mb-3">
                    Hotels direkt am Haram kosten 3-5x mehr. Ein Hotel 10-15 Minuten zu Fuß entfernt 
                    bietet oft besseren Service für die Hälfte des Preises.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <p className="text-sm text-green-600">
                      <strong>Realität:</strong> Du läufst sowieso oft um die Kaaba – 10 Minuten mehr Weg sind kein Problem.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    4. Gruppenbuchungen vermeiden
                  </h3>
                  <p className="text-green-700 mb-3">
                    Gruppenbuchungen sind oft teurer und weniger flexibel. Als Familie oder 
                    mit Freunden individual zu buchen ist meist günstiger.
                  </p>
                </div>
              </div>
            </div>

            {/* Realistic Budget */}
            <div className="bg-blue-50 border-blue-200 border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Realistische Budgets für 2024/2025
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Budget-Umrah (1.200-1.500€)</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Indirekte Flüge (1-2 Stopps)</li>
                    <li>• 3-Sterne Hotels, 15-20 Min zum Haram</li>
                    <li>• 10-12 Tage</li>
                    <li>• Eigenorganisation</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Komfort-Umrah (2.000-2.500€)</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Direkte Flüge oder 1 Stopp</li>
                    <li>• 4-Sterne Hotels, 5-10 Min zum Haram</li>
                    <li>• 12-14 Tage</li>
                    <li>• Mix aus Eigenorganisation und Service</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-white p-4 rounded-lg border border-blue-200">
                <p className="text-blue-700 text-center">
                  <strong>Wichtig:</strong> Diese Preise gelten für eigenorganisierte Reisen. 
                  Pauschalanbieter verlangen oft das Doppelte für dieselben Leistungen.
                </p>
              </div>
            </div>

            {/* UmrahCheck CTA */}
            <div className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                🎯 Du willst konkrete Zahlen für deine Umrah?
              </h2>
              <p className="text-xl opacity-90 mb-6">
                Unsere KI analysiert dein Budget und zeigt dir die besten Flug- und Hoteloptionen – 
                kostenlos und ehrlich, ohne versteckte Verkaufsabsichten.
              </p>
              <div className="space-y-4">
                <Link
                  href="/ki-analyse"
                  className="inline-flex items-center gap-2 bg-[--primary-gold] hover:bg-[--primary-gold-hover] text-[--midnight] font-bold px-8 py-4 text-lg rounded-lg transition-colors"
                >
                  <Zap className="w-5 h-5" />
                  Kostenlose KI-Analyse starten
                </Link>
                <p className="text-sm opacity-80">
                  ✓ Keine E-Mail-Adresse erforderlich ✓ Sofortiges Ergebnis ✓ 100% kostenlos
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-white/90 backdrop-blur shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[--midnight] mb-6">Fazit: Umrah muss nicht unbezahlbar sein</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Ja, Umrah-Reisen sind teurer geworden. Aber mit der richtigen Herangehensweise und etwas 
                  Eigeninitiative kannst du trotzdem eine bezahlbare und spirituell erfüllende Pilgerreise machen.
                </p>
                
                <p>
                  Die wichtigste Lektion: <strong>Lass dich nicht von überteuerten Pauschalanbietern abzocken.</strong> 
                  Mit 1-2 Stunden Recherche kannst du oft 2.000€ oder mehr sparen – Geld, das du für deine Familie 
                  oder Wohltätigkeitsarbeit verwenden kannst.
                </p>
                
                <p>
                  Möge Allah deine Umrah annehmen und dir dabei helfen, den besten Weg für deine spirituelle Reise zu finden. 
                  Ameen. 🤲
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Mustafa Ali"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[--midnight]">Mustafa Ali</p>
                    <p className="text-sm text-gray-600">Gründer von UmrahCheck • 4x Umrah-Pilger • Medina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Section */}
            <div className="bg-[--cream] border-[--primary-gold]/30 border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-[--midnight] mb-4">
                Hat dir dieser Artikel geholfen?
              </h3>
              <p className="text-gray-600 mb-4">
                Teile ihn mit anderen Muslimen, die auch von diesen Spartipps profitieren können!
              </p>
              <div className="flex justify-center gap-4">
                <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  📱 WhatsApp teilen
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  📧 Per E-Mail senden
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  🔗 Link kopieren
                </button>
              </div>
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}