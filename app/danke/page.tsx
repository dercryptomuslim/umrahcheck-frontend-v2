"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CheckCircle,
  Mail,
  MessageCircle,
  Clock,
  ArrowRight,
  Shield,
  Star,
  Sparkles,
  FileText,
  TrendingUp,
  Gift,
  Users
} from 'lucide-react'

export default function DankePage() {
  const [leadData, setLeadData] = useState<any>(null)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes countdown
  
  useEffect(() => {
    // Get lead data from localStorage
    const data = localStorage.getItem('umrahcheck_lead')
    if (data) {
      setLeadData(JSON.parse(data))
    }
    
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[--cream-light] via-[--sand] to-[--cream]">
      
      {/* Success Header */}
      <div className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-12 h-12 text-[--primary-gold]" />
              <h1 className="text-4xl font-bold">Barakallahu feek! 🤲</h1>
            </div>
            <p className="text-xl opacity-90">
              Deine Anfrage ist angekommen, {leadData?.name?.split(' ')[0] || 'lieber Bruder/liebe Schwester'}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Video & Main Message */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Video Card */}
              <Card className="card-gold">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-midnight mb-4">
                    Mustafa's persönliche Nachricht für dich:
                  </h2>
                  
                  {/* Video Placeholder - Replace with actual video */}
                  <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-6">
                    <video 
                      controls 
                      autoPlay
                      className="w-full h-full"
                      poster="/mustafa-video-thumbnail.jpg"
                    >
                      <source src="/mustafa-thank-you-video.mp4" type="video/mp4" />
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                        <div className="text-center text-white">
                          <p className="mb-4">Video wird geladen...</p>
                          <Button className="btn-gold">
                            Video auf YouTube ansehen
                          </Button>
                        </div>
                      </div>
                    </video>
                  </div>

                  {/* Video Transcript / Key Points */}
                  <div className="bg-[--cream] rounded-lg p-6">
                    <h3 className="font-semibold text-midnight mb-3">Was passiert jetzt?</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[--primary-gold] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <p className="font-medium text-midnight">KI analysiert deine Umrah-Planung</p>
                          <p className="text-sm text-secondary">Prüfung ob dein Budget realistisch ist</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[--primary-gold] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div>
                          <p className="font-medium text-midnight">Persönliche Einschätzung per E-Mail</p>
                          <p className="text-sm text-secondary">In wenigen Minuten in deinem Postfach</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[--primary-gold] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                          <p className="font-medium text-midnight">Optional: Dein individuelles Angebot</p>
                          <p className="text-sm text-secondary">3 Flüge + 3 Hotels perfekt auf dich zugeschnitten</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Notice */}
              <Card className="border-2 border-[--primary-gold]/30 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-[--primary-gold]" />
                    <h3 className="text-lg font-bold text-midnight">Wichtig: Check deinen Spam-Ordner!</h3>
                  </div>
                  <p className="text-secondary mb-4">
                    Unsere E-Mail kommt von <strong>info@umrahcheck.de</strong> und könnte im Spam landen.
                    Füge uns zu deinen Kontakten hinzu, damit du nichts verpasst!
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>E-Mail gesendet an: <strong>{leadData?.email}</strong></span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Upsell & Timer */}
            <div className="space-y-6">
              
              {/* Limited Time Offer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="border-2 border-[--primary-gold] bg-gradient-to-br from-white to-[--cream]">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                        <Clock className="w-4 h-4" />
                        Nur noch {formatTime(timeLeft)} verfügbar
                      </div>
                      
                      <h3 className="text-2xl font-bold text-midnight mb-2">
                        🎁 Exklusives Angebot
                      </h3>
                      
                      <div className="text-3xl font-bold text-[--primary-gold] mb-1">
                        <span className="line-through text-gray-400 text-lg">79€</span> 39€
                      </div>
                      
                      <p className="text-sm text-secondary">
                        Spare 50% - nur für die nächsten 5 Minuten!
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-midnight">Dein persönliches Umrah-Angebot enthält:</h4>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">3 optimale Flugverbindungen</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">3 Hotels in Mekka (in deinem Budget)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">3 Hotels in Medina (in deinem Budget)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Ersparnis-Analyse (bis zu 2000€)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Direkte Buchungslinks</span>
                        </div>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-[--primary-gold] to-[--primary-gold-hover] hover:from-[--primary-gold-hover] hover:to-[--primary-gold] text-white font-bold py-4 text-lg shadow-lg"
                      asChild
                    >
                      <Link href="/checkout?offer=special&price=39">
                        <Sparkles className="w-5 h-5 mr-2" />
                        JETZT Angebot sichern
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>

                    <p className="text-xs text-center text-muted mt-3">
                      Keine versteckten Kosten • Sofort-Download • 100% Geld-zurück-Garantie
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Trust Signals */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-midnight mb-4">Warum 2.847 Pilger uns vertrauen:</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-[--primary-gold]" />
                      <span className="text-sm">100% Halal & transparent</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-[--primary-gold]" />
                      <span className="text-sm">KI entlarvt Umrah-Abzocke</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-[--primary-gold]" />
                      <span className="text-sm">Persönliche Beratung aus Medina</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-[--primary-gold]" />
                      <span className="text-sm">4.8/5 Sterne (28 echte Bewertungen)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Support */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                    <h4 className="font-semibold text-gray-900">Fragen? Ich bin da!</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Schreib mir direkt auf WhatsApp - ich antworte persönlich!
                  </p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    asChild
                  >
                    <Link href="https://wa.me/966560630947?text=Salam%20Mustafa!%20Ich%20habe%20gerade%20das%20Formular%20ausgefüllt.">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp öffnen
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white">
              <CardContent className="p-8">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4">
                    ✈️ Spare bis zu 2.000€ bei deiner Umrah!
                  </h2>
                  <p className="text-xl opacity-90 mb-6">
                    Während andere für dieselben Flüge und Hotels das Doppelte zahlen, 
                    zeigt dir unsere KI die echten Preise - transparent und ehrlich.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg"
                      className="bg-[--primary-gold] hover:bg-[--primary-gold-hover] text-midnight font-bold"
                      asChild
                    >
                      <Link href="/checkout?offer=special&price=39">
                        <FileText className="w-5 h-5 mr-2" />
                        Mein persönliches Angebot (39€)
                      </Link>
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-midnight"
                      asChild
                    >
                      <Link href="/">
                        Später entscheiden
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  )
}