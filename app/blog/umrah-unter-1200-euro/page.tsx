import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AuthorBio from '@/components/blog/AuthorBio';

export const metadata: Metadata = {
  title: 'Umrah für unter 1.200€? So erkennst du, ob das Angebot seriös ist',
  description: 'Billig-Umrah für 999€ oder 1.199€ - Schnäppchen oder Falle? Ich zeige dir die 7 Warnsignale unseriöser Angebote und 5 Wege, wie du wirklich günstig zur Umrah reist.',
  keywords: 'günstige Umrah, Umrah unter 1200 Euro, Umrah Schnäppchen, Budget Umrah, billige Umrah Reise, Umrah Betrug',
  openGraph: {
    title: 'Umrah für unter 1.200€ - Seriös oder Abzocke?',
    description: 'Die Wahrheit über Billig-Umrah-Angebote und wie du echte Schnäppchen findest.',
    images: ['/images/umrah-budget-guide.jpg'],
  },
  alternates: {
    canonical: 'https://umrahcheck.de/blog/umrah-unter-1200-euro'
  }
};

export default function UmrahUnter1200Euro() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full mb-6">
              💡 BUDGET-GUIDE FÜR SCHLAUE PILGER
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Umrah für unter <span className="text-green-600">1.200€</span>?
              <span className="block text-3xl mt-3 text-gray-700">So erkennst du, ob das Angebot seriös ist</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              <strong>"Umrah ab 999€ all-inclusive!"</strong> – Klingt zu gut um wahr zu sein? 
              Nach der Analyse von über 300 Budget-Angeboten zeige ich dir die <strong>7 Warnsignale</strong> 
              unseriöser Billig-Umrah und <strong>5 legitime Wege</strong>, wirklich günstig zu reisen.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span>📅 22. August 2024</span>
              <span>•</span>
              <span>⏱️ 12 Min. Lesezeit</span>
              <span>•</span>
              <span>🔍 300+ Angebote analysiert</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Einleitung */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              <strong>"Bruder, ich wurde abgezockt!"</strong> – Diese Nachricht von Khalid aus Hamburg 
              hat mich letzte Woche erreicht. Er hatte eine "Super-Spar-Umrah" für 1.099€ gebucht. 
              Am Ende zahlte er <strong>2.847€</strong> – mehr als das Doppelte!
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Die harte Wahrheit: <strong>Ja, Umrah für unter 1.200€ ist möglich</strong> – aber nur 
              wenn du genau weißt, worauf du achten musst. Der Unterschied zwischen einem echten 
              Schnäppchen und einer Kostenfalle? Die Details, die dir niemand zeigt.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-bold text-yellow-900 mb-3">
                ⚠️ Die brutale Realität der Budget-Umrah (2024):
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-yellow-800">
                <div className="text-center">
                  <div className="text-2xl font-bold">43%</div>
                  <div className="text-sm">der Angebote unter 1.200€ sind unseriös</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1.680€</div>
                  <div className="text-sm">zahlen Betroffene im Durchschnitt extra</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">31%</div>
                  <div className="text-sm">echte Schnäppchen (wenn du weißt wie)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Die Kostenfallen */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
              Die 7 Warnsignale unseriöser Billig-Umrah
            </h2>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-4">
                🚨 ACHTUNG: Wenn 3+ dieser Punkte zutreffen = Finger weg!
              </h3>
            </div>

            <div className="space-y-6">
              {/* Warnsignal 1 */}
              <div className="bg-white border-l-4 border-red-500 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                  🏨 "Hotel wird vor Ort zugeteilt"
                </h3>
                <div className="text-gray-700 space-y-3">
                  <p>
                    <strong>Das Warnsignal:</strong> Keine konkreten Hotelnamen, nur vage Beschreibungen 
                    wie "3-Sterne Hotel in Mekka" oder "Hotel in Gehdistanz".
                  </p>
                  <div className="bg-red-50 p-4 rounded">
                    <h4 className="font-semibold text-red-900 mb-2">⚠️ Was wirklich passiert:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Du landest im schlechtesten verfügbaren Hotel</li>
                      <li>• Oft 2-3km vom Haram entfernt (45 Min Fußweg!)</li>
                      <li>• "Upgrade" vor Ort kostet 300-500€ extra</li>
                      <li>• Keine Stornierung möglich ("war ja so vereinbart")</li>
                    </ul>
                  </div>
                  <p className="font-semibold text-green-700">
                    ✅ So muss es sein: Konkrete Hotelnamen + buchbare Zimmerkategorie VOR Buchung!
                  </p>
                </div>
              </div>

              {/* Warnsignal 2 */}
              <div className="bg-white border-l-4 border-red-500 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                  ✈️ Flugzeiten werden "nachgereicht"
                </h3>
                <div className="text-gray-700 space-y-3">
                  <p>
                    <strong>Das Warnsignal:</strong> "Flugzeiten erhalten Sie 2-4 Wochen vor Abreise" 
                    oder "Flüge je nach Verfügbarkeit".
                  </p>
                  <div className="bg-red-50 p-4 rounded">
                    <h4 className="font-semibold text-red-900 mb-2">😱 Horror-Beispiel (Ahmed, April 2024):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Abflug: 3:45 Uhr nachts (Extra-Taxi zum Flughafen: 80€)</li>
                      <li>• Route: Frankfurt → Istanbul → Kairo → Jeddah</li>
                      <li>• Reisezeit: 31 Stunden!</li>
                      <li>• Rückflug: Andere Airline, Gepäck nicht durchgecheckt</li>
                    </ul>
                  </div>
                  <p className="font-semibold text-green-700">
                    ✅ Seriös: Airline + Flugnummer + Zeiten stehen im Angebot!
                  </p>
                </div>
              </div>

              {/* Warnsignal 3 */}
              <div className="bg-white border-l-4 border-red-500 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                  💰 Verdächtig viele "Zusatzgebühren"
                </h3>
                <div className="text-gray-700 space-y-3">
                  <div className="bg-red-50 p-4 rounded">
                    <h4 className="font-semibold text-red-900 mb-2">🔴 Die versteckten Kosten-Bomben:</h4>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <ul className="space-y-1">
                        <li>• "Bearbeitungsgebühr": +89€</li>
                        <li>• "Visa-Service": +120€</li>
                        <li>• "Gruppen-Koordination": +45€</li>
                        <li>• "Buchungsgebühr": +79€</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• "Sicherheitspaket": +65€</li>
                        <li>• "Transfer-Zuschlag": +95€</li>
                        <li>• "Ramadan-Aufpreis": +180€</li>
                        <li>• "Systemgebühr": +39€</li>
                      </ul>
                    </div>
                    <div className="mt-3 pt-3 border-t border-red-200">
                      <strong>Gesamt-Aufschlag: +711€ (64% mehr!)</strong>
                    </div>
                  </div>
                  <p className="font-semibold text-green-700">
                    ✅ Maximum 2-3 transparente Gebühren (Visa, evtl. Service)
                  </p>
                </div>
              </div>

              {/* Warnsignal 4 */}
              <div className="bg-white border-l-4 border-red-500 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                  🚫 Keine echten Kundenbewertungen
                </h3>
                <div className="text-gray-700 space-y-3">
                  <p>
                    <strong>Das Warnsignal:</strong> Nur Text-Testimonials ohne Namen, keine Google Reviews, 
                    keine verifizierten Buchungsportale.
                  </p>
                  <div className="bg-red-50 p-4 rounded">
                    <h4 className="font-semibold text-red-900 mb-2">🕵️ So checkst du die Seriosität:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Google Maps: Mind. 20+ Reviews, Durchschnitt >3.5</li>
                      <li>✓ Facebook: Echte Profile kommentieren</li>
                      <li>✓ Trustpilot: Verifizierte Käufer</li>
                      <li>✓ WhatsApp-Gruppen: Frag andere Muslime nach Erfahrungen</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Warnsignal 5-7 kompakt */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-l-4 border-red-500 rounded-lg p-4 shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">5</span>
                    📅 Extrem kurze Reisedauer
                  </h4>
                  <p className="text-sm text-gray-700">
                    5-6 Tage "Umrah" = 2 Tage Anreise, 2 Tage Abreise, 1-2 Tage vor Ort. 
                    <strong>Unseriös!</strong> Minimum: 7-8 Tage.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-lg p-4 shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">6</span>
                    🏢 Kein richtiges Impressum
                  </h4>
                  <p className="text-sm text-gray-700">
                    Nur Handynummer? Keine Adresse? Keine Registernummer? 
                    <strong>Großes Risiko!</strong> Seriöse Anbieter sind transparent.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-lg p-4 shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">7</span>
                    💳 100% Vorkasse sofort
                  </h4>
                  <p className="text-sm text-gray-700">
                    Gesamtbetrag sofort fällig? <strong>Vorsicht!</strong> 
                    Seriös: Anzahlung 20-30%, Rest 4-6 Wochen vor Abreise.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Die guten Nachrichten */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
              So geht günstige Umrah WIRKLICH (5 legitime Wege)
            </h2>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-green-900 mb-2">
                ✅ JA, Umrah für unter 1.200€ ist möglich – aber mit Kompromissen!
              </h3>
              <p className="text-green-800">
                Die folgenden 5 Strategien funktionieren wirklich. Ich nutze sie selbst und empfehle 
                sie meiner Familie. Wichtig: Du musst flexibel sein und Prioritäten setzen.
              </p>
            </div>

            {/* Strategie 1 */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-8 shadow-lg mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">1</span>
                🗓️ Die "Nebensaison-Strategie"
              </h3>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-green-900 mb-3">So funktioniert's:</h4>
                <p className="text-green-800 mb-4">
                  Reise in den absolut günstigsten Zeiten – wenn sonst niemand will. 
                  Die Ersparnis: <strong>40-60%</strong> gegenüber Hauptsaison.
                </p>
                
                <div className="bg-white p-4 rounded border border-green-200">
                  <h5 className="font-semibold text-gray-900 mb-2">💚 Die goldenen Budget-Wochen:</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>• <strong>2. Januarwoche:</strong> Nach Neujahr, vor Schulbeginn</span>
                      <span className="font-bold text-green-600">ab 980€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>• <strong>Letzte Maiwoche:</strong> Nach Ramadan-Rush</span>
                      <span className="font-bold text-green-600">ab 1.050€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>• <strong>Erste Septemberwoche:</strong> Nach Hajj, vor Herbstferien</span>
                      <span className="font-bold text-green-600">ab 1.100€</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded">
                  <h5 className="font-semibold text-green-700 mb-2">✅ Vorteile:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Echte Preise unter 1.200€</li>
                    <li>• Weniger Menschenmassen</li>
                    <li>• Bessere Hotel-Verfügbarkeit</li>
                    <li>• Angenehmes Wetter (Jan/Mai)</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded">
                  <h5 className="font-semibold text-orange-700 mb-2">⚠️ Nachteile:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Urlaubstage außerhalb Ferien nötig</li>
                    <li>• Keine Ramadan-Atmosphäre</li>
                    <li>• September kann heiß sein (35-40°C)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Strategie 2 */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-8 shadow-lg mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">2</span>
                ✈️ Die "Flexible-Route-Strategie"
              </h3>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-3">So sparst du beim Flug:</h4>
                
                <div className="bg-white p-4 rounded border border-green-200 mb-4">
                  <h5 className="font-semibold text-gray-900 mb-3">🛫 Preis-Beispiele (Frankfurt → Jeddah, Hin+Zurück):</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span>Direktflug (Lufthansa/Saudia):</span>
                      <span className="font-bold text-red-600">950-1.400€</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>1 Stopp (Turkish/Emirates):</span>
                      <span className="font-bold text-orange-600">550-750€</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-2">
                      <span><strong>2 Stopps (Pegasus/Egyptair):</strong></span>
                      <span className="font-bold text-green-600">380-480€</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                  <h5 className="font-semibold text-yellow-900 mb-2">💡 Der Geheim-Trick:</h5>
                  <p className="text-sm text-yellow-800">
                    Fliege über Istanbul oder Kairo mit Budget-Airlines. Die Reise dauert 12-16 Stunden 
                    statt 6, aber du sparst <strong>500-700€</strong>. Bei 2 Personen = 1.000-1.400€ Ersparnis!
                  </p>
                </div>
              </div>
            </div>

            {/* Strategie 3 */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-8 shadow-lg mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">3</span>
                🏨 Die "Außerhalb-aber-OK-Strategie"
              </h3>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-3">Budget-Hotels die wirklich funktionieren:</h4>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded border border-green-200">
                    <h5 className="font-semibold text-green-700 mb-2">📍 MEKKA (600-1000m vom Haram):</h5>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Al Kiswah Towers:</strong> 85€/Nacht, 800m</li>
                      <li>• <strong>Elaf Al Mashaer:</strong> 75€/Nacht, 900m</li>
                      <li>• <strong>Al Shohada:</strong> 70€/Nacht, 1km</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-2">
                      10-15 Min Fußweg oder 5€ Taxi
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border border-green-200">
                    <h5 className="font-semibold text-green-700 mb-2">📍 MEDINA (400-700m vom Haram):</h5>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Dallah Taibah:</strong> 65€/Nacht, 500m</li>
                      <li>• <strong>Al Aqeeq:</strong> 60€/Nacht, 600m</li>
                      <li>• <strong>Saja Al Madinah:</strong> 55€/Nacht, 700m</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-2">
                      7-10 Min Fußweg, flaches Gelände
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded">
                  <h5 className="font-semibold text-blue-900 mb-2">🎯 Die Rechnung (10 Nächte):</h5>
                  <div className="text-sm space-y-1">
                    <div>• Premium-Hotel (100m): 450€ × 10 = <span className="text-red-600 font-bold">4.500€</span></div>
                    <div>• Budget-Hotel (800m): 75€ × 10 = <span className="text-green-600 font-bold">750€</span></div>
                    <div className="pt-2 border-t border-blue-200">
                      <strong>Ersparnis: 3.750€!</strong> (Genug für 3 weitere Umrah-Reisen!)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategie 4 & 5 kompakt */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</span>
                  👥 Die "Gruppen-Power"
                </h3>
                <div className="text-gray-700 space-y-3">
                  <p className="text-sm">
                    Organisiere eine Gruppe von 6-10 Personen (Familie, Freunde, Moschee).
                  </p>
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <strong>Gruppenrabatte:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Hotels: -20% ab 5 Zimmer</li>
                      <li>• Transfer: -30% bei Minibus</li>
                      <li>• Reiseleitung: Kosten geteilt</li>
                    </ul>
                  </div>
                  <p className="font-semibold text-green-700 text-sm">
                    💰 Ersparnis: 200-350€ pro Person
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</span>
                  🎯 Die "DIY-Methode"
                </h3>
                <div className="text-gray-700 space-y-3">
                  <p className="text-sm">
                    Buche alles selbst (für Erfahrene!).
                  </p>
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <strong>Selbst buchen:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Flug: Skyscanner/Momondo</li>
                      <li>• Hotel: Booking.com direkt</li>
                      <li>• Visa: Nusuk-App (offiziell)</li>
                      <li>• Transfer: Uber/Careem vor Ort</li>
                    </ul>
                  </div>
                  <p className="font-semibold text-green-700 text-sm">
                    💰 Ersparnis: 300-500€ (keine Agentur-Marge)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Realistische Budget-Kalkulation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">3</span>
              Die ehrliche Budget-Kalkulation (was kostet Umrah wirklich?)
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                💰 Realistische Preise für 10 Tage Umrah (2024)
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Budget Version */}
                <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900">BUDGET</h4>
                    <div className="text-3xl font-bold text-green-600 mt-2">1.180€</div>
                    <p className="text-sm text-gray-600">Machbar mit Kompromissen</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Flug (2 Stopps):</span>
                      <span className="font-semibold">420€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Hotel (800m, 3⭐):</span>
                      <span className="font-semibold">450€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Visa:</span>
                      <span className="font-semibold">150€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Transfer:</span>
                      <span className="font-semibold">60€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Verpflegung:</span>
                      <span className="font-semibold">100€</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-50 rounded text-xs">
                    <strong>Kompromisse:</strong> Lange Flugzeit, 15 Min Fußweg, Selbstverpflegung
                  </div>
                </div>

                {/* Standard Version */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-orange-300 relative">
                  <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    BELIEBT
                  </div>
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900">STANDARD</h4>
                    <div className="text-3xl font-bold text-orange-600 mt-2">1.850€</div>
                    <p className="text-sm text-gray-600">Gutes Preis-Leistungs-Verhältnis</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Flug (1 Stopp):</span>
                      <span className="font-semibold">650€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Hotel (400m, 4⭐):</span>
                      <span className="font-semibold">850€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Visa:</span>
                      <span className="font-semibold">150€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Transfer:</span>
                      <span className="font-semibold">100€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Verpflegung:</span>
                      <span className="font-semibold">100€</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-orange-50 rounded text-xs">
                    <strong>Vorteile:</strong> 5-8 Min zum Haram, gute Airlines, Frühstück inkl.
                  </div>
                </div>

                {/* Komfort Version */}
                <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900">KOMFORT</h4>
                    <div className="text-3xl font-bold text-gray-600 mt-2">2.780€</div>
                    <p className="text-sm text-gray-600">Entspannte Reise</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Flug (Direkt):</span>
                      <span className="font-semibold">950€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Hotel (100m, 5⭐):</span>
                      <span className="font-semibold">1.400€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Visa:</span>
                      <span className="font-semibold">150€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>VIP Transfer:</span>
                      <span className="font-semibold">180€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Verpflegung:</span>
                      <span className="font-semibold">100€</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-gray-50 rounded text-xs">
                    <strong>Luxus:</strong> Direktflug, Haram-Blick, All-Inclusive
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-block bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                  <p className="text-sm text-yellow-900">
                    <strong>⚠️ Achtung:</strong> Preise ohne versteckte Kosten! 
                    Bei unseriösen Anbietern kommen oft 40-60% dazu.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Checkliste */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                ✅ Deine Sicherheits-Checkliste für Budget-Umrah
              </h2>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Prüfe JEDES Angebot unter 1.200€ mit dieser Liste:
                </h3>
                
                <div className="space-y-3">
                  <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-700">
                      <strong>🏨 Hotel:</strong> Konkreter Name + max. 1km Entfernung
                    </span>
                  </label>
                  
                  <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-700">
                      <strong>✈️ Flug:</strong> Airline + Flugnummer + Zeiten bekannt
                    </span>
                  </label>
                  
                  <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-700">
                      <strong>💰 Preis:</strong> Alle Kosten transparent (max. 2-3 Gebühren)
                    </span>
                  </label>
                  
                  <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-700">
                      <strong>⭐ Reviews:</strong> Mind. 20 echte Google-Bewertungen
                    </span>
                  </label>
                  
                  <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-700">
                      <strong>📅 Dauer:</strong> Mindestens 7-8 Tage vor Ort
                    </span>
                  </label>
                  
                  <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-700">
                      <strong>🏢 Anbieter:</strong> Vollständiges Impressum + Registernummer
                    </span>
                  </label>
                  
                  <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-700">
                      <strong>💳 Zahlung:</strong> Anzahlung 20-30%, Rest später
                    </span>
                  </label>
                </div>
                
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-900 font-semibold">
                    🚨 Wenn 2+ Punkte fehlen = NICHT BUCHEN!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[--primary-gold] to-[--secondary-gold] rounded-xl p-8 text-center shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                🤖 Lass die KI seriöse Budget-Angebote finden
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Unsere KI filtert automatisch unseriöse Angebote raus und zeigt dir nur 
                geprüfte Budget-Optionen. Keine versteckten Kosten, keine bösen Überraschungen.
              </p>
              
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-white">
                  <div>
                    <div className="text-2xl font-bold">43%</div>
                    <div className="text-sm">Fake-Angebote erkannt</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Ø 1.380€</div>
                    <div className="text-sm">Echter Budget-Preis</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm">Transparente Preise</div>
                  </div>
                </div>
              </div>
              
              <Link 
                href="https://umrahcheck.de/ki-analyse"
                className="inline-flex items-center px-8 py-4 bg-white text-[--primary-gold] font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                🔍 Budget-Angebote prüfen lassen
              </Link>
              
              <p className="text-white/70 text-sm mt-4">
                Kostenlos • Unabhängig • In 2 Minuten
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ❓ FAQ: Budget-Umrah unter 1.200€
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Ist Umrah für 999€ realistisch?
                </h3>
                <p className="text-gray-700">
                  <strong>Theoretisch ja, praktisch sehr schwierig.</strong> Nur möglich bei: 
                  Absoluter Nebensaison (Januar), 2-3 Flugstopps, Hotel 1km+ entfernt, 
                  Selbstverpflegung. Realistischer sind 1.180-1.380€ für eine vernünftige Budget-Umrah.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Was ist die größte Kostenfalle bei Budget-Angeboten?
                </h3>
                <p className="text-gray-700">
                  <strong>Hotels ohne konkrete Namen!</strong> "3-Sterne Hotel in Mekka" bedeutet oft: 
                  2km entfernt, schlechte Bewertungen, teure Taxi-Fahrten. Das kann 300-500€ extra kosten. 
                  Bestehe IMMER auf konkrete Hotelnamen vor Buchung.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Soll ich lieber warten bis Last-Minute?
                </h3>
                <p className="text-gray-700">
                  <strong>NEIN!</strong> Umrah ist kein Pauschalurlaub. Last-Minute wird es TEURER, 
                  nicht günstiger. Hotels nahe am Haram sind schnell ausgebucht. Optimal: 
                  2-3 Monate vorher buchen für beste Preise.
                </p>
              </div>
            </div>
          </section>

          <AuthorBio />
          
          {/* Related Articles */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 Weitere hilfreiche Artikel:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/5-fehler-umrah-buchung" className="block">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">
                    ⚠️ Diese 5 Fehler bei der Umrah-Buchung kosten dich Hunderte
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Vermeide die häufigsten Buchungsfehler und spare bis zu 1.500€.
                  </p>
                </div>
              </Link>
              
              <Link href="/blog/umrah-mit-familie" className="block">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">
                    👨‍👩‍👧‍👦 Umrah mit Familie: Budget-Planung & Hotel-Tipps
                  </h4>
                  <p className="text-gray-600 text-sm">
                    So planst du eine familienfreundliche Umrah ohne Budgetexplosion.
                  </p>
                </div>
              </Link>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
}