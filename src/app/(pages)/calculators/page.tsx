import { Grid } from '@/components/molecules/grid'
import { CALCULATORS } from '@/lib/constants'

export default function CalculatorsPage() {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-32 space-y-10 w-full">
      <Grid title="Calculadoras" items={CALCULATORS} />
    </section>
  )
}
