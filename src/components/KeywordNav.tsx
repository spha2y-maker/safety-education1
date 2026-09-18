import React from 'react';
import { 
  Calendar, 
  AlertTriangle, 
  Smartphone, 
  ShieldCheck, 
  PhoneCall, 
  CheckSquare, 
  Camera, 
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';
import { TabKey } from '../types';

interface KeywordNavProps {
  onSelectTab: (tab: TabKey) => void;
}

export const KeywordNav: React.FC<KeywordNavProps> = ({ onSelectTab }) => {
  const keywords: {
    key: TabKey;
    tag: string;
    title: string;
    keywordsList: string[];
    description: string;
    icon: React.ReactNode;
    colorClasses: {
      border: string;
      bgHover: string;
      iconBg: string;
      badge: string;
    };
  }[] = [
    {
      key: 'itinerary',
      tag: '일정 관리',
      title: '3박 4일 세부 일정표',
      keywordsList: ['남경로', '루쉰공원', '임시정부', '동방명주', '디즈니랜드'],
      description: '담양 출발부터 상하이 3박 4일 분 단위 주요 동선, 식사 장소, 이동 수단 및 일자별 안전 공지.',
      icon: <Calendar className="w-5 h-5 text-sky-600" />,
      colorClasses: {
        border: 'border-sky-200 hover:border-sky-400',
        bgHover: 'hover:bg-sky-50/50',
        iconBg: 'bg-sky-100',
        badge: 'bg-sky-100 text-sky-800'
      }
    },
    {
      key: 'china-guide',
      tag: '국가 특화',
      title: '중국 유의사항 & 에티켓',
      keywordsList: ['반간첩법', '사진촬영 금지', '여권 상시소지', '알리페이', '수돗물 금지'],
      description: '중국 반간첩법 위반 예방, 공안 불시 검문 시 여권 제시 요령, 모바일 간편결제 및 식수 위생 지침.',
      icon: <AlertTriangle className="w-5 h-5 text-amber-600" />,
      colorClasses: {
        border: 'border-amber-200 hover:border-amber-400',
        bgHover: 'hover:bg-amber-50/50',
        iconBg: 'bg-amber-100',
        badge: 'bg-amber-100 text-amber-800'
      }
    },
    {
      key: 'telecom-apps',
      tag: 'IT & 통신',
      title: '현지 통신 & 필수 앱 가이드',
      keywordsList: ['한국 로밍 권장', '만리방화벽', 'Alipay', 'Amap 고덕지도', '외교부 앱'],
      description: 'VPN 없이 카카오톡이 가능한 국내 로밍 vs 현지 Wi-Fi 비교, 결제·지도·번역·안전 필수 앱 설치법.',
      icon: <Smartphone className="w-5 h-5 text-indigo-600" />,
      colorClasses: {
        border: 'border-indigo-200 hover:border-indigo-400',
        bgHover: 'hover:bg-indigo-50/50',
        iconBg: 'bg-indigo-100',
        badge: 'bg-indigo-100 text-indigo-800'
      }
    },
    {
      key: 'safety-manual',
      tag: '생활 & 안전',
      title: '학생 안전 수칙 & 지도교사 지침',
      keywordsList: ['보조배터리 100Wh', '안전벨트', '야간 무단외출 금지', 'CPR 5단계', '학교폭력 예방'],
      description: '항공 위험물 규정, 전용버스 안전운행 조언, 위즈덤 로즈 호텔 야간 순찰, 응급처치 및 재난 대처법.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      colorClasses: {
        border: 'border-emerald-200 hover:border-emerald-400',
        bgHover: 'hover:bg-emerald-50/50',
        iconBg: 'bg-emerald-100',
        badge: 'bg-emerald-100 text-emerald-800'
      }
    },
    {
      key: 'emergency',
      tag: '위기 대응',
      title: '비상연락망 & 응급대응 매뉴얼',
      keywordsList: ['주상하이 총영사관 24시', '영사콜센터', '공안 110/구급 120', '여권분실증명서'],
      description: '비상 원터치 다이얼, 중국 공안국 여권분실증명서 발급 및 긴급 여행증명서 신청 순서도.',
      icon: <PhoneCall className="w-5 h-5 text-rose-600" />,
      colorClasses: {
        border: 'border-rose-200 hover:border-rose-400',
        bgHover: 'hover:bg-rose-50/50',
        iconBg: 'bg-rose-100',
        badge: 'bg-rose-100 text-rose-800'
      }
    },
    {
      key: 'checklist',
      tag: '실시간 점검',
      title: '인솔교사 단계별 체크리스트',
      keywordsList: ['출발 전 준비', '공항·기내', '차량 이동', '관람지 인원점검', '야간 호실순찰'],
      description: '출발 전부터 귀교 시까지 인솔교사가 단계별로 체크하고 로컬에 자동 저장되는 인터랙티브 체크리스트.',
      icon: <CheckSquare className="w-5 h-5 text-teal-600" />,
      colorClasses: {
        border: 'border-teal-200 hover:border-teal-400',
        bgHover: 'hover:bg-teal-50/50',
        iconBg: 'bg-teal-100',
        badge: 'bg-teal-100 text-teal-800'
      }
    },
    {
      key: 'places-editor',
      tag: '답사 갤러리',
      title: '방문지·식당 사전답사 사진 편집',
      keywordsList: ['매헌기념관', '임시정부', '동방명주', '디즈니랜드', '식당 4곳', '사진 직접 업로드'],
      description: '사전 답사 기반 주요 방문지 13개소의 사진, 안전 포인트, 교사 메모를 직접 업로드 및 편집하는 갤러리.',
      icon: <Camera className="w-5 h-5 text-purple-600" />,
      colorClasses: {
        border: 'border-purple-200 hover:border-purple-400',
        bgHover: 'hover:bg-purple-50/50',
        iconBg: 'bg-purple-100',
        badge: 'bg-purple-100 text-purple-800'
      }
    }
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-sky-500 text-white">
              <Zap className="w-3.5 h-3.5" />
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              연수 핵심 키워드 바로가기
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            키워드 카드를 클릭하면 해당 영역의 상세 설명과 지침으로 즉시 이동합니다.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {keywords.map((item) => (
          <div
            key={item.key}
            onClick={() => onSelectTab(item.key)}
            className={`group cursor-pointer bg-white rounded-xl border p-4 shadow-2xs transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${item.colorClasses.border} ${item.colorClasses.bgHover}`}
          >
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${item.colorClasses.iconBg}`}>
                  {item.icon}
                </div>
                <div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${item.colorClasses.badge}`}>
                    {item.tag}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
            </div>

            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
              {item.keywordsList.map((kw, idx) => (
                <span 
                  key={idx} 
                  className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md group-hover:bg-white group-hover:border group-hover:border-slate-200 transition-colors"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
