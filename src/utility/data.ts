export const navItems = [
  {
    name: '기술',
    href: '#ceiling',
  },
  {
    name: '개발 경험',
    href: '#develop',
  },
  {
    name: '연구 경험',
    href: '#research',
  },
  {
    name: '학력/논문/연락처',
    href: '#footer',
  },
];

export const skill = [
  {
    name: '기획',
    data: ['Eye-Traking', 'Driving-Simulator', 'SPSS', 'R', 'Python'],
  },
  {
    name: '디자인',
    data: ['Figma', 'Principle', 'Photoshop', 'Illustrator'],
  },
  {
    name: '개발',
    dataArray: [
      {
        name: '언어',
        data: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        name: '프레임워크',
        data: ['React', 'Next.js', 'TailwindCSS'],
      },
      {
        name: '도구',
        data: [
          'ESLint & Prettier',
          'Husky & Lint-staged',
          'Storybook',
          'Vercel Postgres SDK(SQL)',
          'SWR',
        ],
      },
    ],
  },
];

export type ProjectData = {
  title: string;
  timeline: string;
  figmaURL?: string;
  githubURL?: string;
  summary: string;
  contents?: string[];
  contentArray?: { step: string; description: string[] }[];
  skills: string[];
};

export const developProjectData: ProjectData[] = [
  {
    title: 'Portfolio 반응형 웹사이트',
    timeline: '2024.10 (1인 프로젝트)',
    figmaURL: '/',
    githubURL: '/',
    summary: 'Portfolio 에 2가지 경험을 Seamless 하게 녹여내는 page 구현',
    contents: [
      '경험 :  1. 프론트엔드  2. HCI 연구원',
      'Mobile, Desktop 환경을 동시에 고려',
    ],
    skills: ['TypeScript', 'Next.js', 'TailwindCSS'],
  },
  {
    title: '대형마트 웹/앱 개선 방향 제안',
    timeline: '2024.04 ~ 2024.09 (1인 프로젝트)',
    figmaURL:
      'https://www.figma.com/design/eYS9TCDxyCUX8tsLPq5sGO/TP_Foodsearch_%EB%B0%B0%ED%8F%AC_000000?node-id=23-995&t=XrUtWrf96rONdBw5-1',
    githubURL: 'https://github.com/simJaemoon/food-search/',
    summary:
      'X세대 온라인 식료품 구매 거부감을 해소하기 위한, 새로운 온라인 장보기 경험 설계',
    contentArray: [
      {
        step: '기획 [24.04 ~ 24.06]',
        description: [
          '현상에 거시적인 이해를 바탕으로 문제를 미시적으로 정의 (Top-down)',
          '문제 탐색 → 인식 → 분석 → 정의',
        ],
      },
      {
        step: '디자인 [24.06 ~ 24.07]',
        description: [
          '새로운 온라인 장보기 경험을 구성하는 콘텐츠 설계',
          '시장을 구경하며 상품을 구매한 경험을 연상시키는 화면설계',
        ],
      },
      {
        step: '개발 [24.07 ~ 24.09]',
        description: [
          'Desktop 으로의 확장 가능성을 염두에 둔 반응형 웹(Mobile-first)으로 구현',
          '컴포넌트 재사용이 용이하도록 2가지 분류 방식을 참고 (Presentational-Container, Atomic Design)',
        ],
      },
    ],
    skills: [
      'TypeScript',
      'Next.js',
      'TailwindCSS',
      'Storybook',
      'Vercel Postgres SDK(SQL)',
      'SWR',
    ],
  },
];

export const researchProjectData: ProjectData[] = [
  {
    title: '일회성 스마트키 솔루션',
    timeline: '2021.10 ~ 2022.01 (국토교통과학기술진흥원)',
    summary:
      '범죄에 취약한 1인 여성 가구의 치안을 개선하기 위한, 1회 성 공동현관 비밀번호 서비스 앱 개발',
    contents: ['역할 : 데스크 리서치, 인터뷰, 와이어프레임 작성'],
    skills: ['Figma'],
  },
  {
    title: 'Camera 체감 화질 조사',
    timeline: '2021.04 - 2021.08 (삼성전자)',
    summary:
      '스마트폰 카메라 개선을 위해, MZ 세대가 선호하는 사진을 체감 화질(지각, 감성) 관점에서 조사',
    contents: ['역할 : 대표 감성 어휘 도출, 실험 자극물 생성, 실험 설계/수행'],
    skills: ['Python'],
  },
  {
    title: '차량 내 거치된 휴대전화 조작 위험성 조사',
    timeline: '2020.08 - 2021.07 (개인 연구, SCIE 논문 출판)',
    summary:
      '운전 중 휴대전화 거치대를 사용한 휴대전화 조작 행동이 안전할 것이라는 운전자의 막연한 기대에 대한 조사',
    contents: [
      '역할 : 연구 주제 선정, 관련 논문 분석, 실험 설계/수행, 데이터 해석, 논문 작성',
    ],
    skills: ['Eye-Traking', 'Driving-Simulator', 'SPSS'],
  },
  {
    title: '디지털변환 성숙 수준 평가측정 모델 개발',
    timeline: '2020.03 - 2020.07 (한국전력공사)',
    summary:
      '기업의 디지털변환 성숙 수준을 평가하기 위해, 평가영역, 평가항목, 측정지표 도출 후 모델 적용',
    contents: ['역할 : 평가/측정 지표 도출, 데이터 분석'],
    skills: ['SPSS'],
  },
  {
    title: '인포테인먼트 애니메이션 감성 최적화 연구',
    timeline: '2019.04 - 2019.11 (현대자동차)',
    summary:
      '차량 인포테인먼트 시스템의 애니메이션 효과(e.g., 화면 전환)를 통해 사용자에게 제공하는 감성 품질 개선',
    contents: [
      '역할 : 연구 배경/특허 조사, 모션 그래픽 제작, 실험 설계/수행, 데이터 해석, 논문 작성',
    ],
    skills: ['Principle', 'Driving-Simulator', 'SPSS'],
  },
  {
    title: '스마트워치 알림 유형 별 진동 패턴 개발',
    timeline: '2018.08 - 2019.01 (개인 연구, SCIE 논문 출판)',
    summary:
      '스마트워치를 눈으로 확인하기 힘든 상황에서 알림을 구분할 수 있도록 알림 유형 별 진동 패턴 제안',
    contents: [
      '역할 : 연구 주제 선정, 진동 패턴 디자인, 실험 설계/수행, 데이터 해석',
    ],
    skills: ['SPSS', 'R'],
  },
  {
    title: '사용자 중심 제품 설계 지원시스템 개발',
    timeline: '2018.03 - 2018.11 (산업통상자원부)',
    summary:
      '사용자 특성 정보를 활용해 제품의 사용성 및 감성 품질을 향상시킬 수 있는 제품 설계 지원시스템 개발',
    contents: ['역할 : 자료 및 시스템 검수'],
    skills: [],
  },
  {
    title: 'Pen Interaction 시스템 개선 방향 제안',
    timeline: '2017.07 - 2018.10 (과기부, SCIE 논문 출판)',
    summary: 'UX 관점에서 Stylus 펜의 개선 방향 제안',
    contents: [
      '역할 : 연구 리뷰 논문 작성 총괄[논문 구조 설계, 논문 수집/범주화/인사이트 도출]',
    ],
    skills: [],
  },
  {
    title: '하이브리드 스마트워치 개발 및 사용성 평가',
    timeline: '2018.08 - 2019.01 (개인 연구, SCIE 논문 출판)',
    summary:
      '인터페이스의 불편한 조작감으로 인해 콘텐츠 생성보다 소비에 적합한 기존 스마트워치 개선[개선 방향 : 스마트 알림 시스템]',
    contents: [
      '역할 : 연구 주제 선정, 프로토타입 디자인, 실험 설계/수행, 데이터 해석, 논문 작성',
    ],
    skills: ['SPSS', 'R'],
  },
];

// {
//   title: '',
//   timeline: '',
//   summary:
//     '',
//   contents: [''],
//   skills: [''],
// },

export const paper = [
  'Sim, J., & Ji, Y. G. (2023). Investigating the Impact of Mounted Mobile Phones on Driving Behavior. International Journal of Human–Computer Interaction, 39(17), 3431-3444. [SCIE]',
  'Sim, J., Yim, Y., & Kim, K. (2021). A review of the stylus system to enhance usability through sensory feedback. South African Journal of Industrial Engineering, 32(1), 71-85. [SCIE]',
  'Sim, J., Yim, Y., & Kim, K. (2019). Development and evaluation of the HaptiWatch with a smart notification system. Human Factors and Ergonomics in Manufacturing & Service Industries, 29(6), 504-516. [SCIE]',
  '심재문, 김민종, 김귀영, 이장선, 지용구. (2020). 차량 내 인포테인먼트 환경에서 감성 기반 모션 그래픽스 설계 방향 도출. 대한인간공학회지, 39(5), 383-395, 10.5143/JESK.2020.39.5.383 [KCI]',
];

export const researchDescription = {
  keyword: ['사용성', '감성', '안전'],
  domain: ['스마트폰', '스마트워치', '자동차'],
};
