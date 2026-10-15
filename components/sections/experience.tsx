"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { experience, type Role } from "@/lib/profile"

export function Experience() {
  return (
    <section id="experience" className="section-padding-sm newspaper-bg paper-texture">
      <div className="container-padding px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader index="01" title="Experience" deck="What I've worked on, and what got better because of it." />

          <div className="divide-y divide-newspaper-border/25 border-t border-newspaper-border/40">
            {experience.map((role, i) => (
              <RoleEntry key={role.company} role={role} featured={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function RoleEntry({ role, featured }: { role: Role; featured: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-60px" }}
      className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-10 py-8 md:py-10"
    >
      {/* Meta column */}
      <div className="md:pt-1.5">
        <p className="newspaper-meta text-[0.65rem] text-newspaper-text/60">{role.period}</p>
        <p className="font-merriweather italic text-xs text-newspaper-text/50 mt-1">{role.location}</p>
        {featured && (
          <span className="inline-flex items-center gap-1.5 mt-3 newspaper-meta text-[0.6rem] text-newspaper-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Current
          </span>
        )}
      </div>

      {/* Content column */}
      <div>
        <h3 className="font-playfair text-2xl md:text-3xl font-bold text-newspaper-accent leading-tight">
          {role.role}
          <span className="font-normal text-newspaper-text/50"> at </span>
          {role.url ? (
            <a href={role.url} target="_blank" rel="noopener noreferrer" className="italic whitespace-nowrap hover:opacity-70 transition-opacity">
              {role.company}
              <ArrowUpRight className="inline w-4 h-4 ml-0.5 opacity-50 align-top" />
            </a>
          ) : (
            <span className="italic">{role.company}</span>
          )}
        </h3>

        {role.summary && (
          <p className="font-merriweather italic text-sm text-newspaper-text/60 mt-1.5">{role.summary}</p>
        )}

        {role.intro && (
          <p className="font-merriweather text-[0.95rem] md:text-base text-newspaper-text/85 leading-relaxed mt-4 max-w-3xl">
            {role.intro}
          </p>
        )}

        <ul className={`mt-5 grid gap-x-8 gap-y-3 ${featured ? "md:grid-cols-2" : ""}`}>
          {role.highlights.map((h) => (
            <li key={h} className="flex gap-3 font-merriweather text-sm text-newspaper-text/80 leading-relaxed">
              <span className="mt-[0.6rem] h-px w-3 flex-shrink-0 bg-newspaper-accent/60" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export function SectionHeader({ index, title, deck }: { index: string; title: string; deck?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-6 md:mb-8 flex items-end gap-4 md:gap-6"
    >
      <span className="font-playfair text-5xl md:text-7xl font-black text-newspaper-accent/10 leading-none select-none">
        {index}
      </span>
      <div className="pb-1">
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-newspaper-accent tracking-tight leading-none">
          {title}
        </h2>
        {deck && (
          <p className="font-merriweather text-sm text-newspaper-text/65 italic mt-2">{deck}</p>
        )}
      </div>
    </motion.div>
  )
}
