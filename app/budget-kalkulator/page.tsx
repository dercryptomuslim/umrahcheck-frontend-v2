"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { 
  Calculator, 
  Hotel, 
  Plane, 
  Calendar,
  Users,
  Star,
  Coffee,
  MapPin,
  Sparkles,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle
} from 'lucide-react'

interface BudgetBreakdown {
  visa: number
  service: number
  flight: number
  hotelMekka: number
  hotelMedina: number
  total: number
}

interface HotelCategory {
  stars: number
  name: string
  pricePerNight: number
  features: string[]
  distance: string
  breakfast: boolean
}

const hotelCategories: HotelCategory[] = [
  {
    stars: 2,
    name: "Budget Hotels",
    pricePerNight: 40,
    features: ["Einfache Zimmer", "Basis-Ausstattung"],
    distance: "1.5-2km zum Haram",
    breakfast: false
  },
  {
    stars: 3,
    name: "Economy Hotels",
    pricePerNight: 60,
    features: ["Saubere Zimmer", "WLAN", "Klimaanlage"],
    distance: "1-1.5km zum Haram",
    breakfast: false
  },
  {
    stars: 4,
    name: "Comfort Hotels",
    pricePerNight: 90,
    features: ["Moderne Zimmer", "Restaurant", "24h Service"],
    distance: "500m-1km zum Haram",
    breakfast: false
  },
  {
    stars: 5,
    name: "Premium Hotels",
    pricePerNight: 130,
    features: ["Luxus-Zimmer", "Mehrere Restaurants", "Spa"],
    distance: "200-500m zum Haram",
    breakfast: true
  },
  {
    stars: 5,
    name: "Luxury Hotels",
    pricePerNight: 200,
    features: ["Suite-Optionen", "Haram-Blick", "VIP-Service"],
    distance: "Direkt am Haram",
    breakfast: true
  }
]

export default function BudgetKalkulator() {
  const [budget, setBudget] = useState(1200)
  const [days, setDays] = useState(10)
  const [persons, setPersons] = useState(2)
  const [hotelStandard, setHotelStandard] = useState(3)
  
  // Calculate nights distribution (60% Mekka, 40% Medina)
  const nightsMekka = Math.ceil(days * 0.6)
  const nightsMedina = days - nightsMekka
  
  // Fixed costs
  const visaCost = 115
  const serviceCost = 75
  
  // Calculate available budget
  const availableBudget = budget - visaCost - serviceCost
  
  // Flight costs based on budget
  const getFlightCost = (budget: number) => {
    if (budget < 850) return 380 // Very budget airlines
    if (budget < 1200) return 450 // Budget airlines
    if (budget < 1600) return 550 // Good airlines
    return 650 // Premium airlines
  }
  
  const flightCost = getFlightCost(budget)
  const hotelBudget = availableBudget - flightCost
  
  // Calculate what hotel category fits
  const calculateAffordableCategory = () => {
    const budgetPerNight = hotelBudget / days
    const budgetPerNightPerPerson = budgetPerNight / (persons >= 3 ? 0.75 : 1) // 25% discount for groups
    
    for (let i = hotelCategories.length - 1; i >= 0; i--) {
      if (budgetPerNightPerPerson >= hotelCategories[i].pricePerNight) {
        return i
      }
    }
    return 0
  }
  
  const affordableCategory = calculateAffordableCategory()
  const selectedCategory = hotelCategories[Math.min(hotelStandard, affordableCategory)]
  
  // Calculate actual costs
  const hotelCostPerNight = selectedCategory.pricePerNight * (persons >= 3 ? 0.75 : 1)
  const totalHotelCost = hotelCostPerNight * days
  const totalCost = visaCost + serviceCost + flightCost + totalHotelCost
  
  // Budget status
  const budgetStatus = totalCost <= budget ? 'sufficient' : 'insufficient'
  const budgetDifference = budget - totalCost
  
  // Calculate how many days possible with current standards
  const maxDaysWithStandard = Math.floor((availableBudget - flightCost) / hotelCostPerNight)
  
  // Recommendations
  const getRecommendation = () => {
    if (budget < 850) {
      return {
        type: 'warning',
        text: 'Budget sehr knapp! Empfehlung: Mindestens 850€ für eine angenehme Umrah.',
        icon: AlertCircle
      }
    }
    if (budget < 1200 && persons < 3) {
      return {
        type: 'info',
        text: 'Tipp: Mit 3-4 Personen kannst du 25% bei Hotels sparen!',
        icon: Users
      }
    }
    if (budgetStatus === 'sufficient' && budgetDifference > 200) {
      return {
        type: 'success',
        text: 'Ausgezeichnet! Du hast sogar Budget-Puffer für Extras.',
        icon: CheckCircle
      }
    }
    if (budgetStatus === 'insufficient') {
      return {
        type: 'warning',
        text: `Für ${selectedCategory.stars} Sterne Hotels benötigst du ${Math.abs(budgetDifference)}€ mehr Budget oder ${days - maxDaysWithStandard} Tage weniger.`,
        icon: TrendingDown
      }
    }
    return {
      type: 'success',
      text: 'Perfekt! Dein Budget passt optimal zu deinen Wünschen.',
      icon: CheckCircle
    }
  }
  
  const recommendation = getRecommendation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-gold-500 rounded-full flex items-center justify-center">
              <Calculator className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Umrah Budget-Kalkulator
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Finde heraus, wie viele Tage Umrah mit deinem Budget möglich sind und welche Hotel-Kategorie du dir leisten kannst
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-gold-500" />
                  Deine Umrah-Parameter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                
                {/* Budget Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-white font-medium">Budget pro Person</label>
                    <Badge className="bg-emerald-600 text-white text-lg px-3 py-1">
                      {budget}€
                    </Badge>
                  </div>
                  <Slider
                    value={[budget]}
                    onValueChange={(value) => setBudget(value[0])}
                    min={600}
                    max={3000}
                    step={50}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>600€</span>
                    <span>1500€</span>
                    <span>3000€</span>
                  </div>
                </div>

                {/* Days Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-white font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Reisetage
                    </label>
                    <Badge className="bg-blue-600 text-white text-lg px-3 py-1">
                      {days} Tage
                    </Badge>
                  </div>
                  <Slider
                    value={[days]}
                    onValueChange={(value) => setDays(value[0])}
                    min={5}
                    max={21}
                    step={1}
                    className="mb-2"
                  />
                  <div className="text-center text-sm text-gray-400 mt-2">
                    {nightsMekka} Nächte Mekka • {nightsMedina} Nächte Medina
                  </div>
                </div>

                {/* Persons Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-white font-medium flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Anzahl Personen
                    </label>
                    <Badge className="bg-purple-600 text-white text-lg px-3 py-1">
                      {persons} {persons === 1 ? 'Person' : 'Personen'}
                    </Badge>
                  </div>
                  <Slider
                    value={[persons]}
                    onValueChange={(value) => setPersons(value[0])}
                    min={1}
                    max={6}
                    step={1}
                    className="mb-2"
                  />
                  {persons >= 3 && (
                    <div className="text-emerald-400 text-sm mt-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      25% Gruppenrabatt bei Hotels aktiv!
                    </div>
                  )}
                </div>

                {/* Hotel Standard */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-white font-medium flex items-center gap-2">
                      <Hotel className="w-4 h-4" />
                      Gewünschter Hotel-Standard
                    </label>
                    <Badge className="bg-gold-600 text-white text-lg px-3 py-1">
                      {hotelStandard + 1} Sterne
                    </Badge>
                  </div>
                  <Slider
                    value={[hotelStandard]}
                    onValueChange={(value) => setHotelStandard(value[0])}
                    min={0}
                    max={4}
                    step={1}
                    className="mb-2"
                  />
                  <div className="grid grid-cols-5 gap-1 mt-3">
                    {hotelCategories.map((cat, i) => (
                      <div
                        key={i}
                        className={`text-center p-2 rounded transition-all ${
                          i === hotelStandard 
                            ? 'bg-gold-600 text-white' 
                            : i <= affordableCategory
                            ? 'bg-slate-700 text-gray-300'
                            : 'bg-slate-800 text-gray-500'
                        }`}
                      >
                        <div className="flex justify-center mb-1">
                          {[...Array(cat.stars)].map((_, j) => (
                            <Star key={j} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                        <div className="text-xs">{cat.pricePerNight}€</div>
                      </div>
                    ))}
                  </div>
                  {hotelStandard > affordableCategory && (
                    <div className="text-amber-400 text-sm mt-3 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      Budget reicht nur für {affordableCategory + 1} Sterne Hotels
                    </div>
                  )}
                </div>

              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Budget Breakdown */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl text-white">Budget-Aufschlüsselung</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Visum</span>
                    <span className="font-medium">{visaCost}€</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Service-Gebühr</span>
                    <span className="font-medium">{serviceCost}€</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span className="flex items-center gap-2">
                      <Plane className="w-4 h-4" />
                      Flug (Hin & Zurück)
                    </span>
                    <span className="font-medium">{flightCost}€</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span className="flex items-center gap-2">
                      <Hotel className="w-4 h-4" />
                      Hotels ({days} Nächte)
                    </span>
                    <span className="font-medium">{Math.round(totalHotelCost)}€</span>
                  </div>
                  
                  <div className="border-t border-slate-600 pt-3">
                    <div className="flex justify-between text-white text-lg font-bold">
                      <span>Gesamtkosten</span>
                      <span className={totalCost > budget ? 'text-red-400' : 'text-emerald-400'}>
                        {Math.round(totalCost)}€
                      </span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-400">Dein Budget</span>
                      <span className="text-gray-300">{budget}€</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-400">Differenz</span>
                      <span className={budgetDifference >= 0 ? 'text-emerald-400' : 'text-red-400'}>
                        {budgetDifference >= 0 ? '+' : ''}{Math.round(budgetDifference)}€
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hotel Details */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl text-white">Hotel-Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex">
                      {[...Array(selectedCategory.stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-white font-semibold">{selectedCategory.name}</h3>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4" />
                      {selectedCategory.distance}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Coffee className="w-4 h-4" />
                      {selectedCategory.breakfast ? 'Mit Frühstück' : 'Ohne Frühstück'}
                    </div>
                    <div className="text-gray-400">
                      {selectedCategory.features.join(' • ')}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendation */}
            <Card className={`border-0 ${
              recommendation.type === 'warning' 
                ? 'bg-amber-900/50' 
                : recommendation.type === 'info'
                ? 'bg-blue-900/50'
                : 'bg-emerald-900/50'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <recommendation.icon className={`w-6 h-6 mt-1 ${
                    recommendation.type === 'warning' 
                      ? 'text-amber-400' 
                      : recommendation.type === 'info'
                      ? 'text-blue-400'
                      : 'text-emerald-400'
                  }`} />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Empfehlung</h3>
                    <p className="text-gray-300">{recommendation.text}</p>
                    
                    {maxDaysWithStandard !== days && (
                      <div className="mt-3 p-3 bg-slate-800/50 rounded">
                        <p className="text-sm text-gray-400">
                          Mit deinem Budget von {budget}€ kannst du:
                        </p>
                        <ul className="text-sm text-gray-300 mt-2 space-y-1">
                          <li>• {maxDaysWithStandard} Tage in {selectedCategory.stars} Sterne Hotels</li>
                          <li>• {days} Tage in {affordableCategory + 1} Sterne Hotels</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            {budgetStatus === 'sufficient' && budget >= 850 && (
              <Card className="bg-gradient-to-r from-emerald-600 to-gold-600 border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Bereit für deine Umrah?
                  </h3>
                  <p className="text-white/90 mb-4">
                    Erhalte dein individuelles Angebot mit 3 Flügen und 6 Hotels für nur 39€
                  </p>
                  <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                    <Link href="/lp">
                      Jetzt Angebot erstellen
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}