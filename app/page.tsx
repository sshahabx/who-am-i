import { HeroSection } from "@/components/HeroSection"
import { StatsStrip } from "@/components/sections/stats-strip"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { TechTicker } from "@/components/sections/tech-ticker"
import { Credentials } from "@/components/sections/credentials"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <Experience />
      <Projects />
      <TechTicker />
      <Credentials />
    </>
  )
}
