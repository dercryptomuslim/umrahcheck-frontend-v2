#!/usr/bin/env python3
"""
Test script for UmrahCheck MCP Booking Agent
"""

import asyncio
import json
import httpx
from datetime import datetime

# Test data
TEST_REQUEST = {
    "first_name": "Mustafa",
    "last_name": "Ali", 
    "email": "mustafa.ali@na4mc.de",
    "whatsapp": "+393939393939",
    "budget": "1150-1300",
    "persons": "4",
    "destination": "Medina",
    "departure_airport": "Frankfurt",
    "arrival_airport": "Jeddah",
    "departure_date": "10.10.2025",  # Future date for testing
    "nights_mekka": "5",
    "nights_medina": "4",
    "nationality": "deutsch", 
    "notes": "Nähe zum Haram wichtig",
    "timestamp": datetime.now().isoformat(),
    "source": "test-script"
}

async def test_agent():
    """Test the MCP booking agent"""
    
    print("🤖 Testing UmrahCheck MCP Booking Agent...")
    print(f"📋 Test Request: {TEST_REQUEST['first_name']} {TEST_REQUEST['last_name']}")
    print(f"✈️  Route: {TEST_REQUEST['departure_airport']} → {TEST_REQUEST['arrival_airport']}")
    print(f"📅 Travel: {TEST_REQUEST['departure_date']} ({TEST_REQUEST['nights_medina']}+{TEST_REQUEST['nights_mekka']} nights)")
    print(f"👥 Persons: {TEST_REQUEST['persons']}")
    print(f"💰 Budget: €{TEST_REQUEST['budget']} per person")
    print("-" * 60)
    
    async with httpx.AsyncClient(timeout=120.0) as client:
        try:
            # Test health endpoint first
            print("🔍 Testing health endpoint...")
            health_response = await client.get("http://localhost:8001/health")
            
            if health_response.status_code == 200:
                health_data = health_response.json()
                print(f"✅ Health Check: {health_data['status']}")
                print(f"📊 Service: {health_data['service']}")
            else:
                print(f"❌ Health check failed: {health_response.status_code}")
                return
                
            print("-" * 60)
            
            # Test booking research
            print("🔍 Starting booking research...")
            start_time = datetime.now()
            
            research_response = await client.post(
                "http://localhost:8001/research-booking",
                json=TEST_REQUEST
            )
            
            end_time = datetime.now()
            duration = (end_time - start_time).total_seconds()
            
            if research_response.status_code == 200:
                result = research_response.json()
                
                print(f"✅ Research completed in {duration:.1f}s")
                print(f"📋 Request ID: {result['request_id']}")
                print(f"⏱️  Research Time: {result['research_time']}")
                
                # Display flight results
                print("\n✈️  FLIGHT RESULTS:")
                outbound = result['flights']['outbound']
                return_flight = result['flights']['return'] 
                print(f"   → Outbound: {outbound['airline']} {outbound['flight_number']}")
                print(f"     {outbound['departure']} → {outbound['arrival']}")
                print(f"     Price: {outbound['price_per_person']} per person")
                
                print(f"   ← Return: {return_flight['airline']} {return_flight['flight_number']}")
                print(f"     {return_flight['departure']} → {return_flight['arrival']}")
                print(f"     Price: {return_flight['price_per_person']} per person")
                
                print(f"   💰 Total Flight Cost: {result['flights']['total_flight_cost']}")
                
                # Display hotel results
                print("\n🏨 HOTEL RESULTS:")
                medina_hotel = result['hotels']['medina']
                mekka_hotel = result['hotels']['mekka']
                
                print(f"   🕌 Medina: {medina_hotel['name']} ({medina_hotel['stars']}⭐)")
                print(f"     📍 Distance: {medina_hotel['distance_to_landmark']}")
                print(f"     📅 {medina_hotel['check_in']} → {medina_hotel['check_out']} ({medina_hotel['nights']} nights)")
                print(f"     💰 Total: {medina_hotel['price_total']} ({medina_hotel['price_per_night']}/night)")
                print(f"     ⭐ Rating: {medina_hotel['rating']}/5")
                
                print(f"   🕋 Makkah: {mekka_hotel['name']} ({mekka_hotel['stars']}⭐)")
                print(f"     📍 Distance: {mekka_hotel['distance_to_landmark']}")
                print(f"     📅 {mekka_hotel['check_in']} → {mekka_hotel['check_out']} ({mekka_hotel['nights']} nights)")
                print(f"     💰 Total: {mekka_hotel['price_total']} ({mekka_hotel['price_per_night']}/night)")
                print(f"     ⭐ Rating: {mekka_hotel['rating']}/5")
                
                print(f"\n   🏨 Total Hotel Cost: {result['hotels']['total_hotel_cost']}")
                
                # Display cost breakdown
                print("\n💰 COST BREAKDOWN:")
                cost = result['cost_breakdown']
                print(f"   ✈️  Flights: {cost['flights_total']}")
                print(f"   🏨 Hotels: {cost['hotels_total']}")
                print(f"   📋 Visa: {cost['estimated_visa']}")
                print(f"   🚌 Transport: {cost['estimated_transport']}")
                print(f"   📊 Total: {cost['estimated_total']}")
                print(f"   💳 Budget: {cost['budget_requested']}")
                print(f"   📈 Difference: {cost['budget_difference']}")
                print(f"   ✅ Within Budget: {cost['within_budget']}")
                
                # Display recommendations
                print("\n💡 RECOMMENDATIONS:")
                for i, rec in enumerate(result['recommendations'], 1):
                    print(f"   {i}. {rec}")
                
                # Display booking links
                print("\n🔗 BOOKING LINKS:")
                links = result['direct_booking_links']
                print(f"   📦 Complete Package: {links['complete_package']}")
                print(f"   ✈️  Flights Only: {links['flights_only']}")
                print(f"   🏨 Hotels Only: {links['hotels_only']}")
                
                print("\n" + "="*60)
                print("✅ TEST COMPLETED SUCCESSFULLY!")
                print(f"📊 Performance: {duration:.1f}s total, {result['research_time']} agent time")
                
                # Save results to file
                with open(f"test_results_{result['request_id']}.json", "w") as f:
                    json.dump(result, f, indent=2)
                print(f"💾 Results saved to test_results_{result['request_id']}.json")
                
            else:
                print(f"❌ Research failed: {research_response.status_code}")
                print(f"📝 Response: {research_response.text}")
                
        except httpx.TimeoutException:
            print("⏰ Request timed out - this is normal for first run as browser initializes")
            
        except httpx.ConnectError:
            print("❌ Connection failed - make sure the agent is running on port 8001")
            print("💡 Start with: python mcp_booking_agent.py")
            
        except Exception as e:
            print(f"❌ Test failed: {e}")

if __name__ == "__main__":
    print("🚀 UmrahCheck MCP Booking Agent Test")
    print("=" * 60)
    asyncio.run(test_agent())