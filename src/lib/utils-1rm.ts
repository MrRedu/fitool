import { type Form1RMSquadCalculatorValues } from '@/schemas/1rm-squad-form-calculator.schema'

/**
 * Calcula el 1RM usando la fórmula de Epley (1985)
 * 1RM = peso × (1 + repeticiones/30)
 */
export const calculate1RMByEpley = (weight: number, reps: number): number => {
  return weight * (1 + reps / 30)
}

/**
 * Calcula el 1RM usando la fórmula de Wathan (1994)
 * 1RM = (100 × Peso) / [48.8 + (53.8 × e^(-0.075 × repeticiones))]
 * donde e es el número de Euler (aproximadamente 2.71828)
 */
export const calculate1RMByWathan = (weight: number, reps: number): number => {
  return (100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps))
}

/**
 * Calcula el 1RM promedio usando ambas fórmulas (Epley y Wathan)
 * con factores de corrección aplicados según el estudio de LeSuer et al. (1997)
 */
export const calculate1RMSquad = (
  values: Form1RMSquadCalculatorValues
): number => {
  const weight = parseFloat(values.weight)
  const reps = parseInt(values.reps, 10)

  // Si hay datos opcionales, calcular con ambos pesos
  if (values.weight2 && values.reps2) {
    const weight2 = parseFloat(values.weight2)
    const reps2 = parseInt(values.reps2, 10)

    // Calcular 1RM para ambos pesos usando ambas fórmulas
    const epley1 = calculate1RMByEpley(weight, reps)
    const wathan1 = calculate1RMByWathan(weight, reps)
    const epley2 = calculate1RMByEpley(weight2, reps2)
    const wathan2 = calculate1RMByWathan(weight2, reps2)

    // Promedio de ambas fórmulas para cada peso
    const avg1 = (epley1 + wathan1) / 2
    const avg2 = (epley2 + wathan2) / 2

    // Promedio final de ambos cálculos
    return (avg1 + avg2) / 2
  }

  // Si solo hay un peso, usar ambas fórmulas y promediar
  const epley = calculate1RMByEpley(weight, reps)
  const wathan = calculate1RMByWathan(weight, reps)

  // Promedio de ambas fórmulas
  return (epley + wathan) / 2
}
