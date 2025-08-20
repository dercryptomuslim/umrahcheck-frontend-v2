// A/B Testing Framework für Conversion-Optimierung
import { useEffect, useState } from 'react'

// Verfügbare Test-Varianten
export const AB_TESTS = {
  heroHeadline: {
    name: 'Hero Headline Test',
    variants: {
      control: 'Deine Umrah - Transparent, Einfach, Halal',
      variantA: 'Spare bis zu 500€ bei deiner Umrah-Reise',
      variantB: 'Die günstigste Umrah beginnt hier',
      variantC: 'Von Muslimen für Muslime - Deine perfekte Umrah',
    },
    defaultVariant: 'control',
  },
  ctaButton: {
    name: 'CTA Button Test',
    variants: {
      control: 'Jetzt Angebot einholen',
      variantA: 'Kostenlos beraten lassen',
      variantB: 'Umrah planen →',
      variantC: 'WhatsApp Beratung',
    },
    defaultVariant: 'control',
  },
  trustBadge: {
    name: 'Trust Badge Test',
    variants: {
      control: '100% Halal & Transparent',
      variantA: 'Über 1000+ zufriedene Pilger',
      variantB: 'Direkt aus Medina beraten',
      variantC: 'TÜV-geprüft & Halal-zertifiziert',
    },
    defaultVariant: 'control',
  },
  priceDisplay: {
    name: 'Price Display Test',
    variants: {
      control: 'ab 1.899€',
      variantA: 'ab 1.899€ (All-Inclusive)',
      variantB: '1.899€ statt 2.399€',
      variantC: 'ab 158€/Monat',
    },
    defaultVariant: 'control',
  },
}

// Typ-Definitionen
export type TestName = keyof typeof AB_TESTS
export type VariantName<T extends TestName> = keyof typeof AB_TESTS[T]['variants']

// Cookie-basierte Varianten-Speicherung
const COOKIE_PREFIX = 'umrahcheck_ab_'
const COOKIE_DAYS = 30

// Utility: Cookie setzen
const setCookie = (name: string, value: string, days: number) => {
  if (typeof document === 'undefined') return
  
  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict`
}

// Utility: Cookie lesen
const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null
  
  const nameEQ = `${name}=`
  const cookies = document.cookie.split(';')
  
  for (let cookie of cookies) {
    cookie = cookie.trim()
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length)
    }
  }
  return null
}

// Zufällige Variante auswählen
const selectRandomVariant = <T extends TestName>(testName: T): VariantName<T> => {
  const test = AB_TESTS[testName]
  const variants = Object.keys(test.variants) as VariantName<T>[]
  const randomIndex = Math.floor(Math.random() * variants.length)
  return variants[randomIndex]
}

// Haupt-Hook für A/B Testing
export const useABTest = <T extends TestName>(testName: T) => {
  const [variant, setVariant] = useState<VariantName<T>>(
    AB_TESTS[testName].defaultVariant as VariantName<T>
  )
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Cookie-Name für diesen Test
    const cookieName = `${COOKIE_PREFIX}${testName}`
    
    // Prüfe ob Variante bereits gespeichert
    let savedVariant = getCookie(cookieName) as VariantName<T> | null
    
    if (!savedVariant) {
      // Neue Variante auswählen und speichern
      savedVariant = selectRandomVariant(testName)
      setCookie(cookieName, savedVariant as string, COOKIE_DAYS)
      
      // Track Event für Analytics
      trackABTestAssignment(testName, savedVariant as string)
    }
    
    setVariant(savedVariant)
    setIsLoading(false)
  }, [testName])

  // Hole den Text für die aktuelle Variante
  const variantText = (AB_TESTS[testName].variants as any)[variant]

  return {
    variant,
    variantText,
    isLoading,
    testName,
  }
}

// Conversion Tracking
export const trackABTestConversion = (testName: TestName, variant: string) => {
  if (typeof window === 'undefined') return
  
  // Vercel Analytics Event
  if ((window as any).va) {
    (window as any).va('event', {
      name: 'ab_test_conversion',
      data: {
        test: testName,
        variant,
        timestamp: new Date().toISOString(),
      },
    })
  }
  
  // Google Analytics Event (falls vorhanden)
  if ((window as any).gtag) {
    (window as any).gtag('event', 'ab_test_conversion', {
      test_name: testName,
      variant_name: variant,
    })
  }
  
  console.log(`[A/B Test] Conversion tracked: ${String(testName)} - ${String(variant)}`)
}

// Test-Zuweisung tracken
const trackABTestAssignment = (testName: TestName, variant: string) => {
  if (typeof window === 'undefined') return
  
  // Vercel Analytics Event
  if ((window as any).va) {
    (window as any).va('event', {
      name: 'ab_test_assignment',
      data: {
        test: testName,
        variant,
        timestamp: new Date().toISOString(),
      },
    })
  }
  
  console.log(`[A/B Test] User assigned to: ${String(testName)} - ${String(variant)}`)
}

// A/B Test Manager Component für globale Tests
export const ABTestManager = () => {
  useEffect(() => {
    // Initialisiere alle Tests beim ersten Laden
    Object.keys(AB_TESTS).forEach((testName) => {
      const cookieName = `${COOKIE_PREFIX}${testName}`
      if (!getCookie(cookieName)) {
        const variant = selectRandomVariant(testName as TestName)
        setCookie(cookieName, variant as string, COOKIE_DAYS)
        trackABTestAssignment(testName as TestName, variant as string)
      }
    })
  }, [])

  return null
}

// Utility: Alle Test-Varianten für Debug anzeigen
export const getActiveTests = (): Record<string, string> => {
  const tests: Record<string, string> = {}
  
  Object.keys(AB_TESTS).forEach((testName) => {
    const cookieName = `${COOKIE_PREFIX}${testName}`
    const variant = getCookie(cookieName)
    if (variant) {
      tests[testName] = variant
    }
  })
  
  return tests
}

// Utility: Test-Variante manuell setzen (für QA)
export const forceVariant = <T extends TestName>(
  testName: T,
  variant: VariantName<T>
) => {
  const cookieName = `${COOKIE_PREFIX}${testName}`
  setCookie(cookieName, variant as string, COOKIE_DAYS)
  console.log(`[A/B Test] Forced variant: ${String(testName)} - ${String(variant)}`)
  
  // Reload um Änderung anzuwenden
  if (typeof window !== 'undefined') {
    window.location.reload()
  }
}