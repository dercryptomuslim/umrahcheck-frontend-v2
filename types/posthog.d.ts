declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, any>) => void
      identify: (userId: string, properties?: Record<string, any>) => void
      reset: () => void
      __loaded: boolean
    }
  }
}

export {}