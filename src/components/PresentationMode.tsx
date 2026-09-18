import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  FileText, 
  Sparkles, 
  Calendar, 
  ShieldAlert, 
  Smartphone, 
  CheckCircle2,
  PhoneCall,
  Activity,
  Zap,
  Info
} from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  badge: string;
  subtitle: string;
  bullets: string[];
  callout?: {
    type: 'danger' | 'warning' | 'info' | 'success';
    text: string;
  };
  presenterNotes: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: '담양 중3 중국(상하이) 역사문화 탐방 인솔교사 연수',
    badge: '연수 개요',
    subtitle: '일정: 2026. 10. 13(화) ~ 10. 16(금) [3박 4일] / 숙소: 위즈덤 로즈 호텔',
    bullets: [
      '목적: 상하이 임시정부 및 매헌 윤봉길 의거지 답사를 통한 독립운동사 계승 및 글로벌 역사문화 안목 형성',
      '인솔 방향: 전 일정 사제동행 원칙 및 선제적 안전사고 예방 체계 가동',
      '주요 방문지: 루쉰공원(매헌기념관), 대한민국 임시정부, 주상하이 총영사관, 동방명주, 예원, 상하이 디즈니랜드',
      '인솔 교사 역할: 모둠별 안전 관리, 건강 이상자 조기 발견, 중국 법률·문화 에티켓 지도'
    ],
    callout: {
      type: 'info',
      text: '본 연수는 학생 안전을 담보하고 품격 있는 배움의 장을 만들기 위한 교직원 사전 직무 교육입니다.'
    },
    presenterNotes: '참석 교사들에게 환영 인사를 건네고, 이번 탐방이 단순 여행이 아닌 청소년들의 역사관을 정립하는 공식 교육과정임을 강조합니다.'
  },
  {
    id: 2,
    title: '제1일차: 출발 및 상하이 도착 (10.13 화)',
    badge: '1일차 일정',
    subtitle: '담양 ➔ 인천공항(T2) ➔ 상하이 푸동공항 ➔ 남경로 ➔ 외탄 ➔ 마시청 서커스',
    bullets: [
      '07:00 담양 집결 후 국내 전용차량 탑승: 안전벨트 전원 착용 확인 및 버스 안전교육',
      '11:00 인천공항 T2 도착: 항공권 배부, 보조배터리 기내반입(100Wh 이하) 검사, 보안검색 통과',
      '14:00 인천 출발 ➔ 15:00 푸동공항 도착: 한국 대비 시차 -1시간, 입국 심사 및 지문 등록',
      '17:00 남경로 보행가 탐방: 극심한 인파 집중, 조별 4~5인 1조 대열 유지 및 소매치기 주의',
      '18:00 르네상스 호텔 샤브샤브 석식 후 외탄 야경 및 마시청 서커스 관람 ➔ 22:00 호텔 투숙'
    ],
    callout: {
      type: 'warning',
      text: '첫날 장거리 이동(버스+비행기)으로 학생 피로도가 높습니다. 비행기 착륙 후 여권 분실 여부를 3중 확인하세요.'
    },
    presenterNotes: '공항에서 여권을 기내 좌석에 두고 내리는 사례가 종종 발생합니다. 비행기에서 일어서기 전 담임교사가 좌석을 확인하도록 안내하세요.'
  },
  {
    id: 3,
    title: '제2일차: 독립운동 유적 및 상하이 역사 (10.14 수)',
    badge: '2일차 일정',
    subtitle: '루쉰공원(매헌기념관) ➔ 대한민국 임시정부 ➔ 영사관 특강 ➔ 동방명주 ➔ 예원',
    bullets: [
      '08:00 루쉰공원(매헌 윤봉길 기념관): 1932년 의거 현장 참배, 헌화 및 단체 묵념 진행(경건한 태도 지도)',
      '10:30 대한민국 임시정부 상하이 청사: 가파른 계단 1열 보행, 실내 촬영 제한 규정 준수',
      '13:30 주상하이 대한민국 총영사관: 외교관 진로 및 재외국민 보호 특강(공관 보안 규칙 준수)',
      '16:00 동방명주 타워: 263m 전망대 및 유리바닥 스카이워크(고소공포증 학생 전담 교사 동행)',
      '19:00 예원 및 예원옛거리 야경: 미로형 골목길 이탈 절대 금지, 대로변 집결 장소 명확화'
    ],
    callout: {
      type: 'danger',
      text: '역사 유적지에서는 장난, 고성방가 엄금! 중국 주택가와 맞닿아 있으므로 민폐 행위를 철저히 차단합니다.'
    },
    presenterNotes: '임시정부 청사는 내부가 매우 비좁으므로 반별로 시간차를 두고 순차 입장해야 병목 현상을 막을 수 있습니다.'
  },
  {
    id: 4,
    title: '제3일차: 첨단 과학 & 디즈니랜드 종일 활동 (10.15 목)',
    badge: '3일차 일정',
    subtitle: '상하이 과학기술관 ➔ 중식(하랑) ➔ 상하이 디즈니랜드 ➔ 야간 불꽃쇼',
    bullets: [
      '08:00 상하이 과학기술관: 인공지능, 우주과학 등 11개 전시관 탐구 학습 수행',
      '12:30 상하이 디즈니랜드 입장: 아시아 최대 테마파크, 모둠별(4~5인) 자율 어트랙션 체험',
      '교사 거점 본부 운영: 디즈니 중앙 지정 벤치/카페에 인솔교사 2인 상시 대기 및 순찰',
      '중간 점호 필수: 오후 15:00 및 18:00 메신저 모둠 인증샷 및 교사 본부 대면 확인',
      '20:30 성 캐슬 일루미네이션 쇼 감상 후 단체 퇴장: 인파 밀림 방지 위해 천천히 외곽 이동'
    ],
    callout: {
      type: 'warning',
      text: '디즈니랜드는 하루 2만 보 이상 걷습니다. 편한 운동화 착용 지도 및 탈수 예방을 위해 충분한 수분을 섭취하게 하세요.'
    },
    presenterNotes: '디즈니 밀쿠폰 사용법을 입장 전에 학생들에게 설명해 주고, 미아 발생 시 디즈니 인포메이션 센터나 교사 거점으로 찾아오도록 주지시킵니다.'
  },
  {
    id: 5,
    title: '제4일차: 귀국 및 안전 귀교 (10.16 금)',
    badge: '4일차 일정',
    subtitle: '위즈덤 로즈 호텔 체크아웃 ➔ 푸동공항 ➔ 인천공항 ➔ 담양 학교 도착',
    bullets: [
      '07:00 조식 후 객실 최종 점검: 침대 밑, 욕실, 옷장에 두고 온 유실물(여권, 충전기) 제로 확인',
      '08:00 푸동국제공항 이동: 중국 출국 심사 및 보안검색(보조배터리 용량 각인 재확인)',
      '11:35 푸동공항 출발 ➔ 14:30 인천국제공항 T2 도착: 입국 심사 및 수하물 수취',
      '15:30 국내 전용차량 탑승: 학부모님께 도착 예정 시간 문자 안내 발송 (고속도로 휴게소 경유)',
      '19:30 담양 집결지 무사 도착: 학생 전원 이상 유무 확인 후 학부모 직접 인계 및 공식 해산'
    ],
    callout: {
      type: 'success',
      text: '출발 시점의 안전벨트 착용부터 귀교 시 학부모 인계까지 끝까지 방심 없는 안전 인솔을 완료합니다.'
    },
    presenterNotes: '귀국 당일 공항 면세점에서 학생들이 개별 쇼핑하다가 탑승구에 늦지 않도록 게이트 앞 집결 시간을 반드시 엄수시킵니다.'
  },
  {
    id: 6,
    title: '중국 특화 안전 수칙: 반간첩법 & 신분증 실명제',
    badge: '법률 및 안보',
    subtitle: '중국 방문 시 반드시 알아야 할 법률적 위험 요소 사전 차단',
    bullets: [
      '반간첩법 촬영 금지: 군사시설, 공안국(경찰서), 정부 청사, 공항 보안검색대 사진·영상 촬영 엄금',
      '시위 및 사건 현장 촬영 금지: 길거리 단속이나 소요 사태를 스마트폰으로 촬영하거나 SNS 게시 금지',
      '드론(무인기) 비행 및 비인가 측량 절대 불가: 즉시 공안에 연행되어 처벌받을 수 있음',
      '여권 실명제: 관광지(임시정부, 동방명주, 디즈니) 입장 시 여권 실물 대조 필수 (목걸이 케이스 보관)',
      '공안 불시 검문: 당황하지 말고 공손히 여권을 제시하고 인솔교사가 즉시 입회하여 통역'
    ],
    callout: {
      type: 'danger',
      text: '중국 법률 위반 시 학교 차원의 해결이 불가하고 외교적 사안으로 비화될 수 있으므로 철저한 예방이 필수입니다.'
    },
    presenterNotes: '학생들이 장난삼아 공안 제복이나 순찰차를 근접 촬영하지 않도록 출발 전 강당 안전교육 시 반복 강조해야 합니다.'
  },
  {
    id: 7,
    title: '중국 현지 통신 환경 & 필수 앱 가이드',
    badge: 'IT 및 통신',
    subtitle: '만리방화벽(GFW) 차단 대응 및 현지 스마트폰 필수 세팅',
    bullets: [
      '국내 통신사 데이터 로밍 권장: VPN 없이도 카카오톡, 네이버, 유튜브 정상 이용 가능 (한국 IP 경유)',
      '현지 Wi-Fi 이용 시 주의: 구글 지도, 유튜브, 카카오 사진 전송 차단됨 (한국에서 VPN 사전 설치 필수)',
      'Alipay(알리페이): 출국 전 한국 신용카드(트래블로그/비자 등) 연동 완료 필수 (모바일 결제 99%)',
      'Amap(고덕지도): 중국 내 구글맵 오류 대비 1위 지도 앱 (호텔 및 관광지 한자 즐겨찾기)',
      '외교부 해외안전여행 앱: 비상 시 원클릭 영사콜센터 연결 및 위기상황 대처 매뉴얼 내장',
      '네이버 파파고: 한국어-중국어 오프라인 언어팩 사전 다운로드 완료'
    ],
    callout: {
      type: 'info',
      text: '중국 도착 후에는 구글 플레이나 앱스토어에서 VPN 다운로드가 차단되므로 반드시 한국에서 세팅을 마쳐야 합니다.'
    },
    presenterNotes: '학부모들에게도 학생들의 안전한 실시간 연락을 위해 가급적 통신사 로밍 요금제 가입을 권장해 주십시오.'
  },
  {
    id: 8,
    title: '항공 안전 및 보조배터리 100Wh 규정',
    badge: '항공 안전',
    subtitle: '인천공항 및 상하이 푸동공항 출입국 보안 검색 수칙',
    bullets: [
      '보조배터리(리튬이온) 부치는 짐(위탁 수하물) 전면 금지: 적발 시 캐리어 강제 개봉 및 출발 지연',
      '용량 규정: 100Wh 이하(일반 20,000mAh 이하) 1인당 최대 5개까지 기내 휴대 가능',
      '단락(쇼트) 방지 조치: 단자 절연 테이프 부착 또는 개별 비닐 파우치 분리 보관',
      '각인 훼손 배터리 불가: 배터리 외부에 정격 용량(Wh 또는 mAh)이 지워진 제품은 공항 압수 폐기',
      '액체류 기내 반입: 개별 100ml 이하만 투명 지퍼백 1개에 담아 휴대 가능 (초과분은 위탁 캐리어)'
    ],
    callout: {
      type: 'warning',
      text: '중국 푸동공항 출국 검색대는 한국보다 배터리 각인 검사가 훨씬 까다롭습니다. 출발 전 각인 상태를 확인하세요.'
    },
    presenterNotes: '학생들이 무심코 보조배터리를 큰 캐리어에 넣는 실수가 가장 빈번합니다. 공항 짐 부치기 직전에 교사가 육안 점검합니다.'
  },
  {
    id: 9,
    title: '차량 이동 및 숙소(위즈덤 로즈 호텔) 야간 지도',
    badge: '생활 지도',
    subtitle: '사제동행 안전 운행 모니터링 및 야간 무단 외출 원천 차단',
    bullets: [
      '전용버스 전 좌석 안전벨트 착용: 교사가 직접 통로를 돌며 체결 확인 후 기사에게 출발 신호',
      '인솔교사 1인 운전석 인근 탑승: 과속 방지, 차간거리 확보, 운전 중 휴대전화 사용 차단',
      '승하차 인원 2중 카운트: 하차 시 교사 선도 하차 후 안전 확인, 승차 시 반장 1차 + 담임 최종 확인',
      '호텔 체크인 후 비상구 확인: 객실 문 안쪽 피난 대피로 학생들과 함께 직접 확인',
      '야간 무단 외출 절대 금지: 22:30 취침 점호 후 교사 층별 복도 순찰 및 로비 출입구 당직 운영',
      '수돗물 직음 엄금: 호텔 생수(농푸산천 등)만 음용 지도'
    ],
    callout: {
      type: 'danger',
      text: '외국 호텔에서 학생들의 야간 무단 외출은 범죄나 미아 등 심각한 사고로 이어집니다. 철저한 통제가 필수입니다.'
    },
    presenterNotes: '호텔 카드키를 방 안에 두고 나와 문이 잠기는 일이 많습니다. 각 실 실장에게 키 보관 책임을 명확히 부여합니다.'
  },
  {
    id: 10,
    title: '응급처치 CPR 5단계 & 재난 위기 대응',
    badge: '응급 구조',
    subtitle: '골든타임 4분 확보 가슴압박 소생술 및 돌발 재난 행동 지침',
    bullets: [
      'CPR 1단계: 환자 어깨를 두드리며 의식 및 호흡 확인 ("괜찮으세요? 눈떠보세요")',
      'CPR 2단계: 특정 1인 지목 120/119 신고 및 AED(자동제세동기) 가져오도록 요청',
      'CPR 3단계: 가슴 중앙 흉골 부위 깍지 낀 손으로 분당 100~120회, 깊이 5~6cm로 30회 압박',
      'CPR 4·5단계: 기도 유지 후 인공호흡 2회 (미숙 시 구급대 도착까지 가슴압박만 지속!)',
      '지진 발생 시: 테이블 밑 머리 보호, 진동 멈춘 후 계단 이용 대피 (엘리베이터 금지)',
      '버스 화재 시: 비상탈출 망치로 유리창 모서리 타격 후 탈출, 도로 밖 안전지대 집결'
    ],
    callout: {
      type: 'danger',
      text: '인공호흡이 자신 없을 때는 멈추지 말고 가슴압박만을 끊김 없이 분당 100회 이상 지속해야 뇌 손상을 막습니다.'
    },
    presenterNotes: '연수 현장에서 교사들과 함께 손꿈치 위치와 팔꿈치를 편 자세를 직접 실습해 보도록 유도합니다.'
  },
  {
    id: 11,
    title: '24시간 긴급연락망 & 여권 분실 시 공안 수속',
    badge: '긴급 연락망',
    subtitle: '외교부·총영사관 핫라인 및 중국 특유의 여권 분실 출국 수속 순서도',
    bullets: [
      '주상하이 대한민국 총영사관 24시 사건사고 비상당직: +86-138-1650-1722',
      '외교부 영사콜센터(서울): +82-2-3210-0404 (무료 접속: +800-2100-0404)',
      '중국 현지 긴급전화: 경찰 110 / 구급차 120 / 화재 119 / 교통사고 122',
      '★ 여권 분실 시 처리 절차 (중국 특유 규정):',
      '  ① 분실 즉시 관할 파출소(공안)에서 [여권분실증명서(报失证明)] 발급',
      '  ② 주상하이 총영사관 방문하여 [긴급 여행증명서(단수여권)] 발급',
      '  ③ 상하이시 공안국 출입경관리처에서 [출국 비자/확인] 취득 후 출국 가능!'
    ],
    callout: {
      type: 'warning',
      text: '중국은 공안국 분실증명서 없이는 총영사관 여행증명서가 있어도 출국이 거부되므로 반드시 3단계를 거쳐야 합니다.'
    },
    presenterNotes: '모든 인솔교사의 휴대전화에 주상하이 총영사관 비상당직 번호(+86-138-1650-1722)를 단축번호로 등록하게 하세요.'
  },
  {
    id: 12,
    title: '인솔교사 공직윤리 & 안전한 동행의 다짐',
    badge: '맺음말',
    subtitle: '배움이 즐겁고 귀가가 안심되는 담양 교육공동체 현장체험학습',
    bullets: [
      '청렴 수칙 준수: 학부모·업체로부터 금품, 향응, 편의 수수 절대 금지',
      '사제동행의 실천: 모든 교육활동에 교사가 함께하며 학생의 안전과 성장을 지원',
      '소외 없는 공동체: 학교폭력, 언어폭력, 집단 따돌림 예방 및 세심한 관찰',
      '특이사항 즉시 보고: 학생 환자 발생 시 응급조치 후 학교 상황실 및 학부모 신속 통보',
      '우리 아이들의 안전하고 보람찬 중국 역사문화 탐방을 위해 최선을 다해 주십시오!'
    ],
    callout: {
      type: 'success',
      text: '"안전이 곧 배움의 토대입니다." 인솔 선생님들의 헌신과 세심한 눈길에 감사드립니다.'
    },
    presenterNotes: '마무리 멘트로 인솔교사 선생님들의 노고를 격려하고 질의응답 시간을 갖습니다.'
  }
];

interface PresentationModeProps {
  onClose: () => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({ onClose }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const currentSlide = slides[currentSlideIndex];
  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col justify-between overflow-hidden select-none">
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-extrabold text-slate-300">
            인솔교사 연수 PPT 프레젠테이션 모드
          </span>
          <span className="text-xs bg-slate-800 text-sky-400 px-2.5 py-0.5 rounded-full border border-slate-700">
            슬라이드 {currentSlideIndex + 1} / {totalSlides}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              showNotes ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
            title="발표자 대본 및 진행 메모 토글"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>발표자 메모</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
            title="전체화면 전환"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-rose-900/40 text-rose-300 hover:bg-rose-900/80 border border-rose-800 transition-colors"
            title="발표 종료 (ESC)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide Canvas */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 sm:px-12 py-8 overflow-y-auto max-w-5xl mx-auto w-full">
        <div className="w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
          {/* Slide Header */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-black uppercase px-3 py-1 rounded-md bg-sky-500 text-slate-950 tracking-wider">
                {currentSlide.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
                {currentSlide.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {currentSlide.subtitle}
              </p>
            </div>
            <span className="text-3xl font-black text-slate-700 font-mono">
              0{currentSlideIndex + 1}
            </span>
          </div>

          {/* Slide Bullets */}
          <div className="space-y-3.5 py-2">
            {currentSlide.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-sky-400 mt-2 shrink-0 shadow-sm shadow-sky-400/50" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Callout box */}
          {currentSlide.callout && (
            <div className={`p-4 rounded-xl border flex items-start gap-3 ${
              currentSlide.callout.type === 'danger' 
                ? 'bg-rose-950/40 border-rose-800/80 text-rose-200' 
                : currentSlide.callout.type === 'warning'
                  ? 'bg-amber-950/40 border-amber-800/80 text-amber-200'
                  : currentSlide.callout.type === 'success'
                    ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-200'
                    : 'bg-sky-950/40 border-sky-800/80 text-sky-200'
            }`}>
              <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-snug">
                {currentSlide.callout.text}
              </div>
            </div>
          )}

          {/* Presenter Notes (Optional Drawer) */}
          {showNotes && (
            <div className="mt-4 p-4 bg-slate-950 rounded-xl border border-sky-900/50 text-xs text-sky-300 space-y-1">
              <div className="font-bold text-sky-400 flex items-center gap-1">
                <Info className="w-3.5 h-3.5" /> 발표자 진행 팁:
              </div>
              <p className="text-slate-300 leading-relaxed">{currentSlide.presenterNotes}</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation Controls */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-t border-slate-800">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-500 hidden sm:inline">단축키: 키보드 [◀ / ▶] 또는 [Space]</span>
        </div>

        {/* Thumbnail Dots */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlideIndex 
                  ? 'w-6 bg-sky-500' 
                  : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
              title={`슬라이드 ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-xs font-bold transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> 이전
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlideIndex === totalSlides - 1}
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-30 text-xs font-bold text-white transition-colors"
          >
            다음 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
