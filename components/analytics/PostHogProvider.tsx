'use client'

import { useEffect, Suspense } from 'react'
import { initPostHog, PostHogPageView } from './PostHog'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initPostHog()
  }, [])

  return (
    <>
      {children}
      <Suspense>
        <PostHogPageView />
      </Suspense>
    </>
  )
}