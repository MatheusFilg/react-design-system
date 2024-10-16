import { HTMLAttributes, ReactNode } from 'react'

import Button from '../button/button'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  defaultstyle?: string
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
          defaultstyle={style}
          {...props}
          variant={props.variant ?? 'default'}
        />
      )

    case 'column':
      return (
        <VerticalCard
          defaultstyle={style}
          {...props}
          variant={props.variant ?? 'default'}
        />
      )
    default:
      return (
        <HorizontalCard
          defaultstyle={style}
          {...props}
          variant={props.variant ?? 'default'}
        />
      )
  }
}

export function HorizontalCard(props: CardProps) {
  let { children, media, defaultstyle, variant } = props

  if (variant === 'default') {
    defaultstyle += ' bg-transparent'
  }
  if (variant === 'stroke') {
    defaultstyle += ' bg-white'
  }

  return (
    <div className={`${defaultstyle} flex-row`}>
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
  let { children, media, defaultstyle, variant } = props

  if (variant === 'default') {
    defaultstyle += ' bg-transparent'
  }
  if (variant === 'stroke') {
    defaultstyle += ' bg-white'
  }

  return (
    <div className={`${defaultstyle} flex-col`}>
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
