import moment from 'moment'
import Posts from './posts'
export interface PostProps {
  title?: string
  content?: string
}

export default function Updates() {
  const lastThirtyDays = [...new Array(30)].map((i, idx) => {
    return {
      title: {
        rendered: `${moment().startOf('day').subtract(idx, 'days')}`,
      },
      content: {
        rendered: 'No incidents reported.',
      },
    }
  })

  return <Posts title="History" posts={lastThirtyDays} />
}
