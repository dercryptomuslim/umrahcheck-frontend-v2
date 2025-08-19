// 🚀 Vercel Pro Performance Monitoring & Optimization
import { useEffect, useState } from 'react';

// Web Vitals reporting for Vercel Analytics
export function reportWebVitals(metric: any) {
  if (metric.label === 'web-vital') {
    // Send to Vercel Analytics automatically
    console.log(metric);
  }
  
  // Custom thresholds for UmrahCheck
  const thresholds = {
    FCP: 1800, // First Contentful Paint
    LCP: 2500, // Largest Contentful Paint  
    CLS: 0.1,  // Cumulative Layout Shift
    FID: 100,  // First Input Delay
    TTFB: 600, // Time to First Byte
  };
  
  // Alert if metrics exceed thresholds
  if (metric.name in thresholds && metric.value > thresholds[metric.name as keyof typeof thresholds]) {
    console.warn(`Performance warning: ${metric.name} = ${metric.value}ms (threshold: ${thresholds[metric.name as keyof typeof thresholds]}ms)`);
  }
}

// Optimize images with blur placeholder
export const getOptimizedImageProps = (src: string, alt: string) => {
  return {
    src,
    alt,
    loading: 'lazy' as const,
    placeholder: 'blur' as const,
    quality: 85,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  };
};

// Resource hints for critical resources
export const useResourceHints = () => {
  useEffect(() => {
    // Preconnect to critical origins
    const origins = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://vitals.vercel-analytics.com',
    ];
    
    origins.forEach(origin => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = origin;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
    
    // DNS prefetch for API
    const apiLink = document.createElement('link');
    apiLink.rel = 'dns-prefetch';
    apiLink.href = process.env.NEXT_PUBLIC_API_URL || '';
    document.head.appendChild(apiLink);
  }, []);
};

// Intersection Observer for lazy loading
export const useLazyLoad = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );
    
    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [ref, callback]);
};

// Debounce for search inputs
export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
};

// Service Worker for offline support
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(
        registration => console.log('SW registered:', registration),
        error => console.log('SW registration failed:', error)
      );
    });
  }
};

// React hooks already imported at top