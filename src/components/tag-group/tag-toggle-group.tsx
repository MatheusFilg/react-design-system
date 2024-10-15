import Cancel from '../../assets/icons/Cancel'
import Label from '../_ui/label'
import TagToggle from '../_ui/tag/tag-toggle'

export default function TagToggleGroup() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex translate-x-5 flex-row items-center gap-10">
        <Label variant="group">Toggle</Label>
        <div>
          <TagToggle
            quantity={5}
            icon={<Cancel color="#FFFFFF" width="16" height="16" />}
          >
            Tag
          </TagToggle>
        </div>
      </div>
    </div>
  )
}
