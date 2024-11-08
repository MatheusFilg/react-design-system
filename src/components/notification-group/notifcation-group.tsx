import Label from '../_ui/label'
import Notification from '../_ui/notification/notification'

export default function NotificationGroup() {
  return (
    <div className="flex flex-col gap-10 p-6">
      <div className="flex flex-row gap-10">
        <Label variant="group">Notification</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Default</Label>
            <div className="flex flex-row gap-10">
              <Notification title="Title" text="Body Text" />
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Alert</Label>
            <div className="flex translate-x-6 flex-row gap-10">
              <Notification title="Title" text="Body Text" variant="alert" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
