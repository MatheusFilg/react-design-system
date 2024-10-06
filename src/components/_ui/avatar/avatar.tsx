import { AnchorHTMLAttributes } from 'react'

interface AvatarProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: 'small' | 'medium' | 'large'
  format?: 'square' | 'circle'
  src?: string
}

export default function Avatar(props: AvatarProps) {
  const { src, size = 'large', format = 'square' } = props

  let variantStyle = ''

  if (size === 'large') {
    variantStyle += 'h-10 w-10 text-base '
  }
  if (size === 'medium') {
    variantStyle += 'h-8 w-8 text-sm '
  }
  if (size === 'small') {
    variantStyle += 'h-6 w-6 text-sm '
  }

  if (format === 'square') {
    variantStyle += 'rounded-lg '
  }
  if (format === 'circle') {
    variantStyle += 'rounded-full '
  }

  return (
    <div>
      {src ? (
        <img src={src} alt="" className={`${variantStyle} `} />
      ) : (
        <p
          className={`${variantStyle} flex items-center justify-center bg-black font-inter text-white`}
        >
          M
        </p>
      )}
    </div>
  )
}
