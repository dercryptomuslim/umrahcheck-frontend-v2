"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Share,
  Brain,
  Calculator,
  Eye,
  ShoppingCart,
  ArrowDown,
  MessageSquare,
  Target,
  Zap
} from 'lucide-react'

const steps = [
  {
    number: "01",
    icon: Share,
    title: "Teile uns deine Umrah-Wünsche mit",
    description: "Teile uns deine gewünschten Reisedaten, dein Budget, die Gruppengröße, Unterkunftswünsche und besondere Anliegen mit. Wir möchten deine individuelle optimale Reise wirklich verstehen.",
    color: "bg-blue-500",
    gradient: "from-emerald-600 to-emerald-700"
  },
  {
    number: "02", 
    icon: Brain,
    title: "Intelligente Umrah-Auswahl",
    description: "Unsere KI durchsucht in Sekunden zentrale Anbieter und findet die besten Umrah-Optionen passend zu deinen Bedürfnissen. So sparst du die stundenlange Recherche.",
    color: "bg-purple-500",
    gradient: "from-emerald-600 to-emerald-700"
  },
  {
    number: "03",
    icon: Calculator,
    title: "Transparente Preisübersicht",
    description: "Du erhältst eine klare Übersicht der besten Angebote – keine versteckten Kosten, keine bösen Überraschungen. Wir stehen für volle Transparenz und faire Preise.",
    color: "bg-emerald-500",
    gradient: "from-emerald-600 to-emerald-700"
  },
  {
    number: "04",
    icon: Eye,
    title: "Alle Infos an einem Ort",
    description: "Mit unserem digitalen Umrah-Angebot hast du alle relevanten Infos, Empfehlungen und die transparenten Preise für dein passendes Paket (d. h. Einzelzimmer, Familie, Gruppe) übersichtlich und jederzeit abrufbar – perfekt vorbereitet, ohne Papierkram und Unsicherheiten.",
    color: "bg-cyan-500",
    gradient: "from-emerald-600 to-emerald-700"
  },
  {
    number: "05",
    icon: ShoppingCart,
    title: "Sicher und einfach buchen",
    description: "Buche dein persönliches Umrah-Angebot direkt und bequem über unsere Plattform. 100 % transparent, keine versteckten Kosten – sichere Zahlung buch über einen verifizierten Anbieter (Google pay). Nach dem Kauf bekommst du alle Infos, Kontakte und Unterlagen digital. So bist du perfekt vorbereitet und kannst dich voll auf deine Reise konzentrieren.",
    color: "bg-amber-500",
    gradient: "from-amber-500 to-amber-600"
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
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
            So funktioniert's
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Von der Anfrage bis zur gebuchten Umrah-Reise – in nur 5 einfachen Schritten
          </motion.p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="mb-8 overflow-hidden hover-lift hover-glow group border-emerald-100">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Left side - Icon & Number */}
                      <div className="lg:w-1/3 p-8 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center text-center">
                        <div className="relative mb-4">
                          <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                            <step.icon className="w-10 h-10 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-200">
                            <span className="text-xs font-bold text-gray-700">{step.number}</span>
                          </div>
                        </div>
                        <div className="hidden lg:block">
                          <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm">
                            <MessageSquare className="w-6 h-6 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      {/* Right side - Content */}
                      <div className="lg:w-2/3 p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                          Schritt {step.number}
                        </h3>
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {step.description}
                        </p>
                        
                        {/* Progress indicators */}
                        <div className="mt-6 flex items-center gap-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                i <= index 
                                  ? 'bg-emerald-500 shadow-sm' 
                                  : 'bg-gray-200'
                              }`} 
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-500 font-medium">
                            {index + 1} von {steps.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Connecting Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex justify-center mb-8"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shadow-sm">
                    <ArrowDown className="w-6 h-6 text-emerald-600" />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-7 h-7 text-emerald-600" />
            </div>
            <h4 className="text-3xl font-bold text-emerald-700 mb-2">2 Minuten</h4>
            <p className="text-gray-600 font-medium">Durchschnittliche Bearbeitungszeit</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-7 h-7 text-blue-600" />
            </div>
            <h4 className="text-3xl font-bold text-blue-700 mb-2">98%</h4>
            <p className="text-gray-600 font-medium">Zufriedenheitsrate unserer Pilger</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-7 h-7 text-amber-600" />
            </div>
            <h4 className="text-3xl font-bold text-amber-700 mb-2">€2.847</h4>
            <p className="text-gray-600 font-medium">Durchschnittliche Ersparnis pro Familie</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}