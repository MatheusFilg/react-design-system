import { ReactNode } from 'react'

interface LabelProps {
  children: ReactNode
  variant?: 'horizontal' | 'vertical' | 'group'
  defaultStyle?: string
}

export default function Label(props: LabelProps) {
  const { variant } = props

  const style = 'w-fit items-center justify-center border border-[#B2B2B2]'

  switch (variant) {
    case 'horizontal':
      return <HorizontalLabel defaultStyle={style} {...props} />

    case 'vertical':
      return <VerticalLabel defaultStyle={style} {...props} />

    case 'group':
      return <GroupLabel defaultStyle={style} {...props} />

    default:
      return <HorizontalLabel defaultStyle={style} {...props} />
  }
}

export function HorizontalLabel(props: LabelProps) {
  const { children, defaultStyle } = props

  return (
    <div className="flex w-[100px] flex-row items-center">
      <label
        {...props}
        className={`${defaultStyle} flex h-8 rounded-lg bg-[#CDCDCD] px-2 py-1`}
      >
        {children}
      </label>
      <div className="h-[1px] w-6 bg-[#E3E3E3]" />
    </div>
  )
}

export function VerticalLabel(props: LabelProps) {
  const { children, defaultStyle } = props

  return (
    <div className="flex flex-col items-center">
      <div className="h-6 w-[2px] bg-[#E3E3E3]" />
      <label
        {...props}
        className={`${defaultStyle} flex h-8 rounded-lg bg-[#E3E3E3] px-2 py-1`}
      >
        {children}
      </label>
    </div>
  )
}

export function GroupLabel(props: LabelProps) {
  const { children } = props

  return (
    <div className="flex flex-row items-center">
      <label className="flex h-8 w-20 items-center justify-center rounded-lg border border-[#B2B2B2] bg-[#CDCDCD] px-4 py-2">
        {children}
      </label>
      <div className="h-[1px] w-6 bg-[#E3E3E3]" />
    </div>
  )
}
