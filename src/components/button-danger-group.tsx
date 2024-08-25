import ButtonDanger from './ui/button-danger'

export default function ButtonDangerGroup() {
  return (
    <div className="flex flex-row gap-2">
      <div>
        <ButtonDanger>Button</ButtonDanger>
        <ButtonDanger disabled>Button</ButtonDanger>
        <ButtonDanger size="small">Button</ButtonDanger>
      </div>
      <div>
        <ButtonDanger variant="ghost">Button</ButtonDanger>
      </div>
    </div>
  )
}
