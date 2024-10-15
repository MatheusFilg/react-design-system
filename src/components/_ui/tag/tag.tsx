import { HTMLAttributes, ReactNode } from 'react'

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  children: string
  icon?: ReactNode
  defaultstyle?: string
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
          defaultstyle={style}
          variant={props.variant ?? 'primary'}
          type={props.type ?? 'brand'}
          {...props}
        />
      )

    case 'secondary':
      return (
        <SecondaryTag
          defaultstyle={style}
          variant={props.variant ?? 'secondary'}
          type={props.type ?? 'brand'}
          {...props}
        />
      )

    default:
      return (
        <PrimaryTag
          defaultstyle={style}
          variant={props.variant ?? 'primary'}
          type={props.type ?? 'brand'}
          {...props}
        />
      )
  }
}

export function PrimaryTag(props: TagProps) {
  let { children, icon, type, defaultstyle } = props

  switch (type) {
    case 'brand':
      defaultstyle += 'bg-[#2C2C2C] hover:bg-[#1E1E1E] text-white'
      break

    case 'danger':
      defaultstyle += 'bg-[#EC221F] hover:bg-[#C00F0C] text-white'
      break

    case 'success':
      defaultstyle += 'bg-[#14AE5C] hover:bg-[#009951] text-white'
      break

    case 'warning':
      defaultstyle += 'bg-[#E8B931] hover:bg-[#E5A000]'
      break

    case 'neutral':
      defaultstyle += 'bg-[#D9D9D9] hover:bg-[#B3B3B3]'
      break

    default:
      defaultstyle += 'bg-[#2C2C2C] hover:bg-[#1E1E1E] text-white'
  }

  return (
    <div className={`${defaultstyle} `}>
      <p>{children}</p>
      {icon}
    </div>
  )
}

export function SecondaryTag(props: TagProps) {
  let { children, icon, type, defaultstyle } = props

  switch (type) {
    case 'brand':
      defaultstyle += 'bg-[#F5F5F5] hover:bg-[#E6E6E6]'
      break

    case 'danger':
      defaultstyle += 'bg-[#FDD3D0] hover:bg-[#FCB3AD] text-[#900B09]'
      break

    case 'success':
      defaultstyle += 'bg-[#CFF7D3] hover:bg-[#AFF4C6] text-[#02542D]'
      break

    case 'warning':
      defaultstyle += 'bg-[#E8B931] hover:bg-[#FFE8A3] text-[#401B01]'
      break

    case 'neutral':
      defaultstyle += 'bg-[#f1ebeb] hover:bg-[#dbd7d7]'
      break

    default:
      defaultstyle += 'bg-[#F5F5F5] hover:bg-[#E6E6E6]'
  }

  return (
    <div className={`${defaultstyle} `}>
      <p>{children}</p>
      {icon}
    </div>
  )
}
