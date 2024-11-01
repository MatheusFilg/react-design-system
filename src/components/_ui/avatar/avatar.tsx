import { AnchorHTMLAttributes } from 'react'

export interface AvatarProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  src?: string
  className?: string
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
          className={style}
          {...props}
          size={props?.size ?? 'large'}
          format={props?.format ?? 'circle'}
        />
      )

    case 'initial':
      return (
        <InitialAvatar
          className={style}
          {...props}
          size={props?.size ?? 'large'}
          format={props?.format ?? 'circle'}
        />
      )
    default:
      return (
        <InitialAvatar
          className={style}
          {...props}
          size={props?.size ?? 'large'}
          format={props?.format ?? 'circle'}
        />
      )
  }
}

export function ImageAvatar(props: AvatarProps) {
  let { src, size, format, className } = props

  if (size === 'large') {
    className += ' h-10 w-10 text-base'
  }
  if (size === 'medium') {
    className += ' h-8 w-8 text-sm'
  }
  if (size === 'small') {
    className += ' h-6 w-6 text-sm'
  }

  if (format === 'square') {
    className += ' rounded-lg'
  }
  if (format === 'circle') {
    className += ' rounded-full'
  }

  return (
    <div>
      <img src={src} alt="" className={`${className}`} />
    </div>
  )
}

export function InitialAvatar(props: AvatarProps) {
  let { size, format, className } = props

  if (size === 'large') {
    className += ' h-10 w-10 text-base'
  }
  if (size === 'medium') {
    className += ' h-8 w-8 text-sm'
  }
  if (size === 'small') {
    className += ' h-6 w-6 text-sm'
  }

  if (format === 'square') {
    className += ' rounded-lg'
  }
  if (format === 'circle') {
    className += ' rounded-full'
  }

  return (
    <div>
      <p
        className={`${className} items-center justify-center bg-black font-inter text-white`}
      >
        M
      </p>
    </div>
  )
}
