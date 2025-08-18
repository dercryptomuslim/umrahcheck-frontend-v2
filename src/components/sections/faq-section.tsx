"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, MessageCircle, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const faqs = [
  {
    question: "Was ist der Umrah KI Berater?",
    answer: "Der Umrah KI Berater ist eine intelligente Plattform, die deine Umrah-Reisewünsche analysiert und dir in wenigen Minuten die besten verfügbaren Angebote präsentiert. Unsere KI vergleicht hunderte von Hotels und Flügen, um dir transparent die optimalen Optionen für dein Budget und deine Bedürfnisse zu zeigen."
  },
  {
    question: "Wie viel kostet der Service?",
    answer: "Die Analyse und der Vergleich durch unseren KI-Berater sind völlig kostenlos. Du zahlst nur, wenn du dich entscheidest, eines der empfohlenen Angebote zu buchen. Es gibt keine versteckten Kosten oder Gebühren für die Beratung."
  },
  {
    question: "Wie genau ist die KI-Planung?",
    answer: "Unsere KI nutzt aktuelle Daten von über 500 verifizierten Anbietern und berücksichtigt Faktoren wie Entfernung zur Kaaba, Hotelbewertungen, Preise und deine persönlichen Präferenzen. Die Empfehlungen werden kontinuierlich aktualisiert und haben eine Genauigkeitsrate von über 95%."
  },
  {
    question: "Kann ich meine Angaben später ändern?",
    answer: "Ja, du kannst deine Präferenzen jederzeit anpassen. Unsere KI erstellt dann neue, aktualisierte Empfehlungen basierend auf deinen geänderten Wünschen. Flexibilität ist wichtig für die perfekte Umrah-Planung."
  },
  {
    question: "Ist es sicher, über eure Empfehlungen zu buchen?",
    answer: "Absolut. Wir arbeiten nur mit verifizierten, lizenzierten Reiseanbietern zusammen. Alle Buchungen sind durch Verbraucherschutz abgesichert und du erhältst alle notwendigen Buchungsbestätigungen und Dokumente. Deine Zahlung wird über sichere, verschlüsselte Verbindungen abgewickelt."
  }
]

export function FAQSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-emerald-600" />
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Häufig gestellte{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Fragen
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Hier findest du Antworten auf die wichtigsten Fragen rund um unseren Umrah KI-Berater
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 data-[state=open]:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline group">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 group-data-[state=open]:bg-emerald-500 transition-colors">
                        <span className="text-sm font-bold text-emerald-600 group-data-[state=open]:text-white">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-12">
                    <p className="text-gray-600 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-200">
            <div className="flex justify-center mb-4">
              <MessageCircle className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Brauchst du weitere Hilfe?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Jetzt Kontakt aufnehmen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                asChild
              >
                <Link href="mailto:info@umrahcheck.com">
                  <Mail className="w-4 h-4 mr-2" />
                  E-Mail senden
                </Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                asChild
              >
                <Link href="https://wa.me/491234567890">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}