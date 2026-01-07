'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { useRestTimer } from '@/hooks/rest-timer/use-rest-timer'
import { Play, Pause, RotateCcw, Volume2, CircleAlert } from 'lucide-react'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@/components/ui/select'
import { formatTime } from '@/lib/utils-hiit'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

export const RestTimer = () => {
  const {
    state,
    presetDurations,
    selectDuration,
    startTimer,
    pauseTimer,
    resetTimer,
    toggleSound,
  } = useRestTimer()

  const getPhaseLabel = () => {
    switch (state.currentPhase) {
      case 'running':
        return 'DESCANSO'
      case 'paused':
        return 'PAUSADO'
      case 'completed':
        return 'COMPLETADO'
      default:
        return 'LISTO'
    }
  }

  const getPhaseColor = () => {
    switch (state.currentPhase) {
      case 'running':
        return 'text-primary'
      case 'paused':
        return 'text-yellow-500'
      case 'completed':
        return 'text-green-500'
      default:
        return 'text-muted-foreground'
    }
  }

  const formatDurationLabel = (seconds: number): string => {
    if (seconds < 60) return `${seconds}s`
    const mins = Math.floor(seconds / 60)
    const rem = seconds % 60
    if (rem === 0) return `${mins}min`
    if (rem === 30) return `${mins}min 30s`
    if (mins >= 1) return `${mins}min ${rem}s`
    return `${seconds}s`
  }

  return (
    <div className="space-y-6">
      {/* Timer Display */}
      {state.currentPhase !== 'idle' ? (
        <Card>
          <CardContent className="py-12">
            <div className="text-center space-y-4">
              <Typography
                variant="h2"
                className={cn(`transition-colors`, {
                  [getPhaseColor()]: true,
                })}
              >
                {getPhaseLabel()}
              </Typography>
              {state.currentPhase !== 'completed' && (
                <Typography variant="h1" className="font-mono">
                  {formatTime(state.timeRemaining)}
                </Typography>
              )}
              <div className="flex gap-4 justify-center pt-4">
                {state.currentPhase === 'running' ? (
                  <Button onClick={pauseTimer} variant="outline" size="lg">
                    <Pause className="h-5 w-5 mr-2" />
                    Pausar
                  </Button>
                ) : state.currentPhase === 'paused' ? (
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
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="py-12">
            <div className="text-center space-y-4">
              <Typography variant="h2" className="text-muted-foreground">
                {getPhaseLabel()}
              </Typography>
              <Typography variant="h1" className="font-mono">
                {formatTime(state.timeRemaining)}
              </Typography>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Settings */}
      <div
        className={cn(
          'space-y-4',
          state.currentPhase === 'running' && 'opacity-50 pointer-events-none'
        )}
      >
        {/* Duration Presets */}
        <Card>
          <CardContent className="py-6">
            <div className="space-y-4">
              <Typography variant="large" className="font-semibold text-center">
                Selecciona el tiempo de descanso
              </Typography>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {presetDurations.map(duration => (
                  <Button
                    key={duration}
                    variant={
                      state.selectedDuration === duration
                        ? 'default'
                        : 'outline'
                    }
                    onClick={() => selectDuration(duration)}
                    disabled={state.currentPhase === 'running'}
                    size="lg"
                  >
                    {formatDurationLabel(duration)}
                  </Button>
                ))}

                <Select
                  value={String(state.selectedDuration)}
                  onValueChange={val => selectDuration(Number(val))}
                  disabled={state.currentPhase === 'running'}
                >
                  <SelectTrigger
                    size="lg"
                    className="w-full font-semibold text-center [&>span]:mx-auto"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Personalizado</SelectLabel>
                      {Array.from(
                        { length: 300 / 5 },
                        (_, i) => 5 * (i + 1)
                      ).map(sec => (
                        <SelectItem key={sec} value={String(sec)}>
                          {formatDurationLabel(sec)}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Alert>
                <Volume2 />
                <AlertTitle>Sonido</AlertTitle>
                <AlertDescription className="flex items-baseline justify-between">
                  <Typography>{`Sonido de notificación al finalizar el descanso.`}</Typography>
                  <Switch
                    checked={state.soundEnabled}
                    onCheckedChange={toggleSound}
                    disabled={state.currentPhase === 'running'}
                  />
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* START Button */}
        <Button
          onClick={startTimer}
          disabled={state.currentPhase === 'running'}
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
