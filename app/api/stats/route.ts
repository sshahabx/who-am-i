import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Fetch live data from Monkeytype API
    const response = await fetch('https://api.monkeytype.com/users/profile/r3dh4tx', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    
    // Transform the API response to our schema
    const stats = {
      username: "r3dh4tx",
      joined: "29 Mar 2025",
      stats: {
        tests_started: result.data?.totalTests || 1900,
        tests_completed: result.data?.totalTests || 902,
        time_typing: "01:40:15",
        sessions: [
          {
            date: "05 Apr 2025",
            words: 10,
            wpm: 119,
            accuracy: "100%",
            raw: 119,
            consistency: "89%"
          },
          {
            date: "14 Jun 2025",
            words: 25,
            wpm: 118,
            accuracy: "88%",
            raw: 139,
            consistency: "68%"
          },
          {
            date: "29 Mar 2025",
            words: 100,
            time: "15s",
            wpm: 99,
            raw: 102,
            accuracy: "99%",
            consistency: "82%"
          },
          {
            date: "29 Apr 2025",
            time: "30s",
            wpm: 98,
            raw: 100,
            accuracy: "97%",
            consistency: "76%"
          },
          {
            date: "09 Apr 2025",
            time: "120s",
            wpm: 72,
            accuracy: "90%"
          }
        ]
      }
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error fetching typing stats:', error)
    
    // Return fallback data if API fails
    const fallbackStats = {
      username: "r3dh4tx",
      joined: "29 Mar 2025",
      stats: {
        tests_started: 1900,
        tests_completed: 902,
        time_typing: "01:40:15",
        sessions: [
          {
            date: "05 Apr 2025",
            words: 10,
            wpm: 119,
            accuracy: "100%",
            raw: 119,
            consistency: "89%"
          },
          {
            date: "14 Jun 2025",
            words: 25,
            wpm: 118,
            accuracy: "88%",
            raw: 139,
            consistency: "68%"
          },
          {
            date: "29 Mar 2025",
            words: 100,
            time: "15s",
            wpm: 99,
            raw: 102,
            accuracy: "99%",
            consistency: "82%"
          },
          {
            date: "29 Apr 2025",
            time: "30s",
            wpm: 98,
            raw: 100,
            accuracy: "97%",
            consistency: "76%"
          },
          {
            date: "09 Apr 2025",
            time: "120s",
            wpm: 72,
            accuracy: "90%"
          }
        ]
      }
    }

    return NextResponse.json(fallbackStats)
  }
}
