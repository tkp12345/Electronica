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

/** 11. Main process — 톱니바퀴 + Node */
export function MainProcessIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <circle cx="100" cy="80" r="32" strokeWidth="2.5" />
      <circle cx="100" cy="80" r="14" strokeWidth="2.5" />
      {/* 8개의 톱니 */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="96"
          y="36"
          width="8"
          height="12"
          fill="currentColor"
          stroke="none"
          transform={`rotate(${deg} 100 80)`}
        />
      ))}
      <text x="100" y="84" fontSize="9" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        node
      </text>
    </svg>
  )
}

/** 12. Renderer process — 웹 콘텐츠 창 */
export function RendererProcessIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="22" y="28" width="156" height="104" rx="8" strokeWidth="2.5" />
      <rect x="22" y="28" width="156" height="18" rx="8" fill="currentColor" fillOpacity="0.1" stroke="none" />
      <rect x="40" y="60" width="120" height="10" rx="2" fill="currentColor" fillOpacity="0.25" stroke="none" />
      <rect x="40" y="78" width="90" height="10" rx="2" fill="currentColor" fillOpacity="0.25" stroke="none" />
      <rect x="40" y="96" width="60" height="10" rx="2" fill="currentColor" fillOpacity="0.25" stroke="none" />
      <text x="100" y="124" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle">
        Chromium
      </text>
    </svg>
  )
}

/** 13. Sandbox — 잠긴 창 */
export function SandboxIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="30" y="30" width="140" height="100" rx="10" strokeWidth="2.5" />
      {/* 빗금 패턴 */}
      <defs>
        <pattern id="sb-stripes" patternUnits="userSpaceOnUse" width="10" height="10">
          <line x1="0" y1="10" x2="10" y2="0" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
        </pattern>
      </defs>
      <rect x="30" y="30" width="140" height="100" rx="10" fill="url(#sb-stripes)" stroke="none" />
      {/* 자물쇠 */}
      <rect x="86" y="78" width="28" height="22" rx="3" strokeWidth="2" />
      <path d="M91 78 L91 70 Q91 62 100 62 Q109 62 109 70 L109 78" strokeWidth="2" />
    </svg>
  )
}

/** 14. Context isolation — 두 분리된 영역 */
export function ContextIsolationIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="14" y="40" width="80" height="80" rx="6" strokeWidth="2.5" />
      <rect x="106" y="40" width="80" height="80" rx="6" strokeWidth="2.5" />
      <text x="54" y="76" fontSize="11" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        web
      </text>
      <text x="54" y="94" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle" opacity="0.6">
        context
      </text>
      <text x="146" y="76" fontSize="11" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle">
        preload
      </text>
      <text x="146" y="94" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle" opacity="0.6">
        context
      </text>
      {/* 벽 */}
      <line x1="100" y1="30" x2="100" y2="130" strokeWidth="3" strokeDasharray="4 3" />
    </svg>
  )
}

/** 15. Performance — 속도계 */
export function PerformanceIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      {/* 호 (게이지) */}
      <path d="M40 120 A60 60 0 0 1 160 120" strokeWidth="3" />
      {/* 눈금 */}
      {[-60, -30, 0, 30, 60].map((deg) => {
        const rad = (deg * Math.PI) / 180
        const x1 = 100 + Math.cos(rad - Math.PI / 2) * 56
        const y1 = 120 + Math.sin(rad - Math.PI / 2) * 56
        const x2 = 100 + Math.cos(rad - Math.PI / 2) * 64
        const y2 = 120 + Math.sin(rad - Math.PI / 2) * 64
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="2" />
      })}
      {/* 바늘 */}
      <line x1="100" y1="120" x2="138" y2="78" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="120" r="5" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** 16. Offline — 클라우드 + 사선 */
export function OfflineIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <path
        d="M60 90 Q60 70 80 70 Q90 54 110 62 Q130 54 138 72 Q160 72 160 92 Q160 110 138 110 L78 110 Q60 110 60 90 Z"
        strokeWidth="2.5"
      />
      <line x1="40" y1="40" x2="180" y2="140" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

/** 17. Accessibility — 사람 + 키보드 */
export function AccessibilityIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <circle cx="100" cy="50" r="14" strokeWidth="2.5" />
      <line x1="100" y1="64" x2="100" y2="108" strokeWidth="2.5" />
      <line x1="76" y1="80" x2="124" y2="80" strokeWidth="2.5" />
      <line x1="100" y1="108" x2="84" y2="138" strokeWidth="2.5" />
      <line x1="100" y1="108" x2="116" y2="138" strokeWidth="2.5" />
      <circle cx="100" cy="50" r="20" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
    </svg>
  )
}

/** 18. Examples — 시험관 */
export function ExamplesIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="70" y="20" width="20" height="100" rx="2" strokeWidth="2.5" />
      <rect x="70" y="80" width="20" height="40" fill="currentColor" fillOpacity="0.25" stroke="none" />
      <rect x="100" y="40" width="20" height="80" rx="2" strokeWidth="2.5" />
      <rect x="100" y="90" width="20" height="30" fill="currentColor" fillOpacity="0.25" stroke="none" />
      <rect x="130" y="60" width="20" height="60" rx="2" strokeWidth="2.5" />
      <rect x="130" y="100" width="20" height="20" fill="currentColor" fillOpacity="0.25" stroke="none" />
      <ellipse cx="80" cy="20" rx="10" ry="3" strokeWidth="2" />
      <ellipse cx="110" cy="40" rx="10" ry="3" strokeWidth="2" />
      <ellipse cx="140" cy="60" rx="10" ry="3" strokeWidth="2" />
    </svg>
  )
}

/** 19. Debugging — 돋보기 + 벌레 */
export function DebuggingIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <circle cx="80" cy="80" r="36" strokeWidth="3" />
      <line x1="106" y1="106" x2="146" y2="146" strokeWidth="5" strokeLinecap="round" />
      {/* 벌레 */}
      <ellipse cx="80" cy="80" rx="14" ry="10" strokeWidth="2" />
      <line x1="80" y1="70" x2="80" y2="90" strokeWidth="1.5" />
      <line x1="66" y1="76" x2="60" y2="72" strokeWidth="1.5" />
      <line x1="66" y1="84" x2="60" y2="88" strokeWidth="1.5" />
      <line x1="94" y1="76" x2="100" y2="72" strokeWidth="1.5" />
      <line x1="94" y1="84" x2="100" y2="88" strokeWidth="1.5" />
    </svg>
  )
}

/** 20. Boilerplate — 청사진 격자 */
export function BoilerplateIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="30" y="20" width="140" height="120" rx="6" strokeWidth="2.5" />
      {[40, 60, 80, 100, 120].map((y) => (
        <line key={y} x1="30" y1={y} x2="170" y2={y} strokeWidth="1" opacity="0.3" />
      ))}
      {[50, 70, 90, 110, 130, 150].map((x) => (
        <line key={x} x1={x} y1="20" x2={x} y2="140" strokeWidth="1" opacity="0.3" />
      ))}
      <rect x="50" y="40" width="40" height="40" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <rect x="110" y="80" width="40" height="40" fill="currentColor" fillOpacity="0.18" stroke="none" />
    </svg>
  )
}

/** 21. DevTools extension — 퍼즐 조각 */
export function ExtensionIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <path
        d="M50 50 H92 V40 Q92 28 104 28 Q116 28 116 40 V50 H150 V92 H140 Q128 92 128 104 Q128 116 140 116 H150 V150 H50 Z"
        strokeWidth="2.5"
      />
    </svg>
  )
}

/** 22. Drag & drop — 파일 + 화살표 */
export function DragDropIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <path d="M70 30 L110 30 L130 50 L130 130 L70 130 Z" strokeWidth="2.5" />
      <path d="M110 30 L110 50 L130 50" strokeWidth="2.5" />
      <line x1="80" y1="68" x2="120" y2="68" strokeWidth="2" opacity="0.4" />
      <line x1="80" y1="82" x2="120" y2="82" strokeWidth="2" opacity="0.4" />
      <line x1="80" y1="96" x2="105" y2="96" strokeWidth="2" opacity="0.4" />
      {/* 손가락 화살표 */}
      <path d="M140 80 L170 110 M170 110 L170 96 M170 110 L156 110" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

/** 23. Notification — 종 */
export function NotificationIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <path d="M70 110 Q70 60 100 50 Q130 60 130 110 Z" strokeWidth="2.5" />
      <line x1="60" y1="110" x2="140" y2="110" strokeWidth="2.5" />
      <circle cx="100" cy="124" r="6" strokeWidth="2.5" />
      <circle cx="135" cy="48" r="8" fill="currentColor" stroke="none" />
      <text x="135" y="52" fontSize="10" fontWeight="800" fill="white" stroke="none" textAnchor="middle">
        1
      </text>
    </svg>
  )
}

/** 24. Online/Offline — 신호 막대 */
export function SignalIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      {[
        { x: 50, h: 20 },
        { x: 80, h: 40 },
        { x: 110, h: 60 },
        { x: 140, h: 80 },
      ].map(({ x, h }) => (
        <rect
          key={x}
          x={x}
          y={130 - h}
          width="20"
          height={h}
          rx="3"
          fill="currentColor"
          fillOpacity="0.25"
          stroke="currentColor"
          strokeWidth="2"
        />
      ))}
    </svg>
  )
}

/** 25. REPL — 터미널 프롬프트 */
export function ReplIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="22" y="28" width="156" height="104" rx="8" strokeWidth="2.5" />
      <rect x="22" y="28" width="156" height="18" rx="8" fill="currentColor" fillOpacity="0.12" stroke="none" />
      <text x="34" y="74" fontSize="14" fontWeight="800" fill="currentColor" stroke="none">
        {'>'}
      </text>
      <rect x="54" y="64" width="80" height="12" fill="currentColor" fillOpacity="0.25" stroke="none" />
      <text x="34" y="98" fontSize="14" fontWeight="800" fill="currentColor" stroke="none">
        {'>'}
      </text>
      <rect x="54" y="88" width="60" height="12" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <text x="34" y="122" fontSize="14" fontWeight="800" fill="currentColor" stroke="none">
        {'>'}
      </text>
      <rect x="54" y="112" width="14" height="12" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** 26. Native modules — 칩(IC) */
export function NativeModuleIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="60" y="40" width="80" height="80" rx="4" strokeWidth="2.5" />
      <rect x="78" y="58" width="44" height="44" strokeWidth="2" opacity="0.5" />
      {/* 핀들 */}
      {[50, 70, 90, 110].map((y) => (
        <line key={`l${y}`} x1="60" y1={y} x2="44" y2={y} strokeWidth="2.5" />
      ))}
      {[50, 70, 90, 110].map((y) => (
        <line key={`r${y}`} x1="140" y1={y} x2="156" y2={y} strokeWidth="2.5" />
      ))}
      {[80, 100, 120].map((x) => (
        <line key={`t${x}`} x1={x} y1="40" x2={x} y2="26" strokeWidth="2.5" />
      ))}
      {[80, 100, 120].map((x) => (
        <line key={`b${x}`} x1={x} y1="120" x2={x} y2="134" strokeWidth="2.5" />
      ))}
      <text x="100" y="86" fontSize="11" fontWeight="800" fill="currentColor" stroke="none" textAnchor="middle">
        C++
      </text>
    </svg>
  )
}

/** 27. Code signing — 인증서 + 체크 */
export function CodeSigningIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="36" y="26" width="128" height="100" rx="6" strokeWidth="2.5" />
      <line x1="50" y1="50" x2="120" y2="50" strokeWidth="2" opacity="0.4" />
      <line x1="50" y1="66" x2="110" y2="66" strokeWidth="2" opacity="0.4" />
      <line x1="50" y1="82" x2="100" y2="82" strokeWidth="2" opacity="0.4" />
      <circle cx="148" cy="130" r="20" strokeWidth="2.5" />
      <path d="M138 130 L146 138 L160 122" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** 28. Mac App Store — A 박스 */
export function MasIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="50" y="30" width="100" height="100" rx="20" strokeWidth="2.5" />
      <text x="100" y="100" fontSize="56" fontWeight="800" fill="currentColor" stroke="none" textAnchor="middle">
        A
      </text>
    </svg>
  )
}

/** 29. Snapcraft — 라벨 박스 */
export function SnapcraftIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="34" y="50" width="132" height="80" rx="6" strokeWidth="2.5" />
      <rect x="50" y="34" width="100" height="22" rx="4" fill="currentColor" stroke="none" />
      <text x="100" y="50" fontSize="12" fontWeight="800" fill="white" stroke="none" textAnchor="middle">
        snap
      </text>
      <line x1="50" y1="78" x2="150" y2="78" strokeWidth="2" opacity="0.4" />
      <line x1="50" y1="94" x2="130" y2="94" strokeWidth="2" opacity="0.4" />
      <line x1="50" y1="110" x2="140" y2="110" strokeWidth="2" opacity="0.4" />
    </svg>
  )
}

/** 30. Windows Store — 4 타일 */
export function WindowsStoreIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="56" y="36" width="38" height="38" fill="currentColor" stroke="none" />
      <rect x="106" y="36" width="38" height="38" fill="currentColor" stroke="none" opacity="0.6" />
      <rect x="56" y="86" width="38" height="38" fill="currentColor" stroke="none" opacity="0.6" />
      <rect x="106" y="86" width="38" height="38" fill="currentColor" stroke="none" opacity="0.3" />
    </svg>
  )
}

/** 31. Auto update — 회전 화살표 + 버전 */
export function AutoUpdateIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <path d="M100 40 A40 40 0 1 1 60 80" strokeWidth="3" />
      <path d="M100 40 L86 28 M100 40 L86 52" strokeWidth="3" strokeLinecap="round" />
      <text x="100" y="110" fontSize="14" fontWeight="800" fill="currentColor" stroke="none" textAnchor="middle">
        v1 → v2
      </text>
    </svg>
  )
}

/** 32. DevTools — 렌치 */
export function DevToolsIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <path
        d="M64 60 A18 18 0 1 0 90 86 L132 128 L150 110 L108 68 A18 18 0 0 0 76 50 L88 62 L78 72 L66 60 Z"
        strokeWidth="2.5"
        fill="currentColor"
        fillOpacity="0.12"
      />
    </svg>
  )
}

/** 33. Profiling — 라인차트 */
export function ProfilingIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <line x1="30" y1="130" x2="170" y2="130" strokeWidth="2" />
      <line x1="30" y1="130" x2="30" y2="30" strokeWidth="2" />
      <path d="M30 110 L60 90 L80 100 L110 60 L140 70 L170 40" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {[60, 80, 110, 140, 170].map((x, i) => (
        <circle key={x} cx={x} cy={[90, 100, 60, 70, 40][i]} r="4" fill="currentColor" stroke="none" />
      ))}
    </svg>
  )
}

/** 34. Headless CI — 모니터 없는 서버 */
export function HeadlessIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect x="50" y="40" width="100" height="20" rx="3" strokeWidth="2" />
      <rect x="50" y="66" width="100" height="20" rx="3" strokeWidth="2" />
      <rect x="50" y="92" width="100" height="20" rx="3" strokeWidth="2" />
      <circle cx="62" cy="50" r="3" fill="currentColor" stroke="none" />
      <circle cx="62" cy="76" r="3" fill="currentColor" stroke="none" />
      <circle cx="62" cy="102" r="3" fill="currentColor" stroke="none" />
      <line x1="78" y1="50" x2="136" y2="50" strokeWidth="2" opacity="0.5" />
      <line x1="78" y1="76" x2="136" y2="76" strokeWidth="2" opacity="0.5" />
      <line x1="78" y1="102" x2="136" y2="102" strokeWidth="2" opacity="0.5" />
    </svg>
  )
}

/** 35. Glossary — 책 */
export function GlossaryIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <path d="M40 40 L100 50 L160 40 L160 130 L100 140 L40 130 Z" strokeWidth="2.5" />
      <line x1="100" y1="50" x2="100" y2="140" strokeWidth="2.5" />
      <line x1="56" y1="64" x2="92" y2="69" strokeWidth="1.5" opacity="0.5" />
      <line x1="56" y1="78" x2="92" y2="82" strokeWidth="1.5" opacity="0.5" />
      <line x1="56" y1="92" x2="92" y2="96" strokeWidth="1.5" opacity="0.5" />
      <line x1="108" y1="69" x2="144" y2="64" strokeWidth="1.5" opacity="0.5" />
      <line x1="108" y1="82" x2="144" y2="78" strokeWidth="1.5" opacity="0.5" />
      <line x1="108" y1="96" x2="144" y2="92" strokeWidth="1.5" opacity="0.5" />
    </svg>
  )
}

/** 36. Versioning — 세 개의 숫자 마디 */
export function VersioningIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <text x="100" y="100" fontSize="42" fontWeight="800" fill="currentColor" stroke="none" textAnchor="middle">
        29.2.0
      </text>
      <text x="46" y="124" fontSize="9" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle" opacity="0.7">
        major
      </text>
      <text x="100" y="124" fontSize="9" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle" opacity="0.7">
        minor
      </text>
      <text x="148" y="124" fontSize="9" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle" opacity="0.7">
        patch
      </text>
    </svg>
  )
}

/** 37. Breaking changes — 끊긴 사슬 */
export function BreakingChangesIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <ellipse cx="62" cy="80" rx="22" ry="14" strokeWidth="3" />
      <ellipse cx="138" cy="80" rx="22" ry="14" strokeWidth="3" />
      <line x1="84" y1="58" x2="116" y2="102" strokeWidth="3" strokeLinecap="round" />
      <line x1="100" y1="68" x2="92" y2="78" strokeWidth="2" />
      <line x1="100" y1="82" x2="108" y2="92" strokeWidth="2" />
    </svg>
  )
}

/** 38. Patches — 반창고 */
export function PatchesIllustration() {
  return (
    <svg viewBox="0 0 200 160" style={wrap} fill="none" stroke="currentColor">
      <rect
        x="50"
        y="64"
        width="100"
        height="32"
        rx="16"
        strokeWidth="2.5"
        transform="rotate(-20 100 80)"
      />
      <line x1="80" y1="80" x2="120" y2="80" strokeWidth="2" opacity="0.4" transform="rotate(-20 100 80)" />
      {[78, 88, 98, 108, 118].map((x) => (
        <circle key={x} cx={x} cy="80" r="1.6" fill="currentColor" stroke="none" transform="rotate(-20 100 80)" />
      ))}
    </svg>
  )
}
