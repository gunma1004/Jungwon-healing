import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "./NavigationHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://Jungwon-healing.netlify.app"),
  title: "휴식의정원 | 전국 24시 방문 홈케어 & 프리미엄 힐링 테라피 안내",
  description: "전국 24시 방문 홈케어! 선입금 없는 100% 후불제 안심 테라피 및 힐링 제휴업체 안내.",
  verification: {
    google: "yChiDqh1LCAVUG_SHhJ5DDhEmXhCwcyxUm24PP3l19c",
    other: {
      "naver-site-verification": "351ff809174989b28813b2aa05b4636d0401d5eb",
    },
  },
  openGraph: {
    title: "휴식의정원 | 전국 24시 방문 홈케어 & 힐링 마사지 추천",
    description: "선입금 없는 100% 후불 안심 케어! 전국 주요 지역 빠른 방문 바디케어 안내.",
    url: "https://Jungwon-healing.netlify.app",
    siteName: "휴식의정원",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <NavigationHeader />
        {children}
      </body>
    </html>
  );
}