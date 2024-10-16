import { AnchorHTMLAttributes, ReactNode } from 'react'

export interface NavigationProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  icon?: ReactNode
  href: string
  defaultstyle?: string
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
          defaultstyle={style}
          {...props}
          size={props?.size ?? 'small'}
        />
      )

    case 'column':
      return (
        <ColumnNavigation
          defaultstyle={style}
          {...props}
          size={props?.size ?? 'small'}
        />
      )
    default:
      return (
        <RowNavigation
          defaultstyle={style}
          {...props}
          size={props?.size ?? 'small'}
        />
      )
  }
}

export function RowNavigation(props: NavigationProps) {
  let { children, href, defaultstyle, size, icon } = props

  if (size === 'small') {
    defaultstyle += 'text-sm'
  } else {
    defaultstyle += 'text-base'
  }

  return (
    <a className={`${defaultstyle} flex-row`} href={href}>
      <div>{icon}</div>
      <p className="font-inter font-semibold">{children}</p>
    </a>
  )
}

export function ColumnNavigation(props: NavigationProps) {
  let { children, href, defaultstyle, size, icon } = props

  if (size === 'small') {
    defaultstyle += 'text-sm'
  } else {
    defaultstyle += 'text-base'
  }

  return (
    <a className={`${defaultstyle} flex-col`} href={href}>
      <div>{icon}</div>
      <p className="font-inter font-semibold">{children}</p>
    </a>
  )
}
