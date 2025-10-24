"use client"

import { motion } from "framer-motion"

export function CurrentWork() {
  return (
    <section className="py-16 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Header */}
          <div className="mb-12">
            <h3 className="text-4xl font-bold text-text-primary font-jetbrains-mono">
              current work
            </h3>
          </div>

          {/* Work Content */}
          <div className="max-w-4xl mx-auto">
            <div className="border-l-2 border-accent/30 pl-8 py-6">
              <div className="space-y-4">
                {/* Role and Company */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h4 className="text-2xl font-semibold text-text-primary font-jetbrains-mono">
                      DevOps Engineer
                    </h4>
                    <a 
                      href="https://centrox.ai/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg text-accent hover:text-accent/80 font-jetbrains-mono transition-colors duration-200"
                    >
                      Centrox AI
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-text-secondary font-jetbrains-mono">
                      Oct 2025 - Present
                    </p>
                    <p className="text-xs text-text-secondary/70 font-jetbrains-mono">
                      On-site
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="pt-4">
                  <p className="text-base text-text-secondary leading-relaxed font-jetbrains-mono">
                    Centrox AI is a technology company specializing in AI-driven platforms and infrastructure automation for scalable, data intensive applications.
                  </p>
                  <p className="text-base text-text-primary leading-relaxed font-jetbrains-mono mt-3">
                    As a DevOps Engineer, I'm focused on cloud infrastructure automation, cost optimization, and deployment reliability, ensuring production grade environments for AI workloads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
