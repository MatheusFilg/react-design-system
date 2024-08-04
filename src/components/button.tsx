import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'neutral' | 'ghost'
  disabledStyle?: string
  defaultStyle?: string
  //   icon?: ReactElement
}

export default function Button(props: ButtonProps) {
  const { variant } = props

  const style = 'flex items-center w-18 h-10 border gap-4 rounded-lg p-3'
  const disable =
    ' disabled:border-[#B3B3B3] disabled:bg-[#D9D9D9] disabled:text-[#B3B3B3]'

  switch (variant) {
    case 'primary':
      return (
        <DefaultButton
          disabledStyle={disable}
          defaultStyle={style}
          {...props}
        />
      )
    case 'neutral':
      return (
        <NeutralButton
          disabledStyle={disable}
          defaultStyle={style}
          {...props}
        />
      )
    case 'ghost':
      return (
        <GhostButton disabledStyle={disable} defaultStyle={style} {...props} />
      )
    default:
      return (
        <DefaultButton
          disabledStyle={disable}
          defaultStyle={style}
          {...props}
        />
      )
  }
}

export function DefaultButton(props: ButtonProps) {
  const { children, defaultStyle, disabledStyle } = props

  return (
    <button
      {...props}
      className={`${disabledStyle} ${defaultStyle} border-[#2C2C2C] bg-[#2C2C2C] hover:bg-[#1E1E1E]`}
    >
      <span className="text-white">{children}</span>
    </button>
  )
}

export function NeutralButton(props: ButtonProps) {
  const { children, defaultStyle, disabledStyle } = props

  return (
    <button
      className={`${disabledStyle} ${defaultStyle} border-[#767676] bg-[#E3E3E3] hover:bg-[#CDCDCD]`}
      {...props}
    >
      <span className="text-black">{children}</span>
    </button>
  )
}

export function GhostButton(props: ButtonProps) {
  const { children, defaultStyle, disabledStyle } = props

  return (
    <button
      className={`${disabledStyle} ${defaultStyle} rounded-lg bg-[#FFFFFF] hover:border-[#B3B3B3]`}
      {...props}
    >
      <span className="text-black">{children}</span>
    </button>
  )
}

export function DisabledButton(props: ButtonProps) {
  const { children } = props

  return (
    <button
      className="group w-20 gap-4 rounded-lg p-2 disabled:bg-[#D9D9D9]"
      {...props}
    >
      <span className="group-disabled:text-[#B3B3B3]">{children}</span>
    </button>
  )
}
