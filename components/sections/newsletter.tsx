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
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#1b1b1b] text-[#f2f2f2] shadow-2xl p-6 md:p-8 rounded-md">
          <div className="text-center space-y-4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h3 className="text-3xl md:text-4xl font-bold font-inter text-white">
                Stay Updated
              </h3>
              <p className="text-lg text-[#f2f2f2]/80 font-inter max-w-2xl mx-auto">
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
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#404040] text-[#f2f2f2] placeholder-[#a0a0a0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-inter rounded-md"
                />
              </div>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-inter font-medium transition-all duration-200 flex items-center gap-2 rounded-md"
              >
                <Mail className="h-4 w-4" />
                Subscribe
              </Button>
            </motion.form>

            {/* Footer Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm text-[#a0a0a0] font-inter"
            >
              Powered by Medium • Unsubscribe anytime
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
