export interface ContainerProps {
  className?: string
  children?: any
}

export default function Container({ className, children }: ContainerProps) {
  return <div className={className}>{children}</div>
}

Container.defaultProps = {
  className: 'container mx-auto',
}
