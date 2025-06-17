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
    const interval = setInterval(fetchNowPlaying, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="spotify-widget">
      <div className="header">
        <div
          className={`status-dot ${
            loading ? "loading" : track?.isPlaying ? "playing" : "offline"
          }`}
        ></div>
        <span className="title">
          {loading
            ? "Connecting to Spotify..."
            : track?.isPlaying
            ? "Now Playing"
            : "Not Playing"}
        </span>
      </div>

      <div className="content">
        {track?.isPlaying ? (
          <>
            <div className="info">
              <div className="track">{track.name}</div>
              <div className="artist">{track.artist}</div>
            </div>
            <div className="visualizer">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </>
        ) : (
          <div className="info empty">
            <div className="track">No song playing</div>
            <div className="artist">---</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SpotifyNowPlaying
