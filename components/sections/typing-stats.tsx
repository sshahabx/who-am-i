"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function TypingStats() {
  return (
    <section className="py-16 bg-[#F6F6F6]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Header */}
          <div className="mb-8">
            <h3 className="text-4xl font-bold text-text-primary font-jetbrains-mono">
              i know how to type
            </h3>
          </div>

          {/* Stats Display - Compact Horizontal Layout */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-text-primary mb-2 font-jetbrains-mono">1,900</div>
                <div className="text-base text-text-secondary uppercase tracking-wide">Tests Started</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-text-primary mb-2 font-jetbrains-mono">902</div>
                <div className="text-base text-text-secondary uppercase tracking-wide">Tests Completed</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-text-primary mb-2 font-jetbrains-mono">01:40:15</div>
                <div className="text-base text-text-secondary uppercase tracking-wide">Time Typing</div>
              </div>
            </div>

            {/* Activity Calendar */}
            <div className="border-t border-border/20 pt-6">
              <h4 className="text-xl font-medium text-text-primary mb-4 font-jetbrains-mono">Activity Calendar</h4>
                <div className="flex justify-center">
                  <Image 
                    src="/calender.png" 
                    alt="Typing activity calendar" 
                    width={1000}
                    height={500}
                    className="rounded-lg shadow-lg w-full max-w-5xl h-auto"
                  />
                </div>
            </div>

            {/* Footer Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <a
                href="https://monkeytype.com/profile/r3dh4tx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors text-base font-jetbrains-mono hover:underline"
              >
                View full Monkeytype profile →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
