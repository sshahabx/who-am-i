"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-[#FAFAFA]">
      {/* Subtle gradient shadow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA]/95 to-[#FAFAFA]/80"></div>
      
      {/* Soft radial light effect */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-accent/6 via-accent/3 to-transparent rounded-full blur-3xl"></div>
      
      {/* Bottom shadow for separation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/5 to-transparent"></div>
      
      <div className="container-padding flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        {/* Text Content - Left Side */}
        <div className="text-center lg:text-left space-y-8 flex-1 max-w-2xl">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-text-primary">
                Hi, I'm Shahab Alam
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-text-primary font-medium leading-relaxed"
          >
            I create, manage, and (occasionally) destroy cloud infrastructure — intentionally.
          </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="pt-4 flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  className="text-base bg-accent hover:bg-accent/90 text-white border-0 transition-all duration-300 group"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base border-text-secondary text-text-primary hover:bg-text-secondary hover:text-white transition-all duration-300"
                  onClick={() => {
                    document.getElementById('whoami')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Know More
                </Button>
              </motion.div>
        </div>

        {/* Image - Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative lg:max-w-md"
        >
          {/* Image container with clean rounded frame */}
          <motion.div
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-soft"
          >
            <Image
              src="/unnamed (1).jpg"
              alt="Shahab Alam"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}


