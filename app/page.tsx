import { HeroSection } from "@/components/HeroSection"
import { Projects } from "@/components/sections/projects"
import { KubernetesVisual } from "@/components/sections/kubernetes-visual"
import { TypingStats } from "@/components/sections/typing-stats"
import { TechTicker } from "@/components/sections/tech-ticker"
import { Newsletter } from "@/components/sections/newsletter"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <KubernetesVisual />
      <TypingStats />
      <TechTicker />
      <Newsletter />
    </>
  )
}

