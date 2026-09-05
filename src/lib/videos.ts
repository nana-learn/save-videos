export type Video = {
  id: string;
  title: string;
  description?: string;
  /** Local path under `public/` (e.g. `/videos/clip.mp4`) or a full URL. */
  src: string;
  poster?: string;
};

export const videos: Video[] = [
  // {
  //   id: "example",
  //   title: "Example clip",
  //   description: "Put files in public/videos/ or use a remote URL.",
  //   src: "/videos/example.mp4",
  // },
];
