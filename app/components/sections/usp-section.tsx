"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  PiggyBank, 
  Zap, 
  Settings, 
  MapPin,
  CheckCircle,
  Euro,
  Brain,
  Users
} from 'lucide-react';

const uspItems = [
  {
    icon: Eye,
    title: '100% Transparenz',
    description: 'Keine versteckten Kosten, ehrliche Preisaufschlüsselung',
    highlight: 'Vertrauen',
    color: 'from-primary-gold to-gold-hover'
  },
  {
    icon: Euro,
    title: 'Ersparnis bis zu 700€',
    description: 'Pro Familie - direkt aus echten Umrah-Erfahrungen',
    highlight: 'Proven Results',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Brain,
    title: 'KI-gestützte Angebote',
    description: 'Flüge + Hotels in Sekunden optimiert',
    highlight: 'Smart Technology',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Settings,
    title: 'Flexibel & individuell',
    description: 'Du entscheidest Aufenthaltsdauer, Hotels, Budget',
    highlight: 'Your Choice',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: MapPin,
    title: 'Echte Erfahrung',
    description: 'Gründer lebt in Medina, 40–50 Umrahs persönlich',
    highlight: 'Real Experience',
    color: 'from-orange-500 to-orange-600'
  }
];

export function USPSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-sand/30 via-cream/20 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            Warum <span className="bg-gradient-to-r from-primary-gold to-gold-hover bg-clip-text text-transparent">
              UmrahCheck
            </span> die richtige Wahl ist
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vertrauen, Transparenz und echte Ersparnis – basierend auf jahrelanger Umrah-Erfahrung
          </p>
        </motion.div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {uspItems.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift hover-glow border border-primary-gold/20 h-full flex flex-col">
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${usp.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <usp.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Highlight Badge */}
                  <div className="absolute -top-2 -right-2 bg-primary-gold text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-dark-blue mb-2">
                    {usp.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {usp.description}
                  </p>
                  
                  {/* Highlight Tag */}
                  <div className="inline-flex items-center gap-1 bg-primary-gold/10 text-primary-gold text-xs font-semibold px-3 py-1 rounded-full">
                    {usp.highlight}
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-gold-hover/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-gold mb-1">10.000+</div>
            <div className="text-sm text-gray-600">Zufriedene Pilger</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-gold mb-1">€700</div>
            <div className="text-sm text-gray-600">Ø Ersparnis Familie</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-gold mb-1">2 Min</div>
            <div className="text-sm text-gray-600">Analyse-Zeit</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-gold mb-1">100%</div>
            <div className="text-sm text-gray-600">Halal zertifiziert</div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Bereit für ehrliche Umrah-Beratung ohne versteckte Kosten?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/umrah-anfrage"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-gold to-gold-hover text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Zap className="w-5 h-5" />
              Jetzt kostenlos starten
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}