// UmrahCheck Frontend - MCP Agent Integration Example
// File: utils/mcpBookingAgent.ts

export interface BookingRequest {
  first_name: string;
  last_name: string; 
  email: string;
  whatsapp: string;
  budget: string; // "1150-1300"
  persons: string;
  destination: string;
  departure_airport: string;
  arrival_airport: string;
  departure_date: string; // "10.10.2025"
  nights_mekka: string;
  nights_medina: string;
  nationality: string;
  notes?: string;
  timestamp: string;
  source: string;
}

export interface FlightResult {
  airline: string;
  flight_number: string;
  departure: string;
  arrival: string;
  price_per_person: string;
  booking_url: string;
  class: string;
}

export interface HotelResult {
  name: string;
  stars: number;
  distance_to_landmark: string;
  check_in: string;
  check_out: string;
  nights: number;
  room_type: string;
  price_total: string;
  price_per_night: string;
  booking_url: string;
  amenities: string[];
  rating: number;
}

export interface BookingResponse {
  request_id: string;
  status: string;
  research_time: string;
  customer_info: {
    name: string;
    persons: number;
    budget_range: string;
    special_requirements: string;
    contact: {
      email: string;
      whatsapp: string;
    };
  };
  flights: {
    outbound: FlightResult;
    return: FlightResult;
    total_flight_cost: string;
  };
  hotels: {
    mekka: HotelResult;
    medina: HotelResult;
    total_hotel_cost: string;
  };
  cost_breakdown: {
    flights_total: string;
    hotels_total: string;
    estimated_visa: string;
    estimated_transport: string;
    estimated_total: string;
    budget_requested: string;
    budget_difference: string;
    within_budget: boolean;
  };
  recommendations: string[];
  direct_booking_links: {
    complete_package: string;
    flights_only: string;
    hotels_only: string;
  };
}

/**
 * Research booking options using MCP Agent
 */
export async function researchBookingWithMCP(
  formData: any
): Promise<BookingResponse> {
  
  // Convert frontend form data to MCP request format
  const mcpRequest: BookingRequest = {
    first_name: formData.vorname || formData.firstName || '',
    last_name: formData.nachname || formData.lastName || '',
    email: formData.email || '',
    whatsapp: formData.whatsapp || formData.phone || '',
    budget: formData.budget || '1000-1500',
    persons: formData.personen || formData.persons || '2',
    destination: formData.destination || 'Medina',
    departure_airport: formData.abflug || formData.departureAirport || 'Frankfurt',
    arrival_airport: 'Jeddah', // Default for Umrah
    departure_date: formData.reisedatum || formData.departureDate || '',
    nights_mekka: formData.naechte_mekka || formData.nightsMekka || '5',
    nights_medina: formData.naechte_medina || formData.nightsMedina || '4',
    nationality: formData.nationalitaet || formData.nationality || 'deutsch',
    notes: formData.notizen || formData.notes || '',
    timestamp: new Date().toISOString(),
    source: 'umrahcheck-frontend'
  };

  // Call MCP agent API
  const response = await fetch('/api/mcp-research', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mcpRequest)
  });

  if (!response.ok) {
    throw new Error(`MCP research failed: ${response.status} ${response.statusText}`);
  }

  const result: BookingResponse = await response.json();
  return result;
}

/**
 * Check MCP Agent health status
 */
export async function checkMCPAgentHealth(): Promise<boolean> {
  try {
    const response = await fetch('/api/mcp-health', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return response.ok;
  } catch (error) {
    console.error('MCP Health check failed:', error);
    return false;
  }
}

// Example usage in a React component:
/*
import { researchBookingWithMCP, checkMCPAgentHealth } from '@/utils/mcpBookingAgent';

export default function BookingForm() {
  const [isResearching, setIsResearching] = useState(false);
  const [results, setResults] = useState<BookingResponse | null>(null);
  
  const handleResearch = async (formData: any) => {
    setIsResearching(true);
    
    try {
      // Check if MCP agent is available
      const isHealthy = await checkMCPAgentHealth();
      if (!isHealthy) {
        throw new Error('Booking research service is currently unavailable');
      }
      
      // Research booking options
      const bookingResults = await researchBookingWithMCP(formData);
      setResults(bookingResults);
      
      // Track successful research
      analytics.trackEvent({
        event_name: 'mcp_booking_research_success',
        event_category: 'booking',
        parameters: {
          request_id: bookingResults.request_id,
          research_time: bookingResults.research_time,
          within_budget: bookingResults.cost_breakdown.within_budget,
          persons: bookingResults.customer_info.persons
        }
      });
      
    } catch (error) {
      console.error('Booking research failed:', error);
      
      // Track research failure
      analytics.trackEvent({
        event_name: 'mcp_booking_research_failed',
        event_category: 'booking',
        parameters: {
          error_message: String(error),
          form_data: formData
        }
      });
      
      // Show fallback or error message
      alert('Booking research is temporarily unavailable. Please try again later.');
      
    } finally {
      setIsResearching(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleResearch}>
        // ... form fields
        <button type="submit" disabled={isResearching}>
          {isResearching ? 'Researching...' : 'Find Best Deals'}
        </button>
      </form>
      
      {results && (
        <div>
          <h3>Research Results (ID: {results.request_id})</h3>
          <p>Research completed in {results.research_time}</p>
          
          // Display flights
          <div>
            <h4>Flights ({results.flights.total_flight_cost})</h4>
            <div>
              <strong>Outbound:</strong> {results.flights.outbound.airline} {results.flights.outbound.flight_number}
              <br />
              {results.flights.outbound.departure} → {results.flights.outbound.arrival}
              <br />
              Price: {results.flights.outbound.price_per_person} per person
            </div>
          </div>
          
          // Display hotels
          <div>
            <h4>Hotels ({results.hotels.total_hotel_cost})</h4>
            <div>
              <strong>Makkah:</strong> {results.hotels.mekka.name} ({results.hotels.mekka.stars}⭐)
              <br />
              {results.hotels.mekka.nights} nights: {results.hotels.mekka.price_total}
            </div>
            <div>
              <strong>Medina:</strong> {results.hotels.medina.name} ({results.hotels.medina.stars}⭐)
              <br />
              {results.hotels.medina.nights} nights: {results.hotels.medina.price_total}
            </div>
          </div>
          
          // Display total cost
          <div>
            <h4>Total Cost: {results.cost_breakdown.estimated_total}</h4>
            <p>Budget: {results.cost_breakdown.budget_requested}</p>
            <p>Status: {results.cost_breakdown.within_budget ? '✅ Within Budget' : '⚠️ Over Budget'}</p>
            <p>{results.cost_breakdown.budget_difference}</p>
          </div>
          
          // Display booking links
          <div>
            <a href={results.direct_booking_links.complete_package} target="_blank">
              Book Complete Package
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
*/