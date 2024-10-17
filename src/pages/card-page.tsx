import CardGroup from '../components/card-group/card-group'
import CardVarietyleGroup from '../components/card-group/card-variety-group'

export default function CardPage() {
  return (
    <div className="flex h-screen w-screen flex-col gap-32 p-6">
      <CardGroup />
      <CardVarietyleGroup />
    </div>
  )
}
