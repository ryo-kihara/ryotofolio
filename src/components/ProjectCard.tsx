import Image from 'next/image'
import Link from 'next/link'

import Markdown from 'react-markdown'

import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'

import { cn } from '@/lib/utils'

interface Props {
  className?: string
  thumbnail: {
    className?: string
    src: string
    width?: number
    height?: number
  }
  title: string
  href?: string
  description: string
  dates: string
  tags: readonly string[]
  links?: readonly {
    icon?: React.ElementType
    type: string
    href: string
  }[]
}

export function ProjectCard({ className, thumbnail, title, href, description, dates, tags, links }: Props) {
  return (
    <Card
      className={cn(
        'flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg',
        className,
      )}
    >
      <Link href={href || '#'} className={'flex cursor-pointer items-center justify-center'}>
        <Image
          className={cn('object-cover', thumbnail.className)}
          src={thumbnail.src}
          alt={title}
          width={thumbnail.width ?? 500}
          height={thumbnail.height ?? 300}
        />
      </Link>
      <CardHeader className="px-2 py-0">
        <div className="space-y-2">
          <hgroup className="flex flex-col">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
          </hgroup>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex h-[inherit] flex-col px-2 pb-1 pt-0">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge className="px-1 py-0 text-[10px]" variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-3">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-1 px-2 py-1 text-[10px]">
                  {link.icon && <link.icon className="size-3" />}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
