import Avatar from '../_ui/avatar/avatar'
import Label from '../_ui/label'

export default function AvatarGroup() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row items-center gap-10">
        <Label variant="group">Medium</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Row</Label>
            <div className="flex gap-10">
              <Avatar src="https://github.com/MatheusFilg.png" />
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Column</Label>
            <div className="flex translate-x-10 flex-row gap-10"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
