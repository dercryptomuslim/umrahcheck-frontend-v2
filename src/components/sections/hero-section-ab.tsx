'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Star, Users, Shield, Clock } from 'lucide-react'
import Link from 'next/link'
import { useABTest, trackABTestConversion } from '@/lib/ab-testing'

export function HeroSection() {
  // A/B Tests für verschiedene Elemente
  const { variantText: headline } = useABTest('heroHeadline')
  const { variantText: ctaText, variant: ctaVariant } = useABTest('ctaButton')
  const { variantText: trustBadge } = useABTest('trustBadge')
  const { variantText: priceDisplay } = useABTest('priceDisplay')

  // Track Conversion bei CTA Klick
  const handleCTAClick = () => {
    trackABTestConversion('ctaButton', ctaVariant)
    trackABTestConversion('heroHeadline', headline)
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Trust Badge - A/B Test */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            {trustBadge}
          </div>

          {/* Headline - A/B Test */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            {headline}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Vergleiche Hotels in Mekka & Medina, spare Zeit und Geld. 
            Von einem Muslim aus Medina, der dir persönlich zur Seite steht.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">100+</div>
              <div className="text-sm text-gray-600">Hotels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">1000+</div>
              <div className="text-sm text-gray-600">Zufriedene Pilger</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">{priceDisplay}</div>
              <div className="text-sm text-gray-600">Komplettpaket</div>
            </div>
          </div>

          {/* CTA Buttons - A/B Test */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/umrah-anfrage">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-emerald-600 hover:bg-emerald-700"
                onClick={handleCTAClick}
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/preisvergleich">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                Hotels vergleichen
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Keine versteckten Kosten</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>100% Halal</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Persönliche Beratung</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center gap-1">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium"
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="ml-4 text-left">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Über 1000+ zufriedene Kunden
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}