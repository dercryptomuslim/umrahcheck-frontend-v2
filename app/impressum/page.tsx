import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-8">
            <Button variant="outline" asChild className="mb-6">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </Button>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Impressum</h1>
            <p className="text-lg text-gray-600">Angaben gemäß § 5 TMG</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            
            {/* Anbieter */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Anbieter</h2>
              <div className="space-y-2 text-gray-700">
                <p className="text-lg font-medium">Mustafa Ali</p>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Einzelunternehmer</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Deutschland</span>
                </div>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>E-Mail: info@umrahcheck.de</span>
                </div>
              </div>
            </section>

            {/* Geschäftstätigkeit */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Geschäftstätigkeit</h2>
              <p className="text-gray-700">
                Umrah-Beratungsservice, Reise-Tools und Preisvergleiche. 
                Kein Reiseveranstalter - reine Vermittlungs- und Beratungstätigkeit.
              </p>
            </section>

            {/* Verantwortlich für den Inhalt */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlich für den Inhalt</h2>
              <div className="space-y-2 text-gray-700">
                <p>Mustafa Ali</p>
                <p>Musterstraße 123</p>
                <p>12345 Berlin, Deutschland</p>
              </div>
            </section>

            {/* Haftungsausschluss */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftungsausschluss</h2>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">Haftung für Inhalte</h3>
              <p className="text-gray-700 mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Haftung für Links</h3>
              <p className="text-gray-700 mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Urheberrecht</h3>
              <p className="text-gray-700">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            {/* Online-Streitbeilegung */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Online-Streitbeilegung</h2>
              <p className="text-gray-700">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                   className="text-emerald-600 hover:text-emerald-700 ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-gray-700 mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}