import { assetPath } from "@/lib/base-path";
import { videos } from "@/lib/videos";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Videos</h1>
        <p className="text-[#a3a3a3]">
          A simple page for browsing and playing saved videos.
        </p>
      </div>

      {videos.length === 0 ? (
        <div className="bg-[#141414] border border-[#262626] rounded-lg px-6 py-16 text-center text-[#737373]">
          No videos yet. Add entries in{" "}
          <code className="text-[#a3a3a3]">src/lib/videos.ts</code> and files
          under <code className="text-[#a3a3a3]">public/videos/</code>.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <article
              key={video.id}
              className="bg-[#141414] border border-[#262626] rounded-lg overflow-hidden"
            >
              <video
                className="w-full bg-black aspect-video"
                controls
                preload="metadata"
                poster={video.poster ? assetPath(video.poster) : undefined}
                src={assetPath(video.src)}
              >
                Your browser does not support the video tag.
              </video>
              <div className="px-5 py-4">
                <h2 className="text-lg font-semibold text-white">
                  {video.title}
                </h2>
                {video.description && (
                  <p className="mt-1 text-sm text-[#a3a3a3]">
                    {video.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
