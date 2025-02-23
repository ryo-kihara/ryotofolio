import { BlurFade } from '@/components/ui/BlurFade'

import { DATA } from './CertificationSection.data'

export const CertificationSection = () => {
  return (
    <section id="certification">
      <BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Certification</h2>
          <div className="flex flex-col gap-2">
            {DATA.certifications.map((certification) => (
              <div
                key={certification.name}
                className="flex items-center gap-2 rounded-lg bg-secondary p-3 transition-colors hover:bg-secondary/80"
              >
                <certification.icon className="size-5" />
                <div>
                  <p className="font-medium">{certification.name}</p>
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span>{certification.issuer}</span>
                    <span>•</span>
                    <span>{certification.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  )
}
