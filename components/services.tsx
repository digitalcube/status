/* eslint-disable @next/next/no-img-element */

export interface ServicesProps {
  service?: any
}

const statusIcons = ['/checkgreen.svg', '/warning.svg', '/error.svg'];

export default function Services({service}: ServicesProps) {
  return (
    <article className="flex w-full flex-wrap justify-between py-3 md:flex-nowrap">
      {service.map((item: any) => (
        <div className="mb-3 flex w-full justify-center rounded border-2 border-status-success-primary py-2 md:w-1/4 md:mx-2">
          <img
            src={item.source}
            className="w-6 h-6"
            alt="system status indication icon"
          />
          <p className="px-3">{item.title}</p>
        </div>
      ))}
    </article>
  )
}

Services.defaultProps = {
  service: [
    {
      source: statusIcons[0],
      title: 'API',
    },
    {
      source: statusIcons[0],
      title: 'CDN',
    },
    {
      source: statusIcons[0],
      title: 'DNS',
    },
    {
      source: statusIcons[0],
      title: 'Site Delivery',
    },
  ],
}