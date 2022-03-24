export interface DayLineProps {
    days?: string
    content?: string
}

function DayLine({ days, content }: DayLineProps) {
  return (
    <div className="flex justify-between border-t-2 p-2">
      <p className="w-1/2 md:w-2/3">{days}</p>
      <p>{content}</p>
    </div>
  )
}

export interface DayLinesProps {
    lines?: any
}

export default function DayLines({ lines }: DayLinesProps) {
    return (
      <div>
        {lines.map((dayline: any) => (
          <DayLine
            days={dayline.days.rendered}
            content={dayline.content.rendered}
          />
        ))}
      </div>
    )
}
