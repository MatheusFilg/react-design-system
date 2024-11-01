import { AnchorHTMLAttributes, ReactNode } from 'react'

export interface NavigationProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  icon?: ReactNode
  href: string
  className?: string
  size?: 'small' | 'medium'
  direction?: 'row' | 'column'
}

export default function Navigation(props: NavigationProps) {
  const { direction } = props
  const style =
    'group flex items-center gap-2 text-[#757575] active:text-[#2C2C2C] '

  switch (direction) {
    case 'row':
      return (
        <RowNavigation
          className={style}
          {...props}
          size={props?.size ?? 'small'}
        />
      )

    case 'column':
      return (
        <ColumnNavigation
          className={style}
          {...props}
          size={props?.size ?? 'small'}
        />
      )
    default:
      return (
        <RowNavigation
          className={style}
          {...props}
          size={props?.size ?? 'small'}
        />
      )
  }
}

export function RowNavigation(props: NavigationProps) {
  let { children, href, className, size, icon } = props

  if (size === 'small') {
    className += 'text-sm'
  } else {
    className += 'text-base'
  }

  return (
    <a className={`${className} flex-row`} href={href}>
      <div>{icon}</div>
      <p className="font-inter font-semibold">{children}</p>
    </a>
  )
}

export function ColumnNavigation(props: NavigationProps) {
  let { children, href, className, size, icon } = props

  if (size === 'small') {
    className += 'text-sm'
  } else {
    className += 'text-base'
  }

  return (
    <a className={`${className} flex-col`} href={href}>
      <div>{icon}</div>
      <p className="font-inter font-semibold">{children}</p>
    </a>
  )
}
