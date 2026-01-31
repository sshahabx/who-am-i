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
    <section className="py-6 md:py-10 overflow-hidden newspaper-bg border-t border-b border-newspaper-border/40">
      <div className="container-padding mb-4 md:mb-6 px-4 md:px-6">
        <div className="text-center">
          <h3 className="font-playfair text-xl md:text-2xl font-bold text-newspaper-accent newspaper-headline-spacing">
            Technology Stack
          </h3>
          <div className="newspaper-divider max-w-md mx-auto mt-2" />
        </div>
      </div>

      <div className="relative">
        {/* Gradient fade on edges - narrower on mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#f8f7f2] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#f8f7f2] to-transparent z-10 pointer-events-none"></div>
        
        <motion.div
          className="flex items-center gap-3 md:gap-6 whitespace-nowrap py-2 md:py-3"
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
              className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-white border border-newspaper-border/40 hover:border-newspaper-accent/60 hover:bg-white transition-all duration-300 cursor-default group"
            >
              <div className="relative w-5 h-5 md:w-7 md:h-7 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width={28}
                  height={28}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-xs md:text-sm font-merriweather font-semibold text-newspaper-text/70 group-hover:text-newspaper-accent transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom caption - Compact */}
      <div className="container-padding mt-3 md:mt-4 px-4 md:px-6">
        <p className="text-center text-[0.6rem] md:text-xs font-merriweather italic text-newspaper-text/50">
          Core technologies and frameworks utilized in production environments
        </p>
      </div>
    </section>
  )
}
