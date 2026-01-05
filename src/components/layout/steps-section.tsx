import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { STEPS_SECTION } from '@/lib/constants'

export const StepsSection = () => {
  return (
    <div className="mx-auto container w-full px-4 md:px-6 lg:px-8 py-32">
      <div className="mb-12 space-y-4 text-left">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Tu camino al cambio físico
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Conoce las etapas de tu transformación. Desde el primer día hasta
          convertirte en tu mejor versión, te acompañamos en cada paso.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border bg-card p-6 md:p-10 max-w-7xl ">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h2 className="text-2xl font-semibold text-foreground">
            Guía de progresión con entrenadores expertos
          </h2>
          <Button className="hidden h-11 px-8 md:flex" variant="default">
            Empieza hoy mismo
          </Button>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line (Mobile) */}
          <div className="absolute bottom-0 left-[7px] top-0 w-0.5 bg-foreground md:hidden" />

          {/* Horizontal Line (Desktop) */}
          <div className="absolute left-0 top-[7px] hidden h-0.5 w-full bg-foreground md:block" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {STEPS_SECTION.map(step => (
              <div key={step.id} className="relative pl-8 md:pl-0">
                {/* Connector Dot */}
                <div className="absolute left-0 top-[3px] h-4 w-4 rounded-full border-4 border-background bg-foreground md:left-0 md:top-0" />

                <div className="mt-6 space-y-4">
                  {/* Badge */}
                  <div className="inline-flex items-stretch overflow-hidden rounded-md border text-sm font-medium">
                    <span className="bg-muted px-2.5 py-1 text-muted-foreground">
                      {step.number}
                    </span>
                    <span className="bg-background px-3 py-1 text-foreground">
                      {step.title}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold leading-tight">
                      {step.heading}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <Progress
                        value={step.progress}
                        className="h-1.5 flex-1"
                      />
                      <span className="text-xs font-medium text-muted-foreground">
                        {step.progress}%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {step.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Button */}
        <div className="mt-10 md:hidden">
          <Button className="w-full h-12 text-base" variant="default">
            Empieza hoy mismo
          </Button>
        </div>
      </div>
    </div>
  )
}
