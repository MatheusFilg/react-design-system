import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonDangerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  disabledStyle?: string
  defaultStyle?: string
  variant?: 'primary' | 'ghost'
  size?: 'small' | 'medium'
}

export default function ButtonDanger(props: ButtonDangerProps) {
  const style =
    'flex items-center border gap-4 rounded-lg font-inter font-normal items-center justify-center'
  const disable =
    ' disabled:border-[#B3B3B3] disabled:bg-[#D9D9D9] disabled:text-[#B3B3B3]'

  const { variant } = props

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

export function DefaultButton(props: ButtonDangerProps) {
  let { children, defaultStyle, size, disabledStyle } = props

  if (size === 'medium') {
    defaultStyle += ' w-18 h-10 p-3 text-base'
  } else {
    defaultStyle += ' w-16 h-8 p-2 text-sm'
  }

  return (
    <button
      {...props}
      className={`${disabledStyle} ${defaultStyle} border-[#C00F0C] bg-[#EC221F] text-white hover:border-[#900B09] hover:bg-[#C00F0C]`}
    >
      <span>{children}</span>
    </button>
  )
}

export function GhostButton(props: ButtonDangerProps) {
  let { children, defaultStyle, size, disabledStyle } = props

  if (size === 'medium') {
    defaultStyle += ' w-18 h-10 p-3 text-base'
  } else {
    defaultStyle += ' w-16 h-8 p-2 text-sm'
  }

  return (
    <button
      {...props}
      className={`${disabledStyle} ${defaultStyle} border-transparent text-[#900B09] hover:border hover:border-[#900B09] hover:bg-[#FDD3D0]`}
    >
      <span>{children}</span>
    </button>
  )
}
