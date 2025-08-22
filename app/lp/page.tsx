"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnalytics, initializeScrollTracking } from '@/lib/analytics'
import { useABTest } from '@/lib/ab-testing-lp'
import { 
  ArrowRight, 
  ArrowLeft,
  Users,
  Calendar,
  CreditCard,
  CheckCircle,
  Star,
  Shield,
  MessageCircle,
  Sparkles,
  Clock,
  MapPin,
  Phone,
  TrendingUp,
  Zap
} from 'lucide-react'

interface FormData {
  // Step 1: Basis-Info
  personen: string
  reisezeitraum: string
  budget: string
  
  // Step 2: Präferenzen  
  hotel_kategorie: string
  entfernung_haram: string
  besondere_wuensche: string
  
  // Step 3: Kontakt
  vorname: string
  nachname: string
  email: string
  telefon: string
}

interface EstimateData {
  base_price_range: {
    min: number
    max: number
  }
  recommended_hotels: Array<{
    name: string
    category: string
    distance: string
    price_range: string
    features: string[]
  }>
  total_estimate: {
    min: number
    max: number
  }
  confidence_score: number
  reasoning: string[]
}

export default function LandingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    personen: '',
    reisezeitraum: '',
    budget: '',
    hotel_kategorie: '',
    entfernung_haram: '',
    besondere_wuensche: '',
    vorname: '',
    nachname: '',
    email: '',
    telefon: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [estimate, setEstimate] = useState<EstimateData | null>(null)
  const [isEstimating, setIsEstimating] = useState(false)
  
  
  // Analytics Tracking
  const analytics = useAnalytics()
  
  // A/B Testing
  const { variation, config, trackConversion, trackMetric, getFeatureConfig, isTestActive } = useABTest()
  
  // Step timing tracking
  const [stepStartTime, setStepStartTime] = useState<number>(Date.now())

  // Track Anti-Scam messaging exposure
  useEffect(() => {
    // Track exposure to anti-scam messaging
    analytics.track('anti_scam_messaging_viewed', {
      timestamp: new Date().toISOString(),
      savings_highlighted: '4000_euro_family_savings',
      comparison_shown: 'organization_vs_real_prices'
    })

    // Track specific messaging elements
    setTimeout(() => {
      analytics.track('savings_proof_section_viewed', {
        organization_price: '8800_euro',
        real_price: '4800_euro',
        savings_amount: '4000_euro'
      })
    }, 3000)
  }, [])

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Track field interactions
    analytics.trackFormFieldInteraction(field, value, currentStep)
  }

  // Initialize analytics tracking
  useEffect(() => {
    // Initialize scroll tracking
    const cleanupScroll = initializeScrollTracking()
    
    // Track initial step start
    analytics.trackFormStepStart(1, 'basis_info')
    
    // Track A/B test info if active
    if (isTestActive && variation) {
      analytics.trackEvent({
        event_name: 'ab_test_page_view',
        event_category: 'user_experience',
        parameters: {
          ab_test_active: true,
          variation_id: variation.variationId,
          variation_name: variation.name
        }
      })
    }
    
    return cleanupScroll
  }, [])

  // Track step changes
  useEffect(() => {
    const stepNames = ['basis_info', 'preferences', 'contact']
    const stepName = stepNames[currentStep - 1] || 'unknown'
    
    if (currentStep > 1) {
      // Track completion of previous step
      const completionTime = Date.now() - stepStartTime
      analytics.trackFormStep(currentStep - 1, stepNames[currentStep - 2], completionTime)
      analytics.trackTimeOnStep(currentStep - 1, completionTime)
    }
    
    // Track start of current step
    if (currentStep <= 3) {
      analytics.trackFormStepStart(currentStep, stepName)
      setStepStartTime(Date.now())
    }
  }, [currentStep])

  // Fetch estimate when step 1 data is complete
  const fetchEstimate = async () => {
    if (!formData.personen || !formData.reisezeitraum || !formData.budget) return

    setIsEstimating(true)
    const requestStartTime = Date.now()
    
    // Track estimate request
    analytics.trackEstimateRequest(formData)
    
    try {
      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          personen: formData.personen,
          reisezeitraum: formData.reisezeitraum,
          budget: formData.budget,
          hotel_kategorie: formData.hotel_kategorie,
          entfernung_haram: formData.entfernung_haram
        })
      })

      if (response.ok) {
        const result = await response.json()
        if (result.success) {
          const responseTime = Date.now() - requestStartTime
          setEstimate(result.estimate)
          
          // Track estimate received
          analytics.trackEstimateReceived(result.estimate, responseTime)
          
        }
      }
    } catch (error) {
      console.error('Estimate API error:', error)
      analytics.trackError('estimate_api_error', String(error), { formData })
    }
    setIsEstimating(false)
  }

  // Trigger estimate when step 1 is complete
  useEffect(() => {
    if (formData.personen && formData.reisezeitraum && formData.budget) {
      const debounce = setTimeout(() => {
        fetchEstimate()
      }, 1000) // 1 second debounce
      
      return () => clearTimeout(debounce)
    }
  }, [formData.personen, formData.reisezeitraum, formData.budget])

  // Re-fetch when preferences change
  useEffect(() => {
    if (estimate && (formData.hotel_kategorie || formData.entfernung_haram)) {
      const debounce = setTimeout(() => {
        fetchEstimate()
      }, 1500)
      
      return () => clearTimeout(debounce)
    }
  }, [formData.hotel_kategorie, formData.entfernung_haram])

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
      
    }
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Track form submission
    analytics.trackFormSubmission(formData)
    
    try {
      // Prepare webhook payload for n8n (exact format for dercryptomuslim.app.n8n.cloud)
      const webhookPayload = {
        first_name: formData.vorname,
        nachname: formData.nachname,
        email: formData.email,
        whatsappnummer: formData.telefon,
        '1-6-Personen': formData.personen === '1' ? 'Solo' : 
                       formData.personen === '2' ? 'Starter' : 
                       formData.personen === '3-4' ? 'Familie' : 'Gruppe',
        abflugort: 'Frankfurt',
        zielflughafen: 'Medina', 
        abflugdatum: formData.reisezeitraum === 'ramadan-2025' ? '19.03.2025' : 
                     formData.reisezeitraum === 'sommer-2025' ? '19.08.2025' : '19.06.2025',
        flexibilitaet: '4',
        mekka_nacht: '5',
        medina_nacht: '4', 
        personenanzahl: formData.personen,
        budget: formData.budget.includes('bis-2000') ? '1100' : 
                formData.budget.includes('2000-3500') ? '2500' :
                formData.budget.includes('3500-5000') ? '4000' : '5500',
        Staatsangehoerigkeit: 'deutsch',
        Anmerkungen: formData.besondere_wuensche || '',
        'Accept-privacy-policy': 'on',
        utm_source: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_source') || 'tiktok' : 'tiktok',
        utm_medium: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_medium') || 'ad' : 'ad', 
        utm_campaign: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_campaign') || 'eid_sale' : 'eid_sale',
        referrer_url: typeof window !== 'undefined' ? window.location.href : 'https://umrahcheck.de/landingpage'
      }
      
      // Send to n8n webhook
      const response = await fetch('https://dercryptomuslim.app.n8n.cloud/webhook/umrah-lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload)
      })
      
      if (response.ok) {
        // Store lead info for ki-analyse page
        localStorage.setItem('umrahcheck_lead', JSON.stringify({
          // Original fields for backward compatibility
          name: `${formData.vorname} ${formData.nachname}`.trim(),
          email: formData.email,
          whatsapp: formData.telefon,
          budget: formData.budget,
          persons: formData.personen,
          destination: 'Medina',
          departure: 'Frankfurt', 
          date: formData.reisezeitraum,
          nights_mecca: '5',
          nights_medina: '4',
          nationality: 'deutsch',
          notes: formData.besondere_wuensche,
          // New structured fields for webhook
          vorname: formData.vorname,
          nachname: formData.nachname,
          telefon: formData.telefon,
          personen: formData.personen,
          reisezeitraum: formData.reisezeitraum,
          besondere_wuensche: formData.besondere_wuensche,
          timestamp: Date.now()
        }))
        
        // Track successful conversion
        analytics.trackConversion('form_completion')
        trackConversion('form_completion')
        
        // Redirect to KI analysis page
        window.location.href = '/ki-analyse'
      } else {
        throw new Error('Webhook submission failed')
      }
      
    } catch (error) {
      console.error('Form submission error:', error)
      analytics.trackError('form_submission_error', String(error), { formData })
      
      // Fallback: Still show success (we can capture lead manually)
      setIsSubmitting(false)
      setIsComplete(true)
    }
  }

  const progressPercentage = (currentStep / 3) * 100

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream-light via-sand to-cream">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="card-gold">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-[--primary-gold] to-[--primary-gold-light] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                
                <h1 className="text-4xl font-bold text-midnight mb-4">
                  Perfekt! 🕌✨
                </h1>
                
                <p className="text-xl text-secondary mb-6">
                  Deine persönliche Umrah-Empfehlung wird gerade erstellt. 
                  Du erhältst sie in wenigen Minuten per WhatsApp & E-Mail.
                </p>

                <div className="bg-cream rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-midnight mb-3">Was passiert jetzt?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[--primary-gold] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <span className="text-secondary">KI analysiert deine Präferenzen (2 Min)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[--primary-gold] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <span className="text-secondary">Mustafa prüft die Auswahl persönlich (5 Min)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[--primary-gold] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <span className="text-secondary">Du erhältst 3 perfekte Optionen zugeschickt</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="btn-gold"
                    onClick={() => {
                      analytics.trackWhatsAppClick('form_complete')
                      analytics.trackConversion('whatsapp_click')
                      trackConversion('whatsapp_click')
                    }}
                    asChild
                  >
                    <Link href="https://wa.me/966560630947?text=Assalamu%20alaikum!%20Ich%20habe%20gerade%20meine%20Umrah-Anfrage%20über%20die%20Landing%20Page%20gesendet.%20Wann%20kann%20ich%20mit%20den%20Empfehlungen%20rechnen?">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Chat öffnen
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="btn-gold-outline"
                    onClick={() => window.location.href = '/'}
                  >
                    Zur Hauptseite
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
    <div className="min-h-screen bg-gradient-to-br from-cream-light via-sand to-cream">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Zap className="w-4 h-4" />
                🚨 ABZOCKE STOPPEN: Organisationen verlangen 1.800-2.500€ für 1.000-1.500€ Reisen!
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Spare bis zu <span className="text-[--primary-gold]">1.000€ pro Familie</span> bei deiner Umrah
                <br />mit ehrlichen <strong>echten</strong> Preisen
              </h1>
              
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
                <strong>GRATIS Budget-Check:</strong> Erfahre in 5 Minuten, ob dein Budget realistisch ist.
                <br />Optional: Hol dir dein persönliches PDF-Angebot für nur 39€ (statt 119€)
              </p>

              {/* Proof Section */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 max-w-4xl mx-auto mb-8">
                <h3 className="text-lg font-bold mb-4 text-[--primary-gold]">💰 Echte Ersparnis-Beispiele (Familie mit 4 Personen):</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-red-500/20 rounded-lg p-4">
                    <div className="font-bold text-red-300 mb-2">❌ Typische "Umrah-Organisation":</div>
                    <div className="space-y-1">
                      <div>• Pauschalpreis: <strong>2.200€ pro Person</strong></div>
                      <div>• Familie (4 Pers.): <strong>8.800€</strong></div>
                      <div>• Versteckte Aufschläge: +300-500€</div>
                    </div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-4">
                    <div className="font-bold text-green-300 mb-2">✅ UmrahCheck Realpreis:</div>
                    <div className="space-y-1">
                      <div>• 4-Bett-Zimmer: <strong>1.200€ pro Person</strong></div>
                      <div>• Familie (4 Pers.): <strong>4.800€</strong></div>
                      <div>• <strong className="text-[--primary-gold]">Ersparnis: -4.000€</strong></div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 text-sm opacity-80">
                  <strong>Warum so günstig?</strong> 4-Bett-Zimmer teilen sich die Kosten + Direktbuchung ohne Zwischenhändler
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {[
                  '💰 Bis zu 4.000€ Familienersparnis', 
                  '✅ 100% ehrliche Preise ohne Abzocke', 
                  '🕌 Persönlich geprüft aus Medina',
                  '⚡ Antwort in unter 10 Minuten'
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[--primary-gold]" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Value Demo Section - What You Get */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <Card className="bg-white shadow-2xl border-2 border-[--primary-gold]/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <TrendingUp className="w-4 h-4" />
                  Ø 1.200€ pro Familie gespart • 180+ zufriedene Pilger beraten
                </div>
                <h2 className="text-3xl font-bold text-midnight mb-4">
                  Das bekommst du in deinem ehrlichen Umrah-Angebot:
                </h2>
                <p className="text-lg text-secondary">
                  <strong>Echte Preise direkt von Airlines & Hotels</strong> - keine Zwischenhändler-Aufschläge!
                  <br />Während andere 1.800-2.500€ verlangen, zahlst du nur 1.000-1.500€ (bei 4-Personen)
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Flights */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">✈️</span>
                    </div>
                    <h3 className="font-bold text-gray-900">3 Flugoptionen</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Budget:</span>
                      <span className="font-medium">ab 379€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Standard:</span>
                      <span className="font-medium">ab 411€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Premium:</span>
                      <span className="font-medium">ab 472€</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <div className="text-xs text-blue-800 font-medium">
                      ⚡ Agenturen verlangen: 800-1200€
                    </div>
                  </div>
                </div>

                {/* Hotels Mekka */}
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🕌</span>
                    </div>
                    <h3 className="font-bold text-gray-900">Hotels Mekka</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">3⭐ Hotel:</span>
                      <span className="font-medium">ab 50€/N</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">4⭐ Hotel:</span>
                      <span className="font-medium">ab 80€/N</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">5⭐ Hotel:</span>
                      <span className="font-medium">ab 115€/N</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-emerald-200">
                    <div className="text-xs text-emerald-800 font-medium">
                      ⚡ Agenturen: +80-150% Aufschlag
                    </div>
                  </div>
                </div>

                {/* Hotels Medina */}
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🌴</span>
                    </div>
                    <h3 className="font-bold text-gray-900">Hotels Medina</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">3⭐ Hotel:</span>
                      <span className="font-medium">ab 55€/N</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">4⭐ Hotel:</span>
                      <span className="font-medium">ab 90€/N</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">5⭐ Hotel:</span>
                      <span className="font-medium">ab 125€/N</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-amber-200">
                    <div className="text-xs text-amber-800 font-medium">
                      ⚡ Du sparst: 600-1200€
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Highlight */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-300">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      🚨 Deine potenzielle Ersparnis:
                    </h3>
                    <p className="text-gray-700">
                      Während "Umrah-Organisationen" für dasselbe Paket <strong>2.200-2.800€</strong> verlangen,
                      zeigt dir unsere KI die echten Preise: <strong>ehrlich 1.800-2.200€</strong>
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600">-500€</div>
                    <div className="text-sm text-gray-600">Durchschnittliche Ersparnis pro Person</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-8">
                <p className="text-lg font-medium text-gray-900 mb-4">
                  Starte jetzt mit dem GRATIS Budget-Check:
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="text-sm text-gray-600">Dauert nur 2 Minuten</div>
                  <ArrowRight className="w-4 h-4 text-[--primary-gold]" />
                  <div className="text-sm text-gray-600">100% kostenlos</div>
                  <ArrowRight className="w-4 h-4 text-[--primary-gold]" />
                  <div className="text-sm text-gray-600">Keine Verpflichtung</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Main Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-midnight">
                Schritt {currentStep} von 3
              </h2>
              <div className="text-sm text-muted">
                {Math.round(progressPercentage)}% fertig
              </div>
            </div>
            <div className="progress-bar">
              <motion.div 
                className="progress-fill" 
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <Card className="card-gold">
            <CardContent className="p-8">
              <AnimatePresence mode="wait">
                
                {/* Step 1: Basis-Info */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-[--primary-gold] to-[--primary-gold-light] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-midnight mb-2">Basis-Informationen</h3>
                      <p className="text-secondary">Erzähle uns kurz von deinen Reiseplänen</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="form-label">Wie viele Personen reisen?</label>
                        <select 
                          className="form-input"
                          value={formData.personen}
                          onChange={(e) => updateFormData('personen', e.target.value)}
                        >
                          <option value="">Anzahl wählen</option>
                          <option value="1">1 Person</option>
                          <option value="2">2 Personen</option>
                          <option value="3">3 Personen</option>
                          <option value="4">4 Personen</option>
                          <option value="5+">5+ Personen</option>
                        </select>
                      </div>

                      <div>
                        <label className="form-label">Wann möchtest du reisen?</label>
                        <select 
                          className="form-input"
                          value={formData.reisezeitraum}
                          onChange={(e) => updateFormData('reisezeitraum', e.target.value)}
                        >
                          <option value="">Zeitraum wählen</option>
                          <option value="ramadan-2025">Ramadan 2025 (März/April)</option>
                          <option value="nach-ramadan">Nach Ramadan (Mai-August)</option>
                          <option value="herbst-2025">Herbst 2025 (September-November)</option>
                          <option value="winter-2025">Winter 2025/26 (Dezember-Februar)</option>
                          <option value="flexibel">Bin flexibel</option>
                        </select>
                      </div>

                      <div>
                        <label className="form-label">Was ist dein ungefähres Budget pro Person?</label>
                        <select 
                          className="form-input"
                          value={formData.budget}
                          onChange={(e) => updateFormData('budget', e.target.value)}
                        >
                          <option value="">Budget wählen</option>
                          <option value="unter-900">Unter 900€ (Kurze Umrah 5-7 Tage)</option>
                          <option value="900-1150">900€ - 1.150€ (Smart Budget)</option>
                          <option value="1150-1300">1.150€ - 1.300€ (Komfort Klasse)</option>
                          <option value="1300-1600">1.300€ - 1.600€ (Premium Klasse)</option>
                          <option value="1600-2500">1.600€ - 2.500€ (Luxus Klasse)</option>
                          <option value="ab-2500">Ab 2.500€ (High Class)</option>
                        </select>
                      </div>
                    </div>

                    {/* Instant Estimate Display */}
                    <AnimatePresence>
                      {(estimate || isEstimating) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-8 p-6 bg-gradient-to-r from-[--cream] to-[--sand] rounded-xl border-2 border-[--primary-gold]/20"
                        >
                          {isEstimating ? (
                            <div className="flex items-center gap-3">
                              <div className="animate-spin rounded-full h-6 w-6 border-2 border-[--primary-gold] border-t-transparent"></div>
                              <span className="text-[--text-primary] font-medium">KI berechnet deine Preisschätzung...</span>
                            </div>
                          ) : estimate && (
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-[--primary-gold] rounded-full flex items-center justify-center">
                                  <TrendingUp className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-bold text-midnight">Deine Preisschätzung</h4>
                                  <p className="text-sm text-secondary">Basierend auf echten Buchungsdaten</p>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg p-4 border border-[--primary-gold]/10">
                                  <div className="text-center">
                                    <div className="text-2xl font-bold text-[--primary-gold] mb-1">
                                      {estimate.total_estimate.min.toLocaleString()}€ - {estimate.total_estimate.max.toLocaleString()}€
                                    </div>
                                    <div className="text-sm text-secondary">
                                      Gesamtpreis für {formData.personen} {parseInt(formData.personen) === 1 ? 'Person' : 'Personen'}
                                    </div>
                                    <div className="text-xs text-muted mt-2">
                                      Pro Person: {estimate.base_price_range.min.toLocaleString()}€ - {estimate.base_price_range.max.toLocaleString()}€
                                    </div>
                                  </div>
                                </div>

                                <div className="bg-white rounded-lg p-4 border border-[--primary-gold]/10">
                                  <div className="text-center">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                      <Star className="w-4 h-4 text-[--primary-gold]" />
                                      <span className="font-semibold text-midnight">
                                        {Math.round(estimate.confidence_score * 100)}% Genauigkeit
                                      </span>
                                    </div>
                                    <div className="text-xs text-secondary">
                                      {estimate.reasoning.slice(0, 2).map((reason, i) => (
                                        <div key={i} className="mb-1">• {reason}</div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {estimate.recommended_hotels.length > 0 && (
                                <div className="mt-4">
                                  <h5 className="font-semibold text-midnight mb-3 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-[--primary-gold]" />
                                    Empfohlene Hotels
                                  </h5>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {estimate.recommended_hotels.map((hotel, i) => (
                                      <div key={i} className="bg-white rounded-lg p-3 border border-gray-200">
                                        <div className="font-medium text-midnight text-sm">{hotel.name}</div>
                                        <div className="text-xs text-secondary mb-2">{hotel.category} • {hotel.distance}</div>
                                        <div className="text-xs text-[--primary-gold] font-semibold">{hotel.price_range}</div>
                                        <div className="text-xs text-muted mt-1">
                                          {hotel.features.slice(0, 2).join(' • ')}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                                <Zap className="w-4 h-4 text-[--primary-gold]" />
                                <span className="text-xs text-muted">
                                  Preise aktualisieren sich automatisch basierend auf deinen Präferenzen
                                </span>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expert Recommendation Section */}
                    {formData.personen && formData.budget && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-200/50"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <h4 className="text-lg font-bold text-emerald-800">Experten-Empfehlung</h4>
                              <div className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                                2025 Update
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                <Users className="w-5 h-5 text-emerald-600" />
                                <div>
                                  <div className="font-semibold text-emerald-800 text-sm">
                                    Optimal für 4er-Gruppe: 1.200€ - 1.250€ pro Person
                                  </div>
                                  <div className="text-emerald-700 text-sm">
                                    Komfortables Reisen mit guten Airlines und europäischem Hotel-Standard
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-emerald-600" />
                                <div>
                                  <div className="font-semibold text-emerald-800 text-sm">
                                    Buchung: 6-8 Wochen im Voraus
                                  </div>
                                  <div className="text-emerald-700 text-sm">
                                    Für beste Preise und Verfügbarkeit (außer Ramadan)
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3">
                                <TrendingUp className="w-5 h-5 text-emerald-600" />
                                <div>
                                  <div className="font-semibold text-emerald-800 text-sm">
                                    Aktuelle Wirtschaftslage Saudi-Arabien
                                  </div>
                                  <div className="text-emerald-700 text-sm">
                                    Stabile Preise und verbesserte Hotel-Standards in 2025
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-4 p-3 bg-white/70 rounded-lg border border-emerald-200/50">
                              <div className="text-emerald-800 text-xs font-medium">
                                💡 Tipp: Wähle das Budget "1.150€ - 1.300€" für optimales Preis-Leistungs-Verhältnis
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Step 2: Präferenzen */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-[--primary-gold] to-[--primary-gold-light] rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-midnight mb-2">Deine Präferenzen</h3>
                      <p className="text-secondary">Damit wir die perfekten Hotels für dich finden</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="form-label">Welche Hotel-Kategorie bevorzugst du?</label>
                        <select 
                          className="form-input"
                          value={formData.hotel_kategorie}
                          onChange={(e) => updateFormData('hotel_kategorie', e.target.value)}
                        >
                          <option value="">Kategorie wählen</option>
                          <option value="budget">Budget (2-3 Sterne) - Einfach & sauber</option>
                          <option value="standard">Standard (4 Sterne) - Komfort & Service</option>
                          <option value="premium">Premium (5 Sterne) - Luxus & Vollservice</option>
                          <option value="egal">Ist mir egal - Hauptsache halal</option>
                        </select>
                      </div>

                      <div>
                        <label className="form-label">Wie wichtig ist die Nähe zum Haram?</label>
                        <select 
                          className="form-input"
                          value={formData.entfernung_haram}
                          onChange={(e) => updateFormData('entfernung_haram', e.target.value)}
                        >
                          <option value="">Präferenz wählen</option>
                          <option value="walking">Fußläufig (bis 500m) - Premium Lage</option>
                          <option value="short-bus">Kurze Busfahrt (1-3 km) - Gute Balance</option>
                          <option value="longer-bus">Längere Busfahrt (3-10 km) - Budget-freundlich</option>
                          <option value="no-preference">Keine Präferenz</option>
                        </select>
                      </div>

                      <div>
                        <label className="form-label">Besondere Wünsche oder Anforderungen?</label>
                        <textarea 
                          className="form-input"
                          rows={4}
                          placeholder="z.B. Familienreise mit Kindern, barrierefreie Zimmer, vegetarische Verpflegung, Gruppenbuchung..."
                          value={formData.besondere_wuensche}
                          onChange={(e) => updateFormData('besondere_wuensche', e.target.value)}
                        />
                        <p className="form-help">Optional - hilft uns, bessere Empfehlungen zu geben</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Kontakt */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-[--primary-gold] to-[--primary-gold-light] rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-midnight mb-2">Fast geschafft!</h3>
                      <p className="text-secondary">Wo sollen wir deine persönlichen Empfehlungen hinschicken?</p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="form-label">Vorname *</label>
                          <input 
                            type="text"
                            className="form-input"
                            placeholder="z.B. Ahmed"
                            value={formData.vorname}
                            onChange={(e) => updateFormData('vorname', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="form-label">Nachname *</label>
                          <input 
                            type="text"
                            className="form-input"
                            placeholder="z.B. Mohammed"
                            value={formData.nachname}
                            onChange={(e) => updateFormData('nachname', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="form-label">WhatsApp/Telefon</label>
                        <input 
                          type="tel"
                          className="form-input"
                          placeholder="+49 123 456 789"
                          value={formData.telefon}
                          onChange={(e) => updateFormData('telefon', e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="form-label">E-Mail Adresse</label>
                        <input 
                          type="email"
                          className="form-input"
                          placeholder="ahmed@email.com"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                        />
                      </div>

                      <div className="bg-cream rounded-lg p-6">
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-[--primary-gold] flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-midnight mb-2">Was passiert nach dem Absenden?</h4>
                            <ul className="text-sm text-secondary space-y-1">
                              <li>• Sofortige Bestätigung per WhatsApp</li>
                              <li>• KI-Analyse deiner Präferenzen (2 Min)</li>
                              <li>• Persönliche Prüfung durch Mustafa (5 Min)</li>
                              <li>• 3 perfekte Umrah-Empfehlungen per E-Mail</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                {currentStep > 1 ? (
                  <Button 
                    onClick={prevStep} 
                    variant="outline"
                    className="btn-gold-outline"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Zurück
                  </Button>
                ) : <div />}

                {currentStep < 3 ? (
                  <Button 
                    onClick={nextStep}
                    className="btn-gold"
                    disabled={
                      (currentStep === 1 && (!formData.personen || !formData.reisezeitraum || !formData.budget)) ||
                      (currentStep === 2 && (!formData.hotel_kategorie || !formData.entfernung_haram))
                    }
                  >
                    {config?.form.submitButtonText?.[currentStep - 1] || 'Weiter'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit}
                    className="btn-gold"
                    disabled={isSubmitting || !formData.vorname || !formData.nachname || !formData.email || !formData.telefon}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        KI arbeitet...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        {config?.form.submitButtonText?.[2] || 'Empfehlungen erstellen'}
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="trust-badge">
                <Shield className="w-5 h-5 text-[--primary-gold] mx-auto mb-2" />
                <span className="text-sm font-medium">100% Halal zertifiziert</span>
              </div>
              <div className="trust-badge">
                <Star className="w-5 h-5 text-[--primary-gold] mx-auto mb-2" />
                <span className="text-sm font-medium">4.8/5 ⭐ (28 echte Bewertungen)</span>
              </div>
              <div className="trust-badge">
                <MessageCircle className="w-5 h-5 text-[--primary-gold] mx-auto mb-2" />
                <span className="text-sm font-medium">Persönliche Beratung aus Medina</span>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted">
                Basierend auf <span className="font-semibold text-[--primary-gold]">60 zufriedenen Pilgern</span> & 28 echten Bewertungen
              </p>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  )
}