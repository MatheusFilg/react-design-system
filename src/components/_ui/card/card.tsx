import { HTMLAttributes, ReactNode } from 'react'

import Button from '../button/button'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  defaultstyle?: string
  media?: ReactNode
  direction?: 'row' | 'column'
  variant?: 'stroke' | ' default'
}

export default function Card(props: CardProps) {
  const { direction } = props

  switch (direction) {
    case 'row':
      return <HorizontalCard {...props} />

    case 'column':
      return <VerticalCard {...props} />
    default:
      return <HorizontalCard {...props} />
  }
}

export function HorizontalCard(props: CardProps) {
  const { children, media } = props

  return (
    <div className="flex flex-row items-start gap-6">
      {media}
      <div className="flex flex-col gap-4">
        {children}
        <Button>Button</Button>
      </div>
    </div>
  )
}

export function VerticalCard(props: CardProps) {
  const { children } = props
  return (
    <div>
      <span>{children}</span>
    </div>
  )
}
