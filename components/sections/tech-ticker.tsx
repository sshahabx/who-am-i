"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { techStack } from "@/lib/profile"
import { SectionHeader } from "@/components/sections/experience"

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`

const logos = [
  { name: "Google Cloud", logo: devicon("googlecloud/googlecloud-original.svg") },
  { name: "AWS", logo: devicon("amazonwebservices/amazonwebservices-original-wordmark.svg") },
  { name: "Kubernetes", logo: devicon("kubernetes/kubernetes-plain.svg") },
  { name: "Terraform", logo: devicon("terraform/terraform-original.svg") },
  { name: "Docker", logo: devicon("docker/docker-original.svg") },
  { name: "Helm", logo: devicon("helm/helm-original.svg") },
  { name: "GitHub Actions", logo: devicon("githubactions/githubactions-original.svg") },
  { name: "GitLab", logo: devicon("gitlab/gitlab-original.svg") },
  { name: "Prometheus", logo: devicon("prometheus/prometheus-original.svg") },
  { name: "Grafana", logo: devicon("grafana/grafana-original.svg") },
  { name: "MongoDB", logo: devicon("mongodb/mongodb-original.svg") },
  { name: "Redis", logo: devicon("redis/redis-original.svg") },
  { name: "Python", logo: devicon("python/python-original.svg") },
  { name: "Bash", logo: devicon("bash/bash-original.svg") },
  { name: "Linux", logo: devicon("linux/linux-original.svg") },
  { name: "Nginx", logo: devicon("nginx/nginx-original.svg") },
]

export function TechTicker() {
  const duplicated = [...logos, ...logos]

  return (
    <section id="stack" className="section-padding-sm newspaper-bg border-t border-newspaper-border/40">
      <div className="container-padding px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader index="03" title="Tech stack" deck="The tools I use most, grouped by area." />
        </div>
      </div>

      {/* Logo ticker */}
      <div className="relative overflow-hidden mb-8 md:mb-10">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#f8f7f2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#f8f7f2] to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex items-center gap-3 md:gap-5 whitespace-nowrap py-2 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 45, ease: "linear" } }}
        >
          {duplicated.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-white border border-newspaper-border/40 hover:border-newspaper-accent/60 transition-all duration-300 cursor-default group"
            >
              <div className="relative w-5 h-5 md:w-6 md:h-6 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image src={tech.logo} alt="" width={24} height={24} className="object-contain" loading="lazy" unoptimized />
              </div>
              <span className="text-xs md:text-sm font-merriweather font-semibold text-newspaper-text/70 group-hover:text-newspaper-accent transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Categorized grid */}
      <div className="container-padding px-4 md:px-6">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 [column-rule:1px_solid_rgba(74,74,74,0.2)]">
          {techStack.map((group, i) => (
            <motion.div
              key={group.area}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              viewport={{ once: true }}
              className="break-inside-avoid mb-6 border-t-2 border-newspaper-accent pt-2"
            >
              <h3 className="newspaper-meta font-semibold text-newspaper-accent text-[0.7rem] mb-2.5">{group.area}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 bg-white/70 border border-newspaper-border/30 font-merriweather text-[0.7rem] md:text-xs text-newspaper-text/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
