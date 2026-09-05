"use client";

import { useState } from "react";
import { VideoPlayer } from "@/components/video-player";
import type { Video } from "@/lib/videos";
import { formatTimestamp, parseYouTube } from "@/lib/youtube";

export function VideoGallery({ videos }: { videos: Video[] }) {
  const [selectedId, setSelectedId] = useState(videos[0]?.id ?? "");
  const selected = videos.find((video) => video.id === selectedId) ?? videos[0];

  if (!selected) {
    return null;
  }

  const youtube = parseYouTube(selected.src);

  return (
    <div
      className={
        videos.length > 1
          ? "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_20rem] gap-6"
          : ""
      }
    >
      <section className="bg-[#141414] border border-[#262626] rounded-lg overflow-hidden">
        <VideoPlayer video={selected} />
        <div className="px-5 py-4">
          <h2 className="text-lg font-semibold text-white">{selected.title}</h2>
          {selected.description && (
            <p className="mt-1 text-sm text-[#a3a3a3]">{selected.description}</p>
          )}
          {youtube?.start ? (
            <p className="mt-2 text-xs text-[#737373]">
              Starts at {formatTimestamp(youtube.start)}
            </p>
          ) : null}
        </div>
      </section>

      {videos.length > 1 && (
        <aside className="bg-[#141414] border border-[#262626] rounded-lg overflow-hidden h-fit">
          <div className="px-4 py-3 border-b border-[#262626] text-sm font-medium text-white">
            Playlist
          </div>
          <ul className="divide-y divide-[#1e1e1e]">
            {videos.map((video) => {
              const active = video.id === selected.id;
              return (
                <li key={video.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(video.id)}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                      active
                        ? "bg-[#1a1a1a] text-white"
                        : "text-[#a3a3a3] hover:bg-[#1a1a1a] hover:text-white"
                    }`}
                  >
                    {video.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>
      )}
    </div>
  );
}
