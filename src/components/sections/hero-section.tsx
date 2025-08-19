"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  Sparkles, 
  Globe, 
  Hotel, 
  Shield,
  Clock,
  TrendingUp,
  Users
} from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-sand to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-gold/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge 
              variant="secondary" 
              className="mb-6 px-4 py-2 text-sm bg-white/80 backdrop-blur-sm border-primary-gold/30 text-dark-blue"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Ehrlich • Transparent • Auf dich zugeschnitten
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-1 mb-6"
          >
            <span className="text-gray-900">✨ „</span>
            <span className="bg-gradient-to-r from-primary-gold via-gold-hover to-primary-gold bg-clip-text text-transparent"
              Die erste KI-Beratung für deine Umrah – ehrlich, transparent & auf dich zugeschnitten.
            </span>
            <span className="text-gray-900">" 🏛️</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Nie wieder Umrah im Blindflug buchen. Unsere KI prüft dein Angebot, vergleicht Alternativen und zeigt dir, wie du Geld sparst und besser reisen kannst – in nur 2 Minuten.
          </motion.p>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative max-w-2xl mx-auto mb-8"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black">
              {/* Video placeholder with play button */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group">
                  <div className="w-0 h-0 border-l-[16px] border-l-emerald-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="xl"
              className="cta-gold text-lg px-8 py-4 hover-lift"
              asChild
            >
              <Link href="/umrah-anfrage">
                JETZT TESTEN
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-dark-blue hover:bg-cream hover:border-dark-blue text-dark-blue hover-lift"
              asChild
            >
              <Link href="#how-it-works">
                So funktioniert's
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary-gold/20 flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-primary-gold" />
              </div>
              <span className="text-sm font-medium text-gray-700">100% Halal</span>
              <span className="text-xs text-gray-500">Zertifiziert</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">2 Minuten</span>
              <span className="text-xs text-gray-500">Schnelle Analyse</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-cyan-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Bis zu 30%</span>
              <span className="text-xs text-gray-500">Ersparnis</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary-gold/20 flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-primary-gold" />
              </div>
              <span className="text-sm font-medium text-gray-700">10.000+</span>
              <span className="text-xs text-gray-500">Zufriedene Pilger</span>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift hover-glow group cursor-pointer border border-primary-gold/20">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-gold to-gold-hover flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="heading-3 mb-2">Flugsuche</h3>
            <p className="body-regular">
              Wir finden die besten Flüge – passend zu deinem Budget und Zeitplan.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift hover-glow group cursor-pointer border border-primary-gold/20">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-gold to-gold-hover flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Hotel className="w-7 h-7 text-white" />
            </div>
            <h3 className="heading-3 mb-2">Hotelvergleich</h3>
            <p className="body-regular">
              Top-Hotels in Makkah & Medina – Entfernung zur Kaaba inklusive.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift hover-glow group cursor-pointer border border-primary-gold/20">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-gold to-gold-hover flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="heading-3 mb-2">Umrah-Tipps</h3>
            <p className="body-regular">
              Insider-Tricks & Spartipps – alles KI-optimiert für deine Reise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}