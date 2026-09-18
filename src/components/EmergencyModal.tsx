import React, { useState } from 'react';
import { X, PhoneCall, ShieldAlert, Copy, Check, ExternalLink } from 'lucide-react';
import { emergencyContacts } from '../data/chinaGuideData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-5 sm:p-6 space-y-4">
        <div className="flex items-start justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">
                24시 긴급상황실 & 비상 다이얼
              </h3>
              <p className="text-xs text-slate-500">
                터치 시 스마트폰에서 즉시 전화 연결됩니다.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Priority 24h Hotlines */}
        <div className="space-y-2.5">
          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200">
            <div className="text-[11px] font-bold text-rose-700 uppercase">
              주상하이 대한민국 총영사관 (24시 비상당직)
            </div>
            <div className="flex items-center justify-between mt-1">
              <a
                href="tel:+86-138-1650-1722"
                className="text-xl font-black text-rose-950 hover:underline flex items-center gap-1.5"
              >
                <PhoneCall className="w-4 h-4 text-rose-600" />
                +86-138-1650-1722
              </a>
              <button
                onClick={() => handleCopy('+86-138-1650-1722')}
                className="p-1 text-rose-700 hover:bg-rose-100 rounded-md"
              >
                {copiedNumber === '+86-138-1650-1722' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[11px] text-rose-800/80 mt-1">
              상하이 체류 국민 사건사고 긴급 구호 전용 핫라인
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200">
            <div className="text-[11px] font-bold text-sky-700 uppercase">
              외교부 영사콜센터 (24시간 서울 본부)
            </div>
            <div className="flex items-center justify-between mt-1">
              <a
                href="tel:+82-2-3210-0404"
                className="text-lg font-black text-sky-950 hover:underline flex items-center gap-1.5"
              >
                <PhoneCall className="w-4 h-4 text-sky-600" />
                +82-2-3210-0404
              </a>
              <button
                onClick={() => handleCopy('+82-2-3210-0404')}
                className="p-1 text-sky-700 hover:bg-sky-100 rounded-md"
              >
                {copiedNumber === '+82-2-3210-0404' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[11px] text-sky-800/80 mt-1">
              해외 국가별 무료 접속: +800-2100-0404 / 신속해외송금 지원
            </p>
          </div>

          {/* Local Chinese Emergency Numbers */}
          <div className="grid grid-cols-2 gap-2">
            <a 
              href="tel:110"
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-slate-500 block">중국 경찰(공안)</span>
                <span className="text-base font-black text-slate-900">110</span>
              </div>
              <PhoneCall className="w-4 h-4 text-slate-600" />
            </a>

            <a 
              href="tel:120"
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-slate-500 block">중국 구급차(응급의료)</span>
                <span className="text-base font-black text-rose-600">120</span>
              </div>
              <PhoneCall className="w-4 h-4 text-rose-600" />
            </a>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
