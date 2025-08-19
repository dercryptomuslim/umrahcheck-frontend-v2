"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Shield,
  FileText,
  HelpCircle,
  Star,
  Plane,
  Hotel,
  Lightbulb
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-midnight text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-gold to-gold-hover rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🕌</span>
                </div>
                <span className="text-2xl font-bold">UMRAHCHECK</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Die erste KI-Beratung für deine Umrah – ehrlich, transparent & auf dich zugeschnitten.
              </p>
              <div className="flex items-center gap-2 text-primary-gold">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">100% Halal zertifiziert</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-white mb-3">Folge uns</h4>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 hover:bg-primary-gold hover:border-primary-gold text-gray-300 hover:text-white"
                  asChild
                >
                  <Link href="#" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 hover:bg-primary-gold hover:border-primary-gold text-gray-300 hover:text-white"
                  asChild
                >
                  <Link href="#" aria-label="Instagram">
                    <Instagram className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 hover:bg-primary-gold hover:border-primary-gold text-gray-300 hover:text-white"
                  asChild
                >
                  <Link href="#" aria-label="Twitter">
                    <Twitter className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-6">Unsere Services</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/flugsuche" 
                  className="flex items-center gap-2 text-gray-300 hover:text-primary-gold transition-colors group"
                >
                  <Plane className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Flugsuche
                </Link>
              </li>
              <li>
                <Link 
                  href="/hotels" 
                  className="flex items-center gap-2 text-gray-300 hover:text-primary-gold transition-colors group"
                >
                  <Hotel className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Hotelvergleich
                </Link>
              </li>
              <li>
                <Link 
                  href="/umrah-tipps" 
                  className="flex items-center gap-2 text-gray-300 hover:text-primary-gold transition-colors group"
                >
                  <Lightbulb className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Umrah-Tipps
                </Link>
              </li>
              <li>
                <Link 
                  href="/angebot-der-woche" 
                  className="flex items-center gap-2 text-gray-300 hover:text-primary-gold transition-colors group"
                >
                  <Star className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Angebot der Woche
                </Link>
              </li>
              <li>
                <Link 
                  href="/umrah-anfrage" 
                  className="flex items-center gap-2 text-primary-gold hover:text-gold-hover transition-colors font-medium group"
                >
                  <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Kostenlose Beratung
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-6">Support & Info</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/ueber-uns" 
                  className="text-gray-300 hover:text-primary-gold transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link 
                  href="/kontakt" 
                  className="text-gray-300 hover:text-primary-gold transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="flex items-center gap-2 text-gray-300 hover:text-primary-gold transition-colors group"
                >
                  <HelpCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Häufige Fragen
                </Link>
              </li>
              <li>
                <Link 
                  href="/bewertungen" 
                  className="text-gray-300 hover:text-primary-gold transition-colors"
                >
                  Kundenbewertungen
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-300 hover:text-primary-gold transition-colors"
                >
                  Umrah Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-gold flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p className="font-medium">UmrahCheck GmbH</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Berlin, Deutschland</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-gold" />
                <Link 
                  href="tel:+4912345678901" 
                  className="text-gray-300 hover:text-primary-gold transition-colors"
                >
                  +49 123 456 789 01
                </Link>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-gold" />
                <Link 
                  href="mailto:info@umrahcheck.com" 
                  className="text-gray-300 hover:text-primary-gold transition-colors"
                >
                  info@umrahcheck.com
                </Link>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-gold flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Öffnungszeiten:</p>
                  <p>Mo-Fr: 9:00 - 18:00 Uhr</p>
                  <p>Sa: 10:00 - 16:00 Uhr</p>
                  <p>So: Geschlossen</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <Button
                className="bg-green-600 hover:bg-green-700 text-white mt-4 w-full"
                asChild
              >
                <Link href="https://wa.me/4912345678901">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} UmrahCheck GmbH. Alle Rechte vorbehalten.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link 
                href="/impressum" 
                className="text-gray-400 hover:text-primary-gold transition-colors flex items-center gap-1"
              >
                <FileText className="w-3 h-3" />
                Impressum
              </Link>
              <Link 
                href="/datenschutz" 
                className="text-gray-400 hover:text-primary-gold transition-colors flex items-center gap-1"
              >
                <Shield className="w-3 h-3" />
                Datenschutz
              </Link>
              <Link 
                href="/agb" 
                className="text-gray-400 hover:text-primary-gold transition-colors flex items-center gap-1"
              >
                <FileText className="w-3 h-3" />
                AGB
              </Link>
              <Link 
                href="/widerruf" 
                className="text-gray-400 hover:text-primary-gold transition-colors"
              >
                Widerruf
              </Link>
              <Link 
                href="/cookies" 
                className="text-gray-400 hover:text-primary-gold transition-colors"
              >
                Cookie-Einstellungen
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Shield className="w-4 h-4 text-primary-gold" />
                <span>SSL gesichert</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Star className="w-4 h-4 text-amber-400" />
                <span>Halal zertifiziert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}