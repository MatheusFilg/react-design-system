import ButtonDanger from './ui/button-danger'
import Label from './ui/label'

export default function ButtonDangerGroup() {
  return (
    <div className="flex flex-col gap-10">
      {/* Medium Buttons */}
      <div className="flex flex-row gap-10">
        <Label variant="group">Medium</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Primary</Label>
            <div className="flex flex-row gap-10">
              <ButtonDanger variant="primary">Button</ButtonDanger>
              <ButtonDanger disabled>Button</ButtonDanger>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Ghost</Label>
            <div className="flex translate-x-6 flex-row gap-10">
              <ButtonDanger variant="ghost">Button</ButtonDanger>
              <ButtonDanger disabled>Button</ButtonDanger>
            </div>
          </div>
        </div>
      </div>

      {/* Small Buttons */}
      <div className="flex translate-x-2 flex-row items-center gap-10">
        <Label variant="group">Small</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Primary</Label>
            <div className="flex flex-row gap-14">
              <ButtonDanger size="small" variant="primary">
                Button
              </ButtonDanger>
              <ButtonDanger size="small" disabled>
                Button
              </ButtonDanger>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Ghost</Label>
            <div className="flex translate-x-6 flex-row gap-14">
              <ButtonDanger size="small" variant="ghost">
                Button
              </ButtonDanger>
              <ButtonDanger size="small" disabled>
                Button
              </ButtonDanger>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center align-middle">
        <div className="w-52" />
        <div className="flex -translate-y-10 translate-x-16 flex-row gap-6">
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
