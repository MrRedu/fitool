import { type Metadata } from 'next'
import { ExerciseList } from '@/components/organisms/exercise-list'
import { RoutineCreatorForm } from '@/components/organisms/forms/routine-creator/routine-creator-form'
import { Typography } from '@/components/ui/typography'
import { Dumbbell } from 'lucide-react'
import { CatalogGrid } from '@/components/molecules/catalog-grid'
import { TOOLS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Creador de rutinas',
  description:
    'Herramienta para crear rutinas de entrenamiento personalizadas de manera sencilla.',
}

export default function RoutineCreatorPage() {
  return (
    <article className="">
      <header className="bg-[url('/cover-page.webp')] bg-cover bg-center bg-no-repeat text-white pt-40 pb-20">
        <div className="flex items-center justify-center gap-3">
          <Dumbbell className="h-8 w-8 hidden md:block" />
          <Typography variant="h1">Creador de rutinas</Typography>
        </div>
        <Typography className="text-center mt-2!">
          Crea tu rutina perfecta y compártela fácilmente
        </Typography>
      </header>

      <div className="max-w-4xl m-auto lg:p-16 p-8 space-y-16">
        <section className="text-center space-y-4">
          <Typography variant="large">
            Crea tu programa de entrenamiento y compártelo con un solo clic.
          </Typography>
        </section>
        <RoutineCreatorForm />
        <ExerciseList />
      </div>

      {/* TODO: Cambiar el <article/> por el <SectionComponent/> */}
      <footer className="max-w-6xl m-auto lg:p-16 p-8 space-y-16">
        <CatalogGrid title="Otras herramientas relacionadas" items={TOOLS} />
      </footer>
    </article>
  )
}
