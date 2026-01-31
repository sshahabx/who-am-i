"use client"

import { motion } from "framer-motion"
import { Download, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ReadMore } from "@/components/ui/read-more"

export function KubernetesVisual() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [downloadCount, setDownloadCount] = useState(0)

  useEffect(() => {
    // Fetch download count from localStorage
    const count = localStorage.getItem('k8s-download-count')
    if (count) {
      setDownloadCount(parseInt(count))
    }
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Kubernets.png'
    link.download = 'kubernetes-visual-reference.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Increment download count
    const newCount = downloadCount + 1
    setDownloadCount(newCount)
    localStorage.setItem('k8s-download-count', newCount.toString())
  }

  return (
    <>
      <section className="section-padding-sm newspaper-bg paper-texture border-t border-newspaper-border/30">
        <div className="container-padding px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-6 md:mb-8"
            >
              <div className="newspaper-divider mb-2" />
              <div className="newspaper-meta text-newspaper-text/50 text-[0.65rem] mb-2">
                VISUAL REFERENCE
              </div>
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-newspaper-accent tracking-tight newspaper-headline-spacing">
                Kubernetes, Explained Visually
              </h2>
              <div className="newspaper-divider mt-2" />
            </motion.div>

            {/* Two-column layout */}
            <div className="flex flex-col lg:grid lg:grid-cols-[60%_40%] gap-6 md:gap-8 items-start">
              {/* Left Column: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="font-playfair text-xl md:text-2xl font-semibold text-newspaper-accent newspaper-headline-spacing">
                  Kubernetes at a Glance
                </h3>

                <div className="font-merriweather text-sm md:text-base text-newspaper-text/80 leading-relaxed newspaper-compact">
                  <ReadMore maxLines={3}>
                    <div className="space-y-3 text-left md:text-justify">
                      <p>
                        This visual reference covers core Kubernetes concepts including clusters, nodes, pods, 
                        services, deployments, and networking. It's designed to provide a quick, at-a-glance 
                        understanding of how these components interact within the Kubernetes ecosystem.
                      </p>
                      <p>
                        Whether you're learning Kubernetes for the first time or need a quick refresher on 
                        architecture patterns, this diagram breaks down complex orchestration concepts into 
                        digestible visual components. Perfect for engineers, students, and anyone working 
                        with container orchestration.
                      </p>
                      <p>
                        The diagram illustrates the relationship between control plane components, worker nodes, 
                        and how applications are deployed and managed across the cluster. Use it as a reference 
                        during development, troubleshooting, or when explaining Kubernetes to your team.
                      </p>
                    </div>
                  </ReadMore>
                </div>

                {/* Caption */}
                <div className="pt-3 border-t border-newspaper-border/20">
                  <p className="text-xs font-merriweather italic text-newspaper-text/60">
                    Designed as a quick reference for engineers and learners.
                  </p>
                </div>

                {/* Learning Resources */}
                <div className="mt-4 pt-4 border-t border-newspaper-border/20 space-y-3">
                  <h4 className="font-playfair text-sm md:text-base font-bold text-newspaper-accent">
                    Learning Resources:
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="https://www.youtube.com/watch?v=X48VuDVv0do"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-xs md:text-sm text-newspaper-text/70 hover:text-newspaper-accent transition-colors duration-300 group"
                    >
                      <span className="text-newspaper-accent font-bold mt-0.5">▪</span>
                      <span className="underline-slide">Kubernetes Complete Course (YouTube)</span>
                    </a>
                    <a
                      href="https://gitlab.com/ssshahab/k8s-3tier-notes-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-xs md:text-sm text-newspaper-text/70 hover:text-newspaper-accent transition-colors duration-300 group"
                    >
                      <span className="text-newspaper-accent font-bold mt-0.5">▪</span>
                      <span className="underline-slide">3-Tier Application Deployment Example (GitLab)</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Image Preview */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                {/* Image Preview - No borders or background */}
                <div 
                  className="cursor-pointer transition-all duration-300 hover:opacity-90"
                  onClick={() => setIsModalOpen(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/previewk8s.png"
                      alt="Kubernetes Visual Reference Diagram"
                      fill
                      className="object-contain"
                      quality={100}
                      priority
                    />
                  </div>
                </div>

                {/* Image Caption */}
                <div className="mt-2 pt-2 border-t border-newspaper-border/20">
                  <p className="text-[0.65rem] md:text-xs font-merriweather italic text-newspaper-text/60 text-center">
                    Click to view full size
                  </p>
                </div>

                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  className="mt-4 w-full px-4 py-2.5 border-2 border-newspaper-border/50 hover:border-newspaper-accent text-newspaper-accent hover:bg-newspaper-accent/5 transition-all duration-300 newspaper-meta text-xs flex items-center justify-center gap-2 group"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                  <span>Download</span>
                </button>

                {/* Download Counter */}
                {downloadCount > 0 && (
                  <div className="mt-2 text-center">
                    <p className="text-[0.6rem] newspaper-meta text-newspaper-text/50">
                      {downloadCount} {downloadCount === 1 ? 'download' : 'downloads'}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightweight Modal */}
      {isModalOpen && (
        <div 
          className="modal-overlay animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Kubernetes diagram full view"
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="relative w-full h-full">
              <Image
                src="/Kubernets.png"
                alt="Kubernetes Visual Reference Diagram - Full Size"
                width={1200}
                height={900}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
