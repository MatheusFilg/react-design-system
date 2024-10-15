import Cancel from '../../assets/icons/Cancel'
import Label from '../_ui/label'
import Tag from '../_ui/tag/tag'

export default function TagGroup() {
  return (
    <div className="flex flex-col gap-10">
      {/* Primary Buttons */}
      <div className="flex translate-x-5 flex-row items-center gap-10">
        <Label variant="group">Primary</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Default</Label>
            <div className="flex flex-row gap-10">
              <Tag icon={<Cancel color="#FFFFFF" width="16" height="16" />}>
                Tag
              </Tag>

              <Tag
                type="danger"
                icon={<Cancel color="#FFFFFF" width="16" height="16" />}
              >
                Tag
              </Tag>

              <Tag
                type="success"
                icon={<Cancel color="#FFFFFF" width="16" height="16" />}
              >
                Tag
              </Tag>

              <Tag type="warning" icon={<Cancel width="16" height="16" />}>
                Tag
              </Tag>

              <Tag type="neutral" icon={<Cancel width="16" height="16" />}>
                Tag
              </Tag>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div className="flex flex-row items-center gap-10">
        <Label variant="group">Secondary</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Default</Label>
            <div className="flex flex-row gap-10">
              <Tag variant="secondary" icon={<Cancel width="16" height="16" />}>
                Tag
              </Tag>

              <Tag
                variant="secondary"
                type="danger"
                icon={<Cancel color="#900B09" width="16" height="16" />}
              >
                Tag
              </Tag>

              <Tag
                variant="secondary"
                type="success"
                icon={<Cancel color="#02542D" width="16" height="16" />}
              >
                Tag
              </Tag>

              <Tag
                variant="secondary"
                type="warning"
                icon={<Cancel color="#401B01" width="16" height="16" />}
              >
                Tag
              </Tag>

              <Tag
                variant="secondary"
                type="neutral"
                icon={<Cancel width="16" height="16" />}
              >
                Tag
              </Tag>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center align-middle">
        <div className="w-52" />
        <div className="flex -translate-y-10 translate-x-24 flex-row gap-10">
          <div className="flex items-center gap-7">
            <Label variant="vertical">Brand</Label>
            <Label variant="vertical">Danger</Label>
            <Label variant="vertical">Success</Label>
            <Label variant="vertical">Warning</Label>
            <Label variant="vertical">Neutral</Label>
          </div>
        </div>
      </div>
    </div>
  )
}
