import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Widerrufsrecht - UmrahCheck",
  description:
    "Informationen zu Ihrem Widerrufsrecht bei UmrahCheck. Widerrufsbelehrung, Widerrufsfrist und Muster-Widerrufsformular nach deutschem Recht.",
  alternates: {
    canonical: "https://umrahcheck.de/widerruf",
  },
  openGraph: {
    title: "Widerrufsrecht - UmrahCheck",
    description: "Informationen zu Ihrem Widerrufsrecht bei UmrahCheck.",
    url: "https://umrahcheck.de/widerruf",
    siteName: "UmrahCheck",
    type: "website",
  },
  robots: {
    index: false, // Rechtliche Seiten werden meist nicht indexiert
    follow: true,
  },
};

export default function WiderrufsrechtPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[--cream-light] to-[--sand]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Widerrufsrecht
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Informationen zu Ihrem gesetzlichen Widerrufsrecht
          </p>
          <p className="text-sm text-white/70 mt-4">
            Stand: 21. August 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">

          {/* Important Notice */}
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              ℹ️ Wichtiger Hinweis
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>UmrahCheck ist ein kostenloser Vergleichsdienst.</strong> Sie schließen keine 
              kostenpflichtigen Verträge direkt mit uns ab. Diese Widerrufsbelehrung gilt für 
              eventuelle kostenpflichtige Services (wie Premium-Analysen oder PDF-Pakete), 
              die wir möglicherweise in Zukunft anbieten.
            </p>
          </div>

          {/* Widerrufsbelehrung */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-[--primary-gold]/20">
              🔄 Widerrufsbelehrung
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Widerrufsrecht
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen 
                  Vertrag zu widerrufen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Widerrufsfrist
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses 
                  (bei digitalen Inhalten) oder ab dem Tag, an dem Sie oder ein von Ihnen 
                  benannter Dritter die Waren in Besitz genommen haben.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Widerrufsausübung
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-800 font-medium mb-2">UmrahCheck</p>
                  <p className="text-gray-700">
                    E-Mail: info@umrahcheck.de<br />
                    WhatsApp: +966560630947
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief 
                  oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. 
                  Sie können das unten stehende Muster-Widerrufsformular verwenden, das jedoch 
                  nicht vorgeschrieben ist.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Widerrufsfrist wahren
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über 
                  die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
                </p>
              </div>
            </div>
          </div>

          {/* Folgen des Widerrufs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-[--primary-gold]/20">
              📋 Folgen des Widerrufs
            </h2>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir 
                von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der 
                zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der 
                Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), 
                unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, 
                an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der 
                ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde 
                ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen 
                dieser Rückzahlung Entgelte berechnet.
              </p>
            </div>
          </div>

          {/* Ausnahmen */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-[--primary-gold]/20">
              ⚠️ Ausschluss des Widerrufsrechts
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Das Widerrufsrecht besteht nicht bei:
            </p>

            <ul className="text-gray-700 space-y-2 pl-6">
              <li>• Verträgen zur Lieferung digitaler Inhalte, die nicht auf einem körperlichen 
                  Datenträger geliefert werden, wenn die Ausführung mit Ihrer ausdrücklichen 
                  Zustimmung vor Ablauf der Widerrufsfrist begonnen hat</li>
              <li>• Verträgen über die Erbringung von Dienstleistungen im Zusammenhang mit 
                  Freizeitbetätigungen, wenn der Vertrag für einen bestimmten Termin oder 
                  Zeitraum geschlossen wurde</li>
              <li>• Verträgen zur Lieferung von Waren, die schnell verderben können oder 
                  deren Verfallsdatum schnell überschritten würde</li>
            </ul>
          </div>

          {/* Muster-Widerrufsformular */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-[--primary-gold]/20">
              📝 Muster-Widerrufsformular
            </h2>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="text-gray-600 text-sm mb-4">
                (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular 
                aus und senden Sie es zurück.)
              </p>

              <div className="bg-white rounded border border-gray-300 p-6 font-mono text-sm">
                <p className="mb-4">
                  An: UmrahCheck<br />
                  info@umrahcheck.de
                </p>

                <p className="mb-4">
                  Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag 
                  über den Kauf der folgenden Waren (*)/die Erbringung der folgenden 
                  Dienstleistung (*)
                </p>

                <p className="mb-2">
                  Bestellt am (*) / erhalten am (*):<br />
                  _________________________________
                </p>

                <p className="mb-2">
                  Name des/der Verbraucher(s):<br />
                  _________________________________
                </p>

                <p className="mb-2">
                  Anschrift des/der Verbraucher(s):<br />
                  _________________________________<br />
                  _________________________________
                </p>

                <p className="mb-2">
                  E-Mail-Adresse:<br />
                  _________________________________
                </p>

                <p className="mb-4">
                  Datum:<br />
                  _________________________________
                </p>

                <p>
                  Unterschrift des/der Verbraucher(s)<br />
                  (nur bei Mitteilung auf Papier)
                </p>

                <p className="text-xs text-gray-500 mt-4">
                  (*) Unzutreffendes streichen
                </p>
              </div>
            </div>
          </div>

          {/* Digitaler Widerruf */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-[--primary-gold]/20">
              💻 Digitaler Widerruf
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sie können Ihren Widerruf auch digital übermitteln:
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:info@umrahcheck.de?subject=Widerruf%20-%20Vertrag&body=Hiermit%20widerrufe%20ich%20den%20mit%20UmrahCheck%20geschlossenen%20Vertrag.%0A%0ABestellt%20am:%0AName:%0AAnschrift:%0AE-Mail:%0A%0ADatum:%20"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[--primary-gold] text-white font-semibold rounded-lg hover:bg-[--secondary-gold] transition-colors"
              >
                📧 Widerruf per E-Mail
              </a>
              <a 
                href="https://wa.me/966560630947?text=Hiermit%20widerrufe%20ich%20den%20mit%20UmrahCheck%20geschlossenen%20Vertrag.%20Weitere%20Details%20sende%20ich%20per%20E-Mail."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                📱 WhatsApp Kontakt
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-[--primary-gold]/20">
              ❓ Häufige Fragen zum Widerrufsrecht
            </h2>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Muss ich Gründe für meinen Widerruf angeben?
                </h4>
                <p className="text-gray-700">
                  Nein, Sie können binnen 14 Tagen ohne Angabe von Gründen widerrufen.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Ab wann läuft die 14-tägige Frist?
                </h4>
                <p className="text-gray-700">
                  Bei digitalen Inhalten ab Vertragsschluss, bei physischen Waren ab Erhalt der Ware.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Was passiert mit bereits heruntergeladenen digitalen Inhalten?
                </h4>
                <p className="text-gray-700">
                  Bei vorzeitigem Download mit Ihrer Zustimmung erlischt das Widerrufsrecht.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-[--primary-gold]/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              📞 Fragen zum Widerrufsrecht?
            </h3>
            <p className="text-gray-700 mb-4">
              Bei Fragen zu Ihrem Widerrufsrecht stehen wir Ihnen gerne zur Verfügung:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:info@umrahcheck.de?subject=Frage%20zum%20Widerrufsrecht"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[--primary-gold] text-white font-semibold rounded-lg hover:bg-[--secondary-gold] transition-colors w-fit"
              >
                📧 info@umrahcheck.de
              </a>
              <a 
                href="https://wa.me/966560630947?text=Hallo,%20ich%20habe%20eine%20Frage%20zum%20Widerrufsrecht"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors w-fit"
              >
                📱 WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}