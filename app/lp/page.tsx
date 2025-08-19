"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { CESModal, useCESTracking } from '@/components/ces-modal'
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
  name: string
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
    name: '',
    email: '',
    telefon: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [estimate, setEstimate] = useState<EstimateData | null>(null)
  const [isEstimating, setIsEstimating] = useState(false)
  
  // CES Tracking
  const { modalState, showCESModal, closeCESModal, handleCESSubmit } = useCESTracking()
  
  // Analytics Tracking
  const analytics = useAnalytics()
  
  // A/B Testing
  const { variation, config, trackConversion, trackMetric, getFeatureConfig, isTestActive } = useABTest()
  
  // Step timing tracking
  const [stepStartTime, setStepStartTime] = useState<number>(Date.now())

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
          
          // Trigger CES after first estimate (only once)
          if (!localStorage.getItem('umrahcheck_estimate_ces_shown')) {
            setTimeout(() => {
              showCESModal('estimate_received')
              localStorage.setItem('umrahcheck_estimate_ces_shown', 'true')
            }, 3000) // Give user time to review the estimate
          }
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
      
      // Trigger CES after step 2 (preferences completed)
      if (currentStep === 2) {
        setTimeout(() => {
          showCESModal('step_completion')
        }, 1500) // Show modal after user has time to see step 3
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Track form submission
    analytics.trackFormSubmission(formData)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
      
      // Track successful conversion
      analytics.trackConversion('form_completion')
      trackConversion('form_completion')
      
      // Trigger CES after successful form completion
      setTimeout(() => {
        showCESModal('form_completion')
      }, 2000) // Show after success message is displayed
    }, 2000)
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
              <div className="inline-flex items-center gap-2 bg-[--primary-gold] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Nur 2 Minuten für deine perfekte Umrah
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {config?.hero.title || "Deine KI-Umrah-Beratung in 3 einfachen Schritten"}
              </h1>
              
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                {config?.hero.subtitle || "Spare dir stundenlange Recherche. Unsere KI findet in wenigen Minuten die 3 besten Umrah-Pakete für dich – basierend auf 50.000+ echten Buchungen und persönlich geprüft von Mustafa aus Medina."}
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {(config?.hero.trustBadges || ['100% kostenlos & unverbindlich', 'Persönlich geprüft aus Medina', 'Antwort in unter 10 Minuten']).map((badge, i) => (
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
                          <option value="bis-2000">Bis 2.000€ (Budget)</option>
                          <option value="2000-3500">2.000€ - 3.500€ (Standard)</option>
                          <option value="3500-5000">3.500€ - 5.000€ (Premium)</option>
                          <option value="ab-5000">Ab 5.000€ (Luxus)</option>
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
                          <label className="form-label">Dein Name</label>
                          <input 
                            type="text"
                            className="form-input"
                            placeholder="z.B. Ahmed Mohammed"
                            value={formData.name}
                            onChange={(e) => updateFormData('name', e.target.value)}
                          />
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
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.telefon}
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
                <span className="text-sm font-medium">4.9/5 ⭐ (2,400+ Bewertungen)</span>
              </div>
              <div className="trust-badge">
                <MessageCircle className="w-5 h-5 text-[--primary-gold] mx-auto mb-2" />
                <span className="text-sm font-medium">Persönliche Beratung aus Medina</span>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted">
                Bereits über <span className="font-semibold text-[--primary-gold]">15.000 zufriedene Pilger</span> vertrauen auf UmrahCheck
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* CES Modal */}
      <CESModal
        isOpen={modalState.isOpen}
        onClose={closeCESModal}
        trigger={modalState.trigger}
        onSubmit={(rating, feedback, improvements) => {
          analytics.trackCESResponse(rating, modalState.trigger, feedback, improvements)
          trackMetric('ces_score', rating, { trigger: modalState.trigger })
          handleCESSubmit(rating, feedback, improvements)
        }}
      />
    </div>
  )
}