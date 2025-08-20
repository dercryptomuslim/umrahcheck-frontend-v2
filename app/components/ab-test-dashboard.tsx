"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target,
  Zap,
  Star,
  MessageSquare
} from 'lucide-react'

interface ABTestResults {
  testId: string
  variations: {
    variationId: string
    name: string
    users: number
    conversions: number
    conversionRate: number
    cesScore: number
    cesResponses: number
  }[]
  totalUsers: number
  startDate: string
  isActive: boolean
}

export function ABTestDashboard() {
  const [results, setResults] = useState<ABTestResults | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development or when admin query param is present
    const urlParams = new URLSearchParams(window.location.search)
    const isDev = process.env.NODE_ENV === 'development'
    const isAdmin = urlParams.get('admin') === 'true'
    
    if (isDev || isAdmin) {
      setIsVisible(true)
      loadResults()
    }
  }, [])

  const loadResults = () => {
    try {
      // Load A/B test events from localStorage
      const abEvents = JSON.parse(localStorage.getItem('umrahcheck_ab_events') || '[]')
      const cesData = JSON.parse(localStorage.getItem('umrahcheck_ces') || '[]')
      
      if (abEvents.length === 0) {
        console.log('No A/B test data available')
        return
      }

      // Group by variation
      const variationStats: Record<string, any> = {}
      
      abEvents.forEach((event: any) => {
        const { variation_id } = event
        if (!variation_id) return
        
        if (!variationStats[variation_id]) {
          variationStats[variation_id] = {
            variationId: variation_id,
            name: event.variation_name || variation_id,
            users: new Set(),
            conversions: 0,
            cesScores: [],
            pageViews: 0
          }
        }
        
        // Track unique users
        if (event.userId) {
          variationStats[variation_id].users.add(event.userId)
        }
        
        // Track conversions
        if (event.event === 'ab_conversion') {
          variationStats[variation_id].conversions++
        }
        
        // Track page views
        if (event.event === 'variation_assigned') {
          variationStats[variation_id].pageViews++
        }
      })
      
      // Add CES data
      cesData.forEach((ces: any) => {
        const abEvent = abEvents.find((e: any) => 
          e.userId === ces.userId || e.sessionId === ces.sessionId
        )
        
        if (abEvent && variationStats[abEvent.variation_id]) {
          variationStats[abEvent.variation_id].cesScores.push(ces.rating)
        }
      })
      
      // Calculate metrics
      const variations = Object.values(variationStats).map((stat: any) => ({
        variationId: stat.variationId,
        name: stat.name,
        users: stat.users.size,
        conversions: stat.conversions,
        conversionRate: stat.users.size > 0 ? (stat.conversions / stat.users.size) * 100 : 0,
        cesScore: stat.cesScores.length > 0 
          ? stat.cesScores.reduce((sum: number, score: number) => sum + score, 0) / stat.cesScores.length 
          : 0,
        cesResponses: stat.cesScores.length
      }))
      
      const totalUsers = variations.reduce((sum, v) => sum + v.users, 0)
      
      setResults({
        testId: 'golden_experience_v1',
        variations,
        totalUsers,
        startDate: new Date().toISOString().split('T')[0],
        isActive: true
      })
      
    } catch (error) {
      console.error('Error loading A/B test results:', error)
    }
  }

  if (!isVisible || !results) {
    return null
  }

  const bestVariation = results.variations.reduce((best, current) => 
    current.conversionRate > best.conversionRate ? current : best
  )

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-96 bg-white shadow-2xl border-2 border-[--primary-gold]/20">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[--primary-gold]" />
              <h3 className="font-bold text-sm">A/B Test Dashboard</h3>
            </div>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={() => setIsVisible(false)}
              className="h-6 w-6 p-0"
            >
              ×
            </Button>
          </div>

          <div className="space-y-3">
            {/* Overall Stats */}
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Total Users:</span>
              <span className="font-semibold">{results.totalUsers}</span>
            </div>

            {/* Winning Variation */}
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-green-600" />
                <span className="text-xs font-semibold text-green-800">Best Performer</span>
              </div>
              <div className="text-sm font-medium">{bestVariation.name}</div>
              <div className="text-xs text-green-700">
                {bestVariation.conversionRate.toFixed(1)}% conversion rate
              </div>
            </div>

            {/* All Variations */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-gray-700">All Variations</h4>
              {results.variations.map((variation) => (
                <div 
                  key={variation.variationId}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded text-xs"
                >
                  <div className="flex-1">
                    <div className="font-medium truncate">{variation.name}</div>
                    <div className="text-gray-600">
                      {variation.users} users • {variation.conversions} conversions
                    </div>
                  </div>
                  
                  <div className="text-right ml-2">
                    <div className="font-semibold">
                      {variation.conversionRate.toFixed(1)}%
                    </div>
                    {variation.cesResponses > 0 && (
                      <div className="text-gray-500 flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {variation.cesScore.toFixed(1)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2 border-t border-gray-200">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={loadResults}
                className="flex-1 text-xs"
              >
                <Zap className="w-3 h-3 mr-1" />
                Refresh
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => {
                  const data = {
                    results,
                    timestamp: new Date().toISOString(),
                    userAgent: navigator.userAgent
                  }
                  navigator.clipboard.writeText(JSON.stringify(data, null, 2))
                  alert('Results copied to clipboard!')
                }}
                className="flex-1 text-xs"
              >
                Export
              </Button>
            </div>

            <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-100">
              Dev/Admin Dashboard • Real-time data
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Quick access component for testing
export function ABTestIndicator() {
  const [variation, setVariation] = useState<string | null>(null)

  useEffect(() => {
    // Show current variation in corner for dev/testing
    const assignment = localStorage.getItem('ab_test_golden_experience_v1')
    if (assignment) {
      const data = JSON.parse(assignment)
      setVariation(data.variationId)
    }
  }, [])

  if (process.env.NODE_ENV !== 'development' || !variation) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-40 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-mono">
      A/B: {variation}
    </div>
  )
}