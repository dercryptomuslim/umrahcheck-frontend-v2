import { HeroSection } from '@/components/sections/hero-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { ProblemSolutionSection } from '@/components/sections/problem-solution-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { FAQSection } from '@/components/sections/faq-section'
import { FinalCTASection } from '@/components/sections/final-cta-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  )
}
