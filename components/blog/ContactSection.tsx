'use client'

export default function ContactSection() {
  const trackContact = (method: string) => {
    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.capture('contact_clicked', { 
        method, 
        location: 'blog_page' 
      })
    }
  }

  return (
    <section className="mt-12 bg-gradient-to-r from-[--primary-gold]/10 to-[--secondary-gold]/10 rounded-xl p-8 text-center border border-[--primary-gold]/20">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        💬 Fragen oder Feedback?
      </h3>
      <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
        Hast du Fragen zu deiner Umrah-Planung oder Feedback zu unseren Artikeln? 
        Ich helfe gerne persönlich weiter!
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a 
          href="mailto:info@umrahcheck.de"
          onClick={() => trackContact('email_info')}
          className="flex items-center gap-3 px-6 py-3 bg-[--primary-gold] text-white font-semibold rounded-lg hover:bg-[--secondary-gold] transition-colors"
        >
          📨 info@umrahcheck.de
        </a>
        <a 
          href="https://wa.me/966560630947"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContact('whatsapp')}
          className="flex items-center gap-3 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
        >
          📱 WhatsApp
        </a>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        Antwort meist innerhalb von 24 Stunden • Kostenlose Beratung
      </p>
    </section>
  )
}