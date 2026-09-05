import { VideoGallery } from "@/components/video-gallery";
import { videos } from "@/lib/videos";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Videos</h1>
        <p className="text-[#a3a3a3]">
          Watch saved videos directly on this page.
        </p>
      </div>

      {videos.length === 0 ? (
        <div className="bg-[#141414] border border-[#262626] rounded-lg px-6 py-16 text-center text-[#737373]">
          No videos yet. Add entries in{" "}
          <code className="text-[#a3a3a3]">src/lib/videos.ts</code>.
        </div>
      ) : (
        <VideoGallery videos={videos} />
      )}
    </div>
  );
}
