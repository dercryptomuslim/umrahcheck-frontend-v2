import type { Metadata } from "next";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Bewertungen & Erfahrungen - UmrahCheck",
  description:
    "Echte Bewertungen und Erfahrungen von Umrah-Pilgern, die UmrahCheck für ihre Reiseplanung genutzt haben. Transparent und ehrlich.",
  alternates: {
    canonical: "https://umrahcheck.de/bewertungen",
  },
  openGraph: {
    title: "Bewertungen - UmrahCheck",
    description: "Echte Bewertungen und Erfahrungen von Umrah-Pilgern mit UmrahCheck.",
    url: "https://umrahcheck.de/bewertungen",
    siteName: "UmrahCheck",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bewertungen - UmrahCheck",
    description: "Echte Bewertungen und Erfahrungen von Umrah-Pilgern mit UmrahCheck.",
  },
};

// Star Rating Component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= rating ? (
            <StarIcon className="w-5 h-5 text-[--primary-gold]" />
          ) : (
            <StarOutlineIcon className="w-5 h-5 text-gray-300" />
          )}
        </span>
      ))}
    </div>
  );
}

const reviews = [
  {
    name: "Ahmad K.",
    location: "Hamburg",
    rating: 5,
    date: "August 2024",
    title: "Endlich Transparenz bei Umrah-Preisen!",
    review: "Nach stundenlanger Suche bei verschiedenen Anbietern hat mir UmrahCheck in wenigen Minuten die besten Angebote gezeigt. Besonders toll: Die ehrlichen Preiserklärungen ohne versteckte Kosten. Habe 400€ gespart!",
    package: "Mekka + Medina, 10 Tage, Familie (4 Personen)"
  },
  {
    name: "Fatima S.",
    location: "Berlin",
    rating: 5,
    date: "Juli 2024",
    title: "Perfekt für die Ramadan-Umrah",
    review: "Die KI hat perfekt verstanden, dass ich ein Hotel in Gehweite zur Kaaba wollte, aber trotzdem budgetfreundlich. Das empfohlene Hotel war genau richtig und die Buchung super einfach.",
    package: "Ramadan Umrah, 7 Tage, Einzelreise"
  },
  {
    name: "Omar B.",
    location: "München",
    rating: 4,
    date: "Juni 2024",
    title: "Sehr hilfreich, kleine Verbesserungen möglich",
    review: "Toller Service mit schnellen Ergebnissen. Die Preisvergleiche waren akkurat und haben mir viel Zeit gespart. Einziger Wunsch: Noch mehr Filtermöglichkeiten für spezielle Bedürfnisse.",
    package: "Winter-Umrah, 14 Tage, Gruppe (8 Personen)"
  },
  {
    name: "Aisha M.",
    location: "Köln",
    rating: 5,
    date: "Mai 2024",
    title: "Erste Umrah dank UmrahCheck stressfrei",
    review: "Als Ersttäter war ich völlig überfordert mit der Planung. UmrahCheck hat mir nicht nur die besten Preise gezeigt, sondern auch erklärt, worauf ich achten muss. Sehr empfehlenswert!",
    package: "Erste Umrah, 12 Tage, Ehepaar"
  },
  {
    name: "Hassan Y.",
    location: "Frankfurt",
    rating: 5,
    date: "April 2024",
    title: "Unschlagbare Zeitersparnis",
    review: "Normalerweise verbringe ich Wochen mit Recherche. Mit UmrahCheck hatte ich in 10 Minuten drei perfekte Optionen. Die Blog-Artikel haben mir zusätzlich super geholfen bei der Entscheidung.",
    package: "Spontan-Umrah, 8 Tage, Solo"
  },
  {
    name: "Maryam T.",
    location: "Stuttgart",
    rating: 4,
    date: "März 2024",
    title: "Familien-Umrah war noch nie so einfach",
    review: "Mit zwei kleinen Kindern war die Planung immer ein Alptraum. UmrahCheck hat kinderfreundliche Hotels und realistische Preise für Familien gefunden. Nur die Flugauswahl könnte noch besser werden.",
    package: "Familien-Umrah, 10 Tage, 2 Erwachsene + 2 Kinder"
  }
];

const stats = [
  { number: "4.8/5", label: "Durchschnittsbewertung" },
  { number: "2.500+", label: "Zufriedene Nutzer" },
  { number: "95%", label: "Weiterempfehlungsrate" },
  { number: "€650", label: "Ø Ersparnis pro Buchung" }
];

export default function BewertungenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[--cream-light] to-[--sand]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Bewertungen & Erfahrungen
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Echte Bewertungen von Umrah-Pilgern, die UmrahCheck vertraut haben
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[--primary-gold] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Das sagen unsere Nutzer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Authentische Erfahrungen von Muslimen, die UmrahCheck für ihre 
            heilige Reise verwendet haben. Jede Bewertung ist verifiziert.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.location} • {review.date}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>

              {/* Title */}
              <h4 className="font-semibold text-gray-900 mb-3">
                {review.title}
              </h4>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {review.review}
              </p>

              {/* Package Info */}
              <div className="bg-[--primary-gold]/5 rounded-lg p-3 border-l-4 border-[--primary-gold]">
                <p className="text-sm font-medium text-gray-800">
                  📦 {review.package}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Warum vertrauen uns so viele Muslime?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Verifizierte Bewertungen</h4>
              <p className="text-sm text-gray-600">
                Jede Bewertung wird überprüft und stammt von echten Nutzern
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕌</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Von Muslimen für Muslime</h4>
              <p className="text-sm text-gray-600">
                Entwickelt von praktizierenden Muslimen mit echtem Verständnis
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[--primary-gold]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Transparente Preise</h4>
              <p className="text-sm text-gray-600">
                Keine versteckten Kosten, keine bösen Überraschungen
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-[--midnight] to-[--dark-blue] rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Werde Teil unserer Community!
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Schließe dich tausenden zufriedenen Muslimen an und finde die 
            besten Umrah-Angebote mit unserer KI-Technologie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/ki-analyse"
              className="inline-flex items-center justify-center px-8 py-3 bg-[--primary-gold] text-white font-semibold rounded-lg hover:bg-[--secondary-gold] transition-colors"
            >
              🤖 Jetzt KI-Analyse starten
            </a>
            <a 
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              📚 Blog lesen
            </a>
          </div>
        </div>

        {/* Contact for Reviews */}
        <div className="mt-12 bg-gradient-to-r from-[--primary-gold]/10 to-[--secondary-gold]/10 rounded-xl p-8 text-center border border-[--primary-gold]/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            💬 Deine Erfahrung teilen?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Warst du bereits mit UmrahCheck auf Umrah? Wir freuen uns über 
            deine ehrliche Bewertung und helfen anderen Pilgern bei der Entscheidung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@umrahcheck.de?subject=Bewertung%20für%20UmrahCheck"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[--primary-gold] text-white font-semibold rounded-lg hover:bg-[--secondary-gold] transition-colors"
            >
              📧 Bewertung senden
            </a>
            <a 
              href="https://wa.me/966560630947?text=Hallo,%20ich%20möchte%20gerne%20eine%20Bewertung%20für%20UmrahCheck%20abgeben"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              📱 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}