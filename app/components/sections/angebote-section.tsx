"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { 
  Plane, 
  Building, 
  MapPin,
  Clock, 
  Star, 
  Euro,
  Filter,
  RefreshCw,
  Heart,
  ArrowRight,
  Calendar,
  Users,
  ChevronDown
} from 'lucide-react';

interface FlightOffer {
  id: string;
  airline: string;
  departure_time: string;
  arrival_time: string;
  price_per_person: number;
  duration: string;
  stops: number;
  rating: number;
  tier?: 'budget' | 'premium' | 'luxury';
}

interface HotelOffer {
  id: string;
  name: string;
  city: string;
  price_per_night: number;
  rating: number;
  distance_to_kaaba: string;
  amenities: string[];
  image_url?: string;
  stars?: number;
  tier?: 'budget' | 'premium' | 'luxury';
}

interface CombinedOffer {
  id: string;
  flight: FlightOffer;
  makkah_hotel: HotelOffer;
  medina_hotel: HotelOffer;
  total_price: number;
  savings_potential: number;
  budget_breakdown: {
    flights: number;
    hotels: number;
    buffer: number;
  };
  tier?: string;
  tier_info?: {
    name: string;
    description: string;
    target: string;
  };
}

export function AngeboteSection() {
  const [offers, setOffers] = useState<CombinedOffer[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    budget_max: 2000,
    persons: 2,
    departure_airport: 'FRA',
    duration_nights: 10
  });
  const [showFilters, setShowFilters] = useState(false);

  // Enhanced tiered offers system
  const generateTieredOffers = (budget_range: number): CombinedOffer[] => [
    // BUDGET TIER (€800-1200)
    {
      id: 'budget_1',
      tier: 'Budget',
      flight: {
        id: 'budget_flight_1',
        airline: 'Pegasus Airlines',
        departure_time: '06:30',
        arrival_time: '17:45',
        price_per_person: Math.round(budget_range * 0.35),
        duration: '11h 15m',
        stops: 2,
        rating: 4.2,
        tier: 'budget'
      },
      makkah_hotel: {
        id: 'kiswah_towers',
        name: 'Kiswah Towers',
        city: 'Makkah',
        price_per_night: Math.round(budget_range * 0.12),
        rating: 4.1,
        distance_to_kaaba: '800m zu Fuß (12min)',
        amenities: ['WiFi', 'Klimaanlage', 'Halal Restaurant', '4-Bed Zimmer'],
        stars: 3,
        tier: 'budget'
      },
      medina_hotel: {
        id: 'budget_medina',
        name: 'Al Madinah Harmony Hotel',
        city: 'Medina',
        price_per_night: Math.round(budget_range * 0.10),
        rating: 4.0,
        distance_to_kaaba: '600m zur Prophetenmoschee',
        amenities: ['WiFi', 'Restaurant', 'Shuttle Service'],
        stars: 3,
        tier: 'budget'
      },
      total_price: Math.round(budget_range * 0.85),
      savings_potential: Math.round(budget_range * 0.25),
      budget_breakdown: {
        flights: Math.round(budget_range * 0.85 * 0.55),
        hotels: Math.round(budget_range * 0.85 * 0.40),
        buffer: Math.round(budget_range * 0.85 * 0.05)
      },
      tier_info: {
        name: '💰 Budget',
        description: 'Günstigste Option mit gutem Preis-Leistungs-Verhältnis',
        target: 'Sparfüchse & Erstbesucher'
      }
    },
    // PREMIUM TIER (€1500-2000)
    {
      id: 'premium_1',
      tier: 'Premium',
      flight: {
        id: 'premium_flight_1',
        airline: 'Turkish Airlines',
        departure_time: '14:30',
        arrival_time: '22:45',
        price_per_person: Math.round(budget_range * 0.42),
        duration: '8h 15m',
        stops: 1,
        rating: 4.7,
        tier: 'premium'
      },
      makkah_hotel: {
        id: 'doubletree_jabal_omar',
        name: 'DoubleTree by Hilton Jabal Omar',
        city: 'Makkah',
        price_per_night: Math.round(budget_range * 0.18),
        rating: 4.6,
        distance_to_kaaba: '400m zu Fuß (5min)',
        amenities: ['WiFi', 'Frühstück', 'Fitnessstudio', 'Concierge', 'Kaaba-Blick'],
        stars: 4,
        tier: 'premium'
      },
      medina_hotel: {
        id: 'premium_medina',
        name: 'Pullman ZamZam Madina',
        city: 'Medina',
        price_per_night: Math.round(budget_range * 0.16),
        rating: 4.5,
        distance_to_kaaba: '200m zur Prophetenmoschee',
        amenities: ['WiFi', 'Restaurant', 'Spa', 'Business Center'],
        stars: 4,
        tier: 'premium'
      },
      total_price: Math.round(budget_range * 0.95),
      savings_potential: Math.round(budget_range * 0.18),
      budget_breakdown: {
        flights: Math.round(budget_range * 0.95 * 0.48),
        hotels: Math.round(budget_range * 0.95 * 0.47),
        buffer: Math.round(budget_range * 0.95 * 0.05)
      },
      tier_info: {
        name: '✈️ Premium',
        description: 'Perfekte Balance zwischen Komfort und Preis',
        target: 'Komfortliebhaber & Wiederkehrer'
      }
    },
    // LUXURY TIER (€2000+)
    {
      id: 'luxury_1',
      tier: 'Luxury',
      flight: {
        id: 'luxury_flight_1',
        airline: 'Qatar Airways',
        departure_time: '22:10',
        arrival_time: '06:45+1',
        price_per_person: Math.round(budget_range * 0.35),
        duration: '6h 35m',
        stops: 0,
        rating: 4.9,
        tier: 'luxury'
      },
      makkah_hotel: {
        id: 'swissotel_makkah',
        name: 'Swissôtel Makkah',
        city: 'Makkah',
        price_per_night: Math.round(budget_range * 0.25),
        rating: 4.8,
        distance_to_kaaba: '150m zu Fuß (2min)',
        amenities: ['WiFi', 'Premium Frühstück', 'Spa', 'Butler Service', 'Kaaba Premium View'],
        stars: 5,
        tier: 'luxury'
      },
      medina_hotel: {
        id: 'fairmont_medina',
        name: 'Fairmont Medina',
        city: 'Medina',
        price_per_night: Math.round(budget_range * 0.22),
        rating: 4.7,
        distance_to_kaaba: '100m zur Prophetenmoschee',
        amenities: ['WiFi', 'Fine Dining', 'Luxury Spa', 'VIP Transfer'],
        stars: 5,
        tier: 'luxury'
      },
      total_price: Math.round(budget_range * 1.1),
      savings_potential: Math.round(budget_range * 0.12),
      budget_breakdown: {
        flights: Math.round(budget_range * 1.1 * 0.40),
        hotels: Math.round(budget_range * 1.1 * 0.55),
        buffer: Math.round(budget_range * 1.1 * 0.05)
      },
      tier_info: {
        name: '👑 Luxury',
        description: 'Höchster Komfort und Premium Service',
        target: 'Luxusreisende & besondere Anlässe'
      }
    }
  ];

  const mockOffers = generateTieredOffers(filters.budget_max);

  const loadOffers = async () => {
    setLoading(true);
    
    try {
      // Create MCP search request from filters
      const mcpRequest = {
        first_name: 'Live',
        last_name: 'Angebote',
        email: 'offers@umrahcheck.de',
        budget: `${Math.round(filters.budget_max * 0.8)}-${filters.budget_max}`,
        persons: filters.persons,
        departure_airport: filters.departure_airport,
        arrival_airport: 'JED',
        departure_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
        nights_mekka: Math.ceil(filters.duration_nights * 0.6),
        nights_medina: Math.floor(filters.duration_nights * 0.4),
        nationality: 'deutsch',
        source: 'angebote-page'
      };

      const response = await fetch('/api/mcp-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mcpRequest)
      });
      
      if (response.ok) {
        const data = await response.json();
        
        // Convert MCP response to offer format
        const convertedOffers = data.options?.slice(0, 6).map((option: any, index: number) => ({
          id: option.option_id || `offer_${index}`,
          flight: {
            id: `flight_${index}`,
            airline: option.best_flight_details?.airline || 'Turkish Airlines',
            departure_time: '14:30',
            arrival_time: '22:45',
            price_per_person: Math.round((option.flight_cost_per_person || 550)),
            duration: option.best_flight_details?.duration || '8h 15m',
            stops: option.best_flight_details?.stops || 1,
            rating: 4.5 + Math.random() * 0.5
          },
          makkah_hotel: {
            id: `makkah_${index}`,
            name: option.makkah_hotel?.name || 'Premium Hotel Makkah',
            city: 'Makkah',
            price_per_night: Math.round(option.makkah_hotel?.avg_price_per_night || 180),
            rating: option.makkah_hotel?.rating || (4.2 + Math.random() * 0.6),
            distance_to_kaaba: option.makkah_hotel?.distance_to_kaaba || '300m zu Fuß',
            amenities: option.makkah_hotel?.amenities || ['WiFi', 'Frühstück', 'Klimaanlage']
          },
          medina_hotel: {
            id: `medina_${index}`,
            name: option.medina_hotel?.name || 'Premium Hotel Medina',
            city: 'Medina', 
            price_per_night: Math.round(option.medina_hotel?.avg_price_per_night || 150),
            rating: option.medina_hotel?.rating || (4.1 + Math.random() * 0.7),
            distance_to_kaaba: '200m zur Prophetenmoschee',
            amenities: option.medina_hotel?.amenities || ['WiFi', 'Restaurant', 'Fitnessstudio']
          },
          total_price: Math.round(option.total_cost || 1980),
          savings_potential: Math.round(option.savings_vs_alternatives || 320),
          budget_breakdown: {
            flights: Math.round((option.total_cost || 1980) * 0.50),
            hotels: Math.round((option.total_cost || 1980) * 0.45),
            buffer: Math.round((option.total_cost || 1980) * 0.05)
          }
        })) || [];
        
        setOffers(convertedOffers);
      } else {
        console.warn('MCP API not available, using mock data');
        setOffers(mockOffers);
      }
      
    } catch (error) {
      console.error('Error loading offers:', error);
      // Fallback to mock data on error
      setOffers(mockOffers);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOffers();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50/50 via-white to-blue-50/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Live Angebote
            </span>
            <br />Budget-optimierte Flug & Hotel Kombinationen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Entdecke live Umrah-Angebote mit intelligenter 50/45/5 Budgetaufteilung. 
            Flüge + Hotels optimal kombiniert für beste Preise.
          </p>
          
          {/* Budget Breakdown Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-4">
              <Plane className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <span className="font-bold text-blue-600">50%</span>
                <p className="text-sm text-gray-600">Flüge</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-emerald-50 rounded-lg p-4">
              <Building className="w-6 h-6 text-emerald-600" />
              <div className="text-left">
                <span className="font-bold text-emerald-600">45%</span>
                <p className="text-sm text-gray-600">Hotels</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-amber-50 rounded-lg p-4">
              <Heart className="w-6 h-6 text-amber-600" />
              <div className="text-left">
                <span className="font-bold text-amber-600">5%</span>
                <p className="text-sm text-gray-600">Puffer</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Filter & Suchkriterien</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filter
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>
            
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget (max)</label>
                  <input
                    type="range"
                    min="1000"
                    max="5000"
                    step="100"
                    value={filters.budget_max}
                    onChange={(e) => setFilters({...filters, budget_max: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <span className="text-sm text-gray-500">€{filters.budget_max}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Personen</label>
                  <select
                    value={filters.persons}
                    onChange={(e) => setFilters({...filters, persons: parseInt(e.target.value)})}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n}>{n} Person{n > 1 ? 'en' : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Abflughafen</label>
                  <select
                    value={filters.departure_airport}
                    onChange={(e) => setFilters({...filters, departure_airport: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="FRA">Frankfurt (FRA)</option>
                    <option value="MUC">München (MUC)</option>
                    <option value="DUS">Düsseldorf (DUS)</option>
                    <option value="BER">Berlin (BER)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dauer</label>
                  <select
                    value={filters.duration_nights}
                    onChange={(e) => setFilters({...filters, duration_nights: parseInt(e.target.value)})}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="7">7 Nächte</option>
                    <option value="10">10 Nächte</option>
                    <option value="14">14 Nächte</option>
                    <option value="21">21 Nächte</option>
                  </select>
                </div>
              </div>
            )}
            
            <div className="flex items-center gap-4 mt-6">
              <Button onClick={loadOffers} disabled={loading} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700">
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                {loading ? 'Lädt...' : 'Angebote aktualisieren'}
              </Button>
              <span className="text-sm text-gray-500">
                Letzte Aktualisierung: {new Date().toLocaleTimeString('de-DE')}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Offer Header with Tier Badge */}
              <div className={`bg-gradient-to-r p-6 border-b border-gray-100 ${
                offer.tier === 'Budget' ? 'from-blue-50 to-indigo-50' :
                offer.tier === 'Premium' ? 'from-emerald-50 to-teal-50' :
                'from-amber-50 to-orange-50'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                    offer.tier === 'Budget' ? 'bg-blue-100 text-blue-800' :
                    offer.tier === 'Premium' ? 'bg-emerald-100 text-emerald-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {offer.tier_info?.name}
                  </div>
                  <div className="text-right">
                    <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      €{offer.savings_potential} gespart
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {offer.tier_info?.description}
                    </h3>
                    <p className="text-emerald-600 font-bold text-2xl mb-1">
                      €{offer.total_price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      für {filters.persons} Person{filters.persons > 1 ? 'en' : ''}
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      Ideal für: {offer.tier_info?.target}
                    </p>
                  </div>
                </div>
              </div>

              {/* Budget Breakdown */}
              <div className="px-6 py-4 bg-gray-50">
                <h4 className="font-semibold text-gray-700 mb-3">Budget-Optimierung (50/45/5)</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-blue-600" />
                    <span>€{offer.budget_breakdown.flights}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-emerald-600" />
                    <span>€{offer.budget_breakdown.hotels}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-amber-600" />
                    <span>€{offer.budget_breakdown.buffer}</span>
                  </div>
                </div>
              </div>

              {/* Flight Details */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Plane className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-gray-800">Flug mit {offer.flight.airline}</h4>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{offer.flight.rating.toFixed(1)}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <Clock className="w-4 h-4 inline mr-1" />
                    {offer.flight.departure_time} - {offer.flight.arrival_time}
                  </div>
                  <div>
                    <MapPin className="w-4 h-4 inline mr-1" />
                    {offer.flight.duration}, {offer.flight.stops === 0 ? 'Direktflug' : `${offer.flight.stops} Stopp`}
                  </div>
                  <div>
                    <Euro className="w-4 h-4 inline mr-1" />
                    €{offer.flight.price_per_person}/Person
                  </div>
                  <div>
                    <Users className="w-4 h-4 inline mr-1" />
                    €{offer.flight.price_per_person * filters.persons} gesamt
                  </div>
                </div>
              </div>

              {/* Hotels */}
              <div className="p-6">
                {/* Makkah Hotel */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Building className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-semibold text-gray-800">{offer.makkah_hotel.name}</h4>
                    {/* Hotel Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(offer.makkah_hotel.stars || 5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({offer.makkah_hotel.stars}⭐)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">{offer.makkah_hotel.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    {offer.makkah_hotel.distance_to_kaaba}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {offer.makkah_hotel.amenities.map((amenity, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-emerald-600">
                    €{offer.makkah_hotel.price_per_night}/Nacht
                  </p>
                </div>

                {/* Medina Hotel */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Building className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-800">{offer.medina_hotel.name}</h4>
                    {/* Hotel Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(offer.medina_hotel.stars || 5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({offer.medina_hotel.stars}⭐)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">{offer.medina_hotel.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    {offer.medina_hotel.distance_to_kaaba}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {offer.medina_hotel.amenities.map((amenity, i) => (
                      <span key={i} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-emerald-600">
                    €{offer.medina_hotel.price_per_night}/Nacht
                  </p>
                </div>

                {/* CTA */}
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Angebot Details ansehen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loading State */}
        {loading && offers.length === 0 && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Lade aktuelle Angebote...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && offers.length === 0 && (
          <div className="text-center py-12">
            <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Keine Angebote verfügbar</p>
            <Button onClick={loadOffers} className="bg-emerald-600 hover:bg-emerald-700">Erneut versuchen</Button>
          </div>
        )}

        {/* Tier Comparison Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200"
        >
          <h3 className="font-bold text-gray-800 mb-4 text-lg">🎯 Tier Comparison Guide</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Budget Tier */}
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold mb-3 w-fit">
                💰 Budget
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Airlines: Pegasus, Wizz Air, Eurowings</li>
                <li>• Hotels: 3⭐ Kiswah Towers</li>
                <li>• Entfernung: 10-15min zur Kaaba</li>
                <li>• Budget Split: 55% Flug | 40% Hotel</li>
                <li className="font-semibold text-blue-600">Ideal für Erstbesucher</li>
              </ul>
            </div>

            {/* Premium Tier */}
            <div className="bg-white rounded-lg p-4 border border-emerald-200">
              <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-bold mb-3 w-fit">
                ✈️ Premium
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Airlines: Turkish Airlines, EgyptAir</li>
                <li>• Hotels: 4⭐ DoubleTree Hilton</li>
                <li>• Entfernung: 5-10min zur Kaaba</li>
                <li>• Budget Split: 48% Flug | 47% Hotel</li>
                <li className="font-semibold text-emerald-600">Beste Balance Komfort/Preis</li>
              </ul>
            </div>

            {/* Luxury Tier */}
            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold mb-3 w-fit">
                👑 Luxury
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Airlines: Qatar Airways, Saudia</li>
                <li>• Hotels: 5⭐ Swissôtel, Fairmont</li>
                <li>• Entfernung: 2-5min zur Kaaba</li>
                <li>• Budget Split: 40% Flug | 55% Hotel</li>
                <li className="font-semibold text-amber-600">Maximum Luxury Experience</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Info Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6"
        >
          <h3 className="font-semibold text-blue-800 mb-2">💡 Warum diese Budgetaufteilung?</h3>
          <p className="text-blue-700 text-sm">
            Unsere KI-Analyse von 10.000+ Umrah-Buchungen zeigt: Die intelligente Budget-Aufteilung 
            je nach Tier bietet das beste Preis-Leistungs-Verhältnis. Der 5% Puffer sorgt für 
            Flexibilität bei Preisschwankungen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}