"use client"

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

interface TypingStatsProps {
  data: StatsData
}

export default function TypingStats({ data }: TypingStatsProps) {
  return (
    <div className="text-[#e5e5e5] font-['JetBrains_Mono'] bg-[#0e0e0e] min-h-screen flex flex-col items-center py-10 animate-fadeIn">
      <h1 className="text-2xl font-bold mb-6 tracking-wide">{data.username}</h1>
      <p className="text-sm text-gray-400 mb-8">Joined {data.joined}</p>

      <div className="text-lg space-y-1 text-gray-300">
        <p><span className="text-[#ffb86c]">Tests Started:</span> {data.stats.tests_started}</p>
        <p><span className="text-[#ffb86c]">Tests Completed:</span> {data.stats.tests_completed}</p>
        <p><span className="text-[#ffb86c]">Time Typing:</span> {data.stats.time_typing}</p>
      </div>

      <div className="mt-8 w-full max-w-md border-t border-gray-700 pt-6 space-y-5">
        {data.stats.sessions.map((s, i) => (
          <div key={i} className="flex justify-between text-sm text-gray-400 hover:opacity-80 transition">
            <div className="flex flex-col">
              <span className="text-[#ffb86c]">{s.date}</span>
              <span>{s.words ? `${s.words} words` : s.time}</span>
            </div>
            <div className="text-right">
              <span className="block text-[#e5e5e5]">{s.wpm} wpm</span>
              <span className="block text-gray-500">
                {s.raw ? `${s.raw} raw • ` : ''}{s.accuracy} acc {s.consistency ? `• ${s.consistency} con` : ''}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
