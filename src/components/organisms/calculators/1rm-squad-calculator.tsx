'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { OneRMSquadFormCalculator } from '../forms/1rm-squad/1rm-squad-form-calculator'
import { use1RMSquadCalculator } from '@/hooks/1rm-squad-calculator/use-1rm-squad-calculator'
import { Typography } from '@/components/ui/typography'
import { BarChart3 } from 'lucide-react'

export const OneRMSquadCalculator = () => {
  const { oneRM, onSubmit, oneRMSquadCalculatorForm } = use1RMSquadCalculator()

  return (
    <div className="space-y-16">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {`Calculadora de 1RM Sentadilla`}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <OneRMSquadFormCalculator
            onSubmit={onSubmit}
            form={oneRMSquadCalculatorForm}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="py-6">
          {oneRM !== undefined ? (
            <div className="text-center space-y-2">
              <Typography variant="large" className="text-muted-foreground">
                Tu 1RM aproximado es:
              </Typography>
              <Typography variant="h3" className="text-primary">
                {Math.round(oneRM)} kg
              </Typography>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <BarChart3 className="h-12 w-12 mx-auto mb-4" />
              <Typography variant="large">
                Para descubrir tu 1RM, completa el formulario
              </Typography>
              <Typography variant="muted" className="text-xs mt-2">
                Introduce el peso y las repeticiones que realizaste al fallo
              </Typography>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
