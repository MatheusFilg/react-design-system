import Button from './components/button'
import Label from './components/label'

export default function App() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex flex-row items-center gap-6 align-middle">
        <Label>Primary</Label>
        <div className="flex flex-row gap-10">
          <Button variant="primary">Button</Button>
          <Button disabled>Button</Button>
        </div>
      </div>

      <div className="flex flex-row items-center align-middle">
        <Label>Neutral</Label>
        <div className="flex translate-x-6 flex-row gap-10">
          <Button variant="neutral">Button</Button>
          <Button disabled>Button</Button>
        </div>
      </div>

      <div className="flex flex-row items-center align-middle">
        <Label>Ghost</Label>
        <div className="flex translate-x-6 flex-row gap-10">
          <Button variant="ghost">Button</Button>
          <Button disabled>Button</Button>
        </div>
      </div>

      <div className="flex flex-row items-center align-middle">
        <Label>Primary</Label>
        <div className="flex translate-x-6 flex-row gap-10">
          <Button variant="primary" size="small">
            Button
          </Button>
          <Button disabled size="small">
            Button
          </Button>
        </div>
      </div>

      <div className="flex flex-row items-center align-middle">
        <Label>Neutral</Label>
        <div className="flex translate-x-6 flex-row gap-10">
          <Button variant="neutral" size="small">
            Button
          </Button>
          <Button disabled size="small">
            Button
          </Button>
        </div>
      </div>

      <div className="flex flex-row items-center align-middle">
        <Label>Ghost</Label>
        <div className="flex translate-x-6 flex-row gap-10">
          {/* <div className="flex flex-col items-center gap-5">
          </div> */}
          <Button variant="ghost" size="small">
            Button
          </Button>
          {/* <Label variant="vertical">Vertical</Label> */}
          <Button disabled size="small">
            Button
          </Button>
        </div>
      </div>

      <div className="flex flex-row items-center align-middle">
        <div className="h-8 w-24" />
        <div className="flex translate-x-6 flex-row gap-8">
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
