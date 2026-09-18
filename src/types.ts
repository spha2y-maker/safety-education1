export type TabKey = 
  | 'overview' 
  | 'itinerary' 
  | 'china-guide' 
  | 'telecom-apps' 
  | 'safety-manual' 
  | 'emergency' 
  | 'checklist' 
  | 'places-editor';

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  location: string;
  transport?: string;
  description: string;
  safetyCheck: string;
  keyPoints: string[];
  photoKey?: string;
}

export interface DayPlan {
  dayNumber: number;
  date: string;
  dayOfWeek: string;
  route: string;
  hotel: string;
  meals: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
  highlights: string[];
  items: ScheduleItem[];
  dailyNotice: string;
}

export interface PlaceItem {
  id: string;
  category: 'historic' | 'culture' | 'theme' | 'restaurant';
  name: string;
  chineseName?: string;
  day: number;
  description: string;
  safetyPoints: string[];
  imageUrl: string;
  userNotes?: string;
  isCustomUploaded?: boolean;
}

export interface ChecklistItem {
  id: string;
  category: 'pre-departure' | 'airport' | 'bus' | 'activity' | 'hotel' | 'health';
  title: string;
  detail: string;
  required: boolean;
  checked: boolean;
}

export interface AppGuideItem {
  name: string;
  category: 'payment' | 'map' | 'comm' | 'translation' | 'safety';
  iconName: string;
  description: string;
  installationTip: string;
  chinaUsageTip: string;
  priority: 'must' | 'recommended' | 'optional';
}

export interface EmergencyContact {
  role: string;
  name: string;
  contact: string;
  hours: string;
  note: string;
  type: 'embassy' | 'local' | 'school' | 'agency';
}
