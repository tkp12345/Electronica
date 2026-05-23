// 페이지 히어로용 일러스트 모음 — 본 사이트 오리지널 SVG.
// 디자인 원칙(Apple 톤):
//  - viewBox 240×160 — 가로형 hero 비율
//  - 큰 기하학적 블록 + 넓은 여백
//  - 본체는 currentColor 의 옅은 fill / 가는 stroke 로 모노톤
//  - 액센트는 단 한 점만 빨강(#ef4444)
//  - 텍스트 라벨 지양 (이미지로만 전달)
import type { CSSProperties } from 'react'

const wrap: CSSProperties = { width: '100%', height: 'auto', display: 'block' }
const ACCENT = '#ef4444'

// 공통 모노 톤 — currentColor 베이스
const muted = { stroke: 'currentColor', strokeOpacity: 0.55 } as const
const softFill = { fill: 'currentColor', fillOpacity: 0.08 } as const
const mediumFill = { fill: 'currentColor', fillOpacity: 0.18 } as const

/** 1. Introduction — 데스크톱 창 안에 콘텐츠 */
export function IntroIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      {/* 윈도우 */}
      <rect x="32" y="28" width="176" height="104" rx="14" {...muted} strokeWidth="2" {...softFill} />
      {/* 타이틀 바 */}
      <rect x="32" y="28" width="176" height="22" rx="14" {...mediumFill} stroke="none" />
      {/* 신호등 (좌측 한 점만 빨강) */}
      <circle cx="48" cy="39" r="3.5" fill={ACCENT} />
      <circle cx="60" cy="39" r="3.5" {...softFill} stroke="none" />
      <circle cx="72" cy="39" r="3.5" {...softFill} stroke="none" />
      {/* 컨텐츠 라인 */}
      <rect x="56" y="72" width="128" height="10" rx="3" {...mediumFill} stroke="none" />
      <rect x="56" y="92" width="92" height="10" rx="3" {...softFill} stroke="none" />
      <rect x="56" y="112" width="60" height="10" rx="3" {...softFill} stroke="none" />
    </svg>
  )
}

/** 2. Why Electron — 단일 코드 → 세 OS */
export function WhyIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      {/* 위쪽 단일 박스 (코드) */}
      <rect x="100" y="20" width="40" height="40" rx="10" {...muted} strokeWidth="2" {...mediumFill} />
      <circle cx="120" cy="40" r="4" fill={ACCENT} />
      {/* 분기선 */}
      <path d="M120 60 V80 M120 80 H40 V100 M120 80 H120 V100 M120 80 H200 V100" {...muted} strokeWidth="1.5" />
      {/* 세 OS 박스 */}
      <rect x="20" y="100" width="40" height="40" rx="10" {...muted} strokeWidth="2" {...softFill} />
      <rect x="100" y="100" width="40" height="40" rx="10" {...muted} strokeWidth="2" {...softFill} />
      <rect x="180" y="100" width="40" height="40" rx="10" {...muted} strokeWidth="2" {...softFill} />
    </svg>
  )
}

/** 3. Process model — 두 블록 사이 IPC */
export function ProcessModelIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="24" y="40" width="80" height="80" rx="14" {...muted} strokeWidth="2" {...softFill} />
      <rect x="136" y="40" width="80" height="80" rx="14" {...muted} strokeWidth="2" {...softFill} />
      {/* IPC 다리 (얇은 막대 두 개) */}
      <rect x="104" y="74" width="32" height="4" rx="2" {...mediumFill} stroke="none" />
      <rect x="104" y="86" width="32" height="4" rx="2" {...mediumFill} stroke="none" />
      {/* 액센트 — 다리 위 작은 점 */}
      <circle cx="120" cy="64" r="3.5" fill={ACCENT} />
    </svg>
  )
}

/** 4. Prerequisites — 체크리스트(rows) */
export function PrerequisitesIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      {[40, 64, 88, 112].map((y, i) => (
        <g key={y}>
          <rect x="36" y={y - 10} width="168" height="20" rx="10" {...muted} strokeWidth="1.6" {...softFill} />
          <circle cx="52" cy={y} r="4.5" fill={i === 0 ? ACCENT : 'currentColor'} fillOpacity={i === 0 ? 1 : 0.4} />
          <rect x="72" y={y - 4} width={[100, 80, 60, 90][i]} height="8" rx="3" {...mediumFill} stroke="none" />
        </g>
      ))}
    </svg>
  )
}

/** 5. First app — Hello World 창 */
export function FirstAppIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="36" y="28" width="168" height="104" rx="14" {...muted} strokeWidth="2" {...softFill} />
      <rect x="36" y="28" width="168" height="22" rx="14" {...mediumFill} stroke="none" />
      <circle cx="52" cy="39" r="3.5" fill={ACCENT} />
      <circle cx="64" cy="39" r="3.5" {...softFill} stroke="none" />
      <circle cx="76" cy="39" r="3.5" {...softFill} stroke="none" />
      {/* 큰 중앙 동그라미 — "안의 콘텐츠" 한 점 강조 */}
      <circle cx="120" cy="92" r="22" {...mediumFill} stroke="none" />
      <circle cx="120" cy="92" r="6" fill={ACCENT} opacity="0.0" />
      <rect x="86" y="120" width="68" height="6" rx="3" {...softFill} stroke="none" />
    </svg>
  )
}

/** 6. Preload — 두 절벽 사이의 다리 */
export function PreloadIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="14" y="50" width="72" height="80" rx="10" {...muted} strokeWidth="2" {...softFill} />
      <rect x="154" y="50" width="72" height="80" rx="10" {...muted} strokeWidth="2" {...softFill} />
      {/* 다리 본체 */}
      <rect x="86" y="84" width="68" height="14" rx="7" {...mediumFill} stroke="none" />
      {/* 액센트 — 다리 가운데 한 점 */}
      <circle cx="120" cy="91" r="4.5" fill={ACCENT} />
    </svg>
  )
}

/** 7. Features — 그리드 카드 6개 */
export function FeaturesIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      {[
        [40, 28],
        [104, 28],
        [168, 28],
        [40, 92],
        [104, 92],
        [168, 92],
      ].map(([x, y], i) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width="40"
          height="40"
          rx="8"
          {...muted}
          strokeWidth="1.6"
          fill="currentColor"
          fillOpacity={i === 0 ? 0 : 0.08}
        />
      ))}
      {/* 첫 카드만 빨강으로 채움 */}
      <rect x="40" y="28" width="40" height="40" rx="8" fill={ACCENT} />
    </svg>
  )
}

/** 8. Packaging — 박스(아이소메트릭) */
export function PackagingIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <path d="M120 28 L196 64 V120 L120 156 L44 120 V64 Z" {...muted} strokeWidth="2" {...softFill} />
      <path d="M44 64 L120 100 L196 64" {...muted} strokeWidth="2" />
      <path d="M120 100 V156" {...muted} strokeWidth="2" />
      {/* 액센트 라벨 — 빨강 띠 */}
      <rect x="92" y="68" width="56" height="10" rx="3" fill={ACCENT} />
    </svg>
  )
}

/** 9. Publishing — 클라우드 + 위 화살표 */
export function PublishingIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <path
        d="M70 80 Q70 56 96 56 Q104 36 128 44 Q150 38 158 60 Q186 60 186 84 Q186 108 162 108 L92 108 Q70 108 70 80 Z"
        {...muted}
        strokeWidth="2"
        {...softFill}
      />
      {/* 위로 가는 화살표 (강조) */}
      <path d="M120 144 V108 M108 124 L120 108 L132 124" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** 10. Security — 방패 */
export function SecurityIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <path
        d="M120 20 L188 40 V92 Q188 128 120 144 Q52 128 52 92 V40 Z"
        {...muted}
        strokeWidth="2"
        {...softFill}
      />
      {/* 가운데 액센트 점 */}
      <circle cx="120" cy="80" r="10" fill={ACCENT} />
    </svg>
  )
}

/** 11. Main process — 큰 원 + 작은 위성 점들 */
export function MainProcessIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <circle cx="120" cy="80" r="36" {...muted} strokeWidth="2" {...softFill} />
      <circle cx="120" cy="80" r="14" {...mediumFill} stroke="none" />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const cx = 120 + Math.cos(rad) * 56
        const cy = 80 + Math.sin(rad) * 56
        return <circle key={deg} cx={cx} cy={cy} r="5" fill={i === 0 ? ACCENT : 'currentColor'} fillOpacity={i === 0 ? 1 : 0.3} />
      })}
    </svg>
  )
}

/** 12. Renderer — 콘텐츠 가득한 창 */
export function RendererProcessIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="36" y="28" width="168" height="104" rx="14" {...muted} strokeWidth="2" {...softFill} />
      <rect x="36" y="28" width="168" height="22" rx="14" {...mediumFill} stroke="none" />
      <circle cx="52" cy="39" r="3.5" fill={ACCENT} />
      {/* 글자 줄 6개 */}
      {[62, 76, 90, 104, 118].map((y, i) => (
        <rect
          key={y}
          x="56"
          y={y}
          width={140 - i * 12}
          height="6"
          rx="3"
          {...softFill}
          stroke="none"
        />
      ))}
    </svg>
  )
}

/** 13. Sandbox — 안에 자물쇠 있는 박스 */
export function SandboxIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="50" y="28" width="140" height="104" rx="14" {...muted} strokeWidth="2" {...softFill} />
      {/* 자물쇠 본체 */}
      <rect x="100" y="74" width="40" height="32" rx="6" {...muted} strokeWidth="2" {...mediumFill} />
      <path d="M108 74 V64 Q108 52 120 52 Q132 52 132 64 V74" {...muted} strokeWidth="2" />
      {/* 자물쇠 키홀 — 빨강 액센트 */}
      <circle cx="120" cy="88" r="4" fill={ACCENT} />
    </svg>
  )
}

/** 14. Context isolation — 두 영역 사이 점선 벽 */
export function ContextIsolationIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="20" y="36" width="86" height="88" rx="14" {...muted} strokeWidth="2" {...softFill} />
      <rect x="134" y="36" width="86" height="88" rx="14" {...muted} strokeWidth="2" {...softFill} />
      {/* 점선 벽 */}
      <line x1="120" y1="28" x2="120" y2="132" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="3 5" />
      {/* 작은 통로(붉은 점) */}
      <circle cx="120" cy="80" r="5" fill={ACCENT} />
    </svg>
  )
}

/** 15. Performance — 게이지 호 */
export function PerformanceIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <path d="M48 124 A72 72 0 0 1 192 124" {...muted} strokeWidth="6" strokeLinecap="round" />
      <path d="M48 124 A72 72 0 0 1 150 60" stroke={ACCENT} strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="120" cy="124" r="6" fill={ACCENT} />
    </svg>
  )
}

/** 16. Offline — 사선으로 그어진 클라우드 */
export function OfflineIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <path
        d="M70 80 Q70 56 96 56 Q104 36 128 44 Q150 38 158 60 Q186 60 186 84 Q186 108 162 108 L92 108 Q70 108 70 80 Z"
        {...muted}
        strokeWidth="2"
        {...softFill}
      />
      <line x1="50" y1="40" x2="200" y2="130" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

/** 17. Accessibility — 동심원 */
export function AccessibilityIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <circle cx="120" cy="80" r="56" {...muted} strokeWidth="1.6" strokeDasharray="3 5" />
      <circle cx="120" cy="80" r="36" {...muted} strokeWidth="2" {...softFill} />
      <circle cx="120" cy="80" r="14" fill={ACCENT} />
    </svg>
  )
}

/** 18. Examples — 카드 스택 */
export function ExamplesIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="56" y="40" width="120" height="78" rx="12" {...muted} strokeWidth="2" {...softFill} transform="rotate(-6 120 80)" />
      <rect x="56" y="40" width="120" height="78" rx="12" {...muted} strokeWidth="2" {...mediumFill} transform="rotate(2 120 80)" />
      <rect x="56" y="40" width="120" height="78" rx="12" fill={ACCENT} />
      <rect x="72" y="64" width="60" height="6" rx="3" fill="white" fillOpacity="0.7" />
      <rect x="72" y="80" width="80" height="6" rx="3" fill="white" fillOpacity="0.5" />
    </svg>
  )
}

/** 19. Debugging — 돋보기 */
export function DebuggingIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <circle cx="100" cy="74" r="40" {...muted} strokeWidth="3" {...softFill} />
      <line x1="130" y1="104" x2="180" y2="140" stroke="currentColor" strokeOpacity="0.7" strokeWidth="6" strokeLinecap="round" />
      <circle cx="100" cy="74" r="6" fill={ACCENT} />
    </svg>
  )
}

/** 20. Boilerplates — 청사진 격자 */
export function BoilerplateIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="36" y="28" width="168" height="104" rx="10" {...muted} strokeWidth="2" {...softFill} />
      {[52, 76, 100].map((y) => (
        <line key={`h${y}`} x1="36" y1={y} x2="204" y2={y} stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      ))}
      {[80, 120, 160].map((x) => (
        <line key={`v${x}`} x1={x} y1="28" x2={x} y2="132" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      ))}
      <rect x="80" y="52" width="40" height="24" rx="4" fill={ACCENT} />
    </svg>
  )
}

/** 21. DevTools extension — 퍼즐 한 조각 */
export function ExtensionIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <path
        d="M70 50 H106 V40 Q106 28 120 28 Q134 28 134 40 V50 H170 V92 H160 Q146 92 146 106 Q146 120 160 120 H170 V132 H70 Z"
        {...muted}
        strokeWidth="2"
        {...softFill}
      />
      <circle cx="170" cy="106" r="6" fill={ACCENT} />
    </svg>
  )
}

/** 22. Drag & drop — 카드 + 화살표 */
export function DragDropIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="40" y="36" width="80" height="88" rx="10" {...muted} strokeWidth="2" {...softFill} />
      <rect x="56" y="60" width="48" height="6" rx="3" {...mediumFill} stroke="none" />
      <rect x="56" y="76" width="40" height="6" rx="3" {...softFill} stroke="none" />
      {/* 화살표 — 빨강 액센트 */}
      <path d="M128 80 H188 M170 60 L188 80 L170 100" stroke={ACCENT} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

/** 23. Notification — 둥근 알림 카드 */
export function NotificationIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="48" y="44" width="144" height="72" rx="14" {...muted} strokeWidth="2" {...softFill} />
      <circle cx="76" cy="80" r="14" {...mediumFill} stroke="none" />
      <rect x="100" y="68" width="76" height="8" rx="3" {...mediumFill} stroke="none" />
      <rect x="100" y="84" width="56" height="6" rx="3" {...softFill} stroke="none" />
      {/* 상단 우측 빨강 닷지 */}
      <circle cx="184" cy="48" r="7" fill={ACCENT} />
    </svg>
  )
}

/** 24. Online/Offline signal — 4 단계 막대 */
export function SignalIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      {[
        { x: 60, h: 28 },
        { x: 100, h: 56 },
        { x: 140, h: 84 },
        { x: 180, h: 112 },
      ].map(({ x, h }, i) => (
        <rect
          key={x}
          x={x - 12}
          y={132 - h}
          width="24"
          height={h}
          rx="6"
          {...(i === 3
            ? { fill: ACCENT }
            : { fill: 'currentColor', fillOpacity: 0.15 + i * 0.07 })}
          stroke="none"
        />
      ))}
    </svg>
  )
}

/** 25. REPL — 터미널 라인들 */
export function ReplIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="36" y="28" width="168" height="104" rx="12" {...muted} strokeWidth="2" {...softFill} />
      <rect x="36" y="28" width="168" height="20" rx="12" {...mediumFill} stroke="none" />
      <circle cx="52" cy="38" r="3.5" fill={ACCENT} />
      {/* 프롬프트 마크 + 라인 */}
      {[64, 88, 112].map((y, i) => (
        <g key={y}>
          <rect x="52" y={y - 6} width="8" height="12" rx="2" fill={i === 2 ? ACCENT : 'currentColor'} fillOpacity={i === 2 ? 1 : 0.4} />
          <rect x="68" y={y - 4} width={[100, 80, 40][i]} height="8" rx="3" {...softFill} stroke="none" />
        </g>
      ))}
    </svg>
  )
}

/** 26. Native module — 칩 */
export function NativeModuleIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="76" y="36" width="88" height="88" rx="8" {...muted} strokeWidth="2" {...softFill} />
      <rect x="92" y="52" width="56" height="56" rx="6" {...mediumFill} stroke="none" />
      {/* 핀들 */}
      {[52, 70, 88, 106].map((y) => (
        <rect key={`l${y}`} x="56" y={y - 3} width="20" height="6" rx="2" {...softFill} stroke="none" />
      ))}
      {[52, 70, 88, 106].map((y) => (
        <rect key={`r${y}`} x="164" y={y - 3} width="20" height="6" rx="2" {...softFill} stroke="none" />
      ))}
      {[88, 106, 124].map((x) => (
        <rect key={`t${x}`} x={x - 3} y="20" width="6" height="16" rx="2" {...softFill} stroke="none" />
      ))}
      {[88, 106, 124].map((x) => (
        <rect key={`b${x}`} x={x - 3} y="124" width="6" height="16" rx="2" {...softFill} stroke="none" />
      ))}
      {/* 액센트 칩 중심 */}
      <circle cx="120" cy="80" r="6" fill={ACCENT} />
    </svg>
  )
}

/** 27. Code signing — 인증서 + 봉인 */
export function CodeSigningIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="46" y="28" width="124" height="104" rx="10" {...muted} strokeWidth="2" {...softFill} />
      <rect x="62" y="48" width="76" height="8" rx="3" {...mediumFill} stroke="none" />
      <rect x="62" y="64" width="64" height="6" rx="3" {...softFill} stroke="none" />
      <rect x="62" y="78" width="56" height="6" rx="3" {...softFill} stroke="none" />
      {/* 봉인 — 빨강 원형 */}
      <circle cx="186" cy="120" r="22" fill={ACCENT} />
      <path d="M176 120 L184 128 L196 114" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

/** 28. Mac App Store — 큰 둥근 사각 */
export function MasIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="76" y="28" width="88" height="104" rx="22" {...muted} strokeWidth="2" {...mediumFill} />
      <circle cx="120" cy="80" r="22" fill={ACCENT} />
    </svg>
  )
}

/** 29. Snapcraft — 라벨 박스 */
export function SnapcraftIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="44" y="46" width="152" height="86" rx="10" {...muted} strokeWidth="2" {...softFill} />
      <rect x="64" y="30" width="112" height="22" rx="6" fill={ACCENT} />
      <rect x="64" y="76" width="112" height="8" rx="3" {...mediumFill} stroke="none" />
      <rect x="64" y="92" width="92" height="6" rx="3" {...softFill} stroke="none" />
      <rect x="64" y="106" width="100" height="6" rx="3" {...softFill} stroke="none" />
    </svg>
  )
}

/** 30. Windows Store — 4 타일 */
export function WindowsStoreIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="72" y="32" width="42" height="42" {...mediumFill} stroke="none" />
      <rect x="126" y="32" width="42" height="42" fill="currentColor" fillOpacity="0.28" stroke="none" />
      <rect x="72" y="86" width="42" height="42" fill="currentColor" fillOpacity="0.28" stroke="none" />
      <rect x="126" y="86" width="42" height="42" fill={ACCENT} />
    </svg>
  )
}

/** 31. Auto-update — 회전 화살표 */
export function AutoUpdateIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <path
        d="M120 36 A44 44 0 1 1 76 80"
        {...muted}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M120 22 L120 50 L96 36 Z" fill={ACCENT} />
    </svg>
  )
}

/** 32. DevTools — 렌치 */
export function DevToolsIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <path
        d="M88 60 A20 20 0 1 0 116 88 L162 134 L182 114 L136 68 A20 20 0 0 0 100 50 L112 62 L100 74 L88 60 Z"
        {...muted}
        strokeWidth="2"
        {...softFill}
      />
      <circle cx="172" cy="124" r="5" fill={ACCENT} />
    </svg>
  )
}

/** 33. Profiling — 라인 차트 */
export function ProfilingIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <line x1="36" y1="128" x2="204" y2="128" {...muted} strokeWidth="1.6" />
      <line x1="36" y1="128" x2="36" y2="36" {...muted} strokeWidth="1.6" />
      <path d="M36 110 L72 92 L104 100 L136 64 L168 76 L204 44"
        stroke={ACCENT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="136" cy="64" r="5" fill={ACCENT} />
    </svg>
  )
}

/** 34. Headless CI — 모니터 없는 서버 랙 */
export function HeadlessIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      {[40, 72, 104].map((y, i) => (
        <g key={y}>
          <rect x="48" y={y} width="144" height="22" rx="5" {...muted} strokeWidth="1.6" {...softFill} />
          <circle cx="62" cy={y + 11} r="3.5" fill={i === 0 ? ACCENT : 'currentColor'} fillOpacity={i === 0 ? 1 : 0.4} />
          <rect x="76" y={y + 7} width="100" height="8" rx="3" {...mediumFill} stroke="none" />
        </g>
      ))}
    </svg>
  )
}

/** 35. Glossary — 펼친 책 */
export function GlossaryIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <path d="M40 44 L120 56 L200 44 V128 L120 140 L40 128 Z" {...muted} strokeWidth="2" {...softFill} />
      <line x1="120" y1="56" x2="120" y2="140" {...muted} strokeWidth="2" />
      {[70, 84, 98].map((y) => (
        <line key={`l${y}`} x1="56" y1={y} x2="106" y2={y + 1} stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.4" />
      ))}
      {[70, 84, 98].map((y) => (
        <line key={`r${y}`} x1="134" y1={y + 1} x2="184" y2={y} stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.4" />
      ))}
      {/* 책갈피 */}
      <rect x="148" y="40" width="8" height="40" fill={ACCENT} />
    </svg>
  )
}

/** 36. Versioning — 3개 점 */
export function VersioningIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <circle cx="68" cy="80" r="20" {...mediumFill} stroke="none" />
      <circle cx="120" cy="80" r="20" {...mediumFill} stroke="none" />
      <circle cx="172" cy="80" r="20" fill={ACCENT} />
      <line x1="36" y1="80" x2="204" y2="80" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
    </svg>
  )
}

/** 37. Breaking changes — 끊긴 막대 */
export function BreakingChangesIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <rect x="32" y="68" width="80" height="24" rx="12" {...muted} strokeWidth="2" {...mediumFill} />
      <rect x="128" y="68" width="80" height="24" rx="12" {...muted} strokeWidth="2" {...mediumFill} />
      <path d="M112 56 L128 104" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

/** 38. Patches — 둥근 반창고 */
export function PatchesIllustration() {
  return (
    <svg viewBox="0 0 240 160" style={wrap} fill="none">
      <g transform="rotate(-22 120 80)">
        <rect x="50" y="62" width="140" height="36" rx="18" {...muted} strokeWidth="2" {...softFill} />
        <rect x="106" y="62" width="28" height="36" {...mediumFill} stroke="none" />
        {[76, 90, 104, 118, 132, 146, 160].map((x) => (
          <circle key={`a-${x}`} cx={x} cy="71" r="2" {...mediumFill} stroke="none" />
        ))}
        {[76, 90, 104, 118, 132, 146, 160].map((x) => (
          <circle key={`b-${x}`} cx={x} cy="89" r="2" {...mediumFill} stroke="none" />
        ))}
      </g>
      <circle cx="120" cy="80" r="5" fill={ACCENT} />
    </svg>
  )
}
