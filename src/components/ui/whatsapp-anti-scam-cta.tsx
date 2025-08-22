"use client";

import React, { useState } from 'react';
import { MessageCircle, AlertTriangle, TrendingDown, Users, Shield } from 'lucide-react';

interface WhatsAppAntiScamCTAProps {
  variant?: 'inline' | 'hero' | 'sticky';
  phoneNumber?: string;
}

export function WhatsAppAntiScamCTA({ 
  variant = 'inline',
  phoneNumber = "966560630947"
}: WhatsAppAntiScamCTAProps) {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);

  // Scenario-based messages
  const scenarios = [
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Wurde mir zu viel berechnet?",
      description: "Organisation verlangt 2.200€",
      message: "🚨 Salam! Eine Organisation verlangt 2.200€ für meine Umrah. Ist das Abzocke? Was kostet dieselbe Reise wirklich?",
      savings: "Spare ~700€"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Familie (4 Personen)",
      description: "Angebot für 8.800€ bekommen",
      message: "Assalamu alaikum! Wir sind 4 Personen und sollen 8.800€ für Umrah zahlen. Stimmt es, dass es nur 4.800€ kosten sollte?",
      savings: "Spare 4.000€"
    },
    {
      icon: <TrendingDown className="w-5 h-5" />,
      title: "Günstigere Alternative?",
      description: "Suche transparente Preise",
      message: "Salam! Ich möchte nicht abgezockt werden. Könnt ihr mir die ECHTEN Preise für Umrah zeigen ohne versteckte Gebühren?",
      savings: "Spare 1.000€+"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Preisvergleich gewünscht",
      description: "Mehrere Angebote vergleichen",
      message: "Wa alaikum salam! Ich habe verschiedene Angebote zwischen 1.800-2.500€. Was ist ein fairer Preis für Umrah?",
      savings: "Spare bis zu 1.000€"
    }
  ];

  const handleWhatsAppClick = (scenario: typeof scenarios[0]) => {
    const encodedMessage = encodeURIComponent(scenario.message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Track interaction
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('whatsapp_anti_scam_scenario_click', {
        scenario_title: scenario.title,
        expected_savings: scenario.savings,
        variant: variant,
        timestamp: new Date().toISOString()
      });
    }
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'hero') {
    return (
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Wirst du abgezockt?</h3>
            <p className="text-sm text-gray-600">Finde es in 30 Sekunden heraus</p>
          </div>
        </div>

        <div className="space-y-3">
          {scenarios.map((scenario, index) => (
            <button
              key={index}
              onClick={() => handleWhatsAppClick(scenario)}
              className="w-full bg-white hover:bg-green-50 border border-gray-200 hover:border-green-500 rounded-xl p-4 transition-all text-left group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-gray-400 group-hover:text-green-600 transition-colors">
                    {scenario.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{scenario.title}</p>
                    <p className="text-sm text-gray-600">{scenario.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-green-600">{scenario.savings}</span>
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            💬 Direkter WhatsApp-Kontakt mit Mustafa aus Medina
          </p>
          <p className="text-xs text-green-600 font-semibold mt-1">
            Antwort meist in wenigen Minuten
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'sticky') {
    return (
      <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-6 md:w-96 bg-white rounded-xl shadow-2xl border border-red-200 p-4 z-40">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" />
          <p className="font-bold text-sm text-gray-900">
            Zahlst du zu viel für Umrah?
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {scenarios.slice(0, 2).map((scenario, index) => (
            <button
              key={index}
              onClick={() => handleWhatsAppClick(scenario)}
              className="bg-green-500 hover:bg-green-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1"
            >
              <MessageCircle className="w-3 h-3" />
              {scenario.savings}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Default inline variant
  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <h4 className="font-bold text-gray-900">Preisvergleich starten</h4>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Viele zahlen 1.000€+ zu viel. Lass dich nicht abzocken!
          </p>
          <div className="flex flex-wrap gap-2">
            {scenarios.map((scenario, index) => (
              <button
                key={index}
                onClick={() => handleWhatsAppClick(scenario)}
                className="bg-white hover:bg-green-50 border border-gray-200 hover:border-green-500 text-xs font-medium py-1.5 px-3 rounded-lg transition-all"
              >
                {scenario.savings}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => handleWhatsAppClick(scenarios[0])}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2 shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp-Beratung
        </button>
      </div>
    </div>
  );
}