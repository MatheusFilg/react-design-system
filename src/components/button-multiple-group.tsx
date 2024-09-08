import ButtonMultiple from './ui/button-multiple'
import Label from './ui/label'

export default function ButtonMultipleGroup() {
  return (
    <div className="flex flex-col gap-10">
      {/* Direction Buttons */}
      <div className="flex flex-row items-center gap-10">
        <Label variant="group">Direction</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Row</Label>
            <ButtonMultiple direction="row">Button</ButtonMultiple>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Column</Label>
            <div className="flex translate-x-6 flex-row gap-10">
              <ButtonMultiple direction="column">Button</ButtonMultiple>
            </div>
          </div>
        </div>
      </div>

      {/* Align Buttons */}
      <div className="flex translate-x-10 flex-row items-center gap-10">
        <Label variant="group">Align</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Start</Label>
            <ButtonMultiple>Button</ButtonMultiple>
          </div>

          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Center</Label>
            <ButtonMultiple align="center">Button</ButtonMultiple>
          </div>

          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>End</Label>
            <ButtonMultiple align="end">Button</ButtonMultiple>
          </div>
        </div>
      </div>
    </div>
  )
}
