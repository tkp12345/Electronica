// 공용 로딩 화면 — 루트 리다이렉트 / 문서 라우트 전환(loading.tsx) 에서 함께 쓴다.
//  - 사이트 톤에 맞춘 빨강 액센트 스피너(다크모드에서 글로우)
//  - prefers-reduced-motion 이면 회전 대신 은은한 펄스로 대체(globals.css)
// 훅이 없으므로 서버/클라이언트 어디서 import 해도 동작한다.
interface LoadingScreenProps {
  /** 스피너 아래 안내 문구. */
  label?: string
}

export function LoadingScreen({ label = '불러오는 중…' }: LoadingScreenProps) {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <span className="loading-spinner" aria-hidden="true" />
      <p className="loading-label">{label}</p>
    </div>
  )
}

export default LoadingScreen
