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
    setTimeout(() => {
      setTrack({
        name: "Blinding Lights",
        artist: "The Weeknd",
        isPlaying: true,
      })
      setLoading(false)
    }, 1200)
  }, [])

  if (loading) {
    return (
      <div className="compact-widget spotify-widget">
        <div className="widget-pulse"></div>
      </div>
    )
  }

  if (!track) {
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
