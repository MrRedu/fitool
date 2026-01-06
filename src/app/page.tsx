import { CALCULATORS, TOOLS } from '@/lib/constants'
import {
  HeroSection,
  FAQSection,
  PricingSection,
  TeamSection,
  StepsSection,
  ContactSection,
} from '@/components/layout'
import { Header } from '@/components/layout/header'
import { CatalogGrid } from '@/components/molecules/catalog-grid'
import { Suspense } from 'react'

export default function HomePage() {
  return (
    <>
      <Suspense>
        <HeroSection />
      </Suspense>
      <Header />
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-32 space-y-10 w-full">
        <CatalogGrid title="Herramientas" items={TOOLS} />
        <CatalogGrid title="Calculadoras" items={CALCULATORS} />
      </section>
      <StepsSection />
      <PricingSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
