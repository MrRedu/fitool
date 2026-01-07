import { type Metadata } from 'next'
import { HIITTimer } from '@/components/organisms/hiit-timer/hiit-timer'
import { Typography } from '@/components/ui/typography'
import { Timer } from 'lucide-react'
import { TOOLS } from '@/lib/constants'
import { CatalogGrid } from '@/components/molecules/catalog-grid'

export const metadata: Metadata = {
  title: 'FiTool - Simple HIIT Timer',
  description:
    'Timer simple para entrenamientos HIIT con configuración de trabajo, descanso y rondas.',
}

export default function HIITTimerPage() {
  return (
    <article className="">
      <header className="bg-[url('/cover-page.webp')] bg-cover bg-center bg-no-repeat text-white pt-40 pb-20">
        <div className="flex items-center justify-center gap-3">
          <Timer className="h-8 w-8" />
          <Typography variant="h1">Cronómetro HIIT / Tabata</Typography>
        </div>
        <Typography className="text-center mt-2!">
          Cronómetro simple para tus entrenamientos de alta intensidad
        </Typography>
      </header>

      <div className="max-w-4xl m-auto lg:p-16 p-8 space-y-16">
        <section className="text-center space-y-4">
          <Typography variant="large">
            Configura tu entrenamiento HIIT con tiempos personalizados de{' '}
            <strong>trabajo</strong>, <strong>descanso</strong> y{' '}
            <strong>rondas</strong>. El timer te guiará durante todo el
            entrenamiento.
          </Typography>
        </section>
        <HIITTimer />
      </div>

      {/* TODO: Cambiar el <article/> por el <SectionComponent/> */}
      <footer className="max-w-6xl m-auto lg:p-16 p-8 space-y-16">
        <CatalogGrid title="Otras herramientas relacionadas" items={TOOLS} />
      </footer>
    </article>
  )
}
