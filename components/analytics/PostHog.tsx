'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'

export function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      
      posthog.capture('$pageview', {
        $current_url: url,
        page_title: document.title,
      })
    }
  }, [pathname, searchParams])

  return null
}

// Initialize PostHog
export function initPostHog() {
  if (typeof window !== 'undefined' && !posthog.__loaded) {
    posthog.init('phc_L1muSvxfDeFWvTUFD4HsFdP7pHTHQJYTJBSreP8BEp0', {
      api_host: 'https://eu.i.posthog.com',
      person_profiles: 'identified_only',
      autocapture: true,
      capture_pageview: false, // We'll capture manually
      capture_pageleave: true,
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      },
      // Session recordings are enabled by default
      disable_session_recording: false,
      // Heatmaps are included with recordings
    })
  }
}

// Utility functions for custom events
export const trackUmrahAnalysisStart = () => {
  if (typeof window !== 'undefined') {
    posthog.capture('umrah_analysis_started', {
      source: 'ki-analyse_page',
      category: 'conversion',
    })
  }
}

export const trackBlogArticleRead = (articleTitle: string, articleSlug: string) => {
  if (typeof window !== 'undefined') {
    posthog.capture('blog_article_read', {
      article_title: articleTitle,
      article_slug: articleSlug,
      category: 'content',
    })
  }
}

export const trackContactClick = (method: 'email_hallo' | 'email_info' | 'whatsapp') => {
  if (typeof window !== 'undefined') {
    posthog.capture('contact_clicked', {
      contact_method: method,
      category: 'lead_generation',
    })
  }
}

export const trackCTAClick = (cta_text: string, page: string) => {
  if (typeof window !== 'undefined') {
    posthog.capture('cta_clicked', {
      cta_text,
      page,
      category: 'conversion',
    })
  }
}

export const trackSearchQuery = (query: string, results_count: number) => {
  if (typeof window !== 'undefined') {
    posthog.capture('search_performed', {
      query,
      results_count,
      category: 'engagement',
    })
  }
}

// Identify users (call when user provides email/contact info)
export const identifyUser = (email: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    posthog.identify(email, {
      email,
      ...properties,
    })
  }
}

export default posthog