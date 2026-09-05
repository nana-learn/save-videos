import { assetPath } from "@/lib/base-path";
import type { Video } from "@/lib/videos";
import { parseYouTube, youtubeEmbedUrl } from "@/lib/youtube";

export function VideoPlayer({ video }: { video: Video }) {
  const youtube = parseYouTube(video.src);

  if (youtube) {
    return (
      <iframe
        className="w-full aspect-video bg-black"
        src={youtubeEmbedUrl(youtube)}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <video
      className="w-full aspect-video bg-black"
      controls
      preload="metadata"
      poster={video.poster ? assetPath(video.poster) : undefined}
      src={assetPath(video.src)}
    >
      Your browser does not support the video tag.
    </video>
  );
}
