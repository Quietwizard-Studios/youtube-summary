'use client'

import { useFontSize } from './font-size-context'

type SummaryProps = {
  summary: string | null
}

export default function Summary({ summary }: SummaryProps) {
  const { scale } = useFontSize()

  return <SummaryContent summary={summary} scale={scale} />
}

function SummaryContent({
  summary,
  scale,
}: {
  summary: string | null
  scale: number
}) {
  if (!summary) {
    return (
      <p className="text-zinc-600 dark:text-zinc-400">
        No summary is available for this video.
      </p>
    )
  }

  return (
    <div className="space-y-4" style={{ fontSize: `${scale}%` }}>
      {summary.split('\n').map((line, index) => (
        <SummaryLine key={`${index}-${line}`} line={line} />
      ))}
    </div>
  )
}

function SummaryLine({ line }: { line: string }) {
  const trimmed = line.trim()

  if (!trimmed) {
    return <div className="h-2" />
  }

  if (trimmed.startsWith('### ')) {
    return (
      <h3 className="pt-3 text-[1.25em] font-semibold text-zinc-900 dark:text-zinc-50">
        {trimmed.replace(/^###\s+/, '')}
      </h3>
    )
  }

  if (trimmed.startsWith('## ')) {
    return (
      <h2 className="pt-4 text-[1.5em] font-bold text-zinc-900 dark:text-zinc-50">
        {trimmed.replace(/^##\s+/, '')}
      </h2>
    )
  }

  if (trimmed.startsWith('- ')) {
    return (
      <p className="pl-4 text-[1em] leading-[1.75] text-zinc-700 before:mr-2 before:content-['-'] dark:text-zinc-300">
        {trimmed.replace(/^-\s+/, '')}
      </p>
    )
  }

  return (
    <p className="text-[1em] leading-[1.75] text-zinc-700 dark:text-zinc-300">
      {trimmed}
    </p>
  )
}
