"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CheckCircle,
  Shield,
  Lock,
  CreditCard,
  ArrowLeft,
  Star,
  Clock,
  Users,
  FileText
} from 'lucide-react'

export default function CheckoutPage() {
  const [price, setPrice] = useState('39')
  const [isProcessing, setIsProcessing] = useState(false)
  
  useEffect(() => {
    // Get price from URL params
    const params = new URLSearchParams(window.location.search)
    const offerPrice = params.get('price')
    if (offerPrice) {
      setPrice(offerPrice)
    }
  }, [])

  const handlePayment = () => {
    setIsProcessing(true)
    // Redirect to CopeCart or payment processor
    // For now, we'll simulate with a timeout
    setTimeout(() => {
      alert('Weiterleitung zu CopeCart... (Integration folgt)')
      setIsProcessing(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[--cream-light] via-white to-[--cream]">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link href="/danke">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-600">Sichere Zahlung</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            
            {/* Left: Product Info */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h1 className="text-3xl font-bold text-midnight mb-6">
                    Dein persönliches Umrah-Angebot
                  </h1>
                  
                  {/* What's Included */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Das bekommst du:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">3 optimale Flugverbindungen</p>
                          <p className="text-sm text-gray-600">Mit Preisen, Zeiten und Bewertungen</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">3 Hotels in Mekka</p>
                          <p className="text-sm text-gray-600">Perfekt auf dein Budget abgestimmt</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">3 Hotels in Medina</p>
                          <p className="text-sm text-gray-600">Mit Entfernung zum Haram</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Ersparnis-Analyse</p>
                          <p className="text-sm text-gray-600">Spare bis zu 2.000€ gegenüber Agenturen</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Direkte Buchungslinks</p>
                          <p className="text-sm text-gray-600">Buche ohne Umwege zum besten Preis</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Guarantee */}
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-green-600" />
                      <h3 className="font-semibold text-gray-900">100% Geld-zurück-Garantie</h3>
                    </div>
                    <p className="text-sm text-gray-700">
                      Wenn du mit deinem Angebot nicht zufrieden bist, bekommst du dein Geld zurück - ohne Wenn und Aber!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Signals */}
              <Card className="mt-6 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <Users className="w-8 h-8 text-[--primary-gold] mx-auto mb-2" />
                      <div className="font-bold text-lg">2.847</div>
                      <div className="text-xs text-gray-600">Zufriedene Kunden</div>
                    </div>
                    <div>
                      <Star className="w-8 h-8 text-[--primary-gold] mx-auto mb-2" />
                      <div className="font-bold text-lg">4.8/5</div>
                      <div className="text-xs text-gray-600">Bewertung</div>
                    </div>
                    <div>
                      <Clock className="w-8 h-8 text-[--primary-gold] mx-auto mb-2" />
                      <div className="font-bold text-lg">5 Min</div>
                      <div className="text-xs text-gray-600">bis zur PDF</div>
                    </div>
                    <div>
                      <Shield className="w-8 h-8 text-[--primary-gold] mx-auto mb-2" />
                      <div className="font-bold text-lg">100%</div>
                      <div className="text-xs text-gray-600">Halal</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Payment */}
            <div>
              <Card className="shadow-xl border-2 border-[--primary-gold]/30 sticky top-4">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-midnight mb-2">Bestellübersicht</h2>
                    <div className="text-4xl font-bold text-[--primary-gold]">
                      {price === '39' && <span className="line-through text-gray-400 text-lg mr-2">79€</span>}
                      {price}€
                    </div>
                    {price === '39' && (
                      <div className="text-sm text-green-600 font-medium">
                        Du sparst 50%!
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span>Persönliches Umrah-Angebot</span>
                      <span>{price}€</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between font-bold">
                        <span>Gesamt</span>
                        <span className="text-[--primary-gold]">{price}€</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-[--primary-gold] to-[--primary-gold-hover] hover:from-[--primary-gold-hover] hover:to-[--primary-gold] text-white font-bold py-4 text-lg shadow-lg"
                    onClick={handlePayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                        Verarbeitung...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5 mr-2" />
                        Jetzt sicher bezahlen
                      </>
                    )}
                  </Button>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                      <Lock className="w-3 h-3" />
                      SSL-verschlüsselte Zahlung
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                      <FileText className="w-3 h-3" />
                      Sofortiger PDF-Download
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs text-center text-gray-600 mb-3">Sichere Zahlung über:</p>
                    <div className="flex justify-center gap-3">
                      <div className="text-xs bg-gray-100 px-3 py-1 rounded">PayPal</div>
                      <div className="text-xs bg-gray-100 px-3 py-1 rounded">Kreditkarte</div>
                      <div className="text-xs bg-gray-100 px-3 py-1 rounded">SEPA</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  )
}