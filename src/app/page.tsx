import Link from 'next/link';
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
import Image from 'next/image';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <>
      <Suspense>
        <HeroSection />
      </Suspense>
      <Header />
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-32 space-y-10 w-full">
        <div className="space-y-4">
          <Typography variant="h2" className="border-none">
            Herramientas
          </Typography>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOOLS.map(({ href, name, imgSrc }) => (
              <li key={href}>
                <Link href={href} className="space-y-2">
                  <Image
                    width={300}
                    height={300}
                    src={imgSrc}
                    alt={name}
                    className="rounded-md border h-40 w-full object-cover"
                  />
                  <Typography variant="muted">{name}</Typography>
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
            {CALCULATORS.map(({ href, name, imgSrc }) => (
              <li key={href}>
                <Link href={href} className="space-y-2">
                  <Image
                    width={300}
                    height={300}
                    src={imgSrc}
                    alt={name}
                    className="rounded-md border h-40 w-full object-cover"
                  />
                  <Typography variant="muted">{name}</Typography>
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
