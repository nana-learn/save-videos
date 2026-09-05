export type Video = {
  id: string;
  title: string;
  description?: string;
  /** YouTube URL, remote file URL, or local path under `public/` (e.g. `/videos/clip.mp4`). */
  src: string;
  poster?: string;
};

export const videos: Video[] = [
  {
    id: "Y9U_2onR2rI",
    title:
      "Tự học là chuyện suốt đời | Nhà giáo dục, nhà nghiên cứu lịch sử, TS. Bùi Trần Phượng | 5W1H",
    description: "Maybe Podcast",
    src: "https://www.youtube.com/watch?v=Y9U_2onR2rI&t=2192s",
  },
];
