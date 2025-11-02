"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

interface TypingStatsData {
  stats: {
    tests_completed: number
    time_typing: string
    sessions: Array<{
      wpm: number
    }>
  }
}

export function TypingStats() {
  const [stats, setStats] = useState<TypingStatsData | null>(null)
  const [avgSpeed, setAvgSpeed] = useState<number>(0)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats')
        if (response.ok) {
          const data = await response.json()
          setStats(data)
          
          // Calculate average WPM from sessions
          if (data.stats.sessions && data.stats.sessions.length > 0) {
            const totalWpm = data.stats.sessions.reduce((sum: number, session: { wpm: number }) => sum + session.wpm, 0)
            const average = Math.round(totalWpm / data.stats.sessions.length)
            setAvgSpeed(average)
          }
        }
      } catch (error) {
        console.error('Error fetching typing stats:', error)
        // Use fallback values
        setAvgSpeed(101)
        setStats({
          stats: {
            tests_completed: 902,
            time_typing: "01:40:15",
            sessions: []
          }
        })
      }
    }

    fetchStats()
  }, [])

  return (
    <section className="section-padding-sm bg-gradient-to-b from-surface to-background">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Header */}
          <div className="mb-12">
            <h3 className="text-display font-bold text-text-primary font-jetbrains-mono mb-4">
              i know how to type
            </h3>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full"
            />
          </div>

          {/* Stats Display - Compact Horizontal Layout */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-bold text-accent mb-3 font-jetbrains-mono">{avgSpeed}</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider font-medium">Average Speed (WPM)</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-bold text-accent mb-3 font-jetbrains-mono">{stats?.stats.tests_completed || 902}</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider font-medium">Tests Completed</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-bold text-accent mb-3 font-jetbrains-mono">{stats?.stats.time_typing || "01:40:15"}</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider font-medium">Time Typing</div>
              </motion.div>
            </div>

            {/* Activity Calendar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-border/30 pt-10 mt-6"
            >
              <h4 className="text-xl font-semibold text-text-primary mb-6 font-jetbrains-mono">Activity Calendar</h4>
                <div className="flex justify-center">
                  <div className="rounded-2xl overflow-hidden shadow-soft-lg border border-border/50 w-full max-w-5xl">
                    <Image 
                      src="/calender.png" 
                      alt="Typing activity calendar" 
                      width={1000}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
            </motion.div>

            {/* Footer Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="https://monkeytype.com/profile/r3dh4tx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-all duration-300 text-base font-jetbrains-mono group"
              >
                <span className="relative">
                  View full Monkeytype profile
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
