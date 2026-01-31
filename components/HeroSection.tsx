"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown, MapPin, Calendar, Briefcase, ExternalLink } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [currentDate, setCurrentDate] = useState("")

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
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 md:pt-24 pb-12 md:pb-16 newspaper-bg paper-texture relative overflow-hidden" id="hero">
      {/* Subtle vintage overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f8f7f2]/50 pointer-events-none" />
      
      <div className="container-padding max-w-7xl relative z-10 w-full">
        {/* Refined Masthead - Compact */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 md:mb-12 pb-6 border-b border-newspaper-border/40"
        >
          {/* Top Meta Line */}
          <div className="newspaper-meta text-newspaper-text/50 text-[0.65rem] md:text-sm mb-3 md:mb-4 tracking-wider mt-2">
            <span className="block sm:inline">Vol. 01 · Issue 2025</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span className="block sm:inline text-[0.6rem] md:text-xs mt-1 sm:mt-0">{currentDate}</span>
          </div>
          
          {/* Newspaper Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-old-standard text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.1em] md:tracking-[0.15em] text-newspaper-accent mb-2 md:mb-3 uppercase">
              The Tech Tatler
            </h1>
            
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "200px", opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[1px] bg-newspaper-accent mx-auto mb-3 md:mb-4"
            />
          </motion.div>
          
          {/* Tagline */}
          <p className="font-merriweather text-sm md:text-base text-newspaper-text/70 italic tracking-wide">
            Engineering Excellence in Cloud & Infrastructure
          </p>
        </motion.div>

        {/* Three Column Newspaper Layout - Main Article + Sidebar */}
        <div className="flex flex-col lg:grid lg:grid-cols-[280px_1fr_320px] gap-6 md:gap-6 lg:gap-8 items-start mb-6 md:mb-8">
          {/* Left Column: Profile Image - Compact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-1 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0"
          >
            <div className="relative">
              {/* Image container */}
              <div className="relative w-full aspect-[3/4] border-2 border-newspaper-border/20 bg-white overflow-hidden shadow-lg">
                <Image
                  src="/unnamed (1).jpg"
                  alt="Shahab Alam"
                  fill
                  className="object-cover grayscale-image"
                  priority
                />
                {/* Paper texture overlay */}
                <div className="absolute inset-0 paper-texture opacity-20" />
              </div>
              
              {/* Image caption */}
              <div className="mt-2 pt-2 border-t border-newspaper-border/20">
                <p className="text-xs font-merriweather italic text-newspaper-text/70 text-center">
                  Shahab Alam — DevOps Engineer specializing in cloud infrastructure and automation
                </p>
              </div>
            </div>

            {/* Quick Info Box - Compact */}
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
                  <span>DevOps Engineer</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Remote / Global</span>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Center Column: Main Content - Compact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-2 lg:order-2 w-full border-r-0 lg:border-r border-newspaper-border/30 lg:pr-6"
          >
            {/* Article tag */}
            <div className="mb-3">
              <span className="newspaper-meta text-newspaper-text/60 px-3 py-1 border border-newspaper-border/30 inline-block text-[0.65rem]">
                SPECIAL FEATURE
              </span>
            </div>

            {/* Main Headline - Compact */}
            <h2 className="font-playfair font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-newspaper-accent newspaper-headline-spacing leading-[1.1] tracking-tight">
              Engineering Reliable Systems for an Unreliable World
            </h2>

            {/* Subheadline */}
            <h3 className="font-playfair font-semibold text-base md:text-lg lg:text-xl text-newspaper-text/90 mb-3 md:mb-4 leading-tight">
              By Shahab Alam
            </h3>

            {/* Divider */}
            <div className="newspaper-divider my-4" />

            {/* Lead paragraph - Compact */}
            <div className="font-merriweather text-sm md:text-base lg:text-lg text-newspaper-text/80 leading-relaxed newspaper-compact space-y-3 text-left md:text-justify">
              <p className="first-letter:text-4xl md:first-letter:text-6xl first-letter:font-playfair first-letter:font-bold first-letter:float-left first-letter:mr-2 md:first-letter:mr-3 first-letter:leading-[0.8] first-letter:mt-0.5 md:first-letter:mt-1">
                In the evolving world of cloud infrastructure and DevOps, Shahab Alam focuses on building systems 
                that are reliable, efficient, and easy to maintain. With about a year of experience in cloud and 
                DevOps engineering, he's developed a growing interest in how automation, observability, and scalable 
                design come together to improve how software is deployed and operated.
              </p>

              <p>
                He's worked with tools across cloud platforms, CI/CD pipelines, and infrastructure as code, with a 
                focus on learning what makes systems not just functional, but resilient and simple to manage. For 
                Shahab, DevOps is less about chasing new tools and more about building environments where teams can 
                move faster and with confidence.
              </p>
            </div>

            {/* Divider */}
            <div className="newspaper-divider my-5 md:my-6" />

            {/* CTA Section - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button 
                size="lg" 
                className="text-sm md:text-base bg-newspaper-accent hover:bg-newspaper-text text-white transition-all duration-300 px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto font-merriweather"
                onClick={() => window.open('https://www.linkedin.com/in/sshahabx/', '_blank')}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-sm md:text-base border-2 border-newspaper-border/50 hover:border-newspaper-accent text-newspaper-accent hover:bg-newspaper-accent/5 transition-all duration-300 px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto font-merriweather group"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Continue reading indicator - Compact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-5 md:mt-6 pt-4 border-t border-newspaper-border/20"
            >
              <button
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
                className="text-newspaper-text/60 text-xs md:text-sm font-merriweather italic hover:text-newspaper-accent transition-colors duration-300 cursor-pointer group underline-slide"
              >
                Continue reading below ↓
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: About & Current Work Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-3 lg:order-3 w-full space-y-6"
          >
            {/* About Section - Sidebar Style */}
            <div className="border border-newspaper-border/30 bg-white/50 p-4 md:p-5">
              <div className="mb-3">
                <div className="newspaper-divider mb-2" />
                <h3 className="font-playfair text-lg md:text-xl font-bold text-newspaper-accent newspaper-headline-spacing tracking-tight">
                  About
                </h3>
                <p className="newspaper-meta text-newspaper-text/50 text-[0.65rem] mt-1">
                  Profile
                </p>
                <div className="newspaper-divider mt-2" />
              </div>

              <div className="space-y-3">
                <div className="font-merriweather text-xs md:text-sm text-newspaper-text/80 leading-relaxed newspaper-compact space-y-2.5 text-left">
                  <p className="first-letter:text-3xl first-letter:font-playfair first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-[0.8] first-letter:mt-0.5">
                    I have a background in cybersecurity and cloud infrastructure. 
                    I enjoy creating systems that are efficient, scalable, and secure, 
                    but also feel simple and purposeful.
                  </p>

                  <p>
                    Over time I've found myself drawn to minimalism, both in design 
                    and in how I approach my work and life. For me, good engineering 
                    is about keeping things clear, reliable, and human.
                  </p>
                </div>

                <div className="pt-3 border-t border-newspaper-border/20">
                  <p className="text-[0.6rem] newspaper-meta text-newspaper-text/50">
                    Written by Shahab Alam
                  </p>
                </div>
              </div>
            </div>

            {/* Current Work Section - Sidebar Style */}
            <div className="border border-newspaper-border/30 bg-white/50 p-4 md:p-5">
              <div className="mb-3">
                <div className="newspaper-divider mb-2" />
                <h3 className="font-playfair text-lg md:text-xl font-bold text-newspaper-accent newspaper-headline-spacing tracking-tight">
                  Currently At
                </h3>
                <p className="newspaper-meta text-newspaper-text/50 text-[0.65rem] mt-1">
                  Employment
                </p>
                <div className="newspaper-divider mt-2" />
              </div>

              <div className="bg-white border border-newspaper-border/40 p-3 md:p-4 shadow-sm mb-4">
                <div className="space-y-2">
                  <div>
                    <h4 className="font-playfair text-base md:text-lg font-bold text-newspaper-accent newspaper-headline-spacing leading-tight">
                      DevOps Engineer
                    </h4>
                    <a 
                      href="https://centrox.ai/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm md:text-base font-playfair text-newspaper-text/80 hover:text-newspaper-accent transition-all duration-300 group"
                    >
                      <span className="underline-slide">
                        Centrox AI
                      </span>
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-newspaper-border/20">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 border border-newspaper-border/40 newspaper-meta text-newspaper-text/70 text-[0.6rem]">
                      <Calendar className="w-2.5 h-2.5" />
                      <span>Oct 2025 - Present</span>
                    </div>
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 border border-newspaper-border/40 newspaper-meta text-newspaper-text/70 text-[0.6rem]">
                      <MapPin className="w-2.5 h-2.5" />
                      <span>On-site</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 font-merriweather text-xs md:text-sm text-newspaper-text/80 leading-relaxed newspaper-compact text-left">
                <p className="first-letter:text-3xl first-letter:font-playfair first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-[0.8] first-letter:mt-0.5">
                  Centrox AI is a technology company specializing in AI-driven 
                  platforms and infrastructure automation for scalable, data-intensive 
                  applications.
                </p>

                <p>
                  As a DevOps Engineer, I focus on cloud infrastructure automation, 
                  cost optimization, and deployment reliability, ensuring production-grade 
                  environments for AI workloads.
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-newspaper-border/20">
                <p className="newspaper-meta text-newspaper-text/50 mb-2 text-[0.6rem]">Key Focus:</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Cloud', 'CI/CD', 'Cost Opt.', 'AI/ML', 'IaC'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 border border-newspaper-border/40 newspaper-meta text-newspaper-text/70 hover:bg-newspaper-accent/5 hover:border-newspaper-accent/40 transition-colors duration-300 text-[0.6rem]"
                    >
                      {tech}
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
