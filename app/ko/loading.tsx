// /ko 하위 문서 라우트 전환 시 Suspense fallback.
// 레이아웃(네비·사이드바)은 유지된 채 본문 영역에만 로딩 스피너가 표시된다.
import { LoadingScreen } from '../components/LoadingScreen'

export default function Loading() {
  return <LoadingScreen label="문서를 불러오는 중…" />
}
