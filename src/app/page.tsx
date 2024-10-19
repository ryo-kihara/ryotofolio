import { AboutSection } from '@/components/page/top/AboutSection/AboutSection'
import { HeroSection } from '@/components/page/top/HeroSection/HeroSection'

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col space-y-8" role="main">
      <HeroSection />
      <AboutSection />
    </main>
  )
}
