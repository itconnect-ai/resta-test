import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "온결식탁 · 가칭 | 퇴근 뒤 혼자서도, 따뜻한 제철 한 끼",
  description:
    "퇴근 뒤 혼자서도 따뜻한 제철 한 끼를 천천히 먹을 수 있는 작은 식당, 온결식탁의 예비 창업 실습용 시안입니다. 일부 메뉴·가격·운영 정보는 가정입니다.",
  keywords: ["온결식탁", "제철 한 끼", "1인 식당", "성수동 식당 구상", "예비 창업 실습"],
  authors: [{ name: "온결식탁 기획팀 (실습용)" }],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "온결식탁 · 가칭 | 퇴근 뒤 혼자서도, 따뜻한 제철 한 끼",
    description:
      "퇴근 뒤 혼자서도 따뜻한 제철 한 끼를 천천히 먹을 수 있는 작은 식당, 온결식탁의 예비 창업 실습용 시안입니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "온결식탁",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2B241F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen bg-warm-ivory text-deep-walnut">
        <a href="#main-content" className="skip-link">
          본문 바로가기
        </a>
        {children}
      </body>
    </html>
  );
}
