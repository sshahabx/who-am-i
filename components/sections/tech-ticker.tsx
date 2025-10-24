"use client"

import { motion } from "framer-motion"

const techStack = [
  "AWS", "Docker", "Terraform", "Linux", "GitLab CI/CD", "Next.js", 
  "Kubernetes", "Python", "Bash", "Git", "Jenkins", "Ansible"
]

export function TechTicker() {
  // Double the array for seamless infinite scroll
  const duplicatedStack = [...techStack, ...techStack]

  return (
    <section className="py-16 overflow-hidden bg-[#F9F9F9] border-y border-neutral-200/50 mb-20">
      <div className="relative">
        <motion.div
          className="flex space-x-12 whitespace-nowrap"
          animate={{
            x: [0, -50 + "%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="text-lg font-medium text-text-secondary hover:text-text-primary transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}



