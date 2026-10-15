"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown, MapPin, Briefcase, ExternalLink, GraduationCap, ShieldCheck, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { profile, experience, education } from "@/lib/profile"

export function HeroSection() {
  const [currentDate, setCurrentDate] = useState("")
  const current = experience[0]

  useEffect(() => {
    const date = new Date()
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    setCurrentDate(formattedDate)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 md:pt-28 pb-12 md:pb-16 newspaper-bg paper-texture relative overflow-hidden" id="about">
      {/* Subtle vintage overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f8f7f2]/50 pointer-events-none" />

      <div className="container-padding max-w-7xl relative z-10 w-full">
        {/* Masthead */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 md:mb-10 pb-5 border-b-[3px] border-double border-newspaper-border/50"
        >
          <div className="newspaper-meta text-newspaper-text/50 text-[0.65rem] md:text-xs mb-3 md:mb-4 tracking-wider mt-2 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
            <span>Vol. 02 · Platform Edition</span>
            <span className="hidden sm:inline">•</span>
            <span>{currentDate}</span>
            <span className="hidden sm:inline">•</span>
            <span>{profile.location}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-old-standard text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.1em] md:tracking-[0.15em] text-newspaper-accent mb-2 md:mb-3 uppercase">
              The Tech Tatler
            </h1>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "200px", opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[1px] bg-newspaper-accent mx-auto mb-3 md:mb-4"
            />
          </motion.div>

          <p className="font-merriweather text-sm md:text-base text-newspaper-text/70 italic tracking-wide">
            Platform · Security · Reliability
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-[260px_1fr_320px] gap-8 lg:gap-8 items-start mb-6 md:mb-8">
          {/* Left: portrait + quick facts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 lg:order-1 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0"
          >
            <div className="relative">
              <div className="relative w-full aspect-[3/4] border-2 border-newspaper-border/20 bg-white overflow-hidden shadow-lg group">
                <Image
                  src="/unnamed (1).jpg"
                  alt={profile.name}
                  fill
                  className="object-cover grayscale-image group-hover:grayscale-0 transition-all duration-700"
                  priority
                />
                <div className="absolute inset-0 paper-texture opacity-20" />
              </div>
              <div className="mt-2 pt-2 border-t border-newspaper-border/20">
                <p className="text-xs font-merriweather italic text-newspaper-text/70 text-center">
                  {profile.name}, {profile.title.toLowerCase()}
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-5 md:mt-6 border border-newspaper-border/30 p-4 md:p-5 bg-white/50"
            >
              <h3 className="font-playfair font-bold text-base md:text-lg text-newspaper-accent mb-3 pb-2 border-b border-newspaper-border/20">
                Quick Facts
              </h3>
              <div className="space-y-2.5 font-merriweather text-sm text-newspaper-text/80">
                <div className="flex items-start gap-2">
                  <Briefcase className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{profile.title}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{education.degree}, FAST</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>ISC2 Certified in Cybersecurity</span>
                </div>
              </div>
              <div className="flex gap-2 mt-4 pt-3 border-t border-newspaper-border/20">
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 border border-newspaper-border/30 text-newspaper-text/70 hover:text-white hover:bg-newspaper-accent transition-colors duration-300">
                  <Github className="w-4 h-4" />
                </a>
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 border border-newspaper-border/30 text-newspaper-text/70 hover:text-white hover:bg-newspaper-accent transition-colors duration-300">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Center: lead story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 w-full lg:border-x border-newspaper-border/30 lg:px-8"
          >
            <div className="mb-3">
              <span className="newspaper-meta text-newspaper-text/60 px-3 py-1 border border-newspaper-border/30 inline-block text-[0.65rem]">
                Lead Story
              </span>
            </div>

            <h2 className="font-playfair font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-newspaper-accent newspaper-headline-spacing leading-[1.05] tracking-tight">
              {profile.headline}
            </h2>

            <p className="font-playfair italic text-base md:text-lg lg:text-xl text-newspaper-text/80 mt-3 mb-3 md:mb-4 leading-snug">
              {profile.subheadline}
            </p>

            <p className="newspaper-meta text-newspaper-text/60 text-[0.7rem]">
              By {profile.shortName}
            </p>

            <div className="newspaper-divider my-4" />

            <div className="font-merriweather text-sm md:text-base text-newspaper-text/80 leading-relaxed space-y-3 text-left md:text-justify">
              <p>{profile.bio[0]}</p>
              <p>{profile.bio[1]}</p>
            </div>

            <div className="newspaper-divider my-5 md:my-6" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                size="lg"
                className="group text-sm md:text-base bg-newspaper-accent hover:bg-newspaper-text text-white transition-all duration-300 px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto font-merriweather"
                onClick={() => { window.location.href = `mailto:${profile.email}` }}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-sm md:text-base border-2 border-newspaper-border/50 hover:border-newspaper-accent text-newspaper-accent hover:bg-newspaper-accent/5 transition-all duration-300 px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto font-merriweather group"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Read the Record
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: currently at */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-3 w-full"
          >
            <div className="border border-newspaper-border/30 bg-white/50 p-4 md:p-5">
              <div className="mb-3">
                <div className="newspaper-divider mb-2" />
                <h3 className="font-playfair text-lg md:text-xl font-bold text-newspaper-accent newspaper-headline-spacing tracking-tight">
                  Currently At
                </h3>
                <p className="newspaper-meta text-newspaper-text/50 text-[0.65rem] mt-1">
                  {current.period}
                </p>
                <div className="newspaper-divider mt-2" />
              </div>

              <div className="bg-white border border-newspaper-border/40 p-3 md:p-4 shadow-sm mb-4">
                <h4 className="font-playfair text-base md:text-lg font-bold text-newspaper-accent leading-tight">
                  {current.role}
                </h4>
                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm md:text-base font-playfair text-newspaper-text/80 hover:text-newspaper-accent transition-all duration-300 group"
                >
                  <span className="underline-slide">{current.company}</span>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-all duration-300" />
                </a>
                <p className="newspaper-meta text-newspaper-text/60 text-[0.6rem] mt-2">{current.location}</p>
              </div>

              <div className="space-y-2.5 font-merriweather text-xs md:text-sm text-newspaper-text/80 leading-relaxed text-left">
                <p className="first-letter:text-3xl first-letter:font-playfair first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-[0.8] first-letter:mt-0.5">
                  {current.summary}
                </p>
                <p>
                  I own the GCP organization, IAM and identity lifecycle, the isolated customer-environment platform,
                  and shared AI services, from GPU clusters to break-glass access.
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-newspaper-border/20">
                <p className="newspaper-meta text-newspaper-text/50 mb-2 text-[0.6rem]">On the desk:</p>
                <div className="flex flex-wrap gap-1.5">
                  {['GCP', 'GKE', 'Terraform', 'IAM', 'GPU infra', 'Supply chain'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 border border-newspaper-border/40 newspaper-meta text-newspaper-text/70 text-[0.6rem]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
