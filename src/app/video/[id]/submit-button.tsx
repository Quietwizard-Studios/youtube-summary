'use client'

import { useFormStatus } from 'react-dom'
import Spinner from './spinner'

export default function SubmitButton({
  children,
  pendingLabel,
  danger = false,
}: {
  children: string
  pendingLabel: string
  danger?: boolean
}) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-70 ${
        danger
          ? 'border-red-200 bg-red-50 text-red-700 hover:bg-red-100 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200 dark:hover:bg-red-950'
          : 'border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800'
      }`}
    >
      {pending && <Spinner />}
      {pending ? pendingLabel : children}
    </button>
  )
}
