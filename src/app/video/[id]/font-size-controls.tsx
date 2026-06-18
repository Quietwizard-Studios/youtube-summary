'use client'

import { useFontSize } from './font-size-context'

export default function FontSizeControls() {
  const { decrease, increase, reset } = useFontSize()

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label="Decrease font size"
        onClick={decrease}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-300 text-lg font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
      >
        −
      </button>
      <button
        type="button"
        aria-label="Reset font size to 100%"
        onClick={reset}
        className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-300 px-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
      >
        100%
      </button>
      <button
        type="button"
        aria-label="Increase font size"
        onClick={increase}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-300 text-lg font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
      >
        +
      </button>
    </div>
  )
}
