import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { type OneRMSquadFormCalculatorProps } from './1rm-squad-form-calculator.model'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircleIcon } from 'lucide-react'
import { Typography } from '@/components/ui/typography'

export const OneRMSquadFormCalculator = ({
  onSubmit,
  form,
}: OneRMSquadFormCalculatorProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid sm:grid-cols-2 items-start gap-x-4 space-y-6">
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Peso utilizado en el ejercicio
                  <Badge>kg</Badge>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Introduce el peso en kg"
                    type="number"
                    step="1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reps"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Repeticiones al fallo realizadas
                  <Badge className="opacity-0 w-0">reps</Badge>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Introduce las repeticiones"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Alert>
          <AlertCircleIcon />
          <AlertTitle>Opcional</AlertTitle>
          <AlertDescription className="py-2">
            <Typography variant="muted" className="text-pretty">
              Indica tu rendimiento con{' '}
              <span className="underline">otro peso</span> y{' '}
              <span className="underline">
                un número de repeticiones diferente
              </span>{' '}
              en el mismo ejercicio para que el cálculo sea más preciso
            </Typography>
            <div className="grid sm:grid-cols-2 mt-4 w-full items-start gap-x-4 space-y-6 ">
              <FormField
                control={form.control}
                name="weight2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Peso utilizado en el ejercicio
                      <Badge>kg</Badge>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Introduce el peso en kg"
                        type="number"
                        step="0.5"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reps2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Repeticiones al fallo realizadas
                      <Badge className="opacity-0 w-0">reps</Badge>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Introduce las repeticiones"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </AlertDescription>
        </Alert>

        <Button type="submit" className="w-full">
          Calcular 1RM
        </Button>
      </form>
    </Form>
  )
}
