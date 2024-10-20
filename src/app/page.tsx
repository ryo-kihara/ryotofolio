import { AboutSection } from '@/components/page/top/AboutSection/AboutSection'
import { HeroSection } from '@/components/page/top/HeroSection/HeroSection'
import { PositionSection } from '@/components/page/top/PositionSection/PositionSection'
import { ProcessSection } from '@/components/page/top/ProcessSection/ProcessSection'
import { SkillSection } from '@/components/page/top/SkillSection/SkillSection'

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col space-y-8" role="main">
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <PositionSection />
      <ProcessSection />
    </main>
  )
}
