import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { BlurFade } from '@/components/ui/BlurFade'

import { DATA } from './HeroSection.data'

export const HeroSection = () => {
  return (
    <section id="hero" className="flex justify-center">
      <div className="flex flex-col items-center gap-3">
        <BlurFade>
          <Avatar className="size-16 md:size-20">
            <AvatarImage alt={'My Avatar'} src={DATA.avatar} />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </BlurFade>
        <BlurFade className="text-3xl font-bold sm:text-5xl xl:text-6xl">Hi, I&apos;m {DATA.name}.</BlurFade>
        <BlurFade className="max-w-xl text-center md:text-base">
          {DATA.description.ja.map((description, index) => (
            <span key={index} className="inline-block">
              {description}
            </span>
          ))}
          <br className="hidden md:inline" />
          {DATA.description.en.map((description, index) => (
            <span key={index} className="inline-block">
              {description}
            </span>
          ))}
        </BlurFade>
      </div>
    </section>
  )
}
