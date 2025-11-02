"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden bg-gradient-to-b from-background via-background to-surface">
      {/* Subtle gradient shadow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-surface/50"></div>
      
      {/* Soft radial light effect */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/8 via-accent/4 to-transparent rounded-full blur-3xl"></div>
      
      {/* Bottom shadow for separation */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface/80 to-transparent"></div>
      
      <div className="container-padding flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 relative z-10">
        {/* Text Content - Left Side */}
        <div className="text-center lg:text-left space-y-10 flex-1 max-w-2xl order-1 lg:order-1">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-hero-sm md:text-hero font-black tracking-tighter leading-none mb-6">
              <span className="text-text-primary block">
                Hi, I'm
              </span>
              <span className="text-text-primary block mt-2">
                Shahab Alam
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-body-xl md:text-2xl text-text-secondary font-light leading-relaxed max-w-xl"
          >
            I create, manage, and (occasionally) destroy cloud infrastructure — intentionally.
          </motion.p>

              {/* CTA Buttons - Desktop only */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="pt-2 hidden lg:flex flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  className="text-base font-semibold group"
                  onClick={() => window.open('https://www.linkedin.com/in/sshahabx/', '_blank')}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base font-medium flex items-center gap-2"
                  onClick={() => {
                    document.getElementById('whoami')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Know More
                  <ChevronDown className="h-5 w-5" />
                </Button>
              </motion.div>
        </div>

        {/* Image - Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative lg:max-w-lg order-2 lg:order-2"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl blur-2xl transform scale-110"></div>
          
          {/* Image container with clean rounded frame */}
          <motion.div
            animate={{ 
              y: [0, -12, 0],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden border-2 border-border/50 bg-surface shadow-soft-lg"
          >
            <Image
              src="/unnamed (1).jpg"
              alt="Shahab Alam"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/5 to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons - Mobile only (below image) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex lg:hidden flex-row gap-3 order-3 w-full justify-center"
        >
          <Button 
            size="default"
            className="text-sm font-semibold group flex-1 max-w-[180px]"
            onClick={() => window.open('https://www.linkedin.com/in/sshahabx/', '_blank')}
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            size="default"
            variant="outline"
            className="text-sm font-medium flex items-center gap-2 flex-1 max-w-[180px]"
            onClick={() => {
              document.getElementById('whoami')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Know More
            <ChevronDown className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>

    </section>
  )
}


