import moment from 'moment'
import Posts from './posts'
export interface PostProps {
  title?: string
  content?: string
  days?: number
}

export default function Updates({ days, content }: PostProps) {
  const lastThirtyDays = [...new Array(days)].map((i, idx) => {
    return {
      title: {
        rendered: `${moment().startOf('day').subtract(idx, 'days')}`,
      },
      content: {
        rendered: content,
      },
    }
  })

  return <Posts title="History" posts={lastThirtyDays} />
}

Updates.defaultProps = {
  days: 30,
  content: 'None',
}