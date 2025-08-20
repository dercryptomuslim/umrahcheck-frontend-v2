"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  User,
  Users
} from 'lucide-react'

export default function UmrahAnfragePage() {
  const [formData, setFormData] = useState({
    // Persönliche Daten
    vorname: '',
    nachname: '',
    email: '',
    whatsapp: '',
    
    // Personenanzahl
    anzahlPersonen: '',
    
    // Reise Details
    abflughafen: '',
    zielflughafen: '',
    abflugdatum: '',
    flexibilitaet: '',
    naechte_mekka: '',
    naechte_medina: '',
    
    // Gruppengröße/Budget
    gruppengröße: '',
    budget: '',
    
    // Zusätzliche Informationen
    staatsangehoerigkeit: '',
    anmerkungen: '',
    datenschutz: false
  })

  const [currentStep, setCurrentStep] = useState(0) // 0 = Start, 1-4 = Schritte
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1)
  }

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1)
  }

  const handleSubmit = async () => {
    console.log('Submitting form data:', formData)
    
    // Store lead data in localStorage for KI-Analyse page
    const leadData = {
      name: `${formData.vorname} ${formData.nachname}`,
      email: formData.email,
      whatsapp: formData.whatsapp,
      budget: formData.budget,
      persons: formData.gruppengröße,
      destination: formData.zielflughafen,
      departure: formData.abflughafen,
      date: formData.abflugdatum,
      nights_mecca: formData.naechte_mekka,
      nights_medina: formData.naechte_medina,
      nationality: formData.staatsangehoerigkeit,
      notes: formData.anmerkungen
    }
    
    localStorage.setItem('umrahcheck_lead', JSON.stringify(leadData))
    
    // Redirect directly to KI analysis page (which will then redirect to upsell)
    window.location.href = '/ki-analyse'
  }

  // Form submission now redirects directly to /ki-analyse, no need for thank you page

  return (
    <div className="min-h-screen relative" style={{
      background: 'linear-gradient(135deg, #F3E8C7 0%, #E8D5A3 100%)',
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' width='200' height='200' fill='none' stroke='%23D4AF37' stroke-width='1' opacity='0.1'%3e%3cpath d='M40 40 L60 20 L80 40 L100 20 L120 40 L140 20 L160 40 L180 20 L200 40 L180 60 L200 80 L180 100 L200 120 L180 140 L200 160 L180 180 L160 160 L140 180 L120 160 L100 180 L80 160 L60 180 L40 160 L20 180 L0 160 L20 140 L0 120 L20 100 L0 80 L20 60 L0 40 L20 20 L40 40'/%3e%3c/svg%3e")`
    }}>
      <div className="container mx-auto px-4 py-8">
        
        {/* Progress Bar - nur bei Schritten anzeigen */}
        {currentStep > 0 && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-4">
              {[1, 2, 3, 4].map((step) => (
                <React.Fragment key={step}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    step < currentStep 
                      ? 'bg-amber-500 text-white' 
                      : step === currentStep 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-white text-gray-400 border-2 border-gray-300'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`h-1 w-8 ${
                      step < currentStep ? 'bg-amber-500' : 'bg-gray-300'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Willkommensseite */}
        {currentStep === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Assalamu alaikum & herzlich willkommen beim Umrah KI Berater!
              </h1>
              <div className="text-lg text-gray-700 space-y-2">
                <p><strong>Starte jetzt deine kostenlose & unverbindliche Umrah-Analyse in wenigen Schritten.</strong></p>
                <p className="text-base">Was erwartet dich?</p>
                <div className="text-left max-w-md mx-auto space-y-1 text-base">
                  <p>— Persönliche Empfehlungen</p>
                  <p>— Anbieter-Preisvergleich</p>
                  <p>— 100 % kostenlos & anonym</p>
                </div>
              </div>
            </div>
            <Button
              onClick={nextStep}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-full"
            >
              Jetzt starten
            </Button>
          </motion.div>
        )}

        {/* Schritt 1: Persönliche Daten */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Persönliche Daten</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vorname</label>
                    <input
                      type="text"
                      value={formData.vorname}
                      onChange={(e) => handleInputChange('vorname', e.target.value)}
                      placeholder="z.B. Mohammad"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nachname</label>
                    <input
                      type="text"
                      value={formData.nachname}
                      onChange={(e) => handleInputChange('nachname', e.target.value)}
                      placeholder="z.B. Ali"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="z.B. dein.name@email.de"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Whatsappnummer</label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder="z.B. +49 151 12345678"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button 
                  onClick={prevStep}
                  variant="outline"
                  className="px-8 py-3 border-gray-900 text-gray-900 hover:bg-gray-50"
                >
                  Zurück
                </Button>
                <Button 
                  onClick={nextStep}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
                  disabled={!formData.vorname || !formData.nachname || !formData.email}
                >
                  Weiter
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Schritt 2: Wie viele Personen reisen? */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Wie viele Personen reisen?</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: '1-2', label: '1-2 Personen', icon: User },
                  { value: '7-12', label: '7-12 Personen', icon: Users },
                  { value: '13-20', label: '13-20 Personen', icon: Users },
                  { value: '21+', label: '21+ (Großgruppe)', icon: Users }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleInputChange('anzahlPersonen', option.value)}
                    className={`p-6 rounded-lg border-2 transition-all flex flex-col items-center gap-3 ${
                      formData.anzahlPersonen === option.value
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <option.icon className="w-8 h-8 text-gray-900" />
                    <span className="font-medium text-gray-900">{option.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex justify-between">
                <Button 
                  onClick={prevStep}
                  variant="outline"
                  className="px-8 py-3 border-gray-900 text-gray-900 hover:bg-gray-50"
                >
                  Zurück
                </Button>
                <Button 
                  onClick={nextStep}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
                  disabled={!formData.anzahlPersonen}
                >
                  Weiter
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Schritt 3: Reisedaten */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Reisedaten</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Abflugort (Stadt)</label>
                  <input
                    type="text"
                    value={formData.abflughafen}
                    onChange={(e) => handleInputChange('abflughafen', e.target.value)}
                    placeholder="z.B. Frankfurt"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zielflughafen (z.B. JED, MEDI)</label>
                  <input
                    type="text"
                    value={formData.zielflughafen}
                    onChange={(e) => handleInputChange('zielflughafen', e.target.value)}
                    placeholder="z.B. JED"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Geplantes Abflugdatum</label>
                  <input
                    type="text"
                    value={formData.abflugdatum}
                    onChange={(e) => handleInputChange('abflugdatum', e.target.value)}
                    placeholder="z.B. 15.10.2025"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Flexibilität +/- Tage</label>
                  <input
                    type="text"
                    value={formData.flexibilitaet}
                    onChange={(e) => handleInputChange('flexibilitaet', e.target.value)}
                    placeholder="z.B. 3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Wie viele Nächte in Mekka?</label>
                  <input
                    type="text"
                    value={formData.naechte_mekka}
                    onChange={(e) => handleInputChange('naechte_mekka', e.target.value)}
                    placeholder="z.B. 5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Wie viele Nächte in Medina?</label>
                  <input
                    type="text"
                    value={formData.naechte_medina}
                    onChange={(e) => handleInputChange('naechte_medina', e.target.value)}
                    placeholder="z.B. 4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button 
                  onClick={prevStep}
                  variant="outline"
                  className="px-8 py-3 border-gray-900 text-gray-900 hover:bg-gray-50"
                >
                  Zurück
                </Button>
                <Button 
                  onClick={nextStep}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
                >
                  Weiter
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Schritt 4: Gruppengröße/Budget + Zusätzliche Informationen */}
        {currentStep === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Gruppengröße/Budget</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Wie viele Personen reisen?</label>
                  <input
                    type="text"
                    value={formData.gruppengröße}
                    onChange={(e) => handleInputChange('gruppengröße', e.target.value)}
                    placeholder="Anzahl der Person"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Welches Budget steht pro Person zur Verfügung ?</label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    placeholder="Ihr geplantes Budget pro Person (in Euro):"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Zusätzliche Informationen (letzte Seite)</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Staatsangehörigkeit</label>
                  <input
                    type="text"
                    value={formData.staatsangehoerigkeit}
                    onChange={(e) => handleInputChange('staatsangehoerigkeit', e.target.value)}
                    placeholder="Staatsangehörigkeit"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Anmerkungen/Sonderwünsche</label>
                  <textarea
                    value={formData.anmerkungen}
                    onChange={(e) => handleInputChange('anmerkungen', e.target.value)}
                    placeholder="Hier besondere Wünsche oder Anmerkungen eintragen (optional)"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Datenschutz</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Wir verwenden deine persönlichen Daten ausschließlich, um deine Umrah-Anfrage zu bearbeiten und dich ggf. zu 
                    Angeboten oder relevanten Inhalten per E-Mail oder Telefon/WhatsApp zu kontaktieren. Deine Daten werden vertraulich 
                    behandelt und nicht an Dritte weitergeben, außer für die Angebotsstellung oder Buchung notwendig ist. 
                    Absenden bestätigst du, dass du unsere Datenschutzerklärung gelesen und akzeptiert hast.
                  </p>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={formData.datenschutz}
                      onChange={(e) => handleInputChange('datenschutz', e.target.checked)}
                      className="w-5 h-5 text-gray-900 rounded focus:ring-gray-500 mt-0.5"
                    />
                    <span className="text-sm text-gray-700">
                      Ich akzeptiere die Datenschutzbestimmungen
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button 
                  onClick={prevStep}
                  variant="outline"
                  className="px-8 py-3 border-gray-900 text-gray-900 hover:bg-gray-50"
                >
                  Zurück
                </Button>
                <Button 
                  onClick={handleSubmit}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
                  disabled={!formData.datenschutz}
                >
                  Absenden
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}