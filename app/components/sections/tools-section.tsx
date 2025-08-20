"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Package, 
  UtensilsCrossed,
  Download,
  ExternalLink,
  Check,
  Globe,
  Users,
  Clock,
  ArrowRight,
  Smartphone,
  Heart,
  CheckCircle,
  Zap,
  MapPin,
  Star,
  Shield,
  QrCode
} from 'lucide-react';

const visaEligibleCountries = {
  europe: ['Deutschland', 'Österreich', 'Schweiz', 'Frankreich', 'UK', 'Italien', 'Spanien', 'Niederlande'],
  northAmerica: ['USA', 'Kanada'],
  asia: ['Türkei', 'Malaysia', 'Japan', 'China', 'Singapur'],
  africa: ['Südafrika', 'Mauritius'],
  oceania: ['Australien', 'Neuseeland']
};

const packingItems = [
  { category: 'Kleidung', items: ['Ihram (2 Sets)', 'Bequeme Outfits', 'Rutschfeste Schuhe', 'Kopfbedeckung'] },
  { category: 'Reise-Essentials', items: ['Universal-Adapter', 'Powerbank', 'Medikamente', 'Reisepass-Kopien'] },
  { category: 'Spirituelle Items', items: ['Qur\'an (klein)', 'Duabuch', 'Tasbih', 'Gebetsteppich (tragbar)'] },
  { category: 'Familie & Kinder', items: ['Snacks', 'Kinderwagen', 'Erste-Hilfe-Set', 'Entertainment']}
];

const restaurants = [
  { 
    name: 'Al Baik', 
    location: 'Mekka', 
    cuisine: 'Fast Food', 
    specialty: 'Berühmtes Hähnchen',
    distance: '5 Min zum Haram',
    rating: 4.8
  },
  { 
    name: 'Hyderabadi House', 
    location: 'Medina', 
    cuisine: 'Indisch', 
    specialty: 'Biryani & Curry',
    distance: '10 Min zur Nabawi',
    rating: 4.6
  },
  { 
    name: 'Mama Noura', 
    location: 'Mekka & Medina', 
    cuisine: 'Arabisch', 
    specialty: 'Shawarma & Grills',
    distance: '3 Min zum Haram',
    rating: 4.7
  },
  { 
    name: 'Hardee\'s', 
    location: 'Beide Städte', 
    cuisine: 'International', 
    specialty: 'Burger & Snacks',
    distance: 'Mehrere Standorte',
    rating: 4.4
  }
];

export function ToolsSection() {
  const [activeTab, setActiveTab] = useState<'visa' | 'packliste' | 'restaurants'>('visa');
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleCheck = (item: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(item)) {
      newChecked.delete(item);
    } else {
      newChecked.add(item);
    }
    setCheckedItems(newChecked);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6">
              🛠️ Tools & Guides für deine{' '}
              <span className="bg-gradient-to-r from-primary-gold to-gold-hover bg-clip-text text-transparent">
                Umrah
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Wir möchten, dass du ohne Stress und mit voller Klarheit deine Umrah-Reise planst. 
              Deshalb findest du bei uns praktische Tools & Guides, die dich auf jedem Schritt begleiten.
            </p>
            
            {/* Quick Access Pills */}
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-primary-gold/10 text-primary-gold border border-primary-gold/30 px-4 py-2">
                <FileText className="w-4 h-4 mr-2" />
                Saudi eVisa Guide
              </Badge>
              <Badge className="bg-blue-50 text-blue-600 border border-blue-200 px-4 py-2">
                <Package className="w-4 h-4 mr-2" />
                Digitale Packliste
              </Badge>
              <Badge className="bg-green-50 text-green-600 border border-green-200 px-4 py-2">
                <UtensilsCrossed className="w-4 h-4 mr-2" />
                Restaurant Guide
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center gap-2">
              {[
                { id: 'visa', label: 'Visa & Einreise', icon: FileText },
                { id: 'packliste', label: 'Packliste', icon: Package },
                { id: 'restaurants', label: 'Restaurant Guide', icon: UtensilsCrossed }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary-gold text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 bg-gradient-to-br from-cream/30 to-sand/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Visa Tab */}
            {activeTab === 'visa' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <h2 className="heading-2 mb-6">🛂 Saudi eVisa – Dein Schlüssel nach Mekka & Medina</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Text Content */}
                  <div className="space-y-8">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-dark-blue mb-4 flex items-center gap-2">
                        <Globe className="w-6 h-6 text-primary-gold" />
                        Was ist das Saudi eVisa?
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Saudi-Arabien hat seine Türen für die Welt geöffnet und bietet das eVisa an – 
                        ein einfaches, schnelles und komplett digitales Touristenvisum.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary-gold/10 rounded-lg p-3">
                          <div className="font-semibold text-primary-gold">Gültigkeit</div>
                          <div className="text-sm text-gray-700">1 Jahr</div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="font-semibold text-blue-600">Aufenthalt</div>
                          <div className="text-sm text-gray-700">90 Tage max</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="font-semibold text-green-600">Einreise</div>
                          <div className="text-sm text-gray-700">Mehrfach</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3">
                          <div className="font-semibold text-purple-600">Umrah</div>
                          <div className="text-sm text-gray-700">Erlaubt ✅</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-dark-blue mb-4 flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        Schnelle Online-Beantragung
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Das eVisa kann in wenigen Minuten über das offizielle Portal beantragt werden.
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {[
                          'Reisepass (mind. 6 Monate gültig)',
                          'Digitales Passfoto',
                          'Online-Zahlungsmethode'
                        ].map((requirement, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700">{requirement}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full cta-gold" asChild>
                        <a href="https://visa.visitsaudi.com/" target="_blank" rel="noopener noreferrer">
                          Zum offiziellen eVisa-Portal
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Countries List */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-dark-blue mb-6">🌎 Berechtigte Länder (Auswahl)</h3>
                    
                    {Object.entries(visaEligibleCountries).map(([region, countries]) => (
                      <div key={region} className="mb-6">
                        <h4 className="font-semibold text-primary-gold mb-2 capitalize">
                          {region === 'northAmerica' ? 'Nordamerika' : 
                           region === 'europe' ? 'Europa' :
                           region === 'asia' ? 'Asien' :
                           region === 'africa' ? 'Afrika' : 'Ozeanien'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {countries.map((country) => (
                            <span key={country} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <div className="bg-blue-50 rounded-lg p-4 mt-6">
                      <p className="text-sm text-blue-700">
                        <strong>Falls dein Land nicht dabei ist:</strong> Kontaktiere die nächste saudische Botschaft.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Packliste Tab */}
            {activeTab === 'packliste' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <h2 className="heading-2 mb-6">🎒 Packliste für die Umrah</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Nie wieder etwas vergessen! Unsere digitale Packliste zeigt dir genau, was du einpacken solltest.
                  </p>
                  
                  <Button className="cta-gold mb-8">
                    <Download className="w-4 h-4 mr-2" />
                    Packliste als PDF herunterladen
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {packingItems.map((category, categoryIndex) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                    >
                      <h3 className="text-xl font-bold text-dark-blue mb-4 flex items-center gap-2">
                        {categoryIndex === 0 && <Package className="w-6 h-6 text-primary-gold" />}
                        {categoryIndex === 1 && <Smartphone className="w-6 h-6 text-blue-600" />}
                        {categoryIndex === 2 && <Heart className="w-6 h-6 text-green-600" />}
                        {categoryIndex === 3 && <Users className="w-6 h-6 text-purple-600" />}
                        {category.category}
                      </h3>
                      
                      <div className="space-y-3">
                        {category.items.map((item) => (
                          <div
                            key={item}
                            className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              checkedItems.has(item)
                                ? 'border-primary-gold bg-primary-gold/10'
                                : 'border-gray-200 hover:border-primary-gold/50'
                            }`}
                            onClick={() => toggleCheck(item)}
                          >
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                              checkedItems.has(item)
                                ? 'border-primary-gold bg-primary-gold'
                                : 'border-gray-300'
                            }`}>
                              {checkedItems.has(item) && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span className={`${checkedItems.has(item) ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-primary-gold/10 rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-dark-blue mb-4">📲 Dein Begleiter in der Tasche</h3>
                  <p className="text-gray-700 mb-6">
                    Alle Tools sind mobilfreundlich und jederzeit verfügbar. 
                    Ob Visa-Check, Packliste oder Restaurant-Guide – du hast alles dabei.
                  </p>
                  
                  <Button 
                    className="cta-gold"
                    onClick={() => {
                      // Generate and download PDF
                      const packingList = packingItems.map(category => 
                        `${category.category}:\n${category.items.map(item => `• ${item}`).join('\n')}`
                      ).join('\n\n');
                      
                      const pdfContent = `
UMRAH PACKLISTE 2024/2025 - UmrahCheck.de
=========================================

${packingList}

---
Generiert von UmrahCheck.de - Deine Umrah-Experten
Weitere Tools unter: https://umrahcheck.de/tools
                      `;
                      
                      const blob = new Blob([pdfContent], { type: 'text/plain' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'umrah-packliste-2025.txt';
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                      URL.revokeObjectURL(url);
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Packliste als Datei herunterladen
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Restaurant Tab */}
            {activeTab === 'restaurants' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <h2 className="heading-2 mb-6">🍴 Restaurant-Guide Mekka & Medina</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Essen ist ein wichtiger Teil deiner Reise – und wir haben an dich gedacht. 
                    Geheimtipps direkt aus Medina! 🌟
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {restaurants.map((restaurant, index) => (
                    <motion.div
                      key={restaurant.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-dark-blue mb-1">{restaurant.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4" />
                            {restaurant.location}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-semibold">{restaurant.rating}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <UtensilsCrossed className="w-4 h-4 text-primary-gold" />
                          <span className="text-sm"><strong>Küche:</strong> {restaurant.cuisine}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-red-500" />
                          <span className="text-sm"><strong>Spezialität:</strong> {restaurant.specialty}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span className="text-sm">{restaurant.distance}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 text-green-700">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">100% Halal zertifiziert</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-bold text-dark-blue mb-4">🌟 Insider-Tipps aus Medina</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div>
                      <h4 className="font-semibold text-primary-gold mb-2">Nach dem Gebet</h4>
                      <p className="text-sm text-gray-700">Al Baik und Mama Noura sind perfekt für schnelle Snacks zwischen den Gebeten.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Für Familien</h4>
                      <p className="text-sm text-gray-700">Hyderabadi House bietet große Portionen und kinderfreundliche Atmosphäre.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Budget-Tipp</h4>
                      <p className="text-sm text-gray-700">Street Food nahe den Moscheen ist günstiger und authentisch halal.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                👉 Starte jetzt deine Umrah mit UmrahCheck
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Angebote, Planung & Guides – alles an einem Ort
              </p>
              
              <Button
                size="xl"
                className="cta-gold-large hover-lift"
                asChild
              >
                <a href="/lp">
                  <Zap className="w-5 h-5" />
                  Jetzt kostenlos starten
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}