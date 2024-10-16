import Info from '../../assets/icons/Info'
import Card from '../_ui/card/card'
import Label from '../_ui/label'

export default function CardGroup() {
  return (
    <div className="flex flex-col gap-20">
      {/* Horizontal Cards */}
      <div className="flex flex-row items-center gap-10">
        <Label variant="group">Horizontal</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Icon</Label>
            <div className="flex flex-row gap-10">
              <Card media={<Info height="32" width="32" />} variant="stroke">
                <h1 className="font-inter text-2xl font-semibold text-[#1E1E1E]">
                  Title
                </h1>
                <span className="font-inter text-base font-normal text-[#757575]">
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </span>
              </Card>

              <Card media={<Info height="32" width="32" />}>
                <h1 className="font-inter text-2xl font-semibold text-[#1E1E1E]">
                  Title
                </h1>
                <span className="font-inter text-base font-normal text-[#757575]">
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </span>
              </Card>
            </div>
          </div>
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Image</Label>
            <div className="flex flex-row gap-10">
              <Card
                media={'https://github.com/MatheusFilg.png'}
                variant="stroke"
              >
                <h1 className="font-inter text-2xl font-semibold text-[#1E1E1E]">
                  Title
                </h1>
                <span className="font-inter text-base font-normal text-[#757575]">
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </span>
              </Card>

              <Card media={'https://github.com/MatheusFilg.png'}>
                <h1 className="font-inter text-2xl font-semibold text-[#1E1E1E]">
                  Title
                </h1>
                <span className="font-inter text-base font-normal text-[#757575]">
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </span>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Cards */}
      <div className="flex translate-x-5 flex-row items-center gap-10">
        <Label variant="group">Vertical</Label>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Icon</Label>
            <div className="flex flex-row gap-10">
              <Card
                media={<Info height="32" width="32" />}
                direction="column"
                variant="stroke"
              >
                <h1 className="font-inter text-2xl font-semibold text-[#1E1E1E]">
                  Title
                </h1>
                <span className="font-inter text-base font-normal text-[#757575]">
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </span>
              </Card>

              <Card media={<Info height="32" width="32" />} direction="column">
                <h1 className="font-inter text-2xl font-semibold text-[#1E1E1E]">
                  Title
                </h1>
                <span className="font-inter text-base font-normal text-[#757575]">
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </span>
              </Card>
            </div>
          </div>

          <div className="flex flex-row items-center gap-6 align-middle">
            <Label>Image</Label>
            <div className="flex flex-row gap-10">
              <Card
                media={'https://github.com/MatheusFilg.png'}
                variant="stroke"
                direction="column"
              >
                <h1 className="font-inter text-2xl font-semibold text-[#1E1E1E]">
                  Title
                </h1>
                <span className="font-inter text-base font-normal text-[#757575]">
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </span>
              </Card>

              <Card
                media={'https://github.com/MatheusFilg.png'}
                direction="column"
              >
                <h1 className="font-inter text-2xl font-semibold text-[#1E1E1E]">
                  Title
                </h1>
                <span className="font-inter text-base font-normal text-[#757575]">
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </span>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
