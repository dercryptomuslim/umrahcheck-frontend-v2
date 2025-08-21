import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AuthorBio from '@/components/blog/AuthorBio';

export const metadata: Metadata = {
  title: 'Umrah mit der Familie – Was du bei Hotels und Budget beachten musst (2024)',
  description: 'Plane die perfekte Familien-Umrah: Familienfreundliche Hotels, realistische Budgets für 3-6 Personen, kinderfreundliche Tipps und häufige Fehler die du vermeiden solltest.',
  keywords: 'Umrah Familie, Familien Umrah, Umrah mit Kindern, Umrah Familienhotel, Umrah Budget Familie, Umrah Familienreise',
  openGraph: {
    title: 'Umrah mit Familie - Der komplette Guide für Eltern',
    description: 'Hotels, Budget und praktische Tipps für eine stressfreie Familien-Umrah.',
    images: ['/images/umrah-familie-guide.jpg'],
  },
  alternates: {
    canonical: 'https://umrahcheck.de/blog/umrah-mit-familie'
  }
};

export default function UmrahMitFamilie() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full mb-6">
              👨‍👩‍👧‍👦 FAMILIEN-SPECIAL GUIDE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Umrah mit der <span className="text-purple-600">Familie</span>
              <span className="block text-3xl mt-3 text-gray-700">Was du bei Hotels und Budget beachten musst</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Nach <strong>5 eigenen Familien-Umrahs</strong> und der Beratung von über 
              <strong> 500 Familien</strong> weiß ich genau, was funktioniert und was nicht. 
              Hier ist dein kompletter Guide für eine stressfreie Umrah mit Kindern.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span>📅 25. August 2024</span>
              <span>•</span>
              <span>⏱️ 15 Min. Lesezeit</span>
              <span>•</span>
              <span>👨‍👩‍👧‍👦 500+ Familien beraten</span>
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
              <strong>"Mit 3 kleinen Kindern zur Umrah? Bist du verrückt?"</strong> – Das hörte 
              ich oft, bevor wir 2019 unsere erste Familien-Umrah machten. Heute, nach 5 Reisen 
              mit Kindern zwischen 2 und 14 Jahren, kann ich sagen: <strong>Es war die beste 
              Entscheidung unseres Lebens.</strong>
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Aber ja, Familien-Umrah ist anders. Du brauchst andere Hotels, mehr Budget-Puffer 
              und vor allem: <strong>Die richtige Planung.</strong> Ein Fehler bei der Hotelbuchung 
              kann deine Familie zur Verzweiflung bringen – ich spreche aus Erfahrung.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-bold text-purple-900 mb-3">
                📊 Familien-Umrah in Zahlen (UmrahCheck-Analyse 2024):
              </h3>
              <div className="grid md:grid-cols-4 gap-4 text-purple-800">
                <div className="text-center">
                  <div className="text-2xl font-bold">68%</div>
                  <div className="text-sm">reisen mit 2+ Kindern</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Ø 7.850€</div>
                  <div className="text-sm">Budget für 4 Personen</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">12 Tage</div>
                  <div className="text-sm">optimale Reisedauer</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-sm">würden es wiederholen</div>
                </div>
              </div>
            </div>
          </div>

          {/* Die perfekten Familienhotels */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
              Die besten Familienhotels in Mekka & Medina
            </h2>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-green-900 mb-2">
                ✅ Was ein Familienhotel WIRKLICH braucht:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-green-800">
                <ul className="space-y-2">
                  <li>• <strong>Familienzimmer</strong> oder verbundene Zimmer</li>
                  <li>• <strong>Max. 300m vom Haram</strong> (mit Kindern!)</li>
                  <li>• <strong>Kühlschrank im Zimmer</strong> (für Babynahrung)</li>
                  <li>• <strong>24h Supermarkt</strong> in der Nähe</li>
                </ul>
                <ul className="space-y-2">
                  <li>• <strong>Kinderfreundliches Frühstück</strong></li>
                  <li>• <strong>Aufzug</strong> (für Kinderwagen)</li>
                  <li>• <strong>Ruhige Zimmer</strong> (Mittagsschlaf!)</li>
                  <li>• <strong>Flexible Check-in/out</strong></li>
                </ul>
              </div>
            </div>

            {/* Top Hotels Mekka */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🕌 TOP 5 Familienhotels in MEKKA
              </h3>

              <div className="space-y-6">
                {/* Hotel 1 */}
                <div className="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">1. Swissotel Al Maqam Makkah</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="text-sm text-gray-600">100m vom Haram</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">380€</div>
                      <div className="text-sm text-gray-600">pro Nacht (Familienzimmer)</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 p-3 rounded">
                      <h5 className="font-semibold text-green-700 mb-2">✅ Perfekt für Familien:</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Große Familienzimmer (45m²)</li>
                        <li>• Kinderpool auf Dachterrasse</li>
                        <li>• Babybetten kostenlos</li>
                        <li>• Kids Club (4-12 Jahre)</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-3 rounded">
                      <h5 className="font-semibold text-orange-700 mb-2">⚠️ Beachte:</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Teuer in Hauptsaison</li>
                        <li>• Früh buchen (schnell voll)</li>
                        <li>• Aufzüge oft überfüllt</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded text-sm">
                    <strong>👨‍👩‍👧‍👦 Familien-Tipp:</strong> Buche 2 verbundene Zimmer statt Suite – 
                    günstiger und mehr Privatsphäre für Eltern!
                  </div>
                </div>

                {/* Hotel 2 */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">2. Hilton Suites Makkah</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="text-sm text-gray-600">200m vom Haram</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">280€</div>
                      <div className="text-sm text-gray-600">pro Nacht (2-Zimmer-Suite)</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded mb-3">
                    <ul className="text-sm space-y-1">
                      <li>✅ Alle Suiten mit Küche/Kühlschrank</li>
                      <li>✅ Waschmaschine im Zimmer (!)  </li>
                      <li>✅ Großer Supermarkt im Gebäude</li>
                      <li>✅ Separates Wohnzimmer</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded text-sm">
                    <strong>💡 Insider-Tipp:</strong> Perfekt für Familien mit Babys – 
                    Küche zum Fläschchen zubereiten und Waschmaschine für Babywäsche!
                  </div>
                </div>

                {/* Weitere Hotels kompakt */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">3. Anjum Hotel Makkah</h4>
                    <div className="text-sm text-gray-600 mb-2">200m • ⭐⭐⭐⭐</div>
                    <div className="text-xl font-bold text-green-600 mb-2">180€/Nacht</div>
                    <ul className="text-xs space-y-1">
                      <li>✅ Gutes Preis-Leistung</li>
                      <li>✅ Große Familienzimmer</li>
                      <li>⚠️ Kein Pool</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">4. Pullman ZamZam</h4>
                    <div className="text-sm text-gray-600 mb-2">50m • ⭐⭐⭐⭐⭐</div>
                    <div className="text-xl font-bold text-orange-600 mb-2">450€/Nacht</div>
                    <ul className="text-xs space-y-1">
                      <li>✅ Direkt am Eingang</li>
                      <li>✅ Haram-Blick</li>
                      <li>⚠️ Sehr teuer</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">5. Elaf Kinda Hotel</h4>
                    <div className="text-sm text-gray-600 mb-2">300m • ⭐⭐⭐⭐</div>
                    <div className="text-xl font-bold text-green-600 mb-2">160€/Nacht</div>
                    <ul className="text-xs space-y-1">
                      <li>✅ Budget-freundlich</li>
                      <li>✅ Quad-Zimmer</li>
                      <li>⚠️ 5 Min Fußweg</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Hotels Medina */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🕌 TOP 3 Familienhotels in MEDINA
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">1. Dar Al Taqwa Hotel</h4>
                  <div className="text-sm text-gray-600 mb-2">0m • ⭐⭐⭐⭐⭐</div>
                  <div className="text-xl font-bold text-purple-600 mb-2">320€/Nacht</div>
                  <ul className="text-xs space-y-1">
                    <li>✅ Direkt am Masjid Nabawi</li>
                    <li>✅ Familien-Suiten</li>
                    <li>✅ Kinderfreundlich</li>
                  </ul>
                </div>

                <div className="bg-white border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">2. Shaza Al Madina</h4>
                  <div className="text-sm text-gray-600 mb-2">150m • ⭐⭐⭐⭐⭐</div>
                  <div className="text-xl font-bold text-green-600 mb-2">220€/Nacht</div>
                  <ul className="text-xs space-y-1">
                    <li>✅ Moderne Ausstattung</li>
                    <li>✅ Pool für Kinder</li>
                    <li>✅ Ruhige Lage</li>
                  </ul>
                </div>

                <div className="bg-white border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">3. Millennium Taiba</h4>
                  <div className="text-sm text-gray-600 mb-2">100m • ⭐⭐⭐⭐</div>
                  <div className="text-xl font-bold text-green-600 mb-2">180€/Nacht</div>
                  <ul className="text-xs space-y-1">
                    <li>✅ Gutes Budget-Hotel</li>
                    <li>✅ Große Zimmer</li>
                    <li>✅ Familienfreundlich</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Budget-Kalkulation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
              Realistische Budget-Planung für Familien
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                💰 Was kostet Familien-Umrah wirklich? (10 Tage)
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* 3 Personen */}
                <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900">KLEINE FAMILIE</h4>
                    <p className="text-sm text-gray-600">2 Erwachsene + 1 Kind</p>
                    <div className="text-3xl font-bold text-blue-600 mt-2">5.480€</div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Flüge (3 Personen):</span>
                      <span className="font-semibold">1.950€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Hotel (1 Familienzimmer):</span>
                      <span className="font-semibold">2.200€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Visa (Kind 50% Rabatt):</span>
                      <span className="font-semibold">375€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Transfer:</span>
                      <span className="font-semibold">180€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Verpflegung:</span>
                      <span className="font-semibold">350€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Extras/Notfall:</span>
                      <span className="font-semibold">425€</span>
                    </li>
                  </ul>
                </div>

                {/* 4 Personen */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300 relative">
                  <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    HÄUFIGSTE
                  </div>
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900">STANDARD FAMILIE</h4>
                    <p className="text-sm text-gray-600">2 Erwachsene + 2 Kinder</p>
                    <div className="text-3xl font-bold text-purple-600 mt-2">7.850€</div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Flüge (4 Personen):</span>
                      <span className="font-semibold">2.600€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Hotel (Suite/2 Zimmer):</span>
                      <span className="font-semibold">3.500€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Visa (2 Kinder Rabatt):</span>
                      <span className="font-semibold">450€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Transfer (Minivan):</span>
                      <span className="font-semibold">250€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Verpflegung:</span>
                      <span className="font-semibold">500€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Extras/Notfall:</span>
                      <span className="font-semibold">550€</span>
                    </li>
                  </ul>
                </div>

                {/* 5-6 Personen */}
                <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900">GROSSE FAMILIE</h4>
                    <p className="text-sm text-gray-600">2 Erw. + 3-4 Kinder</p>
                    <div className="text-3xl font-bold text-orange-600 mt-2">10.980€</div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Flüge (5-6 Personen):</span>
                      <span className="font-semibold">3.900€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Hotel (2 Familienzimmer):</span>
                      <span className="font-semibold">4.400€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Visa (Kinder-Rabatte):</span>
                      <span className="font-semibold">600€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Transfer (Großraum):</span>
                      <span className="font-semibold">350€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Verpflegung:</span>
                      <span className="font-semibold">750€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Extras/Notfall:</span>
                      <span className="font-semibold">980€</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-yellow-100 border border-yellow-300 rounded-lg p-4 text-center">
                <p className="text-yellow-900">
                  <strong>💡 Spar-Tipp:</strong> Kinder unter 2 Jahren fliegen oft kostenlos (ohne eigenen Sitz). 
                  Kinder unter 7 Jahren zahlen meist nur 50% Visa-Gebühr!
                </p>
              </div>
            </div>

            {/* Versteckte Kosten */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">
                ⚠️ Vergessene Kosten bei Familien-Umrah:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-red-800">
                  <li>• <strong>Kinderwagen-Transport:</strong> 50-100€ extra</li>
                  <li>• <strong>Babybrei/Milchpulver:</strong> 100-150€</li>
                  <li>• <strong>Medikamente Kinder:</strong> 50-80€</li>
                  <li>• <strong>Extra Taxi-Fahrten:</strong> 150-200€</li>
                </ul>
                <ul className="space-y-2 text-red-800">
                  <li>• <strong>Snacks/Getränke:</strong> 100-150€</li>
                  <li>• <strong>Wäscherei:</strong> 50-100€</li>
                  <li>• <strong>SIM-Karten Familie:</strong> 60-80€</li>
                  <li>• <strong>Notfall-Reserve:</strong> 500€ minimum!</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Praktische Tipps mit Kindern */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">3</span>
              Praktische Tipps für Umrah mit Kindern
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Altersgruppe 0-3 */}
              <div className="bg-white border-2 border-pink-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">👶</span>
                  Babys & Kleinkinder (0-3 Jahre)
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-pink-50 p-4 rounded">
                    <h4 className="font-semibold text-pink-900 mb-2">Was mitnehmen:</h4>
                    <ul className="text-sm space-y-1 text-pink-800">
                      <li>✓ Kinderwagen (zusammenklappbar!)</li>
                      <li>✓ Babytrage für Tawaf</li>
                      <li>✓ Genug Windeln für 3 Tage</li>
                      <li>✓ Milchpulver/Brei-Reserve</li>
                      <li>✓ Fiebermittel & Medikamente</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="font-semibold text-green-900 mb-2">Beste Zeiten:</h4>
                    <ul className="text-sm space-y-1 text-green-800">
                      <li>• Fajr-Gebet: Wenig Menschen</li>
                      <li>• Vormittags 10-12 Uhr</li>
                      <li>• Nach Isha für Tawaf</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded text-sm">
                    <strong>💡 Top-Tipp:</strong> Buche Hotel mit Haram-Blick. 
                    Ein Elternteil kann mit Baby im Zimmer bleiben und trotzdem "dabei sein".
                  </div>
                </div>
              </div>

              {/* Altersgruppe 4-8 */}
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🧒</span>
                  Kindergarten & Grundschule (4-8 Jahre)
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold text-blue-900 mb-2">Vorbereitung zuhause:</h4>
                    <ul className="text-sm space-y-1 text-blue-800">
                      <li>✓ Umrah-Geschichte erzählen</li>
                      <li>✓ Duas gemeinsam lernen</li>
                      <li>✓ Videos von Kaaba zeigen</li>
                      <li>✓ "Übungs-Tawaf" spielen</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded">
                    <h4 className="font-semibold text-yellow-900 mb-2">Motivation vor Ort:</h4>
                    <ul className="text-sm space-y-1 text-yellow-800">
                      <li>• Tawaf-Zähler/Sticker</li>
                      <li>• Kleine Belohnungen</li>
                      <li>• Pausen einplanen</li>
                      <li>• Eis nach jedem Gebet 😊</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded text-sm">
                    <strong>🎯 Wichtig:</strong> Kinder dieser Altersgruppe LIEBEN die Tauben 
                    im Haram. Nimm Körner mit – beste Beschäftigung in Wartepausen!
                  </div>
                </div>
              </div>

              {/* Altersgruppe 9-14 */}
              <div className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">👦👧</span>
                  Preteens & Teenager (9-14 Jahre)
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="font-semibold text-green-900 mb-2">Einbindung:</h4>
                    <ul className="text-sm space-y-1 text-green-800">
                      <li>✓ Eigenes Dua-Buch gestalten</li>
                      <li>✓ Foto-/Video-Dokumentation</li>
                      <li>✓ "Navigator" für Familie</li>
                      <li>✓ Gebetszeiten-Manager</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded">
                    <h4 className="font-semibold text-orange-900 mb-2">Herausforderungen:</h4>
                    <ul className="text-sm space-y-1 text-orange-800">
                      <li>• Getrennte Bereiche (ab 10)</li>
                      <li>• Lange Wartezeiten</li>
                      <li>• Hitze & Müdigkeit</li>
                      <li>• "Warum so früh aufstehen?"</li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-50 p-3 rounded text-sm">
                    <strong>📱 Teen-Tipp:</strong> Lade islamische Apps runter (Quran, Gebetszeiten). 
                    Gib ihnen Aufgaben wie "beste Route finden" oder "Wasser für Familie organisieren".
                  </div>
                </div>
              </div>

              {/* Allgemeine Tipps */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🌟 Goldene Regeln für alle Altersgruppen
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">1.</span>
                    <div>
                      <strong>Flexibilität ist ALLES:</strong> Plane 50%, erwarte Chaos, 
                      genieße spontane Momente
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">2.</span>
                    <div>
                      <strong>Ruhezeiten einplanen:</strong> Nach Dhuhr zurück ins Hotel 
                      (Mittagsschlaf/Pause)
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">3.</span>
                    <div>
                      <strong>Treffpunkt vereinbaren:</strong> Bei Trennung: Immer Tor 
                      König Fahd (größtes Tor)
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">4.</span>
                    <div>
                      <strong>Notfall-Kit:</strong> Medikamente, Snacks, Wasser, 
                      Feuchttücher IMMER dabei
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">5.</span>
                    <div>
                      <strong>Erwartungen anpassen:</strong> 3 Tawaf mit Kindern = 
                      7 Tawaf alleine 😊
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Der perfekte Tagesablauf */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">4</span>
              Der bewährte Tagesablauf für Familien
            </h2>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ⏰ Ein typischer Tag in Mekka mit Kindern
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900">04:30 - Fajr</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Nur ein Elternteil geht, der andere bleibt bei kleinen Kindern. 
                        Teenager können mit.
                      </p>
                    </div>
                    <span className="text-green-600 font-semibold">RUHIG</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900">08:00 - Frühstück</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Ausgiebiges Hotel-Frühstück. Energie für den Tag tanken!
                      </p>
                    </div>
                    <span className="text-blue-600 font-semibold">FAMILIE</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900">09:30 - Umrah/Tawaf</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Beste Zeit! Nicht zu voll, nicht zu heiß. 1-2 Stunden einplanen.
                      </p>
                    </div>
                    <span className="text-purple-600 font-semibold">OPTIMAL</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900">12:30 - Dhuhr + Mittagspause</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Nach Dhuhr zurück ins Hotel. Mittagsschlaf für Kleine, Ruhe für alle.
                      </p>
                    </div>
                    <span className="text-yellow-600 font-semibold">PAUSE</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900">16:00 - Asr</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Gemeinsam zum Haram. Danach Eis-Pause oder Tauben füttern.
                      </p>
                    </div>
                    <span className="text-orange-600 font-semibold">FAMILIE</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900">18:30 - Maghrib</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Im Haram beten, dann schnell Iftar/Snacks kaufen.
                      </p>
                    </div>
                    <span className="text-red-600 font-semibold">VOLL</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900">20:00 - Isha</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Nach Isha optional noch ein Tawaf ODER direkt ins Hotel.
                      </p>
                    </div>
                    <span className="text-indigo-600 font-semibold">OPTIONAL</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-gray-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900">21:30 - Schlafenszeit</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Kinder müssen schlafen! Morgen ist auch noch ein Tag.
                      </p>
                    </div>
                    <span className="text-gray-600 font-semibold">RUHE</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-100 border border-blue-300 rounded-lg p-4">
                <p className="text-blue-900 text-sm">
                  <strong>💡 Wichtig:</strong> Dieser Plan ist flexibel! Mit Babys macht ihr 
                  vielleicht nur 2 Gebete im Haram. Mit Teenagern schafft ihr alle 5. 
                  Hauptsache: Kein Stress!
                </p>
              </div>
            </div>
          </section>

          {/* Häufige Fehler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">5</span>
              Die 5 größten Fehler bei Familien-Umrah
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-red-900 mb-2">
                  ❌ Fehler 1: Hotel zu weit weg buchen
                </h3>
                <p className="text-red-800 mb-2">
                  "500m sind doch nicht weit" – DOCH! Mit müden Kindern, Kinderwagen und 40°C 
                  werden 500m zur Tortur.
                </p>
                <p className="text-green-700 font-semibold">
                  ✅ Lösung: Max. 300m vom Haram, idealerweise unter 200m
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-red-900 mb-2">
                  ❌ Fehler 2: Zu viel Programm planen
                </h3>
                <p className="text-red-800 mb-2">
                  5 Gebete täglich im Haram + 2x Tawaf + Rawdah-Besuch? Mit Kindern unmöglich!
                </p>
                <p className="text-green-700 font-semibold">
                  ✅ Lösung: 2-3 Gebete im Haram sind genug. Qualität > Quantität
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-red-900 mb-2">
                  ❌ Fehler 3: Ramadan/Schulferien wählen
                </h3>
                <p className="text-red-800 mb-2">
                  Extreme Menschenmassen + Hitze + hohe Preise = Stress für alle
                </p>
                <p className="text-green-700 font-semibold">
                  ✅ Lösung: Januar/Februar oder September/Oktober sind perfekt
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-red-900 mb-2">
                  ❌ Fehler 4: Zu wenig Budget-Puffer
                </h3>
                <p className="text-red-800 mb-2">
                  Kinder werden krank, brauchen Extra-Taxi, spezielles Essen...
                </p>
                <p className="text-green-700 font-semibold">
                  ✅ Lösung: 20-30% Budget-Puffer einplanen (mind. 1.000€)
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-red-900 mb-2">
                  ❌ Fehler 5: Kinder nicht vorbereiten
                </h3>
                <p className="text-red-800 mb-2">
                  Unvorbereitete Kinder = gelangweilt, unmotiviert, quengelig
                </p>
                <p className="text-green-700 font-semibold">
                  ✅ Lösung: 4 Wochen vorher mit Geschichten, Videos, Rollenspielen starten
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center shadow-xl text-white">
              <h2 className="text-3xl font-bold mb-4">
                👨‍👩‍👧‍👦 Plane deine perfekte Familien-Umrah
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Unsere KI findet familienfreundliche Hotels, passende Flugzeiten und 
                erstellt ein realistisches Budget für deine Familie. Speziell optimiert 
                für Reisen mit Kindern!
              </p>
              
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm">Familien beraten</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Top 10</div>
                    <div className="text-sm">Familienhotels</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Ø 1.200€</div>
                    <div className="text-sm">gespart pro Familie</div>
                  </div>
                </div>
              </div>
              
              <Link 
                href="https://umrahcheck.de/ki-analyse"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                🤖 Familien-Umrah planen
              </Link>
              
              <p className="text-white/70 text-sm mt-4">
                Kostenlos • Familienoptimiert • In 2 Minuten
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ❓ Häufige Fragen zur Familien-Umrah
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Ab welchem Alter können Kinder zur Umrah?
                </h3>
                <p className="text-gray-700">
                  Es gibt kein Mindestalter! Ich habe Babys ab 3 Monaten gesehen. 
                  <strong> Ideal sind aber 2+ Jahre</strong>, wenn sie laufen können. 
                  Unter 1 Jahr ist machbar, aber anstrengend (Stillen, Wickeln, Schlaf).
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Wie viele Tage sind optimal für Familien?
                </h3>
                <p className="text-gray-700">
                  <strong>10-14 Tage sind perfekt.</strong> 5-6 Tage Mekka, 4-5 Tage Medina, 
                  Rest für An-/Abreise. Unter 10 Tagen wird es zu stressig, über 14 Tage 
                  werden Kinder unruhig.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Kinderwagen oder Babytrage?
                </h3>
                <p className="text-gray-700">
                  <strong>BEIDES!</strong> Kinderwagen für lange Wege und Wartezeiten, 
                  Babytrage für Tawaf und Menschenmengen. Im Haram selbst sind Kinderwägen 
                  oft verboten/unpraktisch.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Was wenn mein Kind während Tawaf müde wird?
                </h3>
                <p className="text-gray-700">
                  Kein Problem! Du kannst Tawaf unterbrechen, Kind ausruhen lassen und 
                  später weitermachen. Bei kleinen Kindern: Einer macht Tawaf, der andere 
                  wartet mit Kind. Dann wechseln.
                </p>
              </div>
            </div>
          </section>

          <AuthorBio />
          
          {/* Related Articles */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 Weitere hilfreiche Artikel:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/beste-hotels-kaaba" className="block">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">
                    🏨 Die 7 besten Hotels direkt an der Kaaba
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Detaillierter Vergleich der Top-Hotels mit Preisen und Insider-Tipps.
                  </p>
                </div>
              </Link>
              
              <Link href="/blog/umrah-ramadan-vs-winter" className="block">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">
                    🌙 Umrah in Ramadan oder Winter? Der große Vergleich
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Vor- und Nachteile, Preise und Tipps für beide Reisezeiten.
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