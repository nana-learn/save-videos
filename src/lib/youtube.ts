export type YouTubeRef = {
  videoId: string;
  start?: number;
};

function parseTime(value: string): number | undefined {
  if (/^\d+$/.test(value)) {
    return Number(value);
  }
  if (/^\d+s$/.test(value)) {
    return Number(value.slice(0, -1));
  }
  const match = value.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!match) {
    return undefined;
  }
  const hours = Number(match[1] ?? 0);
  const minutes = Number(match[2] ?? 0);
  const seconds = Number(match[3] ?? 0);
  const total = hours * 3600 + minutes * 60 + seconds;
  return total > 0 ? total : undefined;
}

export function parseYouTube(src: string): YouTubeRef | null {
  let url: URL;
  try {
    url = new URL(src);
  } catch {
    return null;
  }

  const host = url.hostname.replace(/^www\./, "");
  let videoId: string | null = null;

  if (host === "youtu.be") {
    videoId = url.pathname.split("/").filter(Boolean)[0] ?? null;
  } else if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
    if (url.pathname === "/watch") {
      videoId = url.searchParams.get("v");
    } else {
      const parts = url.pathname.split("/").filter(Boolean);
      if (
        (parts[0] === "embed" || parts[0] === "shorts" || parts[0] === "live") &&
        parts[1]
      ) {
        videoId = parts[1];
      }
    }
  }

  if (!videoId) {
    return null;
  }

  const timeValue = url.searchParams.get("t") ?? url.searchParams.get("start");
  const start = timeValue ? parseTime(timeValue) : undefined;

  return start ? { videoId, start } : { videoId };
}

export function youtubeEmbedUrl(ref: YouTubeRef): string {
  const params = new URLSearchParams({ rel: "0" });
  if (ref.start) {
    params.set("start", String(ref.start));
  }
  return `https://www.youtube.com/embed/${ref.videoId}?${params.toString()}`;
}

export function formatTimestamp(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (hrs > 0) {
    return `${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${mins}:${String(secs).padStart(2, "0")}`;
}
