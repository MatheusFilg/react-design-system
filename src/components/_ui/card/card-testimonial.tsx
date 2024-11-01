import { HTMLAttributes } from 'react'

import AvatarBlock from '../avatar/avatar-block'

interface CardTestimonialProps extends HTMLAttributes<HTMLDivElement> {
  description: string
  className?: string
  direction?: 'row' | 'column'
}

export default function CardTestimonial(props: CardTestimonialProps) {
  const { direction } = props

  const style = 'flex gap-6 bg-white border border-[#D9D9D9] p-6 rounded-lg '

  switch (direction) {
    case 'row':
      return <HorizontalCardTestimonial className={style} {...props} />
    case 'column':
      return <VerticalCardTestimonial className={style} {...props} />

    default:
      return <HorizontalCardTestimonial className={style} {...props} />
  }
}

export function HorizontalCardTestimonial(props: CardTestimonialProps) {
  const { description, className } = props
  return (
    <div className={`${className} flex-row items-center`}>
      <AvatarBlock
        type="image"
        src="https://github.com/MatheusFilg.png"
        title="Title"
        description="description"
      />
      <h1 className="font-inter text-2xl font-semibold">{description}</h1>
    </div>
  )
}

export function VerticalCardTestimonial(props: CardTestimonialProps) {
  const { description, className } = props
  return (
    <div className={`${className} flex-col`}>
      <h1 className="font-inter text-2xl font-semibold">{description}</h1>
      <AvatarBlock
        type="image"
        src="https://github.com/MatheusFilg.png"
        title="Title"
        description="description"
      />
    </div>
  )
}
