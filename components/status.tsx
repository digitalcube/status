export interface StatusProps {
  title?: string
}
export default function Status({ title }: StatusProps) {
  return (
    <div className="my-4 flex h-12 w-full content-center rounded bg-status-success-primary">
      <p className="mx-auto pt-2 text-center text-xl text-white md:pt-1 md:text-2xl">
        Operational
      </p>
    </div>
  )
}

Status.defaultProps = {
  title: 'Operational',
}
