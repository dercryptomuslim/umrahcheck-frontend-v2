'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-ENKSTZNYMF'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  )
}

// Utility functions for tracking events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
    })
  }
}

// Common tracking events for UmrahCheck
export const trackUmrahAnalysis = () => {
  trackEvent('umrah_analysis_start', {
    event_category: 'engagement',
    event_label: 'ki-analyse',
  })
}

export const trackBlogRead = (articleTitle: string) => {
  trackEvent('blog_read', {
    event_category: 'content',
    event_label: articleTitle,
  })
}

export const trackContactClick = (contactMethod: string) => {
  trackEvent('contact_click', {
    event_category: 'contact',
    event_label: contactMethod,
  })
}

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'set' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}