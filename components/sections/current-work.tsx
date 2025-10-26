"use client"

import { motion } from "framer-motion"
import { ExternalLink, MapPin, Calendar } from "lucide-react"

export function CurrentWork() {
  return (
    <section id="current-work" className="py-20 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-text-primary font-jetbrains-mono text-center mb-3">
            Currently At
          </h3>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50 mx-auto rounded-full"
          />
        </motion.div>

        {/* Modern timeline-style content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Timeline dot and line */}
          <div className="relative pl-8 md:pl-12">
            {/* Vertical line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent"
            />
            
            {/* Animated dot */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute left-[-8px] top-2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"
            >
              <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20" />
            </motion.div>

            {/* Content container */}
            <div className="space-y-6">
              {/* Role and Company Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-2">
                  <h4 className="text-3xl font-bold text-text-primary font-jetbrains-mono tracking-tight">
                    DevOps Engineer
                  </h4>
                  <a 
                    href="https://centrox.ai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xl text-accent hover:text-accent/80 font-jetbrains-mono transition-all duration-200 group"
                  >
                    <span className="relative">
                      Centrox AI
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                  </a>
                </div>

                {/* Meta info badges */}
                <div className="flex flex-col gap-2 md:items-end">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-jetbrains-mono border border-accent/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Oct 2025 - Present</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-100 text-text-secondary rounded-full text-sm font-jetbrains-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>On-site</span>
                  </div>
                </div>
              </div>

              {/* Description with gradient border */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent rounded-lg blur" />
                <div className="relative bg-white/80 backdrop-blur-sm border border-neutral-200/60 rounded-lg p-6 space-y-4">
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed font-jetbrains-mono">
                    Centrox AI is a technology company specializing in AI-driven platforms and infrastructure automation for scalable, data-intensive applications.
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
                  <p className="text-base md:text-lg text-text-primary leading-relaxed font-jetbrains-mono">
                    As a DevOps Engineer, I'm focused on cloud infrastructure automation, cost optimization, and deployment reliability, ensuring production-grade environments for AI workloads.
                  </p>
                </div>
              </div>

              {/* Tech focus chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['Cloud Infrastructure', 'CI/CD', 'Cost Optimization', 'AI Workloads'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gradient-to-r from-accent/5 to-accent/10 text-accent/80 rounded-md text-xs font-jetbrains-mono border border-accent/10 hover:border-accent/30 transition-colors duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
