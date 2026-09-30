import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Building2, 
  Users, 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles, 
  FileDown, 
  Presentation,
  Clock,
  ArrowRight
} from 'lucide-react';
import { TabKey } from '../types';

interface HeroOverviewProps {
  onNavigate: (tab: TabKey) => void;
  onOpenPresentation: () => void;
  onPrintPdf: () => void;
}

export const HeroOverview: React.FC<HeroOverviewProps> = ({
  onNavigate,
  onOpenPresentation,
  onPrintPdf
}) => {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-indigo-50/50 border border-sky-100 rounded-2xl p-5 sm:p-7 shadow-xs mb-8">
      {/* Upper tag and main title */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-600 text-white text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            2026학년도 현장체험학습
          </span>
          <span className="text-xs sm:text-sm font-semibold text-sky-900 bg-sky-100/80 px-2.5 py-1 rounded-full border border-sky-200/60">
            담양 교육공동체 인솔교사 사전 연수
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onPrintPdf}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold shadow-2xs transition-colors"
          >
            <FileDown className="w-3.5 h-3.5 text-sky-600" />
            연수 교재 PDF 저장
          </button>
          <button
            onClick={onOpenPresentation}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold shadow-2xs transition-colors"
          >
            <Presentation className="w-3.5 h-3.5" />
            슬라이드 발표
          </button>
        </div>
      </div>

      <div className="max-w-4xl space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          담양 중3 중국(상하이) 역사문화 탐방 인솔교사 연수
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-700">
          본 연수 자료는 2026학년도 담양 관내 중학교 3학년 중국(상하이) 국외 현장체험학습의 안전하고 체계적인 운영을 위하여, 사전 답사 결과와 교육청·외교부 해외안전 가이드라인을 바탕으로 기안·편성한 인솔교직원 사전 직무연수 자료입니다.
        </p>
      </div>

      {/* Info Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-sky-100/80">
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500">탐방 기간</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900">10.13(화) ~ 10.16(금)</div>
            <div className="text-[10px] text-slate-400">3박 4일 일정</div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500">참가 대상</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900">담양 중학교 3학년</div>
            <div className="text-[10px] text-slate-400">인솔교사 사제동행</div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500">탐방 지역</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900">중국 상하이 일원</div>
            <div className="text-[10px] text-slate-400">시차: 한국 대비 -1시간</div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500">숙소 안내</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900">위즈덤 로즈 호텔</div>
            <div className="text-[10px] text-slate-400">전 일정 3박 투숙</div>
          </div>
        </div>
      </div>

      {/* Direct alert banner */}
      <div className="mt-5 p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-rose-900">
          <span className="font-bold">중국 현지 3대 핵심 주의사항: </span>
          ① <strong>반간첩법 유의</strong>(공안·보안시설·군사기지 사진촬영 절대 금지), 
          ② <strong>여권 원본 상시 지참</strong>(실명 입장 확인 및 공안 검문 대비), 
          ③ <strong>수돗물 음용 절대 금지</strong>(밀봉 생수만 섭취 및 길거리 비위생 간식 차단).
        </div>
      </div>
    </div>
  );
};
