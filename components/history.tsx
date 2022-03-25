import moment from 'moment'
import DayLines from './dayline'

export interface HistoryProps {
  percentUp: string
  days: number
  content: string
}

export default function History({ percentUp, days, content }: HistoryProps) {
    const pastWeek = [...new Array(days)].map((i, idx) => {
      return {
        days: {
          rendered: `${moment().startOf('day').subtract(idx, 'days').format('dddd, MMMM Do')}`,
        },
        content: {
          rendered: content,
        },
      }
    })

  return (
    <section className="rounded border-2">
      <h2 className="w-full border-b-2 py-2 px-4 font-semibold hover:text-purple-primary">
        <a href="/history">Status History</a>
      </h2>
      <div className="flex h-auto flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2">
          <div className="my-6 mx-auto flex h-60 w-60 flex-wrap content-center rounded-full border-2 border-status-success-primary md:h-72 md:w-72 md:my-10">
            <p className="w-full py-2 text-center text-4xl font-bold">
              {percentUp}
            </p>
            <p className="w-full text-center text-gray-400">
              Uptime over the last 90 days
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="my-4 mx-auto w-5/6 border-2 rounded">
            <div className="flex justify-between">
              <h3 className="px-4 py-2 font-semibold">Date</h3>
              <h3 className="px-4 py-2 font-semibold">Reported Issues</h3>
            </div>
            <DayLines lines={pastWeek} />
          </div>
        </div>
      </div>
    </section>
  )
}

History.defaultProps = {
  percentUp: '99.8%',
  days: 7,
  content: 'None',
}
