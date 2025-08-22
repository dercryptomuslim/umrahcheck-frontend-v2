#!/usr/bin/env python3
"""
UmrahCheck Smart Budget Allocation System
Intelligente Budget-Verteilung für realistische Angebote
"""

from dataclasses import dataclass
from typing import Dict, List, Tuple, Optional
from datetime import datetime
import math

@dataclass
class BudgetAllocation:
    """Budget allocation breakdown"""
    total_budget: int
    flights_budget: int
    flights_percentage: float
    hotels_budget: int  
    hotels_percentage: float
    visa_budget: int
    transport_budget: int
    margin_buffer: int

@dataclass
class PriceTarget:
    """Target pricing for search optimization"""
    max_flight_price_per_person: int
    max_hotel_price_per_night_mekka: int
    max_hotel_price_per_night_medina: int
    target_star_rating: int
    distance_priority: str  # "walking", "close", "budget"

class SmartBudgetAllocator:
    """
    Intelligentes Budget-Allokations-System für UmrahCheck
    Verteilt Kundenbudget optimal auf Flüge, Hotels, Visa, Transport
    """
    
    # Standard-Kosten (relativ stabil)
    STANDARD_COSTS = {
        'visa_per_person': 100,  # €100 pro Person für Umrah Visa
        'transport_per_person': 75,  # €75 pro Person für lokalen Transport
        'insurance_per_person': 25,  # €25 pro Person für Reiseversicherung
    }
    
    # Budget-Allokations-Regeln basierend auf Gesamtbudget
    ALLOCATION_RULES = {
        'budget_ranges': {
            # Budget pro Person -> (Flug%, Hotel%, Rest%)
            (800, 1000): (55, 35, 10),    # Ultra-Budget
            (1001, 1200): (52, 38, 10),   # Budget
            (1201, 1500): (50, 40, 10),   # Standard  
            (1501, 2000): (48, 42, 10),   # Premium
            (2001, 3000): (45, 45, 10),   # Luxury
            (3001, float('inf')): (40, 50, 10)  # Ultra-Luxury
        }
    }
    
    def __init__(self):
        self.current_season_multiplier = self._get_season_multiplier()
    
    def _get_season_multiplier(self) -> float:
        """Bestimme Saison-Multiplikator basierend auf aktueller Zeit"""
        month = datetime.now().month
        
        # Hajj Saison (Juli-September) - teuer
        if month in [7, 8, 9]:
            return 1.4
        # Ramadan Saison - mittlere Preise  
        elif month in [3, 4, 5]:
            return 1.2
        # Winter (Dezember-Februar) - günstig
        elif month in [12, 1, 2]:
            return 0.9
        # Normale Monate
        else:
            return 1.0
    
    def allocate_budget(self, budget_per_person: int, persons: int, 
                       departure_month: int = None) -> BudgetAllocation:
        """
        Hauptmethode: Verteile Budget intelligent auf alle Komponenten
        
        Args:
            budget_per_person: Budget pro Person in EUR
            persons: Anzahl Reisende
            departure_month: Reisemonat für Saisonberechnung
            
        Returns:
            BudgetAllocation mit detaillierter Aufteilung
        """
        total_budget = budget_per_person * persons
        
        # Bestimme Allokations-Prozentsätze
        flight_pct, hotel_pct, rest_pct = self._get_allocation_percentages(budget_per_person)
        
        # Saison-Anpassung wenn Reisemonat gegeben
        if departure_month:
            season_multiplier = self._get_season_multiplier_for_month(departure_month)
        else:
            season_multiplier = self.current_season_multiplier
        
        # Basis-Allokation berechnen
        base_flight_budget = int(total_budget * (flight_pct / 100))
        base_hotel_budget = int(total_budget * (hotel_pct / 100))
        
        # Fixe Kosten berechnen
        visa_budget = self.STANDARD_COSTS['visa_per_person'] * persons
        transport_budget = self.STANDARD_COSTS['transport_per_person'] * persons
        insurance_budget = self.STANDARD_COSTS['insurance_per_person'] * persons
        fixed_costs = visa_budget + transport_budget + insurance_budget
        
        # Verfügbares Budget für Flüge + Hotels
        available_budget = total_budget - fixed_costs
        
        # Saison-adjustierte Allokation
        flights_budget = int(available_budget * (flight_pct / 100) * season_multiplier)
        hotels_budget = available_budget - flights_budget
        
        # Sicherheits-Buffer (5% vom Gesamtbudget)
        margin_buffer = int(total_budget * 0.05)
        flights_budget -= margin_buffer // 2
        hotels_budget -= margin_buffer // 2
        
        return BudgetAllocation(
            total_budget=total_budget,
            flights_budget=flights_budget,
            flights_percentage=flight_pct,
            hotels_budget=hotels_budget,
            hotels_percentage=hotel_pct,
            visa_budget=visa_budget,
            transport_budget=transport_budget,
            margin_buffer=margin_buffer
        )
    
    def _get_allocation_percentages(self, budget_per_person: int) -> Tuple[int, int, int]:
        """Bestimme Allokations-Prozentsätze basierend auf Budget-Range"""
        for (min_budget, max_budget), percentages in self.ALLOCATION_RULES['budget_ranges'].items():
            if min_budget <= budget_per_person <= max_budget:
                return percentages
        
        # Fallback für sehr niedrige Budgets
        return (60, 30, 10)
    
    def _get_season_multiplier_for_month(self, month: int) -> float:
        """Saison-Multiplikator für spezifischen Monat"""
        if month in [7, 8, 9]:  # Hajj Saison
            return 1.4
        elif month in [3, 4, 5]:  # Ramadan  
            return 1.2
        elif month in [12, 1, 2]:  # Winter
            return 0.9
        else:
            return 1.0
    
    def generate_price_targets(self, allocation: BudgetAllocation, persons: int,
                             nights_mekka: int, nights_medina: int) -> PriceTarget:
        """
        Generiere konkrete Preis-Ziele für die Suche
        
        WICHTIG: Berücksichtigt die 3/4-Bett-Regel in Saudi Hotels!
        Hotels haben standardmäßig 3-4 Betten pro Zimmer.
        
        Args:
            allocation: Budget-Allokation
            persons: Anzahl Reisende  
            nights_mekka: Nächte in Makkah
            nights_medina: Nächte in Medina
            
        Returns:
            PriceTarget mit max. Preisen pro Komponente
        """
        # Max. Flugpreis pro Person (Hin + Rück)
        max_flight_price_per_person = allocation.flights_budget // persons
        
        # Hotel-Budget aufteilen (60% Mekka, 40% Medina - wegen höherer Preise in Mekka)
        mekka_hotel_budget = int(allocation.hotels_budget * 0.6)
        medina_hotel_budget = int(allocation.hotels_budget * 0.4)
        
        # KRITISCH: 3/4-Bett-Regel anwenden!
        # Berechne wie viele Zimmer benötigt werden
        beds_per_room = 4 if persons >= 4 else 3  # Standard: 4-Bett-Zimmer, bei weniger Personen 3-Bett
        rooms_needed = math.ceil(persons / beds_per_room)
        
        # Max. Hotelpreis PRO ZIMMER pro Nacht (nicht pro Person!)
        # Das Budget ist für alle Personen, aber wir brauchen nur rooms_needed Zimmer
        max_hotel_price_per_room_per_night_mekka = (mekka_hotel_budget // nights_mekka // rooms_needed) if nights_mekka > 0 else 0
        max_hotel_price_per_room_per_night_medina = (medina_hotel_budget // nights_medina // rooms_needed) if nights_medina > 0 else 0
        
        # Für die Targets verwenden wir den Zimmerpreis
        max_hotel_price_per_night_mekka = max_hotel_price_per_room_per_night_mekka
        max_hotel_price_per_night_medina = max_hotel_price_per_room_per_night_medina
        
        # Bestimme Ziel-Sternebewertung basierend auf Budget
        budget_per_person = allocation.total_budget // persons
        if budget_per_person >= 2000:
            target_stars = 5
            distance_priority = "walking"
        elif budget_per_person >= 1500:
            target_stars = 4
            distance_priority = "close"
        elif budget_per_person >= 1200:
            target_stars = 4
            distance_priority = "close"
        else:
            target_stars = 3
            distance_priority = "budget"
        
        return PriceTarget(
            max_flight_price_per_person=max_flight_price_per_person,
            max_hotel_price_per_night_mekka=max_hotel_price_per_night_mekka,
            max_hotel_price_per_night_medina=max_hotel_price_per_night_medina,
            target_star_rating=target_stars,
            distance_priority=distance_priority
        )
    
    def validate_pricing(self, allocation: BudgetAllocation, 
                        flight_price_total: int, hotel_price_total: int) -> Dict:
        """
        Validiere ob gefundene Preise im Budget liegen
        
        Returns:
            Dict mit Validierungs-Ergebnissen und Empfehlungen
        """
        flights_within_budget = flight_price_total <= allocation.flights_budget
        hotels_within_budget = hotel_price_total <= allocation.hotels_budget
        
        total_found = flight_price_total + hotel_price_total + allocation.visa_budget + allocation.transport_budget
        total_within_budget = total_found <= (allocation.total_budget - allocation.margin_buffer)
        
        budget_utilization = (total_found / allocation.total_budget) * 100
        
        recommendations = []
        
        if not flights_within_budget:
            overage = flight_price_total - allocation.flights_budget
            recommendations.append(f"Flugpreise €{overage} über Budget - suche günstigere Verbindungen")
        
        if not hotels_within_budget:
            overage = hotel_price_total - allocation.hotels_budget  
            recommendations.append(f"Hotelpreise €{overage} über Budget - wähle günstigere Hotels oder weniger Sterne")
        
        if budget_utilization > 95:
            recommendations.append("Budget nahezu ausgeschöpft - prüfe Alternativen")
        elif budget_utilization < 80:
            recommendations.append("Budget-Spielraum vorhanden - Upgrades möglich")
        
        return {
            'flights_within_budget': flights_within_budget,
            'hotels_within_budget': hotels_within_budget,
            'total_within_budget': total_within_budget,
            'budget_utilization_percent': round(budget_utilization, 1),
            'total_found': total_found,
            'total_budget': allocation.total_budget,
            'savings_possible': allocation.total_budget - total_found if total_within_budget else 0,
            'recommendations': recommendations
        }

# Utility Functions
def create_realistic_fallback_prices(allocation: BudgetAllocation, persons: int,
                                   nights_mekka: int, nights_medina: int) -> Dict:
    """
    Erstelle realistische Fallback-Preise basierend auf Budget
    WICHTIG: Berücksichtigt die 3/4-Bett-Regel!
    """
    targets = SmartBudgetAllocator().generate_price_targets(
        allocation, persons, nights_mekka, nights_medina
    )
    
    # Realistische Flugpreise (80% des max. Budgets)
    realistic_flight_price = int(targets.max_flight_price_per_person * 0.8)
    
    # KRITISCH: Hotel prices are PER ROOM, not per person!
    # Realistische Hotelpreise PRO ZIMMER (85% des max. Budgets)
    realistic_mekka_price_per_room = int(targets.max_hotel_price_per_night_mekka * 0.85)
    realistic_medina_price_per_room = int(targets.max_hotel_price_per_night_medina * 0.85)
    
    # Calculate rooms needed
    beds_per_room = 4 if persons >= 4 else 3
    rooms_needed = math.ceil(persons / beds_per_room)
    
    # Total hotel costs = room price * nights * rooms needed
    total_mekka = realistic_mekka_price_per_room * nights_mekka * rooms_needed
    total_medina = realistic_medina_price_per_room * nights_medina * rooms_needed
    
    return {
        'flight_price_per_person': realistic_flight_price,
        'hotel_mekka_per_room_per_night': realistic_mekka_price_per_room,
        'hotel_medina_per_room_per_night': realistic_medina_price_per_room,
        'hotel_mekka_per_person_per_night': realistic_mekka_price_per_room // beds_per_room,
        'hotel_medina_per_person_per_night': realistic_medina_price_per_room // beds_per_room,
        'total_flights': realistic_flight_price * persons,
        'total_hotels': total_mekka + total_medina,
        'rooms_needed': rooms_needed,
        'beds_per_room': beds_per_room
    }

# Example Usage & Testing
if __name__ == "__main__":
    print("🧮 UmrahCheck Smart Budget Allocation System")
    print("=" * 50)
    
    # Test mit Mustafa's Beispiel
    allocator = SmartBudgetAllocator()
    
    # Budget: €1150-1300 pro Person, 4 Personen
    budget_per_person = 1225  # Mitte der Range
    persons = 4
    nights_mekka = 5
    nights_medina = 4
    
    print(f"📊 Test Case: {persons} Personen, €{budget_per_person} p.P.")
    print(f"🗓️ Aufenthalt: {nights_medina} Nächte Medina + {nights_mekka} Nächte Mekka")
    print()
    
    # Budget allokieren
    allocation = allocator.allocate_budget(budget_per_person, persons, departure_month=10)
    
    print("💰 BUDGET ALLOCATION:")
    print(f"   Gesamt-Budget: €{allocation.total_budget:,}")
    print(f"   Flüge ({allocation.flights_percentage}%): €{allocation.flights_budget:,}")
    print(f"   Hotels ({allocation.hotels_percentage}%): €{allocation.hotels_budget:,}")
    print(f"   Visa: €{allocation.visa_budget}")
    print(f"   Transport: €{allocation.transport_budget}")
    print(f"   Sicherheits-Buffer: €{allocation.margin_buffer}")
    print()
    
    # Preis-Ziele generieren
    targets = allocator.generate_price_targets(allocation, persons, nights_mekka, nights_medina)
    
    print("🎯 PRICE TARGETS (mit 4-Bett-Regel):")
    print(f"   Max. Flugpreis p.P.: €{targets.max_flight_price_per_person}")
    print(f"   Max. Hotel Mekka PRO ZIMMER/Nacht: €{targets.max_hotel_price_per_night_mekka}")
    print(f"   Max. Hotel Medina PRO ZIMMER/Nacht: €{targets.max_hotel_price_per_night_medina}")
    print(f"   Ziel Sterne-Rating: {targets.target_star_rating}⭐")
    print(f"   Entfernung Priorität: {targets.distance_priority}")
    print()
    
    # Realistische Fallback-Preise
    fallback = create_realistic_fallback_prices(allocation, persons, nights_mekka, nights_medina)
    
    print("✨ REALISTIC PRICING (4-Bett-Zimmer Regel):")
    print(f"   Zimmer benötigt: {fallback['rooms_needed']} ({fallback['beds_per_room']} Betten pro Zimmer)")
    print(f"   Flugpreis p.P.: €{fallback['flight_price_per_person']}")
    print(f"   Total Flüge: €{fallback['total_flights']:,}")
    print()
    print(f"   Hotel Mekka PRO ZIMMER/Nacht: €{fallback['hotel_mekka_per_room_per_night']}")
    print(f"   Hotel Mekka PRO PERSON/Nacht: €{fallback['hotel_mekka_per_person_per_night']} (geteilt durch {fallback['beds_per_room']})")
    print()
    print(f"   Hotel Medina PRO ZIMMER/Nacht: €{fallback['hotel_medina_per_room_per_night']}")
    print(f"   Hotel Medina PRO PERSON/Nacht: €{fallback['hotel_medina_per_person_per_night']} (geteilt durch {fallback['beds_per_room']})")
    print()
    print(f"   Total Hotels: €{fallback['total_hotels']:,} ({fallback['rooms_needed']} Zimmer × {nights_mekka + nights_medina} Nächte)")
    print()
    
    # Validierung
    validation = allocator.validate_pricing(
        allocation, 
        fallback['total_flights'],
        fallback['total_hotels']
    )
    
    print("✅ BUDGET VALIDATION:")
    print(f"   Flüge im Budget: {validation['flights_within_budget']}")
    print(f"   Hotels im Budget: {validation['hotels_within_budget']}")  
    print(f"   Gesamt im Budget: {validation['total_within_budget']}")
    print(f"   Budget-Auslastung: {validation['budget_utilization_percent']}%")
    print(f"   Einsparung möglich: €{validation['savings_possible']}")
    print()
    
    if validation['recommendations']:
        print("💡 EMPFEHLUNGEN:")
        for rec in validation['recommendations']:
            print(f"   • {rec}")