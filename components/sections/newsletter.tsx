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
      className="relative z-20 -mb-44"
    >
      <div className="container-padding">
        {/* Newspaper Subscription Ad Style */}
        <div className="bg-white border-4 border-newspaper-border/40 shadow-lg relative overflow-hidden max-w-5xl mx-auto">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-r-2 border-b-2 border-newspaper-border/30" />
          <div className="absolute top-0 right-0 w-16 h-16 border-l-2 border-b-2 border-newspaper-border/30" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-r-2 border-t-2 border-newspaper-border/30" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-l-2 border-t-2 border-newspaper-border/30" />

          {/* Paper texture overlay */}
          <div className="absolute inset-0 paper-texture opacity-20" />
          
          <div className="relative p-8 md:p-12">
            {/* Header Banner */}
            <div className="text-center mb-8 pb-6 border-b-2 border-newspaper-border/30">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="newspaper-meta text-newspaper-text/60 mb-3">SUBSCRIBE TO</p>
                <h3 className="font-playfair text-4xl md:text-5xl font-bold text-newspaper-accent mb-3 tracking-tight">
                  The Tech Tatler
                </h3>
                <p className="font-merriweather text-base text-newspaper-text/70 italic">
                  Weekly insights on cloud infrastructure & DevOps excellence
                </p>
              </motion.div>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 items-center">
              {/* Left: Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="font-playfair text-xl font-bold text-newspaper-accent mb-4">
                  What You'll Receive:
                </h4>
                <ul className="space-y-3 font-merriweather text-sm text-newspaper-text/80">
                  <li className="flex items-start gap-3">
                    <span className="text-newspaper-accent font-bold mt-0.5">▪</span>
                    <span>Technical deep-dives on infrastructure patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-newspaper-accent font-bold mt-0.5">▪</span>
                    <span>Real-world DevOps case studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-newspaper-accent font-bold mt-0.5">▪</span>
                    <span>Cloud optimization strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-newspaper-accent font-bold mt-0.5">▪</span>
                    <span>Industry insights & best practices</span>
                  </li>
                </ul>
              </motion.div>

              {/* Right: Subscription Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="border-l-2 border-newspaper-border/30 pl-8"
              >
                <p className="font-merriweather text-base text-newspaper-text/80 mb-6 leading-relaxed">
                  Join hundreds of engineers receiving weekly technical insights. 
                  No spam, unsubscribe anytime.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 border-2 border-newspaper-border/40 text-newspaper-text placeholder-newspaper-text/40 focus:outline-none focus:ring-2 focus:ring-newspaper-accent focus:border-transparent transition-all duration-300 font-merriweather text-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-newspaper-accent hover:bg-newspaper-text text-white font-merriweather font-semibold flex items-center justify-center gap-2 py-6 transition-all duration-300"
                  >
                    <Mail className="h-5 w-5" />
                    Subscribe Now
                  </Button>
                </form>

                <p className="text-xs newspaper-meta text-newspaper-text/50 mt-4 text-center">
                  Powered by Medium · Privacy Guaranteed
                </p>
              </motion.div>
            </div>

            {/* Bottom decorative line */}
            <div className="mt-8 pt-6 border-t border-newspaper-border/20">
              <p className="text-center text-xs newspaper-meta text-newspaper-text/50">
                EST. 2025 · VOL. 01 · ISSUE ONGOING
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
