// 한국어 도큐먼트 루트 사이드바.
// 키 = 폴더/파일명, 값 = 사이드바 표시 라벨.
// 순서는 Electron 공식 사이드바를 기준으로 학습 순서 우선으로 재배열.
export default {
  // --- Get Started
  '-- get-started': {
    type: 'separator',
    title: '시작하기',
  },
  introduction: '소개',
  'why-electron': '왜 Electron 인가',
  tutorial: '튜토리얼',

  // --- Processes
  '-- processes': {
    type: 'separator',
    title: '프로세스',
  },
  processes: '프로세스 모델',

  // --- Best Practices
  '-- best-practices': {
    type: 'separator',
    title: '베스트 프랙티스',
  },
  'best-practices': '베스트 프랙티스',

  // --- Examples
  '-- examples': {
    type: 'separator',
    title: '예제',
  },
  examples: '예제',

  // --- Development
  '-- development': {
    type: 'separator',
    title: '개발 도구',
  },
  development: '개발 도구',

  // --- Native modules
  '-- native': {
    type: 'separator',
    title: '네이티브 모듈',
  },
  'native-modules': '네이티브 모듈',

  // --- Distribution
  '-- distribution': {
    type: 'separator',
    title: '배포',
  },
  distribution: '배포',

  // --- Testing
  '-- testing': {
    type: 'separator',
    title: '테스트 · 디버깅',
  },
  testing: '테스트 · 디버깅',

  // --- References
  '-- references': {
    type: 'separator',
    title: '레퍼런스',
  },
  references: '레퍼런스',
}
