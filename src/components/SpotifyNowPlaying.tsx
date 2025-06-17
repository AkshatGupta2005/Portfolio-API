"use client"

import { useState, useEffect } from "react"

interface SpotifyTrack {
  name: string
  artist: string
  isPlaying: boolean
}

const SpotifyNowPlaying = () => {
  const [track, setTrack] = useState<SpotifyTrack | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/now-playing")
        const data = await res.json()

        if (data.error || !data.title) {
          setTrack(null)
        } else {
          setTrack({
            name: data.title,
            artist: data.artist,
            isPlaying: data.isPlaying,
          })
        }
      } catch (error) {
        console.error("Error fetching Spotify track:", error)
        setTrack(null)
      } finally {
        setLoading(false)
      }
    }

    fetchNowPlaying()
    const interval = setInterval(fetchNowPlaying, 30000) // Refresh every 30s
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="compact-widget spotify-widget">
        <div className="widget-pulse"></div>
      </div>
    )
  }

  if (!track || !track.isPlaying) {
    return (
      <div className="compact-widget spotify-widget">
        <div className="widget-header">
          <div className="status-dot offline"></div>
          <span className="widget-title">Not Playing</span>
        </div>
      </div>
    )
  }

  return (
    <div className="compact-widget spotify-widget">
      <div className="widget-header">
        <div className="status-dot playing"></div>
        <span className="widget-title">Now Playing</span>
      </div>
      <div className="widget-content">
        <div className="track-info">
          <div className="track-name">{track.name}</div>
          <div className="track-artist">{track.artist}</div>
        </div>
        <div className="music-visualizer">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  )
}

export default SpotifyNowPlaying
