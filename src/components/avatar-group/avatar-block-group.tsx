import AvatarBlock from '../_ui/avatar/avatar-block'
import Label from '../_ui/label'

export default function AvatarBlockGroup() {
  return (
    <div className="flex flex-col">
      <div className="flex translate-x-2 flex-row items-center gap-10">
        <Label variant="group">Block</Label>
        <div className="flex flex-col items-center gap-8 align-middle">
          <AvatarBlock title="Title" description="Description" />
          <AvatarBlock
            title="Title"
            description="Description"
            src="https://github.com/MatheusFilg.png"
            type="image"
          />
        </div>
      </div>
    </div>
  )
}
