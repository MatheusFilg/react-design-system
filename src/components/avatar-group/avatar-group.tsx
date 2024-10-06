import Avatar from '../_ui/avatar/avatar'
import Label from '../_ui/label'

export default function AvatarGroup() {
  return (
    <div className="flex flex-col gap-10">
      {/* Large Avatar */}
      <div className="flex translate-x-2 flex-row items-center gap-10">
        <Label variant="group">Large</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Circle</Label>
            <div className="flex gap-14">
              <Avatar
                src="https://github.com/MatheusFilg.png"
                size="large"
                format="circle"
              />
              <Avatar size="large" format="circle" />
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Square</Label>
            <div className="flex translate-x-6 flex-row gap-14">
              <Avatar
                src="https://github.com/MatheusFilg.png"
                size="large"
                format="square"
              />
              <Avatar size="large" format="square" />
            </div>
          </div>
        </div>
      </div>

      {/* Medium Avatar */}
      <div className="flex flex-row items-center gap-10">
        <Label variant="group">Medium</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Circle</Label>
            <div className="flex gap-14">
              <Avatar
                src="https://github.com/MatheusFilg.png"
                size="medium"
                format="circle"
              />
              <Avatar size="medium" format="circle" />
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Square</Label>
            <div className="flex translate-x-6 flex-row gap-14">
              <Avatar
                src="https://github.com/MatheusFilg.png"
                size="medium"
                format="square"
              />
              <Avatar size="medium" format="square" />
            </div>
          </div>
        </div>
      </div>

      {/* Small Avatar */}
      <div className="flex translate-x-2 flex-row items-center gap-10">
        <Label variant="group">Small</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Circle</Label>
            <div className="flex translate-x-4 gap-14">
              <Avatar
                src="https://github.com/MatheusFilg.png"
                size="small"
                format="circle"
              />
              <Avatar size="small" format="circle" />
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Square</Label>
            <div className="flex translate-x-10 flex-row gap-14">
              <Avatar
                src="https://github.com/MatheusFilg.png"
                size="small"
                format="square"
              />
              <Avatar size="small" format="square" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center align-middle">
        <div className="w-52" />
        <div className="flex -translate-y-10 translate-x-16 flex-row gap-10">
          <div className="flex items-center gap-1">
            <Label variant="vertical">Image</Label>
            <Label variant="vertical">Initial</Label>
          </div>
        </div>
      </div>
    </div>
  )
}
