// 빨간 원자 모양 아이콘 — 본 사이트용 오리지널 SVG.
// 원자(궤도 3개 + 핵) 는 일반 과학 심볼이므로 라이센스 부담 없이 자체 디자인.
import type { CSSProperties } from 'react'

interface ElectronIconProps {
  className?: string
  size?: number
  style?: CSSProperties
  'aria-label'?: string
}

/**
 * 디자인 메모
 *  - viewBox 64x64 — 정렬 편의
 *  - 3개의 타원 궤도가 60° 간격으로 회전 → 정삼각 대칭
 *  - stroke 가 currentColor → 부모의 text-red-500 가 색을 결정
 *  - 핵(중앙 원)은 살짝 키워 무게 중심 부여
 *  - strokeLinecap='round' 로 끝맺음 부드럽게
 */
export function ElectronIcon({
  className,
  size = 24,
  style,
  'aria-label': ariaLabel = 'Electron',
}: ElectronIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      role="img"
      aria-label={ariaLabel}
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    >
      <g strokeWidth="2.4">
        <ellipse cx="32" cy="32" rx="28" ry="10.5" />
        <ellipse cx="32" cy="32" rx="28" ry="10.5" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="28" ry="10.5" transform="rotate(120 32 32)" />
      </g>
      {/* 원자핵 */}
      <circle cx="32" cy="32" r="5.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default ElectronIcon
