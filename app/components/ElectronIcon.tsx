// 빨간 Electron 원자 아이콘.
// `currentColor` 기반이라 부모 요소의 색상(예: text-red-500)에 따라 색이 결정됨.
// 네비바 로고와 페이지 일러스트에서 모두 재사용된다.
import type { CSSProperties } from 'react'

interface ElectronIconProps {
  /** Tailwind 색상 클래스(`text-red-500` 등). 미지정 시 부모 색을 따른다. */
  className?: string
  /** 정사각형 한 변 크기(px) */
  size?: number
  /** 추가 인라인 스타일 */
  style?: CSSProperties
  'aria-label'?: string
}

/**
 * Electron 로고 스타일의 원자 아이콘.
 *  - 중앙의 작은 원 = 원자핵
 *  - 3개의 기울어진 타원형 = 전자 궤도
 *  - 모든 stroke 가 currentColor 이므로 Tailwind 텍스트 색으로 컨트롤
 */
export function ElectronIcon({
  className,
  size = 24,
  style,
  'aria-label': ariaLabel = 'Electron logo',
}: ElectronIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      role="img"
      aria-label={ariaLabel}
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
    >
      {/* 3개의 전자 궤도 — 60도씩 회전시켜 교차 */}
      <ellipse cx="24" cy="24" rx="22" ry="9" strokeWidth="2.2" />
      <ellipse
        cx="24"
        cy="24"
        rx="22"
        ry="9"
        strokeWidth="2.2"
        transform="rotate(60 24 24)"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="22"
        ry="9"
        strokeWidth="2.2"
        transform="rotate(120 24 24)"
      />
      {/* 원자핵 */}
      <circle cx="24" cy="24" r="3.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default ElectronIcon
