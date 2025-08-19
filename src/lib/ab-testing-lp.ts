"use client"

// A/B Testing Framework for UmrahCheck Landing Page
// Tests different variations of the seamless customer experience

export interface ABTestConfig {
  testId: string
  testName: string
  description: string
  variations: ABVariation[]
  trafficAllocation: number // 0-1, percentage of users to include
  startDate: string
  endDate?: string
  isActive: boolean
  targetMetric: 'form_completion' | 'whatsapp_click' | 'email_click' | 'ces_score' | 'step_completion'
}

export interface ABVariation {
  variationId: string
  name: string
  description: string
  trafficWeight: number // 0-1, should sum to 1 across all variations
  config: LandingPageConfig
}

export interface LandingPageConfig {
  // Hero Section Variations
  hero: {
    title: string
    subtitle: string
    ctaText: string
    trustBadges: string[]
    backgroundStyle: 'gradient' | 'solid' | 'pattern'
  }
  
  // Form Variations
  form: {
    stepIndicator: 'progress_bar' | 'step_numbers' | 'icons'
    submitButtonText: string[]
    estimateDisplay: 'inline' | 'modal' | 'sidebar' | 'none'
    fieldsPerStep: [number, number, number] // fields per step
  }
  
  // Design Variations
  design: {
    colorScheme: 'golden' | 'emerald' | 'mixed'
    buttonStyle: 'rounded' | 'sharp' | 'pill'
    cardShadow: 'soft' | 'medium' | 'large'
    animation: 'subtle' | 'moderate' | 'none'
  }
  
  // CES/UX Variations
  ux: {
    cesFrequency: 'after_step1' | 'after_step2' | 'after_completion' | 'smart'
    loadingStates: boolean
    autoSave: boolean
    helpText: 'minimal' | 'detailed' | 'tooltips'
  }
}

// Predefined test configurations
const AB_TEST_CONFIGS: ABTestConfig[] = [
  {
    testId: 'golden_experience_v1',
    testName: 'Golden Experience Optimization',
    description: 'Test variations of the golden landing page design and UX flow',
    trafficAllocation: 1.0, // 100% of users
    startDate: '2024-08-19',
    isActive: true,
    targetMetric: 'form_completion',
    variations: [
      {
        variationId: 'control_golden',
        name: 'Control - Golden Experience',
        description: 'Original golden design with 3-step form',
        trafficWeight: 0.4,
        config: {
          hero: {
            title: 'Deine KI-Umrah-Beratung in 3 einfachen Schritten',
            subtitle: 'Spare dir stundenlange Recherche. Unsere KI findet in wenigen Minuten die 3 besten Umrah-Pakete für dich – basierend auf 50.000+ echten Buchungen und persönlich geprüft von Mustafa aus Medina.',
            ctaText: 'Jetzt kostenlos starten',
            trustBadges: ['100% kostenlos & unverbindlich', 'Persönlich geprüft aus Medina', 'Antwort in unter 10 Minuten'],
            backgroundStyle: 'gradient'
          },
          form: {
            stepIndicator: 'progress_bar',
            submitButtonText: ['Weiter', 'Weiter', 'Empfehlungen erstellen'],
            estimateDisplay: 'inline',
            fieldsPerStep: [3, 3, 3]
          },
          design: {
            colorScheme: 'golden',
            buttonStyle: 'rounded',
            cardShadow: 'medium',
            animation: 'moderate'
          },
          ux: {
            cesFrequency: 'smart',
            loadingStates: true,
            autoSave: true,
            helpText: 'detailed'
          }
        }
      },
      {
        variationId: 'minimal_golden',
        name: 'Minimal Golden',
        description: 'Simplified golden design with reduced cognitive load',
        trafficWeight: 0.3,
        config: {
          hero: {
            title: 'Deine perfekte Umrah in 2 Minuten',
            subtitle: 'KI findet die 3 besten Optionen für dich. Persönlich geprüft aus Medina.',
            ctaText: 'Sofort starten',
            trustBadges: ['100% kostenlos', 'Antwort in 10 Min'],
            backgroundStyle: 'solid'
          },
          form: {
            stepIndicator: 'step_numbers',
            submitButtonText: ['Weiter', 'Weiter', 'Jetzt Empfehlungen'],
            estimateDisplay: 'modal',
            fieldsPerStep: [2, 2, 3]
          },
          design: {
            colorScheme: 'golden',
            buttonStyle: 'pill',
            cardShadow: 'soft',
            animation: 'subtle'
          },
          ux: {
            cesFrequency: 'after_completion',
            loadingStates: true,
            autoSave: false,
            helpText: 'minimal'
          }
        }
      },
      {
        variationId: 'urgent_golden',
        name: 'Urgency Golden',
        description: 'Golden design with urgency and scarcity elements',
        trafficWeight: 0.3,
        config: {
          hero: {
            title: 'Letzte Chance: Umrah 2025 Plätze werden knapp',
            subtitle: '🔥 Nur noch wenige Premium-Plätze verfügbar! Sichere dir jetzt deinen Platz mit unserer KI-Beratung.',
            ctaText: 'JETZT sichern (nur noch heute)',
            trustBadges: ['⏰ Nur 24h gültig', '🔥 Begrenzte Plätze', '✅ Sofortige Bestätigung'],
            backgroundStyle: 'gradient'
          },
          form: {
            stepIndicator: 'icons',
            submitButtonText: ['Schnell weiter', 'Fast fertig!', '🚀 JETZT Platz sichern'],
            estimateDisplay: 'inline',
            fieldsPerStep: [3, 3, 3]
          },
          design: {
            colorScheme: 'mixed',
            buttonStyle: 'sharp',
            cardShadow: 'large',
            animation: 'moderate'
          },
          ux: {
            cesFrequency: 'after_step1',
            loadingStates: true,
            autoSave: true,
            helpText: 'tooltips'
          }
        }
      }
    ]
  },
  {
    testId: 'ces_optimization_v1',
    testName: 'CES Frequency Optimization',
    description: 'Test different CES trigger frequencies for optimal feedback collection',
    trafficAllocation: 0.5, // 50% of users
    startDate: '2024-08-20',
    isActive: false, // Will be activated later
    targetMetric: 'ces_score',
    variations: [
      {
        variationId: 'ces_after_estimate',
        name: 'CES After Estimate',
        description: 'Show CES modal after first estimate received',
        trafficWeight: 0.5,
        config: {
          hero: {
            title: 'Deine KI-Umrah-Beratung in 3 einfachen Schritten',
            subtitle: 'Spare dir stundenlange Recherche. Unsere KI findet in wenigen Minuten die 3 besten Umrah-Pakete für dich.',
            ctaText: 'Jetzt kostenlos starten',
            trustBadges: ['100% kostenlos', 'KI-gestützt', 'Sofortige Antwort'],
            backgroundStyle: 'gradient'
          },
          form: {
            stepIndicator: 'progress_bar',
            submitButtonText: ['Weiter', 'Weiter', 'Empfehlungen erstellen'],
            estimateDisplay: 'inline',
            fieldsPerStep: [3, 3, 3]
          },
          design: {
            colorScheme: 'golden',
            buttonStyle: 'rounded',
            cardShadow: 'medium',
            animation: 'moderate'
          },
          ux: {
            cesFrequency: 'after_step1',
            loadingStates: true,
            autoSave: true,
            helpText: 'detailed'
          }
        }
      },
      {
        variationId: 'ces_completion_only',
        name: 'CES Completion Only',
        description: 'Show CES modal only after form completion',
        trafficWeight: 0.5,
        config: {
          hero: {
            title: 'Deine KI-Umrah-Beratung in 3 einfachen Schritten',
            subtitle: 'Spare dir stundenlange Recherche. Unsere KI findet in wenigen Minuten die 3 besten Umrah-Pakete für dich.',
            ctaText: 'Jetzt kostenlos starten',
            trustBadges: ['100% kostenlos', 'KI-gestützt', 'Sofortige Antwort'],
            backgroundStyle: 'gradient'
          },
          form: {
            stepIndicator: 'progress_bar',
            submitButtonText: ['Weiter', 'Weiter', 'Empfehlungen erstellen'],
            estimateDisplay: 'inline',
            fieldsPerStep: [3, 3, 3]
          },
          design: {
            colorScheme: 'golden',
            buttonStyle: 'rounded',
            cardShadow: 'medium',
            animation: 'moderate'
          },
          ux: {
            cesFrequency: 'after_completion',
            loadingStates: true,
            autoSave: true,
            helpText: 'detailed'
          }
        }
      }
    ]
  }
]

// A/B Testing Manager Class
class ABTestManager {
  private currentVariation: ABVariation | null = null
  private userId: string
  private sessionId: string

  constructor() {
    this.userId = this.getUserId()
    this.sessionId = this.getSessionId()
    this.initializeABTest()
  }

  private getUserId(): string {
    if (typeof window === 'undefined') return 'server'
    
    let userId = localStorage.getItem('umrahcheck_user_id')
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      localStorage.setItem('umrahcheck_user_id', userId)
    }
    return userId
  }

  private getSessionId(): string {
    if (typeof window === 'undefined') return 'server'
    
    const session = JSON.parse(localStorage.getItem('umrahcheck_session') || '{}')
    return session.sessionId || 'no_session'
  }

  private hashUserId(userId: string, testId: string): number {
    let hash = 0
    const str = `${userId}_${testId}`
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // Convert to 32-bit integer
    }
    return Math.abs(hash) / 2147483648 // Normalize to 0-1
  }

  private selectVariation(test: ABTestConfig): ABVariation | null {
    // Check if user should be included in test
    const includeUser = this.hashUserId(this.userId, test.testId) < test.trafficAllocation
    if (!includeUser) return null

    // Select variation based on user hash
    const userHash = this.hashUserId(this.userId, `${test.testId}_variation`)
    let cumulativeWeight = 0
    
    for (const variation of test.variations) {
      cumulativeWeight += variation.trafficWeight
      if (userHash <= cumulativeWeight) {
        return variation
      }
    }
    
    // Fallback to first variation
    return test.variations[0] || null
  }

  private initializeABTest() {
    if (typeof window === 'undefined') return

    // Find active test
    const activeTest = AB_TEST_CONFIGS.find(test => {
      if (!test.isActive) return false
      
      const now = new Date()
      const startDate = new Date(test.startDate)
      const endDate = test.endDate ? new Date(test.endDate) : null
      
      return now >= startDate && (!endDate || now <= endDate)
    })

    if (!activeTest) {
      console.log('🧪 No active A/B tests')
      return
    }

    // Check if user already has assigned variation
    const existingAssignment = localStorage.getItem(`ab_test_${activeTest.testId}`)
    if (existingAssignment) {
      const assignment = JSON.parse(existingAssignment)
      this.currentVariation = activeTest.variations.find(v => v.variationId === assignment.variationId) || null
    } else {
      // Assign new variation
      this.currentVariation = this.selectVariation(activeTest)
      
      if (this.currentVariation) {
        const assignment = {
          testId: activeTest.testId,
          variationId: this.currentVariation.variationId,
          assignedAt: Date.now(),
          userId: this.userId,
          sessionId: this.sessionId
        }
        
        localStorage.setItem(`ab_test_${activeTest.testId}`, JSON.stringify(assignment))
        
        // Track assignment
        this.trackABEvent('variation_assigned', {
          test_id: activeTest.testId,
          variation_id: this.currentVariation.variationId,
          variation_name: this.currentVariation.name
        })
      }
    }

    if (this.currentVariation) {
      console.log(`🧪 A/B Test Active: ${activeTest.testName}`)
      console.log(`🎯 Variation: ${this.currentVariation.name}`)
    }
  }

  private trackABEvent(eventName: string, data: any) {
    if (typeof window === 'undefined') return

    try {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', eventName, {
          event_category: 'ab_testing',
          test_id: data.test_id,
          variation_id: data.variation_id,
          user_id: this.userId,
          session_id: this.sessionId,
          ...data
        })
      }

      // Local storage for analysis
      const abEvents = JSON.parse(localStorage.getItem('umrahcheck_ab_events') || '[]')
      abEvents.push({
        event: eventName,
        timestamp: Date.now(),
        userId: this.userId,
        sessionId: this.sessionId,
        ...data
      })
      
      // Keep only last 50 events
      if (abEvents.length > 50) {
        abEvents.splice(0, abEvents.length - 50)
      }
      
      localStorage.setItem('umrahcheck_ab_events', JSON.stringify(abEvents))

    } catch (error) {
      console.error('A/B tracking error:', error)
    }
  }

  // Public Methods
  getCurrentVariation(): ABVariation | null {
    return this.currentVariation
  }

  getVariationConfig(): LandingPageConfig | null {
    return this.currentVariation?.config || null
  }

  trackConversion(metric: string, value?: number) {
    if (!this.currentVariation) return

    this.trackABEvent('ab_conversion', {
      test_id: this.getCurrentTestId(),
      variation_id: this.currentVariation.variationId,
      metric,
      value: value || 1
    })
  }

  trackMetric(metric: string, value: number, metadata?: any) {
    if (!this.currentVariation) return

    this.trackABEvent('ab_metric', {
      test_id: this.getCurrentTestId(),
      variation_id: this.currentVariation.variationId,
      metric,
      value,
      ...metadata
    })
  }

  private getCurrentTestId(): string {
    const activeTest = AB_TEST_CONFIGS.find(test => {
      const now = new Date()
      const startDate = new Date(test.startDate)
      const endDate = test.endDate ? new Date(test.endDate) : null
      return test.isActive && now >= startDate && (!endDate || now <= endDate)
    })
    return activeTest?.testId || 'no_test'
  }

  // Utility methods for React components
  shouldShowFeature(feature: string): boolean {
    const config = this.getVariationConfig()
    if (!config) return true

    // Add feature flags based on configuration
    switch (feature) {
      case 'estimate_inline':
        return config.form.estimateDisplay === 'inline'
      case 'auto_save':
        return config.ux.autoSave
      case 'loading_states':
        return config.ux.loadingStates
      case 'detailed_help':
        return config.ux.helpText === 'detailed'
      default:
        return true
    }
  }

  getFeatureConfig<T>(path: string): T | null {
    const config = this.getVariationConfig()
    if (!config) return null

    // Navigate config path (e.g., 'hero.title', 'form.stepIndicator')
    const keys = path.split('.')
    let current: any = config
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key]
      } else {
        return null
      }
    }
    
    return current as T
  }
}

// Export singleton instance
export const abTestManager = new ABTestManager()

// React hook for easy component usage
export function useABTest() {
  const variation = abTestManager.getCurrentVariation()
  const config = abTestManager.getVariationConfig()

  return {
    variation,
    config,
    trackConversion: abTestManager.trackConversion.bind(abTestManager),
    trackMetric: abTestManager.trackMetric.bind(abTestManager),
    shouldShowFeature: abTestManager.shouldShowFeature.bind(abTestManager),
    getFeatureConfig: abTestManager.getFeatureConfig.bind(abTestManager),
    isTestActive: variation !== null,
    variationName: variation?.name || 'no_test'
  }
}