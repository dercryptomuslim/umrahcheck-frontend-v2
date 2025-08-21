import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Check if Supabase is configured
    if (!supabase) {
      console.warn('Supabase not configured, falling back to n8n only');
      return handleFallbackMode(formData);
    }
    
    // 1. Create or find user/lead
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', formData.email)
      .single();

    let userId = existingUser?.id;

    if (!userId) {
      // Create new user if not exists
      const { data: newUser, error: userError } = await supabase
        .from('users')
        .insert({
          email: formData.email,
          name: formData.name || formData.vorname,
          whatsapp: formData.telefon || formData.whatsapp
        })
        .select()
        .single();

      if (userError && userError.code !== '23505') { // Ignore duplicate key error
        console.error('Error creating user:', userError);
      }
      
      userId = newUser?.id;
    }

    // 2. Generate AI analysis
    const analysis = generateAIAnalysis(formData);

    // 3. Save KI analysis to Supabase
    const { data: savedAnalysis, error: analysisError } = await supabase
      .from('ki_analyses')
      .insert({
        user_id: userId,
        lead_email: formData.email, // Fallback connection to leads
        budget: formData.budget || formData.budgetProPerson,
        departure_city: formData.departure || formData.abflughafen,
        travel_dates: {
          departure_date: formData.reisezeitraum || formData.date,
          nights_mekka: formData.nights_mecca || formData.naechte_mekka,
          nights_medina: formData.nights_medina || formData.naechte_medina,
          travelers: formData.anzahlReisende || formData.travelers || 1
        },
        recommendation: analysis,
        status: 'completed'
      })
      .select()
      .single();

    if (analysisError) {
      console.error('Error saving analysis:', analysisError);
      throw analysisError;
    }

    // 4. Track user session/behavior
    if (userId) {
      await supabase
        .from('user_sessions')
        .insert({
          user_id: userId,
          page_visited: '/ki-analyse',
          conversion_action: 'ki_analysis_completed',
          time_spent: 0
        });
    }

    // 5. Send webhook to n8n for existing workflow
    try {
      await fetch('https://n8n.umrahcheck.de/webhook/umrahcheck-ki-analyse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          analysis_id: savedAnalysis?.id,
          supabase_user_id: userId,
          timestamp: new Date().toISOString()
        })
      });
    } catch (webhookError) {
      console.error('Webhook error:', webhookError);
    }

    return NextResponse.json({
      success: true,
      message: 'Analyse erfolgreich gespeichert',
      data: {
        analysis_id: savedAnalysis?.id,
        user_id: userId,
        recommendation: analysis
      }
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Fehler bei der Analyse-Verarbeitung',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Fallback mode when Supabase is not configured
async function handleFallbackMode(formData: any) {
  const analysis = generateAIAnalysis(formData);
  
  // Send to n8n only
  try {
    await fetch('https://n8n.umrahcheck.de/webhook/umrahcheck-ki-analyse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        fallback_mode: true,
        timestamp: new Date().toISOString()
      })
    });
  } catch (webhookError) {
    console.error('Webhook error:', webhookError);
  }

  return NextResponse.json({
    success: true,
    message: 'Analyse erfolgreich verarbeitet (Fallback-Modus)',
    data: { recommendation: analysis }
  });
}

// Generate AI Analysis (simplified version)
function generateAIAnalysis(formData: any) {
  const budget = formData.budget || formData.budgetProPerson || 1200;
  const travelers = formData.anzahlReisende || formData.travelers || 1;
  const totalBudget = budget * travelers;

  // Budget categories based on your business logic
  let category = 'budget';
  let hotelRecommendation = '3-Sterne Hotels, 10-15 Min zum Haram';
  let flightRecommendation = 'Indirekte Flüge mit 1-2 Stopps';
  
  if (budget >= 2000) {
    category = 'premium';
    hotelRecommendation = '5-Sterne Hotels direkt am Haram';
    flightRecommendation = 'Direktflüge oder Premium Airlines';
  } else if (budget >= 1500) {
    category = 'optimal';
    hotelRecommendation = '4-Sterne Hotels, 5-10 Min zum Haram';
    flightRecommendation = 'Gute Verbindungen mit max 1 Stopp';
  } else if (budget >= 1000) {
    category = 'good';
    hotelRecommendation = '3-4 Sterne Hotels, gute Lage';
    flightRecommendation = 'Flexible Flugverbindungen';
  }

  return {
    budget_category: category,
    budget_per_person: budget,
    total_budget: totalBudget,
    travelers: travelers,
    recommendations: {
      hotels: hotelRecommendation,
      flights: flightRecommendation,
      savings_potential: `Bis zu ${Math.floor(budget * 0.3)}€ durch direkte Buchung sparen`,
      booking_time: 'Beste Preise 2-3 Monate vor Abreise'
    },
    next_steps: [
      'Detaillierte Hotel-Empfehlungen im PDF-Angebot',
      'Konkrete Flugverbindungen mit Preisen',
      'Persönliche Beratung möglich'
    ],
    generated_at: new Date().toISOString()
  };
}