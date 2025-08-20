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

export default function KIAnalysePage() {
  const [analysisStep, setAnalysisStep] = useState(0)
  const [customerName, setCustomerName] = useState('Lieber Bruder/Liebe Schwester')

  useEffect(() => {
    // Get customer name from localStorage
    const leadData = localStorage.getItem('umrahcheck_lead')
    if (leadData) {
      const parsed = JSON.parse(leadData)
      if (parsed.name) {
        setCustomerName(parsed.name.split(' ')[0] || 'Lieber Bruder/Liebe Schwester')
      }
    }

    // Simulate analysis steps
    const timer1 = setTimeout(() => setAnalysisStep(1), 2000)
    const timer2 = setTimeout(() => setAnalysisStep(2), 4000)
    const timer3 = setTimeout(() => setAnalysisStep(3), 6000)
    
    // Auto-redirect to upsell page after analysis complete
    const redirectTimer = setTimeout(() => {
      // Simulate optimal budget status for most users
      const leadData = localStorage.getItem('umrahcheck_lead')
      if (leadData) {
        const parsed = JSON.parse(leadData)
        const budget = parsed.budget || '1200'
        const name = parsed.name || 'Kunde'
        
        // Determine status based on budget (per person for 10-12 days)
        let status = 'optimal'
        let recommendation = ''
        let details = ''
        
        if (parseInt(budget) < 850) {
          status = 'insufficient'
          recommendation = 'Budget sehr knapp - Umrah nur mit Kompromissen möglich'
          details = 'Nur sehr einfache Hotels und günstige Flüge möglich. Empfehlung: Budget auf mindestens 850€ erhöhen.'
        } else if (parseInt(budget) >= 850 && parseInt(budget) < 1200) {
          status = 'good'
          recommendation = 'Gutes Budget für eine schöne Umrah!'
          details = 'Empfehlung: 3-4 Personen für bessere Hotelpreise. 4-5 Sterne Hotels ohne Frühstück möglich. Ideal: 1000€ Budget.'
        } else if (parseInt(budget) >= 1200 && parseInt(budget) < 1600) {
          status = 'optimal'
          recommendation = 'Optimales Budget - Premium Umrah möglich!'
          details = '5 Sterne Hotels mit Frühstück. Bei 3-4 Personen noch bessere Konditionen möglich.'
        } else {
          status = 'premium'
          recommendation = 'Luxus-Budget - Erstklassige Umrah garantiert!'
          details = 'Premium Hotels direkt am Haram mit allen Annehmlichkeiten.'
        }
        
        // Redirect to upsell with params
        window.location.href = `/upsell?status=${status}&name=${encodeURIComponent(name)}&budget=${budget}&recommendation=${encodeURIComponent(recommendation)}&details=${encodeURIComponent(details)}`
      }
    }, 10000) // Redirect after 10 seconds

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(redirectTimer)
    }
  }, [])

  const analysisSteps = [
    { icon: Calculator, text: "Budget-Analyse läuft...", color: "text-blue-500" },
    { icon: Sparkles, text: "Optimale Flugverbindungen werden gesucht...", color: "text-purple-500" },
    { icon: CheckCircle, text: "Hotel-Empfehlungen werden erstellt...", color: "text-green-500" },
    { icon: Mail, text: "Persönliche Einschätzung wird vorbereitet...", color: "text-gold-500" }
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

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Analysis Progress */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-emerald-400" />
                    Live Analyse-Status
                  </h2>
                  
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

            {/* Video Message */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Persönliche Nachricht
                  </h2>
                  
                  {/* Placeholder for video - you can replace with actual video */}
                  <div className="aspect-video bg-slate-900 rounded-lg mb-6 flex items-center justify-center border border-slate-600">
                    <div className="text-center">
                      <Brain className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                      <p className="text-gray-400">Video wird geladen...</p>
                    </div>
                  </div>
                  
                  {/* Video transcript/content */}
                  <div className="space-y-4 text-gray-300">
                    <p className="font-semibold text-white">Assalamu alaikum,</p>
                    
                    <p>Barakallahu feek, dass du das Formular ausgefüllt hast.</p>
                    
                    <p>Deine Angaben sind bei mir angekommen – und mein KI System beginnt jetzt direkt mit der Analyse deiner Umrah-Planung.</p>
                    
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <p className="font-medium text-emerald-400 mb-2">Meine KI prüft gerade:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>ob deine Budget-Vorstellung realistisch ist</li>
                        <li>wie wir das Beste aus deinem Geld machen können</li>
                        <li>optimale Flüge, Hotels und Reisezeit für dich</li>
                      </ul>
                    </div>
                    
                    <p className="font-medium">In wenigen Minuten bekommst du deine persönliche Einschätzung per E-Mail oder WhatsApp zugeschickt.</p>
                    
                    <div className="bg-amber-900/30 border border-amber-500/30 p-4 rounded-lg">
                      <p className="text-amber-200 font-medium flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Wichtig: Schau bitte auch in deinem Spam-Ordner
                      </p>
                    </div>
                    
                    <p>Wenn du möchtest, kannst du dir direkt danach dein individuelles Umrah-Angebot sichern – mit drei Flugverbindungen und drei ausgewählten Hotels in Mekka und Medina in deinem Budget.</p>
                    
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-medium">Transparent.</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-medium">Ehrlich.</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-medium">Und mit ein paar Klicks sofort buchbar.</span>
                    </div>
                    
                    <p className="text-white font-medium">Ich freue mich, dich auf diesem Weg begleiten zu dürfen.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

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