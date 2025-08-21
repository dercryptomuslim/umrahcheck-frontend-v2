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
  Lightbulb,
  Youtube,
  Music
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
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🕌</span>
                </div>
                <span className="text-2xl font-bold">UMRAHCHECK</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Die erste KI-Beratung für deine Umrah – ehrlich, transparent & auf dich zugeschnitten.
              </p>
              <div className="flex items-center gap-2 text-emerald-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">100% Halal zertifiziert</span>
              </div>
            </div>

            {/* Social Media - Coming Soon */}
            <div>
              <h4 className="font-semibold text-white mb-3">Folge uns</h4>
              <div className="flex gap-2 flex-wrap">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 hover:bg-emerald-600 hover:border-emerald-600 text-gray-300 hover:text-white opacity-50"
                  disabled
                  title="Coming Soon"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 hover:bg-emerald-600 hover:border-emerald-600 text-gray-300 hover:text-white opacity-50"
                  disabled
                  title="Coming Soon"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 hover:bg-emerald-600 hover:border-emerald-600 text-gray-300 hover:text-white opacity-50"
                  disabled
                  title="Coming Soon"
                >
                  <Music className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 hover:bg-emerald-600 hover:border-emerald-600 text-gray-300 hover:text-white opacity-50"
                  disabled
                  title="Coming Soon"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 hover:bg-emerald-600 hover:border-emerald-600 text-gray-300 hover:text-white opacity-50"
                  disabled
                  title="Coming Soon"
                >
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Bald verfügbar</p>
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
                  className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
                >
                  <Plane className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Flugsuche
                </Link>
              </li>
              <li>
                <Link 
                  href="/hotels" 
                  className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
                >
                  <Hotel className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Hotelvergleich
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools" 
                  className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
                >
                  <Lightbulb className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Tools & Guides
                </Link>
              </li>
              <li>
                <Link 
                  href="/angebot-der-woche" 
                  className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
                >
                  <Star className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Angebot der Woche
                </Link>
              </li>
              <li>
                <Link 
                  href="/umrah-anfrage" 
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium group"
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
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link 
                  href="/kontakt" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
                >
                  <HelpCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Häufige Fragen
                </Link>
              </li>
              <li>
                <Link 
                  href="/bewertungen" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Kundenbewertungen
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
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
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p className="font-medium">Nomad Agency for Marketing & Consulting LLC</p>
                  <p>2880W OAKLAND PARK BLVD</p>
                  <p>STE 225C</p>
                  <p>OAKLAND PARK, FL 33311, USA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <Link 
                  href="mailto:info@umrahcheck.de" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  info@umrahcheck.de
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <div className="text-gray-300">
                  <p className="font-medium">WhatsApp: +966 56 063 0947</p>
                  <p className="text-sm">Persönliche Beratung aus Medina</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white mt-4 w-full"
                asChild
              >
                <Link href="https://wa.me/966560630947?text=Assalamu%20alaikum!%20Ich%20interessiere%20mich%20für%20eine%20Umrah-Beratung%20mit%20Mustafa%20aus%20Medina.">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Beratung
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
              © {currentYear} Nomad Agency for Marketing & Consulting LLC. Alle Rechte vorbehalten.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link 
                href="/impressum" 
                className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <FileText className="w-3 h-3" />
                Impressum
              </Link>
              <Link 
                href="/datenschutz" 
                className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <Shield className="w-3 h-3" />
                Datenschutz
              </Link>
              <Link 
                href="/agb" 
                className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <FileText className="w-3 h-3" />
                AGB
              </Link>
              <Link 
                href="/widerruf" 
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Widerruf
              </Link>
              <Link 
                href="/cookies" 
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Cookie-Einstellungen
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Shield className="w-4 h-4 text-emerald-400" />
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