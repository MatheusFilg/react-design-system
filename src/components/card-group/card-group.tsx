import Card from '../_ui/card/card'

export default function CardGroup() {
  return (
    <div>
      <div className="w-[440px]">
        <Card>
          <h1>Title</h1>
          <span>
            Body text for whatever you do like to say. Add main takeaway points,
            quotes, anecdotes, or even a very very short story.{' '}
          </span>
        </Card>
      </div>
    </div>
  )
}
