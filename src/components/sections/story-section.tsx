"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Heart, 
  Eye, 
  PiggyBank, 
  Users, 
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Play,
  ArrowRight,
  Quote,
  Star,
  Globe,
  Shield
} from 'lucide-react';

const problems = [
  {
    icon: Eye,
    title: 'Keine Transparenz',
    description: 'Unklare Preise, versteckte Zusatzkosten'
  },
  {
    icon: PiggyBank,
    title: 'Überhöhte Summen',
    description: 'Familien zahlen 600–700€ mehr, ohne es zu merken'
  },
  {
    icon: Users,
    title: 'Unklare Gruppengrößen',
    description: 'Man weiß nicht, mit wie vielen Leuten man unterwegs ist'
  },
  {
    icon: AlertTriangle,
    title: 'Schwache Organisation',
    description: 'Stress vor Abflug, chaotische Abläufe vor Ort'
  }
];

const solutions = [
  {
    icon: Lightbulb,
    title: 'KI-Technologie',
    description: 'Schnelle Preisvergleiche & optimale Angebote'
  },
  {
    icon: Heart,
    title: 'Persönliche Erfahrung',
    description: 'Leben in Medina & dutzende Umrah-Erfahrungen'
  },
  {
    icon: Shield,
    title: 'Ehrliche Aufklärung',
    description: 'Jedes Angebot aufgeschlüsselt: Flug, Hotel, Visa, Transfers'
  }
];

const benefits = [
  'Individuelles Angebot in wenigen Minuten',
  'Klare Preisvergleiche statt leeren Versprechen',
  'Ersparnisse von bis zu 700€ pro Familie',
  'Antworten auf alle Fragen, ohne versteckte Hintergedanken'
];

export function StorySection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6">
              Unsere Story – Warum es{' '}
              <span className="bg-gradient-to-r from-primary-gold to-gold-hover bg-clip-text text-transparent">
                UmrahCheck
              </span>{' '}
              gibt
            </h1>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Globe className="w-6 h-6 text-primary-gold" />
              <p className="text-xl text-primary-gold font-semibold">
                Von Medina aus für die Ummah
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text Content */}
              <div>
                <div className="bg-primary-gold/10 rounded-lg p-1 inline-block mb-6">
                  <p className="text-primary-gold font-semibold px-4 py-2">
                    Assalamu alaikum liebe Geschwister,
                  </p>
                </div>
                
                <h2 className="text-3xl font-bold text-dark-blue mb-6">
                  Mein Name ist Mustafa Ali
                </h2>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Seit über <strong className="text-primary-gold">5 Jahren</strong> lebe ich in Medina, 
                    direkt in der Prophetenstadt ﷺ. In dieser Zeit durfte ich bereits{' '}
                    <strong className="text-primary-gold">40–50 Umrahs</strong> verrichten.
                  </p>
                  
                  <p>
                    Dabei habe ich aus erster Hand gesehen, wie wunderschön diese Reise ist – 
                    aber auch, wie viele Probleme Muslime immer wieder erleben.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center bg-cream/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary-gold mb-1">5+</div>
                    <div className="text-sm text-gray-600">Jahre in Medina</div>
                  </div>
                  <div className="text-center bg-cream/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary-gold mb-1">40-50</div>
                    <div className="text-sm text-gray-600">Umrahs verrichtet</div>
                  </div>
                </div>
              </div>

              {/* Image/Video Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary-gold/20 via-sand/30 to-cream shadow-2xl">
                  {/* Placeholder for Mustafa's image */}
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Location Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary-gold" />
                    <span className="text-sm font-medium text-dark-blue">Medina, Saudi Arabia</span>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group">
                      <Play className="w-8 h-8 text-primary-gold ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-gold rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gold-hover rounded-full opacity-10"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-6">
                ❌ Die Probleme mit klassischen Umrah-Angeboten
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Viele Geschwister buchen ihre Umrah bei Reiseveranstaltern und stoßen 
                immer wieder auf die gleichen Schwierigkeiten:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-red-100"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-2xl p-8 border border-red-200"
            >
              <h3 className="text-xl font-bold text-red-800 mb-4">Das Ergebnis:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-red-700">Weniger Zeit für Ibada (Anbetung)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-red-700">Mehr Stress und Sorgen</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-red-700">Enttäuschung über eine spirituelle Reise</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-6">
                ✅ Die Vision von{' '}
                <span className="bg-gradient-to-r from-primary-gold to-gold-hover bg-clip-text text-transparent">
                  UmrahCheck
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Genau deshalb habe ich UmrahCheck gegründet. Unser Ziel ist es, 
                die erste wirklich faire und transparente Plattform für Umrah-Angebote zu schaffen.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary-gold/10 to-gold-hover/5 rounded-2xl p-6 border border-primary-gold/20"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-gold to-gold-hover rounded-2xl flex items-center justify-center mb-4">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-blue mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-cream/30 to-sand/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-6">💡 Was du von uns bekommst</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-gold" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary-gold/20 text-center"
            >
              <Quote className="w-12 h-12 text-primary-gold mx-auto mb-4" />
              <blockquote className="text-xl font-medium text-dark-blue mb-4">
                "Eine Reise zu Allah darf niemals ein Geschäft auf Kosten der Gläubigen sein."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ✨ Unsere Mission
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Wir wollen die Umrah für deutschsprachige Muslime{' '}
                <span className="text-primary-gold font-semibold">einfacher</span>,{' '}
                <span className="text-primary-gold font-semibold">transparenter</span> und{' '}
                <span className="text-primary-gold font-semibold">barakah-voller</span> machen.
              </p>
              <p className="text-lg text-gray-300">
                Jeder Muslim soll die Möglichkeit haben, diese Reise stressfrei 
                und zu einem fairen Preis zu erleben.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-6">📹 Unsere Story in Videoform</h2>
              <p className="text-lg text-gray-600">
                Damit du mich auch persönlich kennenlernst, habe ich ein kurzes Video aufgenommen, 
                in dem ich dir direkt aus Medina erzähle, warum wir UmrahCheck gestartet haben.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black"
            >
              {/* Video placeholder */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 bg-primary-gold hover:bg-gold-hover rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group">
                  <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              
              {/* Video Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-semibold text-dark-blue">Mustafa Ali aus Medina</h3>
                  <p className="text-sm text-gray-600">Die Geschichte hinter UmrahCheck</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-gold/10 via-cream/20 to-sand/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6">
                👉 Bereit für deine sorgenfreie Umrah?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Lass uns gemeinsam deine Umrah planen – transparent, fair und mit der Erfahrung 
                von jemandem, der selbst in Medina lebt.
              </p>
              
              <Button
                size="xl"
                className="cta-gold text-lg px-12 py-4 hover-lift group"
                asChild
              >
                <a href="/umrah-anfrage">
                  Jetzt dein Angebot starten
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}