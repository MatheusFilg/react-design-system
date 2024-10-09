import Avatar from './avatar'

interface AvatarListProps {
  gap: 'spaced' | 'overlap'
}

export default function AvatarList(props: AvatarListProps) {
  const { gap } = props
  let variantStyle = ''

  if (gap === 'spaced') {
    variantStyle += 'gap-1 '
  }
  if (gap === 'overlap') {
    variantStyle += 'absolute top-0 '
  }

  return (
    <div className="relative flex w-[200px]">
      <Avatar
        src="https://github.com/MatheusFilg.png"
        format="circle"
        size="large"
        type="image"
        defaultstyle={`${variantStyle}`}
      />
      <Avatar
        src="https://github.com/MatheusFilg.png"
        format="circle"
        size="large"
        type="image"
        defaultstyle={`${variantStyle}`}
      />
      <Avatar
        src="https://github.com/MatheusFilg.png"
        format="circle"
        size="large"
        type="image"
        defaultstyle={`${variantStyle}`}
      />
      <Avatar
        src="https://github.com/MatheusFilg.png"
        format="circle"
        size="large"
        type="image"
        defaultstyle={`${variantStyle}`}
      />
    </div>
  )
}
