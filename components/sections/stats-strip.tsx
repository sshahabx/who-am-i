"use client"

import { motion } from "framer-motion"
import { stats } from "@/lib/profile"

export function StatsStrip() {
  return (
    <section aria-label="Key numbers" className="bg-newspaper-accent text-[#f8f7f2] border-y-4 border-double border-newspaper-border">
      <div className="container-padding py-6 md:py-8">
        <p className="newspaper-meta text-[0.6rem] md:text-[0.65rem] text-[#f8f7f2]/60 text-center mb-5">
          A few results from production work
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="text-center px-3 lg:border-l lg:first:border-l-0 border-[#f8f7f2]/15"
            >
              <div className="font-playfair font-black text-3xl md:text-4xl lg:text-5xl leading-none">
                {stat.value}
              </div>
              <div className="font-merriweather italic text-[0.7rem] md:text-xs text-[#f8f7f2]/70 mt-2 leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
