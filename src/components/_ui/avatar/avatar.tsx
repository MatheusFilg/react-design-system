import { AnchorHTMLAttributes } from 'react'

interface AvatarProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  src?: string
  defaultstyle?: string
  size?: 'small' | 'medium' | 'large'
  format?: 'square' | 'circle'
  type?: 'image' | 'initial'
}

export default function Avatar(props: AvatarProps) {
  const { type } = props

  const style = 'flex flex-row '

  switch (type) {
    case 'image':
      return (
        <ImageAvatar
          defaultstyle={style}
          {...props}
          size={props?.size ?? 'large'}
          format={props?.format ?? 'circle'}
        />
      )

    case 'initial':
      return (
        <InitialAvatar
          defaultstyle={style}
          {...props}
          size={props?.size ?? 'large'}
          format={props?.format ?? 'circle'}
        />
      )
    default:
      return (
        <InitialAvatar
          defaultstyle={style}
          {...props}
          size={props?.size ?? 'large'}
          format={props?.format ?? 'circle'}
        />
      )
  }
}

export function ImageAvatar(props: AvatarProps) {
  let { src, size, format, defaultstyle } = props

  if (size === 'large') {
    defaultstyle += ' h-10 w-10 text-base'
  }
  if (size === 'medium') {
    defaultstyle += ' h-8 w-8 text-sm'
  }
  if (size === 'small') {
    defaultstyle += ' h-6 w-6 text-sm'
  }

  if (format === 'square') {
    defaultstyle += ' rounded-lg '
  }
  if (format === 'circle') {
    defaultstyle += ' rounded-full '
  }

  return (
    <div>
      <img src={src} alt="" className={`${defaultstyle}`} />
    </div>
  )
}

export function InitialAvatar(props: AvatarProps) {
  let { size, format, defaultstyle } = props

  if (size === 'large') {
    defaultstyle += ' h-10 w-10 text-base'
  }
  if (size === 'medium') {
    defaultstyle += ' h-8 w-8 text-sm'
  }
  if (size === 'small') {
    defaultstyle += ' h-6 w-6 text-sm'
  }

  if (format === 'square') {
    defaultstyle += ' rounded-lg'
  }
  if (format === 'circle') {
    defaultstyle += ' rounded-full'
  }

  return (
    <div>
      <p
        className={`${defaultstyle} items-center justify-center bg-black font-inter text-white`}
      >
        M
      </p>
    </div>
  )
}
