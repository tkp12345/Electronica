// 두 로케일(en/ko)의 layout.tsx가 공유하는 Nextra Layout 래퍼.
// 각 로케일 layout은 이 컴포넌트에 lang 만 넘긴다.
import Image from 'next/image'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import { LocaleSwitcher } from './LocaleSwitcher'

export type Lang = 'en' | 'ko'

interface LangLayoutShellProps {
  lang: Lang
  children: React.ReactNode
}

// 각 로케일별 UI 라벨
const labels = {
  ko: {
    siteName: 'Electronica',
    edit: '이 페이지 편집',
    feedback: '오타·개선 의견',
    dark: '다크',
    light: '라이트',
    system: '시스템',
    tocTitle: '목차',
    backToTop: '맨 위로',
    search: '검색…',
    footer: 'MIT · © Roberto · Electronica',
  },
  en: {
    siteName: 'Electronica',
    edit: 'Edit this page',
    feedback: 'Found a typo? Tell us',
    dark: 'Dark',
    light: 'Light',
    system: 'System',
    tocTitle: 'On this page',
    backToTop: 'Back to top',
    search: 'Search…',
    footer: 'MIT · © Roberto · Electronica',
  },
} as const

// next/image 는 public 이미지 src 에 basePath 를 자동으로 붙이지 않는다.
// prod(GitHub Pages /Electronica) 에서 로고가 404(액박) 나지 않도록 직접 prefix.
// 값은 next.config.mjs 가 단일 소스로 주입(NEXT_PUBLIC_BASE_PATH).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export async function LangLayoutShell({ lang, children }: LangLayoutShellProps) {
  // Nextra 4 i18n: 해당 lang 서브트리(/ko 또는 /en)만 사이드바에 노출
  const pageMap = await getPageMap(`/${lang}`)
  const t = labels[lang]

  const navbar = (
    <Navbar
      logo={
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: 700,
          }}
        >
          {/* basePath 를 직접 붙인다 → dev: /logo-mark.png, prod: /Electronica/logo-mark.png.
              26px 표시·@2x(52px) 원본이라 레티나에서도 선명. */}
          <Image src={`${BASE_PATH}/logo-mark.png`} alt="" width={26} height={26} priority />
          {t.siteName}
        </span>
      }
      projectLink="https://github.com/tkp12345/Electronica"
    >
      <LocaleSwitcher current={lang} />
    </Navbar>
  )

  const footer = <Footer>{t.footer}</Footer>

  return (
    <Layout
      navbar={navbar}
      footer={footer}
      pageMap={pageMap}
      docsRepositoryBase="https://github.com/tkp12345/Electronica/tree/main"
      editLink={t.edit}
      feedback={{ content: t.feedback }}
      sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
      themeSwitch={{ dark: t.dark, light: t.light, system: t.system }}
      toc={{ title: t.tocTitle, backToTop: t.backToTop }}
      i18n={[
        { locale: 'ko', name: '한국어' },
        { locale: 'en', name: 'English' },
      ]}
    >
      {children}
    </Layout>
  )
}

export default LangLayoutShell
