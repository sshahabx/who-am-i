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

const techJokes = [
  {
    joke: "Why do programmers prefer dark mode?",
    punchline: "Because light attracts bugs.",
    source: "via /r/ProgrammerHumor"
  },
  {
    joke: "How many programmers does it take to change a light bulb?",
    punchline: "None. It's a hardware problem.",
    source: "office overheard"
  },
  {
    joke: "A SQL query walks into a bar, walks up to two tables and asks...",
    punchline: "Can I join you?",
    source: "via /r/ProgrammerHumor"
  },
  {
    joke: "Why do Java developers wear glasses?",
    punchline: "Because they can't C#.",
    source: "classic groaner"
  },
  {
    joke: "What's a programmer's favorite hangout place?",
    punchline: "Foo Bar.",
    source: "office overheard"
  },
  {
    joke: "Why did the developer go broke?",
    punchline: "Because he used up all his cache.",
    source: "via /r/ProgrammerHumor"
  }
]

export function TypingStats() {
  const [stats, setStats] = useState<TypingStatsData | null>(null)
  const [avgSpeed, setAvgSpeed] = useState<number>(0)
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0)

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

    // Rotate jokes every 10 seconds
    const jokeInterval = setInterval(() => {
      setCurrentJokeIndex((prev) => (prev + 1) % techJokes.length)
    }, 10000)

    return () => clearInterval(jokeInterval)
  }, [])

  const currentJoke = techJokes[currentJokeIndex]

  return (
    <section className="section-padding newspaper-bg paper-texture border-t-2 border-b border-newspaper-border/30">
      <div className="container-padding">
        {/* Two Column Newspaper Layout */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[70%_30%] gap-0">
          {/* Left Column: Typing Stats */}
          <div className="border-r-0 lg:border-r-2 border-newspaper-border/30 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Section Header */}
              <div className="mb-10">
                <div className="newspaper-divider mb-3" />
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-newspaper-accent mb-1 tracking-tight">
                  Daily Typing Activity
                </h3>
                <p className="newspaper-meta text-newspaper-text/50 mb-3">
                  Performance Metrics
                </p>
                <div className="newspaper-divider" />
                <p className="text-sm font-merriweather italic text-newspaper-text/60 mt-3">
                  Tracking consistency, focus, and flow.
                </p>
              </div>

              {/* Stats Grid - Compact */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-newspaper-border/40 p-4 text-center"
                >
                  <div className="newspaper-meta text-newspaper-text/50 mb-2 text-xs">AVG SPEED</div>
                  <div className="text-4xl md:text-5xl font-bold text-newspaper-accent mb-1 font-mono tracking-tight">{avgSpeed}</div>
                  <div className="text-xs newspaper-meta text-newspaper-text/70">WPM</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white border border-newspaper-border/40 p-4 text-center"
                >
                  <div className="newspaper-meta text-newspaper-text/50 mb-2 text-xs">TESTS</div>
                  <div className="text-4xl md:text-5xl font-bold text-newspaper-accent mb-1 font-mono tracking-tight">{stats?.stats.tests_completed || 902}</div>
                  <div className="text-xs newspaper-meta text-newspaper-text/70">Sessions</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white border border-newspaper-border/40 p-4 text-center"
                >
                  <div className="newspaper-meta text-newspaper-text/50 mb-2 text-xs">TIME</div>
                  <div className="text-4xl md:text-5xl font-bold text-newspaper-accent mb-1 font-mono tracking-tight">{stats?.stats.time_typing || "01:40:15"}</div>
                  <div className="text-xs newspaper-meta text-newspaper-text/70">H:M:S</div>
                </motion.div>
              </div>

              {/* Activity Calendar */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="border-t border-newspaper-border/30 pt-8"
              >
                <div className="mb-4">
                  <h4 className="font-playfair text-xl font-bold text-newspaper-accent mb-2">Annual Overview</h4>
                  <p className="text-xs font-merriweather italic text-newspaper-text/60">
                    Fig. 1 — Daily typing activity distribution over the past year
                  </p>
                </div>
                
                {/* Chart Container */}
                <div className="bg-white border border-newspaper-border/40 p-4 shadow-sm">
                  <div className="rounded overflow-hidden">
                    <Image 
                      src="/calender.png" 
                      alt="Typing activity calendar" 
                      width={800}
                      height={400}
                      className="w-full h-auto grayscale contrast-110"
                    />
                  </div>
                  
                  {/* Chart Caption */}
                  <div className="mt-3 pt-3 border-t border-newspaper-border/20">
                    <p className="text-xs font-merriweather italic text-newspaper-text/60">
                      Data sourced from Monkeytype practice sessions. Each cell represents daily typing activity.
                    </p>
                  </div>
                </div>

                {/* Source Attribution */}
                <div className="mt-6 pt-4 border-t border-newspaper-border/20">
                  <a
                    href="https://monkeytype.com/profile/r3dh4tx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-newspaper-text/60 hover:text-newspaper-accent transition-all duration-300 text-xs font-merriweather group underline-slide"
                  >
                    <span>View complete profile on Monkeytype</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Comic Relief Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-8 mt-10 lg:mt-0 bg-[#faf9f6] lg:bg-transparent p-6 lg:p-0"
          >
            {/* Sidebar Header */}
            <div className="mb-6">
              <div className="newspaper-divider mb-3" />
              <h4 className="font-playfair text-2xl font-bold text-newspaper-accent mb-1 tracking-tight">
                Comic Relief
              </h4>
              <p className="newspaper-meta text-newspaper-text/50 mb-3 text-xs">
                Tech Humor
              </p>
              <div className="newspaper-divider" />
            </div>

            {/* Joke Card with Animation */}
            <motion.div
              key={currentJokeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-newspaper-border/40 p-5 shadow-sm hover:shadow-md transition-shadow duration-300 mb-4"
            >
              <div className="space-y-3">
                <p className="font-merriweather text-sm text-newspaper-text/80 leading-relaxed italic">
                  {currentJoke.joke}
                </p>
                <p className="font-merriweather text-sm text-newspaper-accent font-semibold">
                  {currentJoke.punchline}
                </p>
                <div className="pt-3 border-t border-newspaper-border/20">
                  <p className="text-xs newspaper-meta text-newspaper-text/50">
                    {currentJoke.source}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Joke Navigation Dots */}
            <div className="flex items-center justify-center gap-2 mb-6">
              {techJokes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentJokeIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentJokeIndex 
                      ? 'bg-newspaper-accent w-6' 
                      : 'bg-newspaper-border/50 hover:bg-newspaper-accent/50'
                  }`}
                  aria-label={`View joke ${index + 1}`}
                />
              ))}
            </div>

            {/* Divider */}
            <div className="newspaper-divider my-6" />

            {/* Fun Tech Quotes Section */}
            <div className="space-y-4">
              <h5 className="font-playfair text-lg font-bold text-newspaper-accent">
                Wisdom Corner
              </h5>
              
              <div className="bg-white border-l-4 border-newspaper-accent p-4">
                <p className="font-merriweather text-xs text-newspaper-text/80 italic leading-relaxed mb-2">
                  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
                </p>
                <p className="text-xs newspaper-meta text-newspaper-text/50">
                  — Martin Fowler
                </p>
              </div>

              <div className="bg-white border-l-4 border-newspaper-accent p-4">
                <p className="font-merriweather text-xs text-newspaper-text/80 italic leading-relaxed mb-2">
                  "First, solve the problem. Then, write the code."
                </p>
                <p className="text-xs newspaper-meta text-newspaper-text/50">
                  — John Johnson
                </p>
              </div>
            </div>

            {/* More Link */}
            <div className="mt-6 pt-4 border-t border-newspaper-border/20">
              <a
                href="https://github.com/sshahabx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-newspaper-text/60 hover:text-newspaper-accent transition-all duration-300 text-xs font-merriweather group underline-slide"
              >
                <span>More Laughs</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
