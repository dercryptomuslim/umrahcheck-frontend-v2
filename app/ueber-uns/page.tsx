"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Heart, 
  Users, 
  Globe, 
  Award,
  CheckCircle,
  Star,
  Shield,
  Clock,
  MapPin
} from 'lucide-react'

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <Button variant="outline" asChild className="mb-6 border-white text-white hover:bg-white hover:text-emerald-600">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
          </Button>
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Über UmrahCheck</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Deine vertrauensvolle Plattform für die perfekte Umrah-Reise - 
              mit KI-gestützter Beratung und jahrelanger Expertise.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="shadow-xl border-emerald-100">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Unsere Mission</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    Bei UmrahCheck haben wir es uns zur Aufgabe gemacht, jeden Muslim dabei zu unterstützen, 
                    seine spirituelle Reise nach Makkah und Medina optimal zu planen und durchzuführen.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Wir verstehen, dass die Umrah eine der wichtigsten Reisen im Leben eines Muslims ist. 
                    Deshalb kombinieren wir modernste KI-Technologie mit jahrelanger Branchenerfahrung, 
                    um dir die bestmöglichen Angebote und Empfehlungen zu bieten.
                  </p>
                  <div className="flex items-center gap-2 text-emerald-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">100% Halal & Vertrauenswürdig</span>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Kaaba in Makkah"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Werte Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Unsere Werte</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Vertrauen",
                description: "Transparenz und Ehrlichkeit in allen unseren Empfehlungen und Partnerschaften."
              },
              {
                icon: Award,
                title: "Qualität",
                description: "Nur die besten und vertrauenswürdigsten Reiseanbieter in unserem Netzwerk."
              },
              {
                icon: Heart,
                title: "Betreuung",
                description: "Persönliche Unterstützung von der ersten Anfrage bis zur Rückkehr."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center shadow-lg border-emerald-100 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Statistiken */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8">UmrahCheck in Zahlen</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">5000+</div>
                  <div className="text-sm opacity-90">Zufriedene Kunden</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">150+</div>
                  <div className="text-sm opacity-90">Partneranbieter</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">4.8/5</div>
                  <div className="text-sm opacity-90">Kundenbewertung</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-90">Support verfügbar</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Unser Team</h2>
          
          <Card className="shadow-xl border-emerald-100">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expertise trifft auf Leidenschaft</h3>
                  <p className="text-gray-700 mb-4">
                    Unser Team besteht aus erfahrenen Reiseexperten, KI-Spezialisten und praktizierenden 
                    Muslimen, die selbst mehrfach die Umrah durchgeführt haben.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Diese einzigartige Kombination aus technischer Expertise und persönlicher Erfahrung 
                    ermöglicht es uns, dir die bestmögliche Beratung zu bieten.
                  </p>
                  
                  <div className="space-y-3">
                    {[
                      "Mehrsprachige Beratung (Deutsch, Englisch, Arabisch)",
                      "Persönliche Umrah-Erfahrung aller Berater",
                      "Kontinuierliche Weiterbildung und Marktanalyse"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Unser Team bei der Arbeit"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technologie */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Innovative Technologie</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-lg border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-gray-900">KI-gestützte Analyse</h3>
                </div>
                <p className="text-gray-700">
                  Unsere KI analysiert Millionen von Datenpunkten, um dir die perfekt 
                  auf deine Bedürfnisse zugeschnittenen Angebote zu präsentieren.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Echtzeitvergleich</h3>
                </div>
                <p className="text-gray-700">
                  Preise und Verfügbarkeiten werden in Echtzeit verglichen, damit du 
                  immer die aktuellsten und besten Angebote erhältst.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto shadow-2xl border-amber-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Bereit für deine Umrah-Reise?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Lass uns gemeinsam deine perfekte spirituelle Reise planen. 
                Kostenlos, unverbindlich und mit persönlicher Betreuung.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3"
                  asChild
                >
                  <Link href="/umrah-anfrage">
                    Kostenlose Beratung starten
                  </Link>
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-emerald-200 hover:bg-emerald-50 px-8 py-3"
                  asChild
                >
                  <Link href="/kontakt">
                    Kontakt aufnehmen
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}