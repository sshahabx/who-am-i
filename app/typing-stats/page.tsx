"use client"

import { useState, useEffect } from 'react'
import TypingStats from '@/components/TypingStats'

interface StatsData {
  username: string
  joined: string
  stats: {
    tests_started: number
    tests_completed: number
    time_typing: string
    sessions: Array<{
      date: string
      words?: number
      time?: string
      wpm: number
      accuracy: string
      raw?: number
      consistency?: string
    }>
  }
}

export default function TypingStatsPage() {
  const [data, setData] = useState<StatsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats')
        if (!response.ok) {
          throw new Error('Failed to fetch stats')
        }
        const statsData = await response.json()
        setData(statsData)
      } catch (err) {
        setError('Failed to load typing stats')
        console.error('Error fetching stats:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="text-[#e5e5e5] font-['JetBrains_Mono'] bg-[#0e0e0e] min-h-screen flex flex-col items-center justify-center py-10">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded mb-4 w-32"></div>
          <div className="h-4 bg-gray-700 rounded mb-8 w-24"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded w-48"></div>
            <div className="h-4 bg-gray-700 rounded w-40"></div>
            <div className="h-4 bg-gray-700 rounded w-36"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="text-[#e5e5e5] font-['JetBrains_Mono'] bg-[#0e0e0e] min-h-screen flex flex-col items-center justify-center py-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-red-400">Error</h1>
          <p className="text-gray-400">{error || 'Failed to load data'}</p>
        </div>
      </div>
    )
  }

  return <TypingStats data={data} />
}
