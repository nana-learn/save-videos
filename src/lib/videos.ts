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
  {
    id: "8rf3uqDj00A",
    title:
      "Great Minds - Part 1 - Plato's Republic I: Justice, Power, and Knowledge",
    description: "Michael Sugrue",
    src: "https://www.youtube.com/watch?v=8rf3uqDj00A",
  },
  {
    id: "C8M4i9fvq1M",
    title: "How Islam Saved Western Civilization",
    description: "Dr. Roy Casagranda",
    src: "https://www.youtube.com/watch?v=C8M4i9fvq1M&t=5548s",
  },
];
