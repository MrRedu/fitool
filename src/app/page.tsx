import { CALCULATORS, TOOLS } from '@/lib/constants'
import {
  HeroSection,
  FAQSection,
  PricingSection,
  TeamSection,
  StepsSection,
  ContactSection,
  SectionContainer,
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
      <SectionContainer as="section" className="space-y-10">
        <CatalogGrid title="Herramientas" items={TOOLS} />
        <CatalogGrid title="Calculadoras" items={CALCULATORS} />
      </SectionContainer>
      <StepsSection />
      <PricingSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
