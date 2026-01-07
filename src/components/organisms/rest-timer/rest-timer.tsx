'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { useRestTimer } from '@/hooks/rest-timer/use-rest-timer'
import { Play, Pause, RotateCcw, Volume2 } from 'lucide-react'
import { formatTime } from '@/lib/utils-hiit'

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
    if (seconds === 60) return '60s'
    if (seconds === 90) return '90s'
    if (seconds === 180) return '3min'
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
                className={`${getPhaseColor()} transition-colors`}
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
      <div className="space-y-4">
        {/* Duration Presets */}
        <Card>
          <CardContent className="py-6">
            <div className="space-y-4">
              <Typography variant="large" className="font-semibold text-center">
                Selecciona el tiempo de descanso
              </Typography>
              <div className="grid grid-cols-3 gap-4">
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
                    className="h-16 text-lg font-semibold"
                  >
                    {formatDurationLabel(duration)}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SOUND Toggle */}
        <Card>
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Volume2 className="h-5 w-5" />
                <Typography variant="large" className="font-semibold">
                  Sonido
                </Typography>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={state.soundEnabled}
                onClick={toggleSound}
                disabled={state.currentPhase === 'running'}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  state.soundEnabled ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    state.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
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
