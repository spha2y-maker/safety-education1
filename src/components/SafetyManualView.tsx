import React, { useState } from 'react';
import { 
  ShieldCheck, 
  BatteryCharging, 
  Bus, 
  Hotel, 
  HeartPulse, 
  Flame, 
  Users2, 
  CheckCircle2, 
  AlertOctagon,
  ChevronRight,
  Sparkles,
  Zap,
  Activity
} from 'lucide-react';
import { safetySectionsData } from '../data/safetyRulesData';

export const SafetyManualView: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-prep');

  const currentSection = safetySectionsData.find(s => s.id === activeSectionId) || safetySectionsData[0];

  const getSectionIcon = (id: string) => {
    switch (id) {
      case 'sec-prep': return <ShieldCheck className="w-4 h-4" />;
      case 'sec-flight-battery': return <BatteryCharging className="w-4 h-4" />;
      case 'sec-bus-transit': return <Bus className="w-4 h-4" />;
      case 'sec-hotel-night': return <Hotel className="w-4 h-4" />;
      case 'sec-cpr-aed': return <HeartPulse className="w-4 h-4" />;
      case 'sec-disaster': return <Flame className="w-4 h-4" />;
      case 'sec-ethics-violence': return <Users2 className="w-4 h-4" />;
      default: return <ShieldCheck className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-md bg-emerald-100 text-emerald-700">
            <ShieldCheck className="w-4 h-4" />
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
            학생 안전 지도 수칙 & 인솔교사 대응 매뉴얼
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          사전 준비, 항공 배터리 규정, 차량 이동, 숙소 야간 순찰, CPR 응급구조, 재난 대피 및 공직윤리 종합 매뉴얼입니다.
        </p>
      </div>

      {/* Navigation tabs for safety domains */}
      <div className="flex flex-wrap items-center gap-1.5 pb-1">
        {safetySectionsData.map((sec) => {
          const isActive = sec.id === activeSectionId;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveSectionId(sec.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {getSectionIcon(sec.id)}
              <span>{sec.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Section Content Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-2xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800">
              {currentSection.category}
            </span>
            <h4 className="text-xl font-bold text-slate-900 mt-1.5">
              {currentSection.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {currentSection.subtitle}
            </p>
          </div>
        </div>

        {/* Special CPR Interactive Infographic if sec-cpr-aed is selected */}
        {currentSection.id === 'sec-cpr-aed' && (
          <div className="bg-gradient-to-br from-rose-50 to-red-50/60 border border-rose-200 rounded-2xl p-5 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-5 h-5 text-rose-600" />
              <h5 className="text-sm sm:text-base font-bold text-rose-950">
                골든타임 4분! 가슴압박 소생술(Hands-only CPR) 5단계 핵심 시퀀스
              </h5>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 text-center">
              <div className="bg-white p-3 rounded-xl border border-rose-100 shadow-2xs">
                <span className="text-xs font-extrabold bg-rose-600 text-white px-2 py-0.5 rounded-full">1단계</span>
                <div className="font-bold text-xs text-slate-900 mt-1.5">의식 확인</div>
                <div className="text-[11px] text-slate-500 mt-0.5">어깨 가볍게 치며 호흡/눈뜸 확인</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-rose-100 shadow-2xs">
                <span className="text-xs font-extrabold bg-rose-600 text-white px-2 py-0.5 rounded-full">2단계</span>
                <div className="font-bold text-xs text-slate-900 mt-1.5">구조요청</div>
                <div className="text-[11px] text-slate-500 mt-0.5">특정인 지목 119/120 신고 & AED 요청</div>
              </div>
              <div className="bg-white p-3 rounded-xl border-2 border-rose-400 shadow-2xs">
                <span className="text-xs font-extrabold bg-rose-600 text-white px-2 py-0.5 rounded-full">3단계 (핵심)</span>
                <div className="font-bold text-xs text-rose-700 mt-1.5">가슴압박 30회</div>
                <div className="text-[11px] text-slate-600 mt-0.5">분당 100~120회, 5~6cm 깊이 강하게</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-rose-100 shadow-2xs">
                <span className="text-xs font-extrabold bg-rose-600 text-white px-2 py-0.5 rounded-full">4단계</span>
                <div className="font-bold text-xs text-slate-900 mt-1.5">기도 유지</div>
                <div className="text-[11px] text-slate-500 mt-0.5">머리 젖히고 턱 끝 들어올리기</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-rose-100 shadow-2xs">
                <span className="text-xs font-extrabold bg-rose-600 text-white px-2 py-0.5 rounded-full">5단계</span>
                <div className="font-bold text-xs text-slate-900 mt-1.5">인공호흡 2회</div>
                <div className="text-[11px] text-slate-500 mt-0.5">미숙 시 가슴압박만 끊김 없이 지속!</div>
              </div>
            </div>
          </div>
        )}

        {/* Special Flight Battery Infographic if sec-flight-battery is selected */}
        {currentSection.id === 'sec-flight-battery' && (
          <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 border border-amber-200 rounded-2xl p-5 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-amber-600" />
              <h5 className="text-sm sm:text-base font-bold text-amber-950">
                인천공항 및 푸동공항 보조배터리(리튬이온) 엄격 규정 체크
              </h5>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-amber-950">
              <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-2xs">
                <div className="font-bold text-rose-700 mb-1">🚫 위탁 수하물 절대 불가</div>
                <p className="text-slate-600 leading-relaxed">
                  캐리어(부치는 짐)에 보조배터리를 넣으면 공항 X-ray에서 적발되어 캐리어 강제 개봉 및 비행기 탑승 지연의 원인이 됩니다.
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-2xs">
                <div className="font-bold text-amber-800 mb-1">⚡ 용량 규정 (100Wh 이하)</div>
                <p className="text-slate-600 leading-relaxed">
                  일반 20,000mAh(3.7V 기준 74Wh) 이하는 1인당 최대 5개 기내 휴대 가능. 배터리 표면에 <strong>용량(Wh/mAh) 표기 각인이 훼손된 제품은 폐기 대상</strong>입니다.
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-2xs">
                <div className="font-bold text-emerald-800 mb-1">🛡️ 단락(쇼트) 방지 조치</div>
                <p className="text-slate-600 leading-relaxed">
                  금속 단자에 절연 테이프 부착, 보호용 캡 착용, 또는 투명 지퍼백 파우치에 개별 보관하여 합선 화재를 방지해야 보안 검색을 통과합니다.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Items List */}
        <div className="grid grid-cols-1 gap-4">
          {currentSection.items.map((item, idx) => (
            <div 
              key={idx}
              className={`p-4 rounded-xl border transition-all ${
                item.emphasis 
                  ? 'bg-amber-50/50 border-amber-300' 
                  : 'bg-slate-50/70 border-slate-200'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <h5 className={`text-sm sm:text-base font-bold ${
                    item.emphasis ? 'text-amber-950' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h5>
                </div>

                {item.tags && (
                  <div className="flex items-center gap-1">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-semibold bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
