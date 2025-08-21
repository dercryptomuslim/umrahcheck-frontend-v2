import type { Metadata } from "next";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Häufig gestellte Fragen (FAQ) - UmrahCheck",
  description:
    "Antworten auf die häufigsten Fragen zu UmrahCheck, unserem KI-Preisvergleich und der Umrah-Planung. Alles was du wissen musst auf einen Blick.",
  alternates: {
    canonical: "https://umrahcheck.de/faq",
  },
  openGraph: {
    title: "FAQ - UmrahCheck",
    description: "Häufig gestellte Fragen zu UmrahCheck und unserem KI-Preisvergleich für Umrah-Reisen.",
    url: "https://umrahcheck.de/faq",
    siteName: "UmrahCheck",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - UmrahCheck",
    description: "Häufig gestellte Fragen zu UmrahCheck und unserem KI-Preisvergleich für Umrah-Reisen.",
  },
};

const faqData = [
  {
    category: "Über UmrahCheck",
    questions: [
      {
        question: "Was ist UmrahCheck und wie funktioniert es?",
        answer: "UmrahCheck ist ein KI-gestützter Preisvergleichsdienst für Umrah-Reisen. Unsere KI durchsucht in Sekunden über 50 Anbieter und findet die besten Angebote basierend auf deinem Budget, deinen Reisedaten und deinen Präferenzen."
      },
      {
        question: "Ist UmrahCheck kostenlos?",
        answer: "Ja, die Grundfunktionen von UmrahCheck sind komplett kostenlos. Du zahlst nur bei den Anbietern für deine tatsächliche Buchung. Wir erhalten eine kleine Provision, wenn du über unsere Links buchst, ohne dass dir dadurch Mehrkosten entstehen."
      },
      {
        question: "Wie verdient UmrahCheck Geld?",
        answer: "Wir arbeiten mit Affiliate-Partnerprogrammen zusammen. Wenn du über unsere Empfehlungen buchst, erhalten wir eine Provision vom Anbieter. Das ist für dich kostenlos und ermöglicht es uns, diesen Service anzubieten."
      }
    ]
  },
  {
    category: "KI-Preisvergleich",
    questions: [
      {
        question: "Wie genau sind die Preisangaben?",
        answer: "Unsere KI analysiert Real-Time-Daten von über 50 Anbietern. Die Genauigkeit liegt bei etwa 90-95%. Da sich Preise schnell ändern können, empfehlen wir dir, die finalen Preise direkt beim Anbieter zu prüfen."
      },
      {
        question: "Welche Anbieter durchsucht UmrahCheck?",
        answer: "Wir durchsuchen über 50 Anbieter, darunter große Reiseveranstalter, spezialisierte Umrah-Agenturen, Hotelbuchungsseiten und Fluggesellschaften. Eine vollständige Liste können wir aus Wettbewerbsgründen nicht veröffentlichen."
      },
      {
        question: "Warum werden manchmal keine Ergebnisse angezeigt?",
        answer: "Das kann verschiedene Gründe haben: Sehr spezielle Anfragen, ausgebuchte Zeiträume, oder temporäre API-Probleme bei Anbietern. Versuche es mit flexibleren Daten oder kontaktiere uns für individuelle Unterstützung."
      }
    ]
  },
  {
    category: "Buchung & Reiseplanung",
    questions: [
      {
        question: "Kann ich direkt über UmrahCheck buchen?",
        answer: "Nein, wir sind ein Vergleichsportal. Die eigentliche Buchung erfolgt direkt beim jeweiligen Anbieter. Wir leiten dich zu den besten Angeboten weiter, wo du dann sicher buchen kannst."
      },
      {
        question: "Was ist, wenn nach der Buchung Probleme auftreten?",
        answer: "Bei Problemen mit deiner Buchung wende dich direkt an den Anbieter, bei dem du gebucht hast. Falls du Unterstützung brauchst, helfen wir gerne bei der Vermittlung. Kontaktiere uns einfach über info@umrahcheck.de."
      },
      {
        question: "Können auch Familienreisen oder Gruppen geplant werden?",
        answer: "Ja, absolut! Unser System kann Angebote für Einzelpersonen, Familien und größere Gruppen finden. Gib einfach die entsprechende Personenanzahl in unserer KI-Analyse ein."
      }
    ]
  },
  {
    category: "Hotels & Unterkünfte",
    questions: [
      {
        question: "Sind alle Hotels Halal-zertifiziert?",
        answer: "Wir konzentrieren uns auf muslimfreundliche Hotels in Mekka und Medina. Die meisten Hotels in diesen heiligen Städten sind automatisch halal-konform. Bei spezifischen Anforderungen kontaktiere uns gerne."
      },
      {
        question: "Was bedeutet die Entfernung zum Haram?",
        answer: "Die Entfernung wird in Gehminuten zur Masjid al-Haram (Mekka) bzw. zur Prophetenmoschee (Medina) gemessen. 'Fußläufig' bedeutet meist 5-15 Minuten zu Fuß, 'kurzer Shuttlebus' ca. 5-10 Minuten Fahrt."
      },
      {
        question: "Kann ich spezielle Zimmerwünsche angeben?",
        answer: "Grundsätzliche Präferenzen wie Kaaba-Blick oder Familienzimmer kannst du in der KI-Analyse angeben. Spezielle Wünsche besprichst du am besten direkt mit dem Hotel nach der Buchung."
      }
    ]
  },
  {
    category: "Preise & Kosten",
    questions: [
      {
        question: "Warum variieren die Preise so stark?",
        answer: "Umrah-Preise hängen von vielen Faktoren ab: Saison (Ramadan ist teurer), Hotelkategorie, Entfernung zum Haram, Aufenthaltsdauer, Flugverbindungen und aktuelle Nachfrage. Unsere KI erklärt dir die Preisunterschiede transparent."
      },
      {
        question: "Sind in den Preisen alle Kosten enthalten?",
        answer: "Die angezeigten Preise sind die Grundpreise der Anbieter. Zusätzliche Kosten wie Visa-Gebühren, Versicherungen oder persönliche Ausgaben können hinzukommen. Achte immer auf das Kleingedruckte beim jeweiligen Anbieter."
      },
      {
        question: "Wann sind Umrah-Reisen am günstigsten?",
        answer: "Außerhalb von Ramadan und den Hajj-Zeiten sind Preise meist günstiger. Besonders Winter-Monate (November-Februar) bieten oft gute Preise. Unsere KI kann dir die beste Zeit für dein Budget vorschlagen."
      }
    ]
  },
  {
    category: "Sicherheit & Vertrauen",
    questions: [
      {
        question: "Wie sicher sind die empfohlenen Anbieter?",
        answer: "Wir arbeiten nur mit lizenzierten und etablierten Anbietern zusammen. Dennoch empfehlen wir dir, vor der Buchung die Bewertungen zu prüfen und auf sichere Zahlungsmethoden zu achten."
      },
      {
        question: "Was passiert mit meinen persönlichen Daten?",
        answer: "Deine Daten werden nur für die Preissuche verwendet und nicht an Dritte weitergegeben. Wir halten uns strikt an die DSGVO. Details findest du in unserer Datenschutzerklärung."
      },
      {
        question: "Kann ich UmrahCheck vertrauen?",
        answer: "UmrahCheck wurde von praktizierenden Muslimen für die muslimische Community entwickelt. Wir sind transparent über unsere Finanzierung und haben bereits tausenden von Pilgern geholfen. Lies gerne die Erfahrungen anderer in unserem Blog."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[--cream-light] to-[--sand]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Häufig gestellte Fragen
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Hier findest du Antworten auf die wichtigsten Fragen zu UmrahCheck 
            und unserem KI-Preisvergleich für Umrah-Reisen.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-[--primary-gold]/20">
                {category.category}
              </h2>
              
              <div className="space-y-6">
                {category.questions.map((faq, questionIndex) => (
                  <div key={questionIndex} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-2">
                      <span className="text-[--primary-gold] text-xl flex-shrink-0">Q:</span>
                      {faq.question}
                    </h3>
                    <div className="ml-7">
                      <span className="text-[--secondary-gold] font-semibold">A:</span>
                      <p className="text-gray-700 leading-relaxed inline ml-2">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-[--primary-gold]/10 to-[--secondary-gold]/10 rounded-xl p-8 text-center border border-[--primary-gold]/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            💬 Deine Frage war nicht dabei?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Kein Problem! Wir helfen dir gerne persönlich weiter und beantworten 
            alle deine Fragen zur Umrah-Planung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@umrahcheck.de"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[--primary-gold] text-white font-semibold rounded-lg hover:bg-[--secondary-gold] transition-colors"
            >
              📧 info@umrahcheck.de
            </a>
            <a 
              href="https://wa.me/966560630947"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              📱 WhatsApp
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Antwort meist innerhalb von 24 Stunden • Kostenlose Beratung
          </p>
        </div>
      </section>
    </main>
  );
}