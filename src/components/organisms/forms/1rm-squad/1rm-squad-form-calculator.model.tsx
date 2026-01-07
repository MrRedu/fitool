import { type Use1RMSquadCalculator } from '@/hooks/1rm-squad-calculator/use-1rm-squad-calculator'

export interface OneRMSquadFormCalculatorProps {
  onSubmit: Use1RMSquadCalculator['onSubmit']
  form: Use1RMSquadCalculator['oneRMSquadCalculatorForm']
}
