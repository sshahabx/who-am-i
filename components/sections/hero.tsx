"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar, Briefcase } from "lucide-react"
import Link from "next/link"

export function Hero() {
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
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 newspaper-bg paper-texture relative overflow-hidden">
      {/* Subtle vintage overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f8f7f2]/50 pointer-events-none" />
      
      <div className="container-padding max-w-7xl relative z-10">
        {/* Masthead */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 border-b-2 border-newspaper-border pb-6"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="newspaper-meta text-newspaper-text/60">
              Vol. 01 · Issue 2025
            </div>
            <div className="newspaper-meta text-newspaper-text/60">
              {currentDate}
            </div>
          </div>
          <h1 className="font-old-standard text-5xl md:text-6xl font-bold tracking-wider text-newspaper-accent mb-2">
            THE TECH TIMES
          </h1>
          <p className="newspaper-meta text-newspaper-text/50">
            Engineering Excellence · Cloud Infrastructure · DevOps Innovation
          </p>
        </motion.div>

        {/* Main Article Layout */}
        <div className="grid lg:grid-cols-[350px_1fr] gap-12 lg:gap-16 items-start mb-12">
          {/* Left Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Image container */}
              <div className="relative w-full aspect-[3/4] border-4 border-newspaper-border/20 bg-white overflow-hidden shadow-lg">
                <img
                  src="/unnamed (1).jpg"
                  alt="Shahab Alam"
                  className="w-full h-full object-cover grayscale-image"
                />
                {/* Paper texture overlay */}
                <div className="absolute inset-0 paper-texture opacity-20" />
              </div>
              
              {/* Image caption */}
              <div className="mt-3 pt-3 border-t border-newspaper-border/20">
                <p className="text-xs font-merriweather italic text-newspaper-text/70 text-center">
                  Shahab Alam — Principal DevOps Engineer specializing in cloud infrastructure and automation
                </p>
              </div>
            </div>

            {/* Quick Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 border border-newspaper-border/30 p-6 bg-white/50"
            >
              <h3 className="font-playfair font-bold text-lg text-newspaper-accent mb-4 pb-2 border-b border-newspaper-border/20">
                Quick Facts
              </h3>
              <div className="space-y-3 font-merriweather text-sm text-newspaper-text/80">
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

          {/* Right Column: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            {/* Article tag */}
            <div className="mb-4">
              <span className="newspaper-meta text-newspaper-text/60 px-3 py-1 border border-newspaper-border/30 inline-block">
                SPECIAL FEATURE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-playfair font-black text-6xl md:text-7xl lg:text-8xl text-newspaper-accent mb-6 leading-[0.9] tracking-tight">
              SHAHAB<br />ALAM
            </h1>

            {/* Subheadline */}
            <h2 className="font-playfair font-semibold text-2xl md:text-3xl text-newspaper-text/90 mb-6 leading-tight">
              Building the Infrastructure of Tomorrow, One Pipeline at a Time
            </h2>

            {/* Divider */}
            <div className="newspaper-divider my-6" />

            {/* Lead paragraph */}
            <div className="font-merriweather text-base md:text-lg text-newspaper-text/80 leading-relaxed space-y-4 text-justify">
              <p className="first-letter:text-7xl first-letter:font-playfair first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-[0.8] first-letter:mt-1">
                In the rapidly evolving landscape of cloud infrastructure and DevOps engineering, few practitioners combine 
                technical excellence with the vision to transform complex systems into elegant, automated solutions. 
                Shahab Alam stands among this elite group, specializing in building resilient systems that scale, 
                automate, and deploy with unwavering confidence.
              </p>

              <p>
                With deep expertise in cloud infrastructure, CI/CD pipelines, and infrastructure as code, 
                Alam has consistently demonstrated the ability to turn intricate challenges into streamlined, 
                production-ready systems. His work spans multi-cloud environments, Kubernetes orchestration, 
                and comprehensive observability implementations that handle millions of events per second.
              </p>

              <p>
                "The beauty of DevOps," Alam reflects, "lies not in the tools we use, but in the problems we solve 
                and the reliability we deliver." This philosophy permeates his approach to infrastructure automation, 
                where reducing deployment times by 70% and cutting cloud costs by 40% are not mere statistics, 
                but tangible improvements to developer experience and business operations.
              </p>
            </div>

            {/* Divider */}
            <div className="newspaper-divider my-8" />

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#projects" className="group">
                <Button 
                  size="lg" 
                  className="text-base bg-newspaper-accent hover:bg-newspaper-text text-white transition-all duration-300 px-8 py-6 w-full sm:w-auto font-merriweather"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              
              <Link href="/blog" className="group">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base border-2 border-newspaper-border/50 hover:border-newspaper-accent text-newspaper-accent hover:bg-newspaper-accent/5 transition-all duration-300 px-8 py-6 w-full sm:w-auto font-merriweather"
                >
                  Read Articles
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>

            {/* Continue reading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8 pt-6 border-t border-newspaper-border/20"
            >
              <button
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
                className="text-newspaper-text/60 text-sm font-merriweather italic hover:text-newspaper-accent transition-colors duration-300 cursor-pointer group underline-slide"
              >
                Continue reading below ↓
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom metadata bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="border-t-2 border-b border-newspaper-border pt-4 pb-4"
        >
          <div className="flex flex-wrap justify-between items-center gap-4 newspaper-meta text-newspaper-text/50">
            <div className="flex items-center gap-6">
              <span>Published: {currentDate}</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Infrastructure & DevOps</span>
            </div>
            <div className="flex items-center gap-6">
              <span>Available for Opportunities</span>
              <span>•</span>
              <span>Remote</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
