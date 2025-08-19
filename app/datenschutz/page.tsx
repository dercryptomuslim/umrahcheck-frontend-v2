import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Shield, Mail, Phone } from 'lucide-react'

export default function DatenschutzPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Datenschutzerklärung</h1>
            <p className="text-lg text-gray-600">Informationen zur Verarbeitung Ihrer personenbezogenen Daten</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            
            {/* Einleitung */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Datenschutz im Überblick</h2>
              </div>
              <p className="text-gray-700">
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten 
                ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen 
                Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung 
                im Rahmen unserer Website.
              </p>
            </section>

            {/* Verantwortlicher */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlicher</h2>
              <div className="bg-emerald-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>UmrahCheck GmbH</strong><br />
                  Musterstraße 123<br />
                  12345 Berlin, Deutschland<br />
                  <br />
                  <span className="flex items-center gap-2 mt-2">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    Telefon: +49 (0) 123 456 789 01
                  </span>
                  <span className="flex items-center gap-2 mt-1">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    E-Mail: info@umrahcheck.com
                  </span>
                </p>
              </div>
            </section>

            {/* Welche Daten erfassen wir */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welche Daten erfassen wir von Ihnen?</h2>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">Umrah-Anfrage Formular</h3>
              <p className="text-gray-700 mb-4">
                Wenn Sie unser Umrah-Anfrage Formular nutzen, erfassen wir folgende Daten:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Vor- und Nachname</li>
                <li>E-Mail-Adresse</li>
                <li>WhatsApp-Nummer (optional)</li>
                <li>Reisedaten und -präferenzen</li>
                <li>Budget-Informationen</li>
                <li>Staatsangehörigkeit</li>
                <li>Besondere Wünsche (optional)</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Website-Nutzung</h3>
              <p className="text-gray-700 mb-4">
                Bei der Nutzung unserer Website werden automatisch folgende Daten erfasst:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Aufgerufene Seiten</li>
                <li>Browser-Typ und -Version</li>
                <li>Betriebssystem</li>
                <li>Referrer URL</li>
              </ul>
            </section>

            {/* Zweck der Datenverarbeitung */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Zweck der Datenverarbeitung</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h3 className="font-medium text-gray-900">Umrah-Beratung</h3>
                  <p className="text-gray-700">
                    Ihre Angaben verwenden wir zur Erstellung personalisierter Umrah-Angebote und zur 
                    Beratung bezüglich Ihrer Reiseplanung.
                  </p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="font-medium text-gray-900">Kommunikation</h3>
                  <p className="text-gray-700">
                    Wir nutzen Ihre Kontaktdaten, um Ihnen Angebote zu unterbreiten und bei Rückfragen 
                    mit Ihnen in Kontakt zu treten.
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="font-medium text-gray-900">Website-Optimierung</h3>
                  <p className="text-gray-700">
                    Die automatisch erfassten Daten dienen der technischen Bereitstellung und 
                    Optimierung unserer Website.
                  </p>
                </div>
              </div>
            </section>

            {/* Rechtsgrundlage */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rechtsgrundlage</h2>
              <p className="text-gray-700 mb-4">
                Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage von:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Art. 6 Abs. 1 lit. a DSGVO</strong> - Einwilligung (z.B. bei der Formular-Übermittlung)</li>
                <li><strong>Art. 6 Abs. 1 lit. b DSGVO</strong> - Vertragserfüllung bzw. vorvertragliche Maßnahmen</li>
                <li><strong>Art. 6 Abs. 1 lit. f DSGVO</strong> - Berechtigte Interessen (z.B. Website-Optimierung)</li>
              </ul>
            </section>

            {/* Datenweitergabe */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Datenweitergabe</h2>
              <p className="text-gray-700 mb-4">
                Wir geben Ihre personenbezogenen Daten nur in folgenden Fällen an Dritte weiter:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Zur Angebotserstellung an ausgewählte, vertrauenswürdige Reisepartner</li>
                <li>Zur Buchungsabwicklung an entsprechende Dienstleister</li>
                <li>Bei gesetzlicher Verpflichtung zur Herausgabe</li>
                <li>Mit Ihrer ausdrücklichen Einwilligung</li>
              </ul>
            </section>

            {/* Speicherdauer */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Speicherdauer</h2>
              <p className="text-gray-700">
                Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die genannten Zwecke 
                erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Anfrage-Daten werden in 
                der Regel 3 Jahre nach der letzten Kommunikation gelöscht, es sei denn, es kommt zu einer 
                Buchung oder Sie wünschen ausdrücklich eine längere Speicherung.
              </p>
            </section>

            {/* Ihre Rechte */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ihre Rechte</h2>
              <p className="text-gray-700 mb-4">
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Auskunftsrecht</h3>
                  <p className="text-sm text-gray-700">Information über gespeicherte Daten</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Berichtigung</h3>
                  <p className="text-sm text-gray-700">Korrektur falscher Daten</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Löschung</h3>
                  <p className="text-sm text-gray-700">Entfernung Ihrer Daten</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Widerspruch</h3>
                  <p className="text-sm text-gray-700">Einschränkung der Verarbeitung</p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-700 mb-4">
                Unsere Website verwendet Cookies, um die Benutzererfahrung zu verbessern. Wir unterscheiden zwischen:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Technisch notwendige Cookies:</strong> Für die Grundfunktionen der Website</li>
                <li><strong>Analytische Cookies:</strong> Zur Verbesserung unseres Angebots (nur mit Ihrer Zustimmung)</li>
                <li><strong>Marketing Cookies:</strong> Für personalisierte Werbung (nur mit Ihrer Zustimmung)</li>
              </ul>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt bei Datenschutzfragen</h2>
              <div className="bg-emerald-50 rounded-lg p-4">
                <p className="text-gray-700">
                  Bei Fragen zum Datenschutz, zur Ausübung Ihrer Rechte oder bei Beschwerden 
                  können Sie sich jederzeit an uns wenden:
                </p>
                <div className="mt-3 space-y-1">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <span>datenschutz@umrahcheck.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>+49 (0) 123 456 789 01</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Stand */}
            <section className="border-t pt-6">
              <p className="text-sm text-gray-500">
                Stand dieser Datenschutzerklärung: Januar 2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}