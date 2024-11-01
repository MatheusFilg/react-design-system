import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  disabledstyle?: string
  className?: string
  size?: 'small' | 'medium'
  variant?: 'primary' | 'neutral' | 'ghost'
}

export default function ButtonIcon(props: ButtonIconProps) {
  const { variant } = props

  const style =
    'flex items-center border gap-2 font-inter font-normal items-center justify-center '
  const disable =
    ' disabled:border-[#B3B3B3] disabled:bg-[#D9D9D9] disabled:text-[#B3B3B3]'

  switch (variant) {
    case 'primary':
      return (
        <DefaultButton
          disabledstyle={disable}
          className={style}
          {...props}
          size={props?.size ?? 'medium'}
        />
      )
    case 'neutral':
      return (
        <NeutralButton
          disabledstyle={disable}
          className={style}
          {...props}
          size={props?.size ?? 'medium'}
        />
      )
    case 'ghost':
      return (
        <GhostButton
          disabledstyle={disable}
          className={style}
          {...props}
          size={props?.size ?? 'medium'}
        />
      )
    default:
      return (
        <DefaultButton
          disabledstyle={disable}
          className={style}
          {...props}
          size={props?.size ?? 'medium'}
        />
      )
  }
}

export function DefaultButton(props: ButtonIconProps) {
  let { children, className, disabledstyle, size } = props

  if (size === 'medium') {
    className += ' w-11 h-11 p-3'
  } else {
    className += ' w-9 h-9 p-2'
  }

  return (
    <button
      {...props}
      className={`${disabledstyle} ${className} rounded-full border-[#2C2C2C] bg-[#2C2C2C] hover:bg-[#1E1E1E]`}
    >
      <span>{children}</span>
    </button>
  )
}

export function NeutralButton(props: ButtonIconProps) {
  let { children, className, disabledstyle, size } = props

  if (size === 'medium') {
    className += ' w-11 h-11 p-3'
  } else {
    className += ' w-9 h-9 p-2'
  }

  return (
    <button
      className={`${disabledstyle} ${className} rounded-full border-[#D9D9D9] bg-[#F5F5F5] hover:bg-[#E6E6E6]`}
      {...props}
    >
      <span>{children}</span>
    </button>
  )
}

export function GhostButton(props: ButtonIconProps) {
  let { children, className, disabledstyle, size } = props

  if (size === 'medium') {
    className += ' w-11 h-11 p-3'
  } else {
    className += ' w-9 h-9 p-2'
  }

  return (
    <button
      className={`${disabledstyle} ${className} rounded-full border-transparent hover:bg-[#F5F5F5]`}
      {...props}
    >
      <span>{children}</span>
    </button>
  )
}
