"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown, MapPin, Calendar, Briefcase } from "lucide-react"
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
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 md:pt-32 pb-24 md:pb-12 newspaper-bg paper-texture relative overflow-hidden">
      {/* Subtle vintage overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f8f7f2]/50 pointer-events-none" />
      
      <div className="container-padding max-w-7xl relative z-10 w-full">
        {/* Refined Masthead */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 pb-8 border-b border-newspaper-border/40"
        >
          {/* Top Meta Line */}
          <div className="newspaper-meta text-newspaper-text/50 text-[0.65rem] md:text-sm mb-4 md:mb-6 tracking-wider mt-2 md:mt-4">
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
            <h1 className="font-old-standard text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.1em] md:tracking-[0.15em] text-newspaper-accent mb-3 md:mb-4 uppercase">
              The Tech Tatler
            </h1>
            
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "200px", opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[1px] bg-newspaper-accent mx-auto mb-5"
            />
          </motion.div>
          
          {/* Tagline */}
          <p className="font-merriweather text-sm md:text-base text-newspaper-text/70 italic tracking-wide">
            Engineering Excellence in Cloud & Infrastructure
          </p>
        </motion.div>

        {/* Main Article Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-[350px_1fr] gap-8 md:gap-12 lg:gap-16 items-start mb-8 md:mb-12">
          {/* Left Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-1 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0"
          >
            <div className="relative">
              {/* Image container */}
              <div className="relative w-full aspect-[3/4] border-4 border-newspaper-border/20 bg-white overflow-hidden shadow-lg">
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
              <div className="mt-3 pt-3 border-t border-newspaper-border/20">
                <p className="text-xs font-merriweather italic text-newspaper-text/70 text-center">
                  Shahab Alam — DevOps Engineer specializing in cloud infrastructure and automation
                </p>
              </div>
            </div>

            {/* Quick Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 md:mt-8 border border-newspaper-border/30 p-4 md:p-6 bg-white/50"
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
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-2 lg:order-2 w-full"
          >
            {/* Article tag */}
            <div className="mb-4">
              <span className="newspaper-meta text-newspaper-text/60 px-3 py-1 border border-newspaper-border/30 inline-block">
                SPECIAL FEATURE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-playfair font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-newspaper-accent mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Engineering Reliable Systems for an Unreliable World
            </h1>

            {/* Subheadline */}
            <h2 className="font-playfair font-semibold text-lg md:text-xl lg:text-2xl text-newspaper-text/90 mb-4 md:mb-6 leading-tight">
              By Shahab Alam
            </h2>

            {/* Divider */}
            <div className="newspaper-divider my-6" />

            {/* Lead paragraph */}
            <div className="font-merriweather text-sm md:text-base lg:text-lg text-newspaper-text/80 leading-relaxed space-y-3 md:space-y-4 text-left md:text-justify">
              <p className="first-letter:text-5xl md:first-letter:text-7xl first-letter:font-playfair first-letter:font-bold first-letter:float-left first-letter:mr-2 md:first-letter:mr-3 first-letter:leading-[0.8] first-letter:mt-0.5 md:first-letter:mt-1">
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
            <div className="newspaper-divider my-8" />

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="text-base bg-newspaper-accent hover:bg-newspaper-text text-white transition-all duration-300 px-8 py-6 w-full sm:w-auto font-merriweather"
                onClick={() => window.open('https://www.linkedin.com/in/sshahabx/', '_blank')}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-base border-2 border-newspaper-border/50 hover:border-newspaper-accent text-newspaper-accent hover:bg-newspaper-accent/5 transition-all duration-300 px-8 py-6 w-full sm:w-auto font-merriweather group"
                onClick={() => {
                  document.getElementById('whoami')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
              >
                Know More
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Continue reading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 pt-6 border-t border-newspaper-border/20"
            >
              <button
                onClick={() => {
                  document.getElementById('whoami')?.scrollIntoView({ 
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
          transition={{ delay: 1, duration: 0.8 }}
          className="border-t-2 border-b border-newspaper-border pt-4 pb-4"
        >
          <div className="flex flex-wrap justify-between items-center gap-4 newspaper-meta text-newspaper-text/50">
            <div className="flex items-center gap-6">
              <span>Infrastructure & DevOps</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Feature Article</span>
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
