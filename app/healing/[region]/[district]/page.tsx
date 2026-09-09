import { Metadata } from "next";
import RegionalClientUI from "@/app/[region]/[district]/RegionalClientUI";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
  }>;
  searchParams: Promise<{
    dong?: string;
  }>;
}

function getRegionKoreanName(region: string): string {
  switch (region) {
    case "seoul": return "서울";
    case "incheon": return "인천";
    case "gyeonggi": return "경기";
    case "busan": return "부산";
    case "daegu": return "대구";
    case "daejeon": return "대전";
    case "gwangju_city": return "광주";
    case "ulsan": return "울산";
    case "cheongju": return "청주";
    default: return "전국";
  }
}

function getRegionFullName(region: string): string {
  switch (region) {
    case "seoul": return "서울특별시";
    case "incheon": return "인천광역시";
    case "gyeonggi": return "경기도";
    case "busan": return "부산광역시";
    case "daegu": return "대구광역시";
    case "daejeon": return "대전광역시";
    case "gwangju_city": return "광주광역시";
    case "ulsan": return "울산광역시";
    case "cheongju": return "청주시";
    default: return "";
  }
}

// 🎯 "출장 힐링 마사지" 및 30개 회피 키워드 타겟 메타데이터 설정
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const { region, district } = resolvedParams;
  const dongName = resolvedSearchParams.dong ? decodeURIComponent(resolvedSearchParams.dong) : "";
  const districtName = decodeURIComponent(district);
  const regionName = getRegionKoreanName(region);
  const regionFullName = getRegionFullName(region);

  const fullTitle = dongName ? `${regionFullName} ${districtName} (${dongName})` : `${regionFullName} ${districtName}`;
  const locationKeyword = `${regionName} ${districtName} ${dongName}`.trim();
  const simpleLocation = dongName ? `${districtName} ${dongName}` : districtName;

  const title = `${locationKeyword} 출장 힐링 마사지 추천 | 24시 안심 후불제 - 휴식의정원`;
  const description = `${simpleLocation} 인근 프라이빗 힐링 케어! ${locationKeyword} 출장 힐링 마사지 25분 내 신속 방문. 선입금 없는 100% 후불제로 편안하게 이용하세요.`;

  return {
    title,
    description,
    keywords: [
      // 1~5: 기본 힐링 & 프리미엄 계열
      `${locationKeyword} 출장 힐링 마사지`,
      `${locationKeyword}출장힐링마사지`,
      `${simpleLocation} 출장 힐링 마사지`,
      `${locationKeyword} 출장 프리미엄 마사지`,
      `${locationKeyword}출장프리미엄마사지`,

      // 6~10: 스웨디시 & 감성 테라피 계열
      `${locationKeyword} 출장 스웨디시 마사지`,
      `${locationKeyword}출장스웨디시마사지`,
      `${simpleLocation} 출장 스웨디시 마사지`,
      `${locationKeyword} 출장 감성 마사지`,
      `${locationKeyword}출장감성마사지`,

      // 11~15: 아로마 & 오일 테라피 계열
      `${locationKeyword} 출장 아로마 마사지`,
      `${locationKeyword}출장아로마마사지`,
      `${simpleLocation} 출장 아로마 마사지`,
      `${locationKeyword} 출장 오일 마사지`,
      `${locationKeyword}출장오일마사지`,

      // 16~20: 타이 & 전통 건식 계열
      `${locationKeyword} 출장 타이 마사지`,
      `${locationKeyword}출장타이마사지`,
      `${simpleLocation} 출장 타이 마사지`,
      `${locationKeyword} 출장 전통 마사지`,
      `${locationKeyword}출장전통마사지`,

      // 21~25: 바디케어 & 릴렉싱 계열
      `${locationKeyword} 출장 바디케어 마사지`,
      `${locationKeyword}출장바디케어마사지`,
      `${simpleLocation} 출장 바디케어 마사지`,
      `${locationKeyword} 출장 릴렉싱 마사지`,
      `${locationKeyword}출장릴렉싱마사지`,

      // 26~30: 프라이빗 & 맞춤형 힐링 계열
      `${locationKeyword} 출장 프라이빗 마사지`,
      `${locationKeyword}출장프라이빗마사지`,
      `${simpleLocation} 출장 프라이빗 마사지`,
      `${locationKeyword} 출장 맞춤 마사지`,
      `${locationKeyword}출장맞춤마사지`,

      // 공통 보조 키워드
      "후불제 힐링 마사지",
      "휴식의정원"
    ],
    openGraph: {
      title,
      description,
      url: `https://Jungwon-healing.netlify.app/healing/${region}/${encodeURIComponent(districtName)}${dongName ? `?dong=${encodeURIComponent(dongName)}` : ""}`,
      siteName: "휴식의정원",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function HealingRegionalPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const reg = resolvedParams.region;
  const dist = decodeURIComponent(resolvedParams.district);
  const dong = resolvedSearchParams.dong ? decodeURIComponent(resolvedSearchParams.dong) : "";

  // 기존 클라이언트 UI 컴포넌트를 그대로 가져다 씁니다.
  return <RegionalClientUI region={reg} district={dist} dongName={dong} />;
}