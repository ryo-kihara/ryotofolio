import Markdown from 'react-markdown'

import { BlurFade } from '@/components/ui/BlurFade'

import { DATA } from './AboutSection.data'

export const AboutSection = () => {
  return (
    <section id="about">
      <BlurFade>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
  )
}
