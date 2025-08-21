import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Database Types for TypeScript
export interface User {
  id: string
  email: string
  name?: string
  whatsapp?: string
  created_at: string
}

export interface KiAnalysis {
  id: string
  user_id: string
  budget: number
  departure_city: string
  travel_dates: any // JSON field
  recommendation: any // JSON field
  status: 'pending' | 'completed' | 'failed'
  created_at: string
}

export interface Subscription {
  id: string
  user_id: string
  plan_type: 'basic' | 'premium' | 'enterprise'
  status: 'active' | 'cancelled' | 'expired'
  price_paid: number
  valid_until: string
  created_at: string
}

export interface Hotel {
  id: string
  name: string
  city: 'mecca' | 'medina'
  distance_to_haram: number // in meters
  rating: number
  price_per_night: number
  features: any // JSON field
  booking_url: string
  created_at: string
}

export interface PriceHistory {
  id: string
  hotel_id: string
  date: string
  price: number
  availability: boolean
  source: string
  created_at: string
}