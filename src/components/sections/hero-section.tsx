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
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
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
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl"
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
              className="mb-6 px-4 py-2 text-sm bg-white/80 backdrop-blur-sm border-emerald-200 text-emerald-700"
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Die erste KI-Beratung
            </span>
            <br />
            <span className="text-gray-900">für deine Umrah</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Unsere KI prüft dein Angebot, vergleicht Alternativen und zeigt dir in{' '}
            <span className="font-semibold text-emerald-600">unter 2 Minuten</span>, 
            wie du Geld sparst und besser reist.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="xl"
              className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
              asChild
            >
              <Link href="/hotels">
                Jetzt Hotels entdecken
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300"
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
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-emerald-600" />
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
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-emerald-600" />
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow group cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Flugsuche</h3>
            <p className="text-gray-600">
              Wir finden die besten Flüge – passend zu deinem Budget und Zeitplan.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow group cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Hotel className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Hotelvergleich</h3>
            <p className="text-gray-600">
              Top-Hotels in Makkah & Medina – Entfernung zur Kaaba inklusive.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow group cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Umrah-Tipps</h3>
            <p className="text-gray-600">
              Insider-Tricks & Spartipps – alles KI-optimiert für deine Reise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}