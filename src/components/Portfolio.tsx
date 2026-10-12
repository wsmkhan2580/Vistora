import { useEffect, useRef } from 'react'
import { Play, X } from 'lucide-react'
import type { Category, Video } from '../types'
import { msg } from '../lib/whatsapp'
import { AI_NOTE } from '../data/site'
import { WaLink } from './ui'

const tone: Record<Category, string> = {
  Travel: 'from-sky-500 to-teal-600', Skincare: 'from-rose-300 to-indigo-400',
  Fashion: 'from-indigo-600 to-slate-800', Food: 'from-amber-500 to-rose-600',
}

export function VideoCard({ video, onOpen }: { video: Video; onOpen: (v: Video) => void }) {
  return (
    <article>
      <button type="button" onClick={() => onOpen(video)} aria-label={`Play ${video.title}`}
        className={`relative flex aspect-[9/16] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${tone[video.category]} text-white shadow-md transition-transform hover:-translate-y-1`}>
        {video.poster && <img src={video.poster} alt={`Poster for ${video.title}`} loading="lazy" className="absolute inset-0 size-full object-cover" />}
        <span className="relative flex size-14 items-center justify-center rounded-full bg-white/90 text-navy"><Play aria-hidden="true" /></span>
        {!video.src && <span className="absolute bottom-3 rounded-full bg-black/50 px-3 py-1 text-xs">Demo placeholder</span>}
      </button>
      <h3 className="mt-3 text-base font-bold">{video.title}</h3>
      <p className="text-sm text-muted">{video.description}</p>
    </article>
  )
}

export function VideoModal({ video, onClose }: { video: Video | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (video && !d.open) d.showModal()
    if (!video && d.open) d.close()
  }, [video])
  return (
    <dialog ref={ref} onClose={onClose} onClick={(e) => { if (e.target === ref.current) onClose() }} aria-label={video?.title ?? 'Video preview'}
      className="m-auto max-h-[92vh] w-[min(92vw,24rem)] overflow-auto rounded-2xl bg-white p-0 backdrop:bg-black/70">
      {video && (
        <div className="p-4">
          <div className="mb-3 flex items-start justify-between gap-3">
            <h2 className="text-lg">{video.title}</h2>
            <button type="button" onClick={onClose} aria-label="Close video" className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-line"><X aria-hidden="true" /></button>
          </div>
          {video.src ? (
            <video className="aspect-[9/16] w-full rounded-xl bg-black" controls playsInline preload="none" poster={video.poster} src={video.src}>
              Your browser does not support video playback.
            </video>
          ) : (
            <div className={`flex aspect-[9/16] w-full items-center justify-center rounded-xl bg-gradient-to-br ${tone[video.category]} p-6 text-center text-white`}>
              <p>Demo placeholder. The real sample video will appear here once its file is added.</p>
            </div>
          )}
          <p className="mt-3 text-xs text-muted">{AI_NOTE}</p>
          <WaLink message={msg.portfolio(video.category)} className="mt-3 w-full">Enquire about {video.category} videos</WaLink>
        </div>
      )}
    </dialog>
  )
}
