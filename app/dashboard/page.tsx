"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  Calendar,
  MapPin,
  Plane,
  Hotel
} from 'lucide-react';

interface AnalyticsData {
  totalUsers: number;
  totalAnalyses: number;
  totalRevenue: number;
  conversionRate: number;
  recentAnalyses: any[];
  popularCities: any[];
  budgetDistribution: any[];
}

export default function DashboardPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalUsers: 0,
    totalAnalyses: 0,
    totalRevenue: 0,
    conversionRate: 0,
    recentAnalyses: [],
    popularCities: [],
    budgetDistribution: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      // Fetch total users
      const { count: userCount } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true });

      // Fetch total analyses
      const { data: analyses, count: analysisCount } = await supabase
        .from('ki_analyses')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .limit(10);

      // Fetch PDF purchases for revenue
      const { data: purchases } = await supabase
        .from('pdf_purchases')
        .select('price_paid');
      
      const totalRevenue = purchases?.reduce((sum, p) => sum + (p.price_paid || 0), 0) || 0;

      // Calculate conversion rate
      const conversionRate = userCount && purchases?.length 
        ? (purchases.length / userCount * 100) 
        : 0;

      // Process budget distribution
      const budgetData = analyses?.reduce((acc: any, analysis: any) => {
        const budget = analysis.budget || 0;
        const category = 
          budget < 1000 ? 'Under 1000€' :
          budget < 1500 ? '1000-1500€' :
          budget < 2000 ? '1500-2000€' :
          budget < 3000 ? '2000-3000€' :
          'Over 3000€';
        
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {});

      // Process popular cities
      const cityData = analyses?.reduce((acc: any, analysis: any) => {
        const city = analysis.departure_city || 'Unknown';
        acc[city] = (acc[city] || 0) + 1;
        return acc;
      }, {});

      setAnalytics({
        totalUsers: userCount || 0,
        totalAnalyses: analysisCount || 0,
        totalRevenue,
        conversionRate,
        recentAnalyses: analyses || [],
        popularCities: Object.entries(cityData || {}).map(([city, count]) => ({ city, count })),
        budgetDistribution: Object.entries(budgetData || {}).map(([range, count]) => ({ range, count }))
      });
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[--primary-gold]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          UmrahCheck Analytics Dashboard
        </h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">KI Analyses</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.totalAnalyses}</div>
              <p className="text-xs text-muted-foreground">
                +25% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€{analytics.totalRevenue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                PDF sales via Copecart
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.conversionRate.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">
                Users to PDF buyers
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Budget Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Budget Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics.budgetDistribution.map(({ range, count }: any) => (
                  <div key={range} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{range}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[--primary-gold] h-2 rounded-full"
                          style={{ width: `${(count / analytics.totalAnalyses * 100)}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-12 text-right">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Departure Cities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics.popularCities.slice(0, 5).map(({ city, count }: any) => (
                  <div key={city} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm font-medium">{city}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{count} requests</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Analyses */}
        <Card>
          <CardHeader>
            <CardTitle>Recent KI Analyses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Email</th>
                    <th className="text-left py-2">Budget</th>
                    <th className="text-left py-2">Departure</th>
                    <th className="text-left py-2">Status</th>
                    <th className="text-left py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.recentAnalyses.map((analysis: any) => (
                    <tr key={analysis.id} className="border-b hover:bg-gray-50">
                      <td className="py-2">{analysis.lead_email || 'N/A'}</td>
                      <td className="py-2">€{analysis.budget || 0}</td>
                      <td className="py-2">{analysis.departure_city || 'N/A'}</td>
                      <td className="py-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {analysis.status || 'completed'}
                        </span>
                      </td>
                      <td className="py-2">
                        {new Date(analysis.created_at).toLocaleDateString('de-DE')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}