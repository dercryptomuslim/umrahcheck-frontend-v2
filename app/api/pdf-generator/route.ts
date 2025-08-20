// PDF Generator API für Umrah-Gesamtpakete
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs' // Node.js Runtime für PDF Generation

interface UmrahPackage {
  customer: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  travel: {
    departureDate: string
    returnDate: string
    departureAirport: string
    adults: number
    children?: number
  }
  hotels: {
    mekka: {
      name: string
      nights: number
      pricePerNight: number
      distance: string
      amenities: string[]
    }
    medina: {
      name: string
      nights: number
      pricePerNight: number
      distance: string
      amenities: string[]
    }
  }
  flights: {
    outbound: {
      airline: string
      flightNumber: string
      departure: string
      arrival: string
      price: number
    }
    return: {
      airline: string
      flightNumber: string
      departure: string
      arrival: string
      price: number
    }
  }
  extras?: {
    visa: boolean
    transport: boolean
    guide: boolean
    meals: boolean
  }
  pricing: {
    hotelTotal: number
    flightTotal: number
    extrasTotal: number
    subtotal: number
    discount: number
    total: number
  }
}

// HTML Template für PDF
const generateHTMLTemplate = (pkg: UmrahPackage): string => {
  const { customer, travel, hotels, flights, pricing, extras } = pkg
  
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
    }
    .header {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      padding: 30px;
      border-radius: 10px;
      margin-bottom: 30px;
    }
    .header h1 {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .header p {
      opacity: 0.9;
    }
    .section {
      margin-bottom: 30px;
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
    }
    .section-title {
      color: #10b981;
      font-size: 20px;
      margin-bottom: 15px;
      border-bottom: 2px solid #10b981;
      padding-bottom: 5px;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    .info-item {
      background: white;
      padding: 10px;
      border-radius: 5px;
    }
    .info-label {
      font-weight: 600;
      color: #666;
      font-size: 12px;
      text-transform: uppercase;
    }
    .info-value {
      font-size: 16px;
      color: #333;
      margin-top: 3px;
    }
    .hotel-card {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 15px;
      border-left: 4px solid #10b981;
    }
    .hotel-name {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .hotel-details {
      margin-top: 10px;
      color: #666;
    }
    .amenities {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 10px;
    }
    .amenity {
      background: #e5f7f1;
      color: #059669;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 12px;
    }
    .pricing-table {
      width: 100%;
      margin-top: 15px;
    }
    .pricing-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .pricing-row.total {
      font-size: 20px;
      font-weight: 600;
      color: #10b981;
      border-top: 2px solid #10b981;
      margin-top: 10px;
      padding-top: 15px;
    }
    .footer {
      text-align: center;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #e5e7eb;
      color: #666;
    }
    .badge {
      background: #fbbf24;
      color: #92400e;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: 600;
      display: inline-block;
      margin-bottom: 10px;
    }
    .contact-info {
      background: #f0fdf4;
      border: 1px solid #10b981;
      padding: 15px;
      border-radius: 8px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <div class="badge">PERSÖNLICHES ANGEBOT</div>
      <h1>Ihre Umrah-Reise 2024</h1>
      <p>Maßgeschneidertes Komplettpaket von UmrahCheck</p>
    </div>

    <!-- Kundendaten -->
    <div class="section">
      <h2 class="section-title">Ihre Daten</h2>
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">Name</div>
          <div class="info-value">${customer.firstName} ${customer.lastName}</div>
        </div>
        <div class="info-item">
          <div class="info-label">E-Mail</div>
          <div class="info-value">${customer.email}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Telefon</div>
          <div class="info-value">${customer.phone}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Reisende</div>
          <div class="info-value">${travel.adults} Erwachsene${travel.children ? `, ${travel.children} Kinder` : ''}</div>
        </div>
      </div>
    </div>

    <!-- Reisedaten -->
    <div class="section">
      <h2 class="section-title">Reisedaten</h2>
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">Hinreise</div>
          <div class="info-value">${new Date(travel.departureDate).toLocaleDateString('de-DE', { 
            day: '2-digit', 
            month: 'long', 
            year: 'numeric' 
          })}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Rückreise</div>
          <div class="info-value">${new Date(travel.returnDate).toLocaleDateString('de-DE', { 
            day: '2-digit', 
            month: 'long', 
            year: 'numeric' 
          })}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Abflughafen</div>
          <div class="info-value">${travel.departureAirport}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Reisedauer</div>
          <div class="info-value">${hotels.mekka.nights + hotels.medina.nights} Nächte</div>
        </div>
      </div>
    </div>

    <!-- Hotels -->
    <div class="section">
      <h2 class="section-title">Ihre Hotels</h2>
      
      <div class="hotel-card">
        <div class="hotel-name">🕌 Mekka: ${hotels.mekka.name}</div>
        <div class="hotel-details">
          <p>📍 ${hotels.mekka.distance} zur Kaaba</p>
          <p>🛏️ ${hotels.mekka.nights} Nächte</p>
          <p>💰 ${hotels.mekka.pricePerNight}€ pro Nacht</p>
          <div class="amenities">
            ${hotels.mekka.amenities.map(a => `<span class="amenity">${a}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="hotel-card">
        <div class="hotel-name">🕌 Medina: ${hotels.medina.name}</div>
        <div class="hotel-details">
          <p>📍 ${hotels.medina.distance} zur Propheten-Moschee</p>
          <p>🛏️ ${hotels.medina.nights} Nächte</p>
          <p>💰 ${hotels.medina.pricePerNight}€ pro Nacht</p>
          <div class="amenities">
            ${hotels.medina.amenities.map(a => `<span class="amenity">${a}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Flüge -->
    <div class="section">
      <h2 class="section-title">Ihre Flüge</h2>
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">Hinflug</div>
          <div class="info-value">
            ${flights.outbound.airline} ${flights.outbound.flightNumber}<br>
            ${flights.outbound.departure} → ${flights.outbound.arrival}
          </div>
        </div>
        <div class="info-item">
          <div class="info-label">Rückflug</div>
          <div class="info-value">
            ${flights.return.airline} ${flights.return.flightNumber}<br>
            ${flights.return.departure} → ${flights.return.arrival}
          </div>
        </div>
      </div>
    </div>

    <!-- Zusatzleistungen -->
    ${extras ? `
    <div class="section">
      <h2 class="section-title">Inkludierte Leistungen</h2>
      <div class="amenities">
        ${extras.visa ? '<span class="amenity">✅ Visa-Service</span>' : ''}
        ${extras.transport ? '<span class="amenity">✅ Flughafentransfer</span>' : ''}
        ${extras.guide ? '<span class="amenity">✅ Deutschsprachiger Guide</span>' : ''}
        ${extras.meals ? '<span class="amenity">✅ Verpflegung</span>' : ''}
      </div>
    </div>
    ` : ''}

    <!-- Preisübersicht -->
    <div class="section">
      <h2 class="section-title">Preisübersicht</h2>
      <div class="pricing-table">
        <div class="pricing-row">
          <span>Hotels (${hotels.mekka.nights + hotels.medina.nights} Nächte)</span>
          <span>${pricing.hotelTotal}€</span>
        </div>
        <div class="pricing-row">
          <span>Flüge (Hin & Zurück)</span>
          <span>${pricing.flightTotal}€</span>
        </div>
        ${pricing.extrasTotal > 0 ? `
        <div class="pricing-row">
          <span>Zusatzleistungen</span>
          <span>${pricing.extrasTotal}€</span>
        </div>
        ` : ''}
        <div class="pricing-row">
          <span>Zwischensumme</span>
          <span>${pricing.subtotal}€</span>
        </div>
        ${pricing.discount > 0 ? `
        <div class="pricing-row">
          <span>Rabatt</span>
          <span style="color: #10b981">-${pricing.discount}€</span>
        </div>
        ` : ''}
        <div class="pricing-row total">
          <span>Gesamtpreis</span>
          <span>${pricing.total}€</span>
        </div>
        <div style="text-align: right; margin-top: 10px; color: #666;">
          <small>Pro Person: ${Math.round(pricing.total / travel.adults)}€</small>
        </div>
      </div>
    </div>

    <!-- Kontakt -->
    <div class="contact-info">
      <h3 style="color: #10b981; margin-bottom: 10px;">Ihr persönlicher Berater</h3>
      <p><strong>Mustafa Ali</strong> - Direkt aus Medina</p>
      <p>✉️ E-Mail: info@umrahcheck.com</p>
      <p style="margin-top: 10px; font-style: italic;">
        "Ich begleite Sie persönlich bei jedem Schritt Ihrer spirituellen Reise."
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p><strong>UmrahCheck</strong> - Ihre Umrah, transparent und halal</p>
      <p>Angebot gültig bis: ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('de-DE')}</p>
      <p style="margin-top: 10px; font-size: 12px;">
        Dieses Angebot ist unverbindlich. Alle Preise inkl. MwSt.<br>
        Änderungen vorbehalten. Stand: ${new Date().toLocaleDateString('de-DE')}
      </p>
    </div>
  </div>
</body>
</html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const packageData: UmrahPackage = await request.json()
    
    // Generate HTML
    const html = generateHTMLTemplate(packageData)
    
    // For now, return HTML (later integrate with Puppeteer/Playwright for real PDF)
    // In production, you would use a service like Vercel Functions + Puppeteer
    
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Disposition': `attachment; filename="umrah-angebot-${packageData.customer.lastName}.html"`,
      },
    })
    
  } catch (error) {
    console.error('PDF Generation Error:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    )
  }
}

// GET Endpoint für Test
export async function GET() {
  // Test-Daten
  const testPackage: UmrahPackage = {
    customer: {
      firstName: 'Ahmed',
      lastName: 'Mustermann',
      email: 'ahmed@example.com',
      phone: '+49 176 12345678',
    },
    travel: {
      departureDate: '2024-04-15',
      returnDate: '2024-04-25',
      departureAirport: 'Frankfurt (FRA)',
      adults: 2,
    },
    hotels: {
      mekka: {
        name: 'Makkah Clock Royal Tower',
        nights: 5,
        pricePerNight: 450,
        distance: '0m',
        amenities: ['Direkter Haram-Blick', 'Premium Zimmer', '24/7 Service'],
      },
      medina: {
        name: 'Dar Al Taqwa Hotel',
        nights: 5,
        pricePerNight: 320,
        distance: '50m',
        amenities: ['Moschee-Blick', 'Frühstück', 'Concierge'],
      },
    },
    flights: {
      outbound: {
        airline: 'Saudia',
        flightNumber: 'SV123',
        departure: 'Frankfurt 10:30',
        arrival: 'Jeddah 18:45',
        price: 650,
      },
      return: {
        airline: 'Saudia',
        flightNumber: 'SV124',
        departure: 'Jeddah 20:15',
        arrival: 'Frankfurt 01:30+1',
        price: 650,
      },
    },
    extras: {
      visa: true,
      transport: true,
      guide: true,
      meals: false,
    },
    pricing: {
      hotelTotal: 3850,
      flightTotal: 1300,
      extrasTotal: 350,
      subtotal: 5500,
      discount: 200,
      total: 5300,
    },
  }
  
  const html = generateHTMLTemplate(testPackage)
  
  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
}