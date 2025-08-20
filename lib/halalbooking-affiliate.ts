// Halalbooking Affiliate Integration für Monetarisierung
// Tracking & Deep-Linking für Commission

const HALALBOOKING_CONFIG = {
  affiliateId: 'umrahcheck',
  baseUrl: 'https://www.halalbooking.com',
  trackingUrl: 'https://track.halalbooking.com',
  commission: {
    default: 5, // 5% Standard-Commission
    premium: 7, // 7% für Premium Hotels
    special: 10, // 10% für Special Deals
  },
}

// Hotel-Mapping: UmrahCheck ID → Halalbooking ID
export const HOTEL_MAPPING = {
  // Mekka Hotels
  'makkah-towers': 'makkah-clock-royal-tower-fairmont',
  'pullman-zamzam': 'pullman-zamzam-makkah',
  'swissotel-makkah': 'swissotel-al-maqam-makkah',
  'hilton-suites': 'hilton-suites-makkah',
  'conrad-makkah': 'conrad-makkah',
  'raffles-makkah': 'raffles-makkah-palace',
  
  // Medina Hotels
  'madinah-hilton': 'madinah-hilton-hotel',
  'dar-al-taqwa': 'dar-al-taqwa-hotel',
  'anwar-al-madinah': 'anwar-al-madinah-movenpick',
  'pullman-medina': 'pullman-zamzam-madina',
  'oberoi-medina': 'the-oberoi-madina',
}

// Affiliate Link Generator
export const generateAffiliateLink = (
  hotelId: string,
  checkIn: string,
  checkOut: string,
  adults: number = 2,
  source: string = 'website'
): string => {
  const halalbookingId = HOTEL_MAPPING[hotelId as keyof typeof HOTEL_MAPPING]
  
  if (!halalbookingId) {
    console.warn(`No Halalbooking mapping for hotel: ${hotelId}`)
    return '#'
  }

  // Build Affiliate URL with tracking parameters
  const params = new URLSearchParams({
    affiliate: HALALBOOKING_CONFIG.affiliateId,
    hotel: halalbookingId,
    checkin: checkIn,
    checkout: checkOut,
    adults: adults.toString(),
    utm_source: 'umrahcheck',
    utm_medium: source,
    utm_campaign: 'umrah_2024',
  })

  return `${HALALBOOKING_CONFIG.baseUrl}/hotel/${halalbookingId}?${params.toString()}`
}

// Commission Calculator
export const calculateCommission = (
  price: number,
  nights: number,
  hotelTier: 'default' | 'premium' | 'special' = 'default'
): {
  totalPrice: number
  commission: number
  commissionRate: number
  earnings: number
} => {
  const totalPrice = price * nights
  const commissionRate = HALALBOOKING_CONFIG.commission[hotelTier]
  const earnings = (totalPrice * commissionRate) / 100

  return {
    totalPrice,
    commission: commissionRate,
    commissionRate,
    earnings: Math.round(earnings * 100) / 100, // Round to 2 decimals
  }
}

// Track Affiliate Click
export const trackAffiliateClick = (
  hotelId: string,
  price: number,
  source: string = 'website'
) => {
  if (typeof window === 'undefined') return

  // Send to Analytics
  if ((window as any).va) {
    (window as any).va('event', {
      name: 'affiliate_click',
      data: {
        hotel: hotelId,
        price,
        source,
        affiliate: 'halalbooking',
        timestamp: new Date().toISOString(),
      },
    })
  }

  // Google Analytics
  if ((window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      hotel_id: hotelId,
      value: price,
      currency: 'EUR',
      affiliate_network: 'halalbooking',
    })
  }

  console.log(`[Affiliate] Click tracked: ${hotelId} - ${price}€`)
}

// Track Conversion (nach Buchung)
export const trackAffiliateConversion = (
  bookingId: string,
  hotelId: string,
  totalPrice: number,
  commission: number
) => {
  if (typeof window === 'undefined') return

  // Send conversion data
  if ((window as any).va) {
    (window as any).va('event', {
      name: 'affiliate_conversion',
      data: {
        bookingId,
        hotel: hotelId,
        totalPrice,
        commission,
        affiliate: 'halalbooking',
        timestamp: new Date().toISOString(),
      },
    })
  }

  console.log(`[Affiliate] Conversion: ${bookingId} - Commission: ${commission}€`)
}

// Deep Link für Mobile Apps
export const generateDeepLink = (
  hotelId: string,
  platform: 'ios' | 'android'
): string => {
  const halalbookingId = HOTEL_MAPPING[hotelId as keyof typeof HOTEL_MAPPING]
  
  if (!halalbookingId) return '#'

  const schemes = {
    ios: 'halalbooking://hotel/',
    android: 'halalbooking://hotel/',
  }

  return `${schemes[platform]}${halalbookingId}?affiliate=${HALALBOOKING_CONFIG.affiliateId}`
}

// Cookie-basiertes Tracking für 30 Tage
export const setAffiliateCookie = (hotelId: string, price: number) => {
  if (typeof document === 'undefined') return

  const data = {
    hotelId,
    price,
    timestamp: Date.now(),
    source: 'umrahcheck',
  }

  const date = new Date()
  date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000)) // 30 Tage
  const expires = `expires=${date.toUTCString()}`
  
  document.cookie = `hb_affiliate=${JSON.stringify(data)};${expires};path=/;SameSite=Strict`
}

// Get Affiliate Cookie
export const getAffiliateCookie = (): {
  hotelId: string
  price: number
  timestamp: number
  source: string
} | null => {
  if (typeof document === 'undefined') return null

  const name = 'hb_affiliate='
  const cookies = document.cookie.split(';')
  
  for (let cookie of cookies) {
    cookie = cookie.trim()
    if (cookie.indexOf(name) === 0) {
      try {
        return JSON.parse(cookie.substring(name.length))
      } catch {
        return null
      }
    }
  }
  
  return null
}

// Commission Dashboard Data
export interface CommissionData {
  month: string
  clicks: number
  conversions: number
  conversionRate: number
  totalBookings: number
  totalCommission: number
}

// Mock Dashboard Data (später durch echte API ersetzen)
export const getCommissionDashboard = (): CommissionData[] => {
  return [
    {
      month: 'Januar 2024',
      clicks: 1250,
      conversions: 45,
      conversionRate: 3.6,
      totalBookings: 67500,
      totalCommission: 3375,
    },
    {
      month: 'Februar 2024',
      clicks: 1480,
      conversions: 52,
      conversionRate: 3.5,
      totalBookings: 78000,
      totalCommission: 3900,
    },
    {
      month: 'März 2024',
      clicks: 1890,
      conversions: 68,
      conversionRate: 3.6,
      totalBookings: 102000,
      totalCommission: 5100,
    },
  ]
}

// Top Performing Hotels
export const getTopPerformingHotels = () => {
  return [
    {
      id: 'makkah-towers',
      name: 'Makkah Clock Royal Tower',
      clicks: 450,
      conversions: 23,
      conversionRate: 5.1,
      avgBookingValue: 2500,
      totalCommission: 2875,
    },
    {
      id: 'pullman-zamzam',
      name: 'Pullman Zamzam Makkah',
      clicks: 380,
      conversions: 18,
      conversionRate: 4.7,
      avgBookingValue: 1800,
      totalCommission: 1620,
    },
    {
      id: 'dar-al-taqwa',
      name: 'Dar Al Taqwa Hotel',
      clicks: 320,
      conversions: 15,
      conversionRate: 4.6,
      avgBookingValue: 1600,
      totalCommission: 1200,
    },
  ]
}