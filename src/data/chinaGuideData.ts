import { AppGuideItem, EmergencyContact } from '../types';

export interface ChinaRule {
  id: string;
  category: string;
  title: string;
  summary: string;
  details: string[];
  alertLevel: 'danger' | 'warning' | 'info';
}

export const chinaRulesData: ChinaRule[] = [
  {
    id: 'rule-espionage',
    category: '법률 및 안보',
    title: '중국 반간첩법(반스파이법) 및 사진 촬영 엄금 구역',
    summary: '군사 시설, 관공서, 시위 현장, 공항 검색대 등 보안 시설 사진·영상 촬영 시 공안 조사 및 처벌 위험',
    details: [
      '촬영 금지 장소: 군사기지 주변, 정부 청사(공안국, 청사 등), 항만 보안시설, 공항 보안검색대, 영사관 주변 경비 초소.',
      '지도 제작 및 무단 측량 행위 금지: GPS 기반 비인가 측량이나 드론(무인기) 비행은 사전 허가 없이 절대 불가합니다.',
      '시위나 소요 사태 구경 및 촬영 금지: 길거리 집회나 단속 현장을 호기심에 스마트폰으로 촬영하거나 SNS에 게시하지 않도록 지도.',
      '중국 공안의 소지품·스마트폰 불시 검사 시 불응하거나 항의하지 말고 정중하고 침착하게 응대합니다.'
    ],
    alertLevel: 'danger'
  },
  {
    id: 'rule-id-passport',
    category: '출입국 및 신분증',
    title: '여권(신분증) 상시 소지 및 실명 확인제',
    summary: '중국은 모든 주요 시설 입장 및 숙박 시 실명제(여권 대조) 적용, 여권 원본 분실에 각별히 유의',
    details: [
      '관광지 입장 시 여권 필수: 대한민국 임시정부, 동방명주, 디즈니랜드, 기차역 등 모든 곳에서 여권 실물 검사를 진행합니다.',
      '여권 분실 방지 대책: 학생들에게 목걸이형 방수 여권 케이스 또는 지퍼 안주머니 보관을 지시하고 꺼낼 때 반드시 교사 확인 후 보관.',
      '비상용 사본 지참: 담임교사는 전 학생의 여권 사본(종이 출력본) 및 여권용 컬러 사진 2매, 여권 정보 PDF 파일을 별도 보관합니다.',
      '공안 불시 신분증 제시 요구 시 당황하지 않고 여권을 제시하며 인솔교사가 즉시 개입합니다.'
    ],
    alertLevel: 'danger'
  },
  {
    id: 'rule-payment',
    category: '결제 및 금융',
    title: '중국 모바일 간편결제(알리페이/위챗) 및 현금 에티켓',
    summary: '현금(위안화)은 거스름돈 부족으로 거절되는 경우가 많으므로 모바일 페이(Alipay) 사전 등록 권장',
    details: [
      '알리페이(Alipay) 해외 카드 연동: 출국 전 한국 신용/체크카드(트래블로그, 트래블월렛, VISA/Master)를 알리페이 앱에 사전 등록 완료.',
      '현금(지폐) 지참: 모바일 통신 장애나 배터리 방전에 대비해 100~200위안 상당의 소액 현금(10, 20, 50위안권)을 분산 소지.',
      '위조지폐 주의: 길거리 비공식 환전상 이용 금지, 거스름돈으로 받은 지폐는 훼손 여부 확인.',
      '학생 과소비 예방: 하루 용돈 한도를 정해두고 무분별한 기념품 구매를 제한하도록 지도.'
    ],
    alertLevel: 'warning'
  },
  {
    id: 'rule-hygiene-water',
    category: '위생 및 보건',
    title: '수돗물 음용 절대 금지 및 길거리 음식 위생',
    summary: '중국 수돗물은 석회질 함량이 높아 직음 불가, 반드시 밀봉 생수나 끓인 물만 음용',
    details: [
      '수돗물 직음 엄금: 양치질 후 헹굼도 가급적 생수 사용을 권장하며, 호텔 전기포트 사용 전 세척 확인.',
      '검증된 생수 브랜드 이용: 농푸산천(农夫山泉), 왓슨스(Watsons), 네슬레 등 편의점에서 구매한 정품 밀봉 생수만 마실 것.',
      '길거리 비위생 날음식/꼬치류 섭취 금지: 장염 및 집단 식중독 예방을 위해 길거리 노점 음식 섭취를 엄격히 통제.',
      '식사 전 손 세정제 필수: 버스 탑승 시 및 식당 입장 전 손 소독제 살포 지도.'
    ],
    alertLevel: 'danger'
  },
  {
    id: 'rule-manners',
    category: '문화 및 에티켓',
    title: '문화적 차이 이해 및 공공장소 질서 에티켓',
    summary: '역사 유적지에서의 경건한 태도 유지 및 다중밀집 장소 국가 이미지 훼손 방지',
    details: [
      '역사 기념관 엄숙 태도: 루쉰공원(매헌기념관) 및 대한민국 임시정부 청사에서는 장난, 웃음, 큰 소리 대화를 엄금하고 경건한 자세 유지.',
      '공공장소 질서: 지하철, 식당, 공항 등에서 큰 소리로 부르거나 무리 지어 통로를 막는 행위 금지.',
      '화장실 이용 문화: 중국 공공 화장실 중 문이 없거나 화장지가 구비되지 않은 곳이 있으므로 개인 휴대용 물티슈·화장지 상시 소지 지도.',
      '사진 촬영 매너: 현지 주민의 얼굴을 동의 없이 근접 촬영하거나 비하하는 행위 금지.'
    ],
    alertLevel: 'info'
  }
];

export const appGuideData: AppGuideItem[] = [
  {
    name: 'Alipay (알리페이 / 支付宝)',
    category: 'payment',
    iconName: 'CreditCard',
    description: '중국 전역 99% 상점, 편의점, 자판기, 디즈니랜드에서 통용되는 필수 모바일 간편결제 앱',
    installationTip: '한국에서 출국 전 앱 설치 ➔ 여권 실명 인증 ➔ 한국 해외결제 카드(트래블로그/비자/마스터) 등록 완료 필수!',
    chinaUsageTip: '결제 시 "Pay" QR을 상인에게 보여주거나, 테이블 QR을 스캔(Scan)하여 금액 입력 후 비밀번호 6자리 입력.',
    priority: 'must'
  },
  {
    name: '고덕지도 (Amap / 高德地图)',
    category: 'map',
    iconName: 'MapPin',
    description: '구글 지도가 작동하지 않거나 오차가 큰 중국에서 가장 정밀한 1위 실시간 내비게이션 & 지도 앱',
    installationTip: '중국 방문 전 앱스토어에서 "Amap" 또는 "高德地图" 검색하여 다운로드 (한국어 인터페이스 지원 부분 적용)',
    chinaUsageTip: '호텔 한자 이름(위즈덤 로즈 호텔)과 주요 방문지(매헌기념관, 임시정부 등)를 즐겨찾기 해두면 미아 발생 시 즉시 위치 추적 가능.',
    priority: 'must'
  },
  {
    name: '외교부 해외안전여행 앱',
    category: 'safety',
    iconName: 'ShieldAlert',
    description: '대한민국 외교부 공식 긴급대응 앱: 위기상황 대처 매뉴얼, 영사콜센터 24시간 원클릭 통화 지원',
    installationTip: '모든 인솔교사 및 학생 스마트폰에 필수 설치. "나의 여행 등록" 기능으로 상하이 체류 등록.',
    chinaUsageTip: '위급 상황 시 앱 내 버튼 하나로 24시간 영사콜센터 무료 연결 및 위치 전송 가능.',
    priority: 'must'
  },
  {
    name: '네이버 파파고 (Papago) / 바이두 번역',
    category: 'translation',
    iconName: 'Languages',
    description: '한국어 ↔ 중국어(간체) 음성 번역, 대화 모드, 카메라 사진 실시간 문자 번역',
    installationTip: '출국 전 파파고 앱 설정에서 [오프라인 번역 파일] -> [중국어] 패키지를 미리 다운로드할 것!',
    chinaUsageTip: '식당 메뉴판 한자 촬영 번역, 학생 알레르기 성분 확인, 현지인(안내원, 호텔 직원)과 실시간 대화 모드 활용.',
    priority: 'must'
  },
  {
    name: 'WeChat (위챗 / 微信)',
    category: 'comm',
    iconName: 'MessageSquare',
    description: '중국 14억 인구 메신저. 현지 가이드 및 기사와의 긴급 실시간 연락, 미니프로그램 서비스 연동',
    installationTip: '가입 시 기존 위챗 사용자의 친구 인증이 필요할 수 있으므로 여행사 가이드와 사전 연동 확인.',
    chinaUsageTip: '현지 전용차량 기사 및 호텔 프런트와의 비상 연락 채널로 활용.',
    priority: 'recommended'
  },
  {
    name: '메트로맨 (MetroMan 상하이 지하철)',
    category: 'map',
    iconName: 'Navigation',
    description: '상하이 전 지하철 노선도 한국어 지원, 환승 정보 및 첫차/막차 시간 오프라인 조회 가능',
    installationTip: '출국 전 앱 다운로드 후 [상하이(Shanghai)] 도시 데이터 다운로드.',
    chinaUsageTip: '비상 집결 및 인근 지하철역 확인 시 유용 (오프라인에서도 노선도 확인 가능).',
    priority: 'recommended'
  }
];

export const telecomGuide = {
  comparison: [
    {
      title: '국내 통신사 데이터 로밍 (SKT/KT/LGU+) or 한국 로밍 eSIM',
      tag: '가장 권장 (강력 추천)',
      bgColor: 'bg-emerald-50 border-emerald-300',
      accentColor: 'text-emerald-700',
      advantages: [
        'VPN 앱 없이도 카카오톡(메시지·보이스톡), 네이버, 유튜브, 인스타그램 정상 접속 가능',
        '한국 통신사 IP 게이트웨이를 경유하므로 중국 만리방화벽(GFW) 차단을 받지 않음',
        '한국 번호 수신 가능으로 학부모 비상 전화 즉시 연결'
      ],
      caution: '데이터 하루 허용량 소진 후 속도 제한(QoS)이 걸릴 수 있으므로 학생들에게 불필요한 동영상 시청 자제 지도.'
    },
    {
      title: '중국 현지 유심(SIM) 또는 호텔/공공 Wi-Fi',
      tag: '주의 필요 (사전 대비 필수)',
      bgColor: 'bg-amber-50 border-amber-300',
      accentColor: 'text-amber-700',
      advantages: [
        '현지 데이터 통신 속도가 빠르고 저렴'
      ],
      caution: '중국 만리방화벽에 의해 카카오톡 사진 전송, 네이버 카페/블로그, 구글, 유튜브 전면 차단됨! 중국 현지에서는 VPN 다운로드가 차단되므로 반드시 한국 출국 전 유료/검증된 VPN 앱을 설치해야 함.'
    }
  ],
  vpnNotice: [
    '중국 도착 후에는 구글 플레이스토어나 애플 앱스토어에서 VPN 앱 다운로드 및 결제가 차단됩니다.',
    '만약 현지 유심이나 Wi-Fi를 사용할 인솔교사가 있다면 한국에서 사전 검증된 VPN(ExpressVPN, NordVPN 등)을 결제 및 테스트해 두어야 합니다.',
    '학생들에게는 학부모와의 상시 연락을 위해 "한국 통신사 로밍 요금제" 가입을 적극 권장합니다.'
  ]
};

export const emergencyContacts: EmergencyContact[] = [
  {
    role: '주상하이 대한민국 총영사관 (24시 비상당직)',
    name: '사건사고 전용 핫라인',
    contact: '+86-138-1650-1722',
    hours: '24시간 연중무휴',
    note: '중국 현지 휴대폰 발신: 138-1650-1722 / 한국 폰 로밍 발신: +86-138-1650-1722',
    type: 'embassy'
  },
  {
    role: '주상하이 대한민국 총영사관 (대표)',
    name: '주상하이 공관 대표전화',
    contact: '+86-21-6295-5000',
    hours: '평일 09:00 ~ 17:30',
    note: '상하이시 창닝구 만산로 60호 (上海市长宁区万山路60号)',
    type: 'embassy'
  },
  {
    role: '외교부 영사콜센터 (서울 본부)',
    name: '24시간 영사민원 상담',
    contact: '+82-2-3210-0404 (무료 +800-2100-0404)',
    hours: '24시간 연중무휴',
    note: '해외 사건사고 접수, 신속해외송금지원제도 신청, 통역 연계',
    type: 'embassy'
  },
  {
    role: '중국 현지 비상 전화: 경찰(공안)',
    name: '중국 공안 신고',
    contact: '110',
    hours: '24시간',
    note: '사건사고, 도난, 미아, 폭력 사건 발생 시',
    type: 'local'
  },
  {
    role: '중국 현지 비상 전화: 구급차(앰뷸런스)',
    name: '응급의료구급센터',
    contact: '120',
    hours: '24시간',
    note: '급성 환자, 심정지, 골절, 교통사고 부상자 이송',
    type: 'local'
  },
  {
    role: '중국 현지 비상 전화: 소방서',
    name: '화재 및 인명 구조',
    contact: '119',
    hours: '24시간',
    note: '화재 발생, 건물 고립, 특수 재난',
    type: 'local'
  },
  {
    role: '교통사고 전용 신고',
    name: '중국 교통경찰',
    contact: '122',
    hours: '24시간',
    note: '전용버스 추돌, 접촉 사고 시 공식 사고확인원 접수',
    type: 'local'
  },
  {
    role: '현지 전담 여행사 비상본부',
    name: '전담 여행사 상황실 & 수석 가이드',
    contact: '010-XXXX-XXXX (가이드 현지폰 등록)',
    hours: '24시간 현장 대기',
    note: '전용차량 배차, 식당 변경, 긴급 현지 병원 동행 지원',
    type: 'agency'
  },
  {
    role: '담양 교육지원청 및 소속 학교 상황실',
    name: '비상연락망 책임관',
    contact: '학교 교무실 / 담당 장학사 연락처',
    hours: '08:30 ~ 22:00 (야간 당직 연계)',
    note: '매일 아침/저녁 정기 현황 보고 및 학부모 비상 상황 공지 총괄',
    type: 'school'
  }
];
