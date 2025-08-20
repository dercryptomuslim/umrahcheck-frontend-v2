"use client"

// Analytics events for UmrahCheck Landing Page tracking
// Includes Customer Effort Score (CES) and conversion funnel analytics

export interface AnalyticsEvent {
  event_name: string
  event_category: 'engagement' | 'conversion' | 'user_experience' | 'error' | 'performance'
  parameters?: Record<string, any>
}

// Core Analytics Functions
class UmrahCheckAnalytics {
  private isInitialized = false
  private sessionId: string
  private userId?: string
  private landingPageVariant: 'control' | 'golden_experience' = 'golden_experience'

  constructor() {
    this.sessionId = this.generateSessionId()
    this.initializeSession()
  }

  private generateSessionId(): string {
    return `umrah_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private initializeSession() {
    if (typeof window === 'undefined') return

    // Store session start
    const sessionData = {
      sessionId: this.sessionId,
      startTime: Date.now(),
      landingPageVariant: this.landingPageVariant,
      userAgent: navigator.userAgent,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      referrer: document.referrer || 'direct'
    }

    localStorage.setItem('umrahcheck_session', JSON.stringify(sessionData))
    this.isInitialized = true

    // Track page view
    this.trackEvent({
      event_name: 'page_view',
      event_category: 'engagement',
      parameters: {
        page_title: 'UmrahCheck Landing Page',
        page_location: window.location.href,
        session_id: this.sessionId,
        variant: this.landingPageVariant
      }
    })
  }

  // Core tracking function
  trackEvent(event: AnalyticsEvent) {
    if (typeof window === 'undefined') return

    const eventData = {
      ...event,
      timestamp: Date.now(),
      session_id: this.sessionId,
      user_id: this.userId,
      page_url: window.location.href,
      variant: this.landingPageVariant
    }

    try {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', event.event_name, {
          event_category: event.event_category,
          session_id: this.sessionId,
          landing_page_variant: this.landingPageVariant,
          ...event.parameters
        })
      }

      // Store locally for analysis
      const localEvents = JSON.parse(localStorage.getItem('umrahcheck_events') || '[]')
      localEvents.push(eventData)
      
      // Keep only last 100 events
      if (localEvents.length > 100) {
        localEvents.splice(0, localEvents.length - 100)
      }
      
      localStorage.setItem('umrahcheck_events', JSON.stringify(localEvents))

      // Console log for development
      if (process.env.NODE_ENV === 'development') {
        console.log('📊 Analytics Event:', eventData)
      }

    } catch (error) {
      console.error('Analytics tracking error:', error)
    }
  }

  // Form Funnel Tracking
  trackFormStep(step: number, stepName: string, completionTime?: number) {
    this.trackEvent({
      event_name: 'form_step_completed',
      event_category: 'conversion',
      parameters: {
        step_number: step,
        step_name: stepName,
        completion_time_ms: completionTime,
        funnel_step: `step_${step}_${stepName}`
      }
    })
  }

  trackFormStepStart(step: number, stepName: string) {
    this.trackEvent({
      event_name: 'form_step_started',
      event_category: 'engagement',
      parameters: {
        step_number: step,
        step_name: stepName,
        funnel_step: `step_${step}_${stepName}`
      }
    })
  }

  trackFormFieldInteraction(fieldName: string, fieldValue: string, step: number) {
    this.trackEvent({
      event_name: 'form_field_interaction',
      event_category: 'engagement',
      parameters: {
        field_name: fieldName,
        field_value_length: fieldValue.length,
        step_number: step,
        has_value: fieldValue.length > 0
      }
    })
  }

  // Instant Estimate Tracking
  trackEstimateRequest(formData: any) {
    this.trackEvent({
      event_name: 'estimate_requested',
      event_category: 'engagement',
      parameters: {
        persons: formData.personen,
        travel_period: formData.reisezeitraum,
        budget: formData.budget,
        hotel_category: formData.hotel_kategorie || 'not_specified',
        distance_preference: formData.entfernung_haram || 'not_specified'
      }
    })
  }

  trackEstimateReceived(estimate: any, responseTime: number) {
    this.trackEvent({
      event_name: 'estimate_received',
      event_category: 'conversion',
      parameters: {
        min_price: estimate.total_estimate.min,
        max_price: estimate.total_estimate.max,
        confidence_score: Math.round(estimate.confidence_score * 100),
        response_time_ms: responseTime,
        hotel_recommendations_count: estimate.recommended_hotels.length,
        price_range_width: estimate.total_estimate.max - estimate.total_estimate.min
      }
    })
  }

  // CES (Customer Effort Score) Tracking
  trackCESResponse(rating: number, trigger: string, feedback?: string, improvements?: string[]) {
    this.trackEvent({
      event_name: 'ces_response',
      event_category: 'user_experience',
      parameters: {
        ces_rating: rating,
        ces_trigger: trigger,
        has_feedback: feedback ? feedback.length > 0 : false,
        feedback_length: feedback?.length || 0,
        improvements_count: improvements?.length || 0,
        ces_category: rating >= 6 ? 'easy' : rating >= 4 ? 'neutral' : 'difficult'
      }
    })

    // Also track as conversion event for high ratings
    if (rating >= 6) {
      this.trackEvent({
        event_name: 'positive_ces_score',
        event_category: 'conversion',
        parameters: {
          ces_rating: rating,
          trigger: trigger
        }
      })
    }
  }

  // Conversion Tracking
  trackFormSubmission(formData: any) {
    this.trackEvent({
      event_name: 'form_submitted',
      event_category: 'conversion',
      parameters: {
        persons: formData.personen,
        travel_period: formData.reisezeitraum,
        budget: formData.budget,
        hotel_category: formData.hotel_kategorie,
        distance_preference: formData.entfernung_haram,
        has_special_requests: formData.besondere_wuensche.length > 0,
        contact_method: 'form' // vs whatsapp direct
      }
    })
  }

  trackConversion(type: 'form_completion' | 'whatsapp_click' | 'email_click') {
    this.trackEvent({
      event_name: 'conversion',
      event_category: 'conversion',
      parameters: {
        conversion_type: type,
        session_duration: Date.now() - parseInt(localStorage.getItem('umrahcheck_session_start') || '0')
      }
    })
  }

  // User Experience Tracking
  trackButtonClick(buttonName: string, location: string) {
    this.trackEvent({
      event_name: 'button_click',
      event_category: 'engagement',
      parameters: {
        button_name: buttonName,
        button_location: location
      }
    })
  }

  trackScrollDepth(percentage: number) {
    if (percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100) {
      this.trackEvent({
        event_name: 'scroll_depth',
        event_category: 'engagement',
        parameters: {
          scroll_percentage: percentage
        }
      })
    }
  }

  trackTimeOnStep(step: number, timeSpent: number) {
    this.trackEvent({
      event_name: 'time_on_step',
      event_category: 'engagement',
      parameters: {
        step_number: step,
        time_spent_seconds: Math.round(timeSpent / 1000)
      }
    })
  }

  // Error Tracking
  trackError(errorType: string, errorMessage: string, context?: any) {
    this.trackEvent({
      event_name: 'error_occurred',
      event_category: 'error',
      parameters: {
        error_type: errorType,
        error_message: errorMessage,
        error_context: JSON.stringify(context).substring(0, 200)
      }
    })
  }

  // Performance Tracking
  trackPerformanceMetric(metric: string, value: number, unit: string = 'ms') {
    this.trackEvent({
      event_name: 'performance_metric',
      event_category: 'performance',
      parameters: {
        metric_name: metric,
        metric_value: value,
        metric_unit: unit
      }
    })
  }

  // WhatsApp & Email Clicks
  trackWhatsAppClick(source: 'header' | 'form_complete' | 'estimate_section' | 'trust_signal') {
    this.trackEvent({
      event_name: 'whatsapp_click',
      event_category: 'conversion',
      parameters: {
        click_source: source
      }
    })
  }

  trackEmailClick(source: 'contact_form' | 'footer' | 'completion') {
    this.trackEvent({
      event_name: 'email_click',
      event_category: 'conversion',
      parameters: {
        click_source: source
      }
    })
  }

  // Session Analytics
  getSessionAnalytics() {
    if (typeof window === 'undefined') return null

    const session = JSON.parse(localStorage.getItem('umrahcheck_session') || '{}')
    const events = JSON.parse(localStorage.getItem('umrahcheck_events') || '[]')
    const cesData = JSON.parse(localStorage.getItem('umrahcheck_ces') || '[]')

    return {
      session,
      eventCount: events.length,
      cesResponses: cesData.length,
      averageCES: cesData.length > 0 ? cesData.reduce((sum: number, ces: any) => sum + ces.rating, 0) / cesData.length : null,
      sessionDuration: Date.now() - session.startTime,
      conversionEvents: events.filter((e: any) => e.event_category === 'conversion').length
    }
  }
}

// Export singleton instance
export const analytics = new UmrahCheckAnalytics()

// Hook for easy component usage
export function useAnalytics() {
  return {
    trackEvent: analytics.trackEvent.bind(analytics),
    trackFormStep: analytics.trackFormStep.bind(analytics),
    trackFormStepStart: analytics.trackFormStepStart.bind(analytics),
    trackFormFieldInteraction: analytics.trackFormFieldInteraction.bind(analytics),
    trackEstimateRequest: analytics.trackEstimateRequest.bind(analytics),
    trackEstimateReceived: analytics.trackEstimateReceived.bind(analytics),
    trackCESResponse: analytics.trackCESResponse.bind(analytics),
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics),
    trackConversion: analytics.trackConversion.bind(analytics),
    trackButtonClick: analytics.trackButtonClick.bind(analytics),
    trackScrollDepth: analytics.trackScrollDepth.bind(analytics),
    trackTimeOnStep: analytics.trackTimeOnStep.bind(analytics),
    trackError: analytics.trackError.bind(analytics),
    trackWhatsAppClick: analytics.trackWhatsAppClick.bind(analytics),
    trackEmailClick: analytics.trackEmailClick.bind(analytics),
    getSessionAnalytics: analytics.getSessionAnalytics.bind(analytics)
  }
}

// Utility functions
export function initializeScrollTracking() {
  if (typeof window === 'undefined') return

  let maxScroll = 0
  const handleScroll = () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    if (scrolled > maxScroll) {
      maxScroll = scrolled
      analytics.trackScrollDepth(Math.floor(maxScroll))
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}

// Auto-track page performance
if (typeof window !== 'undefined') {
  // Track page load performance
  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        analytics.trackPerformanceMetric('page_load_time', navigation.loadEventEnd - navigation.fetchStart)
        analytics.trackPerformanceMetric('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.fetchStart)
        analytics.trackPerformanceMetric('first_contentful_paint', navigation.loadEventStart - navigation.fetchStart)
      }
    }, 1000)
  })
}