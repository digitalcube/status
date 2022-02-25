import moment from 'moment'
export interface PostProps {
  title?: string
  content?: string
}

function Post({ title, content }: PostProps) {
  return (
    <article className="my-5 rounded p-2 shadow-md">
      <h2>{title}</h2>
      {content}
    </article>
  )
}

export default function Updates() {
  const lastThirtyDays = [...new Array(30)].map((i, idx) =>
    moment().startOf('day').subtract(idx, 'days')
  )

  return (
    <section className="w-full pb-6">
      <h1 className="text-center text-3xl">Status History</h1>
      {lastThirtyDays.map((item, i) => {
        return <Post key={i} title={`${item}`} />
      })}
    </section>
  )
}
