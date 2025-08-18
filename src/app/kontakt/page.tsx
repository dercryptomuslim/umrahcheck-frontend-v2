"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle
} from 'lucide-react'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    betreff: '',
    nachricht: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="shadow-xl border-emerald-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Nachricht gesendet! 🕌
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Vielen Dank für deine Nachricht. Wir melden uns innerhalb von 24 Stunden bei dir.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = '/'}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
                  >
                    Zur Startseite
                  </Button>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-emerald-200 hover:bg-emerald-50 px-8 py-3"
                  >
                    Neue Nachricht
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Button variant="outline" asChild className="mb-6 border-white text-white hover:bg-white hover:text-emerald-600">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
          </Button>
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Kontakt</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Wir sind für dich da! Kontaktiere uns für deine Umrah-Beratung oder bei Fragen.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Kontaktinformationen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Telefon */}
            <Card className="text-center shadow-lg border-emerald-100 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Telefon</h3>
                <p className="text-gray-600 mb-4">Sprich direkt mit unseren Umrah-Experten</p>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-emerald-600">+49 (0) 123 456 789 01</p>
                  <p className="text-sm text-gray-500">Mo-Fr: 9:00-18:00 Uhr</p>
                  <p className="text-sm text-gray-500">Sa: 10:00-14:00 Uhr</p>
                </div>
                <Button 
                  className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white"
                  asChild
                >
                  <Link href="tel:+4912345678901">
                    Jetzt anrufen
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="text-center shadow-lg border-emerald-100 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Schnelle Beratung über WhatsApp</p>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-green-600">+49 151 123 456 78</p>
                  <p className="text-sm text-gray-500">Täglich: 8:00-22:00 Uhr</p>
                  <p className="text-sm text-gray-500">Schnelle Antworten</p>
                </div>
                <Button 
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white"
                  asChild
                >
                  <Link href="https://wa.me/4915112345678">
                    WhatsApp öffnen
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* E-Mail */}
            <Card className="text-center shadow-lg border-emerald-100 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">E-Mail</h3>
                <p className="text-gray-600 mb-4">Detaillierte Anfragen per E-Mail</p>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-blue-600">info@umrahcheck.com</p>
                  <p className="text-sm text-gray-500">Antwort binnen 24h</p>
                  <p className="text-sm text-gray-500">Alle Sprachen</p>
                </div>
                <Button 
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <Link href="mailto:info@umrahcheck.com">
                    E-Mail senden
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Kontaktformular */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="shadow-xl border-emerald-100">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Schreibe uns eine Nachricht</h2>
                <p className="text-gray-600">
                  Fülle das Formular aus und wir melden uns innerhalb von 24 Stunden bei dir.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Dein vollständiger Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="deine@email.de"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                    <input
                      type="tel"
                      value={formData.telefon}
                      onChange={(e) => handleInputChange('telefon', e.target.value)}
                      placeholder="+49 123 456 789"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Betreff *</label>
                    <select
                      required
                      value={formData.betreff}
                      onChange={(e) => handleInputChange('betreff', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Betreff auswählen</option>
                      <option value="umrah-beratung">Umrah-Beratung</option>
                      <option value="preisanfrage">Preisanfrage</option>
                      <option value="buchung">Buchungsunterstützung</option>
                      <option value="beschwerde">Beschwerde</option>
                      <option value="partnership">Partnerschaft</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht *</label>
                  <textarea
                    required
                    value={formData.nachricht}
                    onChange={(e) => handleInputChange('nachricht', e.target.value)}
                    placeholder="Beschreibe deine Anfrage oder Nachricht..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Nachricht senden
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bürozeiten & Adresse */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Bürozeiten */}
            <Card className="shadow-lg border-emerald-100">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-semibold text-gray-900">Bürozeiten</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    { day: "Montag - Freitag", time: "9:00 - 18:00 Uhr" },
                    { day: "Samstag", time: "10:00 - 14:00 Uhr" },
                    { day: "Sonntag", time: "Geschlossen" },
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-emerald-800">
                    <strong>WhatsApp Support:</strong> Täglich 8:00-22:00 Uhr verfügbar für schnelle Anfragen!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Adresse */}
            <Card className="shadow-lg border-emerald-100">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-semibold text-gray-900">Unser Standort</h3>
                </div>
                
                <div className="space-y-3 text-gray-700">
                  <p className="font-medium text-gray-900">UmrahCheck GmbH</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Berlin</p>
                  <p>Deutschland</p>
                </div>

                <div className="mt-6">
                  <Button 
                    variant="outline"
                    className="w-full border-emerald-200 hover:bg-emerald-50"
                    asChild
                  >
                    <Link href="https://maps.google.com" target="_blank">
                      <MapPin className="w-4 h-4 mr-2" />
                      In Google Maps öffnen
                    </Link>
                  </Button>
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Hinweis:</strong> Termine sind nach Vereinbarung möglich. 
                    Bitte kontaktiere uns vorab.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}