import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, FileText, AlertTriangle } from 'lucide-react'

export default function AGBPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Allgemeine Geschäftsbedingungen</h1>
            <p className="text-lg text-gray-600">UmrahCheck GmbH</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            
            {/* Geltungsbereich */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-semibold text-gray-900">1. Geltungsbereich</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der 
                UmrahCheck GmbH (nachfolgend "UmrahCheck" oder "wir") und ihren Kunden (nachfolgend "Sie" oder "Kunde") 
                über die Nutzung unserer Dienstleistungen im Bereich der Umrah-Reiseberatung und -vermittlung.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <p className="text-amber-800 text-sm">
                    <strong>Wichtiger Hinweis:</strong> Mit der Nutzung unserer Dienstleistungen erkennen Sie 
                    diese AGB als verbindlich an.
                  </p>
                </div>
              </div>
            </section>

            {/* Leistungen */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Unsere Leistungen</h2>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">2.1 Beratungsleistungen</h3>
              <p className="text-gray-700 mb-4">
                UmrahCheck bietet eine kostenlose KI-gestützte Beratung für Umrah-Reisen. Wir analysieren 
                Ihre Anfrage und erstellen personalisierte Empfehlungen für Hotels, Flüge und Reisepakete.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">2.2 Vermittlungsleistungen</h3>
              <p className="text-gray-700 mb-4">
                Wir vermitteln Kontakte zu geprüften Reiseanbietern und unterstützen Sie bei der Auswahl 
                passender Angebote. Die eigentliche Buchung erfolgt direkt mit dem jeweiligen Reiseanbieter.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">2.3 Kostenlose Nutzung</h3>
              <p className="text-gray-700">
                Unsere Beratungs- und Vermittlungsleistungen sind für Sie als Kunde grundsätzlich kostenfrei. 
                Wir erhalten Provisionen von unseren Partnerunternehmen bei erfolgreichen Vermittlungen.
              </p>
            </section>

            {/* Vertragsschluss */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Vertragsschluss</h2>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">3.1 Anfrage</h3>
              <p className="text-gray-700 mb-4">
                Mit dem Absenden einer Anfrage über unser Kontaktformular geben Sie ein unverbindliches 
                Angebot auf Abschluss eines Beratungsvertrages ab.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">3.2 Annahme</h3>
              <p className="text-gray-700">
                Der Vertrag kommt durch unsere Bestätigung per E-Mail oder durch die Erbringung der 
                ersten Beratungsleistung zustande.
              </p>
            </section>

            {/* Pflichten */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Rechte und Pflichten</h2>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">4.1 Unsere Pflichten</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Sorgfältige Analyse Ihrer Anfrage</li>
                <li>Ehrliche und transparente Beratung</li>
                <li>Vermittlung seriöser Reiseanbieter</li>
                <li>Datenschutzkonformer Umgang mit Ihren Daten</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-2">4.2 Ihre Pflichten</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Vollständige und wahrheitsgemäße Angaben</li>
                <li>Rechtzeitige Mitteilung von Änderungen</li>
                <li>Prüfung der vermittelten Angebote</li>
                <li>Eigenverantwortliche Buchungsentscheidung</li>
              </ul>
            </section>

            {/* Haftung */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Haftung</h2>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">5.1 Haftungsbeschränkung</h3>
              <p className="text-gray-700 mb-4">
                UmrahCheck haftet nur für eigene Pflichtverletzungen bei Vorsatz und grober Fahrlässigkeit. 
                Für die Leistungen der vermittelten Reiseanbieter übernehmen wir keine Haftung.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">5.2 Beratungscharakter</h3>
              <p className="text-gray-700 mb-4">
                Unsere Empfehlungen haben beratenden Charakter. Die finale Entscheidung und Buchung 
                liegt ausschließlich bei Ihnen. Wir übernehmen keine Gewähr für die Richtigkeit 
                von Preisen und Verfügbarkeiten der Partneranbieter.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">5.3 Höhere Gewalt</h3>
              <p className="text-gray-700">
                Wir haften nicht für Leistungsstörungen aufgrund höherer Gewalt, wie z.B. 
                Naturkatastrophen, Krieg, Terrorismus oder behördliche Anordnungen.
              </p>
            </section>

            {/* Datenschutz */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Datenschutz</h2>
              <p className="text-gray-700">
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Einzelheiten zur Datenverarbeitung 
                finden Sie in unserer <Link href="/datenschutz" className="text-emerald-600 hover:text-emerald-700 underline">
                Datenschutzerklärung</Link>.
              </p>
            </section>

            {/* Kündigung */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Beendigung der Beratung</h2>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">7.1 Ordentliche Beendigung</h3>
              <p className="text-gray-700 mb-4">
                Die Beratung kann jederzeit von beiden Seiten ohne Angabe von Gründen beendet werden. 
                Eine Mitteilung per E-Mail ist ausreichend.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">7.2 Außerordentliche Kündigung</h3>
              <p className="text-gray-700">
                Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
              </p>
            </section>

            {/* Änderungen */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Änderungen der AGB</h2>
              <p className="text-gray-700">
                Wir behalten uns vor, diese AGB zu ändern. Änderungen werden Ihnen per E-Mail mitgeteilt 
                und gelten als genehmigt, wenn Sie nicht innerhalb von vier Wochen nach Zugang widersprechen.
              </p>
            </section>

            {/* Streitbeilegung */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Streitbeilegung</h2>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">9.1 Gerichtsstand</h3>
              <p className="text-gray-700 mb-4">
                Gerichtsstand für alle Streitigkeiten ist Berlin, sofern Sie Kaufmann, juristische 
                Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen sind.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">9.2 Anwendbares Recht</h3>
              <p className="text-gray-700 mb-4">
                Es gilt ausschließlich deutsches Recht unter Ausschluss des UN-Kaufrechts.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">9.3 Online-Streitbeilegung</h3>
              <p className="text-gray-700">
                Die EU-Kommission stellt eine Plattform für Online-Streitbeilegung bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                   className="text-emerald-600 hover:text-emerald-700 ml-1">
                  ec.europa.eu/consumers/odr
                </a>
              </p>
            </section>

            {/* Salvatorische Klausel */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Salvatorische Klausel</h2>
              <p className="text-gray-700">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die 
                Wirksamkeit der übrigen Bestimmungen davon unberührt. Die unwirksame Bestimmung 
                ist durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck am nächsten kommt.
              </p>
            </section>

            {/* Kontakt */}
            <section className="bg-emerald-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
              <p className="text-gray-700">
                Bei Fragen zu diesen AGB können Sie sich jederzeit an uns wenden:
              </p>
              <div className="mt-3 space-y-1 text-gray-700">
                <p><strong>UmrahCheck GmbH</strong></p>
                <p>E-Mail: info@umrahcheck.com</p>
                <p>Telefon: +49 (0) 123 456 789 01</p>
              </div>
            </section>

            {/* Stand */}
            <section className="border-t pt-6">
              <p className="text-sm text-gray-500">
                Stand dieser AGB: Januar 2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}