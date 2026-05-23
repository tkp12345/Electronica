'use client'

// 네비바 우측에 노출되는 EN ↔ KO 토글 링크.
// 현재 경로의 첫 번째 세그먼트(/{lang}/...)만 교체해 같은 페이지의 다른 언어로 이동한다.
// 정적 export 환경이라 server-side redirect 없이 순수 클라이언트 라우팅만 사용.

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

type Lang = 'en' | 'ko'

interface LocaleSwitcherProps {
  /** 현재 페이지의 locale (서버에서 [lang] params 로 전달) */
  current: Lang
}

/** 현재 경로의 locale 세그먼트만 다른 lang 으로 치환 */
function swapLocale(pathname: string, nextLang: Lang): string {
  // pathname 예: "/ko/docs/introduction" → "/en/docs/introduction"
  const parts = pathname.split('/')
  // parts[0] = '' (선행 슬래시), parts[1] = 현재 lang
  if (parts[1] === 'en' || parts[1] === 'ko') {
    parts[1] = nextLang
    return parts.join('/') || '/'
  }
  // locale 세그먼트가 없으면 기본 홈으로
  return `/${nextLang}`
}

export function LocaleSwitcher({ current }: LocaleSwitcherProps) {
  const pathname = usePathname() ?? `/${current}`
  const other: Lang = current === 'ko' ? 'en' : 'ko'
  const otherHref = swapLocale(pathname, other)

  // 페이지 진입 시 <html lang> 동기화 — 루트 레이아웃은 정적이라 클라이언트에서 갱신
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = current
    }
  }, [current])

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
        fontSize: '0.85rem',
        fontWeight: 600,
        marginRight: '0.5rem',
      }}
      aria-label="Language switcher"
    >
      <span
        style={{
          color: current === 'ko' ? '#ef4444' : 'var(--x-color-fg-muted, #9ca3af)',
        }}
      >
        KO
      </span>
      <span style={{ opacity: 0.4 }}>·</span>
      <Link
        href={current === 'en' ? '#' : swapLocale(pathname, 'en')}
        style={{
          color: current === 'en' ? '#ef4444' : 'var(--x-color-fg-muted, #9ca3af)',
          textDecoration: 'none',
        }}
      >
        EN
      </Link>
      {/* 위의 마크업은 두 토큰을 색으로 구분하지만 실제 링크는 "현재 아닌 쪽"만 동작 */}
      <span style={{ display: 'none' }} aria-hidden>
        {otherHref}
      </span>
    </div>
  )
}

export default LocaleSwitcher
