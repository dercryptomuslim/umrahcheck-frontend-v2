import { NextRequest, NextResponse } from 'next/server'

// Simple test version of the estimate API
export const runtime = 'edge'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Simple static response for testing
    const response = {
      success: true,
      estimate: {
        base_price_range: {
          min: 2000,
          max: 3000
        },
        recommended_hotels: [
          {
            name: "Test Hotel Makkah",
            category: "4⭐ Standard",
            distance: "500m zum Haram",
            price_range: "2000-3000€",
            features: ["Klimaanlage", "WiFi", "Halal Restaurant"]
          }
        ],
        total_estimate: {
          min: 4000,
          max: 6000
        },
        confidence_score: 0.85,
        reasoning: ["Test-Schätzung", "Statische Daten"]
      },
      processing_time: 50
    }
    
    return NextResponse.json(response)
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: `Test API Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      processing_time: 0
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'OK',
    message: 'Test Estimate API is working'
  })
}