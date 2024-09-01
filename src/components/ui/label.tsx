import { LabelHTMLAttributes, ReactNode } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  variant?: 'horizontal' | 'vertical' | 'group'
  defaultstyle?: string
}

export default function Label(props: LabelProps) {
  const { variant } = props

  const style =
    'w-fit items-center justify-center border border-[#B2B2B2] font-roboto font-normal '

  switch (variant) {
    case 'horizontal':
      return <HorizontalLabel defaultstyle={style} {...props} />

    case 'vertical':
      return <VerticalLabel defaultstyle={style} {...props} />

    case 'group':
      return <GroupLabel defaultstyle={style} {...props} />

    default:
      return <HorizontalLabel defaultstyle={style} {...props} />
  }
}

export function HorizontalLabel(props: LabelProps) {
  const { children, defaultstyle } = props

  return (
    <div className="flex w-[100px] flex-row items-center">
      <label
        {...props}
        className={`${defaultstyle} flex h-8 rounded-lg bg-[#CDCDCD] px-2 py-1`}
      >
        {children}
      </label>
      <div className="h-[1px] w-6 bg-[#E3E3E3]" />
    </div>
  )
}

export function VerticalLabel(props: LabelProps) {
  const { children, defaultstyle } = props

  return (
    <div className="flex flex-col items-center">
      <div className="h-6 w-[2px] bg-[#E3E3E3]" />
      <label
        {...props}
        className={`${defaultstyle} flex h-8 rounded-lg bg-[#E3E3E3] px-2 py-1`}
      >
        {children}
      </label>
    </div>
  )
}

export function GroupLabel(props: LabelProps) {
  const { children, defaultstyle } = props

  return (
    <div className="flex flex-row items-center">
      <label
        {...props}
        className={`${defaultstyle} flex h-8 rounded-full bg-[#E3E3E3] px-4 py-2`}
      >
        {children}
      </label>
      <div className="h-[1px] w-6 bg-[#E3E3E3]" />
      <div className="h-[200px] w-[2px] bg-[#E3E3E3]" />
    </div>
  )
}
