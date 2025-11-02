"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="whoami" className="section-padding bg-gradient-to-b from-surface via-background to-surface">
      <div className="container-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-8"
            >
              <div className="space-y-6">
                <div className="inline-block">
                  <h2 className="text-display font-bold text-text-primary leading-tight font-mono mb-3">
                    $whoami
                  </h2>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-1 bg-gradient-to-r from-accent to-accent-light rounded-full"
                  />
                </div>
                <p className="text-body-lg text-text-secondary leading-loose font-light">
                  I have a background in <span className="text-text-primary font-medium">cybersecurity and cloud infrastructure</span>. I enjoy creating systems that are efficient, scalable, and secure, but also feel simple and purposeful.
                </p>
                <p className="text-body-lg text-text-secondary leading-loose font-light">
                  Over time I've found myself drawn to <span className="text-text-primary font-medium">minimalism</span>, both in design and in how I approach my work and life. For me, good engineering is about keeping things <span className="text-accent font-medium">clear, reliable, and human</span> — whether that's in code or in everyday decisions.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Decorative Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-4 hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full h-full min-h-[200px] flex items-center justify-center">
                <div className="absolute w-2 h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent rounded-full"></div>
                <motion.div 
                  animate={{ 
                    y: [0, 20, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-4 h-4 bg-accent rounded-full shadow-glow"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}