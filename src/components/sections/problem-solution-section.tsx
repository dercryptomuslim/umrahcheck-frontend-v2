"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  AlertTriangle,
  Clock,
  Shield,
  CheckCircle,
  Eye,
  DollarSign,
  TrendingUp,
  Users
} from 'lucide-react'

const problems = [
  {
    number: "1.",
    title: "Ist dein Angebot wirklich fair?",
    description: "Anbieter versprechen viel. Aber weißt du, ob du ein Hotel überbezahlst – oder ob der Reiseanbieter Flug hunderte Euro mehr kostet? Bei uns gibt's kein Blindflug.",
    icon: DollarSign,
    color: "text-red-600"
  },
  {
    number: "2.",
    title: "Du recherchierst stundenlang und bleibst trotzdem unsicher.",
    description: "Webseiten, Foren, Instagram – alles klingt gut, aber passt es wirklich zu deinem Budget? Zu deiner Familie? Zu deinen Zielen zeitnah?",
    icon: Clock,
    color: "text-orange-600"
  },
  {
    number: "3.",
    title: "Du willst Sicherheit für deine heilige Reise.",
    description: "Umrah ist mehr als Urlaub – es ist eine spirituelle Erfahrung. Versteckte Kosten oder schlechte Hotels können deine heilige Erfahrung ruinieren.",
    icon: Shield,
    color: "text-yellow-600"
  }
]

const solutions = [
  {
    icon: CheckCircle,
    title: "Unsere Lösung:",
    description: "Umrah ist nicht objektive Preise, Qualität und mögliche Einsparungen bis bekommst Empfehlungen, die wirklich zu dir passen."
  },
  {
    icon: Eye,
    title: "Unsere Lösung:",
    description: "Sag uns, was du brauchst – unsere KI durchsucht in Sekunden genau Anbieter und findet die besten Empfehlungen, die wirklich zu dir passen."
  },
  {
    icon: Shield,
    title: "Unsere Lösung:",
    description: "Umrah ist nicht einfach, ehrlich und transparent. Wir Vertrauen und Achtsamkeit bis wichtiger ein wichtiger ist."
  }
]

export function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <g fill="#D97706" fillOpacity="0.3">
                <circle cx="25" cy="25" r="3"/>
                <path d="M25 5 L35 20 L25 35 L15 20 Z"/>
                <path d="M5 25 L20 35 L35 25 L20 15 Z"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)"/>
        </svg>
      </div>

      {/* Decorative Islamic Geometric Shapes */}
      <div className="absolute left-0 top-1/4 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-amber-600">
          <g fill="currentColor">
            <path d="M100 20 L160 60 L140 120 L60 120 L40 60 Z" fillOpacity="0.3"/>
            <path d="M100 40 L140 70 L130 110 L70 110 L60 70 Z" fillOpacity="0.5"/>
            <circle cx="100" cy="80" r="20" fillOpacity="0.7"/>
          </g>
        </svg>
      </div>

      <div className="absolute right-0 bottom-1/4 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-amber-600">
          <g fill="currentColor">
            <path d="M100 20 L160 60 L140 120 L60 120 L40 60 Z" fillOpacity="0.3"/>
            <path d="M100 40 L140 70 L130 110 L70 110 L60 70 Z" fillOpacity="0.5"/>
            <circle cx="100" cy="80" r="20" fillOpacity="0.7"/>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Warum brauchst du einen{' '}
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Umrah-Check?
            </span>
          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Problems Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="inline-block bg-amber-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-6">
                  Probleme
                </div>
              </motion.div>

              <div className="space-y-8">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className={`w-12 h-12 rounded-full bg-red-100 flex items-center justify-center ${problem.color}`}>
                              <problem.icon className="w-6 h-6" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {problem.number} {problem.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {problem.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Solutions Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-6">
                  Lösungen
                </div>
              </motion.div>

              <div className="space-y-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 bg-white/90 backdrop-blur-sm border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                              <solution.icon className="w-6 h-6" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-emerald-700 mb-2">
                              ✅ {solution.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {solution.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Bereit für eine entspannte Umrah-Planung?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lass unsere KI deine Reise optimieren – transparent, ehrlich und perfekt auf dich zugeschnitten.
              </p>
              <Button
                size="xl"
                className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-12 py-4"
              >
                Jetzt kostenlos prüfen
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}