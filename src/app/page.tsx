import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { Typography } from '@/components/ui/typography';
import { CALCULATORS, TOOLS } from '@/lib/constants';
import {
  HeroSection,
  FAQSection,
  PricingSection,
  TeamSection,
  StepsSection,
  ContactSection,
} from '@/components/layout';
import { Header } from '@/components/layout/header';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Header />
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-32 space-y-10 w-full">
        <div className="space-y-4">
          <Typography variant="h2" className="border-none">
            Herramientas
          </Typography>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOOLS.map((tool) => (
              <li key={tool.href}>
                <Link href={tool.href}>
                  <Skeleton className="h-50" />
                  <Typography variant="large">{tool.name}</Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <Typography variant="h2" className="border-none">
            Calculadoras
          </Typography>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CALCULATORS.map((calculator) => (
              <li key={calculator.href}>
                <Link href={calculator.href} className="space-y-2">
                  <img
                    src="/calculators/calculator-harris-benedict.png"
                    alt={calculator.name}
                    className="rounded-md"
                  />
                  <Typography variant="muted">{calculator.name}</Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <StepsSection />
      <PricingSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
