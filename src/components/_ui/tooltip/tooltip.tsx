import { HTMLAttributes, ReactNode } from 'react'

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  direction?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

export default function Tooltip(props: TooltipProps) {
  const { direction } = props

  const style = 'flex h-fit w-fit items-center'

  switch (direction) {
    case 'bottom':
      return <BottomTooltip className={style} {...props} />

    case 'top':
      return <TopTooltip className={style} {...props} />

    case 'left':
      return <LeftTooltip className={style} {...props} />

    case 'right':
      return <RightTooltip className={style} {...props} />

    default:
      return <BottomTooltip className={style} {...props} />
  }
}

export function BottomTooltip(props: TooltipProps) {
  const { children, className } = props
  return (
    <div className={`${className} flex-col`}>
      <div className="z-0 h-3 w-3 translate-y-2 rotate-45 border border-[#D9D9D9] bg-white shadow-lg" />
      <div className="z-10 flex h-fit w-fit flex-col rounded-lg border border-[#D9D9D9] bg-white px-3 py-2 shadow-lg">
        {children}
      </div>
    </div>
  )
}

export function TopTooltip(props: TooltipProps) {
  const { children, className } = props

  return (
    <div className={`${className} flex-col`}>
      <div className="z-10 flex h-fit w-fit flex-col rounded-lg border border-[#D9D9D9] bg-white px-3 py-2 shadow-lg">
        {children}
      </div>
      <div className="z-0 h-3 w-3 -translate-y-2 rotate-45 border border-[#D9D9D9] bg-white shadow-lg" />
    </div>
  )
}

export function LeftTooltip(props: TooltipProps) {
  const { children, className } = props

  return (
    <div className={`${className} flex-row`}>
      <div className="z-10 flex h-fit w-fit flex-col rounded-lg border border-[#D9D9D9] bg-white px-3 py-2 shadow-lg">
        {children}
      </div>
      <div className="z-0 h-3 w-3 -translate-x-2 rotate-45 border border-[#D9D9D9] bg-white shadow-lg" />
    </div>
  )
}

export function RightTooltip(props: TooltipProps) {
  const { children, className } = props

  return (
    <div className={`${className} flex-row`}>
      <div className="z-0 h-3 w-3 translate-x-2 rotate-45 border border-[#D9D9D9] bg-white shadow-lg" />
      <div className="z-10 flex h-fit w-fit flex-col rounded-lg border border-[#D9D9D9] bg-white px-3 py-2 shadow-lg">
        {children}
      </div>
    </div>
  )
}
