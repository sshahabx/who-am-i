"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Award, GraduationCap } from "lucide-react"
import { certifications, education, writing, profile } from "@/lib/profile"
import { SectionHeader } from "@/components/sections/experience"

export function Credentials() {
  return (
    <section id="writing" className="section-padding-sm newspaper-bg paper-texture border-t border-newspaper-border/40">
      <div className="container-padding px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader index="04" title="Writing and education" />

          <div className="grid md:grid-cols-2 gap-8 md:gap-0">
            {/* Technical writing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:pr-10 md:border-r border-newspaper-border/30"
            >
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-newspaper-accent mb-1">Writing</h3>
              <p className="font-merriweather italic text-xs text-newspaper-text/60 mb-4">Step-by-step guides I wrote on Medium</p>
              <ol className="divide-y divide-newspaper-border/20 border-y border-newspaper-border/20">
                {writing.map((title, i) => (
                  <li key={title}>
                    <a
                      href={profile.links.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline gap-3 py-2.5 hover:bg-white/50 transition-colors px-1"
                    >
                      <span className="newspaper-meta text-[0.6rem] text-newspaper-text/40 w-5">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-playfair text-base md:text-lg text-newspaper-text/90 group-hover:text-newspaper-accent flex-1">
                        {title}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-newspaper-text/40 group-hover:text-newspaper-accent transition-colors" />
                    </a>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Certifications and education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:pl-10"
            >
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-newspaper-accent mb-1">Certifications</h3>
                            <ul className="space-y-3 mb-8 mt-4">
                {certifications.map((c) => (
                  <li key={c.name} className="flex gap-3 items-start border border-newspaper-border/30 bg-white/50 p-3">
                    <Award className="w-4 h-4 mt-0.5 text-newspaper-accent flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-merriweather text-sm text-newspaper-text font-semibold leading-snug">{c.name}</p>
                      <p className="newspaper-meta text-[0.6rem] text-newspaper-text/50 mt-0.5">
                        {c.issuer}{c.year ? ` · ${c.year}` : ""}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <h3 className="font-playfair text-xl md:text-2xl font-bold text-newspaper-accent mb-3">Education</h3>
              <div className="flex gap-3 items-start border-t-2 border-newspaper-accent pt-3">
                <GraduationCap className="w-5 h-5 text-newspaper-accent flex-shrink-0" />
                <div>
                  <p className="font-playfair text-lg font-bold text-newspaper-text leading-tight">{education.degree}</p>
                  <p className="font-merriweather text-sm text-newspaper-text/70">{education.school}</p>
                  <p className="newspaper-meta text-[0.6rem] text-newspaper-text/50 mt-1">{education.period}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
