import { Clock } from '../../assets/icons/Clock'
import CardStats from '../_ui/card/card-stats'
import CardTestimonial from '../_ui/card/card-testimonial'
import Label from '../_ui/label'

export default function CardVarietyGroup() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row items-center gap-10">
        <Label variant="group">Variety</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-10 align-middle">
            <Label>Testimonial</Label>
            <div className="flex flex-row gap-10 align-middle">
              <CardTestimonial description="“Quote”" />
              <CardTestimonial description="Olá Mundo :)" direction="column" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-10">
        <Label variant="group">Variety</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-10 align-middle">
            <Label>Stats</Label>
            <div className="flex flex-row gap-10 align-middle">
              <CardStats>
                <Clock width="40" height="40" />
                <h1 className="font-inter text-2xl font-semibold">100</h1>
                <p className="font-inter text-base font-normal">Body Text</p>
              </CardStats>
              <CardStats direction="row">
                <Clock width="40" height="40" />
                <h1 className="font-inter text-2xl font-semibold">100</h1>
                <p className="font-inter text-base font-normal">Body Text</p>
              </CardStats>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
