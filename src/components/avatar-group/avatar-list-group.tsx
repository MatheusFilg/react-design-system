import AvatarList from '../_ui/avatar/avatar-list'
import Label from '../_ui/label'

export default function AvatarListGroup() {
  return (
    <div className="flex flex-col gap-10">
      {/* AvatarList */}
      <div className="flex translate-x-2 flex-row items-center gap-10">
        <Label variant="group">Group</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Spaced</Label>
            <div className="flex gap-14">
              <AvatarList gap="spaced" />
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Overlap</Label>
            <div className="flex translate-x-6 flex-row">
              <AvatarList gap="overlap" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
