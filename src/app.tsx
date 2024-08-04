import Button from './components/button'
import Label from './components/label'

export default function App() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex flex-row items-center align-middle">
        <Label>Primary</Label>
        <div className="flex translate-x-6 flex-row gap-10">
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
    </div>
  )
}
