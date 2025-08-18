"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Clock, 
  Plane, 
  Hotel, 
  Calendar,
  Users,
  Shield,
  Sparkles,
  Timer,
  Phone,
  MessageCircle
} from 'lucide-react'

export default function AngebotDerWochePage() {
  // Countdown Timer (beispielhaft)
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 6) // 6 Tage ab heute

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-8">
        <div className="container mx-auto px-4">
          <Button variant="outline" asChild className="mb-6 border-white text-white hover:bg-white hover:text-emerald-600">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
          </Button>
          
          <div className="text-center">
            <Badge className="mb-4 bg-amber-500 text-white border-0 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Limitiertes Angebot
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Angebot der Woche
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Exklusive Umrah-Pakete mit bis zu 40% Rabatt – nur diese Woche!
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <Card className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Timer className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Nur noch 6 Tage verfügbar!</h2>
              </div>
              <p className="text-lg opacity-90">
                Sichere dir jetzt unser bestes Umrah-Angebot des Jahres
              </p>
              <div className="mt-6 grid grid-cols-4 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm">Tage</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm">Stunden</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">34</div>
                  <div className="text-sm">Minuten</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">56</div>
                  <div className="text-sm">Sekunden</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Hauptangebot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="overflow-hidden shadow-2xl border-amber-200">
            {/* Angebots-Badge */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-3">
              <span className="text-lg font-bold">🔥 40% RABATT - NUR DIESE WOCHE! 🔥</span>
            </div>

            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Bild */}
                <div className="relative h-64 lg:h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Umrah Premium Paket"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-600 text-white">
                      <Shield className="w-3 h-3 mr-1" />
                      100% Halal
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold text-emerald-700">2.299€</div>
                    <div className="text-sm text-gray-500 line-through">3.499€</div>
                    <div className="text-xs text-gray-600">pro Person</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Premium Umrah Paket Makkah & Medina
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    {/* Reisedauer */}
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700">14 Tage / 13 Nächte</span>
                    </div>
                    
                    {/* Datum */}
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700">März 2025 (verschiedene Termine)</span>
                    </div>

                    {/* Hotels */}
                    <div className="flex items-center gap-3">
                      <Hotel className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700">5⭐ Hotels in Makkah & Medina</span>
                    </div>
                    
                    {/* Entfernung */}
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700">200m zur Kaaba | 150m zur Prophetenmoschee</span>
                    </div>

                    {/* Flug */}
                    <div className="flex items-center gap-3">
                      <Plane className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700">Direktflug Frankfurt ⇄ Jeddah (Lufthansa)</span>
                    </div>

                    {/* Gruppe */}
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700">Kleine Gruppe (max. 20 Personen)</span>
                    </div>
                  </div>

                  {/* Bewertungen */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(4.9/5 - 127 Bewertungen)</span>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 text-lg"
                      asChild
                    >
                      <Link href="/umrah-anfrage">
                        Jetzt anfragen & 40% sparen!
                      </Link>
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-emerald-200 hover:bg-emerald-50"
                      asChild
                    >
                      <Link href="https://wa.me/4912345678901">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Beratung
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Was ist enthalten */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Was ist alles enthalten?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "✈️ Hin- und Rückflug",
                items: ["Direktflug Frankfurt ⇄ Jeddah", "Lufthansa Premium Economy", "23kg Freigepäck", "Flughafentransfers"]
              },
              {
                title: "🏨 Premium Hotels",
                items: ["5⭐ Hotel in Makkah (200m zur Kaaba)", "5⭐ Hotel in Medina (150m zur Prophetenmoschee)", "Vollpension", "Klimatisierte Zimmer"]
              },
              {
                title: "🕌 Umrah-Service",
                items: ["Deutschsprachige Reiseleitung", "Umrah-Ausführung mit Gruppe", "Ziyarat (Besichtigungen)", "24/7 Betreuung vor Ort"]
              },
              {
                title: "📋 Weitere Leistungen",
                items: ["Visa-Unterstützung", "Reiseversicherung", "Umrah-Handbuch", "WhatsApp Support-Gruppe"]
              }
            ].map((category, index) => (
              <Card key={index} className="shadow-lg border-emerald-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Warum dieses Angebot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-2xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6">Warum ist dieses Angebot so besonders?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl mb-3">💰</div>
                  <h3 className="text-xl font-semibold mb-2">Beste Preise</h3>
                  <p className="opacity-90">1.200€ Ersparnis gegenüber Einzelbuchung</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🏅</div>
                  <h3 className="text-xl font-semibold mb-2">Premium Qualität</h3>
                  <p className="opacity-90">Nur die besten 5⭐ Hotels direkt an den heiligen Stätten</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">👥</div>
                  <h3 className="text-xl font-semibold mb-2">Kleine Gruppe</h3>
                  <p className="opacity-90">Persönliche Betreuung in kleiner Reisegruppe</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bereit für deine spirituelle Reise?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nutze diese einmalige Gelegenheit und spare 1.200€ bei deiner Umrah-Reise. 
              Das Angebot ist nur noch 6 Tage verfügbar!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-4 px-8 text-lg"
                asChild
              >
                <Link href="/umrah-anfrage">
                  Jetzt 40% Rabatt sichern!
                </Link>
              </Button>
              
              <Button 
                size="xl"
                variant="outline"
                className="border-emerald-200 hover:bg-emerald-50 py-4 px-8"
                asChild
              >
                <Link href="tel:+4912345678901">
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </Link>
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              ⏰ Angebot gültig bis zum {endDate.toLocaleDateString('de-DE')} um 23:59 Uhr
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}