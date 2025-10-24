import { HeroSection } from "@/components/HeroSection"
import { About } from "@/components/sections/about"
import { TypingStats } from "@/components/sections/typing-stats"
import { TechTicker } from "@/components/sections/tech-ticker"

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <TypingStats />
      <TechTicker />
    </>
  )
}

