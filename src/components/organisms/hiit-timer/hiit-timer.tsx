'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { useHIITTimer } from '@/hooks/hiit-timer/use-hiit-timer'
import {
  Minus,
  Plus,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Clock,
  Timer,
} from 'lucide-react'
import { formatTime } from '@/lib/utils-hiit'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

export const HIITTimer = () => {
  const { state, startTimer, pauseTimer, resetTimer, updateSettings } =
    useHIITTimer()

  const handleDecrease = (
    setting: 'workDuration' | 'restDuration' | 'rounds'
  ) => {
    const minValues = { workDuration: 5, restDuration: 5, rounds: 1 }
    const currentValue = state[setting]
    if (currentValue > minValues[setting]) {
      updateSettings({ [setting]: currentValue - 1 })
    }
  }

  const handleIncrease = (
    setting: 'workDuration' | 'restDuration' | 'rounds'
  ) => {
    const maxValues = { workDuration: 300, restDuration: 300, rounds: 20 }
    const currentValue = state[setting]
    if (currentValue < maxValues[setting]) {
      updateSettings({ [setting]: currentValue + 1 })
    }
  }

  const handleSliderChange = (
    setting: 'workDuration' | 'restDuration' | 'rounds',
    value: number
  ) => {
    updateSettings({ [setting]: value })
  }

  const getPhaseLabel = () => {
    switch (state.currentPhase) {
      case 'initial-delay':
        return 'Preparación'
      case 'work':
        return 'TRABAJO'
      case 'rest':
        return 'DESCANSO'
      case 'completed':
        return 'COMPLETADO'
      default:
        return 'LISTO'
    }
  }

  const getPhaseColor = () => {
    switch (state.currentPhase) {
      case 'work':
        return 'text-primary'
      case 'rest':
        return 'text-blue-500'
      case 'completed':
        return 'text-green-500'
      default:
        return 'text-muted-foreground'
    }
  }

  return (
    <div className="space-y-6">
      {/* Timer Display */}
      <Card>
        <CardContent className="py-6">
          {state.isRunning || state.currentPhase !== 'idle' ? (
            <div className="text-center space-y-4">
              <Typography
                variant="h2"
                className={`${getPhaseColor()} transition-colors`}
              >
                {getPhaseLabel()}
              </Typography>
              {state.currentPhase !== 'completed' && (
                <Typography variant="h1" className="font-mono">
                  {formatTime(state.timeRemaining)}
                </Typography>
              )}
              {state.currentPhase === 'work' ||
              state.currentPhase === 'rest' ? (
                <Typography variant="large" className="text-muted-foreground">
                  Ronda {state.currentRound} de {state.rounds}
                </Typography>
              ) : null}
              <div className="flex gap-4 justify-center pt-4">
                {state.isRunning ? (
                  <Button onClick={pauseTimer} variant="outline" size="lg">
                    <Pause className="h-5 w-5 mr-2" />
                    Pausar
                  </Button>
                ) : state.currentPhase !== 'idle' ? (
                  <Button onClick={startTimer} variant="default" size="lg">
                    <Play className="h-5 w-5 mr-2" />
                    Continuar
                  </Button>
                ) : null}
                <Button onClick={resetTimer} variant="outline" size="lg">
                  <RotateCcw className="h-5 w-5 mr-2" />
                  Reiniciar
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <Timer className="h-12 w-12 mx-auto mb-4" />
              <Typography variant="large">
                Para comenzar tu entrenamiento HIIT, configura los tiempos y
                presiona comenzar
              </Typography>
              <Typography variant="muted" className="text-xs mt-2">
                Ajusta el tiempo de trabajo, descanso y número de rondas
              </Typography>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Settings */}
      <div
        className={cn(
          'space-y-4',
          state.isRunning && 'opacity-50 pointer-events-none'
        )}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          {/* WORK */}
          <Card>
            <CardContent>
              <div className="space-y-4">
                <Typography variant="large" className="font-semibold">
                  WORK
                </Typography>
                <div className="flex items-center justify-between gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDecrease('workDuration')}
                    disabled={state.workDuration <= 5 || state.isRunning}
                    className="rounded-full"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Typography variant="h2" className="flex-1 text-center">
                    {state.workDuration}s
                  </Typography>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleIncrease('workDuration')}
                    disabled={state.workDuration >= 300 || state.isRunning}
                    className="rounded-full"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="px-2">
                  <Slider
                    min={5}
                    max={300}
                    step={5}
                    value={[state.workDuration]}
                    onValueChange={values =>
                      handleSliderChange('workDuration', values[0])
                    }
                    disabled={state.isRunning}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* REST */}
          <Card>
            <CardContent>
              <div className="space-y-4">
                <Typography variant="large" className="font-semibold">
                  REST
                </Typography>
                <div className="flex items-center justify-between gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDecrease('restDuration')}
                    disabled={state.restDuration <= 5 || state.isRunning}
                    className="rounded-full"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Typography variant="h2" className="flex-1 text-center">
                    {state.restDuration}s
                  </Typography>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleIncrease('restDuration')}
                    disabled={state.restDuration >= 300 || state.isRunning}
                    className="rounded-full"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="px-2">
                  <Slider
                    min={5}
                    max={300}
                    step={5}
                    value={[state.restDuration]}
                    onValueChange={values =>
                      handleSliderChange('restDuration', values[0])
                    }
                    disabled={state.isRunning}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ROUNDS */}
          <Card>
            <CardContent>
              <div className="space-y-4">
                <Typography variant="large" className="font-semibold">
                  ROUNDS
                </Typography>
                <div className="flex items-center justify-between gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDecrease('rounds')}
                    disabled={state.rounds <= 1 || state.isRunning}
                    className="rounded-full"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Typography variant="h2" className="flex-1 text-center">
                    {state.rounds}
                  </Typography>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleIncrease('rounds')}
                    disabled={state.rounds >= 20 || state.isRunning}
                    className="rounded-full"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="px-2">
                  <Slider
                    min={1}
                    max={20}
                    step={1}
                    value={[state.rounds]}
                    onValueChange={values =>
                      handleSliderChange('rounds', values[0])
                    }
                    disabled={state.isRunning}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SOUND Toggle and INITIAL DELAY Toggle */}
          <Card>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Volume2 className="h-5 w-5" />
                  <Typography variant="large" className="font-semibold">
                    Sonido
                  </Typography>
                </div>
                <Switch
                  checked={state.soundEnabled}
                  onCheckedChange={checked =>
                    updateSettings({ soundEnabled: checked })
                  }
                  disabled={state.isRunning}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5" />
                  <Typography variant="large" className="font-semibold">
                    {`Retraso inicial (5s)`}
                  </Typography>
                </div>
                <Switch
                  checked={state.initialDelayEnabled}
                  onCheckedChange={checked =>
                    updateSettings({ initialDelayEnabled: checked })
                  }
                  disabled={state.isRunning}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* START Button */}
        <Button
          onClick={startTimer}
          disabled={state.isRunning}
          className="w-full h-14 text-lg font-semibold"
          size="lg"
        >
          <Play className="h-5 w-5 mr-2" />
          Comenzar
        </Button>
      </div>
    </div>
  )
}
