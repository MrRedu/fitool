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
          <li key={href} className="h-full aspect-video">
            <Link href={href} className="space-y-2h-full w-full">
              <Image
                width={400}
                height={400}
                src={imgSrc}
                alt={name}
                className="rounded-md border w-full object-cover"
              />
              <Typography variant="muted">{name}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
