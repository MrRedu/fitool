import { useState, useEffect, useRef, useCallback } from 'react'

export type RestTimerPhase = 'idle' | 'running' | 'paused' | 'completed'

export interface RestTimerState {
  selectedDuration: number // en segundos (60, 90, 180)
  currentPhase: RestTimerPhase
  timeRemaining: number // en segundos
  soundEnabled: boolean
}

const PRESET_DURATIONS = [60, 90, 180] // 60s, 90s, 3min

const INITIAL_STATE: RestTimerState = {
  selectedDuration: 60,
  currentPhase: 'idle',
  timeRemaining: 60,
  soundEnabled: true,
}

export function useRestTimer() {
  const [state, setState] = useState<RestTimerState>(INITIAL_STATE)
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

  const selectDuration = useCallback((duration: number) => {
    setState(prev => ({
      ...prev,
      selectedDuration: duration,
      timeRemaining: duration,
      currentPhase: 'idle',
    }))
  }, [])

  const startTimer = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentPhase: 'running',
      timeRemaining: prev.timeRemaining || prev.selectedDuration,
    }))
  }, [])

  const pauseTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setState(prev => ({ ...prev, currentPhase: 'paused' }))
  }, [])

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setState(prev => ({
      ...prev,
      currentPhase: 'idle',
      timeRemaining: prev.selectedDuration,
    }))
  }, [])

  const toggleSound = useCallback(() => {
    setState(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }))
  }, [])

  useEffect(() => {
    if (state.currentPhase !== 'running') {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    intervalRef.current = setInterval(() => {
      setState(prev => {
        if (prev.timeRemaining <= 1) {
          // Timer completado
          playSound()
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
          }
          return {
            ...prev,
            currentPhase: 'completed',
            timeRemaining: 0,
          }
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
  }, [state.currentPhase, playSound])

  return {
    state,
    presetDurations: PRESET_DURATIONS,
    selectDuration,
    startTimer,
    pauseTimer,
    resetTimer,
    toggleSound,
  }
}
