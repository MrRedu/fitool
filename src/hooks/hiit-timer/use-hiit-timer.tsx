import { useState, useEffect, useRef, useCallback } from 'react'

export type TimerPhase =
  | 'idle'
  | 'initial-delay'
  | 'work'
  | 'rest'
  | 'completed'

export interface HIITTimerState {
  workDuration: number // en segundos
  restDuration: number // en segundos
  rounds: number
  soundEnabled: boolean
  initialDelayEnabled: boolean
  currentPhase: TimerPhase
  currentRound: number
  timeRemaining: number // en segundos
  isRunning: boolean
}

const INITIAL_STATE: HIITTimerState = {
  workDuration: 30,
  restDuration: 30,
  rounds: 4,
  soundEnabled: true,
  initialDelayEnabled: false,
  currentPhase: 'idle',
  currentRound: 0,
  timeRemaining: 0,
  isRunning: false,
}

export function useHIITTimer() {
  const [state, setState] = useState<HIITTimerState>(INITIAL_STATE)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const playSound = useCallback(() => {
    if (state.soundEnabled) {
      // Crear un beep simple usando Web Audio API
      const audioContext = new (
        window.AudioContext || (window as any).webkitAudioContext
      )()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = 800
      oscillator.type = 'sine'

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.5
      )

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.5)
    }
  }, [state.soundEnabled])

  const startTimer = useCallback(() => {
    setState(prev => {
      const newState = { ...prev, isRunning: true }

      if (prev.initialDelayEnabled) {
        newState.currentPhase = 'initial-delay'
        newState.timeRemaining = 5
      } else {
        newState.currentPhase = 'work'
        newState.currentRound = 1
        newState.timeRemaining = prev.workDuration
      }

      return newState
    })
  }, [])

  const pauseTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setState(prev => ({ ...prev, isRunning: false }))
  }, [])

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setState(INITIAL_STATE)
  }, [])

  const updateSettings = useCallback(
    (
      updates: Partial<
        Pick<
          HIITTimerState,
          | 'workDuration'
          | 'restDuration'
          | 'rounds'
          | 'soundEnabled'
          | 'initialDelayEnabled'
        >
      >
    ) => {
      setState(prev => ({ ...prev, ...updates }))
    },
    []
  )

  useEffect(() => {
    if (!state.isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    intervalRef.current = setInterval(() => {
      setState(prev => {
        if (prev.timeRemaining <= 1) {
          // Fase completada
          playSound()

          if (prev.currentPhase === 'initial-delay') {
            return {
              ...prev,
              currentPhase: 'work',
              currentRound: 1,
              timeRemaining: prev.workDuration,
            }
          }

          if (prev.currentPhase === 'work') {
            if (prev.currentRound >= prev.rounds) {
              // Todas las rondas completadas
              if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
              }
              return {
                ...prev,
                currentPhase: 'completed',
                isRunning: false,
                timeRemaining: 0,
              }
            }
            // Cambiar a descanso
            return {
              ...prev,
              currentPhase: 'rest',
              timeRemaining: prev.restDuration,
            }
          }

          if (prev.currentPhase === 'rest') {
            // Cambiar a trabajo de la siguiente ronda
            return {
              ...prev,
              currentPhase: 'work',
              currentRound: prev.currentRound + 1,
              timeRemaining: prev.workDuration,
            }
          }

          return prev
        }

        return {
          ...prev,
          timeRemaining: prev.timeRemaining - 1,
        }
      })
    }, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [
    state.isRunning,
    state.workDuration,
    state.restDuration,
    state.rounds,
    playSound,
  ])

  return {
    state,
    startTimer,
    pauseTimer,
    resetTimer,
    updateSettings,
  }
}
