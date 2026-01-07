import { CatalogGrid } from '@/components/molecules/catalog-grid'
import { TOOLS } from '@/lib/constants'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Herramientas',
  description: 'Herramientas de entrenamiento y nutrición.',
}

export default function ToolsPage() {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-32 space-y-10 w-full">
      <CatalogGrid title="Herramientas" items={TOOLS} />
    </section>
  )
}
