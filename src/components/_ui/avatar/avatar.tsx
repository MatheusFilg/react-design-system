interface AvatarProps {
  size?: 'small' | 'medium' | 'large'
  format?: 'square' | 'circle'
  src?: string
}

export default function Avatar(props: AvatarProps) {
  const { src } = props

  return (
    <div className="">
      {src ? (
        <img src={src} alt="" className="h-10 w-10 rounded" />
      ) : (
        <p className="flex h-10 w-10 items-center justify-center rounded bg-black text-white">
          M
        </p>
      )}
    </div>
  )
}
