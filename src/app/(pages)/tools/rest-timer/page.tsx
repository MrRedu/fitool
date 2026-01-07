import { type Metadata } from 'next'
import { RestTimer } from '@/components/organisms/rest-timer/rest-timer'
import { Typography } from '@/components/ui/typography'
import { Clock } from 'lucide-react'
import { TOOLS } from '@/lib/constants'
import { CatalogGrid } from '@/components/molecules/catalog-grid'

export const metadata: Metadata = {
  title: 'Cronómetro de descanso',
  description:
    'Temporizador de descanso personalizable con alerta sonora al finalizar.',
}

export default function RestTimerPage() {
  return (
    <article className="">
      <header className="bg-[url('/cover-page.webp')] bg-cover bg-center bg-no-repeat text-white pt-40 pb-20">
        <div className="flex items-center justify-center gap-3">
          <Clock className="h-8 w-8 hidden md:block" />
          <Typography variant="h1">Cronómetro de Descanso</Typography>
        </div>
        <Typography className="text-center mt-2!">
          Temporizador simple para tus tiempos de descanso entre ejercicios
        </Typography>
      </header>

      <div className="max-w-4xl m-auto lg:p-16 p-8 space-y-16">
        <section className="text-center space-y-4">
          <Typography variant="large" className="text-balance">
            Selecciona el tiempo de <strong>descanso que necesites</strong> y el
            cronómetro te avisará cuando termine con una{' '}
            <strong>alerta sonora</strong>.
          </Typography>
        </section>
        <RestTimer />
      </div>

      {/* TODO: Cambiar el <article/> por el <SectionComponent/> */}
      <footer className="max-w-6xl m-auto lg:p-16 p-8 space-y-16">
        <CatalogGrid title="Otras herramientas relacionadas" items={TOOLS} />
      </footer>
    </article>
  )
}
