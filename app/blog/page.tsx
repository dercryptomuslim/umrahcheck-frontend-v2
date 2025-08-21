import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UmrahCheck Blog - Spartipps und Ratgeber für deine Umrah-Reise",
  description:
    "Entdecke echte Spartipps, ehrliche Preisanalysen und praktische Ratgeber für deine Umrah-Reise. Von praktizierenden Muslimen für Muslime – transparent und ohne versteckte Verkaufsabsichten.",
  alternates: {
    canonical: "https://umrahcheck.de/blog",
  },
  openGraph: {
    title: "UmrahCheck Blog",
    description:
      "Spartipps, Preisanalysen und Praxis-Guides rund um die Umrah – ehrlich & transparent.",
    url: "https://umrahcheck.de/blog",
    siteName: "UmrahCheck",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UmrahCheck Blog",
    description:
      "Spartipps, Preisanalysen und Praxis-Guides rund um die Umrah – ehrlich & transparent.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[--cream-light] to-[--sand]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            UmrahCheck Blog
          </h1>
          <p className="mt-3 text-white/90">
            Spartipps, Preisanalysen &amp; ehrliche Ratgeber für deine Umrah.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Hauptartikel - Neuer Artikel */}
          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 lg:col-span-2">
            <Link href="/blog/umrah-preise-2024-sparen">
              <div className="md:flex">
                <div className="md:w-1/3 aspect-video md:aspect-square bg-gradient-to-r from-red-100 to-[--primary-gold]/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">💰</div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      🔥 NEU 2024
                    </span>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">PREIS-EXPLOSION</span>
                    <span className="text-xs text-gray-500">15. Aug 2024 • 8 Min. Lesezeit</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight hover:text-[--primary-gold] transition-colors">
                    Warum Umrah-Reisen so teuer geworden sind – und wie du trotzdem sparen kannst
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Umrah-Preise sind 2024 um bis zu <strong>40% gestiegen</strong>! Als UmrahCheck-Gründer 
                    enthülle ich die wahren Gründe und zeige dir <strong>7 bewährte Strategien</strong>, 
                    um bei deiner Umrah-Reise bis zu <strong>800€ zu sparen</strong>.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[--primary-gold] rounded-full flex items-center justify-center text-white font-bold">
                        M
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Mustafa Ali</div>
                        <div className="text-xs text-gray-500">UmrahCheck Gründer</div>
                      </div>
                    </div>
                    <div className="text-[--primary-gold] font-semibold">
                      Vollständigen Artikel lesen →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          {/* Zweiter Artikel - Existierender */}
          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href="/blog/umrah-preise-sparen">
              <div className="aspect-video bg-gradient-to-r from-[--primary-gold]/20 to-[--secondary-gold]/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🕌</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    GRUNDLAGEN
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">SPARTIPPS</span>
                  <span className="text-xs text-gray-500">10. Jul 2024 • 6 Min.</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-[--primary-gold] transition-colors">
                  Umrah-Spartipps: So reduzierst du deine Reisekosten um 30%
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Praktische Spartipps für deine Umrah-Reise. Von der Buchung bis zur Rückkehr - 
                  so holst du das Maximum aus deinem Budget heraus.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[--primary-gold] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      M
                    </div>
                    <span className="text-sm text-gray-600">Mustafa Ali</span>
                  </div>
                  <span className="text-[--primary-gold] font-semibold text-sm">Artikel lesen →</span>
                </div>
              </div>
            </Link>
          </article>

          {/* Neue Artikel Grid */}
          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href="/blog/5-fehler-umrah-buchung">
              <div className="aspect-video bg-gradient-to-r from-red-100 to-red-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">❌</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    FEHLER VERMEIDEN
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">BUCHUNGSTIPPS</span>
                  <span className="text-xs text-gray-500">21. Aug 2024 • 8 Min.</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-[--primary-gold] transition-colors">
                  Diese 5 Fehler machen viele bei der Umrah-Buchung
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Diese kostspieligen Buchungsfehler haben mir Pilger aus über 200 persönlichen Gesprächen erzählt. Vermeide sie und spare bis zu 650€.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[--primary-gold] rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>
                    <span className="text-sm text-gray-600">Mustafa Ali</span>
                  </div>
                  <span className="text-[--primary-gold] font-semibold text-sm">Artikel lesen →</span>
                </div>
              </div>
            </Link>
          </article>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href="/blog/umrah-unter-1200-euro">
              <div className="aspect-video bg-gradient-to-r from-green-100 to-green-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">💰</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    BUDGET-TIPPS
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">SPAREN</span>
                  <span className="text-xs text-gray-500">21. Aug 2024 • 7 Min.</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-[--primary-gold] transition-colors">
                  Umrah für unter 1.200€? So erkennst du seriöse Angebote
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Budget-Umrah ohne Betrug: 7 Warnsignale für unseriöse Billig-Angebote und 5 legitime Wege, wirklich günstig zu reisen.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[--primary-gold] rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>
                    <span className="text-sm text-gray-600">Mustafa Ali</span>
                  </div>
                  <span className="text-[--primary-gold] font-semibold text-sm">Artikel lesen →</span>
                </div>
              </div>
            </Link>
          </article>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href="/blog/umrah-mit-familie">
              <div className="aspect-video bg-gradient-to-r from-purple-100 to-purple-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">👨‍👩‍👧‍👦</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    FAMILIE
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">FAMILIENREISE</span>
                  <span className="text-xs text-gray-500">21. Aug 2024 • 12 Min.</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-[--primary-gold] transition-colors">
                  Umrah mit der Familie – Was du bei Hotels und Budget beachten musst
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Nach 5 eigenen Familien-Umrahs: Die besten kinderfreundlichen Hotels, realistische Budgets und wie du 70% Stress vermeidest.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[--primary-gold] rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>
                    <span className="text-sm text-gray-600">Mustafa Ali</span>
                  </div>
                  <span className="text-[--primary-gold] font-semibold text-sm">Artikel lesen →</span>
                </div>
              </div>
            </Link>
          </article>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href="/blog/beste-hotels-kaaba">
              <div className="aspect-video bg-gradient-to-r from-amber-100 to-amber-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🏨</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    HOTELS
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">LUXURY</span>
                  <span className="text-xs text-gray-500">21. Aug 2024 • 15 Min.</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-[--primary-gold] transition-colors">
                  Die 7 besten Hotels direkt an der Kaaba – Mit Preisvergleich
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Persönlicher Test von 27 Hotels: Die 7 besten Unterkünfte mit Kaaba-Blick, Insider-Preise und geheime Buchungstricks der Profis.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[--primary-gold] rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>
                    <span className="text-sm text-gray-600">Mustafa Ali</span>
                  </div>
                  <span className="text-[--primary-gold] font-semibold text-sm">Artikel lesen →</span>
                </div>
              </div>
            </Link>
          </article>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href="/blog/umrah-ramadan-vs-winter">
              <div className="aspect-video bg-gradient-to-r from-blue-100 to-indigo-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🌙</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    SAISONVERGLEICH
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">TIMING</span>
                  <span className="text-xs text-gray-500">21. Aug 2024 • 10 Min.</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-[--primary-gold] transition-colors">
                  Umrah in Ramadan oder im Winter? Was du unbedingt wissen solltest
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Basierend auf 8 persönlichen Umrah-Erfahrungen: Ramadan vs. Winter Umrah mit Preisen, Menschenmassen, Wetter und spiritueller Atmosphäre.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[--primary-gold] rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>
                    <span className="text-sm text-gray-600">Mustafa Ali</span>
                  </div>
                  <span className="text-[--primary-gold] font-semibold text-sm">Artikel lesen →</span>
                </div>
              </div>
            </Link>
          </article>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href="/blog/reisebuero-vs-online">
              <div className="aspect-video bg-gradient-to-r from-cyan-100 to-cyan-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">📊</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    VERGLEICH
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">STRATEGIE</span>
                  <span className="text-xs text-gray-500">21. Aug 2024 • 9 Min.</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-[--primary-gold] transition-colors">
                  Vergleich: Reisebüro vs. Online-Buchung – was ist wirklich günstiger?
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Echter Test mit 40+ Anbietern: Reisebüro vs. Online vs. Direktbuchung vs. UmrahCheck. Die 4-Wege-Strategie für maximale Ersparnis.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[--primary-gold] rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>
                    <span className="text-sm text-gray-600">Mustafa Ali</span>
                  </div>
                  <span className="text-[--primary-gold] font-semibold text-sm">Artikel lesen →</span>
                </div>
              </div>
            </Link>
          </article>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href="/blog/versteckte-aufpreise-erkennen">
              <div className="aspect-video bg-gradient-to-r from-red-100 to-orange-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">💸</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    KOSTENFALLEN
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">AUFPREISE</span>
                  <span className="text-xs text-gray-500">21. Aug 2024 • 8 Min.</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-[--primary-gold] transition-colors">
                  So erkennst du versteckte Aufpreise bei Umrah-Angeboten
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Versteckte Kosten können deine Umrah um bis zu 800€ teurer machen. Hier sind 8 Tricks der Anbieter und wie du sie sofort erkennst.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[--primary-gold] rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>
                    <span className="text-sm text-gray-600">Mustafa Ali</span>
                  </div>
                  <span className="text-[--primary-gold] font-semibold text-sm">Artikel lesen →</span>
                </div>
              </div>
            </Link>
          </article>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href="/blog/wie-funktioniert-umrahcheck-ki">
              <div className="aspect-video bg-gradient-to-r from-blue-100 to-blue-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🤖</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    KI-TECHNOLOGIE
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">TECHNOLOGIE</span>
                  <span className="text-xs text-gray-500">21. Aug 2024 • 3 Min.</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-[--primary-gold] transition-colors">
                  Wie funktioniert der KI-Preisvergleich von UmrahCheck – erklärt in 3 Minuten
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Du gibst deine Wünsche ein, unsere KI durchsucht in Sekunden über 50 Anbieter. Hier erfährst du, wie die Technologie funktioniert und warum sie dir hunderte Euro spart.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[--primary-gold] rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>
                    <span className="text-sm text-gray-600">Mustafa Ali</span>
                  </div>
                  <span className="text-[--primary-gold] font-semibold text-sm">Artikel lesen →</span>
                </div>
              </div>
            </Link>
          </article>
        </div>

        {/* Newsletter Subscribe Section */}
        <section className="mt-12 bg-gradient-to-r from-[--primary-gold]/10 to-[--secondary-gold]/10 rounded-xl p-8 text-center border border-[--primary-gold]/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            📧 Verpasse keine neuen Artikel
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Erhalte die neuesten Spartipps, Preisanalysen und Umrah-Ratgeber direkt in dein Postfach. 
            Kostenlos und ohne Spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="deine@email.de"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--primary-gold] focus:border-transparent"
            />
            <button className="px-6 py-3 bg-[--primary-gold] text-white font-semibold rounded-lg hover:bg-[--secondary-gold] transition-colors">
              Anmelden
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Jederzeit abmeldbar • Keine Weitergabe an Dritte
          </p>
        </section>
      </section>
    </main>
  );
}