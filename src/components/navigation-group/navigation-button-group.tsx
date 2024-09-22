import Label from '../_ui/label'
import Navigation from '../_ui/navigation/navigation'

export default function NavigationButtonGroup() {
  return (
    <div className="flex flex-row items-center gap-10">
      <Label variant="group">Medium</Label>

      <div className="flex flex-col gap-10">
        <div className="flex flex-row items-center gap-6 align-middle">
          <Label>Row</Label>
          <div className="flex flex-row gap-10">
            <Navigation href="a">Label</Navigation>
            <Navigation href="a">Label</Navigation>
          </div>
        </div>

        <div className="flex flex-row items-center align-middle">
          <Label>Column</Label>
          <div className="flex translate-x-6 flex-row gap-10">
            <Navigation href="a">Label</Navigation>
            <Navigation href="a">Label</Navigation>
          </div>
        </div>
      </div>
    </div>
  )
}
