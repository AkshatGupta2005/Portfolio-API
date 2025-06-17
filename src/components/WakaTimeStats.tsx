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
          "https://wakatime.com/share/@sleepy_head/5e8e4a9f-e298-4c30-81dd-919466a883d0.json" // Replace with your share URL
        )
        const data = await response.json()
        console.log(data);
        const weekData: DayData[] = data.data
        const totalSeconds = weekData.reduce(
          (sum, day) => sum + day.grand_total.total_seconds,
          0
        )

        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        setTotalTime(`${hours}h ${minutes}m`)
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch WakaTime weekly data:", error)
      }
    }

    fetchStats()
  }, [])
  
  if (loading) {
    return (
      <div className="compact-widget coding-widget">
        <div className="widget-pulse"></div>
      </div>
    )
  }
  if (!totalTime) return null
  return (
    <div className="compact-widget coding-widget">
      <div className="widget-header">
        <div className="status-dot active"></div>
        <span className="widget-title">Coding Time</span>
      </div>
      <div className="widget-content">
        <div className="main-stat">
          <span className="stat-number">{totalTime}</span>
        </div>
        <div className="sub-stat">
          <span className="language-name">Across 7 days</span>
        </div>
      </div>
    </div>
  )
}

export default WakaTimeWeeklyStats
