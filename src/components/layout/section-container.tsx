import { cn } from '@/lib/utils'

interface SectionContainerProps {
  verticalPadding?: string
  as?: 'div' | 'section'
  className?: string
  id?: string
  children?: React.ReactNode
}

export const SectionContainer = ({
  className,
  verticalPadding = 'py-32',
  as = 'div',
  id = '',
  children,
  ...props
}: SectionContainerProps) => {
  const Component = as

  return (
    <Component
      id={id}
      className={cn(
        'mx-auto container w-full px-4 md:px-6 lg:px-8',
        verticalPadding,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
