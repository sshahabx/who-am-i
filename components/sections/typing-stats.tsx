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
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Header */}
          <div className="mb-8">
            <h3 className="text-4xl font-bold text-text-primary font-jetbrains-mono">
              i know how to type
            </h3>
          </div>

          {/* Stats Display - Compact Horizontal Layout */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-text-primary mb-2 font-jetbrains-mono">{avgSpeed}</div>
                <div className="text-base text-text-secondary uppercase tracking-wide">Average Speed (WPM)</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-text-primary mb-2 font-jetbrains-mono">{stats?.stats.tests_completed || 902}</div>
                <div className="text-base text-text-secondary uppercase tracking-wide">Tests Completed</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-text-primary mb-2 font-jetbrains-mono">{stats?.stats.time_typing || "01:40:15"}</div>
                <div className="text-base text-text-secondary uppercase tracking-wide">Time Typing</div>
              </div>
            </div>

            {/* Activity Calendar */}
            <div className="border-t border-border/20 pt-6">
              <h4 className="text-xl font-medium text-text-primary mb-4 font-jetbrains-mono">Activity Calendar</h4>
                <div className="flex justify-center">
                  <Image 
                    src="/calender.png" 
                    alt="Typing activity calendar" 
                    width={1000}
                    height={500}
                    className="rounded-lg shadow-lg w-full max-w-5xl h-auto"
                  />
                </div>
            </div>

            {/* Footer Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <a
                href="https://monkeytype.com/profile/r3dh4tx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors text-base font-jetbrains-mono hover:underline"
              >
                View full Monkeytype profile →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
