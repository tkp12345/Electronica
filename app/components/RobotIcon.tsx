// 미니멀 로봇 아이콘 — Callout 의 🧒 이모지 자리에 들어가는 SVG.
// 미니멀 Apple 톤: 둥근 사각 헤드 + 동그란 두 눈 + 안테나.
import type { CSSProperties } from 'react'

interface RobotIconProps {
  className?: string
  size?: number
  style?: CSSProperties
}

export function RobotIcon({ className, size = 28, style }: RobotIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      role="img"
      aria-label="Easy explanation"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* 안테나 */}
      <line x1="24" y1="6" x2="24" y2="12" />
      <circle cx="24" cy="5" r="2" fill="currentColor" stroke="none" />
      {/* 헤드 */}
      <rect x="10" y="12" width="28" height="22" rx="6" />
      {/* 두 눈 */}
      <circle cx="18" cy="23" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="30" cy="23" r="2.2" fill="currentColor" stroke="none" />
      {/* 입(짧은 가로선) */}
      <line x1="20" y1="29" x2="28" y2="29" />
      {/* 어깨 */}
      <line x1="14" y1="36" x2="34" y2="36" />
      <line x1="14" y1="36" x2="14" y2="42" />
      <line x1="34" y1="36" x2="34" y2="42" />
    </svg>
  )
}

export default RobotIcon
