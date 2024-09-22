import Star from '../../assets/icons/Star'
import ButtonIcon from '../ui/button/button-icon'
import Label from '../ui/label'

export default function ButtonIconGroup() {
  return (
    <div className="flex flex-col gap-10">
      {/* Medium Buttons */}
      <div className="flex flex-row gap-10">
        <Label variant="group">Medium</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Primary</Label>
            <div className="flex flex-row gap-14">
              <ButtonIcon variant="primary">
                <Star color="#FFFFFF" />
              </ButtonIcon>
              <ButtonIcon disabled>
                <Star color="#B3B3B3" />
              </ButtonIcon>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Neutral</Label>
            <div className="flex translate-x-6 flex-row gap-14">
              <ButtonIcon variant="neutral">
                <Star color="#1E1E1E" />
              </ButtonIcon>
              <ButtonIcon disabled>
                <Star color="#B3B3B3" />
              </ButtonIcon>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Ghost</Label>
            <div className="flex translate-x-6 flex-row gap-14">
              <ButtonIcon variant="ghost">
                <Star color="#1E1E1E" />
              </ButtonIcon>
              <ButtonIcon disabled>
                <Star color="#B3B3B3" />
              </ButtonIcon>
            </div>
          </div>
        </div>
      </div>

      {/* Small Buttons */}
      <div className="flex translate-x-2 flex-row gap-10">
        <Label variant="group">Small</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center align-middle">
            <Label>Primary</Label>
            <div className="flex translate-x-8 flex-row gap-16">
              <ButtonIcon variant="primary" size="small">
                <Star color="#FFFFFF" />
              </ButtonIcon>
              <ButtonIcon disabled size="small">
                <Star color="#B3B3B3" />
              </ButtonIcon>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Neutral</Label>
            <div className="flex translate-x-8 flex-row gap-16">
              <ButtonIcon variant="neutral" size="small">
                <Star color="#1E1E1E" />
              </ButtonIcon>
              <ButtonIcon disabled size="small">
                <Star color="#B3B3B3" />
              </ButtonIcon>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Ghost</Label>
            <div className="flex translate-x-8 flex-row gap-16">
              <ButtonIcon variant="ghost" size="small">
                <Star color="#1E1E1E" />
              </ButtonIcon>
              <ButtonIcon disabled size="small">
                <Star color="#B3B3B3" />
              </ButtonIcon>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center align-middle">
        <div className="w-52" />
        <div className="flex -translate-y-10 translate-x-14 flex-row gap-2">
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
