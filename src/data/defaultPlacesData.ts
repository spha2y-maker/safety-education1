import { PlaceItem } from '../types';

export const defaultPlaces: PlaceItem[] = [
  {
    id: 'place-luxun',
    category: 'historic',
    name: '루쉰공원 (매헌 윤봉길 의사 기념관)',
    chineseName: '鲁迅公园 · 梅轩尹奉吉纪念馆',
    day: 2,
    description: '1932년 4월 29일 윤봉길 의사가 일제 군관들을 향해 도시락 폭탄을 던진 역사의 현장. 공원 내 정자(매정)와 기념관이 위치함.',
    safetyPoints: [
      '호수 주변 수심이 깊으므로 난간에 기대거나 장난치지 않도록 주의',
      '엄숙한 추모 공간이므로 모자 탈모, 정숙 유지 및 단체 묵념 진행',
      '공원 내 일반 시민(산책, 태극권)과의 동선 충돌 주의'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80',
    userNotes: '사전 답사 시 확인: 매헌기념관 2층 전시실 계단이 다소 좁으므로 반별 순차 입장 필요.'
  },
  {
    id: 'place-provisional-gov',
    category: 'historic',
    name: '대한민국 임시정부 상하이 청사',
    chineseName: '大韩民国临时政府旧址',
    day: 2,
    description: '1926년부터 1932년까지 백범 김구 선생 등 독립운동가들이 활동한 3층 벽돌조 건물. 집무실, 회의실, 요인 숙소가 복원됨.',
    safetyPoints: [
      '내부 목조 계단 경사가 매우 급하므로 난간을 잡고 한 줄로 천천히 이동',
      '전시실 내 플래시 촬영 및 비인가 영상 촬영 엄격 제한',
      '주변이 실제 중국 주민 거주지역(스쿠먼 양식 골목)이므로 고성방가 금지'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1000&q=80',
    userNotes: '사전 답사 시 확인: 좁은 골목길에 외부 관광객이 많으므로 진입 전 골목 입구에서 인원 재점검 필수.'
  },
  {
    id: 'place-oriental-pearl',
    category: 'culture',
    name: '동방명주 타워 & 도시계획전시관',
    chineseName: '东方明珠广播电视塔 · 城市历史发展陈列馆',
    day: 2,
    description: '높이 468m의 상하이 랜드마크. 263m 주전망대와 259m 투명 유리바닥 스카이워크에서 상하이 전경 감상 및 지하 역사관 관람.',
    safetyPoints: [
      '투명 유리 바닥 전망대에서 장난, 뛰기, 신발 벗기 금지 (고소공포증 학생 특별 인솔)',
      '초고속 엘리베이터 승하차 시 이명 발생 주의(침 삼키기 안내)',
      '관람객 밀집도가 매우 높아 에스컬레이터 이용 시 앞사람과 거리 유지'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&w=1000&q=80',
    userNotes: '사전 답사 시 확인: 전망대 하행 엘리베이터 대기줄이 30분 이상 소요될 수 있으므로 집결 시간 여유 배분.'
  },
  {
    id: 'place-yuyuan',
    category: 'culture',
    name: '예원(豫園) 및 예원 옛거리 야경',
    chineseName: '豫园 · 豫园老街',
    day: 2,
    description: '명나라 관료 반윤단이 부모를 위해 조성한 남방 최고의 고전 정원. 연못과 구곡교, 명·청대 건축 양식의 전통 상점가가 밀집.',
    safetyPoints: [
      '미로 형태의 좁은 골목길로 인해 일행을 잃기 가장 쉬운 장소 (조별 5인 1조 이동 철저)',
      '소매치기 주의(백팩은 앞으로 메기 지도)',
      '연못(구곡교) 주변 난간 추락 주의'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80',
    userNotes: '사전 답사 시 확인: 야간 조명 점등 후 인파가 급증함. 약속 집결지는 구곡교 앞이 아닌 대로변 버스 승차장 부근으로 지정.'
  },
  {
    id: 'place-disney',
    category: 'theme',
    name: '상하이 디즈니랜드 (Shanghai Disney Resort)',
    chineseName: '上海迪士尼度假区',
    day: 3,
    description: '아시아 최대 규모의 디즈니 테마파크. 트론 라이트사이클, 캐리비안의 해적, 소어링 등 최첨단 어트랙션과 야간 캐슬 일루미네이션 쇼.',
    safetyPoints: [
      '광활한 부지(조별 단독행동 엄금, 4~5인 1조 상시 유지)',
      '디즈니 내 교사 상황실(지정 거점) 상시 교사 2인 대기',
      '오후 15:00 및 18:00 중간 점호 실시(모바일 메신저 사진 인증)',
      '야간 불꽃놀이 종료 직후 인파 밀림 사고 방지: 뛰지 말고 외곽 이동'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
    userNotes: '사전 답사 시 확인: 외부 음식물 반입 규정 엄격. 미개봉 스낵/물만 허용. 식사는 사전 배부된 밀쿠폰으로 원활히 이용 가능.'
  },
  {
    id: 'place-science',
    category: 'culture',
    name: '상하이 과학기술관',
    chineseName: '上海科技馆',
    day: 3,
    description: '자연사, 생물 다양성, 인공지능, 우주과학, 정보기술 등 11개 상설 전시관과 과학 체험 시설을 갖춘 초대형 종합 과학관.',
    safetyPoints: [
      '체험형 작동 기구 무리한 조작 금지',
      '실내 이동 시 복도 및 계단에서 뛰지 않기',
      '관람 종료 15분 전 로비 대형 지구본 조형물 앞 집결'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    userNotes: '사전 답사 시 확인: 층별 공간이 방대하므로 조별 탐구 학습지 배부하여 의미 있는 체험 유도.'
  },
  {
    id: 'place-nanjing-waitan',
    category: 'culture',
    name: '남경로 보행가 & 외탄(와이탄) 황푸강변',
    chineseName: '南京路步行街 · 外滩',
    day: 1,
    description: '상하이의 역사와 현대가 공존하는 대표 번화가. 19세기 유럽풍 고풍스러운 석조 건축물군과 푸동 마천루 스카이라인이 마주 보는 곳.',
    safetyPoints: [
      '황푸강변 산책로 난간 위로 올라가거나 앉는 행위 절대 금지',
      '보행가 미니 관광열차 통행 시 길 터주기',
      '야간 이동 시 인솔교사 선두·후미 야광 깃발 운영'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&q=80',
    userNotes: '사전 답사 시 확인: 바람이 강하게 불 수 있으므로 방풍 외투 착용 필수.'
  },
  {
    id: 'place-circus',
    category: 'culture',
    name: '상하이 마시청 서커스 (ERA 교차로의 시공)',
    chineseName: '上海马戏城 · ERA时空之旅',
    day: 1,
    description: '중국 전통 기예와 서양의 멀티미디어 무대 연출이 결합된 세계 최고 수준의 서커스 공연. 대형 원형 구체 속 오토바이 쇼 등.',
    safetyPoints: [
      '공연 중 암전 시 이동 자제 및 플래시 촬영 금지',
      '공연장 입장 및 퇴장 시 계단 조심',
      '공연 중 소지품 바닥 낙하 주의'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    userNotes: '사전 답사 시 확인: 지정 좌석제로 운영되므로 반별 좌석 배치 사전 숙지.'
  },
  {
    id: 'rest-renaissance',
    category: 'restaurant',
    name: '르네상스 호텔 샤브샤브 (1일차 석식)',
    chineseName: '万丽酒店 涮涮锅',
    day: 1,
    description: '특급 호텔 내 위생적인 개별 인덕션 또는 테이블 샤브샤브 뷔페. 신선한 채소와 육류 제공.',
    safetyPoints: [
      '뜨거운 냄비와 육수에 손이 닿지 않도록 화상 주의 지도',
      '덜 익은 고기 및 해산물 섭취 엄금(완전 가열 섭취로 식중독 예방)',
      '해산물/갑각류 알레르기 학생은 소고기/야채 단독 탕 분리'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    userNotes: '사전 답사 시 확인: 개인별 집게와 젓가락이 분리 제공되어 위생 우수.'
  },
  {
    id: 'rest-geummiro',
    category: 'restaurant',
    name: '금미로 식당 (2일차 중식)',
    chineseName: '金美路 中餐馆',
    day: 2,
    description: '중국 현지 둥베이/강남 요리를 한국 학생들의 입맛에 맞춰 순화한 현지식 정식.',
    safetyPoints: [
      '기름진 볶음 요리 과식으로 인한 소화불량 주의',
      '음식 제공 전 식수(밀봉 생수) 외 수돗물 마시지 않기',
      '땅콩 기름 사용 여부 알레르기 학생 사전 확인'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1000&q=80',
    userNotes: '사전 답사 시 확인: 꿔바로우, 볶음밥 등 학생 선호도 높은 메뉴로 구성됨.'
  },
  {
    id: 'rest-haenyeo',
    category: 'restaurant',
    name: '해녀제주식당 (2일차 석식)',
    chineseName: '海女济州韩餐厅',
    day: 2,
    description: '상하이 한인타운 인근의 정통 한식당. 김치찌개, 불고기, 계란찜 등 집밥 스타일의 식사로 여행 피로 해소.',
    safetyPoints: [
      '위생적인 수저 관리 및 식사 전 손 세정 필수',
      '뜨거운 찌개류 섭취 시 입 데임 주의'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=1000&q=80',
    userNotes: '사전 답사 시 확인: 밑반찬 리필 원활하며 학생 만족도 매우 높음.'
  },
  {
    id: 'rest-harang',
    category: 'restaurant',
    name: '하랑 한식당 (3일차 중식)',
    chineseName: '荷浪 韩国料理',
    day: 3,
    description: '디즈니랜드 이동 전 든든한 정식(제육볶음, 된장찌개 등)을 제공하는 한식당.',
    safetyPoints: [
      '디즈니랜드 장시간 도보 활동 전 영양가 있는 균형 잡힌 식사 지도',
      '식사 후 차량 탑승 전 화장실 다녀오기 지도'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1000&q=80',
    userNotes: '사전 답사 시 확인: 식당 내부가 넓어 단체 학생 전원 동시 착석 가능.'
  },
  {
    id: 'hotel-wisdom',
    category: 'culture',
    name: '상하이 위즈덤 로즈 호텔 (전 일정 숙소)',
    chineseName: '上海智选假日酒店 · 玫瑰智慧酒店 (Wisdom Rose Hotel)',
    day: 1,
    description: '전 일정(3박) 투숙하는 4성급 호텔. 쾌적한 객실 환경과 단체 조식 뷔페, 편리한 교통 접근성.',
    safetyPoints: [
      '체크인 시 객실 카드키 분실 주의 (분실 시 즉시 인솔교사 보고)',
      '야간 무단 외출 금지 및 층별 교사 복도 순찰',
      '수돗물 직음 금지, 호텔 객실 내 무료 생수(2병/일) 이용'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    userNotes: '사전 답사 시 확인: 로비에 24시간 보안 인력이 상주하며, 인솔교사용 본부 방을 엘리베이터 인근에 배치함.'
  }
];
