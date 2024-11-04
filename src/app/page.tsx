import { AboutSection } from '@/components/page/top/AboutSection/AboutSection'
import { ContactSection } from '@/components/page/top/ContactSection/ContactSecion'
import { HeroSection } from '@/components/page/top/HeroSection/HeroSection'
import { PositionSection } from '@/components/page/top/PositionSection/PositionSection'
import { ProcessSection } from '@/components/page/top/ProcessSection/ProcessSection'
import { ProjectSection } from '@/components/page/top/ProjectSection/ProjectSection'
import { SkillSection } from '@/components/page/top/SkillSection/SkillSection'
import { WorkExperience } from '@/components/page/top/WorkExperience/WorkExperience'

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col space-y-8" role="main">
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <PositionSection />
      <ProcessSection />
      <WorkExperience />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}
