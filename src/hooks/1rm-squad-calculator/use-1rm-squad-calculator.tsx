import { useState } from 'react'
import { calculate1RMSquad } from '@/lib/utils-1rm'
import {
  form1RMSquadCalculatorSchema,
  type Form1RMSquadCalculatorValues,
} from '@/schemas/1rm-squad-form-calculator.schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export interface Use1RMSquadCalculator {
  oneRM: number | undefined
  onSubmit: (values: Form1RMSquadCalculatorValues) => void
  oneRMSquadCalculatorForm: ReturnType<
    typeof useForm<Form1RMSquadCalculatorValues>
  >
}

export function use1RMSquadCalculator(): Use1RMSquadCalculator {
  const [oneRM, setOneRM] = useState<number>()

  const form = useForm<Form1RMSquadCalculatorValues>({
    resolver: zodResolver(form1RMSquadCalculatorSchema),
    defaultValues: {
      weight: '',
      reps: '',
      weight2: '',
      reps2: '',
    },
  })

  const onSubmit = (values: Form1RMSquadCalculatorValues) => {
    const result = calculate1RMSquad(values)
    setOneRM(result)
  }

  return {
    oneRM,
    onSubmit,
    oneRMSquadCalculatorForm: form,
  }
}
