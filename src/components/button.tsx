import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  disabledStyle?: string
  defaultStyle?: string
  size?: 'small' | 'medium'
  variant?: 'primary' | 'neutral' | 'ghost'
  //   icon?: ReactElement
}

export default function Button(props: ButtonProps) {
  const { variant } = props

  const style = 'flex items-center border gap-4 rounded-lg'
  const disable =
    ' disabled:border-[#B3B3B3] disabled:bg-[#D9D9D9] disabled:text-[#B3B3B3]'

  switch (variant) {
    case 'primary':
      return (
        <DefaultButton
          disabledStyle={disable}
          defaultStyle={style}
          {...props}
          size={props?.size ?? 'medium'}
        />
      )
    case 'neutral':
      return (
        <NeutralButton
          disabledStyle={disable}
          defaultStyle={style}
          {...props}
          size={props?.size ?? 'medium'}
        />
      )
    case 'ghost':
      return (
        <GhostButton
          disabledStyle={disable}
          defaultStyle={style}
          {...props}
          size={props?.size ?? 'medium'}
        />
      )
    default:
      return (
        <DefaultButton
          disabledStyle={disable}
          defaultStyle={style}
          {...props}
          size={props?.size ?? 'medium'}
        />
      )
  }
}

export function DefaultButton(props: ButtonProps) {
  let { children, defaultStyle, disabledStyle, size } = props

  if (size === 'medium') {
    defaultStyle += ' w-18 h-10 p-3'
  } else {
    defaultStyle += ' w-16 h-8 p-2'
  }

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
  let { children, defaultStyle, disabledStyle, size } = props

  if (size === 'medium') {
    defaultStyle += ' w-18 h-10 p-3'
  } else {
    defaultStyle += ' w-16 h-8 p-2'
  }

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
  let { children, defaultStyle, disabledStyle, size } = props

  if (size === 'medium') {
    defaultStyle += ' w-18 h-10 p-3'
  } else {
    defaultStyle += ' w-16 h-8 p-2'
  }

  return (
    <button
      className={`${disabledStyle} ${defaultStyle} rounded-lg bg-[#FFFFFF] hover:border-[#B3B3B3]`}
      {...props}
    >
      <span className="text-black">{children}</span>
    </button>
  )
}
