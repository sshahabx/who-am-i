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
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] text-white shadow-soft-lg p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"></div>
          
          <div className="relative text-center space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-display-sm md:text-display font-bold text-white">
                Stay Updated
              </h3>
              <p className="text-body-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                Get the latest insights on cloud infrastructure, DevOps practices, and engineering thoughts delivered to your inbox.
              </p>
            </motion.div>

            {/* Email Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-2"
            >
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 rounded-xl backdrop-blur-sm font-light"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-accent hover:bg-accent-dark text-white font-semibold flex items-center gap-2 shadow-glow"
              >
                <Mail className="h-5 w-5" />
                Subscribe
              </Button>
            </motion.form>

            {/* Footer Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm text-white/50 font-light pt-2"
            >
              Powered by Medium • Unsubscribe anytime
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
