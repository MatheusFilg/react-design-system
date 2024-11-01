import Avatar from './avatar'

interface AvatarListProps {
  gap: 'spaced' | 'overlap'
}

export default function AvatarList(props: AvatarListProps) {
  const { gap } = props

  switch (gap) {
    case 'spaced':
      return <SpacedAvatarList />

    case 'overlap':
      return <OverlapAvatarList />

    default:
      return <SpacedAvatarList />
  }
}

export function SpacedAvatarList() {
  return (
    <div className="flex flex-row">
      <Avatar
        src="https://github.com/MatheusFilg.png"
        size="large"
        format="circle"
        type="image"
      />
      <Avatar
        src="https://github.com/MatheusFilg.png"
        size="large"
        format="circle"
        type="image"
      />
      <Avatar
        src="https://github.com/MatheusFilg.png"
        size="large"
        format="circle"
        type="image"
      />
      <Avatar
        src="https://github.com/MatheusFilg.png"
        size="large"
        format="circle"
        type="image"
      />
    </div>
  )
}

export function OverlapAvatarList() {
  return (
    <div className="relative flex flex-row">
      <Avatar
        src="https://github.com/MatheusFilg.png"
        size="large"
        format="circle"
        type="image"
        className="shadow-md shadow-[#0C0C0D80]"
      />
      <Avatar
        src="https://github.com/MatheusFilg.png"
        size="large"
        format="circle"
        type="image"
        className="-translate-x-2 shadow-md shadow-[#0C0C0D80]"
      />
      <Avatar
        src="https://github.com/MatheusFilg.png"
        size="large"
        format="circle"
        type="image"
        className="-translate-x-4 shadow-md shadow-[#0C0C0D80]"
      />
      <Avatar
        src="https://github.com/MatheusFilg.png"
        size="large"
        format="circle"
        type="image"
        className="-translate-x-6 shadow-md shadow-[#0C0C0D80]"
      />
    </div>
  )
}
