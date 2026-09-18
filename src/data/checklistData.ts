import { ChecklistItem } from '../types';

export const initialChecklists: ChecklistItem[] = [
  // 1. 사전 준비 단계
  {
    id: 'chk-pre-1',
    category: 'pre-departure',
    title: '전 학생 여권 유효기간 확인 (6개월 이상)',
    detail: '여권 훼손(낙서, 페이지 찢김, 물에 젖음) 여부 점검 및 서명란 본인 자필 서명 확인',
    required: true,
    checked: false
  },
  {
    id: 'chk-pre-2',
    category: 'pre-departure',
    title: '여권 사본 및 비상 증명사진(2매) 취합',
    detail: '현지 여권 분실 시 영사관 긴급 발급 대비 전 학생 사본 파일 및 실물 사진 보관',
    required: true,
    checked: false
  },
  {
    id: 'chk-pre-3',
    category: 'pre-departure',
    title: '학생 건강 설문조사 및 특이 체질/지병 파악',
    detail: '알레르기(땅콩, 갑각류 등), 천식, 비염, 복용약물, 멀미 심한 학생 리스트 작성 및 공유',
    required: true,
    checked: false
  },
  {
    id: 'chk-pre-4',
    category: 'pre-departure',
    title: '중국 필수 앱(알리페이, 외교부 안전여행, 지도) 설치 확인',
    detail: '학부모 동의 하에 결제 카드 연동 및 외교부 앱 "해외안전여행등록" 완료',
    required: true,
    checked: false
  },
  {
    id: 'chk-pre-5',
    category: 'pre-departure',
    title: '학교 구급의약품 보따리 및 체온계, 자가진단키트 구비',
    detail: '해열진통제, 지사제, 소화제, 멸균드레싱, 탄력붕대, 멀미약, 모기기피제 등',
    required: true,
    checked: false
  },

  // 2. 공항 및 항공 탑승
  {
    id: 'chk-air-1',
    category: 'airport',
    title: '보조배터리 기내반입 원칙 안내 및 위탁 수하물 검사',
    detail: '100Wh 이하 규정, 단락방지(파우치 또는 테이핑), 위탁 캐리어에 넣지 않도록 2중 확인',
    required: true,
    checked: false
  },
  {
    id: 'chk-air-2',
    category: 'airport',
    title: '인천공항 제2여객터미널 단체 탑승권 배부 및 인원 점검',
    detail: '반별 인원 100% 집결 확인 후 탑승권 배부, 영문 성명 철자 여권과 일치 확인',
    required: true,
    checked: false
  },
  {
    id: 'chk-air-3',
    category: 'airport',
    title: '보안검색 및 출국심사 후 탑승구 30분 전 집결',
    detail: '면세구역 개별 이탈 엄금, 탑승구(Gate) 변경 가능성 상시 확인',
    required: true,
    checked: false
  },
  {
    id: 'chk-air-4',
    category: 'airport',
    title: '푸동공항 착륙 직후 여권 소지 전원 확인',
    detail: '비행기 좌석 주머니나 선반에 여권을 두고 내리지 않았는지 하차 전 담임교사 육안 확인',
    required: true,
    checked: false
  },

  // 3. 차량 및 이동 간
  {
    id: 'chk-bus-1',
    category: 'bus',
    title: '출발 전 전 좌석 안전벨트 착용 확인',
    detail: '교사가 직접 통로를 걸어가며 전 학생 안전벨트 체결 육안 확인 후 기사에게 출발 신호',
    required: true,
    checked: false
  },
  {
    id: 'chk-bus-2',
    category: 'bus',
    title: '전용버스 운전자 안전운전 모니터링 (사제동행)',
    detail: '인솔교사 1인이 운전석 바로 뒤에 탑승하여 졸음, 과속, 신호위반, 휴대폰 사용 감시',
    required: true,
    checked: false
  },
  {
    id: 'chk-bus-3',
    category: 'bus',
    title: '승하차 시 교사 선도 하차 및 인원 2중 카운트',
    detail: '하차 시 교사가 먼저 내려 안전 확인, 승차 시 반장 1차 확인 + 담임교사 최종 카운트',
    required: true,
    checked: false
  },
  {
    id: 'chk-bus-4',
    category: 'bus',
    title: '차내 비상탈출 망치 및 소화기 위치 안내',
    detail: '창문 모서리 타격 요령 및 소화기 사용법 학생들에게 환기',
    required: false,
    checked: false
  },

  // 4. 관람지 및 활동 시
  {
    id: 'chk-act-1',
    category: 'activity',
    title: '조별 4~5인 1조 편성 및 절대 개인행동 금지',
    detail: '조장 중심 이동 지도 및 인솔교사 순찰 구역 지정',
    required: true,
    checked: false
  },
  {
    id: 'chk-act-2',
    category: 'activity',
    title: '약속 집결 시간 및 랜드마크 비상 만남 장소 공지',
    detail: '미아 발생 시 약속된 장소에서 대기하도록 하고 교사 전화번호 주지',
    required: true,
    checked: false
  },
  {
    id: 'chk-act-3',
    category: 'activity',
    title: '중국 반간첩법 관련 보안구역 촬영 금지 환기',
    detail: '군사기지, 공안 관공서, 보안검색대 등 사진/영상 촬영 절대 금지 지도',
    required: true,
    checked: false
  },
  {
    id: 'chk-act-4',
    category: 'activity',
    title: '역사 유적지(매헌기념관, 임시정부) 경건한 태도 지도',
    detail: '장난, 고성방가, 유물 훼손 절대 금지 및 묵념·헌화 예절 지도',
    required: true,
    checked: false
  },

  // 5. 숙소 및 야간 관리
  {
    id: 'chk-hotel-1',
    category: 'hotel',
    title: '호텔 방 배정 및 피난 대피로/비상구 확인',
    detail: '객실 출입문 비상구 안내도 위치 학생들과 함께 확인',
    required: true,
    checked: false
  },
  {
    id: 'chk-hotel-2',
    category: 'hotel',
    title: '야간 무단 외출 통제 및 교사 로비/복도 당직',
    detail: '일과 후 개별 외출 전면 통제, 층별 복도 순찰 교사 배치',
    required: true,
    checked: false
  },
  {
    id: 'chk-hotel-3',
    category: 'hotel',
    title: '객실 점호 시 학생 건강(체온, 복통) 및 특이사항 체크',
    detail: '수돗물 음용 금지(생수 제공), 취침 시간(22:30) 준수 및 숙면 지도',
    required: true,
    checked: false
  },
  {
    id: 'chk-hotel-4',
    category: 'hotel',
    title: '체크아웃 시 유실물(여권, 스마트폰, 충전기) 제로 확인',
    detail: '방별 침대 밑, 옷장, 욕실 등 교사 최종 순회 점검',
    required: true,
    checked: false
  }
];
