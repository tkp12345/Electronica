// 각 학습 페이지의 상단 히어로에 들어가는 SVG 일러스트 모음.
// - viewBox 200x160 로 통일 → PageHero 의 좌측 박스(폭 120~200px)에 안정적으로 맞음
// - 모든 stroke 가 currentColor 이므로 PageHero 가 빨강 강조색을 주입
// - fill 컬러도 currentColor 또는 투명/회색 톤만 사용 → 다크/라이트 모두 깔끔
import type { CSSProperties } from 'react'

const wrap: CSSProperties = { width: '100%', height: 'auto' }

/** 1. Electron 소개 — 데스크톱 창 안에 웹+Node.js 결합 */
export function IntroIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="20" y="22" width="160" height="116" rx="10" strokeWidth="3" />
      <rect x="20" y="22" width="160" height="20" rx="10" fill="currentColor" fillOpacity="0.1" stroke="none" />
      <circle cx="32" cy="32" r="3" fill="currentColor" stroke="none" />
      <circle cx="44" cy="32" r="3" fill="currentColor" stroke="none" opacity="0.4" />
      <circle cx="56" cy="32" r="3" fill="currentColor" stroke="none" opacity="0.4" />
      <text x="60" y="78" fontSize="14" fontWeight="700" fill="currentColor" stroke="none">
        HTML
      </text>
      <text x="60" y="100" fontSize="14" fontWeight="700" fill="currentColor" stroke="none" opacity="0.7">
        CSS · JS
      </text>
      <text x="60" y="122" fontSize="14" fontWeight="700" fill="currentColor" stroke="none" opacity="0.5">
        Node.js
      </text>
    </svg>
  )
}

/** 2. Why Electron — 한 코드가 3개 OS로 */
export function WhyIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      {/* 중앙 코드 박스 */}
      <rect x="78" y="20" width="44" height="34" rx="4" strokeWidth="2.5" />
      <line x1="84" y1="30" x2="116" y2="30" strokeWidth="2" opacity="0.5" />
      <line x1="84" y1="38" x2="110" y2="38" strokeWidth="2" opacity="0.5" />
      <line x1="84" y1="46" x2="116" y2="46" strokeWidth="2" opacity="0.5" />
      {/* 화살표 3갈래 */}
      <line x1="100" y1="56" x2="40" y2="100" strokeWidth="2" />
      <line x1="100" y1="56" x2="100" y2="100" strokeWidth="2" />
      <line x1="100" y1="56" x2="160" y2="100" strokeWidth="2" />
      {/* 3개 OS 박스 (macOS, Windows, Linux) */}
      <rect x="14" y="100" width="52" height="40" rx="5" strokeWidth="2.5" />
      <rect x="74" y="100" width="52" height="40" rx="5" strokeWidth="2.5" />
      <rect x="134" y="100" width="52" height="40" rx="5" strokeWidth="2.5" />
      <text x="40" y="125" fontSize="10" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        macOS
      </text>
      <text x="100" y="125" fontSize="10" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        Win
      </text>
      <text x="160" y="125" fontSize="10" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        Linux
      </text>
    </svg>
  )
}

/** 3. Process Model — Main ↔ Renderer */
export function ProcessModelIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      {/* Main process */}
      <rect x="14" y="50" width="70" height="60" rx="8" strokeWidth="2.5" />
      <text x="49" y="80" fontSize="11" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        Main
      </text>
      <text x="49" y="96" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle" opacity="0.7">
        Node.js
      </text>
      {/* Renderer process */}
      <rect x="116" y="50" width="70" height="60" rx="8" strokeWidth="2.5" />
      <text x="151" y="80" fontSize="11" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        Renderer
      </text>
      <text x="151" y="96" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle" opacity="0.7">
        Chromium
      </text>
      {/* IPC arrows */}
      <line x1="84" y1="72" x2="116" y2="72" strokeWidth="2" markerEnd="url(#arr-r)" />
      <line x1="116" y1="92" x2="84" y2="92" strokeWidth="2" markerEnd="url(#arr-l)" />
      <text x="100" y="68" fontSize="8" fill="currentColor" stroke="none" textAnchor="middle" opacity="0.6">
        IPC
      </text>
      <defs>
        <marker id="arr-r" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill="currentColor" />
        </marker>
        <marker id="arr-l" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
          <path d="M6,0 L0,3 L6,6 z" fill="currentColor" />
        </marker>
      </defs>
    </svg>
  )
}

/** 4. Prerequisites — 체크리스트 */
export function PrerequisitesIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="36" y="20" width="128" height="120" rx="8" strokeWidth="2.5" />
      {[40, 65, 90, 115].map((y, i) => (
        <g key={y}>
          <rect x="52" y={y} width="14" height="14" rx="3" strokeWidth="2" />
          <path d={`M55 ${y + 7} L60 ${y + 12} L66 ${y + 3}`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <text x="76" y={y + 12} fontSize="11" fontWeight="600" fill="currentColor" stroke="none">
            {['Node.js', 'npm', 'Terminal', 'Editor'][i]}
          </text>
        </g>
      ))}
    </svg>
  )
}

/** 5. First App — 'Hello World' 창 */
export function FirstAppIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="22" y="28" width="156" height="104" rx="10" strokeWidth="3" />
      <rect x="22" y="28" width="156" height="20" rx="10" fill="currentColor" fillOpacity="0.1" stroke="none" />
      <circle cx="34" cy="38" r="3" fill="currentColor" stroke="none" />
      <circle cx="46" cy="38" r="3" fill="currentColor" stroke="none" opacity="0.4" />
      <circle cx="58" cy="38" r="3" fill="currentColor" stroke="none" opacity="0.4" />
      <text x="100" y="92" fontSize="20" fontWeight="800" fill="currentColor" stroke="none" textAnchor="middle">
        Hello
      </text>
      <text x="100" y="116" fontSize="18" fontWeight="800" fill="currentColor" stroke="none" textAnchor="middle" opacity="0.6">
        World 👋
      </text>
    </svg>
  )
}

/** 6. Preload — 두 프로세스 사이의 다리 */
export function PreloadIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      {/* 좌측 절벽: Renderer */}
      <rect x="8" y="60" width="48" height="80" strokeWidth="2.5" />
      <text x="32" y="100" fontSize="9" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        Renderer
      </text>
      {/* 우측 절벽: Main */}
      <rect x="144" y="60" width="48" height="80" strokeWidth="2.5" />
      <text x="168" y="100" fontSize="9" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        Main
      </text>
      {/* 다리(preload) */}
      <line x1="56" y1="80" x2="144" y2="80" strokeWidth="3" />
      <line x1="56" y1="92" x2="144" y2="92" strokeWidth="3" />
      {/* 케이블/지지대 */}
      <line x1="80" y1="80" x2="80" y2="40" strokeWidth="1.5" opacity="0.5" />
      <line x1="120" y1="80" x2="120" y2="40" strokeWidth="1.5" opacity="0.5" />
      <path d="M60 40 Q100 20 140 40" strokeWidth="2" opacity="0.6" />
      <text x="100" y="116" fontSize="10" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        preload.js
      </text>
    </svg>
  )
}

/** 7. Adding Features — 메뉴/단축키/대화상자 아이콘 모음 */
export function FeaturesIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      {/* Menu */}
      <rect x="20" y="30" width="50" height="40" rx="5" strokeWidth="2.5" />
      <line x1="28" y1="42" x2="62" y2="42" strokeWidth="2" />
      <line x1="28" y1="50" x2="58" y2="50" strokeWidth="2" />
      <line x1="28" y1="58" x2="54" y2="58" strokeWidth="2" />
      {/* Shortcut key */}
      <rect x="80" y="30" width="40" height="40" rx="5" strokeWidth="2.5" />
      <text x="100" y="56" fontSize="14" fontWeight="800" fill="currentColor" stroke="none" textAnchor="middle">
        ⌘K
      </text>
      {/* Dialog */}
      <rect x="130" y="30" width="50" height="40" rx="5" strokeWidth="2.5" />
      <text x="155" y="55" fontSize="12" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        Open?
      </text>
      {/* Tray */}
      <rect x="20" y="90" width="50" height="40" rx="5" strokeWidth="2.5" />
      <circle cx="45" cy="110" r="9" strokeWidth="2" />
      <text x="100" y="110" fontSize="11" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        + Notify
      </text>
      <rect x="130" y="90" width="50" height="40" rx="5" strokeWidth="2.5" />
      <path d="M145 105 L155 115 L168 100" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** 8. Packaging — 코드를 박스로 포장 */
export function PackagingIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      {/* 박스 */}
      <path d="M40 70 L100 40 L160 70 L160 130 L100 160 L40 130 Z" strokeWidth="2.5" />
      <path d="M40 70 L100 100 L160 70" strokeWidth="2.5" />
      <line x1="100" y1="100" x2="100" y2="160" strokeWidth="2.5" />
      {/* 코드 라벨 */}
      <rect x="70" y="20" width="60" height="22" rx="3" strokeWidth="2" />
      <text x="100" y="35" fontSize="11" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        {'</>'}
      </text>
      <line x1="100" y1="42" x2="100" y2="58" strokeWidth="2" markerEnd="url(#pk-arr)" />
      <defs>
        <marker id="pk-arr" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto">
          <path d="M0,0 L6,0 L3,6 z" fill="currentColor" />
        </marker>
      </defs>
    </svg>
  )
}

/** 9. Publishing — 박스가 클라우드로 */
export function PublishingIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      {/* 클라우드 */}
      <path
        d="M60 50 Q60 30 80 30 Q90 14 110 22 Q130 14 138 32 Q160 32 160 52 Q160 70 138 70 L78 70 Q60 70 60 50 Z"
        strokeWidth="2.5"
      />
      {/* 박스 */}
      <rect x="80" y="100" width="40" height="40" strokeWidth="2.5" />
      <line x1="80" y1="115" x2="120" y2="115" strokeWidth="2" />
      {/* 업로드 화살표 */}
      <line x1="100" y1="100" x2="100" y2="80" strokeWidth="2.5" markerEnd="url(#pub-arr)" />
      <defs>
        <marker id="pub-arr" markerWidth="8" markerHeight="8" refX="4" refY="2" orient="auto">
          <path d="M0,7 L4,0 L8,7 z" fill="currentColor" />
        </marker>
      </defs>
      <text x="100" y="54" fontSize="9" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        v1.0.1
      </text>
    </svg>
  )
}

/** 10. Security — 자물쇠 + 방패 */
export function SecurityIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      {/* 방패 */}
      <path d="M100 20 L160 40 L160 90 Q160 130 100 145 Q40 130 40 90 L40 40 Z" strokeWidth="2.5" />
      {/* 자물쇠 본체 */}
      <rect x="78" y="78" width="44" height="36" rx="4" strokeWidth="2.5" />
      {/* 자물쇠 고리 */}
      <path d="M86 78 L86 66 Q86 52 100 52 Q114 52 114 66 L114 78" strokeWidth="2.5" />
      {/* 자물쇠 키홀 */}
      <circle cx="100" cy="94" r="4" fill="currentColor" stroke="none" />
      <line x1="100" y1="94" x2="100" y2="104" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
