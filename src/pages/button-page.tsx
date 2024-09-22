import ButtonDangerGroup from '../components/buttons-group/button-danger-group'
import ButtonGroup from '../components/buttons-group/button-group'
import ButtonIconGroup from '../components/buttons-group/button-icon-group'
import ButtonMultipleGroup from '../components/buttons-group/button-multiple-group'

export function ButtonPage() {
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
