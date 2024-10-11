import Avatar, { AvatarProps } from './avatar'

interface AvatarBlockProps extends AvatarProps {
  title: string
  description: string
}

export default function AvatarBlock({
  title,
  description,
  src,
  type,
}: AvatarBlockProps) {
  return (
    <div className="flex flex-row items-center gap-3">
      <Avatar src={src} type={type} />
      <div className="flex flex-col gap-0.5 font-inter text-base">
        <h1 className="font-semibold text-[#757575]">{title}</h1>
        <p className="font-normal text-[#B3B3B3]">{description}</p>
      </div>
    </div>
  )
}
