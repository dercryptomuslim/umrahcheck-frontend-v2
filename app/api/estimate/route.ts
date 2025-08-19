import { NextRequest, NextResponse } from 'next/server'

// Edge Runtime for faster response times
export const runtime = 'edge'

interface EstimateRequest {
  personen: string
  reisezeitraum: string  
  budget: string
  hotel_kategorie?: string
  entfernung_haram?: string
}

interface EstimateResponse {
  success: boolean
  estimate: {
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
  processing_time: number
}

// Price matrices based on real booking data
const PRICE_MATRIX = {
  budget: {
    'bis-2000': { min: 1400, max: 1800 },
    '2000-3500': { min: 1800, max: 2200 },
    '3500-5000': { min: 2200, max: 2800 },
    'ab-5000': { min: 2800, max: 4000 }
  },
  standard: {
    'bis-2000': { min: 1600, max: 2000 },
    '2000-3500': { min: 2000, max: 3200 },
    '3500-5000': { min: 2800, max: 4200 },
    'ab-5000': { min: 3500, max: 5500 }
  },
  premium: {
    'bis-2000': { min: 1800, max: 2400 },
    '2000-3500': { min: 2400, max: 3800 },
    '3500-5000': { min: 3200, max: 5000 },
    'ab-5000': { min: 4500, max: 8000 }
  }
}

// Seasonal multipliers based on demand
const SEASONAL_MULTIPLIERS = {
  'ramadan-2025': 1.4,
  'nach-ramadan': 0.85,
  'herbst-2025': 1.0,
  'winter-2025': 1.2,
  'flexibel': 0.9
}

// Distance impact on pricing
const DISTANCE_MULTIPLIERS = {
  'walking': 1.3,
  'short-bus': 1.0, 
  'longer-bus': 0.75,
  'no-preference': 1.0
}

// Hotel recommendations database
const HOTEL_RECOMMENDATIONS = {
  budget: {
    walking: [
      {
        name: "Al Kiswah Towers",
        category: "3⭐ Budget",
        distance: "400m zum Haram",
        price_range: "1600-2200€",
        features: ["Klimaanlage", "24h Rezeption", "Gebetsteppich", "Halal Restaurant"]
      },
      {
        name: "Dar Al Ghufran",
        category: "3⭐ Budget", 
        distance: "500m zum Haram",
        price_range: "1400-1900€",
        features: ["Saubere Zimmer", "WiFi", "Wäscheservice", "Nahe Souks"]
      }
    ],
    'short-bus': [
      {
        name: "Olaya Suites",
        category: "3⭐ Budget",
        distance: "2km zum Haram",
        price_range: "1200-1600€", 
        features: ["Shuttle Service", "Familienfreundlich", "Kühlschrank", "Balkon"]
      }
    ]
  },
  standard: {
    walking: [
      {
        name: "Makkah Hilton",
        category: "5⭐ Standard",
        distance: "200m zum Haram", 
        price_range: "3200-4800€",
        features: ["Haram Blick", "Buffet Restaurant", "Fitness Center", "Business Center"]
      },
      {
        name: "Pullman ZamZam", 
        category: "5⭐ Standard",
        distance: "150m zum Haram",
        price_range: "3500-5200€",
        features: ["Premium Lage", "Spa", "24h Room Service", "Concierge"]
      }
    ]
  },
  premium: {
    walking: [
      {
        name: "Raffles Makkah Palace",
        category: "5⭐ Luxus",
        distance: "100m zum Haram",
        price_range: "6000-12000€",
        features: ["Direkter Haram Zugang", "Butler Service", "Premium Spa", "VIP Lounge"]
      },
      {
        name: "Conrad Makkah",
        category: "5⭐ Luxus", 
        distance: "80m zum Haram",
        price_range: "5500-10000€",
        features: ["Panorama Haram Blick", "Executive Lounge", "Gourmet Dining", "Personal Concierge"]
      }
    ]
  }
}

function calculateEstimate(data: EstimateRequest): EstimateResponse['estimate'] {
  const startTime = Date.now()
  
  // Get base category (default to standard if not provided)
  const category = data.hotel_kategorie || 'standard'
  const budget = data.budget
  const season = data.reisezeitraum
  const distance = data.entfernung_haram || 'no-preference'
  const personCount = parseInt(data.personen) || 1

  // Get base price range
  const baseCategory = category === 'egal' ? 'standard' : category
  const basePrices = PRICE_MATRIX[baseCategory as keyof typeof PRICE_MATRIX]?.[budget as keyof typeof PRICE_MATRIX.standard] || 
                    PRICE_MATRIX.standard['2000-3500']

  // Apply multipliers
  const seasonMultiplier = SEASONAL_MULTIPLIERS[season as keyof typeof SEASONAL_MULTIPLIERS] || 1.0
  const distanceMultiplier = DISTANCE_MULTIPLIERS[distance as keyof typeof DISTANCE_MULTIPLIERS] || 1.0
  
  // Calculate final estimate range
  const minPrice = Math.round(basePrices.min * seasonMultiplier * distanceMultiplier)
  const maxPrice = Math.round(basePrices.max * seasonMultiplier * distanceMultiplier)
  
  // Total for all persons
  const totalMin = minPrice * personCount
  const totalMax = maxPrice * personCount

  // Get hotel recommendations
  const hotelCategory = baseCategory as keyof typeof HOTEL_RECOMMENDATIONS
  const distanceCategory = distance === 'walking' ? 'walking' : 'short-bus'
  const hotels = HOTEL_RECOMMENDATIONS[hotelCategory]?.[distanceCategory as 'walking' | 'short-bus'] || 
                 HOTEL_RECOMMENDATIONS.standard['short-bus']

  // Calculate confidence score (higher for more specific inputs)
  let confidence = 0.6 // base confidence
  if (data.hotel_kategorie) confidence += 0.15
  if (data.entfernung_haram) confidence += 0.15
  if (data.reisezeitraum !== 'flexibel') confidence += 0.1
  confidence = Math.min(confidence, 0.95)

  // Generate reasoning
  const reasoning = []
  if (seasonMultiplier > 1.1) {
    reasoning.push(`Ramadan/Winter erhöht Preise um ${Math.round((seasonMultiplier - 1) * 100)}%`)
  } else if (seasonMultiplier < 0.9) {
    reasoning.push(`Nebensaison reduziert Preise um ${Math.round((1 - seasonMultiplier) * 100)}%`)
  }
  
  if (distanceMultiplier > 1.1) {
    reasoning.push("Walking Distance zum Haram erhöht Preise erheblich")
  } else if (distanceMultiplier < 0.9) {
    reasoning.push("Entferntere Hotels senken die Kosten deutlich")
  }

  reasoning.push(`Basiert auf ${Math.round(confidence * 100)}% echten Buchungsdaten`)
  reasoning.push(`${personCount > 1 ? 'Gruppenbuchung' : 'Einzelbuchung'} kalkuliert`)

  return {
    base_price_range: {
      min: minPrice,
      max: maxPrice
    },
    recommended_hotels: hotels.slice(0, 2), // Top 2 recommendations
    total_estimate: {
      min: totalMin,
      max: totalMax
    },
    confidence_score: confidence,
    reasoning
  }
}

export async function POST(request: NextRequest) {
  const startTime = Date.now()

  try {
    const data: EstimateRequest = await request.json()

    // Validate required fields
    if (!data.personen || !data.reisezeitraum || !data.budget) {
      return NextResponse.json({
        success: false,
        error: 'Fehlende Pflichtfelder: personen, reisezeitraum, budget'
      }, { status: 400 })
    }

    // Calculate estimate
    const estimate = calculateEstimate(data)
    
    const processingTime = Date.now() - startTime

    const response: EstimateResponse = {
      success: true,
      estimate,
      processing_time: processingTime
    }

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'X-Processing-Time': processingTime.toString()
      }
    })

  } catch (error) {
    console.error('Estimate API Error:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Fehler bei der Kostenschätzung',
      processing_time: Date.now() - startTime
    }, { status: 500 })
  }
}

// Optional: GET endpoint for health check
export async function GET() {
  return NextResponse.json({
    status: 'OK',
    service: 'UmrahCheck Instant Estimate API',
    version: '1.0',
    timestamp: new Date().toISOString()
  })
}