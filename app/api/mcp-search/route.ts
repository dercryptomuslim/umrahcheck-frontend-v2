import { NextRequest, NextResponse } from 'next/server';

const MCP_AGENT_URL = process.env.MCP_AGENT_URL || 'https://umrahcheck-api-production.up.railway.app';
const MCP_API_KEY = process.env.MCP_API_KEY;

interface LeadRequest {
  first_name: string;
  last_name: string;
  email: string;
  whatsapp?: string;
  budget: string;  // "1150-1300" format
  persons: number;
  destination?: string;
  departure_airport: string;
  arrival_airport?: string;
  departure_date: string;
  nights_mekka?: number;
  nights_medina?: number;
  nationality?: string;
  notes?: string;
  source?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Validate API key
    if (!MCP_API_KEY) {
      console.error('MCP_API_KEY not configured');
      return NextResponse.json(
        { error: 'Service configuration error' },
        { status: 500 }
      );
    }

    // Parse request body
    const leadData: LeadRequest = await request.json();
    
    // Validate required fields
    const requiredFields = ['first_name', 'last_name', 'email', 'budget', 'persons', 'departure_airport'];
    const missingFields = requiredFields.filter(field => !leadData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Add defaults
    const normalizedLead = {
      ...leadData,
      destination: leadData.destination || 'Medina',
      arrival_airport: leadData.arrival_airport || 'JED',
      nights_mekka: leadData.nights_mekka || 5,
      nights_medina: leadData.nights_medina || 4,
      nationality: leadData.nationality || 'deutsch',
      source: leadData.source || 'frontend'
    };

    console.log('Calling MCP Agent:', {
      url: `${MCP_AGENT_URL}/v1/itinerary/search`,
      lead: `${normalizedLead.first_name} ${normalizedLead.last_name}`,
      budget: normalizedLead.budget,
      persons: normalizedLead.persons
    });

    // Call MCP Agent
    const mcpResponse = await fetch(`${MCP_AGENT_URL}/v1/itinerary/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': MCP_API_KEY,
        'User-Agent': 'UmrahCheck-Frontend/2.0'
      },
      body: JSON.stringify(normalizedLead),
      // Add timeout for Railway
      signal: AbortSignal.timeout(30000) // 30 seconds
    });

    if (!mcpResponse.ok) {
      const errorText = await mcpResponse.text();
      console.error('MCP Agent error:', {
        status: mcpResponse.status,
        statusText: mcpResponse.statusText,
        body: errorText
      });
      
      return NextResponse.json(
        { 
          error: 'Search service temporarily unavailable',
          details: mcpResponse.status === 401 ? 'Authentication failed' : 'Service error'
        },
        { status: 503 }
      );
    }

    const result = await mcpResponse.json();
    
    console.log('MCP Agent success:', {
      lead_token: result.lead_token,
      options_count: result.options?.length || 0,
      processing_time: result.processing_time_ms
    });

    // Add frontend metadata
    const response = {
      ...result,
      meta: {
        ...result.meta,
        frontend_timestamp: new Date().toISOString(),
        agent_url: MCP_AGENT_URL,
        version: '2.0.0'
      }
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('MCP search error:', error);
    
    if (error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Search request timed out' },
        { status: 408 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  try {
    if (!MCP_API_KEY) {
      return NextResponse.json(
        { status: 'error', message: 'MCP_API_KEY not configured' },
        { status: 500 }
      );
    }

    // Check MCP Agent health
    const healthResponse = await fetch(`${MCP_AGENT_URL}/v1/health`, {
      headers: {
        'User-Agent': 'UmrahCheck-Frontend/2.0'
      },
      signal: AbortSignal.timeout(10000) // 10 seconds
    });

    if (!healthResponse.ok) {
      return NextResponse.json(
        { 
          status: 'unhealthy', 
          message: 'MCP Agent not responding',
          agent_status: healthResponse.status
        },
        { status: 503 }
      );
    }

    const health = await healthResponse.json();
    
    return NextResponse.json({
      status: 'healthy',
      mcp_agent: health,
      frontend_timestamp: new Date().toISOString(),
      agent_url: MCP_AGENT_URL
    });

  } catch (error) {
    console.error('Health check failed:', error);
    
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Health check failed',
        error: error.message
      },
      { status: 500 }
    );
  }
}