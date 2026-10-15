"use client"

import { motion } from "framer-motion"
import { ExternalLink, Download } from "lucide-react"
import Image from "next/image"
import { engineeringProjects } from "@/lib/profile"
import { SectionHeader } from "@/components/sections/experience"
import { useState, useEffect } from "react"

const sideBuilds = [
  {
    id: "kubernetes",
    name: "Kubernetes Visual Reference",
    tagline: "Learn Kubernetes visually.",
    description: "A one-page visual reference for clusters, nodes, pods, services, deployments, and networking, paired with a three-tier K8s notes app.",
    links: [
      { label: "Project", href: "https://gitlab.com/ssshahab/k8s-3tier-notes-app" },
    ],
    image: "/previewk8s.png",
    imageAlt: "Kubernetes Visual Reference",
    downloadPath: "/Kubernets.png" as string | undefined,
  },
  {
    id: "turtle",
    name: "Turtle",
    tagline: "Track smarter. Apply better.",
    description: "A minimalist job-application tracker: one clean dashboard instead of messy spreadsheets and scattered notes.",
    links: [{ label: "Live site", href: "https://trackwithturtle.com" }],
    image: "/turtle.png",
    imageAlt: "Turtle dashboard",
    downloadPath: undefined,
  },
  {
    id: "ecopilot",
    name: "EcoPilot",
    tagline: "Climate action, simplified.",
    description: "Helps small and medium-sized businesses measure their carbon footprint and take practical steps to reduce it, with an AI assistant for guidance.",
    links: [{ label: "Live site", href: "https://ecopilot.app" }],
    image: "/ecopilot.png",
    imageAlt: "EcoPilot dashboard",
    downloadPath: undefined,
  },
]

export function Projects() {
  const [downloadCounts, setDownloadCounts] = useState<{[key: string]: number}>({})

  useEffect(() => {
    // Fetch download counts from API
    const fetchDownloads = async () => {
      try {
        const response = await fetch('/api/downloads')
        if (response.ok) {
          const data = await response.json()
          setDownloadCounts(data)
        }
      } catch (error) {
        console.error('Error fetching downloads:', error)
        // Fallback to default
        setDownloadCounts({ kubernetes: 7 })
      }
    }
    
    fetchDownloads()
  }, [])

  const handleDownload = async (projectId: string, downloadPath: string) => {
    // Trigger download
    const link = document.createElement('a')
    link.href = downloadPath
    link.download = `${projectId}-reference.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Increment download count via API
    try {
      const response = await fetch('/api/downloads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectId }),
      })

      if (response.ok) {
        const data = await response.json()
        setDownloadCounts(prev => ({ ...prev, [projectId]: data.count }))
      }
    } catch (error) {
      console.error('Error incrementing download:', error)
    }
  }
  return (
    <section id="projects" className="section-padding-sm newspaper-bg paper-texture border-t border-newspaper-border/30">
      <div className="container-padding px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader index="02" title="Projects" deck="A mix of things I built at work and on my own." />

          {/* Engineering projects: newspaper columns */}
          <div className="grid md:grid-cols-2 border-t border-l border-newspaper-border/30">
            {engineeringProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group border-r border-b border-newspaper-border/30 p-5 md:p-7 bg-white/30 hover:bg-white/70 transition-colors duration-300 flex flex-col"
              >
                <div className="flex items-center mb-3">
                  <span className="newspaper-meta text-[0.6rem] px-2 py-0.5 border border-newspaper-border/40 text-newspaper-text/60">
                    {project.context === "Work" ? "Work" : "Personal"}
                  </span>
                </div>
                <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-newspaper-accent leading-tight mb-2">
                  {project.title}
                </h3>
                <p className="font-merriweather text-sm text-newspaper-text/80 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <p className="font-playfair italic text-base md:text-lg text-newspaper-accent border-l-4 border-newspaper-accent pl-3 mb-4">
                    {project.outcome}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 border border-newspaper-border/40 newspaper-meta text-newspaper-text/70 text-[0.6rem]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Side builds */}
          <div className="mt-10 md:mt-12">
            <div className="flex items-baseline justify-between border-b-[3px] border-double border-newspaper-border/40 pb-2 mb-5">
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-newspaper-accent">Side projects</h3>
              <span className="font-merriweather italic text-xs text-newspaper-text/50">Small products I built and run myself</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sideBuilds.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-white border border-newspaper-border/40 overflow-hidden shadow-soft">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h4 className="font-playfair text-lg md:text-xl font-bold text-newspaper-accent mt-3 leading-tight">
                    {project.name}
                  </h4>
                  <p className="font-playfair italic text-sm text-newspaper-text/70 mb-1.5">{project.tagline}</p>
                  <p className="font-merriweather text-xs md:text-[0.8rem] text-newspaper-text/75 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 border-t border-newspaper-border/20">
                    {project.downloadPath && (
                      <button
                        onClick={() => handleDownload(project.id, project.downloadPath!)}
                        className="inline-flex items-center gap-1.5 newspaper-meta text-[0.65rem] text-newspaper-accent hover:text-newspaper-text transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download
                        {downloadCounts[project.id] !== undefined && (
                          <span className="text-newspaper-text/50">({downloadCounts[project.id]})</span>
                        )}
                      </button>
                    )}
                    {project.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 newspaper-meta text-[0.65rem] text-newspaper-text/70 hover:text-newspaper-accent transition-colors"
                      >
                        {l.label}
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
