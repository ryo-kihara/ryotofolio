import { BlurFade } from '@/components/ui/BlurFade'

import { DATA } from './ProcessSection.data'

export const ProcessSection = () => {
  return (
    <section id="skill">
      <BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Process</h2>
          <div className="flex flex-wrap gap-2">
            {DATA.processes.map((process) => (
              <div
                key={process.name}
                className="flex items-center justify-center gap-1 rounded-lg bg-secondary px-2.5 py-1 transition-colors hover:bg-secondary/80"
              >
                <process.icon className="size-4" />
                <p className="text-sm font-medium">{process.name}</p>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  )
}
