import { PlayCircle } from 'lucide-react'

/**
 * ============================================================
 *  ADD YOUR SUBMISSION VIDEO HERE
 * ============================================================
 *  OPTION A — Local video file (recommended for a file you recorded)
 *  1. Put your video file inside the "public" folder at the project
 *     root (NOT src/components) — e.g. public/demo-video.mp4
 *  2. Set VIDEO_SRC below to "/demo-video.mp4" (leading slash, no
 *     "public" in the path — Vite serves everything in public/ from
 *     the site's root automatically).
 *
 *  OPTION B — Hosted video link (YouTube / Loom / Vimeo)
 *  1. Leave VIDEO_SRC empty.
 *  2. Set VIDEO_EMBED_URL to an /embed/ style link:
 *     YouTube:  https://www.youtube.com/embed/VIDEO_ID
 *     Loom:     https://www.loom.com/embed/VIDEO_ID
 *     Vimeo:    https://player.vimeo.com/video/VIDEO_ID
 *
 *  If both are set, the local file (VIDEO_SRC) takes priority.
 * ============================================================
 */
const VIDEO_SRC = '/Video.mp4'        // <-- e.g. '/demo-video.mp4' (file must be in /public)
const VIDEO_EMBED_URL = ''  // <-- e.g. 'https://www.youtube.com/embed/VIDEO_ID'

export default function VideoShowcase() {
  return (
    <section id="video" className="py-24 md:py-32 border-t border-line">
      <div className="section-shell">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-primary mb-3">Submission video</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            Watch the two-minute walkthrough.
          </h2>
        </div>

        <div className="glass rounded-2xl overflow-hidden">
          <div className="aspect-video w-full">
            {VIDEO_SRC ? (
              <video
                src={VIDEO_SRC}
                controls
                playsInline
                className="w-full h-full bg-black"
              >
                Your browser doesn't support embedded video.
              </video>
            ) : VIDEO_EMBED_URL ? (
              <iframe
                src={VIDEO_EMBED_URL}
                title="EnergyFlow AI submission video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-center px-6 bg-white/[0.02]">
                <PlayCircle className="w-12 h-12 text-gray-600" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-gray-300">Video coming soon</p>
                  <p className="text-xs text-gray-500 mt-1 max-w-sm">
                    Local file: set <code className="text-accent">VIDEO_SRC</code> after moving your video into{' '}
                    <code className="text-accent">public/</code>. Hosted link: set{' '}
                    <code className="text-accent">VIDEO_EMBED_URL</code> instead. Both are in{' '}
                    <code className="text-accent">src/components/VideoShowcase.jsx</code>.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
