import Tag from '../../assets/icons/Tag'
import Label from '../_ui/label'
import Navigation from '../_ui/navigation/navigation'

export default function NavigationListGroup() {
  return (
    <div className="flex flex-col gap-8 pt-24">
      <div className="flex flex-row items-center gap-10">
        <Label variant="group">List</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Row</Label>
            <div className="flex gap-4">
              <Navigation
                href="a"
                size="medium"
                direction="column"
                icon={<Tag className="group-active:stroke-[#2C2C2C]" />}
              >
                Label
              </Navigation>
              <Navigation
                href="a"
                size="medium"
                direction="column"
                icon={<Tag className="group-active:stroke-[#2C2C2C]" />}
              >
                Label
              </Navigation>
              <Navigation
                href="a"
                size="medium"
                direction="column"
                icon={<Tag className="group-active:stroke-[#2C2C2C]" />}
              >
                Label
              </Navigation>
              <Navigation
                href="a"
                size="medium"
                direction="column"
                icon={<Tag className="group-active:stroke-[#2C2C2C]" />}
              >
                Label
              </Navigation>
              <Navigation
                href="a"
                size="medium"
                direction="column"
                icon={<Tag className="group-active:stroke-[#2C2C2C]" />}
              >
                Label
              </Navigation>
            </div>
          </div>

          <div className="flex flex-row items-center align-middle">
            <Label>Column</Label>
            <div className="flex translate-x-10 flex-col gap-4">
              <Navigation
                href="a"
                size="medium"
                icon={<Tag className="group-active:stroke-[#2C2C2C]" />}
              >
                Label
              </Navigation>
              <Navigation
                href="a"
                size="medium"
                icon={<Tag className="group-active:stroke-[#2C2C2C]" />}
              >
                Label
              </Navigation>
              <Navigation
                href="a"
                size="medium"
                icon={<Tag className="group-active:stroke-[#2C2C2C]" />}
              >
                Label
              </Navigation>
              <Navigation
                href="a"
                size="medium"
                icon={<Tag className="group-active:stroke-[#2C2C2C]" />}
              >
                Label
              </Navigation>
              <Navigation
                href="a"
                size="medium"
                icon={<Tag className="group-active:stroke-[#2C2C2C]" />}
              >
                Label
              </Navigation>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
