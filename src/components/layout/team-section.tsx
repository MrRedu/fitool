import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { MEMBERS_TEAM_SECTION } from '@/lib/constants'
import { SectionContainer } from './section-container'

export function TeamSection() {
  return (
    <SectionContainer as="section" id="team">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Conoce a nuestro equipo
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground text-pretty">
            Somos un grupo diverso de entrenadores especializados en diferentes
            áreas para ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 sm:-ml-6">
            {MEMBERS_TEAM_SECTION.map((member, index) => (
              <CarouselItem
                key={index}
                className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <div
                  className={cn(
                    'flex flex-col gap-4 transition-all duration-500 ease-in-out',
                    // Staggered effect: even items shift down, odd items stay up
                    index % 2 === 0 ? 'pt-0 sm:pt-16' : 'pt-0'
                  )}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded grayscale hover:grayscale-0 transition-all duration-500">
                    <Image
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="relative left-0 translate-y-0 h-12 w-12 rounded-full border-2 border-border" />
            <CarouselNext className="relative right-0 translate-y-0 h-12 w-12 rounded-full border-2 border-border" />
          </div>
        </Carousel>
      </SectionContainer>
  )
}
