'use client'

import { ProjectCard } from '@/components/ProjectCard'
import { BlurFade } from '@/components/ui/BlurFade'

import { DATA } from './ProjectSection.data'

export const ProjectSection = () => {
  return (
    <section id="project">
      <div className="w-full space-y-12 py-12">
        <BlurFade>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">My Projects</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">To Be Indie Hacker</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                個人で開発しているプロジェクトを紹介します
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
          {DATA.projects.map((project) => (
            <BlurFade key={project.title} className="row-span-4 grid grid-rows-subgrid">
              <ProjectCard
                className="row-span-4 grid grid-rows-subgrid"
                thumbnail={{
                  className: project.thumbnail.className,
                  src: project.thumbnail.src,
                  width: project.thumbnail.width,
                  height: project.thumbnail.height,
                }}
                title={project.title}
                href={project.href}
                description={project.description}
                dates={project.dates}
                tags={project.stacks}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
