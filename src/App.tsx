import React, { useState } from 'react';
import { TabKey } from './types';
import { Navbar } from './components/Navbar';
import { HeroOverview } from './components/HeroOverview';
import { KeywordNav } from './components/KeywordNav';
import { ItineraryView } from './components/ItineraryView';
import { ChinaGuideView } from './components/ChinaGuideView';
import { TelecomAppsView } from './components/TelecomAppsView';
import { SafetyManualView } from './components/SafetyManualView';
import { EmergencyView } from './components/EmergencyView';
import { TeacherChecklistView } from './components/TeacherChecklistView';
import { PlacePhotoEditor } from './components/PlacePhotoEditor';
import { PresentationMode } from './components/PresentationMode';
import { EmergencyModal } from './components/EmergencyModal';
import { 
  ShieldCheck, 
  Printer, 
  Presentation, 
  Smartphone, 
  PhoneCall, 
  Heart, 
  FileText,
  Building,
  GraduationCap
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabKey>('overview');
  const [isPresentationOpen, setIsPresentationOpen] = useState<boolean>(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState<boolean>(false);
  const [isMobileSimMode, setIsMobileSimMode] = useState<boolean>(false);

  const handlePrintPdf = () => {
    window.print();
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <HeroOverview 
              onNavigate={(tab) => setCurrentTab(tab)} 
              onOpenPresentation={() => setIsPresentationOpen(true)}
              onPrintPdf={handlePrintPdf}
            />
            <KeywordNav onSelectTab={(tab) => setCurrentTab(tab)} />
            
            {/* Quick Teaser of 1st Day and Teacher Priority Action */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-full">
                    D-DAY 핵심 포인트
                  </span>
                  <span className="text-xs text-slate-400">10.13(화) 출발일</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  출발 당일 인솔교사 최우선 확인 과제
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                    <span><strong>보조배터리(100Wh 이하):</strong> 위탁 수하물 캐리어에 넣지 않고 기내 휴대용 가방에 분리 소지하도록 재확인.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                    <span><strong>여권 원본 소지:</strong> 기내 좌석 앞주머니나 화장실에 두고 내리지 않도록 착륙 직후 3중 점검.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                    <span><strong>학생 발열 및 건강 확인:</strong> 차멀미 학생 앞자리 배치 및 상비약 사전 복용 지도.</span>
                  </li>
                </ul>
                <div className="pt-2 text-right">
                  <button
                    onClick={() => setCurrentTab('itinerary')}
                    className="text-xs font-bold text-sky-600 hover:text-sky-700"
                  >
                    세부 일정표 바로가기 ➔
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full">
                    24시 긴급 대응
                  </span>
                  <span className="text-xs text-slate-400">중국 현지 비상</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  주상하이 대한민국 총영사관 비상당직
                </h4>
                <div className="p-3 bg-rose-50/70 border border-rose-200/80 rounded-xl">
                  <div className="text-xs font-bold text-rose-900">비상 핫라인 (24시간):</div>
                  <a 
                    href="tel:+86-138-1650-1722"
                    className="text-lg font-black text-rose-900 hover:underline block mt-0.5"
                  >
                    +86-138-1650-1722
                  </a>
                  <div className="text-[11px] text-rose-700 mt-1">
                    중국 경찰 <strong>110</strong> / 구급차 <strong>120</strong> / 화재 <strong>119</strong>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-snug">
                  중국 현지 여권 분실 시 반드시 현지 파출소 '분실증명서'를 발급받아야 총영사관 여행증명서로 출국 가능합니다.
                </p>
                <div className="pt-2 text-right">
                  <button
                    onClick={() => setCurrentTab('emergency')}
                    className="text-xs font-bold text-rose-600 hover:text-rose-700"
                  >
                    위기상황 매뉴얼 확인 ➔
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'itinerary':
        return <ItineraryView onGoToPlaces={() => setCurrentTab('places-editor')} />;
      case 'china-guide':
        return <ChinaGuideView />;
      case 'telecom-apps':
        return <TelecomAppsView />;
      case 'safety-manual':
        return <SafetyManualView />;
      case 'emergency':
        return <EmergencyView />;
      case 'checklist':
        return <TeacherChecklistView />;
      case 'places-editor':
        return <PlacePhotoEditor />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenPresentation={() => setIsPresentationOpen(true)}
        onPrintPdf={handlePrintPdf}
        isMobileSimMode={isMobileSimMode}
        setIsMobileSimMode={setIsMobileSimMode}
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
      />

      {/* Main Body */}
      <main className={`flex-1 transition-all ${isMobileSimMode ? 'py-8 flex justify-center bg-slate-200' : 'py-6'}`}>
        {isMobileSimMode ? (
          /* Mobile Device Frame Simulation */
          <div className="w-[390px] h-[844px] bg-white rounded-[45px] shadow-2xl border-[10px] border-slate-900 overflow-hidden flex flex-col relative ring-1 ring-slate-900/10">
            {/* Phone Speaker / Dynamic Island notch */}
            <div className="h-7 bg-slate-900 flex items-center justify-center relative shrink-0">
              <div className="w-24 h-4 bg-slate-950 rounded-full flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500/80" />
              </div>
            </div>

            {/* Mobile Header indicator */}
            <div className="bg-sky-600 text-white px-4 py-2 flex items-center justify-between text-[11px] font-bold shrink-0">
              <span>담양 중3 상하이 탐방</span>
              <button 
                onClick={() => setIsMobileSimMode(false)}
                className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full hover:bg-white/30"
              >
                PC 뷰 복귀
              </button>
            </div>

            {/* Mobile Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-slate-900">
              {renderTabContent()}
            </div>

            {/* Mobile Bottom Navigation Bar */}
            <div className="h-12 bg-white border-t border-slate-200 flex items-center justify-around px-2 shrink-0 text-[10px] font-semibold text-slate-500">
              <button onClick={() => setCurrentTab('overview')} className={`flex flex-col items-center ${currentTab === 'overview' ? 'text-sky-600 font-bold' : ''}`}>
                대시보드
              </button>
              <button onClick={() => setCurrentTab('itinerary')} className={`flex flex-col items-center ${currentTab === 'itinerary' ? 'text-sky-600 font-bold' : ''}`}>
                일정표
              </button>
              <button onClick={() => setCurrentTab('checklist')} className={`flex flex-col items-center ${currentTab === 'checklist' ? 'text-sky-600 font-bold' : ''}`}>
                체크리스트
              </button>
              <button onClick={() => setCurrentTab('places-editor')} className={`flex flex-col items-center ${currentTab === 'places-editor' ? 'text-sky-600 font-bold' : ''}`}>
                답사사진
              </button>
              <button onClick={() => setIsEmergencyModalOpen(true)} className="flex flex-col items-center text-rose-600 font-bold">
                비상연락
              </button>
            </div>
          </div>
        ) : (
          /* Normal Responsive Container */
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {renderTabContent()}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="flex items-center justify-center gap-2 text-slate-700 font-semibold">
            <GraduationCap className="w-4 h-4 text-sky-600" />
            <span>2026학년도 담양 관내 중학교 3학년 중국(상하이) 역사문화 탐방 인솔교사 직무연수 자료</span>
          </div>
          <p className="text-slate-400">
            담양교육공동체 학생 안전을 최우선으로 하며, 상기 자료는 현지 기상, 교통 및 학교 비상대책본부 지침에 따라 유동적으로 조정될 수 있습니다.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-slate-400">
            <button onClick={() => setIsPresentationOpen(true)} className="hover:text-sky-600 underline">
              PPT 발표 모드
            </button>
            <span>•</span>
            <button onClick={handlePrintPdf} className="hover:text-sky-600 underline">
              PDF 출력 / 교재 인쇄
            </button>
            <span>•</span>
            <button onClick={() => setIsEmergencyModalOpen(true)} className="hover:text-rose-600 underline">
              24시 비상연락망
            </button>
          </div>
        </div>
      </footer>

      {/* Fullscreen Presentation Slideshow Mode */}
      {isPresentationOpen && (
        <PresentationMode onClose={() => setIsPresentationOpen(false)} />
      )}

      {/* Quick Emergency Speed Dial Modal */}
      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />
    </div>
  );
}
