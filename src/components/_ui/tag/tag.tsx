import { HTMLAttributes, ReactNode } from 'react'

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  children: string
  icon?: ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  type?: 'brand' | 'danger' | 'success' | 'warning' | 'neutral'
}

export default function Tag(props: TagProps) {
  const { variant } = props

  const style =
    'w-auto h-8 gap-2 p-2 font-inter text-base rounded-lg flex items-center justify-center font-normal  '

  switch (variant) {
    case 'primary':
      return (
        <PrimaryTag
          className={style}
          variant={props.variant ?? 'primary'}
          type={props.type ?? 'brand'}
          {...props}
        />
      )

    case 'secondary':
      return (
        <SecondaryTag
          className={style}
          variant={props.variant ?? 'secondary'}
          type={props.type ?? 'brand'}
          {...props}
        />
      )

    default:
      return (
        <PrimaryTag
          className={style}
          variant={props.variant ?? 'primary'}
          type={props.type ?? 'brand'}
          {...props}
        />
      )
  }
}

export function PrimaryTag(props: TagProps) {
  let { children, icon, type, className } = props

  switch (type) {
    case 'brand':
      className += 'bg-[#2C2C2C] hover:bg-[#1E1E1E] text-white'
      break

    case 'danger':
      className += 'bg-[#EC221F] hover:bg-[#C00F0C] text-white'
      break

    case 'success':
      className += 'bg-[#14AE5C] hover:bg-[#009951] text-white'
      break

    case 'warning':
      className += 'bg-[#E8B931] hover:bg-[#E5A000]'
      break

    case 'neutral':
      className += 'bg-[#D9D9D9] hover:bg-[#B3B3B3]'
      break

    default:
      className += 'bg-[#2C2C2C] hover:bg-[#1E1E1E] text-white'
  }

  return (
    <div className={`${className} `}>
      <p>{children}</p>
      {icon}
    </div>
  )
}

export function SecondaryTag(props: TagProps) {
  let { children, icon, type, className } = props

  switch (type) {
    case 'brand':
      className += 'bg-[#F5F5F5] hover:bg-[#E6E6E6]'
      break

    case 'danger':
      className += 'bg-[#FDD3D0] hover:bg-[#FCB3AD] text-[#900B09]'
      break

    case 'success':
      className += 'bg-[#CFF7D3] hover:bg-[#AFF4C6] text-[#02542D]'
      break

    case 'warning':
      className += 'bg-[#E8B931] hover:bg-[#FFE8A3] text-[#401B01]'
      break

    case 'neutral':
      className += 'bg-[#f1ebeb] hover:bg-[#dbd7d7]'
      break

    default:
      className += 'bg-[#F5F5F5] hover:bg-[#E6E6E6]'
  }

  return (
    <div className={`${className} `}>
      <p>{children}</p>
      {icon}
    </div>
  )
}
