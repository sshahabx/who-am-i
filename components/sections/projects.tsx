"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"

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
    <section id="projects" className="section-padding newspaper-bg paper-texture border-t-2 border-b border-newspaper-border/30">
      <div className="container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Edition Mark */}
            <div className="newspaper-meta text-newspaper-text/50 text-xs mb-4">
              Vol. 01 Feature
            </div>

            <div className="inline-block">
              <div className="newspaper-divider mb-4" />
              
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-newspaper-accent tracking-tight mb-2">
                Personal Projects
              </h2>
              
              <p className="font-merriweather text-base text-newspaper-text/70 italic mb-4">
                Building tools that simplify work and support sustainability.
              </p>
              
              <div className="newspaper-divider" />
            </div>
          </motion.div>

          {/* Projects with Images */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-t-2 border-newspaper-border/30 pt-12"
              >
                {/* Split Layout: Text + Image */}
                <div className="grid lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-start">
                  {/* Left: Text Content */}
                  <div className="space-y-6 order-2 lg:order-1">
                    {/* Project Header */}
                    <div>
                      <h3 className="font-playfair text-4xl md:text-5xl font-bold text-newspaper-accent mb-3 leading-tight">
                        {project.name}
                      </h3>
                      
                      <p className="font-playfair text-xl md:text-2xl text-newspaper-text/80 italic mb-4">
                        {project.tagline}
                      </p>
                      
                      <div className="newspaper-divider" />
                    </div>

                    {/* Project Description */}
                    <div>
                      <p className="font-merriweather text-sm md:text-base text-newspaper-text/80 leading-relaxed text-justify">
                        {project.description}
                      </p>
                    </div>

                    {/* Additional Note (if exists) */}
                    {project.note && (
                      <div className="py-3 px-4 bg-white/50 border-l-2 border-newspaper-accent">
                        <p className="text-xs font-merriweather italic text-newspaper-text/70">
                          {project.note}
                        </p>
                      </div>
                    )}

                    {/* CTA Link */}
                    <div className="pt-4 border-t border-newspaper-border/20">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-newspaper-accent hover:text-newspaper-text transition-all duration-300 group font-merriweather font-semibold text-sm"
                      >
                        <span className="underline-slide">Visit Project</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    </div>
                  </div>

                  {/* Right: Image Container */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2"
                  >
                    {/* Framed Screenshot */}
                    <div className="relative">
                      <div className="bg-white border-2 border-newspaper-border/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="relative aspect-[16/10] bg-white">
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            className="object-cover object-top"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                      
                      {/* Image Caption */}
                      <div className="mt-3 pt-2 border-t border-newspaper-border/20">
                        <p className="text-xs font-merriweather italic text-newspaper-text/60 text-center">
                          {project.imageCaption}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t-2 border-newspaper-border/30 text-center"
          >
            <p className="text-xs newspaper-meta text-newspaper-text/50">
              Featured Projects
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
