import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie-Richtlinie - UmrahCheck",
  description:
    "Informationen über die Verwendung von Cookies auf UmrahCheck.de. Transparente Aufklärung über Tracking, Analytics und Ihre Wahlmöglichkeiten.",
  alternates: {
    canonical: "https://umrahcheck.de/cookies",
  },
  openGraph: {
    title: "Cookie-Richtlinie - UmrahCheck",
    description: "Informationen über die Verwendung von Cookies auf UmrahCheck.de.",
    url: "https://umrahcheck.de/cookies",
    siteName: "UmrahCheck",
    type: "website",
  },
  robots: {
    index: false, // Cookie-Seiten werden meist nicht indexiert
    follow: true,
  },
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[--cream-light] to-[--sand]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Cookie-Richtlinie
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Transparente Informationen über die Verwendung von Cookies auf UmrahCheck.de
          </p>
          <p className="text-sm text-white/70 mt-4">
            Letzte Aktualisierung: 21. August 2024
          </p>
        </div>
      </section>

      {/* Cookie Content */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          
          {/* What are Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-[--primary-gold]/20">
              🍪 Was sind Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies sind kleine Textdateien, die auf Ihrem Gerät (Computer, Smartphone, Tablet) 
              gespeichert werden, wenn Sie unsere Website besuchen. Sie helfen uns dabei, Ihre 
              Erfahrung auf unserer Website zu verbessern und wichtige Funktionen bereitzustellen.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cookies enthalten keine persönlich identifizierbaren Informationen und können Ihrem 
              Gerät nicht schaden. Sie können in Ihren Browser-Einstellungen jederzeit deaktiviert werden.
            </p>
          </div>

          {/* Types of Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-[--primary-gold]/20">
              🔍 Welche Arten von Cookies verwenden wir?
            </h2>
            
            <div className="space-y-6">
              {/* Essential Cookies */}
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ✅ Notwendige Cookies (Immer aktiv)
                </h3>
                <p className="text-gray-700 mb-3">
                  Diese Cookies sind für den Betrieb der Website unerlässlich und können nicht deaktiviert werden.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sicherheits-Cookies für sichere Datenübertragung</li>
                  <li>• Session-Cookies für die Navigation</li>
                  <li>• Cookie-Einstellungen merken</li>
                </ul>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  📊 Analyse-Cookies (Optional)
                </h3>
                <p className="text-gray-700 mb-3">
                  Helfen uns zu verstehen, wie unsere Website genutzt wird, um sie zu verbessern.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Google Analytics:</strong> Besucherstatistiken und Website-Performance</li>
                  <li>• <strong>PostHog:</strong> Nutzerverhalten und Verbesserungsmöglichkeiten</li>
                  <li>• Seitenaufrufe, Verweildauer, beliebteste Inhalte</li>
                </ul>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🎯 Marketing-Cookies (Optional)
                </h3>
                <p className="text-gray-700 mb-3">
                  Ermöglichen es uns, Ihnen relevante Inhalte und Angebote zu zeigen.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Affiliate-Tracking für Buchungsempfehlungen</li>
                  <li>• Personalisierte Inhalte basierend auf Ihren Interessen</li>
                  <li>• Conversion-Tracking für Verbesserungen</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third Party Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-[--primary-gold]/20">
              🔗 Cookies von Drittanbietern
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Einige Cookies werden von vertrauenswürdigen Drittanbietern gesetzt, um bestimmte 
              Funktionen und Services zu ermöglichen:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Anonymisierte Besuchsstatistiken zur Website-Verbesserung
                </p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                   className="text-[--primary-gold] text-sm hover:underline">
                  Datenschutzerklärung von Google →
                </a>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">PostHog</h4>
                <p className="text-sm text-gray-600 mb-2">
                  EU-hosted Analytics für Nutzerverhalten und A/B-Tests
                </p>
                <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" 
                   className="text-[--primary-gold] text-sm hover:underline">
                  PostHog Privacy Policy →
                </a>
              </div>
            </div>
          </div>

          {/* Your Choices */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-[--primary-gold]/20">
              ⚙️ Ihre Wahlmöglichkeiten
            </h2>
            
            <div className="space-y-4">
              <div className="bg-[--primary-gold]/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Cookie-Einstellungen verwalten
                </h3>
                <p className="text-gray-700 mb-4">
                  Sie haben jederzeit die Kontrolle über Cookies auf unserer Website:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Cookie-Banner:</strong> Beim ersten Besuch können Sie Ihre Präferenzen festlegen</li>
                  <li>• <strong>Browser-Einstellungen:</strong> Cookies in Ihren Browser-Einstellungen deaktivieren</li>
                  <li>• <strong>Einzeln verwalten:</strong> Bestimmte Cookie-Kategorien ein- oder ausschalten</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Browser-spezifische Anleitungen
                </h3>
                <p className="text-gray-700 mb-3">
                  Cookies in verschiedenen Browsern verwalten:
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer"
                     className="text-[--primary-gold] hover:underline">• Google Chrome</a>
                  <a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen" target="_blank" rel="noopener noreferrer"
                     className="text-[--primary-gold] hover:underline">• Mozilla Firefox</a>
                  <a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer"
                     className="text-[--primary-gold] hover:underline">• Safari</a>
                  <a href="https://support.microsoft.com/de-de/windows/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer"
                     className="text-[--primary-gold] hover:underline">• Microsoft Edge</a>
                </div>
              </div>
            </div>
          </div>

          {/* Impact of Disabling */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-[--primary-gold]/20">
              ⚠️ Was passiert, wenn Sie Cookies deaktivieren?
            </h2>
            
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <p className="text-gray-700 mb-4">
                Das Deaktivieren von Cookies kann die Funktionalität unserer Website beeinträchtigen:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Notwendige Cookies:</strong> Website funktioniert möglicherweise nicht ordnungsgemäß</li>
                <li>• <strong>Analyse-Cookies:</strong> Wir können die Website-Performance nicht optimieren</li>
                <li>• <strong>Marketing-Cookies:</strong> Weniger relevante Inhalte und Empfehlungen</li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                <strong>Hinweis:</strong> Die KI-Analyse und grundlegende Funktionen bleiben auch ohne 
                Cookies verfügbar.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-[--primary-gold]/20">
              📧 Fragen zu Cookies?
            </h2>
            <p className="text-gray-700 mb-4">
              Wenn Sie Fragen zu unserer Cookie-Verwendung haben oder Ihre Einstellungen 
              ändern möchten, kontaktieren Sie uns gerne:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:info@umrahcheck.de?subject=Cookie-Richtlinie%20Frage"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[--primary-gold] text-white font-semibold rounded-lg hover:bg-[--secondary-gold] transition-colors w-fit"
              >
                📧 info@umrahcheck.de
              </a>
              <a 
                href="https://wa.me/966560630947?text=Hallo,%20ich%20habe%20eine%20Frage%20zu%20den%20Cookie-Einstellungen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors w-fit"
              >
                📱 WhatsApp
              </a>
            </div>
          </div>

          {/* Updates */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              🔄 Aktualisierungen dieser Richtlinie
            </h3>
            <p className="text-gray-700">
              Wir können diese Cookie-Richtlinie gelegentlich aktualisieren, um Änderungen in 
              unseren Praktiken oder rechtlichen Anforderungen zu reflektieren. Das Datum der 
              letzten Aktualisierung finden Sie am Anfang dieser Seite.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}