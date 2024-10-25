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
    figmaURL: '/',
    githubURL: '/',
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
