// 모든 학습 페이지 상단에 들어가는 히어로 박스.
// 좌측에는 페이지 주제를 한눈에 보여주는 SVG 일러스트,
// 우측에는 제목/부제목/배지가 들어간다.
import type { ReactNode } from 'react'

interface PageHeroProps {
  /** 상단 좌측에 들어갈 SVG 일러스트 컴포넌트 */
  illustration: ReactNode
  /** 페이지 제목 (h1 대용) */
  title: string
  /** 한두 줄짜리 부제목 — 페이지가 무엇을 다루는지 요약 */
  subtitle: string
  /** 우측 상단 작은 배지(예: "Tutorial · 1/6"). 선택. */
  badge?: string
}

/**
 * 페이지 히어로.
 *  - 좌: 일러스트 (정사각, 빨간 포인트 강조)
 *  - 우: 배지 → 제목 → 부제
 *  - Nextra 본문 위에 그라데이션 배경의 카드 형태로 떠 있음
 */
export function PageHero({ illustration, title, subtitle, badge }: PageHeroProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(120px, 200px) 1fr',
        gap: '1.5rem',
        alignItems: 'center',
        marginTop: '1.5rem',
        marginBottom: '2rem',
        padding: '1.25rem 1.5rem',
        borderRadius: '16px',
        border: '1px solid rgba(239, 68, 68, 0.18)',
        background:
          'linear-gradient(135deg, rgba(239,68,68,0.08) 0%, rgba(239,68,68,0.02) 50%, transparent 100%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ef4444' /* 일러스트 currentColor 강조색 (빨강) */,
        }}
      >
        {illustration}
      </div>
      <div>
        {badge ? (
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#ef4444',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.4rem',
            }}
          >
            {badge}
          </div>
        ) : null}
        <h1
          style={{
            fontSize: '1.875rem',
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            margin: '0.6rem 0 0',
            color: 'var(--x-color-fg-muted, #6b7280)',
            fontSize: '1rem',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default PageHero
