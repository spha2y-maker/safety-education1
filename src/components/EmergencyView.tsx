import React, { useState } from 'react';
import { 
  PhoneCall, 
  ShieldAlert, 
  FileText, 
  MapPin, 
  Ambulance, 
  Building2, 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { emergencyContacts } from '../data/chinaGuideData';

export const EmergencyView: React.FC = () => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-md bg-rose-100 text-rose-700">
            <PhoneCall className="w-4 h-4" />
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
            24시간 긴급 비상연락망 & 위기상황 대응 매뉴얼
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          주상하이 대한민국 총영사관, 외교부 영사콜센터, 현지 공안·구급차 다이얼 및 여권 분실 시 출국 절차도입니다.
        </p>
      </div>

      {/* Critical Speed Dial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {emergencyContacts.map((c, idx) => {
          const isConsulate24h = c.type === 'embassy' && c.hours.includes('24');
          return (
            <div 
              key={idx}
              className={`bg-white rounded-2xl border p-4 shadow-2xs flex flex-col justify-between transition-all ${
                isConsulate24h 
                  ? 'border-rose-300 ring-2 ring-rose-500/20 bg-gradient-to-br from-white to-rose-50/30' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                    c.type === 'embassy' ? 'bg-rose-100 text-rose-800' :
                    c.type === 'local' ? 'bg-amber-100 text-amber-800' :
                    c.type === 'school' ? 'bg-indigo-100 text-indigo-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {c.role}
                  </span>
                  <span className="text-[10px] font-medium text-slate-400">
                    {c.hours}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {c.name}
                </h4>

                <div className="flex items-center gap-2 my-2">
                  <a 
                    href={`tel:${c.contact.replace(/[^0-9+]/g, '')}`}
                    className="text-lg font-extrabold text-sky-700 hover:text-sky-800 hover:underline tracking-tight flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-4 h-4 text-sky-600" />
                    {c.contact}
                  </a>

                  <button
                    onClick={() => handleCopy(c.contact)}
                    className="p-1 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100 transition-colors"
                    title="번호 복사"
                  >
                    {copiedNumber === c.contact ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {c.note}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">터치 시 즉시 전화 걸기</span>
                <a
                  href={`tel:${c.contact.replace(/[^0-9+]/g, '')}`}
                  className="font-bold text-sky-600 hover:text-sky-700 flex items-center gap-0.5"
                >
                  통화 <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Crucial Process: China Passport Loss Flowchart */}
      <div className="bg-white rounded-2xl border border-rose-200 p-5 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-rose-100">
          <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              중국 현지 여권 분실 시 필수 대처 순서도 (주의: 공안 증명서 필수!)
            </h4>
            <p className="text-xs text-slate-500">
              중국은 우리 공관 여행증명서만으로는 출국 불가하며, 공안국 발급 '분실증명서'와 출국 수속이 필수적입니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-200 text-slate-800">STEP 1</span>
            <h5 className="font-bold text-xs sm:text-sm text-slate-900">현지 파출소(공안) 신고</h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              분실 발견 즉시 가까운 현지 경찰서(파출소)를 찾아가 <strong>'여권 분실증명서(报失证明)'</strong>를 정식 발급받습니다.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-rose-100 text-rose-800">STEP 2</span>
            <h5 className="font-bold text-xs sm:text-sm text-slate-900">주상하이 총영사관 방문</h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              공안 분실증명서, 여권용 컬러 사진 2장, 사전에 보관한 여권 사본 지참 후 영사관에서 <strong>'긴급 단수여권(여행증명서)'</strong>을 발급받습니다.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">STEP 3</span>
            <h5 className="font-bold text-xs sm:text-sm text-slate-900">상하이시 출입경관리처</h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              상하이 공안국 출입경관리국을 방문하여 발급받은 여행증명서에 <strong>'출국 비자(출경 확인)'</strong>를 취득해야 공항 출국이 가능합니다.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">STEP 4</span>
            <h5 className="font-bold text-xs sm:text-sm text-slate-900">공항 출국 및 안전 귀국</h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              출경 확인 도장이 날인된 여행증명서와 공안 분실증명서를 지참하여 푸동공항 출국 심사대를 통과하고 인솔교사와 동행 귀국합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Traffic Accident & Swift Remittance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
          <div className="flex items-center gap-2">
            <Ambulance className="w-5 h-5 text-rose-600" />
            <h4 className="font-bold text-sm sm:text-base text-slate-900">
              교통사고 및 학생 부상 발생 시 대처 요령
            </h4>
          </div>
          <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
            <li>• <strong>안전 확보 및 인원 확인:</strong> 2차 사고 방지를 위해 도로 밖 안전지대로 학생들을 신속 대피시키고 인원을 재확인합니다.</li>
            <li>• <strong>환자 이송:</strong> 목이나 척추 손상이 의심될 경우 절대 무리하게 움직이지 말고 현지 구급차(120)를 호출합니다.</li>
            <li>• <strong>성급한 과실 인정 금지:</strong> 당황하여 지나치게 위축되거나 사과하지 말고 침착하게 사실관계를 경찰(122)에 진술합니다.</li>
            <li>• <strong>증거 확보:</strong> 사고 현장 및 차량 번호판을 사진/영상으로 기록하고 목격자 연락처를 확보합니다.</li>
            <li>• <strong>학교 및 교육청 보고:</strong> 응급조치 직후 학교 비상대책본부에 즉시 유선 보고합니다.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-indigo-600" />
            <h4 className="font-bold text-sm sm:text-base text-slate-900">
              외교부 신속해외송금지원제도 안내
            </h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            해외 체류 중 도난이나 예기치 못한 사고로 긴급 치료비나 경비가 필요한 경우, 
            국내 연고자(가족 또는 학교)가 외교부 계좌로 입금하면 현지 대한민국 총영사관을 통해 
            미화 기준 최대 3,000달러 상당의 현지화를 즉시 전달받을 수 있는 제도입니다.
          </p>
          <div className="p-2.5 bg-indigo-50 rounded-xl border border-indigo-100 text-xs text-indigo-950 font-medium">
            신청 방법: 외교부 영사콜센터(+82-2-3210-0404) 또는 주상하이 총영사관으로 신청
          </div>
        </div>
      </div>
    </div>
  );
};
