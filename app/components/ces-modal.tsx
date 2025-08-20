"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  MessageSquare,
  TrendingUp,
  Clock,
  Star,
  Send,
  CheckCircle,
  AlertCircle,
  Smile,
  Meh,
  Frown
} from 'lucide-react'

interface CESModalProps {
  isOpen: boolean
  onClose: () => void
  trigger: 'form_completion' | 'step_completion' | 'estimate_received' | 'manual'
  onSubmit?: (rating: number, feedback: string, improvements: string[]) => void
}

interface CESResponse {
  rating: number // 1-7 scale
  feedback: string
  improvements: string[]
  trigger: string
  timestamp: number
}

const CES_QUESTIONS = {
  form_completion: {
    title: "Wie einfach war es für dich, deine Umrah-Anfrage zu erstellen?",
    subtitle: "Deine Erfahrung hilft uns, den Service zu verbessern",
    context: "Gesamter Anfrageprozess"
  },
  step_completion: {
    title: "Wie zufrieden bist du mit diesem Schritt?",
    subtitle: "Kurze Bewertung des aktuellen Formularschritts",
    context: "Aktueller Schritt"
  },
  estimate_received: {
    title: "Wie hilfreich war die Preisschätzung für dich?",
    subtitle: "Bewerte die Instant-Schätzung unserer KI",
    context: "KI-Preisschätzung"
  },
  manual: {
    title: "Wie bewertest du deine Erfahrung bisher?",
    subtitle: "Allgemeines Feedback zur Benutzerfreundlichkeit",
    context: "Allgemeine Erfahrung"
  }
}

const CES_SCALE = [
  { value: 1, label: "Sehr schwierig", emoji: "😤", color: "text-red-600", bg: "bg-red-50" },
  { value: 2, label: "Schwierig", emoji: "😕", color: "text-red-500", bg: "bg-red-50" },
  { value: 3, label: "Etwas schwierig", emoji: "😐", color: "text-orange-500", bg: "bg-orange-50" },
  { value: 4, label: "Neutral", emoji: "😊", color: "text-yellow-500", bg: "bg-yellow-50" },
  { value: 5, label: "Etwas einfach", emoji: "😊", color: "text-lime-500", bg: "bg-lime-50" },
  { value: 6, label: "Einfach", emoji: "😄", color: "text-green-500", bg: "bg-green-50" },
  { value: 7, label: "Sehr einfach", emoji: "🤩", color: "text-emerald-600", bg: "bg-emerald-50" }
]

const IMPROVEMENT_SUGGESTIONS = [
  "Weniger Schritte im Formular",
  "Klarere Anweisungen", 
  "Schnellere Ladezeiten",
  "Bessere mobile Darstellung",
  "Mehr Hilfetexte",
  "Automatisches Speichern",
  "Bessere Preisschätzung",
  "Mehr Hoteloptionen",
  "WhatsApp Integration verbessern",
  "Einfachere Navigation"
]

export function CESModal({ isOpen, onClose, trigger, onSubmit }: CESModalProps) {
  const [step, setStep] = useState<'rating' | 'feedback' | 'complete'>('rating')
  const [rating, setRating] = useState<number>(0)
  const [feedback, setFeedback] = useState('')
  const [selectedImprovements, setSelectedImprovements] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const question = CES_QUESTIONS[trigger]

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('rating')
      setRating(0)
      setFeedback('')
      setSelectedImprovements([])
      setIsSubmitting(false)
    }
  }, [isOpen])

  const handleRatingSelect = (value: number) => {
    setRating(value)
    
    // Auto-advance for high ratings (6-7)
    if (value >= 6) {
      setTimeout(() => {
        setStep('feedback')
      }, 1000)
    }
  }

  const handleNext = () => {
    if (step === 'rating' && rating > 0) {
      setStep('feedback')
    }
  }

  const toggleImprovement = (improvement: string) => {
    setSelectedImprovements(prev => 
      prev.includes(improvement) 
        ? prev.filter(i => i !== improvement)
        : [...prev, improvement]
    )
  }

  const handleSubmit = async () => {
    if (rating === 0) return

    setIsSubmitting(true)

    const response: CESResponse = {
      rating,
      feedback: feedback.trim(),
      improvements: selectedImprovements,
      trigger,
      timestamp: Date.now()
    }

    try {
      // Store in localStorage for analytics
      const existingCES = JSON.parse(localStorage.getItem('umrahcheck_ces') || '[]')
      existingCES.push(response)
      localStorage.setItem('umrahcheck_ces', JSON.stringify(existingCES))

      // Send to analytics (if available)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'ces_feedback', {
          rating,
          trigger,
          feedback_length: feedback.length,
          improvements_count: selectedImprovements.length
        })
      }

      // Call parent callback
      if (onSubmit) {
        onSubmit(rating, feedback, selectedImprovements)
      }

      setStep('complete')
      
      // Auto-close after completion
      setTimeout(() => {
        onClose()
      }, 3000)

    } catch (error) {
      console.error('CES submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-md"
        >
          <Card className="card-gold shadow-2xl">
            <CardContent className="p-6">
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[--primary-gold] to-[--primary-gold-light] rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-midnight">Kurzes Feedback</h3>
                    <p className="text-xs text-secondary">{question.context}</p>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={onClose}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <AnimatePresence mode="wait">
                
                {/* Step 1: Rating */}
                {step === 'rating' && (
                  <motion.div
                    key="rating"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-midnight mb-2">
                        {question.title}
                      </h4>
                      <p className="text-sm text-secondary">
                        {question.subtitle}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-center text-sm text-muted mb-4">
                        1 = Sehr schwierig • 7 = Sehr einfach
                      </div>
                      
                      <div className="grid grid-cols-7 gap-2">
                        {CES_SCALE.map((item) => (
                          <motion.button
                            key={item.value}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleRatingSelect(item.value)}
                            className={`
                              aspect-square rounded-lg border-2 transition-all duration-200 p-2 text-center
                              ${rating === item.value 
                                ? `${item.bg} border-[--primary-gold] ${item.color}` 
                                : 'border-gray-200 hover:border-[--primary-gold]/50 text-gray-600 hover:bg-gray-50'
                              }
                            `}
                          >
                            <div className="text-lg mb-1">{item.emoji}</div>
                            <div className="text-xs font-medium">{item.value}</div>
                          </motion.button>
                        ))}
                      </div>

                      {rating > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center mt-4"
                        >
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream rounded-full">
                            <span className="text-2xl">{CES_SCALE[rating - 1].emoji}</span>
                            <span className="text-sm font-medium text-midnight">
                              {CES_SCALE[rating - 1].label}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {rating > 0 && rating < 6 && (
                      <Button onClick={handleNext} className="btn-gold w-full">
                        Weiter
                      </Button>
                    )}
                  </motion.div>
                )}

                {/* Step 2: Feedback */}
                {step === 'feedback' && (
                  <motion.div
                    key="feedback"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-2xl">{CES_SCALE[rating - 1].emoji}</span>
                        <span className="text-lg font-semibold text-midnight">
                          Danke für die {rating}/7 Bewertung!
                        </span>
                      </div>
                      <p className="text-sm text-secondary">
                        {rating < 5 ? "Wie können wir es noch einfacher machen?" : "Was hat dir besonders gefallen?"}
                      </p>
                    </div>

                    {/* Feedback Text */}
                    <div>
                      <label className="form-label">Dein Feedback (optional)</label>
                      <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder={rating < 5 ? "Was war schwierig oder verwirrend?" : "Was lief besonders gut?"}
                        rows={3}
                        className="form-input"
                      />
                    </div>

                    {/* Improvement Suggestions - only for ratings < 6 */}
                    {rating < 6 && (
                      <div>
                        <label className="form-label">Was würde helfen?</label>
                        <div className="grid grid-cols-2 gap-2">
                          {IMPROVEMENT_SUGGESTIONS.map((improvement) => (
                            <button
                              key={improvement}
                              onClick={() => toggleImprovement(improvement)}
                              className={`
                                text-xs p-2 rounded-md border-2 transition-all text-left
                                ${selectedImprovements.includes(improvement)
                                  ? 'border-[--primary-gold] bg-cream text-midnight'
                                  : 'border-gray-200 hover:border-[--primary-gold]/50 text-secondary'
                                }
                              `}
                            >
                              {improvement}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        onClick={() => setStep('rating')}
                        className="btn-gold-outline flex-1"
                      >
                        Zurück
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="btn-gold flex-1"
                      >
                        {isSubmitting ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        ) : (
                          <Send className="w-4 h-4 mr-2" />
                        )}
                        {isSubmitting ? 'Sende...' : 'Absenden'}
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Complete */}
                {step === 'complete' && (
                  <motion.div
                    key="complete"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-midnight mb-2">
                        Vielen Dank! 🙏
                      </h4>
                      <p className="text-sm text-secondary">
                        Dein Feedback hilft uns, die Umrah-Beratung zu verbessern.
                      </p>
                    </div>

                    <div className="bg-cream rounded-lg p-4">
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-[--primary-gold]" />
                        <span className="text-secondary">
                          {rating >= 6 ? "Freut uns, dass es einfach war!" : "Wir arbeiten an Verbesserungen!"}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-muted">
                      Das Fenster schließt sich automatisch...
                    </p>
                  </motion.div>
                )}

              </AnimatePresence>

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

// Hook for CES tracking
export function useCESTracking() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    trigger: CESModalProps['trigger']
  }>({
    isOpen: false,
    trigger: 'manual'
  })

  const showCESModal = (trigger: CESModalProps['trigger']) => {
    // Don't show modal if user already provided feedback recently
    const lastFeedback = localStorage.getItem('umrahcheck_ces_last')
    const now = Date.now()
    
    if (lastFeedback && now - parseInt(lastFeedback) < 300000) { // 5 minutes
      return
    }

    setModalState({ isOpen: true, trigger })
  }

  const closeCESModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }))
    localStorage.setItem('umrahcheck_ces_last', Date.now().toString())
  }

  const handleCESSubmit = (rating: number, feedback: string, improvements: string[]) => {
    // Analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ces_completed', {
        rating,
        trigger: modalState.trigger,
        has_feedback: feedback.length > 0,
        improvements_count: improvements.length
      })
    }
  }

  return {
    modalState,
    showCESModal,
    closeCESModal,
    handleCESSubmit
  }
}