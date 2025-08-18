"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Star, 
  Phone, 
  ExternalLink,
  Shield,
  Users,
  Wifi,
  Car,
  Coffee,
  Wind
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface HotelFeature {
  icon: React.ReactNode
  label: string
}

interface Hotel {
  id: string
  name: string
  arabicName: string
  city: string
  distanceToHaram: string
  walkingTime: string
  starRating: number
  userRating: number
  reviewCount: number
  price: {
    amount: number
    currency: string
    period: string
  }
  images: string[]
  halal: boolean
  features: string[]
  bookingUrl?: string
  budgetCategory: 'Budget' | 'Mid-Range' | 'Premium' | 'Luxury' | 'Ultra-Luxury'
}

interface HotelCardProps {
  hotel: Hotel
  index?: number
  onBook?: (hotel: Hotel) => void
  onWhatsApp?: (hotel: Hotel) => void
}

const featureIcons: Record<string, React.ReactNode> = {
  'wifi': <Wifi className="w-4 h-4" />,
  'parking': <Car className="w-4 h-4" />,
  'breakfast': <Coffee className="w-4 h-4" />,
  'ac': <Wind className="w-4 h-4" />,
  'family': <Users className="w-4 h-4" />
}

const budgetColors = {
  'Budget': 'bg-slate-500',
  'Mid-Range': 'bg-blue-500',
  'Premium': 'bg-purple-500',
  'Luxury': 'bg-amber-500',
  'Ultra-Luxury': 'bg-gradient-to-r from-amber-500 to-yellow-500'
}

export function HotelCard({ hotel, index = 0, onBook, onWhatsApp }: HotelCardProps) {
  const handleBook = () => {
    if (onBook) {
      onBook(hotel)
    } else if (hotel.bookingUrl) {
      window.open(hotel.bookingUrl, '_blank')
    }
  }

  const handleWhatsApp = () => {
    if (onWhatsApp) {
      onWhatsApp(hotel)
    } else {
      const message = `Hallo UmrahCheck Team! Ich interessiere mich für das ${hotel.name} zum Preis von ${hotel.price.amount}${hotel.price.currency} pro ${hotel.price.period}.`
      const whatsappUrl = `https://wa.me/491234567890?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 border-emerald-100">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
          {hotel.images.length > 0 ? (
            <img 
              src={hotel.images[0]} 
              alt={hotel.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Hotel className="w-16 h-16 text-emerald-300" />
            </div>
          )}
          
          {/* Overlay Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <Badge className={cn(budgetColors[hotel.budgetCategory], "text-white border-0 shadow-lg")}>
              {hotel.budgetCategory}
            </Badge>
            {hotel.halal && (
              <Badge className="bg-emerald-600 text-white border-0 shadow-lg">
                <Shield className="w-3 h-3 mr-1" />
                Halal
              </Badge>
            )}
          </div>

          {/* Price Badge */}
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
            <div className="text-2xl font-bold text-emerald-700">
              {hotel.price.amount}{hotel.price.currency}
            </div>
            <div className="text-xs text-gray-600">pro {hotel.price.period}</div>
          </div>
        </div>

        <CardContent className="p-4">
          {/* Hotel Name */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
              {hotel.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{hotel.arabicName}</p>
          </div>

          {/* Location & Rating */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span className="font-medium">{hotel.distanceToHaram}</span>
              <span className="text-gray-400">•</span>
              <span>{hotel.walkingTime} zu Fuß</span>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "w-4 h-4",
                    i < hotel.starRating ? "fill-amber-400 text-amber-400" : "text-gray-300"
                  )}
                />
              ))}
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span className="font-semibold text-gray-700">{hotel.userRating}</span>
              <span className="text-gray-500">({hotel.reviewCount} Bewertungen)</span>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2">
            {hotel.features.slice(0, 4).map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  {featureIcons[feature.toLowerCase()] || <Shield className="w-4 h-4 text-emerald-600" />}
                </div>
                <span className="text-xs">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex gap-3">
          <Button 
            onClick={handleBook}
            className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Jetzt buchen
          </Button>
          <Button
            onClick={handleWhatsApp}
            variant="outline"
            className="border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
          >
            <Phone className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}