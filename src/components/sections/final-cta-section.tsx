"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Star,
  Users,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="islamic-cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <g fill="currentColor" fillOpacity="0.3">
                <circle cx="20" cy="20" r="2"/>
                <path d="M20 5 L30 15 L20 25 L10 15 Z"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-cta-pattern)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Arabic Text */}
              <div className="text-right mb-6">
                <p className="text-2xl md:text-3xl font-arabic text-amber-300 leading-relaxed">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
              </div>

              <h2 className="heading-2 mb-6 leading-tight !text-white">
                Bereit für eine sorgenfreie{' '}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Umrah-Reise?
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
                Starte jetzt mit deinem{' '}
                <span className="font-semibold text-white">Umrahcheck</span> – und erlebe, wie{' '}
                <span className="font-semibold text-amber-300">einfach, transparent und stressfrei</span>{' '}
                deine Umrah-Planung sein kann.
              </p>

              {/* Benefits List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Die besten Angebote, sparst Zeit und Geld",
                  "Kannst dich voll und ganz auf das Wesentliche konzentrieren",
                  "Deine spirituelle Reise wirklich verstehen"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                    <span className="text-emerald-100">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Your Advantage */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                <h3 className="text-xl font-bold text-amber-300 mb-3">Dein Vorteil:</h3>
                <p className="text-emerald-100 leading-relaxed">
                  Du bekommst die besten Angebote, sparst Zeit und Geld, und kannst dich voll und ganz auf das Wesentliche konzentrieren – deine spirituelle Reise.
                </p>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button
                  size="xl"
                  className="cta-gold text-black font-bold text-xl px-12 py-6 hover-lift"
                  asChild
                >
                  <Link href="/umrah-anfrage">
                    Jetzt Umrah-Angebot sichern
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-emerald-300" />
                  </div>
                  <p className="text-sm text-emerald-200">100% Halal</p>
                  <p className="text-xs text-emerald-300">Zertifiziert</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-blue-300" />
                  </div>
                  <p className="text-sm text-blue-200">2 Minuten</p>
                  <p className="text-xs text-blue-300">Schnell</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-amber-300" />
                  </div>
                  <p className="text-sm text-amber-200">10.000+</p>
                  <p className="text-xs text-amber-300">Pilger</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Kaaba Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-300/50">
                <img 
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Holy Kaaba in Makkah"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-2xl"
              >
                <Star className="w-8 h-8 text-amber-500" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-2xl"
              >
                <Sparkles className="w-8 h-8 text-emerald-500" />
              </motion.div>

              {/* Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="text-gray-800 font-medium text-sm leading-relaxed">
                  "Die beste Investition für deine spirituelle Reise. Transparent, ehrlich und auf dich zugeschnitten."
                </p>
                <div className="flex items-center gap-2 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-gray-600 ml-2">Verifizierte Bewertung</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}