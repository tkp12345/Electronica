import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'
// Tailwind utilities — nextra css 뒤에 와야 utility 클래스가 override 가능
import './globals.css'

// 폰트 self-host — 빌드 시 .woff2 가 _next/static/media 로 번들되어
// 외부 google fonts CDN 요청 0회 (FCP/CLS 개선)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// 사이트 메타 — 검색엔진 최적화와 OG 미리보기에 사용됨
export const metadata: Metadata = {
  title: {
    default: 'Electronica — Electron 학습 문서',
    template: '%s · Electronica',
  },
  description: 'Electron 을 학습하고 정리한 개인 참고 문서 사이트 (KO/EN).',
  metadataBase: new URL('https://tkp12345.github.io/Electronica'),
}

// 루트 레이아웃은 <html>/<body> 골격만 담당.
// 실제 네비/사이드바/푸터/i18n 분기는 app/[lang]/layout.tsx 에 있음.
// lang 속성은 기본 'ko' — 클라이언트(LocaleSwitcher)에서 라우트 진입 시 갱신.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning className={inter.variable}>
      <Head />
      <body>{children}</body>
    </html>
  )
}
