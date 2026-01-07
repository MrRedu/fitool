import z from 'zod'

export const form1RMSquadCalculatorSchema = z
  .object({
    weight: z
      .string()
      .min(1, 'El peso es requerido')
      .refine(
        val => {
          const num = parseFloat(val)
          return !isNaN(num) && num > 0
        },
        {
          message: 'El peso debe ser un número mayor a 0',
        }
      ),
    reps: z
      .string()
      .min(1, 'Las repeticiones son requeridas')
      .refine(
        val => {
          const num = parseInt(val, 10)
          return !isNaN(num) && num >= 1 && num <= 30
        },
        {
          message: 'Las repeticiones deben estar entre 1 y 30',
        }
      ),
    // Campos opcionales para mayor precisión
    weight2: z
      .string()
      .optional()
      .refine(
        val => {
          if (!val || val === '') return true
          const num = parseFloat(val)
          return !isNaN(num) && num > 0
        },
        {
          message: 'El peso debe ser un número mayor a 0',
        }
      ),
    reps2: z
      .string()
      .optional()
      .refine(
        val => {
          if (!val || val === '') return true
          const num = parseInt(val, 10)
          return !isNaN(num) && num >= 1 && num <= 30
        },
        {
          message: 'Las repeticiones deben estar entre 1 y 30',
        }
      ),
  })
  .refine(
    data => {
      // Si se proporciona weight2, también debe proporcionarse reps2 y viceversa
      const hasWeight2 = data.weight2 && data.weight2 !== ''
      const hasReps2 = data.reps2 && data.reps2 !== ''
      return !hasWeight2 || hasReps2
    },
    {
      message:
        'Debes rellenar todos los campos opcionales para poder hacer el cálculo',
      path: ['reps2'],
    }
  )
  .refine(
    data => {
      const hasWeight2 = data.weight2 && data.weight2 !== ''
      const hasReps2 = data.reps2 && data.reps2 !== ''
      return !hasReps2 || hasWeight2
    },
    {
      message:
        'Debes rellenar todos los campos opcionales para poder hacer el cálculo',
      path: ['weight2'],
    }
  )

export type Form1RMSquadCalculatorValues = z.infer<
  typeof form1RMSquadCalculatorSchema
>
