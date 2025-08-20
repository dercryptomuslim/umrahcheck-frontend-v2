"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { 
  Plane, 
  Hotel, 
  Lightbulb, 
  Clock,
  TrendingDown,
  MapPin,
  Shield,
  Smartphone,
  Zap
} from 'lucide-react'

const features = [
  {
    icon: Plane,
    title: "Flugsuche",
    subtitle: "🛫 Blitzschnell den besten Flug finden",
    description: "Wir vergleichen hunderte Flüge – du bekommst sofort das passende Umrah-Angebot nach deinen Wünschen.",
    benefits: [
      "Beste Preise garantiert",
      "Flexible Daten verfügbar", 
      "Direktflüge bevorzugt"
    ],
    gradient: "from-primary-gold to-gold-hover"
  },
  {
    icon: Hotel,
    title: "Hotelvergleich", 
    subtitle: "🏨 Top-Hotels direkt an der Kaaba vergleichen",
    description: "Nur die besten Hotels in Makkah & Medina – geprüft, transparent & perfekt für dein Budget.",
    benefits: [
      "Entfernung zur Kaaba inklusive",
      "Halal-zertifizierte Hotels",
      "Echte Bewertungen"
    ],
    gradient: "from-primary-gold to-gold-hover"
  },
  {
    icon: Lightbulb,
    title: "Umrah-Tipps",
    subtitle: "✨ Exklusive Tipps & Angebote",
    description: "Insider-Tricks, wie du Zeit & Geld sparst – alles KI-optimiert und explizit für dich.",
    benefits: [
      "Spirituelle Reisetipps",
      "Geld-spar-Tricks",
      "Beste Reisezeiten"
    ],
    gradient: "from-primary-gold to-gold-hover"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="heading-2 mb-6"
          >
            Alles, was du brauchst, in einem smarten{' '}
            <span className="bg-gradient-to-r from-primary-gold to-gold-hover bg-clip-text text-transparent">
              Umrah-KI-Assistenten
            </span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {/* Left Side - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover-lift hover-glow group border-primary-gold/20">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-sm text-primary-gold font-medium mb-3">{feature.subtitle}</p>
                        <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 bg-primary-gold rounded-full" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Side - App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-80 h-[640px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-6 bg-gray-50 flex items-center justify-between px-6 text-xs font-medium text-gray-700">
                    <span>9:41</span>
                    <span>UmrahCheck</span>
                    <span>100%</span>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-gray-900">Deine Umrah-Planung</h4>
                      <p className="text-sm text-gray-600">Personalisiert & KI-optimiert</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-primary-gold/10 rounded-lg p-3 text-center">
                        <Clock className="w-5 h-5 text-primary-gold mx-auto mb-1" />
                        <p className="text-xs font-semibold text-primary-gold">2 Min</p>
                        <p className="text-xs text-gray-600">Analyse</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <TrendingDown className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <p className="text-xs font-semibold text-blue-700">30%</p>
                        <p className="text-xs text-gray-600">Ersparnis</p>
                      </div>
                      <div className="bg-primary-gold/10 rounded-lg p-3 text-center">
                        <Shield className="w-5 h-5 text-primary-gold mx-auto mb-1" />
                        <p className="text-xs font-semibold text-primary-gold">100%</p>
                        <p className="text-xs text-gray-600">Halal</p>
                      </div>
                    </div>

                    {/* Hotel Card Example */}
                    <div className="bg-gradient-to-r from-cream/50 to-sand/50 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Hotel className="w-6 h-6 text-primary-gold" />
                        <div>
                          <h5 className="font-semibold text-gray-900 text-sm">Makkah Royal Clock Tower</h5>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <MapPin className="w-3 h-3" />
                            <span>50m zur Kaaba</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-primary-gold">€299</span>
                        <span className="text-xs bg-primary-gold/20 text-primary-gold px-2 py-1 rounded-full">Bestseller</span>
                      </div>
                    </div>

                    {/* Flight Card Example */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Plane className="w-6 h-6 text-blue-600" />
                        <div>
                          <h5 className="font-semibold text-gray-900 text-sm">Frankfurt → Jeddah</h5>
                          <p className="text-xs text-gray-600">Direktflug • 6h 15min</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-blue-700">€456</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Bester Preis</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
                    <div className="flex justify-center">
                      <div className="bg-primary-gold text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Jetzt kostenlos testen
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around phone */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <Smartphone className="w-6 h-6 text-primary-gold" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <Shield className="w-6 h-6 text-primary-gold" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="xl"
            className="cta-gold-large hover-lift"
            asChild
          >
            <Link href="/lp">
              <Zap className="h-5 w-5" />
              Jetzt kostenlos starten
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}