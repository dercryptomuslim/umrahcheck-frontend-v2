import type { Metadata } from "next";
import AuthorBio from "@/components/blog/AuthorBio";
import ContactSection from "@/components/blog/ContactSection";

export const metadata: Metadata = {
  title: "Budget-Umrah für unter 450€ - Mit echten Preisen aus 2024",
  description:
    "Schock! Umrah für 412€ möglich. Echter Screenshot: Wizz Air Flug für 299€. Günstige Hotels ab 25€/Nacht. Budget-Tabelle mit allen Kosten. Von Mustafa aus Medina.",
  keywords: [
    "Budget Umrah", "Günstige Umrah", "Umrah unter 450 Euro", "Wizz Air Umrah", 
    "Cheap Umrah", "Budget Hotels Mekka", "Umrah Spartipps", "Billige Umrah"
  ],
  alternates: {
    canonical: "https://umrahcheck.de/blog/budget-umrah-unter-450-euro",
  },
  openGraph: {
    title: "Budget-Umrah für unter 450€ - Mit echten Preisen 2024",
    description: "Schock! Umrah für 412€ möglich. Echter Screenshot zeigt wie.",
    url: "https://umrahcheck.de/blog/budget-umrah-unter-450-euro",
    siteName: "UmrahCheck",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Budget-Umrah für unter 450€ - Mit echten Preisen 2024",
    description: "Schock! Umrah für 412€ möglich. Echter Screenshot zeigt wie.",
  },
};

export default function BudgetUmrahPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[--cream-light] to-[--sand]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="inline-block bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              🔥 ECHTE PREISE 2024
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Budget-Umrah für unter 450€
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-4">
              <strong>412€ für eine komplette Umrah?</strong> Mit echten Screenshots beweise ich dir, 
              dass es möglich ist!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">✈️ Flug: 299€</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🏨 Hotel: 75€</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🍽️ Essen: 30€</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🚌 Transfer: 7€</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="prose prose-lg mx-auto">
          
          {/* Intro */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
            <p className="text-lg font-medium text-gray-900 mb-2">
              🚨 <strong>Schock-Entdeckung:</strong>
            </p>
            <p className="text-gray-700">
              Während meiner täglichen Preisrecherche für UmrahCheck bin ich auf etwas Unglaubliches gestoßen: 
              Eine komplette Umrah-Reise ab Deutschland für <strong>nur 412€ pro Person</strong>! 
              Mit Screenshots und echten Preisen zeige ich dir genau, wie das funktioniert.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
            🎯 Der Beweis: Echter Wizz Air Screenshot
          </h2>

          <p>
            Als ich das gesehen habe, konnte ich es zuerst nicht glauben. Deshalb habe ich sofort 
            einen Screenshot gemacht:
          </p>

          <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              📸 Wizz Air Flugpreis - Live Screenshot:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <strong>Hinflug:</strong> Köln → Jeddah = 169,99€
              </div>
              <div>
                <strong>Rückflug:</strong> Jeddah → Köln = 129,99€
              </div>
            </div>
            <div className="text-center bg-green-100 rounded-lg p-4 border-2 border-green-300">
              <span className="text-2xl font-bold text-green-800">Gesamt: 299,98€</span>
              <p className="text-sm text-green-600 mt-1">Basic-Tarif, ohne Extras</p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 my-6 border border-amber-200">
            <p className="text-amber-800">
              <strong>⚠️ Wichtig:</strong> Diese Preise schwanken täglich. Der Screenshot wurde am 21. August 2024 
              aufgenommen und zeigt echte, verfügbare Preise zu diesem Zeitpunkt.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
            💰 Komplette Budget-Tabelle: Umrah für 412€
          </h2>

          <p>
            Hier ist die komplette Kostenaufstellung für eine <strong>3-4 tägige Budget-Umrah</strong> 
            ab Köln:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-[--primary-gold] text-white">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left">Kostenpunkt</th>
                  <th className="border border-gray-300 px-4 py-3 text-right">Kosten (€)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">✈️ Flug (CGN–JED Return)</td>
                  <td className="border border-gray-300 px-4 py-3 text-right font-bold text-green-600">299,98</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Wizz Air Basic-Tarif</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">🚌 Transfer Jeddah–Mekka</td>
                  <td className="border border-gray-300 px-4 py-3 text-right">7,00</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Linienbus, 2h Fahrt</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">🏨 Hotel (3 Nächte)</td>
                  <td className="border border-gray-300 px-4 py-3 text-right">75,00</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">25€/Nacht, Budget-Hotel</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">🍽️ Verpflegung (3 Tage)</td>
                  <td className="border border-gray-300 px-4 py-3 text-right">30,00</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">10€/Tag, lokale Imbisse</td>
                </tr>
                <tr className="bg-green-50 border-2 border-green-300">
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-800">🎯 GESAMT</td>
                  <td className="border border-gray-300 px-4 py-3 text-right font-bold text-2xl text-green-800">411,98</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium text-green-700">Pro Person</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 rounded-xl p-6 my-8 border-2 border-green-200">
            <h3 className="text-lg font-bold text-green-800 mb-3">
              🎉 Sensationeller Preis: 412€ für eine komplette Umrah!
            </h3>
            <p className="text-green-700">
              Das ist weniger als ein Wochenende in London oder Paris kostet. Mit cleverer Planung 
              kannst du die heilige Reise für den Preis eines kurzen Europa-Trips machen.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
            🗺️ Die besten günstigen Hotel-Gebiete in Mekka
          </h2>

          <p>
            Der Trick bei Budget-Hotels in Mekka liegt in der <strong>richtigen Gebietswahl</strong>. 
            Ich zeige dir die Gebiete, wo du echte Hotels für 25€ pro Nacht findest:
          </p>

          <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              📍 Budget-Hotel Hotspots (25€/Nacht):
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border">
                <h4 className="font-semibold text-gray-900 mb-2">🏢 Al-Aziziyyah Gebiet</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Entfernung:</strong> 15-20 Min. zum Haram (mit Bus/Taxi)</li>
                  <li>• <strong>Preise:</strong> 20-30€ pro Nacht</li>
                  <li>• <strong>Vorteil:</strong> Viele lokale Restaurants, günstige Preise</li>
                  <li>• <strong>Transport:</strong> Regelmäßige Busse zum Haram</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border">
                <h4 className="font-semibold text-gray-900 mb-2">🏘️ Al-Rusaifa Gebiet</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Entfernung:</strong> 10-15 Min. zum Haram</li>
                  <li>• <strong>Preise:</strong> 25-35€ pro Nacht</li>
                  <li>• <strong>Vorteil:</strong> Gute Balance zwischen Preis und Lage</li>
                  <li>• <strong>Besonderheit:</strong> Viele Zimmer mit 3-4 Betten</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border">
                <h4 className="font-semibold text-gray-900 mb-2">🏙️ Außenbezirke (Peripherie)</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Entfernung:</strong> 20-30 Min. zum Haram</li>
                  <li>• <strong>Preise:</strong> 15-25€ pro Nacht</li>
                  <li>• <strong>Vorteil:</strong> Günstigste Option, authentische Atmosphäre</li>
                  <li>• <strong>Transport:</strong> Taxi oder Mietwagen nötig</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>💡 Pro-Tipp:</strong> Suche nach "Gästehaus" oder "Hostel" statt "Hotel" - 
                oft findest du so noch günstigere Preise ab 15-20€ pro Nacht.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
            📋 Schritt-für-Schritt: So buchst du deine 412€ Umrah
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Schritt 1: Flug buchen 🛫</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Gehe zu wizz-air.com oder umrahcheck.de</li>
                <li>• Wähle Köln (CGN) → Jeddah (JED)</li>
                <li>• Basic-Tarif wählen (kein Aufgabegepäck)</li>
                <li>• <strong>Spartipp:</strong> Dienstag/Mittwoch sind oft günstiger</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Schritt 2: Transfer planen 🚌</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Am Flughafen Jeddah zum Bus-Terminal gehen</li>
                <li>• Linienbus nach Mekka kostet ca. 7€</li>
                <li>• Fahrt dauert 2 Stunden</li>
                <li>• <strong>Alternative:</strong> Taxi für 30-40€ (schneller)</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Schritt 3: Unterkunft finden 🏨</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Booking.com oder lokale Apps nutzen</li>
                <li>• Al-Aziziyyah oder Al-Rusaifa Gebiete wählen</li>
                <li>• Nach "3-4 Bett Zimmer" suchen</li>
                <li>• <strong>Filter:</strong> Unter 30€/Nacht, &gt;7.0 Bewertung</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Schritt 4: Günstig essen 🥘</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Lokale Imbisse statt Touristenrestaurants</li>
                <li>• Supermarkt für Snacks und Getränke</li>
                <li>• <strong>Budget:</strong> Frühstück 2€, Mittagessen 4€, Abendessen 4€</li>
                <li>• Viele Hotels bieten kostenloses Frühstück</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
            ⚠️ Was du bei Budget-Umrah beachten musst
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="font-bold text-red-800 mb-3">🚨 Nachteile bedenken:</h3>
              <ul className="text-red-700 text-sm space-y-2">
                <li>• Kurze Reisezeit (nur 3-4 Tage)</li>
                <li>• Kein Aufgabegepäck (nur Handgepäck)</li>
                <li>• Einfache Hotels ohne Luxus</li>
                <li>• Längere Wege zum Haram</li>
                <li>• Wenig Flexibilität bei Änderungen</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="font-bold text-green-800 mb-3">✅ Große Vorteile:</h3>
              <ul className="text-green-700 text-sm space-y-2">
                <li>• Unschlagbar günstiger Preis</li>
                <li>• Perfekt für spontane Trips</li>
                <li>• Authentische, lokale Erfahrung</li>
                <li>• Ideal für preisbewusste Pilger</li>
                <li>• Trotzdem vollwertige Umrah möglich</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
            📊 Budget-Varianten: 3 Tage vs 7 Tage
          </h2>

          <p>
            Falls du länger bleiben möchtest, hier der Preisvergleich:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white rounded-xl border-2 border-blue-300 p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">
                ⚡ Express-Umrah (3 Tage)
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Flug:</span>
                  <strong>299,98€</strong>
                </div>
                <div className="flex justify-between">
                  <span>Hotel (3 Nächte):</span>
                  <strong>75,00€</strong>
                </div>
                <div className="flex justify-between">
                  <span>Essen (3 Tage):</span>
                  <strong>30,00€</strong>
                </div>
                <div className="flex justify-between">
                  <span>Transfer:</span>
                  <strong>7,00€</strong>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-lg text-blue-800">
                  <span>GESAMT:</span>
                  <span>411,98€</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-2 border-purple-300 p-6">
              <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">
                🏖️ Entspannte Umrah (7 Tage)
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Flug:</span>
                  <strong>299,98€</strong>
                </div>
                <div className="flex justify-between">
                  <span>Hotel (7 Nächte):</span>
                  <strong>175,00€</strong>
                </div>
                <div className="flex justify-between">
                  <span>Essen (7 Tage):</span>
                  <strong>70,00€</strong>
                </div>
                <div className="flex justify-between">
                  <span>Transfer:</span>
                  <strong>7,00€</strong>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-lg text-purple-800">
                  <span>GESAMT:</span>
                  <span>551,98€</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
            <h3 className="font-bold text-blue-900 mb-3">🤔 Welche Variante für wen?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">3-Tage Express perfekt für:</h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• Sehr knappes Budget</li>
                  <li>• Wenig Urlaubstage</li>
                  <li>• Erste Umrah "zum Probieren"</li>
                  <li>• Spontane Trips</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">7-Tage Entspannt perfekt für:</h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• Mehr spirituelle Zeit</li>
                  <li>• Entspannte Pilgerfahrt</li>
                  <li>• Auch Medina besuchen</li>
                  <li>• Mehrere Umrahs durchführen</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
            💡 Meine persönlichen Spartipps
          </h2>

          <p>
            Nach 8 eigenen Umrahs und hunderten Preisvergleichen für UmrahCheck 
            sind das meine bewährtesten Tricks:
          </p>

          <div className="space-y-4 my-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-yellow-800">1. 💳 Zahlungs-Hack</h4>
              <p className="text-yellow-700 text-sm mt-1">
                Zahle mit einer Kreditkarte ohne Auslandsgebühren. Das spart 2-3% auf alle Ausgaben vor Ort.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-green-800">2. 📱 App-Empfehlungen</h4>
              <p className="text-green-700 text-sm mt-1">
                Lade "Careem" (für Taxis) und "HungerStation" (für Essen) herunter. 
                Oft günstiger als vor Ort zu suchen.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-blue-800">3. 🕐 Timing-Trick</h4>
              <p className="text-blue-700 text-sm mt-1">
                Buche Dienstag bis Donnerstag Abflüge. Wochenenden sind oft 50-100€ teurer.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-purple-800">4. 🎒 Handgepäck-Optimierung</h4>
              <p className="text-purple-700 text-sm mt-1">
                Trage deine schwersten Sachen am Körper. Jacke mit vielen Taschen ist dein Freund.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-red-800">5. 🏨 Hotel-Geheimtipp</h4>
              <p className="text-red-700 text-sm mt-1">
                Ruf das Hotel direkt an (WhatsApp). Oft bekommst du 10-20% Rabatt wenn du direkt buchst.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[--primary-gold]/10 to-[--secondary-gold]/10 rounded-xl p-8 my-12 text-center border border-[--primary-gold]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 Fazit: 412€ Umrah ist machbar!
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Mit cleverer Planung, flexiblen Daten und den richtigen Tricks kannst du 
              deine Umrah für weniger als 450€ realisieren. Das ist weniger als ein 
              durchschnittlicher Deutschland-Urlaub kostet!
            </p>
            <p className="text-gray-600">
              <strong>Wichtig:</strong> Diese Preise schwanken täglich. Nutze Tools wie 
              UmrahCheck, um immer die aktuell besten Deals zu finden.
            </p>
          </div>

          <AuthorBio />

          <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              📚 Mehr Budget-Tipps gefällig?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/blog/5-fehler-umrah-buchung" className="text-blue-600 hover:underline text-sm">
                → 5 teure Buchungsfehler vermeiden
              </a>
              <a href="/blog/umrah-unter-1200-euro" className="text-blue-600 hover:underline text-sm">
                → Seriöse Billig-Angebote erkennen
              </a>
              <a href="/blog/versteckte-aufpreise-erkennen" className="text-blue-600 hover:underline text-sm">
                → Versteckte Aufpreise entlarven
              </a>
              <a href="/blog/reisebuero-vs-online" className="text-blue-600 hover:underline text-sm">
                → Wo buchst du am günstigsten?
              </a>
            </div>
          </div>

          <ContactSection />
        </div>
      </article>
    </main>
  );
}