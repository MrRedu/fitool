import { Typography } from '../ui/typography'
import Link from 'next/link'
import Image from 'next/image'

interface CatalogGridProps {
  title: string
  items: {
    href: string
    name: string
    imgSrc: string
  }[]
}

export const CatalogGrid = ({ title, items }: CatalogGridProps) => {
  return (
    <div className="space-y-4">
      <Typography variant="h2" className="border-none">
        {title}
      </Typography>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(({ href, name, imgSrc }) => (
          <li key={href}>
            <Link href={href} className="space-y-2">
              <Image
                width={300}
                height={300}
                src={imgSrc}
                alt={name}
                className="rounded-md border h-40 w-full object-cover"
              />
              <Typography variant="muted">{name}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
