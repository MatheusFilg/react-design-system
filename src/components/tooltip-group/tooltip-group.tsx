import Label from '../_ui/label'
import Tooltip from '../_ui/tooltip/tooltip'

export default function TooltipGroup() {
  return (
    <div className="flex flex-col gap-10 p-6">
      <div className="flex flex-row gap-10">
        <Label variant="group">Default</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Bottom</Label>
            <div className="flex flex-row gap-10">
              <Tooltip direction="bottom">
                <h1 className="font-inter text-base font-semibold">Title</h1>
                <p className="font-inter text-sm font-normal">Body Text</p>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Top</Label>
            <div className="flex translate-x-6 flex-row gap-10">
              <Tooltip direction="top">
                <h1 className="font-inter text-base font-semibold">Title</h1>
                <p className="font-inter text-sm font-normal">Body Text</p>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Left</Label>
            <div className="flex translate-x-6 flex-row gap-10">
              <Tooltip direction="left">
                <h1 className="font-inter text-base font-semibold">Title</h1>
                <p className="font-inter text-sm font-normal">Body Text</p>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Right</Label>
            <div className="flex translate-x-6 flex-row gap-10">
              <Tooltip direction="right">
                <h1 className="font-inter text-base font-semibold">Title</h1>
                <p className="font-inter text-sm font-normal">Body Text</p>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
