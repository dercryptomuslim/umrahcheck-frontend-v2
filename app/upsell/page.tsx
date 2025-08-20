"use client"

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  CheckCircle, 
  Star, 
  Users, 
  Calendar, 
  MapPin, 
  Plane, 
  Hotel,
  Download,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
  CreditCard,
  Zap
} from 'lucide-react'

interface BudgetStatus {
  status: 'optimal' | 'good' | 'insufficient' | 'premium'
  recommendation: string
  details: string
  customer_name: string
  budget: string
}

function UpsellContent() {
  const searchParams = useSearchParams()
  const [budgetStatus, setBudgetStatus] = useState<BudgetStatus | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get budget status from URL params or localStorage
    const status = searchParams.get('status') as BudgetStatus['status'] || 'optimal'
    const customerName = searchParams.get('name') || 'Lieber Bruder/Liebe Schwester'
    const budget = searchParams.get('budget') || '1200'
    const recommendation = searchParams.get('recommendation') || 'Dein Budget ist optimal!'
    const details = searchParams.get('details') || ''

    setBudgetStatus({
      status,
      recommendation,
      details,
      customer_name: customerName,
      budget
    })
    setIsLoading(false)
  }, [searchParams])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-gold-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Lade deine personalisierte Empfehlung...</p>
        </div>
      </div>
    )
  }

  const getStatusConfig = (status: BudgetStatus['status']) => {
    switch (status) {
      case 'premium':
        return {
          color: 'gold',
          icon: Star,
          title: '👑 Luxus-Budget!',
          subtitle: 'Erstklassige Umrah mit allen Annehmlichkeiten',
          bgGradient: 'from-gold-50 to-amber-50',
          cardGradient: 'from-gold-500 to-amber-600',
          showUpsell: true
        }
      case 'optimal':
        return {
          color: 'emerald',
          icon: CheckCircle,
          title: '🎉 Optimal!',
          subtitle: 'Premium Umrah mit 5-Sterne Hotels möglich',
          bgGradient: 'from-emerald-50 to-gold-50',
          cardGradient: 'from-emerald-500 to-emerald-600',
          showUpsell: true
        }
      case 'good':
        return {
          color: 'blue',
          icon: Star,
          title: '✅ Gut!',
          subtitle: '4-5 Sterne Hotels für eine schöne Umrah',
          bgGradient: 'from-blue-50 to-emerald-50',
          cardGradient: 'from-blue-500 to-blue-600',
          showUpsell: true
        }
      default: // insufficient
        return {
          color: 'amber',
          icon: CreditCard,
          title: '⚠️ Budget knapp',
          subtitle: 'Umrah möglich mit sorgfältiger Planung',
          bgGradient: 'from-amber-50 to-orange-50',
          cardGradient: 'from-amber-500 to-orange-500',
          showUpsell: false
        }
    }
  }

  const config = getStatusConfig(budgetStatus?.status || 'optimal')
  const StatusIcon = config.icon

  return (
    <div className={`min-h-screen bg-gradient-to-br ${config.bgGradient}`}>
      <div className="container mx-auto px-4 py-12">
        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg border border-emerald-200">
            <h2 className="text-2xl font-bold text-emerald-800 mb-2">
              Vielen Dank! 🕌
            </h2>
            <p className="text-lg text-gray-700">
              Deine Anfrage wurde erfolgreich übermittelt. Wir melden uns innerhalb von 24 Stunden bei dir.
            </p>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className={`w-20 h-20 bg-gradient-to-r ${config.cardGradient} rounded-full flex items-center justify-center`}>
              <StatusIcon className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {config.title}
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            {config.subtitle}
          </p>
          <p className="text-lg text-gray-600">
            Assalamu alaikum {budgetStatus?.customer_name}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          
          {/* Budget Analysis Result */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Card className="bg-white/80 backdrop-blur border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <Badge className={`bg-${config.color}-100 text-${config.color}-800 px-4 py-2 text-lg mb-4`}>
                    Budget-Analyse: {budgetStatus?.budget}€ pro Person
                  </Badge>
                  <p className="text-xl text-gray-700 mb-4">
                    {budgetStatus?.recommendation}
                  </p>
                  {budgetStatus?.details && (
                    <p className="text-gray-600 mb-6">
                      {budgetStatus.details}
                    </p>
                  )}
                  
                  {config.showUpsell && (
                    <div className={`bg-gradient-to-r ${config.cardGradient} p-6 rounded-lg text-white`}>
                      <h3 className="text-2xl font-bold mb-2">
                        🎯 Perfekt! Dein nächster Schritt:
                      </h3>
                      <p className="text-lg opacity-90">
                        Sichere dir jetzt dein individuelles Umrah-Paket für nur 39€
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {config.showUpsell ? (
            /* Upsell Offer */
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-white/90 backdrop-blur border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Dein individuelles Umrah-Paket
                    </h2>
                    <p className="text-xl text-gray-600 mb-6">
                      Kein langes Suchen mehr, kein eigener Preisvergleich mit verschiedenen Anbietern. <br/>
                      Wir übernehmen alles für dich.
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <span className="text-4xl font-bold text-gray-900">39€</span>
                      <div className="text-left">
                        <div className="text-sm text-gray-500 line-through">78€</div>
                        <div className="text-sm text-emerald-600 font-semibold">50% Rabatt</div>
                      </div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Plane className="w-5 h-5 text-blue-500" />
                        3 Optimale Flugverbindungen
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          Verschiedene Airlines & Zeiten
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          Beste Preis-Leistung in deinem Budget
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          Direkte Buchungslinks
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Hotel className="w-5 h-5 text-purple-500" />
                        6 Ausgewählte Hotels
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          3 Hotels in Mekka (nähe Haram)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          3 Hotels in Medina (nähe Prophetenmoschee)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          Detaillierte Bewertungen & Preise
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-gold-500" />
                      Zusätzlich enthalten:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Download className="w-5 h-5 text-emerald-500" />
                        <span>Hochwertige PDF zum Download</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-blue-500" />
                        <span>Sofort verfügbar nach Kauf</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-purple-500" />
                        <span>30 Tage Geld-zurück-Garantie</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-red-500" />
                        <span>Exakte Entfernungen & Bewertungen</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <Button 
                      size="lg" 
                      className={`bg-gradient-to-r ${config.cardGradient} hover:opacity-90 text-white px-8 py-4 text-lg`}
                      onClick={() => {
                        // Redirect to Copecart
                        window.open('https://app.copecart.com/products/umrahcheck-individuelles-paket', '_blank')
                      }}
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      Jetzt für 39€ sichern
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    
                    <p className="text-sm text-gray-500 mt-4">
                      Sichere Zahlung über Copecart • Sofortiger Download
                    </p>
                    
                    <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4" />
                        SSL-verschlüsselt
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        4.9/5 Bewertung
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        500+ zufriedene Kunden
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            /* Consultation Offer */
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-white/90 backdrop-blur border-0 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Kostenlose Beratung
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Lass uns gemeinsam eine perfekte Lösung für deine Umrah finden
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Calendar className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Termine flexibel</h3>
                      <p className="text-gray-600">Wir finden alternative Reisezeiten</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CreditCard className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Budget optimieren</h3>
                      <p className="text-gray-600">Mehr Umrah für dein Geld</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Star className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Persönlich</h3>
                      <p className="text-gray-600">Individuelle Beratung für dich</p>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white px-8 py-4 text-lg"
                    onClick={() => {
                      window.open('https://calendly.com/umrahcheck-beratung', '_blank')
                    }}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Kostenlosen Beratungstermin buchen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

// Fixed 404 issue - ensuring proper export
export default function UpsellPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-gold-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Lade deine personalisierte Empfehlung...</p>
        </div>
      </div>
    }>
      <UpsellContent />
    </Suspense>
  )
}