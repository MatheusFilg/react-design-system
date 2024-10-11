import AvatarBlockGroup from '../components/avatar-group/avatar-block-group'
import AvatarGroup from '../components/avatar-group/avatar-group'
import AvatarListGroup from '../components/avatar-group/avatar-list-group'

export default function AvatarPage() {
  return (
    <div className="flex h-screen w-screen flex-row gap-64 p-6">
      <AvatarGroup />
      <AvatarListGroup />
      <AvatarBlockGroup />
    </div>
  )
}
