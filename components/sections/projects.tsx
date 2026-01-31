"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"
import { ReadMore } from "@/components/ui/read-more"

const projects = [
  {
    id: "turtle",
    name: "Turtle",
    tagline: "Track smarter. Apply better.",
    description: "Turtle is a minimalist job applications tracker that brings order to the chaos of job hunting. It provides a clean single-page dashboard for managing all your job applications — no more messy spreadsheets or scattered notes.",
    link: "https://trackwithturtle.com",
    note: null,
    image: "/turtle.png",
    imageAlt: "Turtle Dashboard",
    imageCaption: "Turtle Dashboard — Simplifying Job Tracking"
  },
  {
    id: "ecopilot",
    name: "EcoPilot",
    tagline: "Climate action, simplified.",
    description: "Climate responsibility has long been treated as something only large corporations can take on — with consultants, sustainability teams, and expensive tools. EcoPilot changes that. It's a simple, friendly platform that helps small and medium-sized businesses measure their carbon footprint, understand their emissions, and take meaningful steps to reduce them — without complexity. Includes an AI assistant for guidance.",
    link: "https://ecopilot.app",
    note: null,
    image: "/ecopilot.png",
    imageAlt: "EcoPilot Dashboard",
    imageCaption: "EcoPilot Insights — Making Climate Action Accessible"
  }
]

export function Projects() {
  return (
    <section id="projects" className="section-padding-sm newspaper-bg paper-texture border-t border-newspaper-border/30">
      <div className="container-padding px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-6 md:mb-8"
          >
            <div className="newspaper-divider mb-2" />
            
            {/* Edition Mark */}
            <div className="newspaper-meta text-newspaper-text/50 text-[0.65rem] mb-2">
              Vol. 01 Feature
            </div>

            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-newspaper-accent tracking-tight newspaper-headline-spacing">
              Personal Projects
            </h2>
            
            <p className="font-merriweather text-xs md:text-sm text-newspaper-text/70 italic mt-1">
              Building tools that simplify work and support sustainability.
            </p>
            
            <div className="newspaper-divider mt-2" />
          </motion.div>

          {/* Projects with Images - Compact Layout */}
          <div className="space-y-8 md:space-y-10">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-t border-newspaper-border/30 pt-6 md:pt-8"
              >
                {/* Split Layout: Text + Image */}
                <div className="flex flex-col lg:grid lg:grid-cols-[58%_42%] gap-5 md:gap-6 items-start">
                  {/* Text Content - Left on Desktop */}
                  <div className="order-2 lg:order-1 space-y-3 md:space-y-4 w-full">
                    {/* Project Header - Compact */}
                    <div>
                      <h3 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-newspaper-accent newspaper-headline-spacing leading-tight">
                        {project.name}
                      </h3>
                      
                      <p className="font-playfair text-base md:text-lg lg:text-xl text-newspaper-text/80 italic mt-1 mb-2">
                        {project.tagline}
                      </p>
                      
                      <div className="newspaper-divider" />
                    </div>

                    {/* Project Description with ReadMore - Compact */}
                    <ReadMore maxLines={3}>
                      <p className="font-merriweather text-sm md:text-base text-newspaper-text/80 leading-relaxed newspaper-compact text-left md:text-justify">
                        {project.description}
                      </p>
                    </ReadMore>

                    {/* Additional Note (if exists) */}
                    {project.note && (
                      <div className="py-2 px-3 bg-white/50 border-l-2 border-newspaper-accent">
                        <p className="text-[0.65rem] md:text-xs font-merriweather italic text-newspaper-text/70">
                          {project.note}
                        </p>
                      </div>
                    )}

                    {/* CTA Link - Newspaper style */}
                    <div className="pt-2 border-t border-newspaper-border/20">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-newspaper-accent hover:text-newspaper-text transition-all duration-300 group font-merriweather font-semibold text-sm underline-slide"
                      >
                        <span>Visit Project</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    </div>
                  </div>

                  {/* Image - Right on Desktop, Top on Mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2 w-full"
                  >
                    {/* Framed Screenshot - Compact */}
                    <div className="relative">
                      <div className="bg-white border border-newspaper-border/40 rounded-sm overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300">
                        <div className="relative aspect-[16/10] bg-white max-h-[45vh] lg:max-h-none">
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            className="object-cover object-top"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                      
                      {/* Image Caption - Compact */}
                      <div className="mt-1.5 pt-1.5 border-t border-newspaper-border/20">
                        <p className="text-[0.6rem] md:text-xs font-merriweather italic text-newspaper-text/60 text-center">
                          {project.imageCaption}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom Note - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 pt-4 border-t border-newspaper-border/30 text-center"
          >
            <p className="text-[0.6rem] md:text-xs newspaper-meta text-newspaper-text/50">
              Featured Projects
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
