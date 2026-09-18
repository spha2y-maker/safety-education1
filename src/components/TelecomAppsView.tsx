import React from 'react';
import { 
  Smartphone, 
  Wifi, 
  ShieldCheck, 
  CreditCard, 
  MapPin, 
  Languages, 
  MessageSquare, 
  Navigation, 
  AlertCircle,
  Download,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { appGuideData, telecomGuide } from '../data/chinaGuideData';

export const TelecomAppsView: React.FC = () => {
  const getAppIcon = (iconName: string) => {
    switch (iconName) {
      case 'CreditCard': return <CreditCard className="w-5 h-5 text-sky-600" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-emerald-600" />;
      case 'ShieldAlert': return <ShieldCheck className="w-5 h-5 text-rose-600" />;
      case 'Languages': return <Languages className="w-5 h-5 text-amber-600" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-teal-600" />;
      case 'Navigation': return <Navigation className="w-5 h-5 text-purple-600" />;
      default: return <Smartphone className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-md bg-indigo-100 text-indigo-700">
            <Smartphone className="w-4 h-4" />
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
            중국 통신 환경 분석 & 필수 앱 사전 설치 가이드
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          중국 만리방화벽(GFW) 네트워크 차단에 대응하고, 현지 결제·지도·번역·안전을 위한 스마트폰 필수 앱 세팅 매뉴얼입니다.
        </p>
      </div>

      {/* Network Environment: Roaming vs Local SIM / Wi-Fi */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4">
        <div className="flex items-center gap-2">
          <Wifi className="w-5 h-5 text-sky-600" />
          <h4 className="text-base font-bold text-slate-900">
            1. 중국 현지 통신 수단 비교 및 권장 지침
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {telecomGuide.comparison.map((item, idx) => (
            <div key={idx} className={`p-4 rounded-xl border ${item.bgColor}`}>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-white shadow-2xs ${item.accentColor}`}>
                  {item.tag}
                </span>
                <span className="text-xs font-bold text-slate-500">통신 옵션 {idx + 1}</span>
              </div>

              <h5 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h5>

              <div className="space-y-1.5 mb-3 text-xs text-slate-700">
                <div className="font-semibold text-slate-800">주요 장점:</div>
                {item.advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs bg-white/90 p-2.5 rounded-lg border border-slate-200/80 text-slate-700">
                <strong className="text-slate-900">유의점: </strong>
                {item.caution}
              </div>
            </div>
          ))}
        </div>

        {/* VPN & Security Warning Note */}
        <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
          <Lock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-950 space-y-1">
            <div className="font-bold text-amber-900">중국 VPN 및 앱스토어 차단 유의사항:</div>
            <ul className="list-disc list-inside space-y-0.5">
              {telecomGuide.vpnNotice.map((note, nIdx) => (
                <li key={nIdx}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* App Installation Guide Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-indigo-600" />
            <h4 className="text-base font-bold text-slate-900">
              2. 출국 전 스마트폰 필수 설치 앱 6종 (사전 점검표)
            </h4>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
            한국에서 설치 완료 필수
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {appGuideData.map((app, idx) => {
            const isMust = app.priority === 'must';
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs hover:border-indigo-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                        {getAppIcon(app.iconName)}
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900">
                          {app.name}
                        </h5>
                        <span className="text-[10px] text-slate-400 capitalize">
                          {app.category === 'payment' ? '결제' : app.category === 'map' ? '지도/내비' : app.category === 'safety' ? '안전/외교' : app.category === 'translation' ? '번역' : '소통'}
                        </span>
                      </div>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 ${
                      isMust ? 'bg-rose-100 text-rose-800' : 'bg-sky-100 text-sky-800'
                    }`}>
                      {isMust ? '필수 설치' : '권장 설치'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    {app.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                      <div className="font-bold text-slate-800 mb-0.5 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-indigo-600" />
                        한국 출발 전 준비 팁:
                      </div>
                      <p className="text-slate-600 leading-snug">{app.installationTip}</p>
                    </div>

                    <div className="bg-sky-50/70 p-2.5 rounded-lg border border-sky-200/60">
                      <div className="font-bold text-sky-900 mb-0.5 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-sky-600" />
                        현지 사용 시 팁:
                      </div>
                      <p className="text-sky-800 leading-snug">{app.chinaUsageTip}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2 text-right">
                  <span className="text-[11px] font-medium text-slate-400">
                    인솔교사 및 학생 사전 확인 필수
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
