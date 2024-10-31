import Tooltip from '../_ui/tooltip/tooltip'

export default function TooltipGroup() {
  return (
    <div className="flex flex-col gap-10 p-6">
      <Tooltip>
        <h1 className="font-inter text-base font-semibold">Title</h1>
        <p className="font-inter text-sm font-normal">Body Text</p>
      </Tooltip>
    </div>
  )
}
