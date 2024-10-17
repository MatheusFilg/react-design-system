import { HTMLAttributes, ReactNode } from 'react'

interface CardStatsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  direction?: 'row' | 'column'
  defaultstyle?: string
}

export default function CardStats(props: CardStatsProps) {
  const { direction } = props

  const style =
    'flex gap-6 bg-white border border-[#D9D9D9] p-6 rounded-lg items-center min-w-[240px] '

  switch (direction) {
    case 'row':
      return <HorizontalCardStats defaultstyle={style} {...props} />

    case 'column':
      return <VerticalCardStats defaultstyle={style} {...props} />
    default:
      return <VerticalCardStats defaultstyle={style} {...props} />
  }
}

export function HorizontalCardStats(props: CardStatsProps) {
  const { children, defaultstyle } = props
  return <div className={`${defaultstyle} flex-row`}>{children}</div>
}

export function VerticalCardStats(props: CardStatsProps) {
  const { children, defaultstyle } = props
  return <div className={`${defaultstyle} flex-col`}>{children}</div>
}
