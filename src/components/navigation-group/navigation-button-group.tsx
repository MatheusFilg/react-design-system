import Label from '../_ui/label'
import Navigation from '../_ui/navigation/navigation'

export default function NavigationButtonGroup() {
  return (
    <div className="flex flex-col gap-10">
      {/* Medium Navigation */}
      <div className="flex flex-row items-center gap-10">
        <Label variant="group">Medium</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Row</Label>
            <div className="flex gap-10">
              <Navigation href="a" size="medium">
                Label
              </Navigation>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Column</Label>
            <div className="flex translate-x-10 flex-row gap-10">
              <Navigation href="a" direction="column" size="medium">
                Label
              </Navigation>
            </div>
          </div>
        </div>
      </div>

      {/* Small Navigation */}
      <div className="flex translate-x-2 flex-row items-center gap-10">
        <Label variant="group">Small</Label>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Row</Label>
            <div className="flex flex-row gap-10">
              <Navigation href="a">Label</Navigation>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Column</Label>
            <div className="flex translate-x-10 flex-row gap-10">
              <Navigation href="a" direction="column">
                Label
              </Navigation>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center align-middle">
        <div className="w-52" />
        <div className="flex -translate-y-10 translate-x-14 flex-row gap-10">
          <div className="flex items-center">
            <Label variant="vertical">Default</Label>
          </div>
        </div>
      </div>
    </div>
  )
}
