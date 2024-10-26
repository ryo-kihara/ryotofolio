import { User } from 'lucide-react'

import { Badge } from '@/components/ui/Badge'
import { BlurFade } from '@/components/ui/BlurFade'

import { DATA } from './WorkExperience.data'

export const WorkExperience = () => {
  return (
    <section id="work-experience">
      <BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3 py-12">
          <hgroup>
            <h2 className="text-xl font-bold">Work Experience</h2>
            <p className="text-sm text-muted-foreground">主な業務経験</p>
          </hgroup>
          <ul className="mb-4 ml-5 divide-y divide-dashed border-l">
            {DATA.workExperiences.map((workExperience, id) => (
              <li className="relative ml-10 py-4" key={id}>
                <div className="absolute -left-16 top-3 flex items-center justify-center bg-white dark:bg-background">
                  <workExperience.icon className="m-auto ml-1 size-10" />
                </div>
                <div className="flex flex-1 flex-col justify-start gap-1">
                  <time className="text-xs text-muted-foreground">{workExperience.dates}</time>
                  <h2 className="font-semibold leading-none">{workExperience.title}</h2>
                  <div className="flex items-center gap-1">
                    <User className="size-4" color="gray" />
                    <p className="text-sm text-muted-foreground">{workExperience.positions.join(' / ')}</p>
                  </div>
                  <span className="palt prose text-sm text-muted-foreground dark:prose-invert">
                    {workExperience.description}
                  </span>
                </div>
                <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                  {workExperience.stacks?.map((stack, idx) => (
                    <Badge key={idx} className="flex gap-2">
                      {stack}
                    </Badge>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </BlurFade>
    </section>
  )
}
