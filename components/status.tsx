export interface StatusProps {
  source?: string,
  title?: string
}
export default function Status({ source, title }: StatusProps) {
  return (
    <div className="my-4 flex h-12 justify-center rounded bg-status-success-light md:mx-2">
      <img src={source} alt="" className="w-6" />
      <p className="pt-2 px-2 text-center text-xl md:w-1/3 md:px-0 md:pt-1 md:text-2xl">
        {title}
      </p>
    </div>
  )
}

Status.defaultProps = {
  source: '/checkgreen.svg',
  title: 'Shifter Operational',
}
