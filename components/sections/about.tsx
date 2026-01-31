"use client"

import { motion } from "framer-motion"
import { ExternalLink, MapPin, Calendar, Briefcase } from "lucide-react"
import { ReadMore } from "@/components/ui/read-more"

export function About() {
  return (
    <section id="whoami" className="section-padding-sm newspaper-bg paper-texture border-t border-newspaper-border/30">
      <div className="container-padding px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Newspaper Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Left Column: About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="border-r-0 lg:border-r border-newspaper-border/30 lg:pr-6 xl:pr-10"
            >
              {/* Section Header - Compact */}
              <div className="mb-5 md:mb-6">
                <div className="newspaper-divider mb-2" />
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-newspaper-accent tracking-tight newspaper-headline-spacing">
                  About
                </h2>
                <p className="newspaper-meta text-newspaper-text/50 text-[0.65rem] mt-1">
                  Profile
                </p>
                <div className="newspaper-divider mt-2" />
              </div>

              {/* Article Content - Compact */}
              <div className="space-y-4">
                {/* Lead paragraph with drop cap */}
                <ReadMore maxLines={3}>
                  <div className="font-merriweather text-sm md:text-base text-newspaper-text/80 leading-relaxed newspaper-compact space-y-3 text-left md:text-justify">
                    <p className="first-letter:text-4xl md:first-letter:text-5xl first-letter:font-playfair first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-[0.8] first-letter:mt-0.5 md:first-letter:mt-1">
                      I have a background in cybersecurity and cloud infrastructure. 
                      I enjoy creating systems that are efficient, scalable, and secure, 
                      but also feel simple and purposeful.
                    </p>

                    <p>
                      Over time I've found myself drawn to minimalism, both in design 
                      and in how I approach my work and life. For me, good engineering 
                      is about keeping things clear, reliable, and human — whether 
                      that's in code or in everyday decisions.
                    </p>

                    <p>
                      This philosophy extends beyond technical architecture. It influences 
                      how I communicate, solve problems, and think about the broader 
                      impact of the systems we build.
                    </p>
                  </div>
                </ReadMore>

                {/* Pull Quote - hidden on mobile collapsed state */}
                <div className="hidden md:block my-4 py-3 px-4 border-l-2 border-newspaper-accent bg-white/50">
                  <p className="font-playfair text-base md:text-lg text-newspaper-accent/90 italic leading-relaxed">
                    "Good engineering is about keeping things clear, reliable, and human."
                  </p>
                </div>

                {/* Closing - hidden on mobile */}
                <div className="hidden md:block font-merriweather text-sm md:text-base text-newspaper-text/80 leading-relaxed newspaper-compact text-justify">
                  <p>
                    Whether optimizing cloud costs, designing resilient architectures, 
                    or automating deployment workflows, I approach each challenge with 
                    the same mindset: solve elegantly, document clearly, and make it 
                    maintainable.
                  </p>
                </div>

                {/* Author byline */}
                <div className="mt-4 md:mt-5 pt-3 border-t border-newspaper-border/20">
                  <p className="text-xs newspaper-meta text-newspaper-text/50">
                    Written by Shahab Alam
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Current Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:pl-6 xl:pl-10 pt-6 lg:pt-0 border-t lg:border-t-0 border-newspaper-border/30"
              id="current-work"
            >
              {/* Section Header - Compact */}
              <div className="mb-5 md:mb-6">
                <div className="newspaper-divider mb-2" />
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-newspaper-accent tracking-tight newspaper-headline-spacing">
                  Currently At
                </h2>
                <p className="newspaper-meta text-newspaper-text/50 text-[0.65rem] mt-1">
                  Employment
                </p>
                <div className="newspaper-divider mt-2" />
              </div>

              {/* Company Info Box - Compact */}
              <div className="bg-white border border-newspaper-border/40 p-4 md:p-5 shadow-sm mb-5">
                <div className="space-y-2.5 md:space-y-3">
                  {/* Role */}
                  <div>
                    <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-newspaper-accent newspaper-headline-spacing leading-tight">
                      DevOps Engineer
                    </h3>
                    <a 
                      href="https://centrox.ai/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base md:text-lg font-playfair text-newspaper-text/80 hover:text-newspaper-accent transition-all duration-300 group"
                    >
                      <span className="underline-slide">
                        Centrox AI
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-newspaper-border/20">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-newspaper-border/40 newspaper-meta text-newspaper-text/70 text-[0.65rem]">
                      <Calendar className="w-3 h-3" />
                      <span>Oct 2025 - Present</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-newspaper-border/40 newspaper-meta text-newspaper-text/70 text-[0.65rem]">
                      <MapPin className="w-3 h-3" />
                      <span>On-site</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Body - Compact */}
              <ReadMore maxLines={3}>
                <div className="space-y-3 font-merriweather text-sm md:text-base text-newspaper-text/80 leading-relaxed newspaper-compact text-left md:text-justify">
                  <p className="first-letter:text-4xl md:first-letter:text-5xl first-letter:font-playfair first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-[0.8] first-letter:mt-0.5 md:first-letter:mt-1">
                    Centrox AI is a technology company specializing in AI-driven 
                    platforms and infrastructure automation for scalable, data-intensive 
                    applications.
                  </p>

                  <p>
                    As a DevOps Engineer, I focus on cloud infrastructure automation, 
                    cost optimization, and deployment reliability, ensuring production-grade 
                    environments for AI workloads.
                  </p>

                  <p>
                    The role demands deep understanding of both traditional infrastructure 
                    patterns and emerging AI/ML operational requirements — bridging the 
                    gap between development teams and production environments through 
                    intelligent automation.
                  </p>
                </div>
              </ReadMore>

              {/* Tech Focus Tags - Compact */}
              <div className="mt-4 md:mt-5 pt-3 md:pt-4 border-t border-newspaper-border/20">
                <p className="newspaper-meta text-newspaper-text/50 mb-2 text-[0.65rem]">Key Focus Areas:</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Cloud Infrastructure', 'CI/CD', 'Cost Optimization', 'AI Workloads', 'IaC'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 border border-newspaper-border/40 newspaper-meta text-newspaper-text/70 hover:bg-newspaper-accent/5 hover:border-newspaper-accent/40 transition-colors duration-300 text-[0.65rem]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
