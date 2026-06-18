'use client'

import Link from 'next/link'
import { useLinkStatus } from 'next/link'
import Spinner from './spinner'

function BackLabel() {
  const { pending } = useLinkStatus()

  return (
    <>
      {pending && <Spinner />}
      {pending ? 'Loading...' : 'Back'}
    </>
  )
}

export default function BackLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
    >
      <BackLabel />
    </Link>
  )
}
