'use client';

import { Check, ChevronDown, Info, X } from 'lucide-react';
import { Fragment, useState } from 'react';

import { cn } from '@/lib/utils';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const plans = [
  {
    title: 'Restringido',
    price: { monthly: '$30', annually: '$300' }, // Ejemplo de descuento anual
    href: '#',
    recommended: false,
  },
  {
    title: 'Héroe',
    price: { monthly: '$45', annually: '$450' },
    href: '#',
    recommended: false,
  },
  {
    title: 'FiToolers',
    price: { monthly: '$90', annually: '$900' },
    href: '#',
    recommended: true,
  },
  {
    title: 'Enérgico',
    price: { monthly: '$60', annually: '$600' }, // Basado en el paquete de 20 clases
    href: '#',
    recommended: false,
  },
];

const featureMatrix = [
  {
    title: 'Beneficios incluidos (Todos los planes)',
    features: [
      {
        title: 'Comodidades básicas',
        info: 'Café gratis, Lockers, Seguridad y Wifi en todas las áreas.',
        inclusions: [
          { plan: 'Restringido', content: <Check className="size-5" /> },
          { plan: 'Héroe', content: <Check className="size-5" /> },
          { plan: 'FiToolers', content: <Check className="size-5" /> },
          { plan: 'Enérgico', content: <Check className="size-5" /> },
        ],
      },
      {
        title: 'Instalaciones',
        info: 'Acceso a duchas, vestidores y estacionamiento privado.',
        inclusions: [
          { plan: 'Restringido', content: <Check className="size-5" /> },
          { plan: 'Héroe', content: <Check className="size-5" /> },
          { plan: 'FiToolers', content: <Check className="size-5" /> },
          { plan: 'Enérgico', content: <Check className="size-5" /> },
        ],
      },
    ],
  },
  {
    title: 'Áreas y disciplinas',
    features: [
      {
        title: 'Musculación y Cardio',
        inclusions: [
          { plan: 'Restringido', content: <Check className="size-5" /> },
          { plan: 'Héroe', content: <Check className="size-5" /> },
          { plan: 'FiToolers', content: <Check className="size-5" /> },
          {
            plan: 'Enérgico',
            content: <X className="size-5 text-muted-foreground" />,
          },
        ],
      },
      // {
      //   title: 'Boxeo',
      //   inclusions: [
      //     { plan: 'Restringido', content: <Check className="size-5" /> },
      //     {
      //       plan: 'Héroe',
      //       content: <X className="size-5 text-muted-foreground" />,
      //     },
      //     { plan: 'FiToolers', content: <Check className="size-5" /> },
      //     {
      //       plan: 'Enérgico',
      //       content: <X className="size-5 text-muted-foreground" />,
      //     },
      //   ],
      // },
      {
        title: 'Crossfit y Funcional',
        inclusions: [
          { plan: 'Restringido', content: <Check className="size-5" /> },
          { plan: 'Héroe', content: <Check className="size-5" /> },
          { plan: 'FiToolers', content: <Check className="size-5" /> },
          {
            plan: 'Enérgico',
            content: <X className="size-5 text-muted-foreground" />,
          },
        ],
      },
      {
        title: 'Ciclismo (Bike/Spinning)',
        info: 'Xtreme Bike y Spinning convencional.',
        inclusions: [
          {
            plan: 'Restringido',
            content: <X className="size-5 text-muted-foreground" />,
          },
          {
            plan: 'Héroe',
            content: <X className="size-5 text-muted-foreground" />,
          },
          { plan: 'FiToolers', content: <Check className="size-5" /> },
          { plan: 'Enérgico', content: <Check className="size-5" /> },
        ],
      },
    ],
  },
  {
    title: 'Condiciones de Acceso',
    features: [
      {
        title: 'Horario Restringido',
        info: 'Horario completo: Lunes a sábados de 6:00am hasta las 9:00pm.',
        inclusions: [
          { plan: 'Restringido', content: 'Solo de 11:30 a 1:30' },
          { plan: 'Héroe', content: 'Horario Completo' },
          { plan: 'FiToolers', content: 'Horario Completo' },
          { plan: 'Enérgico', content: 'Por Clase' },
        ],
      },
      {
        title: 'Entrenador Personalizado',
        inclusions: [
          { plan: 'Restringido', content: <Check className="size-5" /> },
          { plan: 'Héroe', content: <Check className="size-5" /> },
          { plan: 'FiToolers', content: <Check className="size-5" /> },
          { plan: 'Enérgico', content: 'Instructor de Clase' },
        ],
      },
    ],
  },
];

interface PricingProps {
  className?: string;
}

export const PricingSection = ({ className }: PricingProps) => {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('monthly');

  return (
    <section
      className={cn('py-32 w-full md:px-6 lg:px-8', className)}
      id="pricing"
    >
      <div className="container mb-8 lg:mb-0 mx-auto w-full px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-12 md:gap-y-16">
          <div className="col-span-2 flex flex-col lg:col-span-1">
            <h2 className="my-6 text-3xl font-semibold text-pretty md:text-4xl xl:text-5xl">
              Membresías
            </h2>
            <p className="text-muted-foreground lg:text-xl">
              Tenemos lo que necesitas.
            </p>
          </div>
        </div>
        <div className="bg-background lg:sticky lg:top-16">
          <div className="mb-8 pt-8">
            <div className="grid items-end gap-6 border-b border-border pb-8 lg:grid-cols-6">
              <div className="col-span-2">
                <div className="flex h-full flex-col justify-end">
                  <span className="mb-2 text-xs font-medium text-muted-foreground">
                    Facturación
                  </span>
                  <Tabs
                    value={billing}
                    onValueChange={setBilling as (value: string) => void}
                  >
                    <TabsList>
                      <TabsTrigger value="monthly">Mensual</TabsTrigger>
                      <TabsTrigger value="annually">Anual</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>
              {plans.map((plan) => (
                <div
                  key={plan.title}
                  className="rounded-lg border border-border p-3 2xl:p-4"
                >
                  <h3 className="mb-1 text-xl font-medium xl:text-2xl">
                    {plan.title}
                  </h3>
                  <p className="mb-4 text-sm font-medium text-muted-foreground">
                    {plan.price[billing]}
                    <span className="hidden 2xl:inline"> / monthly</span>
                  </p>
                  {/* <Button
                    variant={plan.recommended ? 'default' : 'outline'}
                    className="w-full"
                  >
                    <span className="2xl:hidden">Register</span>
                    <span className="hidden 2xl:inline">
                      Get started for free
                    </span>
                  </Button> */}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-8 lg:space-y-14">
          {featureMatrix.map((category) => (
            <div key={category.title}>
              <h3 className="mb-6 text-lg font-medium lg:mb-3">
                {category.title}
              </h3>
              <div className="space-y-4 lg:space-y-0">
                <TooltipProvider delayDuration={150}>
                  {category.features.map((feature) => (
                    <Fragment key={feature.title}>
                      <dl className="hidden grid-cols-6 gap-6 border-b border-border lg:grid">
                        <dt className="col-span-2 justify-between py-4 pb-4">
                          <Tooltip>
                            <h4 className="group flex min-h-6 items-center gap-x-1 font-medium">
                              {feature.title}{' '}
                              {feature.info && (
                                <TooltipTrigger asChild>
                                  <Info className="ml-2 size-4 cursor-pointer text-muted-foreground group-hover:text-accent-foreground" />
                                </TooltipTrigger>
                              )}
                            </h4>
                            {feature.info && (
                              <TooltipContent>{feature.info}</TooltipContent>
                            )}
                          </Tooltip>
                        </dt>
                        {feature.inclusions.map((inclusion) => (
                          <dd
                            key={inclusion.plan}
                            className="hidden py-4 text-sm text-muted-foreground lg:block"
                          >
                            {inclusion.content}
                          </dd>
                        ))}
                      </dl>
                      <Collapsible
                        className="group lg:hidden"
                        defaultOpen={false}
                      >
                        <dl
                          key={feature.title}
                          className="border-b border-border"
                        >
                          <CollapsibleTrigger className="w-full">
                            <dt className="flex items-center justify-between pb-4">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <h4 className="group flex items-center gap-x-1 text-sm font-medium md:text-base">
                                    {feature.title}
                                    {feature.info && (
                                      <Info className="ml-2 size-4 cursor-pointer text-muted-foreground group-hover:text-accent-foreground" />
                                    )}
                                  </h4>
                                </TooltipTrigger>
                                {feature.info && (
                                  <TooltipContent>
                                    {feature.info}
                                  </TooltipContent>
                                )}
                              </Tooltip>

                              <ChevronDown className='size-5 transition-transform group-data-[state="open"]:rotate-180' />
                            </dt>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            {feature.inclusions.map((inclusion) => (
                              <dd
                                key={inclusion.plan}
                                className="flex items-center border-b border-border py-3 text-xs text-muted-foreground last:border-b-0 md:py-3.5"
                              >
                                <div className="w-1/2 md:w-1/4">
                                  {inclusion.plan}
                                </div>
                                {inclusion.content}
                              </dd>
                            ))}
                          </CollapsibleContent>
                        </dl>
                      </Collapsible>
                    </Fragment>
                  ))}
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 hidden text-xs text-muted-foreground md:block">
          * Sujeto a cambios y condiciones
        </p>
      </div>
    </section>
  );
};
