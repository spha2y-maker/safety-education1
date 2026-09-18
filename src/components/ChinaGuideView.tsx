import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ShieldAlert, 
  CreditCard, 
  Droplet, 
  CameraOff, 
  Sparkles, 
  FileCheck2, 
  CheckCircle2, 
  HelpCircle,
  Building,
  Info
} from 'lucide-react';
import { chinaRulesData } from '../data/chinaGuideData';

export const ChinaGuideView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: '전체 보기' },
    { id: '법률 및 안보', label: '법률·반간첩법' },
    { id: '출입국 및 신분증', label: '여권·신분증' },
    { id: '결제 및 금융', label: '모바일 결제' },
    { id: '위생 및 보건', label: '식수·위생' },
    { id: '문화 및 에티켓', label: '문화·에티켓' }
  ];

  const filteredRules = activeFilter === 'all' 
    ? chinaRulesData 
    : chinaRulesData.filter(r => r.category === activeFilter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-amber-100 text-amber-700">
              <AlertTriangle className="w-4 h-4" />
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              중국 현지 방문 시 필수 유의사항 및 에티켓
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            중국의 특수한 법률 환경(반간첩법), 보안 통제, 모바일 결제 및 위생 수칙을 준수하여 안전사고를 사전 예방합니다.
          </p>
        </div>
      </div>

      {/* High Alert Callout for Anti-Espionage Law */}
      <div className="bg-gradient-to-r from-rose-50 via-rose-100/60 to-amber-50 border-2 border-rose-300 rounded-2xl p-5 shadow-xs">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-rose-600/20">
            <CameraOff className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-rose-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                최고 등급 주의
              </span>
              <h4 className="text-base sm:text-lg font-extrabold text-rose-950">
                중국 개정 반간첩법(반스파이법) 및 보안 시설 촬영 금지 특별 수칙
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-rose-900/90 leading-relaxed mb-3">
              중국은 2023년 7월부터 반간첩법 적용 범위를 대폭 강화하였습니다. 국가 안보와 관련된 시설, 관공서, 군사 관련 시설의 사진 및 영상 촬영 시 
              공안에 의한 휴대폰 압수, 현장 조사, 구류 조치가 발생할 수 있으므로 학생들에게 절대적인 주의 교육이 필요합니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-rose-950">
              <div className="bg-white/80 p-2.5 rounded-lg border border-rose-200/80 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0" />
                <span>군사기지, 공안국, 주요 정부청사 촬영 절대 금지</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded-lg border border-rose-200/80 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0" />
                <span>공항 보안검색대 및 출입국 심사구역 촬영 금지</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded-lg border border-rose-200/80 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0" />
                <span>시위·단속·사건사고 현장 호기심 촬영 및 SNS 업로드 금지</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded-lg border border-rose-200/80 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0" />
                <span>미인가 드론(무인기) 조작 및 정밀 지도 측량 금지</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeFilter === cat.id
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRules.map((rule) => {
          const isDanger = rule.alertLevel === 'danger';
          const isWarning = rule.alertLevel === 'warning';
          
          return (
            <div 
              key={rule.id}
              className={`bg-white rounded-2xl border p-5 shadow-2xs space-y-3 transition-all ${
                isDanger 
                  ? 'border-rose-200 hover:border-rose-300' 
                  : isWarning 
                    ? 'border-amber-200 hover:border-amber-300' 
                    : 'border-slate-200 hover:border-sky-300'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                    isDanger 
                      ? 'bg-rose-100 text-rose-800' 
                      : isWarning 
                        ? 'bg-amber-100 text-amber-800' 
                        : 'bg-sky-100 text-sky-800'
                  }`}>
                    {rule.category}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">
                    {rule.title}
                  </h4>
                </div>
                <div className={`p-2 rounded-xl shrink-0 ${
                  isDanger ? 'bg-rose-50 text-rose-600' : isWarning ? 'bg-amber-50 text-amber-600' : 'bg-sky-50 text-sky-600'
                }`}>
                  {isDanger ? <ShieldAlert className="w-5 h-5" /> : isWarning ? <AlertTriangle className="w-5 h-5" /> : <Info className="w-5 h-5" />}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <strong>핵심 요약:</strong> {rule.summary}
              </p>

              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  인솔교사 세부 행동 수칙
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {rule.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                        isDanger ? 'bg-rose-500' : isWarning ? 'bg-amber-500' : 'bg-sky-500'
                      }`} />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cultural Etiquette Quick Reference */}
      <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-sky-700" />
          <h4 className="text-sm sm:text-base font-bold text-sky-950">
            상하이 현지 문화 에티켓 & 생활 상식 팁
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-sky-900">
          <div className="bg-white p-3 rounded-xl border border-sky-100 shadow-2xs">
            <div className="font-bold text-slate-900 mb-1">🔌 전기 콘센트 규격</div>
            <p className="text-slate-600 leading-relaxed">
              중국 상하이 호텔은 220V, 50Hz를 사용하며 한국의 2구 플러그와 대부분 호환되는 멀티 콘센트가 구비되어 있습니다. 단, 헐거울 수 있으므로 여분의 여행용 어댑터 1~2개 인솔팀 준비.
            </p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-sky-100 shadow-2xs">
            <div className="font-bold text-slate-900 mb-1">🧻 화장실 및 위생용품</div>
            <p className="text-slate-600 leading-relaxed">
              일부 공원이나 옛거리 공중화장실에는 화장지가 비치되지 않은 경우가 있습니다. 학생들에게 가방에 항상 휴대용 미니 물티슈 및 티슈를 지참하도록 안내합니다.
            </p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-sky-100 shadow-2xs">
            <div className="font-bold text-slate-900 mb-1">🥢 식사 식기 에티켓</div>
            <p className="text-slate-600 leading-relaxed">
              원형 회전 테이블에서는 음식이 내 앞에 왔을 때 덜어가며, 회전판을 돌릴 때 다른 사람이 음식을 집고 있는지 확인합니다. 개인 젓가락으로 공용 음식을 직접 집지 않도록 지도합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
