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
  status?: 'WIP';
  title: string;
  timeline: string;
  figmaURL?: string;
  githubURL?: string;
  summary: string;
  contents?: string[];
  contentArray?: { step: string; description: string[] }[];
  skills: string[];
  reportURL?: string;
  siteURL?: string;
};

export const developProjectData: ProjectData[] = [
  {
    status: 'WIP',
    title: '사용성 통계 분석 대시보드',
    timeline: '2024.10 ~ (1인 프로젝트)',
    summary:
      '데이터를 입력해 모수/비모수 통계 분석을 수행할 수 있고, 사용성 분석 결과를 차트 & 애니메이션으로 이해하기 쉽게 제공',
    contents: ['작업 중'],
    skills: [
      'TypeScript',
      'Next.js',
      'SCSS',
      'Redux',
      'Chart.js',
      'jStat',
      'Framer-Motion',
    ],
  },
  {
    title: 'Portfolio 반응형 웹사이트',
    timeline: '2024.10 (1인 프로젝트)',
    figmaURL:
      'https://www.figma.com/design/iGb2BVo2CCDmXOyoi1rpor/blog-portfolio_%EB%B0%B0%ED%8F%AC_241026?node-id=0-1',
    githubURL: 'https://github.com/SimJaemoon/SimJaemoon.github.io',
    summary:
      'Portfolio 에 2가지 경험(1. 프론트엔드 개발자  2. HCI 연구원)을 Seamless 하게 녹여내는 page 구현',
    contentArray: [
      {
        step: '콘텐츠 설계',
        description: [
          'Message - “내가 할 수 있는 일은 무엇이며, 행적으로 이를 증명할 수 있다”',
          '구성 : 주장(할 수 있는 일)에 근거(행적)를 더하는 흐름',
          '배치(시선 흐름 설계) : 단일 메시지를 효과적으로 전달하기 위해, 시선 흐름이 분기되지 않도록 설계',
        ],
      },
      {
        step: '반응형 웹 구현',
        description: [
          '단일 Breakpoint(840px)로 Mobile 과 Tablet & Desktop 구분',
          'UI 요소 : Nav-flexbox를 햄버거 버튼과 modal 로 대체 ',
          'CSS : width(%, min, max), 줄바꿈, font-size, line-height, row-gap ...',
        ],
      },
      {
        step: '재사용성/확장성',
        description: [
          '데이터 Update 시 UI 에 자동 반영될 수 있도록, Container/Presentational 컴포넌트로 분리한 후 리스트 렌더링 적용',
        ],
      },
      {
        step: '사용성 개선',
        description: [
          'Sticky header : 연속/단속적 문서 이동 방법(Scroll, 목차 이동)을 제공함으로써, 현실 독서 경험을 연상',
          'Floating Button : Scroll이 발생해도 항상 동일한 위치에 존재하는 탈출 버튼으로 Undo/Redo 구현',
        ],
      },
    ],
    skills: ['TypeScript', 'Next.js', 'TailwindCSS'],
    reportURL:
      'https://github.com/SimJaemoon/SimJaemoon.github.io/blob/main/document/Portfolio_summary.pdf',
  },
  {
    title: '대형마트 웹/앱 개선 방향 제안',
    timeline: '2024.04 ~ 09 (1인 프로젝트)',
    figmaURL:
      'https://www.figma.com/design/eYS9TCDxyCUX8tsLPq5sGO/TP_Foodsearch_%EB%B0%B0%ED%8F%AC_000000?node-id=23-995&t=XrUtWrf96rONdBw5-1',
    githubURL: 'https://github.com/simJaemoon/food-search/',
    summary:
      'X세대 온라인 식료품 구매 거부감을 해소하기 위한, 새로운 온라인 장보기 경험 설계',
    contentArray: [
      {
        step: '기획 [24.04 ~ 06]',
        description: [
          '문제 탐색 : 식사 Flow  중  주문 Process',
          '문제 인식 : X세대가 온라인으로 식료품을 구매할 능력은 있지만, 실제 구매 행동으로 이어지지 못하는 문제 상황 포착',
          '문제 분석 : Market(식료품 구매처), Service(온라인 장보기), User(X세대)',
          '문제 정의 : 사용자 조사를 통해 파악한 원인들에 대한 해결 방향 도출',
        ],
      },
      {
        step: '디자인 [24.06 ~ 07]',
        description: [
          '콘텐츠 기획 : 새로운 온라인 장보기 경험을 구성하는 콘텐츠 설계',
          '화면 설계 : 시장을 구경하며 상품을 구매한 경험을 연상시키는 Object 구성',
        ],
      },
      {
        step: '개발 [24.07 ~ 09]',
        description: [
          '화면 구현 : 컴포넌트를 뼈대(Presentational) 와 동작(Container) 으로 구분하는 설계 방식 채택',
          '시행착오 : 설계(기획, 디자인)와 구현(개발) 간 조율',
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
    reportURL:
      'https://github.com/SimJaemoon/food-search/blob/main/document/FOODSEARCH_summary.pdf',
    siteURL: 'https://food-search-simjaemoons-projects.vercel.app',
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
    timeline: '2021.04 ~ 08 (삼성전자)',
    summary:
      '스마트폰 카메라 개선을 위해, MZ 세대가 선호하는 사진을 체감 화질(지각, 감성) 관점에서 조사',
    contents: ['역할 : 대표 감성 어휘 도출, 실험 자극물 생성, 실험 설계/수행'],
    skills: ['Python'],
  },
  {
    title: '차량 내 거치된 휴대전화 조작 위험성 조사',
    timeline: '2020.08 ~ 2021.07 (개인 연구, SCIE 논문 출판)',
    summary:
      '운전 중 휴대전화 거치대를 사용한 휴대전화 조작 행동이 안전할 것이라는 운전자의 막연한 기대에 대한 조사',
    contents: [
      '역할 : 연구 주제 선정, 관련 논문 분석, 실험 설계/수행, 데이터 해석, 논문 작성',
    ],
    skills: ['Eye-Traking', 'Driving-Simulator', 'SPSS'],
  },
  {
    title: '디지털변환 성숙 수준 평가측정 모델 개발',
    timeline: '2020.03 ~ 07 (한국전력공사)',
    summary:
      '기업의 디지털변환 성숙 수준을 평가하기 위해, 평가영역, 평가항목, 측정지표 도출 후 모델 적용',
    contents: ['역할 : 평가/측정 지표 도출, 데이터 분석'],
    skills: ['SPSS'],
  },
  {
    title: '인포테인먼트 애니메이션 감성 최적화 연구',
    timeline: '2019.04 ~ 11 (현대자동차)',
    summary:
      '차량 인포테인먼트 시스템의 애니메이션 효과(e.g., 화면 전환)를 통해 사용자에게 제공하는 감성 품질 개선',
    contents: [
      '역할 : 연구 배경/특허 조사, 모션 그래픽 제작, 실험 설계/수행, 데이터 해석, 논문 작성',
    ],
    skills: ['Principle', 'Driving-Simulator', 'SPSS'],
  },
  {
    title: '스마트워치 알림 유형 별 진동 패턴 개발',
    timeline: '2018.08 ~ 2019.01 (개인 연구)',
    summary:
      '스마트워치를 눈으로 확인하기 힘든 상황에서 알림을 구분할 수 있도록 알림 유형 별 진동 패턴 제안',
    contents: [
      '역할 : 연구 주제 선정, 진동 패턴 디자인, 실험 설계/수행, 데이터 해석',
    ],
    skills: ['SPSS', 'R'],
  },
  {
    title: '사용자 중심 제품 설계 지원시스템 개발',
    timeline: '2018.03 ~ 11 (산업통상자원부)',
    summary:
      '사용자 특성 정보를 활용해 제품의 사용성 및 감성 품질을 향상시킬 수 있는 제품 설계 지원시스템 개발',
    contents: ['역할 : 자료 및 시스템 검수'],
    skills: [],
  },
  {
    title: 'Pen Interaction 시스템 개선 방향 제안',
    timeline: '2017.07 ~ 2018.10 (과기부, SCIE 논문 출판)',
    summary: 'UX 관점에서 Stylus 펜의 개선 방향 제안',
    contents: [
      '역할 : 연구 리뷰 논문 작성 총괄[논문 구조 설계, 논문 수집/범주화/인사이트 도출]',
    ],
    skills: [],
  },
  {
    title: '하이브리드 스마트워치 개발 및 사용성 평가',
    timeline: '2018.08 ~ 2019.01 (개인 연구, SCIE 논문 출판)',
    summary:
      '인터페이스의 불편한 조작감으로 인해 콘텐츠 생성보다 소비에 적합한 기존 스마트워치 개선 [개선 방향 : 스마트 알림 시스템]',
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
