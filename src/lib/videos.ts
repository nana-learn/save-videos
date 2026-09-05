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
  {
    id: "lALE4iV5hiU",
    title: "Tự tin làm người, được không? | TS. Bùi Trần Phượng | COREfidence",
    description: "COREfidence",
    src: "https://www.youtube.com/watch?v=lALE4iV5hiU",
  },
  {
    id: "JdkouzK4Pco",
    title: "SIÊU HÌNH HỌC - LOGIC HEGEL | TS. DƯƠNG NGỌC DŨNG",
    description: "Thư Hiên Dịch Trường",
    src: "https://www.youtube.com/watch?v=JdkouzK4Pco",
  },
  {
    id: "L5xjpLy-Dl4",
    title:
      "GEN Z, CÔ ĐƠN, VÀ TOÀN TRỊ: MỘT GÓC NHÌN TỪA HANNAH ARENDT | HỘI ĐỒNG CỦU",
    description: "Hội Đồng Cựu",
    src: "https://www.youtube.com/watch?v=L5xjpLy-Dl4",
  },
  {
    id: "IIeQ_D3fnIs",
    title:
      "Học nhiều để làm gì nếu không biết làm người? - Tiến sĩ Bùi Trần Phượng | EduStation EP39",
    description: "Vietcetera",
    src: "https://www.youtube.com/watch?v=IIeQ_D3fnIs",
  },
  {
    id: "D7n-Xrjhqng",
    title:
      "Minh oan cho Thuý Vân: Không nhạt, Không kém, Không vô duyên | TS Bùi Trần Phượng | DG Phan Đăng",
    description: "Diễn Giả PHAN ĐĂNG",
    src: "https://www.youtube.com/watch?v=D7n-Xrjhqng",
  },
  {
    id: "b6UkyGrF92Q",
    title: "Giải Trí Đến Chết | Cuốn Sách Thức Tỉnh Mình",
    description: "The Human Page",
    src: "https://www.youtube.com/watch?v=b6UkyGrF92Q",
  },
];
