import ButtonDangerGroup from './components/button-danger-group'
import ButtonGroup from './components/button-group'
import ButtonIconGroup from './components/button-icon-group'

export default function App() {
  return (
    <div className="flex h-screen w-screen flex-row gap-16 p-8">
      <ButtonGroup />
      <ButtonDangerGroup />
      <ButtonIconGroup />
    </div>
  )
}
