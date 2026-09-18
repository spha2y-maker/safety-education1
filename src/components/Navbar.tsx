import React from 'react';
import { 
  Calendar, 
  ShieldCheck, 
  Globe2, 
  Smartphone, 
  AlertTriangle, 
  PhoneCall, 
  CheckSquare, 
  Camera, 
  Presentation, 
  Printer, 
  SmartphoneNfc
} from 'lucide-react';
import { TabKey } from '../types';

interface NavbarProps {
  currentTab: TabKey;
  setCurrentTab: (tab: TabKey) => void;
  onOpenPresentation: () => void;
  onPrintPdf: () => void;
  isMobileSimMode: boolean;
  setIsMobileSimMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenEmergencyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  onOpenPresentation,
  onPrintPdf,
  isMobileSimMode,
  setIsMobileSimMode,
  onOpenEmergencyModal
}) => {
  const navItems: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: 'overview', label: '종합 대시보드', icon: <Globe2 className="w-4 h-4" /> },
    { key: 'itinerary', label: '세부 일정표', icon: <Calendar className="w-4 h-4" /> },
    { key: 'china-guide', label: '중국 유의사항', icon: <AlertTriangle className="w-4 h-4" /> },
    { key: 'telecom-apps', label: '통신 & 앱 가이드', icon: <Smartphone className="w-4 h-4" /> },
    { key: 'safety-manual', label: '안전 수칙 매뉴얼', icon: <ShieldCheck className="w-4 h-4" /> },
    { key: 'emergency', label: '긴급 연락망·대응', icon: <PhoneCall className="w-4 h-4" /> },
    { key: 'checklist', label: '인솔 체크리스트', icon: <CheckSquare className="w-4 h-4" /> },
    { key: 'places-editor', label: '답사 사진·식당 편집', icon: <Camera className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Upper branding and fast tools */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between py-2.5 sm:py-3 border-b border-slate-100 gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 border border-sky-200">
                  담양군 관내 중3
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-medium">10.13(화) ~ 10.16(금) [3박 4일]</span>
              </div>
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 leading-tight">
                중국 역사문화 탐방 인솔교사 연수 자료
              </h1>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={onOpenEmergencyModal}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 text-xs font-semibold transition-colors"
              title="긴급 영사관/경찰 연락처 즉시 확인"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
              <span>24시 비상연락</span>
            </button>

            <button
              onClick={() => setIsMobileSimMode(prev => !prev)}
              className={`hidden sm:inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                isMobileSimMode 
                  ? 'bg-indigo-600 text-white border-indigo-600' 
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
              title="모바일 현장 화면 시뮬레이션 토글"
            >
              <SmartphoneNfc className="w-3.5 h-3.5" />
              <span>{isMobileSimMode ? 'PC 뷰 전환' : '모바일 뷰'}</span>
            </button>

            <button
              onClick={onPrintPdf}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 text-xs font-medium transition-colors"
              title="PDF 문서 출력 및 인쇄 미리보기"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline">PDF 인쇄</span>
            </button>

            <button
              onClick={onOpenPresentation}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white shadow-sm text-xs font-semibold transition-colors"
              title="연수용 전체화면 PPT 슬라이드 발표 모드"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>PPT 발표</span>
            </button>
          </div>
        </div>

        {/* Lower navigation tabs: 2-row layout with 4 items per row so all 8 icons are visible at a glance */}
        <nav className="py-2.5">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.key;
              return (
                <button
                  key={item.key}
                  id={`nav-tab-${item.key}`}
                  onClick={() => setCurrentTab(item.key)}
                  className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2 px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                    isActive
                      ? 'bg-sky-600 text-white border-sky-600 shadow-sm shadow-sky-600/20 ring-2 ring-sky-500/20'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900'
                  }`}
                  title={item.label}
                >
                  <span className={`p-1 rounded-lg shrink-0 transition-colors ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-sky-600'
                  }`}>
                    {item.icon}
                  </span>
                  <span className="text-[11px] sm:text-xs md:text-sm font-bold text-center sm:text-left leading-tight truncate w-full sm:w-auto">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};
