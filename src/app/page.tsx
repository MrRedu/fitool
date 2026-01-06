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

export default function HomePage() {
  return (
    <>
      <HeroSection />
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
