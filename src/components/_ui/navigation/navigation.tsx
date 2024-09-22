import { AnchorHTMLAttributes, ReactNode } from 'react'

import Star from '../../../assets/icons/Star'

interface NavigationProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
  defaultstyle?: string
  size?: 'small' | 'medium'
  direction?: 'row' | 'column'
}

export default function Navigation(props: NavigationProps) {
  const { direction } = props

  const style = 'font-inter text-sm font-semibold'

  switch (direction) {
    case 'row':
      return <DefaultNavigation defaultstyle={style} {...props} />

    case 'column':
      return <DefaultNavigation defaultstyle={style} {...props} />
    default:
      return <DefaultNavigation defaultstyle={style} {...props} />
  }
}

export function DefaultNavigation(props: NavigationProps) {
  const { children, href, defaultstyle } = props

  return (
    <a
      className="flex flex-col items-center gap-2 text-[#757575] active:text-[#2C2C2C]"
      href={href}
    >
      <Star color="#2C2C2C" />
      <p className={`${defaultstyle} `}>{children}</p>
    </a>
  )
}
