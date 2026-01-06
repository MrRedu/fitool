'use client'

import { ChevronDown, Info } from 'lucide-react'
import { Fragment, useState } from 'react'

import { cn } from '@/lib/utils'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  FEATURE_MATRIX_PRICING_SECTION,
  PLANS_PRICING_SECTION,
} from '@/lib/constants'
import { SectionContainer } from './section-container'

export const PricingSection = () => {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('monthly')

  return (
    <SectionContainer as="section" id="pricing">
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
            {PLANS_PRICING_SECTION.map(plan => (
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
        {FEATURE_MATRIX_PRICING_SECTION.map(category => (
          <div key={category.title}>
            <h3 className="mb-6 text-lg font-medium lg:mb-3">
              {category.title}
            </h3>
            <div className="space-y-4 lg:space-y-0">
              <TooltipProvider delayDuration={150}>
                {category.features.map(feature => (
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
                      {feature.inclusions.map(inclusion => (
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
                                <TooltipContent>{feature.info}</TooltipContent>
                              )}
                            </Tooltip>

                            <ChevronDown className='size-5 transition-transform group-data-[state="open"]:rotate-180' />
                          </dt>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          {feature.inclusions.map(inclusion => (
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
    </SectionContainer>
  )
}
