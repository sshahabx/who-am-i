"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      const encodedEmail = encodeURIComponent(email.trim())
      window.open(`https://medium.com/subscribe/@ssshahab_?email=${encodedEmail}`, '_blank', 'noopener,noreferrer')
      setEmail("")
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative z-20 -mb-20 md:-mb-24 px-4 md:px-0"
    >
      <div className="container-padding">
        {/* Newspaper Subscription Ad Style - More Compact */}
        <div className="bg-white border-2 md:border-4 border-newspaper-border/40 shadow-lg relative overflow-hidden max-w-4xl mx-auto">
          {/* Decorative corner elements - hidden on mobile */}
          <div className="hidden md:block absolute top-0 left-0 w-10 h-10 border-r-2 border-b-2 border-newspaper-border/30" />
          <div className="hidden md:block absolute top-0 right-0 w-10 h-10 border-l-2 border-b-2 border-newspaper-border/30" />
          <div className="hidden md:block absolute bottom-0 left-0 w-10 h-10 border-r-2 border-t-2 border-newspaper-border/30" />
          <div className="hidden md:block absolute bottom-0 right-0 w-10 h-10 border-l-2 border-t-2 border-newspaper-border/30" />

          {/* Paper texture overlay */}
          <div className="absolute inset-0 paper-texture opacity-20" />
          
          <div className="relative p-4 md:p-6 lg:p-8">
            {/* Header Banner - More Compact */}
            <div className="text-center mb-4 md:mb-5 pb-3 md:pb-4 border-b-2 border-newspaper-border/30">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="newspaper-meta text-newspaper-text/60 mb-1.5 text-[0.6rem]">SUBSCRIBE TO</p>
                <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-newspaper-accent newspaper-headline-spacing tracking-tight">
                  The Tech Tatler
                </h3>
                <p className="font-merriweather text-xs md:text-sm text-newspaper-text/70 italic mt-1">
                  Weekly insights on cloud infrastructure & DevOps
                </p>
              </motion.div>
            </div>

            {/* Single Column Layout - More Compact */}
            <div className="max-w-xl mx-auto">
              {/* Subscription Form - More Compact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-merriweather text-xs md:text-sm text-newspaper-text/80 mb-3 md:mb-4 leading-relaxed text-center">
                  Join hundreds of engineers receiving weekly technical insights. 
                  No spam, unsubscribe anytime.
                </p>

                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <div>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-2.5 border-2 border-newspaper-border/40 text-newspaper-text placeholder-newspaper-text/40 focus:outline-none focus:ring-2 focus:ring-newspaper-accent focus:border-transparent transition-all duration-300 font-merriweather text-xs md:text-sm rounded-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-newspaper-accent hover:bg-newspaper-text text-white font-merriweather font-semibold flex items-center justify-center gap-2 py-3 md:py-4 transition-all duration-300 text-xs md:text-sm"
                  >
                    <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    Subscribe Now
                  </Button>
                </form>

                <p className="text-[0.6rem] md:text-xs newspaper-meta text-newspaper-text/50 mt-2.5 text-center">
                  Powered by Medium · Privacy Guaranteed
                </p>
              </motion.div>
            </div>

            {/* Bottom decorative line - More Compact */}
            <div className="mt-4 md:mt-5 pt-3 md:pt-4 border-t border-newspaper-border/20">
              <p className="text-center text-[0.6rem] md:text-xs newspaper-meta text-newspaper-text/50">
                EST. 2025 · VOL. 01 · ISSUE ONGOING
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
