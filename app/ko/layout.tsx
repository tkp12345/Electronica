// 한국어 로케일 레이아웃 — Nextra Layout 을 lang="ko" 로 구성.
import { LangLayoutShell } from '../components/LangLayoutShell'

export default function KoLayout({ children }: { children: React.ReactNode }) {
  return <LangLayoutShell lang="ko">{children}</LangLayoutShell>
}
