"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Upload, 
  FileText, 
  Link as LinkIcon, 
  Eye, 
  PiggyBank, 
  ArrowRight,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export function PreisvergleichSection() {
  const [uploadMethod, setUploadMethod] = useState<'file' | 'link' | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-cream/30 via-white to-sand/20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="heading-1 mb-6">
            <span className="bg-gradient-to-r from-primary-gold to-gold-hover bg-clip-text text-transparent">
              Preisvergleich
            </span>
            <br />Ehrliches Feedback zu deinem Angebot
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Lade dein Umrah-Angebot hoch (PDF, Link oder Screenshot) und erhalte in 2 Minuten eine ehrliche Einschätzung mit konkretem Einsparpotenzial.
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 bg-white/60 rounded-lg p-4">
              <Eye className="w-6 h-6 text-primary-gold" />
              <span className="font-medium text-gray-700">100% Transparent</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 rounded-lg p-4">
              <PiggyBank className="w-6 h-6 text-green-600" />
              <span className="font-medium text-gray-700">Bis zu 700€ sparen</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              <span className="font-medium text-gray-700">Kostenlose Analyse</span>
            </div>
          </div>
        </motion.div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary-gold/20"
        >
          {!isUploaded ? (
            <>
              <h2 className="text-2xl font-bold text-dark-blue text-center mb-8">
                Wie möchtest du dein Angebot hochladen?
              </h2>

              {/* Upload Method Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setUploadMethod('file')}
                  className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${
                    uploadMethod === 'file' 
                      ? 'border-primary-gold bg-primary-gold/10' 
                      : 'border-gray-200 hover:border-primary-gold/50'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-primary-gold" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">PDF/Screenshot hochladen</h3>
                    <p className="text-gray-600 text-sm">
                      Lade dein Umrah-Angebot als PDF oder Screenshot hoch
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setUploadMethod('link')}
                  className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${
                    uploadMethod === 'link' 
                      ? 'border-primary-gold bg-primary-gold/10' 
                      : 'border-gray-200 hover:border-primary-gold/50'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <LinkIcon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Link einfügen</h3>
                    <p className="text-gray-600 text-sm">
                      Gib den Link zu deinem Online-Angebot ein
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Upload Interface */}
              {uploadMethod === 'file' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="border-2 border-dashed border-primary-gold/50 rounded-2xl p-8 text-center"
                >
                  <Upload className="w-12 h-12 text-primary-gold mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Datei hier ablegen oder klicken</h4>
                  <p className="text-gray-600 mb-4">PDF, PNG, JPG bis 10MB</p>
                  <Button className="cta-gold">
                    Datei auswählen
                  </Button>
                </motion.div>
              )}

              {uploadMethod === 'link' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4"
                >
                  <label className="block text-sm font-medium text-gray-700">
                    Angebot-Link einfügen
                  </label>
                  <input
                    type="url"
                    placeholder="https://beispiel-reisebüro.de/angebot/12345"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                  />
                  <Button 
                    className="w-full cta-gold"
                    onClick={() => setIsUploaded(true)}
                  >
                    Link analysieren
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              )}
            </>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">
                Analyse gestartet! 🎉
              </h3>
              <p className="text-gray-600 mb-6">
                Wir analysieren dein Angebot und senden dir das Ergebnis in wenigen Minuten per E-Mail und WhatsApp.
              </p>
              
              {/* What's Next */}
              <div className="bg-primary-gold/10 rounded-2xl p-6 text-left">
                <h4 className="font-semibold text-dark-blue mb-3">Was passiert jetzt?</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                    KI-Analyse deines Angebots (2-3 Minuten)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                    Preisvergleich mit 50+ Anbietern
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                    Detailliertes Feedback per E-Mail & WhatsApp
                  </li>
                </ul>
              </div>
              
              <Button className="mt-6 cta-gold" asChild>
                <a href="/angebote">
                  Unsere Live-Angebote ansehen
                </a>
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary-gold mb-2">2.500+</div>
              <div className="text-sm text-gray-600">Angebote analysiert</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-green-600 mb-2">€450</div>
              <div className="text-sm text-gray-600">Ø Ersparnis gefunden</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Zufriedenheitsrate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}