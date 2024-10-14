import MeImage from '@/assets/images/me.jpeg'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { BlurFade } from '@/components/ui/BlurFade'

export const HeroSection = () => {
  return (
    <section id="hero" className="flex justify-center">
      <div className="flex flex-col gap-3 items-center">
        <BlurFade>
          <Avatar className="size-16 md:size-20">
            <AvatarImage alt={'My Avatar'} src={MeImage.src} />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </BlurFade>
        <BlurFade className="text-3xl font-bold sm:text-5xl xl:text-6xl" inView>
          Hi, I&apos;m Ryo.
        </BlurFade>
        <BlurFade className="max-w-xl text-center text-sm md:text-base" inView>
          <span className="inline-block">何でも屋のウェブ開発者です。</span>
          <span className="inline-block">最新技術に常に飢えています。</span>
          <br className="hidden md:inline" />
          <span className="inline-block">
            Jack-of-all-trades web developer.Always hungry for the latest tech trends.
          </span>
        </BlurFade>
      </div>
    </section>
  )
}
