import ButtonDangerGroup from './components/button-danger-group'
import ButtonGroup from './components/button-group'
import ButtonIconGroup from './components/button-icon-group'
import ButtonMultipleGroup from './components/button-multiple-group'

export default function App() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex flex-row gap-16 p-6">
        <ButtonGroup />
        <ButtonDangerGroup />
        <ButtonIconGroup />
      </div>
      <div className="flex flex-row gap-16 p-6">
        <ButtonMultipleGroup />
      </div>
    </div>
  )
}
