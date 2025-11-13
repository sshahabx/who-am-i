import { HeroSection } from "@/components/HeroSection"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { TypingStats } from "@/components/sections/typing-stats"
import { TechTicker } from "@/components/sections/tech-ticker"
import { Newsletter } from "@/components/sections/newsletter"

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      <TypingStats />
      <TechTicker />
      <Newsletter />
    </>
  )
}

