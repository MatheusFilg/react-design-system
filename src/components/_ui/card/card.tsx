import { HTMLAttributes, ReactNode } from 'react'

import Button from '../button/button'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  media: string | ReactNode
  direction?: 'row' | 'column'
  variant?: 'stroke' | 'default'
}

const style =
  'flex h-fit w-[440px] items-start gap-6 rounded-lg border-[#D9D9D9] p-6'

export default function Card(props: CardProps) {
  const { direction } = props

  switch (direction) {
    case 'row':
      return (
        <HorizontalCard
          className={style}
          {...props}
          variant={props.variant ?? 'default'}
        />
      )

    case 'column':
      return (
        <VerticalCard
          className={style}
          {...props}
          variant={props.variant ?? 'default'}
        />
      )
    default:
      return (
        <HorizontalCard
          className={style}
          {...props}
          variant={props.variant ?? 'default'}
        />
      )
  }
}

export function HorizontalCard(props: CardProps) {
  let { children, media, className, variant } = props

  if (variant === 'default') {
    className += ' bg-transparent'
  }
  if (variant === 'stroke') {
    className += ' bg-white'
  }

  return (
    <div className={`${className} flex-row`}>
      <div className="w-auto">
        {typeof media === 'string' ? (
          <img alt="" src={media} className="max-w-[160px]" />
        ) : (
          media
        )}
      </div>
      <div className="flex w-full flex-col gap-4 text-base">
        {children}
        <Button variant="neutral" size="medium">
          Button
        </Button>
      </div>
    </div>
  )
}

export function VerticalCard(props: CardProps) {
  let { children, media, className, variant } = props

  if (variant === 'default') {
    className += ' bg-transparent'
  }
  if (variant === 'stroke') {
    className += ' bg-white'
  }

  return (
    <div className={`${className} flex-col`}>
      <div className="w-auto">
        {typeof media === 'string' ? (
          <img alt="" src={media} className="max-w-[160px]" />
        ) : (
          media
        )}
      </div>
      <div className="flex w-full flex-col gap-4 text-base">
        {children}
        <Button variant="neutral" size="medium">
          Button
        </Button>
      </div>
    </div>
  )
}
