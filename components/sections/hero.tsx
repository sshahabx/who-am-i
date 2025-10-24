"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap } from "lucide-react"
import Link from "next/link"

const typingPhrases = [
  "Building scalable infrastructure...",
  "Automating all the things...",
  "Deploying to production...",
  "Optimizing cloud costs...",
  "Debugging at 3 AM...",
]

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex]
    const typingSpeed = isDeleting ? 30 : 80

    if (!isDeleting && displayedText === currentPhrase) {
      setTimeout(() => setIsDeleting(true), 2000)
      return
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % typingPhrases.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentPhrase.substring(0, displayedText.length - 1)
          : currentPhrase.substring(0, displayedText.length + 1)
      )
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, phraseIndex])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Gradient blob background */}
      <div className="absolute inset-0 bg-gradient-blob opacity-30" />
      
      <div className="container-padding flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-12 flex-1 max-w-4xl">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-4"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent tracking-wider uppercase">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-hero font-black tracking-tighter">
              <span className="gradient-text block text-shadow-glow">
                Shahab
              </span>
              <span className="gradient-text block text-shadow-glow">
                Alam
              </span>
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
              <div className="h-px bg-gradient-to-r from-accent/50 to-transparent flex-1 max-w-24" />
              <h2 className="text-display font-light text-text-primary tracking-wide text-shadow-soft">
                DevOps Engineer
              </h2>
              <div className="h-px bg-gradient-to-l from-accent/50 to-transparent flex-1 max-w-24" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-body-xl text-text-primary font-light leading-relaxed max-w-4xl"
          >
            Building resilient systems that{" "}
            <span className="text-accent font-medium relative">
              scale
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent/30 rounded-full" />
            </span>
            ,{" "}
            <span className="text-accent font-medium relative">
              automate
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent/30 rounded-full" />
            </span>
            , and{" "}
            <span className="text-accent font-medium relative">
              deploy
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent/30 rounded-full" />
            </span>{" "}
            with confidence.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-body-lg text-text-secondary leading-relaxed max-w-3xl font-light"
          >
            I specialize in cloud infrastructure, CI/CD pipelines, and infrastructure as code. 
            Turning complex problems into elegant, automated solutions.
          </motion.p>

          {/* Terminal Command */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-surface/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6 max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-500/60 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500/60 rounded-full" />
                <div className="w-3 h-3 bg-green-500/60 rounded-full" />
              </div>
              <span className="text-xs text-text-secondary font-mono">terminal</span>
            </div>
            <div className="font-mono text-accent text-lg flex items-center">
              <span className="mr-3 text-text-secondary">$</span>
              <span className="text-text-primary">shahab</span>
              <span className="text-text-secondary">@</span>
              <span className="text-accent">infrastructure</span>
              <span className="text-text-secondary">:</span>
              <span className="text-text-primary">~</span>
              <span className="text-text-secondary">$</span>
              <span className="ml-2">{displayedText}</span>
              <span className="animate-pulse-soft ml-1 text-accent">_</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link href="#projects">
              <Button 
                size="lg" 
                className="text-base bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent/50 text-accent hover:text-accent transition-all duration-300 group px-8 py-6"
              >
                <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Link href="/blog">
              <Button 
                size="lg" 
                variant="outline"
                className="text-base border-border/50 hover:border-accent/50 text-text-primary hover:text-accent transition-all duration-300 group px-8 py-6"
              >
                <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Read My Thoughts
              </Button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-12"
          >
            <button
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
              className="text-text-secondary/60 text-sm hover:text-accent transition-colors duration-300 cursor-pointer group"
            >
              <span className="group-hover:translate-y-1 transition-transform duration-300 inline-block">
                Scroll down to explore ↓
              </span>
            </button>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full blur-3xl scale-110" />
            
            {/* Image container with subtle border */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-border/50 bg-surface/30 backdrop-blur-sm">
              <img
                src="/unnamed (1).jpg"
                alt="Shahab Alam"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating accent dot */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-4 h-4 bg-accent rounded-full shadow-glow"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

