"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="whoami" className="section-padding bg-[#FDFDFD]">
      <div className="container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                $whoami
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                I have a background in cybersecurity and cloud infrastructure. I enjoy creating systems that are efficient, scalable, and secure, but also feel simple and purposeful. Over time I've found myself drawn to minimalism, both in design and in how I approach my work and life. For me, good engineering is about keeping things clear, reliable, and human - whether that's in code or in everyday decisions.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Minimal accent line */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-px bg-gradient-to-r from-accent/20 via-accent to-accent/20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}