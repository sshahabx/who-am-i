"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, ChevronDown } from "lucide-react"
import { experience } from "@/lib/profile"

const VISIBLE_HIGHLIGHTS = 6

export function Experience() {
  const [expanded, setExpanded] = useState(false)
  const [current, ...previous] = experience
  const shown = expanded ? current.highlights : current.highlights.slice(0, VISIBLE_HIGHLIGHTS)

  return (
    <section id="experience" className="section-padding-sm newspaper-bg paper-texture">
      <div className="container-padding px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Section A · The Record" title="Experience" deck="Where the infrastructure got built, and what changed because of it." />

          {/* Current role: feature story */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-newspaper-border/30 pt-6 md:pt-8"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-4">
              <div>
                <h3 className="font-playfair text-2xl md:text-4xl font-bold text-newspaper-accent leading-tight">
                  {current.role},{" "}
                  <a href={current.url} target="_blank" rel="noopener noreferrer" className="italic whitespace-nowrap hover:opacity-80">
                    {current.company}
                    <ExternalLink className="inline w-4 h-4 ml-1.5 opacity-50 align-baseline" />
                  </a>
                </h3>
              </div>
              <p className="newspaper-meta text-newspaper-text/60 text-[0.65rem] md:text-xs whitespace-nowrap">
                {current.period} · {current.location}
              </p>
            </div>

            <div className="newspaper-divider mb-5" />

            <div className="grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-10">
              <aside className="space-y-4">
                <p className="font-merriweather text-sm text-newspaper-text/80 leading-relaxed">
                  {current.summary}
                </p>
                <blockquote className="border-l-4 border-newspaper-accent pl-4 py-1">
                  <p className="newspaper-meta text-[0.6rem] text-newspaper-text/50 mb-1">My scope</p>
                  <p className="font-playfair italic text-base md:text-lg text-newspaper-text/90 leading-snug">
                    {current.scope}
                  </p>
                </blockquote>
              </aside>

              <div>
                <div className="sm:columns-2 gap-8 [column-rule:1px_solid_rgba(74,74,74,0.2)]">
                  {shown.map((h) => (
                    <div key={h.title} className="break-inside-avoid mb-5">
                      <h4 className="font-playfair font-bold text-base md:text-lg text-newspaper-accent leading-tight mb-1">
                        {h.title}
                      </h4>
                      <p className="font-merriweather text-[0.8rem] md:text-sm text-newspaper-text/80 leading-relaxed">
                        {h.body}
                      </p>
                    </div>
                  ))}
                </div>
                {current.highlights.length > VISIBLE_HIGHLIGHTS && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-1 flex items-center gap-1 text-sm text-newspaper-accent hover:text-newspaper-text transition-colors duration-200 font-merriweather italic"
                  >
                    {expanded ? "Show fewer" : `Continued: ${current.highlights.length - VISIBLE_HIGHLIGHTS} more`}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                  </button>
                )}
              </div>
            </div>
          </motion.article>

          {/* Previous roles */}
          <div className="grid md:grid-cols-[2fr_1fr] gap-6 md:gap-10 mt-10 pt-6 md:pt-8 border-t-[3px] border-double border-newspaper-border/40">
            {previous.map((role, i) => (
              <motion.article
                key={role.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={i > 0 ? "md:border-l md:pl-8 border-newspaper-border/30" : ""}
              >
                <p className="newspaper-meta text-newspaper-text/50 text-[0.6rem] mb-1">{role.period}</p>
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-newspaper-accent leading-tight">
                  {role.role},{" "}
                  {role.url ? (
                    <a href={role.url} target="_blank" rel="noopener noreferrer" className="italic underline-slide">{role.company}</a>
                  ) : (
                    <span className="italic">{role.company}</span>
                  )}
                </h3>
                <div className="newspaper-divider my-3" />
                <ul className={`${role.highlights.length > 4 ? "lg:columns-2 lg:gap-6" : ""}`}>
                  {role.highlights.map((h) => (
                    <li key={h.body} className="break-inside-avoid mb-2 flex gap-2 font-merriweather text-[0.8rem] md:text-sm text-newspaper-text/80 leading-relaxed">
                      <span className="text-newspaper-accent font-bold select-none">▪</span>
                      <span>{h.body}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({ kicker, title, deck }: { kicker: string; title: string; deck?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-6 md:mb-8"
    >
      <div className="newspaper-divider mb-2" />
      <div className="newspaper-meta text-newspaper-text/50 text-[0.65rem] mb-2">{kicker}</div>
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-newspaper-accent tracking-tight newspaper-headline-spacing">
        {title}
      </h2>
      {deck && (
        <p className="font-merriweather text-xs md:text-sm text-newspaper-text/70 italic mt-1">{deck}</p>
      )}
      <div className="newspaper-divider mt-2" />
    </motion.div>
  )
}
