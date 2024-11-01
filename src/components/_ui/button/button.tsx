import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  disabledstyle?: string
  className?: string
  size?: 'small' | 'medium'
  variant?: 'primary' | 'neutral' | 'ghost'
}

export default function Button(props: ButtonProps) {
  const { variant } = props

  const style =
    'flex items-center border gap-4 font-inter font-normal items-center justify-center '
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

export function DefaultButton(props: ButtonProps) {
  let { children, className, disabledstyle, size } = props

  if (size === 'medium') {
    className += 'w-18 h-10 p-3 text-base'
  } else {
    className += 'w-16 h-8 p-2 text-sm'
  }

  return (
    <button
      {...props}
      className={`${disabledstyle} ${className} rounded-lg border-[#2C2C2C] bg-[#2C2C2C] text-white hover:bg-[#1E1E1E]`}
    >
      <span>{children}</span>
    </button>
  )
}

export function NeutralButton(props: ButtonProps) {
  let { children, className, disabledstyle, size } = props

  if (size === 'medium') {
    className += 'w-18 h-10 p-3 text-base'
  } else {
    className += 'w-16 h-8 p-2 text-sm'
  }

  return (
    <button
      className={`${disabledstyle} ${className} rounded-lg border-[#767676] bg-[#E3E3E3] hover:bg-[#CDCDCD]`}
      {...props}
    >
      <span className="text-black">{children}</span>
    </button>
  )
}

export function GhostButton(props: ButtonProps) {
  let { children, className, disabledstyle, size } = props

  if (size === 'medium') {
    className += 'w-18 h-10 p-3 text-base'
  } else {
    className += 'w-16 h-8 p-2 text-sm'
  }

  return (
    <button
      className={`${disabledstyle} ${className} rounded-lg bg-[#FFFFFF] hover:border-[#B3B3B3]`}
      {...props}
    >
      <span className="text-black">{children}</span>
    </button>
  )
}
