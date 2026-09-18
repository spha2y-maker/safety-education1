import React, { useState, useEffect } from 'react';
import { 
  CheckSquare, 
  Square, 
  RotateCcw, 
  Plus, 
  CheckCircle2, 
  Sparkles, 
  Filter, 
  AlertCircle 
} from 'lucide-react';
import { ChecklistItem } from '../types';
import { initialChecklists } from '../data/checklistData';

export const TeacherChecklistView: React.FC = () => {
  const [checklists, setChecklists] = useState<ChecklistItem[]>(() => {
    const saved = localStorage.getItem('damyang_shanghai_checklists');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialChecklists;
      }
    }
    return initialChecklists;
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [newTitle, setNewTitle] = useState<string>('');
  const [isAdding, setIsAdding] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('damyang_shanghai_checklists', JSON.stringify(checklists));
  }, [checklists]);

  const toggleCheck = (id: string) => {
    setChecklists(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleReset = () => {
    if (window.confirm('체크리스트를 초기 상태로 초기화하시겠습니까?')) {
      setChecklists(initialChecklists);
      localStorage.removeItem('damyang_shanghai_checklists');
    }
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem: ChecklistItem = {
      id: `chk-custom-${Date.now()}`,
      category: (activeCategory === 'all' ? 'activity' : activeCategory) as any,
      title: newTitle.trim(),
      detail: '인솔교사 현장 추가 점검 항목',
      required: false,
      checked: false
    };

    setChecklists(prev => [newItem, ...prev]);
    setNewTitle('');
    setIsAdding(false);
  };

  const totalCount = checklists.length;
  const completedCount = checklists.filter(c => c.checked).length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const categories = [
    { id: 'all', label: '전체 점검표' },
    { id: 'pre-departure', label: '1. 사전 준비' },
    { id: 'airport', label: '2. 공항 및 탑승' },
    { id: 'bus', label: '3. 차량 이동' },
    { id: 'activity', label: '4. 관람 및 활동' },
    { id: 'hotel', label: '5. 숙소 및 야간' }
  ];

  const filteredItems = activeCategory === 'all'
    ? checklists
    : checklists.filter(c => c.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-teal-100 text-teal-700">
              <CheckSquare className="w-4 h-4" />
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              인솔교사 단계별 안전 점검 체크리스트
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            출발 전부터 귀교 시까지 인솔 단계별 체크 항목을 실시간 확인하고 관리할 수 있습니다.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-semibold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          초기화
        </button>
      </div>

      {/* Progress Card */}
      <div className="bg-gradient-to-r from-teal-500 to-sky-600 rounded-2xl p-5 sm:p-6 text-white shadow-md">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-100">
              전체 인솔 체크 진행률
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {completedCount} <span className="text-sm font-normal text-teal-100">/ {totalCount}개 점검 완료</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-3xl sm:text-4xl font-black font-mono">
              {progressPercent}%
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden mt-3">
          <div 
            className="bg-white h-full rounded-full transition-all duration-300 shadow-sm"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-2">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200 text-xs font-bold shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          항목 추가
        </button>
      </div>

      {/* Add Custom Item Modal / Inline Box */}
      {isAdding && (
        <form onSubmit={handleAddCustom} className="bg-teal-50/70 border border-teal-200 rounded-xl p-4 flex gap-2">
          <input
            type="text"
            placeholder="새로운 인솔 확인 항목 입력 (예: 2반 학생 약 복용 확인)"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="flex-1 px-3 py-2 text-xs bg-white rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            autoFocus
          />
          <button
            type="submit"
            className="px-4 py-2 bg-teal-600 text-white text-xs font-bold rounded-lg hover:bg-teal-700 transition-colors shrink-0"
          >
            추가
          </button>
          <button
            type="button"
            onClick={() => setIsAdding(false)}
            className="px-3 py-2 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-colors shrink-0"
          >
            취소
          </button>
        </form>
      )}

      {/* Checklist items list */}
      <div className="space-y-2.5">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => toggleCheck(item.id)}
            className={`cursor-pointer rounded-xl border p-3.5 sm:p-4 flex items-start gap-3 transition-all ${
              item.checked
                ? 'bg-slate-50 border-slate-200 text-slate-400'
                : 'bg-white border-slate-200 hover:border-teal-300 text-slate-800 shadow-2xs'
            }`}
          >
            <div className="mt-0.5 shrink-0">
              {item.checked ? (
                <div className="w-5 h-5 rounded-md bg-teal-600 text-white flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-md border-2 border-slate-300 hover:border-teal-500" />
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`text-sm font-bold ${
                  item.checked ? 'line-through text-slate-400' : 'text-slate-900'
                }`}>
                  {item.title}
                </span>
                {item.required && (
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-rose-100 text-rose-700 border border-rose-200">
                    필수
                  </span>
                )}
              </div>
              <p className={`text-xs ${
                item.checked ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
