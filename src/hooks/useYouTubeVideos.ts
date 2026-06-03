import { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY as string | undefined
const CHANNEL_HANDLE = '@Ishanbanglanews'
const BASE = 'https://www.googleapis.com/youtube/v3'

export interface YTVideo {
  id: string
  title: string
  thumbnail: string
  publishedAt: string   // ISO 8601
  viewCount: string     // raw number string from API, '' if unavailable
  url: string
}

/** Format ISO date → "12 May 2026" */
export function fmtDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric',
    })
  } catch {
    return ''
  }
}

/** Format raw view-count string → "1.2M", "265K", "9,400" */
export function fmtViews(raw: string): string {
  const n = parseInt(raw, 10)
  if (isNaN(n)) return ''
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M views`
  if (n >= 1_000)     return `${(n / 1_000).toFixed(0)}K views`
  return `${n.toLocaleString()} views`
}

interface State {
  videos: YTVideo[]
  loading: boolean
  error: boolean
}

export function useYouTubeVideos(count = 6): State {
  const [state, setState] = useState<State>({ videos: [], loading: true, error: false })

  useEffect(() => {
    if (!API_KEY) {
      setState({ videos: [], loading: false, error: true })
      return
    }

    let cancelled = false

    async function fetch6() {
      try {
        // 1 — Get the channel's uploads playlist ID
        const chanRes = await fetch(
          `${BASE}/channels?part=contentDetails&forHandle=${CHANNEL_HANDLE}&key=${API_KEY}`
        )
        const chanJson = await chanRes.json()
        if (!chanRes.ok || !chanJson.items?.length) throw new Error('channel')
        const uploadsId: string = chanJson.items[0].contentDetails.relatedPlaylists.uploads

        // 2 — Get the latest N videos from the uploads playlist
        const listRes = await fetch(
          `${BASE}/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=${count}&key=${API_KEY}`
        )
        const listJson = await listRes.json()
        if (!listRes.ok || !listJson.items?.length) throw new Error('playlist')

        const videoIds = listJson.items
          .map((i: { snippet: { resourceId: { videoId: string } } }) => i.snippet.resourceId.videoId)
          .join(',')

        // 3 — Get view counts
        const statsRes = await fetch(
          `${BASE}/videos?part=statistics&id=${videoIds}&key=${API_KEY}`
        )
        const statsJson = await statsRes.json()
        const statsMap: Record<string, string> = {}
        if (statsRes.ok && statsJson.items) {
          for (const item of statsJson.items as { id: string; statistics: { viewCount?: string } }[]) {
            statsMap[item.id] = item.statistics.viewCount ?? ''
          }
        }

        if (cancelled) return

        const videos: YTVideo[] = listJson.items.map(
          (item: { snippet: { resourceId: { videoId: string }; title: string; publishedAt: string; thumbnails: { maxres?: { url: string }; high?: { url: string }; medium?: { url: string } } } }) => {
            const s = item.snippet
            const id = s.resourceId.videoId
            return {
              id,
              title: s.title,
              thumbnail:
                s.thumbnails.maxres?.url ??
                s.thumbnails.high?.url ??
                s.thumbnails.medium?.url ??
                `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
              publishedAt: s.publishedAt,
              viewCount: statsMap[id] ?? '',
              url: `https://www.youtube.com/watch?v=${id}`,
            }
          }
        )

        setState({ videos, loading: false, error: false })
      } catch {
        if (!cancelled) setState({ videos: [], loading: false, error: true })
      }
    }

    fetch6()
    return () => { cancelled = true }
  }, [count])

  return state
}
