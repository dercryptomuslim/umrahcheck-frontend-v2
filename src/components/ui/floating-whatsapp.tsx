"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Clock } from 'lucide-react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
  showAfter?: number; // milliseconds
}

export function FloatingWhatsApp({ 
  phoneNumber = "966560630947",
  message = "Assalamu alaikum! Ich interessiere mich für eine Umrah-Beratung.",
  position = 'bottom-right',
  showAfter = 3000 
}: FloatingWhatsAppProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show button after specified time
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, showAfter);

    // Auto-expand briefly to grab attention
    const expandTimer = setTimeout(() => {
      if (!hasInteracted) {
        setIsExpanded(true);
        // Auto-collapse after 3 seconds
        setTimeout(() => setIsExpanded(false), 3000);
      }
    }, showAfter + 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(expandTimer);
    };
  }, [showAfter, hasInteracted]);

  const handleWhatsAppClick = () => {
    setHasInteracted(true);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleExpand = () => {
    setHasInteracted(true);
    setIsExpanded(!isExpanded);
  };

  const positionClasses = position === 'bottom-right' 
    ? 'bottom-6 right-6' 
    : 'bottom-6 left-6';

  if (!isVisible) return null;

  return (
    <div className={`fixed ${positionClasses} z-50 flex flex-col items-end gap-2`}>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl border border-green-200 p-4 max-w-sm mr-2 relative"
          >
            {/* Close button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3 text-gray-600" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-gold to-gold-hover rounded-full flex items-center justify-center">
                <span className="text-lg">🕌</span>
              </div>
              <div>
                <h3 className="font-semibold text-dark-blue">UmrahCheck</h3>
                <div className="flex items-center gap-1 text-green-600 text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Online aus Medina
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mb-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                Assalamu alaikum! 👋<br />
                <strong>Mustafa hier aus Medina.</strong><br />
                Hast du Fragen zu deiner Umrah? Ich helfe dir gerne weiter!
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2 mb-4 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-primary-gold" />
                <span>Antwort meist in wenigen Minuten</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-green-600" />
                <span>Kostenlose Beratung</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Chat starten
            </button>

            {/* Trust indicator */}
            <p className="text-xs text-gray-500 text-center mt-2">
              2.500+ zufriedene Pilger beraten
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={isExpanded ? handleWhatsAppClick : handleExpand}
        className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group"
      >
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        
        {/* WhatsApp icon */}
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
        
        {/* Notification badge */}
        {!hasInteracted && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        )}

        {/* Tooltip on hover (when collapsed) */}
        {!isExpanded && (
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Kostenlose Umrah-Beratung
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        )}
      </motion.button>
    </div>
  );
}