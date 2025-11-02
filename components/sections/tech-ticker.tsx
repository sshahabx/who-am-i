"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const techStack = [
  { 
    name: "AWS", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
  },
  { 
    name: "Docker", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
  },
  { 
    name: "Terraform", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg"
  },
  { 
    name: "Linux", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
  },
  { 
    name: "GitLab", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"
  },
  { 
    name: "Next.js", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
  },
  { 
    name: "Kubernetes", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"
  },
  { 
    name: "Python", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  },
  { 
    name: "Bash", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
  },
  { 
    name: "Git", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
  },
  { 
    name: "Jenkins", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg"
  },
  { 
    name: "Ansible", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg"
  }
]

export function TechTicker() {
  // Double the array for seamless infinite scroll
  const duplicatedStack = [...techStack, ...techStack]

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-background to-surface border-y border-border/40 mb-24">
      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
        
        <motion.div
          className="flex items-center gap-12 whitespace-nowrap"
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
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 px-4 py-2 bg-surface/50 border border-border/30 rounded-xl hover:border-accent/40 hover:bg-surface transition-all duration-300 cursor-default group"
            >
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width={32}
                  height={32}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-base font-semibold text-text-secondary group-hover:text-accent transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}



