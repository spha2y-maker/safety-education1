import React, { useState, useEffect, useRef } from 'react';
import { 
  Camera, 
  Upload, 
  Edit3, 
  Save, 
  Trash2, 
  Plus, 
  RotateCcw, 
  Image as ImageIcon, 
  MapPin, 
  Utensils, 
  ShieldAlert, 
  Check, 
  X,
  FileText
} from 'lucide-react';
import { PlaceItem } from '../types';
import { defaultPlaces } from '../data/defaultPlacesData';

export const PlacePhotoEditor: React.FC = () => {
  const [places, setPlaces] = useState<PlaceItem[]>(() => {
    const saved = localStorage.getItem('damyang_shanghai_places');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultPlaces;
      }
    }
    return defaultPlaces;
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<PlaceItem>>({});
  const [isAddingNew, setIsAddingNew] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadTargetId, setUploadTargetId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('damyang_shanghai_places', JSON.stringify(places));
  }, [places]);

  const handleStartEdit = (place: PlaceItem) => {
    setEditingId(place.id);
    setEditForm({ ...place });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleSaveEdit = () => {
    if (!editingId) return;
    setPlaces(prev => prev.map(p => (p.id === editingId ? { ...p, ...editForm } as PlaceItem : p)));
    setEditingId(null);
    setEditForm({});
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, targetId: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size < 5MB
    if (file.size > 5 * 1024 * 1024) {
      alert('이미지 파일 크기는 5MB 이하만 업로드 가능합니다.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const result = uploadEvent.target?.result as string;
      if (result) {
        setPlaces(prev => prev.map(p => p.id === targetId ? { ...p, imageUrl: result, isCustomUploaded: true } : p));
        if (editingId === targetId) {
          setEditForm(prev => ({ ...prev, imageUrl: result, isCustomUploaded: true }));
        }
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const triggerUploadFor = (id: string) => {
    setUploadTargetId(id);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleResetToDefault = () => {
    if (window.confirm('모든 방문지 및 식당 사진/메모를 초기 답사 기본 데이터로 되돌리시겠습니까?')) {
      setPlaces(defaultPlaces);
      localStorage.removeItem('damyang_shanghai_places');
    }
  };

  const handleAddNewPlace = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editForm.name) return;

    const newPlace: PlaceItem = {
      id: `place-custom-${Date.now()}`,
      category: (editForm.category as any) || 'restaurant',
      name: editForm.name || '신규 방문지 / 식당',
      chineseName: editForm.chineseName || '',
      day: Number(editForm.day) || 1,
      description: editForm.description || '현장 사전 답사 추가 장소',
      safetyPoints: editForm.safetyPoints || ['현장 안전 질서 유지'],
      imageUrl: editForm.imageUrl || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
      userNotes: editForm.userNotes || '답사 확인 메모 입력',
      isCustomUploaded: true
    };

    setPlaces(prev => [newPlace, ...prev]);
    setIsAddingNew(false);
    setEditForm({});
  };

  const categories = [
    { id: 'all', label: '전체 (13개소)' },
    { id: 'historic', label: '독립운동 역사 유적' },
    { id: 'culture', label: '문화·상하이 탐방' },
    { id: 'theme', label: '디즈니랜드 테마파크' },
    { id: 'restaurant', label: '식당 (중식/석식)' }
  ];

  const filteredPlaces = activeCategory === 'all'
    ? places
    : places.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Hidden Global File Input */}
      <input 
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={(e) => uploadTargetId && handleFileUpload(e, uploadTargetId)}
      />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-purple-100 text-purple-700">
              <Camera className="w-4 h-4" />
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              주요 방문지 및 식당 사전답사 사진 편집기
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            사전 답사 사진을 직접 업로드하여 교체하고, 방문지별 안전 주의사항 및 교사 메모를 실시간 수정·저장할 수 있습니다.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAddingNew(!isAddingNew)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5" />
            새 방문지/식당 등록
          </button>
          <button
            onClick={handleResetToDefault}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-semibold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            사진 초기화
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 border-b border-slate-200">
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

      {/* Add New Form Modal / Inline Box */}
      {isAddingNew && (
        <form onSubmit={handleAddNewPlace} className="bg-purple-50/80 border border-purple-200 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-purple-950 flex items-center gap-1.5">
              <Plus className="w-4 h-4 text-purple-700" />
              새로운 방문지 또는 식당 추가
            </h4>
            <button
              type="button"
              onClick={() => setIsAddingNew(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">장소명</label>
              <input
                type="text"
                placeholder="예: 예원 옛거리 만두 전문점"
                value={editForm.name || ''}
                onChange={e => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300"
                required
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 block mb-1">중문 한자 명칭</label>
              <input
                type="text"
                placeholder="예: 南翔馒头店"
                value={editForm.chineseName || ''}
                onChange={e => setEditForm(prev => ({ ...prev, chineseName: e.target.value }))}
                className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 block mb-1">구분 및 일정 일차</label>
              <div className="flex gap-2">
                <select
                  value={editForm.category || 'restaurant'}
                  onChange={e => setEditForm(prev => ({ ...prev, category: e.target.value as any }))}
                  className="flex-1 px-2 py-2 bg-white rounded-lg border border-slate-300"
                >
                  <option value="historic">독립운동 유적</option>
                  <option value="culture">문화 탐방</option>
                  <option value="theme">테마파크</option>
                  <option value="restaurant">식당</option>
                </select>
                <select
                  value={editForm.day || 1}
                  onChange={e => setEditForm(prev => ({ ...prev, day: Number(e.target.value) }))}
                  className="w-20 px-2 py-2 bg-white rounded-lg border border-slate-300"
                >
                  <option value={1}>1일차</option>
                  <option value={2}>2일차</option>
                  <option value={3}>3일차</option>
                  <option value={4}>4일차</option>
                </select>
              </div>
            </div>
          </div>

          <div className="text-xs">
            <label className="font-bold text-slate-700 block mb-1">사전 답사 메모 및 인솔 지침</label>
            <textarea
              rows={2}
              placeholder="사전 답사 시 확인한 특이사항이나 학생 안전 지도 메모를 입력하세요."
              value={editForm.userNotes || ''}
              onChange={e => setEditForm(prev => ({ ...prev, userNotes: e.target.value }))}
              className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAddingNew(false)}
              className="px-3 py-1.5 text-xs text-slate-600 bg-white border border-slate-200 rounded-lg"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-2xs"
            >
              저장하기
            </button>
          </div>
        </form>
      )}

      {/* Places Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPlaces.map(place => {
          const isEditing = editingId === place.id;
          const isRestaurant = place.category === 'restaurant';

          return (
            <div 
              key={place.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between hover:border-purple-300 transition-all"
            >
              <div>
                {/* Photo Header Container */}
                <div className="relative h-48 bg-slate-900 group">
                  <img
                    src={isEditing ? (editForm.imageUrl || place.imageUrl) : place.imageUrl}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Badges on photo */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-slate-900 shadow-2xs">
                      {place.day}일차
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md text-white shadow-2xs ${
                      isRestaurant ? 'bg-amber-600' : place.category === 'historic' ? 'bg-rose-600' : 'bg-sky-600'
                    }`}>
                      {isRestaurant ? '식당' : place.category === 'historic' ? '독립유적' : '문화탐방'}
                    </span>
                  </div>

                  {place.isCustomUploaded && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white shadow-2xs">
                        사용자 업로드 사진
                      </span>
                    </div>
                  )}

                  {/* Photo Change Action Overlay */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                    <button
                      onClick={() => triggerUploadFor(place.id)}
                      className="px-2.5 py-1 bg-white/90 hover:bg-white text-slate-900 rounded-lg text-xs font-bold shadow-md flex items-center gap-1 transition-all backdrop-blur-xs"
                      title="내 컴퓨터/스마트폰 사진으로 교체"
                    >
                      <Upload className="w-3.5 h-3.5 text-purple-600" />
                      사진 업로드
                    </button>
                  </div>

                  {/* Name on photo */}
                  <div className="absolute bottom-3 left-3 right-28 pointer-events-none">
                    <h4 className="text-white font-bold text-base drop-shadow-md truncate">
                      {place.name}
                    </h4>
                    {place.chineseName && (
                      <div className="text-white/80 text-xs truncate drop-shadow-xs font-sans">
                        {place.chineseName}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 space-y-3">
                  {isEditing ? (
                    <div className="space-y-2 text-xs">
                      <div>
                        <label className="font-bold text-slate-700 block">장소명</label>
                        <input
                          type="text"
                          value={editForm.name || ''}
                          onChange={e => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-2.5 py-1.5 bg-slate-50 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block">중문 명칭</label>
                        <input
                          type="text"
                          value={editForm.chineseName || ''}
                          onChange={e => setEditForm(prev => ({ ...prev, chineseName: e.target.value }))}
                          className="w-full px-2.5 py-1.5 bg-slate-50 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block">사전 답사 메모</label>
                        <textarea
                          rows={2}
                          value={editForm.userNotes || ''}
                          onChange={e => setEditForm(prev => ({ ...prev, userNotes: e.target.value }))}
                          className="w-full px-2.5 py-1.5 bg-slate-50 border rounded-md"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {place.description}
                      </p>

                      {/* Safety points */}
                      <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/60 text-xs">
                        <div className="font-bold text-amber-900 flex items-center gap-1 mb-1">
                          <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                          현장 안전 포인트
                        </div>
                        <ul className="space-y-0.5 text-amber-950">
                          {place.safetyPoints.map((sp, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                              <span>{sp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* User Notes */}
                      {place.userNotes && (
                        <div className="bg-purple-50/60 p-2.5 rounded-xl border border-purple-200/60 text-xs">
                          <div className="font-bold text-purple-900 flex items-center gap-1 mb-0.5">
                            <FileText className="w-3.5 h-3.5 text-purple-600" />
                            사전 답사 인솔 메모
                          </div>
                          <p className="text-purple-950 leading-snug">{place.userNotes}</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                {isEditing ? (
                  <div className="flex items-center gap-2 w-full justify-end">
                    <button
                      onClick={handleCancelEdit}
                      className="px-2.5 py-1 text-slate-600 hover:bg-slate-200 rounded-md font-semibold"
                    >
                      취소
                    </button>
                    <button
                      onClick={handleSaveEdit}
                      className="px-3 py-1 bg-purple-600 text-white rounded-md font-bold flex items-center gap-1"
                    >
                      <Check className="w-3.5 h-3.5" /> 저장
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="text-[11px] text-slate-400 font-mono">ID: {place.id}</span>
                    <button
                      onClick={() => handleStartEdit(place)}
                      className="text-purple-600 hover:text-purple-700 font-bold flex items-center gap-1"
                    >
                      <Edit3 className="w-3.5 h-3.5" /> 메모·내용 편집
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
