import Button from './ui/button'
import Label from './ui/label'

export default function ButtonGroup() {
  return (
    <div className="flex flex-col gap-10 p-8">
      {/* Medium Buttons */}
      <div className="flex flex-row gap-10">
        <Label variant="group">Medium</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Primary</Label>
            <div className="flex flex-row gap-10">
              <Button variant="primary">Button</Button>
              <Button disabled>Button</Button>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Neutral</Label>
            <div className="flex translate-x-6 flex-row gap-10">
              <Button variant="neutral">Button</Button>
              <Button disabled>Button</Button>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Ghost</Label>
            <div className="flex translate-x-6 flex-row gap-10">
              <Button variant="ghost">Button</Button>
              <Button disabled>Button</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Small Buttons */}
      <div className="flex flex-row gap-10">
        <Label variant="group">Small</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center align-middle">
            <Label>Primary</Label>
            <div className="flex translate-x-6 flex-row gap-10">
              <Button variant="primary" size="small">
                Button
              </Button>
              <Button disabled size="small">
                Button
              </Button>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Neutral</Label>
            <div className="flex translate-x-6 flex-row gap-10">
              <Button variant="neutral" size="small">
                Button
              </Button>
              <Button disabled size="small">
                Button
              </Button>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Ghost</Label>
            <div className="flex translate-x-6 flex-row gap-10">
              <Button variant="ghost" size="small">
                Button
              </Button>
              <Button disabled size="small">
                Button
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center align-middle">
        <div className="w-52" />
        <div className="flex -translate-y-10 translate-x-14 flex-row gap-8">
          <div className="flex items-center">
            <Label variant="vertical">Default</Label>
          </div>
          <div>
            <Label variant="vertical">Disabled</Label>
          </div>
        </div>
      </div>
    </div>
  )
}
