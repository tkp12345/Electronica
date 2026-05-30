// 루트 세그먼트 로딩 fallback (초기 진입/리다이렉트 순간).
import { LoadingScreen } from './components/LoadingScreen'

export default function Loading() {
  return <LoadingScreen label="불러오는 중…" />
}
