import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonMultipleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  direction?: 'row' | 'column'
  align?: 'start' | 'center' | 'end' | 'stretch'
}

export default function ButtonMultiple(props: ButtonMultipleProps) {
  const { direction } = props
  const style = 'flex items-center justify-center font-inter p-3 h-10 '

  switch (direction) {
    case 'row':
      return (
        <DefaultButton
          className={style}
          {...props}
          align={props?.align ?? 'stretch'}
        />
      )

    case 'column':
      return <StackButton className={style} {...props} />

    default:
      return (
        <DefaultButton
          className={style}
          {...props}
          align={props?.align ?? 'start'}
        />
      )
  }
}

export function DefaultButton(props: ButtonMultipleProps) {
  const { children, className, align } = props

  return (
    <div
      className={`flex min-w-60 flex-row gap-4 ${align === 'end' ? 'justify-end' : align === 'center' ? 'justify-center' : 'justify-start'}`}
    >
      <button
        className={`${className} ${align !== 'stretch' ? 'w-1/3' : 'w-1/2'} rounded-lg border-transparent bg-white hover:border hover:border-[#B3B3B3]`}
      >
        {children}
      </button>

      <button
        className={`${className} ${align !== 'stretch' ? 'w-1/3' : 'w-1/2'} rounded-lg bg-[#2C2C2C] text-white hover:bg-[#1E1E1E]`}
      >
        {children}
      </button>
    </div>
  )
}

function StackButton(props: ButtonMultipleProps) {
  const { children, className } = props
  return (
    <div className="flex min-w-60 flex-col gap-4">
      <button
        className={`${className} min-w-full rounded-lg bg-white hover:border hover:border-[#B3B3B3]`}
      >
        {children}
      </button>

      <button
        className={`${className} min-w-full rounded-lg bg-[#2C2C2C] text-white hover:bg-[#1E1E1E]`}
      >
        {children}
      </button>
    </div>
  )
}
