"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Download, 
  Star, 
  CheckCircle,
  Heart,
  Sparkles,
  Calendar,
  MapPin,
  Users,
  Target,
  PenTool,
  Gift,
  Zap,
  ArrowRight
} from 'lucide-react'

export default function UmrahJournalPage() {
  const [selectedPackage, setSelectedPackage] = useState<'digital' | 'physical' | 'complete'>('digital')
  const [isOrdering, setIsOrdering] = useState(false)

  const packages = {
    digital: {
      name: "Digital Journal PDF",
      price: 19,
      originalPrice: 39,
      features: [
        "Personalisiert mit deinem Namen",
        "Sofort-Download als PDF",
        "Druckoptimiert für A5 Format",
        "Interaktive Felder zum Ausfüllen",
        "QR-Codes zu Duas & Guides"
      ],
      icon: <Download className="w-6 h-6" />,
      popular: false
    },
    physical: {
      name: "Premium Physical Journal",
      price: 39,
      originalPrice: 59,
      features: [
        "Hardcover mit Goldprägung",
        "Premium 120g Papier",
        "Personalisiert mit deinem Namen",
        "Inkl. Lesezeichen & Tasbih",
        "Versand innerhalb 3-5 Tagen"
      ],
      icon: <BookOpen className="w-6 h-6" />,
      popular: true
    },
    complete: {
      name: "Complete Package",
      price: 59,
      originalPrice: 99,
      features: [
        "Physical + Digital Journal",
        "Hotel-Analyse PDF (Wert: 39€)",
        "WhatsApp Premium Support",
        "Exklusive Dua-App Zugang",
        "Lebenslanger Zugriff"
      ],
      icon: <Gift className="w-6 h-6" />,
      popular: false
    }
  }

  const handleOrder = async (packageType: string) => {
    setIsOrdering(true)
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.trackEvent({
        event_name: 'journal_order_initiated',
        event_category: 'conversion',
        parameters: {
          package_type: packageType,
          price: packages[packageType as keyof typeof packages].price,
          timestamp: new Date().toISOString()
        }
      })
    }

    // Redirect to WhatsApp with pre-filled message
    const message = `Assalamu alaikum! Ich möchte das Umrah Journal bestellen:

📖 Package: ${packages[packageType as keyof typeof packages].name}
💰 Preis: ${packages[packageType as keyof typeof packages].price}€

Bitte senden Sie mir weitere Informationen zur Bestellung.`

    const whatsappUrl = `https://wa.me/966560630947?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    setTimeout(() => setIsOrdering(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-light via-sand to-cream">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              NEU: Dein persönliches Umrah Journal
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Halte deine <span className="text-[--primary-gold]">spirituelle Reise</span> für immer fest
            </h1>

            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Das erste personalisierte Umrah Journal auf Deutsch - 
              dokumentiere jeden kostbaren Moment deiner Reise zu Allah
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['📖 Tägliche Reflexion', '🤲 Dua-Listen', '🕋 Kaaba Momente', '💭 Spirituelle Ziele'].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold mb-2">
                🎁 Launch-Angebot: Spare bis zu 40€!
              </p>
              <p className="text-sm opacity-90">
                Nur für die ersten 100 Besteller - sichere dir jetzt dein Journal
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What's Inside Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Was ist im Journal enthalten?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Target className="w-10 h-10 text-[--primary-gold] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Persönliche Ziele</h3>
                <p className="text-gray-600">
                  Setze spirituelle Ziele und tracke deinen Fortschritt während der Umrah
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Dua-Listen</h3>
                <p className="text-gray-600">
                  Organisierte Listen für Familie, Freunde und die Ummah
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Calendar className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Tägliches Tagebuch</h3>
                <p className="text-gray-600">
                  Strukturierte Seiten für jeden Tag in Makkah und Medina
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Ziyarat Tracker</h3>
                <p className="text-gray-600">
                  Dokumentiere Besuche in Quba, Uhud, Baqi und mehr
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <PenTool className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Reflexion & Versprechen</h3>
                <p className="text-gray-600">
                  Halte deine Transformation und Versprechen an Allah fest
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Sparkles className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Besondere Momente</h3>
                <p className="text-gray-600">
                  Erste Kaaba-Sicht, Rawdah-Erfahrung und mehr
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Wähle dein Journal Package
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Limitiertes Launch-Angebot - nur für kurze Zeit!
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(packages).map(([key, pkg]) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.02 }}
                className={`relative ${pkg.popular ? 'md:-mt-4' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-[--primary-gold] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      BELIEBTESTE WAHL
                    </span>
                  </div>
                )}
                
                <Card className={`h-full ${pkg.popular ? 'border-2 border-[--primary-gold] shadow-xl' : 'border shadow-lg'}`}>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[--primary-gold] to-[--primary-gold-hover] text-white rounded-full mb-4">
                        {pkg.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-3xl font-bold text-[--primary-gold]">{pkg.price}€</span>
                        <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}€</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => handleOrder(key)}
                      disabled={isOrdering}
                      className={`w-full ${
                        pkg.popular 
                          ? 'bg-gradient-to-r from-[--primary-gold] to-[--primary-gold-hover] hover:from-[--primary-gold-hover] hover:to-[--primary-gold] text-white'
                          : 'bg-gray-800 hover:bg-gray-900 text-white'
                      } font-semibold py-3`}
                    >
                      {isOrdering ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-4 h-4" />
                          </motion.div>
                          Wird bearbeitet...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Jetzt bestellen
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Preview Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <div className="bg-gradient-to-r from-[--primary-gold] to-[--primary-gold-hover] text-white p-6">
            <h3 className="text-2xl font-bold text-center">📖 Journal Vorschau</h3>
          </div>
          <CardContent className="p-8">
            <div className="prose max-w-none">
              <div className="text-center mb-8">
                <p className="text-3xl mb-4" style={{ fontFamily: 'serif' }}>
                  بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ
                </p>
                <h2 className="text-2xl font-bold mb-2">MEIN UMRAH JOURNAL</h2>
                <p className="text-xl" style={{ fontFamily: 'serif' }}>رحلتي إلى العُمرة</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-lg mb-4">🎯 Meine persönlichen Ziele:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-[--primary-gold] rounded"></div>
                    <span>Jeden Fajr in der Haram beten</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-[--primary-gold] rounded"></div>
                    <span>Den Quran in den heiligen Stätten vollenden</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-[--primary-gold] rounded"></div>
                    <span>_________________________</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">🕋 Erste Sicht auf die Kaaba:</h3>
                <div className="space-y-3">
                  <p className="text-center italic">
                    "O Allah, mehre diesem Haus Ehre, Verherrlichung, Würde und Ehrfurcht"
                  </p>
                  <div className="border-b border-gray-300 pb-1">Meine Emotionen:</div>
                  <div className="border-b border-gray-300 pb-1"></div>
                  <div className="border-b border-gray-300 pb-1"></div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-600 mb-4">
                Dies ist nur eine kleine Vorschau - das vollständige Journal enthält über 50 Seiten!
              </p>
              <Button
                onClick={() => handleOrder('digital')}
                className="bg-gradient-to-r from-[--primary-gold] to-[--primary-gold-hover] hover:from-[--primary-gold-hover] hover:to-[--primary-gold] text-white font-semibold px-8 py-3"
              >
                <span className="flex items-center gap-2">
                  Vollständiges Journal bestellen
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Häufige Fragen
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Kann ich das Journal personalisieren lassen?
                </h3>
                <p className="text-gray-600">
                  Ja! Jedes Journal wird mit deinem Namen und deinen Reisedaten personalisiert. 
                  Bei der physischen Version wird dein Name sogar in Gold auf dem Cover geprägt.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Wie schnell erhalte ich das digitale Journal?
                </h3>
                <p className="text-gray-600">
                  Das digitale Journal erhältst du innerhalb von 24 Stunden nach Bestellung 
                  per E-Mail als PDF zum Download.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Ist das Journal auch für Hajj geeignet?
                </h3>
                <p className="text-gray-600">
                  Das Journal ist primär für Umrah konzipiert, kann aber mit kleinen Anpassungen 
                  auch für Hajj verwendet werden. Wir arbeiten bereits an einer speziellen Hajj-Version!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Gibt es eine Geld-zurück-Garantie?
                </h3>
                <p className="text-gray-600">
                  Ja! Wenn du mit dem Journal nicht zufrieden bist, erhältst du innerhalb von 
                  14 Tagen dein Geld zurück - ohne Fragen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Mache deine Umrah unvergesslich
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Über 500 Pilger haben bereits ihr Journal bestellt. 
              Sichere dir jetzt dein persönliches Umrah Journal zum Launch-Preis!
            </p>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
              </div>
              <p className="text-lg font-semibold mb-2">
                "Das Journal hat meine Umrah komplett verändert!"
              </p>
              <p className="opacity-90">
                - Fatima aus Frankfurt, Oktober 2024
              </p>
            </div>

            <Button
              onClick={() => handleOrder('physical')}
              size="lg"
              className="mt-8 bg-white text-[--midnight] hover:bg-gray-100 font-bold px-8 py-4 text-lg"
            >
              <span className="flex items-center gap-2">
                Journal jetzt bestellen
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}