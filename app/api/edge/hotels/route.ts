// Edge Function für ultraschnelle Hotel-API Responses
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge' // Vercel Edge Runtime

// Cache für 1 Stunde
const CACHE_DURATION = 60 * 60

interface HotelRequest {
  city: 'mekka' | 'medina'
  checkIn: string
  checkOut: string
  adults: number
  priceRange?: {
    min: number
    max: number
  }
}

// Simulierte Hotel-Daten (später durch echte API ersetzen)
const HOTEL_DATA = {
  mekka: [
    {
      id: 'makkah-towers',
      name: 'Makkah Clock Royal Tower',
      distance: '0m zur Kaaba',
      rating: 5,
      price: 450,
      originalPrice: 580,
      savings: 130,
      amenities: ['Direkter Haram-Blick', 'Premium Zimmer', '24/7 Service'],
      image: 'https://images.unsplash.com/photo-1565041241066-8b1cc6c9db0c',
      halalbooking: true,
      commission: 8,
    },
    {
      id: 'pullman-zamzam',
      name: 'Pullman Zamzam Makkah',
      distance: '50m zur Kaaba',
      rating: 5,
      price: 380,
      originalPrice: 450,
      savings: 70,
      amenities: ['Haram-Blick', 'Frühstück', 'Shuttle Service'],
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
      halalbooking: true,
      commission: 7,
    },
    {
      id: 'swissotel-makkah',
      name: 'Swissotel Al Maqam Makkah',
      distance: '100m zur Kaaba',
      rating: 5,
      price: 320,
      originalPrice: 400,
      savings: 80,
      amenities: ['Moderne Zimmer', 'Spa', 'Restaurants'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      halalbooking: true,
      commission: 6,
    },
  ],
  medina: [
    {
      id: 'madinah-hilton',
      name: 'Madinah Hilton',
      distance: '150m zur Propheten-Moschee',
      rating: 5,
      price: 280,
      originalPrice: 350,
      savings: 70,
      amenities: ['Moschee-Blick', 'Luxus Zimmer', 'Concierge'],
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
      halalbooking: true,
      commission: 7,
    },
    {
      id: 'dar-al-taqwa',
      name: 'Dar Al Taqwa Hotel',
      distance: '50m zur Propheten-Moschee',
      rating: 5,
      price: 320,
      originalPrice: 400,
      savings: 80,
      amenities: ['Direkte Lage', 'Premium Service', 'Restaurants'],
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
      halalbooking: true,
      commission: 8,
    },
    {
      id: 'anwar-al-madinah',
      name: 'Anwar Al Madinah Mövenpick',
      distance: '100m zur Propheten-Moschee',
      rating: 5,
      price: 290,
      originalPrice: 360,
      savings: 70,
      amenities: ['Moderne Ausstattung', 'Buffet', 'Spa'],
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
      halalbooking: true,
      commission: 6,
    },
  ],
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const city = searchParams.get('city') as 'mekka' | 'medina'
    const checkIn = searchParams.get('checkIn')
    const checkOut = searchParams.get('checkOut')
    const adults = searchParams.get('adults')

    if (!city || !['mekka', 'medina'].includes(city)) {
      return NextResponse.json(
        { error: 'Invalid city parameter' },
        { status: 400 }
      )
    }

    // Hole Hotels für die Stadt
    const hotels = HOTEL_DATA[city] || []

    // Filter nach Preis wenn gewünscht
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    
    let filteredHotels = hotels
    if (minPrice || maxPrice) {
      filteredHotels = hotels.filter(hotel => {
        if (minPrice && hotel.price < parseInt(minPrice)) return false
        if (maxPrice && hotel.price > parseInt(maxPrice)) return false
        return true
      })
    }

    // Sortiere nach Ersparnis
    filteredHotels.sort((a, b) => b.savings - a.savings)

    // Response mit Cache Headers
    return NextResponse.json(
      {
        success: true,
        city,
        checkIn,
        checkOut,
        adults: adults ? parseInt(adults) : 2,
        totalHotels: filteredHotels.length,
        hotels: filteredHotels,
        timestamp: new Date().toISOString(),
      },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate`,
          'X-Powered-By': 'Vercel Edge Functions',
        },
      }
    )
  } catch (error) {
    console.error('Edge Function Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: HotelRequest = await request.json()
    
    // Validierung
    if (!body.city || !body.checkIn || !body.checkOut) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Hole Hotels
    const hotels = HOTEL_DATA[body.city] || []
    
    // Filter nach Preisbereich
    let filteredHotels = hotels
    if (body.priceRange) {
      filteredHotels = hotels.filter(hotel => {
        return hotel.price >= body.priceRange!.min && 
               hotel.price <= body.priceRange!.max
      })
    }

    // Berechne Gesamtpreis für Aufenthalt
    const checkIn = new Date(body.checkIn)
    const checkOut = new Date(body.checkOut)
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))

    const hotelsWithTotal = filteredHotels.map(hotel => ({
      ...hotel,
      nights,
      totalPrice: hotel.price * nights,
      totalSavings: hotel.savings * nights,
    }))

    return NextResponse.json(
      {
        success: true,
        request: body,
        nights,
        totalHotels: hotelsWithTotal.length,
        hotels: hotelsWithTotal,
        timestamp: new Date().toISOString(),
      },
      {
        headers: {
          'Cache-Control': 'no-store',
          'X-Powered-By': 'Vercel Edge Functions',
        },
      }
    )
  } catch (error) {
    console.error('Edge Function Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}