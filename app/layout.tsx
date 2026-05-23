import type { Metadata } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
// Tailwind utilities — nextra css 뒤에 와야 utility 클래스가 override 가능
import './globals.css'

// 사이트 메타 — 검색엔진 최적화와 OG 미리보기에 사용됨
export const metadata: Metadata = {
  title: {
    default: 'Electronica — Electron 학습 문서',
    template: '%s · Electronica',
  },
  description: 'Electron을 학습하고 정리한 개인 참고 문서 사이트.',
  metadataBase: new URL('https://tkp12345.github.io/Electronica'),
}

// 상단 네비게이션바: 로고 + 우측 GitHub 링크
const navbar = (
  <Navbar
    logo={<b>⚡ Electronica</b>}
    projectLink="https://github.com/tkp12345/Electronica"
  />
)

// 푸터
const footer = (
  <Footer>MIT {new Date().getFullYear()} © Roberto · Electronica</Footer>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Nextra 4: getPageMap()이 app/ 디렉터리를 스캔해 사이드바/네비 구조 생성
  const pageMap = await getPageMap()

  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/tkp12345/Electronica/tree/main"
          editLink="이 페이지 편집"
          feedback={{ content: '오타·개선 의견' }}
          // 사이드바: 폴더는 기본 접힘(1단계만 펼침), 토글 버튼 노출
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          // 다크/라이트/시스템 라벨 한글화
          themeSwitch={{ dark: '다크', light: '라이트', system: '시스템' }}
          toc={{ title: '목차', backToTop: '맨 위로' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
