/* eslint-disable @next/next/no-img-element */

export default function Services() {
  return (
    <article className="w-full rounded border-2 p-3">
      <div className="mb-3 flex justify-between rounded bg-status-success-light py-2 md:py-4">
        <p className="px-3 md:px-5">API</p>
        <img src="/check.svg" className="px-3 md:px-5" alt="system status indication icon" />
      </div>
      <div className="mb-3 flex justify-between rounded bg-status-success-light py-2 md:py-4">
        <p className="px-3 md:px-5">CDN</p>
        <img src="/check.svg" className="px-3 md:px-5" alt="system status indication icon" />
      </div>
      <div className="mb-3 flex justify-between rounded bg-status-success-light py-2 md:py-4">
        <p className="px-3 md:px-5">DNS</p>
        <img src="/check.svg" className="px-3 md:px-5" alt="system status indication icon" />
      </div>
      <div className="flex justify-between rounded bg-status-success-light py-2 md:py-4">
        <p className="px-3 md:px-5">Site delivery</p>
        <img src="/check.svg" className="px-3 md:px-5" alt="system status indication icon" />
      </div>
    </article>
  )
}
