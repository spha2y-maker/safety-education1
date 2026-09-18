import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Utensils, 
  Hotel, 
  Car, 
  ShieldAlert, 
  CheckCircle2, 
  ChevronRight,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { itineraryData } from '../data/itineraryData';
import { TabKey } from '../types';

interface ItineraryViewProps {
  onGoToPlaces?: () => void;
}

export const ItineraryView: React.FC<ItineraryViewProps> = ({ onGoToPlaces }) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [viewAll, setViewAll] = useState<boolean>(false);

  const currentPlan = itineraryData.find((p) => p.dayNumber === selectedDay) || itineraryData[0];

  return (
    <div className="space-y-6">
      {/* Header title */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-sky-100 text-sky-700">
              <Calendar className="w-4 h-4" />
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              3박 4일 세부 일정표 및 인솔 안전 가이드
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            2026.10.13(화) ~ 10.16(금) 담양 ➔ 상하이 왕복 공식 교육 일정표입니다.
          </p>
        </div>

        {/* Toggle view all vs single day */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setViewAll(false)}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              !viewAll ? 'bg-white text-sky-700 shadow-2xs font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            일자별 상세 보기
          </button>
          <button
            onClick={() => setViewAll(true)}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewAll ? 'bg-white text-sky-700 shadow-2xs font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            전체 일정 요약 보기
          </button>
        </div>
      </div>

      {/* Day Selector Buttons */}
      {!viewAll && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {itineraryData.map((plan) => {
            const isSelected = plan.dayNumber === selectedDay;
            return (
              <button
                key={plan.dayNumber}
                onClick={() => setSelectedDay(plan.dayNumber)}
                className={`p-3 sm:p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-600/20'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-sky-300 hover:bg-sky-50/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    제{plan.dayNumber}일
                  </span>
                  <span className={`text-xs ${isSelected ? 'text-sky-100' : 'text-slate-400'}`}>
                    {plan.date} ({plan.dayOfWeek})
                  </span>
                </div>
                <div className={`text-xs sm:text-sm font-bold truncate mt-1 ${
                  isSelected ? 'text-white' : 'text-slate-900'
                }`}>
                  {plan.highlights[0]}
                </div>
                <div className={`text-[11px] truncate mt-0.5 ${
                  isSelected ? 'text-sky-100' : 'text-slate-500'
                }`}>
                  {plan.highlights.slice(1, 3).join(', ')}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Single Day Detail or Full Overview */}
      {(viewAll ? itineraryData : [currentPlan]).map((plan) => (
        <div key={plan.dayNumber} className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-5">
          {/* Day Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-sky-600 text-white">
                  DAY {plan.dayNumber}
                </span>
                <span className="text-sm font-bold text-slate-600">
                  {plan.date} ({plan.dayOfWeek})
                </span>
                <span className="text-xs font-medium text-slate-400">|</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  {plan.route}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
                {plan.highlights.join(' ➔ ')}
              </h4>
            </div>

            <div className="flex flex-col sm:items-end gap-1 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                <Hotel className="w-3.5 h-3.5 text-sky-600" />
                <span>숙소: <strong>{plan.hotel}</strong></span>
              </div>
            </div>
          </div>

          {/* Meals Badge Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md shrink-0">
                조식
              </span>
              <span className="text-slate-700 truncate">{plan.meals.breakfast}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                중식
              </span>
              <span className="text-slate-700 truncate">{plan.meals.lunch}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-md shrink-0">
                석식
              </span>
              <span className="text-slate-700 truncate">{plan.meals.dinner}</span>
            </div>
          </div>

          {/* Daily Notice */}
          <div className="p-3 bg-sky-50/80 border border-sky-200 rounded-xl flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-sky-900">
              <span className="font-bold">당일 인솔 중점 공지: </span>
              {plan.dailyNotice}
            </div>
          </div>

          {/* Timed Schedule Cards */}
          <div className="space-y-3 pt-2">
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              시간별 상세 진행 일정 및 인솔 가이드
            </h5>
            
            <div className="space-y-3">
              {plan.items.map((item) => (
                <div 
                  key={item.id}
                  className="bg-slate-50/70 hover:bg-slate-50 border border-slate-200 rounded-xl p-4 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 font-mono text-xs font-bold bg-white text-slate-800 px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                        <Clock className="w-3 h-3 text-sky-600" />
                        {item.time}
                      </span>
                      <h6 className="text-sm sm:text-base font-bold text-slate-900">
                        {item.title}
                      </h6>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.transport && (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                          <Car className="w-3 h-3 text-slate-400" />
                          {item.transport}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Safety Alert Box */}
                  <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-2.5 mb-2.5 flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div className="text-xs text-amber-900 leading-snug">
                      <strong className="text-amber-800">안전 지도 사항: </strong>
                      {item.safetyCheck}
                    </div>
                  </div>

                  {/* Teacher Escort Key Points */}
                  <div className="bg-white rounded-lg p-2.5 border border-slate-200 flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-700">
                    <span className="font-bold text-sky-700 shrink-0 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 인솔 체크포인트:
                    </span>
                    {item.keyPoints.map((kp, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        {kp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
