import { HTMLAttributes, ReactNode } from 'react'

interface CardStatsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  direction?: 'row' | 'column'
  className?: string
}

export default function CardStats(props: CardStatsProps) {
  const { direction } = props

  const style =
    'flex gap-6 bg-white border border-[#D9D9D9] p-6 rounded-lg items-center min-w-[240px] '

  switch (direction) {
    case 'row':
      return <HorizontalCardStats className={style} {...props} />

    case 'column':
      return <VerticalCardStats className={style} {...props} />
    default:
      return <VerticalCardStats className={style} {...props} />
  }
}

export function HorizontalCardStats(props: CardStatsProps) {
  const { children, className } = props
  return <div className={`${className} flex-row`}>{children}</div>
}

export function VerticalCardStats(props: CardStatsProps) {
  const { children, className } = props
  return <div className={`${className} flex-col`}>{children}</div>
}
