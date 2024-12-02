

## Portfolio 반응형 웹사이트 [1인 프로젝트, 2024.10]

### " Portfolio 에 2가지 경험(1. 프론트엔드 개발자 2. HCI 연구원)을 Seamless 하게 녹여내는 page 구현 "

[프로젝트 보고서 보러 가기 ↗](https://github.com/SimJaemoon/SimJaemoon.github.io/blob/main/document/Portfolio_summary.pdf)

[배포된 사이트 보러 가기 ↗](https://noah-simjaemoon.github.io/)

- 기술 : TypeScript, Next.js, TailwindCSS

<br />

## 프로젝트 특징
### 콘텐츠 설계
* __Message__ - “내가 할 수 있는 일은 무엇이며, 행적으로 이를 증명할 수 있다”
* __구성__ : 주장(할 수 있는 일)에 근거(행적)를 더하는 흐름
* __배치(시선 흐름 설계)__ : 단일 메시지를 효과적으로 전달하기 위해, 시선 흐름이 분기되지 않도록 설계

### 반응형 웹 구현
* 단일 Breakpoint(840px)로 Mobile 과 Tablet & Desktop 구분
* __UI 요소__ : Nav-flexbox를 햄버거 버튼과 modal 로 대체
* __CSS__ : width(%, min, max), 줄바꿈, font-size, line-height, row-gap ...

### 재사용성/확장성
* 데이터 Update 시 UI 에 자동 반영될 수 있도록, Container/Presentational 컴포넌트로 분리한 후 리스트 렌더링 적용

### 사용성 개선
* __Sticky header__ : 연속/단속적 문서 이동 방법(Scroll, 목차 이동)을 제공함으로써, 현실 독서 경험을 연상
* __Floating Button__ : Scroll이 발생해도 항상 동일한 위치에 존재하는 탈출 버튼으로 Undo/Redo 구현
