'use client'

import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

const MIN_SCALE = 50
const MAX_SCALE = 200
const STEP = 10
const DEFAULT_SCALE = 100

type FontSizeContextValue = {
  scale: number
  increase: () => void
  decrease: () => void
  reset: () => void
}

const FontSizeContext = createContext<FontSizeContextValue | null>(null)

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(DEFAULT_SCALE)

  const value: FontSizeContextValue = {
    scale,
    increase: () => setScale((current) => Math.min(MAX_SCALE, current + STEP)),
    decrease: () => setScale((current) => Math.max(MIN_SCALE, current - STEP)),
    reset: () => setScale(DEFAULT_SCALE),
  }

  return (
    <FontSizeContext.Provider value={value}>{children}</FontSizeContext.Provider>
  )
}

export function useFontSize() {
  const context = useContext(FontSizeContext)

  if (!context) {
    throw new Error('useFontSize must be used within a FontSizeProvider')
  }

  return context
}
