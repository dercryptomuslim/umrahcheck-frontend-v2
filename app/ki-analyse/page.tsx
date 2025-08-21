"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { 
  Brain, 
  Clock, 
  CheckCircle, 
  Sparkles, 
  Calculator,
  Mail,
  MessageCircle,
  ArrowRight
} from 'lucide-react'

// Fixed 404 issue - ensuring proper export
export default function KIAnalysePage() {
  const [analysisStep, setAnalysisStep] = useState(0)
  const [customerName, setCustomerName] = useState('Lieber Bruder/Liebe Schwester')
  const [isWebhookLoading, setIsWebhookLoading] = useState(true)
  const [webhookError, setWebhookError] = useState(false)

  useEffect(() => {
    // Get customer name from localStorage
    const leadData = localStorage.getItem('umrahcheck_lead')
    if (leadData) {
      const parsed = JSON.parse(leadData)
      if (parsed.name) {
        setCustomerName(parsed.name.split(' ')[0] || 'Lieber Bruder/Liebe Schwester')
      }
      
      // Trigger webhook immediately when page loads with loading state
      setIsWebhookLoading(true)
      fetch('https://dercryptomuslim.app.n8n.cloud/webhook/umrah-lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: parsed.vorname || parsed.name?.split(' ')[0] || '',
          last_name: parsed.nachname || parsed.name?.split(' ').slice(1).join(' ') || '',
          email: parsed.email || '',
          whatsapp: parsed.telefon || parsed.whatsapp || '',
          budget: parsed.budget || '',
          persons: parsed.personen || parsed.persons || '',
          destination: parsed.destination || '',
          departure_airport: parsed.departure || '',
          arrival_airport: parsed.arrival_airport || 'Jeddah',
          departure_date: parsed.reisezeitraum || parsed.date || '',
          nights_mekka: parsed.nights_mecca || parsed.nights_mekka || '',
          nights_medina: parsed.nights_medina || '',
          nationality: parsed.nationality || '',
          notes: parsed.besondere_wuensche || parsed.notes || '',
          timestamp: new Date().toISOString(),
          source: 'ki-analyse-page'
        })
      })
      .then(response => {
        setIsWebhookLoading(false)
        if (!response.ok) {
          throw new Error('Webhook failed')
        }
      })
      .catch(error => {
        console.error('Webhook error:', error)
        setIsWebhookLoading(false)
        setWebhookError(true)
      })
    }

    // Simulate analysis steps with longer timing (18-20 seconds total)
    const timer1 = setTimeout(() => setAnalysisStep(1), 3000)
    const timer2 = setTimeout(() => setAnalysisStep(2), 7000)
    const timer3 = setTimeout(() => setAnalysisStep(3), 12000)
    const timer4 = setTimeout(() => setAnalysisStep(4), 16000)
    
    // Auto-redirect to upsell page after analysis complete
    const redirectTimer = setTimeout(() => {
      // Simulate optimal budget status for most users
      const leadData = localStorage.getItem('umrahcheck_lead')
      if (leadData) {
        const parsed = JSON.parse(leadData)
        const budget = parsed.budget || '1200'
        const name = parsed.name || 'Kunde'
        
        // Determine status based on new budget categories
        let status = 'optimal'
        let recommendation = ''
        let details = ''
        
        // Handle new budget range format
        const budgetRange = parsed.budget || '1200'
        
        if (budgetRange === 'unter-900') {
          status = 'insufficient'
          recommendation = 'Budget sehr knapp - nur kurze Umrah möglich'
          details = 'Nur 5-7 Tage Umrah mit einfachen Hotels und günstigen Flügen. Empfehlung: Budget auf Smart Budget (900-1.150€) erhöhen.'
        } else if (budgetRange === '900-1150') {
          status = 'good'
          recommendation = 'Smart Budget - Gutes Preis-Leistungs-Verhältnis!'
          details = '3-4 Sterne Hotels mit gutem Service. Kurze Busfahrt zum Haram. Ideale Basis für eine schöne Umrah.'
        } else if (budgetRange === '1150-1300') {
          status = 'optimal'
          recommendation = 'Komfort Klasse - Sehr gute Auswahl!'
          details = '4-5 Sterne Hotels mit Komfort-Zimmern. Nähere Lage zum Haram. Frühstück optional buchbar.'
        } else if (budgetRange === '1300-1600') {
          status = 'optimal'
          recommendation = 'Premium Klasse - Erstklassige Umrah!'
          details = '5 Sterne Hotels mit Premium-Service. Fußläufig zum Haram. Vollpension und Luxus-Ausstattung.'
        } else if (budgetRange === '1600-2500') {
          status = 'premium'
          recommendation = 'Luxus Klasse - VIP Behandlung garantiert!'
          details = 'Exklusive 5 Sterne Hotels direkt am Haram. VIP-Service, Vollpension und alle Annehmlichkeiten.'
        } else if (budgetRange === 'ab-2500') {
          status = 'premium'
          recommendation = 'High Class - Absolute Luxus-Umrah!'
          details = 'Die besten Hotels am Markt mit Royal-Service. Private Transfers und exklusive Behandlung.'
        } else {
          // Fallback for old budget format (if any)
          const budgetNum = parseInt(budgetRange)
          if (budgetNum < 900) {
            status = 'insufficient'
            recommendation = 'Budget sehr knapp - nur kurze Umrah möglich'
            details = 'Nur 5-7 Tage Umrah mit einfachen Hotels. Empfehlung: Budget erhöhen für bessere Optionen.'
          } else if (budgetNum < 1300) {
            status = 'good'
            recommendation = 'Gutes Budget für eine schöne Umrah!'
            details = '4-5 Sterne Hotels mit gutem Service und vernünftiger Entfernung zum Haram.'
          } else {
            status = 'optimal'
            recommendation = 'Optimales Budget - Premium Umrah möglich!'
            details = '5 Sterne Hotels mit Frühstück und exzellenter Lage.'
          }
        }
        
        // Redirect to upsell with params
        window.location.href = `/upsell?status=${status}&name=${encodeURIComponent(name)}&budget=${budget}&recommendation=${encodeURIComponent(recommendation)}&details=${encodeURIComponent(details)}`
      }
    }, 19000) // Redirect after 19 seconds

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(redirectTimer)
    }
  }, [])

  const analysisSteps = [
    { icon: Calculator, text: "Budget-Analyse läuft...", color: "text-blue-500" },
    { icon: Sparkles, text: "Optimale Flugverbindungen werden gesucht...", color: "text-purple-500" },
    { icon: CheckCircle, text: "Hotel-Empfehlungen werden erstellt...", color: "text-green-500" },
    { icon: Mail, text: "Persönliche Einschätzung wird vorbereitet...", color: "text-gold-500" },
    { icon: Brain, text: "KI-Optimierung abgeschlossen...", color: "text-emerald-500" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Brain className="w-20 h-20 text-emerald-400" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            UmrahCheck KI analysiert...
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Assalamu alaikum {customerName}, deine Umrah-Planung wird jetzt von unserer KI optimiert
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
            {/* Analysis Progress */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                      <Clock className="w-6 h-6 text-emerald-400" />
                      Live Analyse-Status
                    </h2>
                    {isWebhookLoading && (
                      <div className="flex items-center gap-2 text-blue-400">
                        <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-sm">Daten werden übertragen...</span>
                      </div>
                    )}
                    {webhookError && (
                      <div className="flex items-center gap-2 text-orange-400">
                        <span className="text-sm">⚠️ Offline-Modus aktiv</span>
                      </div>
                    )}
                    {!isWebhookLoading && !webhookError && (
                      <div className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">Verbindung erfolgreich</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-6">
                    {analysisSteps.map((step, index) => {
                      const StepIcon = step.icon
                      const isActive = index <= analysisStep
                      const isCompleted = index < analysisStep
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: isActive ? 1 : 0.4,
                            x: 0 
                          }}
                          transition={{ delay: index * 0.5 }}
                          className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                            isActive ? 'bg-slate-700/50' : 'bg-slate-800/30'
                          }`}
                        >
                          <div className={`relative ${isCompleted ? 'text-emerald-400' : step.color}`}>
                            <StepIcon className="w-6 h-6" />
                            {isActive && !isCompleted && (
                              <div className="absolute inset-0 animate-ping">
                                <StepIcon className="w-6 h-6 opacity-75" />
                              </div>
                            )}
                            {isCompleted && (
                              <CheckCircle className="w-4 h-4 text-emerald-400 absolute -bottom-1 -right-1" />
                            )}
                          </div>
                          <span className={`font-medium ${
                            isActive ? 'text-white' : 'text-gray-400'
                          }`}>
                            {step.text}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                  
                  {analysisStep >= 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-8 p-6 bg-emerald-900/30 border border-emerald-500/30 rounded-lg"
                    >
                      <div className="flex items-center gap-3 text-emerald-400 mb-3">
                        <CheckCircle className="w-6 h-6" />
                        <span className="font-bold">Analyse abgeschlossen!</span>
                      </div>
                      <p className="text-gray-300 mb-3">
                        Du erhältst in wenigen Minuten deine personalisierte Budget-Einschätzung per E-Mail oder WhatsApp.
                      </p>
                      <div className="flex items-center gap-2 text-gold-400">
                        <Clock className="w-4 h-4 animate-pulse" />
                        <span className="text-sm font-medium">Weiterleitung in wenigen Sekunden...</span>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

          {/* Next Steps */}
          {analysisStep >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-12 text-center"
            >
              <Card className="bg-gradient-to-r from-emerald-900/30 to-gold-900/30 border-emerald-500/30 backdrop-blur">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Was passiert jetzt?</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h4 className="font-semibold text-white mb-2">E-Mail Check</h4>
                      <p className="text-gray-300 text-sm">Prüfe deine E-Mails (auch Spam) in den nächsten 5-10 Minuten</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h4 className="font-semibold text-white mb-2">Budget-Ergebnis</h4>
                      <p className="text-gray-300 text-sm">Erfahre, ob dein Budget optimal ist oder optimiert werden kann</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h4 className="font-semibold text-white mb-2">Nächster Schritt</h4>
                      <p className="text-gray-300 text-sm">Bei optimaler Einschätzung: 39€ PDF mit 3 Flügen + 6 Hotels</p>
                    </div>
                  </div>

                  <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                    <Link href="/">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Zurück zur Startseite
                    </Link>
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