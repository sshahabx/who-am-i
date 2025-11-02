"use client"

import { motion } from "framer-motion"
import { ExternalLink, MapPin, Calendar } from "lucide-react"

export function CurrentWork() {
  return (
    <section id="current-work" className="section-padding-sm bg-gradient-to-b from-surface via-background to-surface relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/6 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-accent/4 rounded-full blur-3xl" />
      </div>

      <div className="container-padding relative z-10">
        {/* Header with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h3 className="text-display font-bold text-text-primary mb-4">
            Currently At
          </h3>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full"
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
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="space-y-3">
                  <h4 className="text-display-sm font-bold text-text-primary tracking-tight">
                    DevOps Engineer
                  </h4>
                  <a 
                    href="https://centrox.ai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xl text-accent hover:text-accent-dark font-medium transition-all duration-300 group"
                  >
                    <span className="relative">
                      Centrox AI
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </div>

                {/* Meta info badges */}
                <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-xl text-sm font-medium border border-accent/20 hover:bg-accent/15 transition-colors">
                    <Calendar className="w-4 h-4" />
                    <span>Oct 2025 - Present</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-hover-tint text-text-secondary rounded-xl text-sm font-medium border border-border">
                    <MapPin className="w-4 h-4" />
                    <span>On-site</span>
                  </div>
                </div>
              </div>

              {/* Description with gradient border */}
              <div className="relative mt-8">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/8 via-accent/4 to-transparent rounded-2xl blur-sm" />
                <div className="relative bg-surface/95 backdrop-blur-sm border border-border/80 rounded-2xl p-6 md:p-8 space-y-5 shadow-soft">
                  <p className="text-base md:text-lg text-text-secondary leading-loose font-light">
                    Centrox AI is a technology company specializing in AI-driven platforms and infrastructure automation for scalable, data-intensive applications.
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <p className="text-base md:text-lg text-text-primary leading-loose font-light">
                    As a DevOps Engineer, I'm focused on <span className="text-accent font-medium">cloud infrastructure automation</span>, <span className="text-accent font-medium">cost optimization</span>, and <span className="text-accent font-medium">deployment reliability</span>, ensuring production-grade environments for AI workloads.
                  </p>
                </div>
              </div>

              {/* Tech focus chips */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {['Cloud Infrastructure', 'CI/CD', 'Cost Optimization', 'AI Workloads'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-accent/8 text-accent rounded-xl text-sm font-medium border border-accent/15 hover:border-accent/35 hover:bg-accent/12 transition-all duration-300"
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
