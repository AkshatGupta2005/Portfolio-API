"use client"

import { useState, useEffect } from "react"

interface DayData {
  grand_total: {
    total_seconds: number
  }
}

const WakaTimeWeeklyStats = () => {
  const [totalTime, setTotalTime] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "https://wakatime.com/share/@sleepy_head/5e8e4a9f-e298-4c30-81dd-919466a883d0.json"
        )
        const data = await response.json()
        const weekData: DayData[] = data.data

        const totalSeconds = weekData.reduce(
          (sum, day) => sum + day.grand_total.total_seconds,
          0
        )

        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        setTotalTime(`${hours}h ${minutes}m`)
      } catch (error) {
        console.error("Failed to fetch WakaTime weekly data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <div className="spotify-widget">
      <div className="header">
        <div
          className={`status-dot ${
            loading ? "loading" : totalTime ? "playing" : "offline"
          }`}
        ></div>
        <span className="title">
          {loading ? "Fetching Coding Stats..." : "Coding Time"}
        </span>
      </div>

      <div className="content">
        {totalTime ? (
          <div className="info">
            <div className="track">{totalTime}</div>
            <div className="artist">in last 7 days</div>
          </div>
        ) : (
          <div className="info empty">
            <div className="track">No data</div>
            <div className="artist">---</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WakaTimeWeeklyStats
