'use client'

// 페이지 히어로용 일러스트 모음 — 본 사이트 오리지널 SVG + 개념 시연 모션.
//
// 디자인 원칙(Apple 톤):
//  - viewBox 240×160 — 가로형 hero 비율
//  - 큰 기하학적 블록 + 넓은 여백, 본체는 currentColor 모노톤
//  - 액센트는 단 한 점만 빨강(var(--hero-accent), 다크에서 밝게 + 글로우)
//
// 모션 원칙(heroMotion.tsx 참고):
//  - 각 SVG 기본 속성 = "애니메이션이 끝난 완성 프레임" (reduced-motion 시 그대로 정지)
//  - 움직임은 rest/hover variant 로만 정의 → 부모 HeroMotionSvg 가 전파(스크롤 자동재생/호버 강조)
//  - 각 일러스트는 "그 페이지가 가르치는 개념"을 핵심 1~2요소로만 시연(과하지 않게)
import type { CSSProperties } from 'react'
import { HeroMotionSvg, motion, loop, pulse, ACCENT, GLOW } from './motion/heroMotion'

// 공통 모노 톤 — currentColor 베이스
const muted = { stroke: 'currentColor', strokeOpacity: 0.55 } as const
const softFill = { fill: 'currentColor', fillOpacity: 0.08 } as const
const mediumFill = { fill: 'currentColor', fillOpacity: 0.18 } as const

// 변형(scale/rotate) 시 회전·확대 중심을 잡아주는 헬퍼.
//  - fillPivot: 요소 자기 bbox 기준 (점 펄스 등)
//  - viewPivot: viewBox 좌표 기준 (특정 점을 중심으로 그룹 회전 등)
const fillPivot = (origin: string): CSSProperties => ({
  transformBox: 'fill-box',
  transformOrigin: origin,
})
const selfPivot = fillPivot('center')
const viewPivot = (x: number, y: number): CSSProperties => ({
  transformBox: 'view-box',
  transformOrigin: `${x}px ${y}px`,
})

// 액센트(빨강) 점에 공통으로 붙이는 스타일: 자기중심 + 글로우
const accentDot: CSSProperties = { ...selfPivot, ...GLOW }

/** 1. Introduction — 데스크톱 창 / 콘텐츠가 한 줄씩 차오름 */
export function IntroIllustration() {
  return (
    <HeroMotionSvg>
      {/* 윈도우 */}
      <rect x="32" y="28" width="176" height="104" rx="14" {...muted} strokeWidth="2" {...softFill} />
      <rect x="32" y="28" width="176" height="22" rx="14" {...mediumFill} stroke="none" />
      {/* 신호등 (좌측 한 점만 빨강 — 펄스) */}
      <motion.circle cx="48" cy="39" r="3.5" fill={ACCENT} style={accentDot} variants={pulse(2.2)} />
      <circle cx="60" cy="39" r="3.5" {...softFill} stroke="none" />
      <circle cx="72" cy="39" r="3.5" {...softFill} stroke="none" />
      {/* 컨텐츠 라인 — 좌→우로 차오르며 "내용이 로드되는" 느낌 */}
      <motion.rect x="56" y="72" width="128" height="10" rx="3" {...mediumFill} stroke="none"
        variants={loop({ width: [0, 128] }, 1.8, { repeatType: 'reverse' })} />
      <motion.rect x="56" y="92" width="92" height="10" rx="3" {...softFill} stroke="none"
        variants={loop({ width: [0, 92] }, 1.8, { repeatType: 'reverse', delay: 0.2 })} />
      <motion.rect x="56" y="112" width="60" height="10" rx="3" {...softFill} stroke="none"
        variants={loop({ width: [0, 60] }, 1.8, { repeatType: 'reverse', delay: 0.4 })} />
    </HeroMotionSvg>
  )
}

/** 2. Why Electron — 단일 코드 → 펄스가 분기선 따라 세 OS 로 도달 */
export function WhyIllustration() {
  return (
    <HeroMotionSvg>
      {/* 위쪽 단일 박스 (코드) — 살짝 박동 */}
      <motion.rect x="100" y="20" width="40" height="40" rx="10" {...muted} strokeWidth="2" {...mediumFill}
        style={selfPivot} variants={loop({ scale: [1, 1.06, 1] }, 2.4)} />
      <motion.circle cx="120" cy="40" r="4" fill={ACCENT} style={accentDot} variants={pulse(2.4)} />
      {/* 분기선 — 흐르듯 그려짐 */}
      <motion.path d="M120 60 V80 M120 80 H40 V100 M120 80 H120 V100 M120 80 H200 V100"
        {...muted} strokeWidth="1.5"
        variants={loop({ pathLength: [0, 1] }, 2.4, { repeatType: 'reverse' })} />
      {/* 세 OS 박스 — 신호가 순차 도달하며 점등 */}
      <motion.rect x="20" y="100" width="40" height="40" rx="10" {...muted} strokeWidth="2" {...softFill}
        variants={loop({ fillOpacity: [0.06, 0.26, 0.06] }, 2.4, { delay: 0.2 })} />
      <motion.rect x="100" y="100" width="40" height="40" rx="10" {...muted} strokeWidth="2" {...softFill}
        variants={loop({ fillOpacity: [0.06, 0.26, 0.06] }, 2.4, { delay: 0.4 })} />
      <motion.rect x="180" y="100" width="40" height="40" rx="10" {...muted} strokeWidth="2" {...softFill}
        variants={loop({ fillOpacity: [0.06, 0.26, 0.06] }, 2.4, { delay: 0.6 })} />
    </HeroMotionSvg>
  )
}

/** 3. Process model — 패킷이 IPC 막대 위 Main↔Renderer 왕복 */
export function ProcessModelIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="24" y="40" width="80" height="80" rx="14" {...muted} strokeWidth="2" {...softFill} />
      <rect x="136" y="40" width="80" height="80" rx="14" {...muted} strokeWidth="2" {...softFill} />
      {/* IPC 다리 (얇은 막대 두 개) */}
      <rect x="104" y="74" width="32" height="4" rx="2" {...mediumFill} stroke="none" />
      <rect x="104" y="86" width="32" height="4" rx="2" {...mediumFill} stroke="none" />
      {/* 액센트 — 다리 위 점 펄스 */}
      <motion.circle cx="120" cy="64" r="3.5" fill={ACCENT} style={accentDot} variants={pulse(2.2)} />
      {/* 패킷 — 두 프로세스 사이를 왕복(IPC) */}
      <motion.circle cy="80" r="3.5" fill={ACCENT} style={GLOW}
        variants={loop({ cx: [104, 136, 104] }, 2.2)} />
    </HeroMotionSvg>
  )
}

/** 4. Prerequisites — 체크 진행 하이라이트가 위에서부터 내려감 */
export function PrerequisitesIllustration() {
  return (
    <HeroMotionSvg>
      {[40, 64, 88, 112].map((y, i) => (
        <g key={y}>
          <rect x="36" y={y - 10} width="168" height="20" rx="10" {...muted} strokeWidth="1.6" {...softFill} />
          <circle cx="52" cy={y} r="4.5" fill="currentColor" fillOpacity={0.35} />
          <rect x="72" y={y - 4} width={[100, 80, 60, 90][i]} height="8" rx="3" {...mediumFill} stroke="none" />
        </g>
      ))}
      {/* 진행 하이라이트 — 각 행을 차례로 체크 */}
      <motion.circle cx="52" r="5" fill={ACCENT} style={GLOW}
        variants={loop({ cy: [40, 64, 88, 112, 40] }, 3.6, { ease: 'easeInOut' })} />
    </HeroMotionSvg>
  )
}

/** 5. First app — 창 안에 "Hello World" 한 점이 톡 나타남 */
export function FirstAppIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="36" y="28" width="168" height="104" rx="14" {...muted} strokeWidth="2" {...softFill} />
      <rect x="36" y="28" width="168" height="22" rx="14" {...mediumFill} stroke="none" />
      <motion.circle cx="52" cy="39" r="3.5" fill={ACCENT} style={accentDot} variants={pulse(2.2)} />
      <circle cx="64" cy="39" r="3.5" {...softFill} stroke="none" />
      <circle cx="76" cy="39" r="3.5" {...softFill} stroke="none" />
      {/* 큰 중앙 동그라미 — "안의 콘텐츠" */}
      <circle cx="120" cy="92" r="22" {...mediumFill} stroke="none" />
      {/* 빨강 한 점이 팝 — 첫 앱이 떠오르는 순간 */}
      <motion.circle cx="120" cy="92" r="6" fill={ACCENT} style={accentDot}
        variants={loop({ scale: [0, 1.15, 1], opacity: [0, 1, 1] }, 2.6, { repeatType: 'reverse', repeatDelay: 0.4 })} />
      <rect x="86" y="120" width="68" height="6" rx="3" {...softFill} stroke="none" />
    </HeroMotionSvg>
  )
}

/** 6. Preload — 점 하나가 다리를 건너간다 */
export function PreloadIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="14" y="50" width="72" height="80" rx="10" {...muted} strokeWidth="2" {...softFill} />
      <rect x="154" y="50" width="72" height="80" rx="10" {...muted} strokeWidth="2" {...softFill} />
      <rect x="86" y="84" width="68" height="14" rx="7" {...mediumFill} stroke="none" />
      {/* 액센트 — 다리를 건너는 점 */}
      <motion.circle cy="91" r="4.5" fill={ACCENT} style={GLOW}
        variants={loop({ cx: [92, 148, 92] }, 2.4)} />
    </HeroMotionSvg>
  )
}

/** 7. Features — 하이라이트가 6개 카드를 옮겨다닌다 */
export function FeaturesIllustration() {
  return (
    <HeroMotionSvg>
      {[
        [40, 28],
        [104, 28],
        [168, 28],
        [40, 92],
        [104, 92],
        [168, 92],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="40" height="40" rx="8" {...muted} strokeWidth="1.6" {...softFill} />
      ))}
      {/* 빨강 하이라이트가 카드 사이를 순회 */}
      <motion.rect x="40" y="28" width="40" height="40" rx="8" fill={ACCENT} style={GLOW}
        variants={loop(
          { x: [40, 104, 168, 168, 104, 40, 40], y: [28, 28, 28, 92, 92, 92, 28] },
          4.8,
          { ease: 'easeInOut' },
        )} />
    </HeroMotionSvg>
  )
}

/** 8. Packaging — 박스가 접히며 조립, 라벨이 안착 */
export function PackagingIllustration() {
  return (
    <HeroMotionSvg>
      <path d="M120 28 L196 64 V120 L120 156 L44 120 V64 Z" {...muted} strokeWidth="2" {...softFill} />
      {/* 윗면 접힘선 — 흐르듯 그려짐(조립) */}
      <motion.path d="M44 64 L120 100 L196 64" {...muted} strokeWidth="2"
        variants={loop({ pathLength: [0, 1] }, 2.6, { repeatType: 'reverse' })} />
      <path d="M120 100 V156" {...muted} strokeWidth="2" />
      {/* 액센트 라벨 — 가운데서 펼쳐지듯 */}
      <motion.rect x="92" y="68" width="56" height="10" rx="3" fill={ACCENT} style={{ ...fillPivot('center'), ...GLOW }}
        variants={loop({ scaleX: [0.2, 1, 0.2] }, 2.6, { repeatType: 'reverse' })} />
    </HeroMotionSvg>
  )
}

/** 9. Publishing — 화살표가 위로 둥실(업로드) */
export function PublishingIllustration() {
  return (
    <HeroMotionSvg>
      <path
        d="M70 80 Q70 56 96 56 Q104 36 128 44 Q150 38 158 60 Q186 60 186 84 Q186 108 162 108 L92 108 Q70 108 70 80 Z"
        {...muted}
        strokeWidth="2"
        {...softFill}
      />
      {/* 위로 가는 화살표 — float 반복 */}
      <motion.path d="M120 144 V108 M108 124 L120 108 L132 124"
        stroke={ACCENT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={GLOW}
        variants={loop({ y: [0, -7, 0], opacity: [0.7, 1, 0.7] }, 1.8)} />
    </HeroMotionSvg>
  )
}

/** 10. Security — 방패 외곽이 그려지고 중심이 박동 */
export function SecurityIllustration() {
  return (
    <HeroMotionSvg>
      <motion.path d="M120 20 L188 40 V92 Q188 128 120 144 Q52 128 52 92 V40 Z"
        {...muted} strokeWidth="2" {...softFill}
        variants={loop({ pathLength: [0, 1] }, 3, { repeatType: 'reverse' })} />
      {/* 가운데 액센트 — 글로우 박동 */}
      <motion.circle cx="120" cy="80" r="10" fill={ACCENT} style={accentDot} variants={pulse(2.2)} />
    </HeroMotionSvg>
  )
}

/** 11. Main process — 위성 점들이 중심을 공전 */
export function MainProcessIllustration() {
  return (
    <HeroMotionSvg>
      <circle cx="120" cy="80" r="36" {...muted} strokeWidth="2" {...softFill} />
      <circle cx="120" cy="80" r="14" {...mediumFill} stroke="none" />
      {/* 위성 그룹이 중심(120,80)을 천천히 공전 */}
      <motion.g style={viewPivot(120, 80)} variants={loop({ rotate: 360 }, 9, { ease: 'linear', hoverDur: 4 })}>
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          const cx = 120 + Math.cos(rad) * 56
          const cy = 80 + Math.sin(rad) * 56
          return (
            <circle key={deg} cx={cx} cy={cy} r="5"
              fill={i === 0 ? ACCENT : 'currentColor'} fillOpacity={i === 0 ? 1 : 0.3}
              style={i === 0 ? GLOW : undefined} />
          )
        })}
      </motion.g>
    </HeroMotionSvg>
  )
}

/** 12. Renderer — 텍스트 줄이 로딩되듯 깜빡 */
export function RendererProcessIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="36" y="28" width="168" height="104" rx="14" {...muted} strokeWidth="2" {...softFill} />
      <rect x="36" y="28" width="168" height="22" rx="14" {...mediumFill} stroke="none" />
      <motion.circle cx="52" cy="39" r="3.5" fill={ACCENT} style={accentDot} variants={pulse(2.2)} />
      {/* 글자 줄 — 시머(opacity 파동) */}
      {[62, 76, 90, 104, 118].map((y, i) => (
        <motion.rect key={y} x="56" y={y} width={140 - i * 12} height="6" rx="3" {...softFill} stroke="none"
          variants={loop({ opacity: [0.35, 0.9, 0.35] }, 1.8, { delay: i * 0.18 })} />
      ))}
    </HeroMotionSvg>
  )
}

/** 13. Sandbox — 자물쇠 고리가 그려지고 키홀이 박동 */
export function SandboxIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="50" y="28" width="140" height="104" rx="14" {...muted} strokeWidth="2" {...softFill} />
      <rect x="100" y="74" width="40" height="32" rx="6" {...muted} strokeWidth="2" {...mediumFill} />
      {/* 자물쇠 고리 — 채워지듯 그려짐 */}
      <motion.path d="M108 74 V64 Q108 52 120 52 Q132 52 132 64 V74" {...muted} strokeWidth="2"
        variants={loop({ pathLength: [0.3, 1, 0.3] }, 2.6, { repeatType: 'reverse' })} />
      {/* 키홀 — 액센트 박동 */}
      <motion.circle cx="120" cy="88" r="4" fill={ACCENT} style={accentDot} variants={pulse(2)} />
    </HeroMotionSvg>
  )
}

/** 14. Context isolation — 점선 벽이 흐르고, 침입 점이 벽에 막혀 튕김 */
export function ContextIsolationIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="20" y="36" width="86" height="88" rx="14" {...muted} strokeWidth="2" {...softFill} />
      <rect x="134" y="36" width="86" height="88" rx="14" {...muted} strokeWidth="2" {...softFill} />
      {/* 점선 벽 — dash march */}
      <motion.line x1="120" y1="28" x2="120" y2="132" stroke="currentColor" strokeOpacity="0.5"
        strokeWidth="2" strokeDasharray="3 5"
        variants={loop({ strokeDashoffset: [0, -16] }, 1.2, { ease: 'linear', repeatType: 'loop', hoverDur: 0.6 })} />
      {/* 침입 점 — 좌측에서 다가오다 벽에 막혀 되돌아감 */}
      <motion.circle cy="80" r="4" fill="currentColor" fillOpacity="0.5"
        variants={loop({ cx: [60, 110, 60] }, 1.8, { ease: 'easeOut' })} />
      {/* 허용된 통로 — 빨강 점 박동 */}
      <motion.circle cx="120" cy="80" r="5" fill={ACCENT} style={accentDot} variants={pulse(2)} />
    </HeroMotionSvg>
  )
}

/** 15. Performance — 게이지 빨강 호가 채워졌다 줄었다 */
export function PerformanceIllustration() {
  return (
    <HeroMotionSvg>
      <path d="M48 124 A72 72 0 0 1 192 124" {...muted} strokeWidth="6" strokeLinecap="round" />
      {/* 빨강 호 — 0→현재까지 sweep */}
      <motion.path d="M48 124 A72 72 0 0 1 150 60" stroke={ACCENT} strokeWidth="6" strokeLinecap="round" fill="none"
        style={GLOW}
        variants={loop({ pathLength: [0.15, 1, 0.15] }, 2.6, { repeatType: 'reverse' })} />
      <motion.circle cx="120" cy="124" r="6" fill={ACCENT} style={accentDot} variants={pulse(2.6)} />
    </HeroMotionSvg>
  )
}

/** 16. Offline — 사선이 그어지며 클라우드가 흐려짐 */
export function OfflineIllustration() {
  return (
    <HeroMotionSvg>
      <motion.path
        d="M70 80 Q70 56 96 56 Q104 36 128 44 Q150 38 158 60 Q186 60 186 84 Q186 108 162 108 L92 108 Q70 108 70 80 Z"
        {...muted} strokeWidth="2" {...softFill}
        variants={loop({ opacity: [1, 0.4, 1] }, 2.4)} />
      {/* 연결 끊김 사선 */}
      <motion.line x1="50" y1="40" x2="200" y2="130" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" style={GLOW}
        variants={loop({ pathLength: [0, 1] }, 2.4, { repeatType: 'reverse' })} />
    </HeroMotionSvg>
  )
}

/** 17. Accessibility — 외곽 점선링 회전 + 동심원 리플 */
export function AccessibilityIllustration() {
  return (
    <HeroMotionSvg>
      {/* 리플 — 바깥으로 퍼지는 파동 */}
      <motion.circle cx="120" cy="80" r="36" fill="none" stroke={ACCENT} strokeWidth="1.5" style={selfPivot}
        variants={loop({ scale: [1, 1.5], opacity: [0.5, 0] }, 2.4, { repeatType: 'loop' })} />
      {/* 외곽 점선링 — 회전 */}
      <motion.circle cx="120" cy="80" r="56" {...muted} strokeWidth="1.6" strokeDasharray="3 5" style={viewPivot(120, 80)}
        variants={loop({ rotate: 360 }, 14, { ease: 'linear', hoverDur: 6 })} />
      <circle cx="120" cy="80" r="36" {...muted} strokeWidth="2" {...softFill} />
      <motion.circle cx="120" cy="80" r="14" fill={ACCENT} style={accentDot} variants={pulse(2.4)} />
    </HeroMotionSvg>
  )
}

/** 18. Examples — 카드 스택이 숨쉬듯 */
export function ExamplesIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="56" y="40" width="120" height="78" rx="12" {...muted} strokeWidth="2" {...softFill} transform="rotate(-6 120 80)" />
      <rect x="56" y="40" width="120" height="78" rx="12" {...muted} strokeWidth="2" {...mediumFill} transform="rotate(2 120 80)" />
      {/* 맨 위 카드 — 살짝 박동(부각) */}
      <motion.rect x="56" y="40" width="120" height="78" rx="12" fill={ACCENT} style={{ ...fillPivot('center'), ...GLOW }}
        variants={loop({ scale: [1, 1.03, 1] }, 2.8)} />
      <motion.rect x="72" y="64" width="60" height="6" rx="3" fill="white" fillOpacity="0.7"
        variants={loop({ opacity: [0.5, 0.9, 0.5] }, 1.8)} />
      <motion.rect x="72" y="80" width="80" height="6" rx="3" fill="white" fillOpacity="0.5"
        variants={loop({ opacity: [0.35, 0.7, 0.35] }, 1.8, { delay: 0.2 })} />
    </HeroMotionSvg>
  )
}

/** 19. Debugging — 돋보기가 좌우로 스캔 */
export function DebuggingIllustration() {
  return (
    <HeroMotionSvg>
      <motion.g variants={loop({ x: [-8, 8, -8] }, 2.4, { ease: 'easeInOut' })}>
        <circle cx="100" cy="74" r="40" {...muted} strokeWidth="3" {...softFill} />
        <line x1="130" y1="104" x2="180" y2="140" stroke="currentColor" strokeOpacity="0.7" strokeWidth="6" strokeLinecap="round" />
        <motion.circle cx="100" cy="74" r="6" fill={ACCENT} style={accentDot} variants={pulse(1.6)} />
      </motion.g>
    </HeroMotionSvg>
  )
}

/** 20. Boilerplates — 청사진 위에 빨강 블록이 톡 놓임 */
export function BoilerplateIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="36" y="28" width="168" height="104" rx="10" {...muted} strokeWidth="2" {...softFill} />
      {[52, 76, 100].map((y) => (
        <line key={`h${y}`} x1="36" y1={y} x2="204" y2={y} stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      ))}
      {[80, 120, 160].map((x) => (
        <line key={`v${x}`} x1={x} y1="28" x2={x} y2="132" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      ))}
      <motion.rect x="80" y="52" width="40" height="24" rx="4" fill={ACCENT} style={{ ...selfPivot, ...GLOW }}
        variants={loop({ scale: [0.7, 1, 0.7], opacity: [0.7, 1, 0.7] }, 2.4, { repeatType: 'reverse' })} />
    </HeroMotionSvg>
  )
}

/** 21. DevTools extension — 퍼즐 조각이 제자리로 미끄러져 끼워짐 */
export function ExtensionIllustration() {
  return (
    <HeroMotionSvg>
      <motion.path
        d="M70 50 H106 V40 Q106 28 120 28 Q134 28 134 40 V50 H170 V92 H160 Q146 92 146 106 Q146 120 160 120 H170 V132 H70 Z"
        {...muted} strokeWidth="2" {...softFill}
        variants={loop({ x: [6, 0, 6] }, 2.4, { repeatType: 'reverse', ease: 'easeInOut' })} />
      <motion.circle cx="170" cy="106" r="6" fill={ACCENT} style={accentDot} variants={pulse(2)} />
    </HeroMotionSvg>
  )
}

/** 22. Drag & drop — 카드가 화살표 방향으로 미끄러짐 */
export function DragDropIllustration() {
  return (
    <HeroMotionSvg>
      <motion.g variants={loop({ x: [0, 14, 0] }, 2, { ease: 'easeInOut' })}>
        <rect x="40" y="36" width="80" height="88" rx="10" {...muted} strokeWidth="2" {...softFill} />
        <rect x="56" y="60" width="48" height="6" rx="3" {...mediumFill} stroke="none" />
        <rect x="56" y="76" width="40" height="6" rx="3" {...softFill} stroke="none" />
      </motion.g>
      <path d="M128 80 H188 M170 60 L188 80 L170 100" stroke={ACCENT} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" style={GLOW} />
    </HeroMotionSvg>
  )
}

/** 23. Notification — 카드가 내려오고 빨강 뱃지가 톡 */
export function NotificationIllustration() {
  return (
    <HeroMotionSvg>
      <motion.g variants={loop({ y: [-6, 0, -6] }, 2.6, { ease: 'easeInOut' })}>
        <rect x="48" y="44" width="144" height="72" rx="14" {...muted} strokeWidth="2" {...softFill} />
        <circle cx="76" cy="80" r="14" {...mediumFill} stroke="none" />
        <rect x="100" y="68" width="76" height="8" rx="3" {...mediumFill} stroke="none" />
        <rect x="100" y="84" width="56" height="6" rx="3" {...softFill} stroke="none" />
      </motion.g>
      {/* 빨강 뱃지 — 스프링처럼 팝 */}
      <motion.circle cx="184" cy="48" r="7" fill={ACCENT} style={accentDot}
        variants={loop({ scale: [0, 1.25, 1] }, 2.6, { repeatType: 'reverse', repeatDelay: 0.3 })} />
    </HeroMotionSvg>
  )
}

/** 24. Signal — 막대 4개가 순차로 차오름 */
export function SignalIllustration() {
  return (
    <HeroMotionSvg>
      {[
        { x: 60, h: 28 },
        { x: 100, h: 56 },
        { x: 140, h: 84 },
        { x: 180, h: 112 },
      ].map(({ x, h }, i) => (
        <motion.rect key={x} x={x - 12} y={132 - h} width="24" height={h} rx="6"
          {...(i === 3
            ? { fill: ACCENT, style: { ...fillPivot('bottom'), ...GLOW } }
            : { fill: 'currentColor', fillOpacity: 0.15 + i * 0.07, style: fillPivot('bottom') })}
          stroke="none"
          variants={loop({ scaleY: [0.12, 1] }, 1.6, { repeatType: 'reverse', delay: i * 0.18 })} />
      ))}
    </HeroMotionSvg>
  )
}

/** 25. REPL — 라인이 타이핑되고 커서가 깜빡 */
export function ReplIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="36" y="28" width="168" height="104" rx="12" {...muted} strokeWidth="2" {...softFill} />
      <rect x="36" y="28" width="168" height="20" rx="12" {...mediumFill} stroke="none" />
      <motion.circle cx="52" cy="38" r="3.5" fill={ACCENT} style={accentDot} variants={pulse(2.2)} />
      {[64, 88, 112].map((y, i) => {
        const w = [100, 80, 40][i] as number
        return (
          <g key={y}>
            {/* 프롬프트 마크 — 마지막 줄은 빨강 커서로 깜빡 */}
            {i === 2 ? (
              <motion.rect x="52" y={y - 6} width="8" height="12" rx="2" fill={ACCENT} style={GLOW}
                variants={loop({ opacity: [1, 0.15, 1] }, 1, { ease: 'linear' })} />
            ) : (
              <rect x="52" y={y - 6} width="8" height="12" rx="2" fill="currentColor" fillOpacity={0.4} />
            )}
            {/* 출력 라인 — 타이핑되듯 */}
            <motion.rect x="68" y={y - 4} width={w} height="8" rx="3" {...softFill} stroke="none"
              variants={loop({ width: [0, w] }, 1.8, { repeatType: 'reverse', delay: i * 0.25 })} />
          </g>
        )
      })}
    </HeroMotionSvg>
  )
}

/** 26. Native module — 핀이 순차로 깜빡, 중앙 칩이 박동 */
export function NativeModuleIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="76" y="36" width="88" height="88" rx="8" {...muted} strokeWidth="2" {...softFill} />
      <rect x="92" y="52" width="56" height="56" rx="6" {...mediumFill} stroke="none" />
      {/* 왼쪽 핀 그룹 깜빡 */}
      <motion.g variants={loop({ opacity: [0.15, 0.5, 0.15] }, 1.8)}>
        {[52, 70, 88, 106].map((y) => (
          <rect key={`l${y}`} x="56" y={y - 3} width="20" height="6" rx="2" {...softFill} stroke="none" />
        ))}
      </motion.g>
      {/* 오른쪽 핀 그룹 깜빡(역위상) */}
      <motion.g variants={loop({ opacity: [0.15, 0.5, 0.15] }, 1.8, { delay: 0.9 })}>
        {[52, 70, 88, 106].map((y) => (
          <rect key={`r${y}`} x="164" y={y - 3} width="20" height="6" rx="2" {...softFill} stroke="none" />
        ))}
      </motion.g>
      {[88, 106, 124].map((x) => (
        <rect key={`t${x}`} x={x - 3} y="20" width="6" height="16" rx="2" {...softFill} stroke="none" />
      ))}
      {[88, 106, 124].map((x) => (
        <rect key={`b${x}`} x={x - 3} y="124" width="6" height="16" rx="2" {...softFill} stroke="none" />
      ))}
      {/* 액센트 칩 중심 — 박동 */}
      <motion.circle cx="120" cy="80" r="6" fill={ACCENT} style={accentDot} variants={pulse(2)} />
    </HeroMotionSvg>
  )
}

/** 27. Code signing — 봉인이 찍히고 체크가 그려짐 */
export function CodeSigningIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="46" y="28" width="124" height="104" rx="10" {...muted} strokeWidth="2" {...softFill} />
      <rect x="62" y="48" width="76" height="8" rx="3" {...mediumFill} stroke="none" />
      <rect x="62" y="64" width="64" height="6" rx="3" {...softFill} stroke="none" />
      <rect x="62" y="78" width="56" height="6" rx="3" {...softFill} stroke="none" />
      {/* 봉인 — 스프링처럼 찍힘 */}
      <motion.circle cx="186" cy="120" r="22" fill={ACCENT} style={{ ...selfPivot, ...GLOW }}
        variants={loop({ scale: [0, 1.12, 1] }, 2.8, { repeatType: 'reverse', repeatDelay: 0.4 })} />
      <motion.path d="M176 120 L184 128 L196 114" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
        variants={loop({ pathLength: [0, 1] }, 2.8, { repeatType: 'reverse', repeatDelay: 0.4 })} />
    </HeroMotionSvg>
  )
}

/** 28. Mac App Store — 아이콘이 박동 */
export function MasIllustration() {
  return (
    <HeroMotionSvg>
      <motion.rect x="76" y="28" width="88" height="104" rx="22" {...muted} strokeWidth="2" {...mediumFill}
        style={selfPivot} variants={loop({ scale: [1, 1.03, 1] }, 2.8)} />
      <motion.circle cx="120" cy="80" r="22" fill={ACCENT} style={accentDot} variants={pulse(2.4)} />
    </HeroMotionSvg>
  )
}

/** 29. Snapcraft — 라벨이 위에서 박스에 안착 */
export function SnapcraftIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="44" y="46" width="152" height="86" rx="10" {...muted} strokeWidth="2" {...softFill} />
      <motion.rect x="64" y="30" width="112" height="22" rx="6" fill={ACCENT} style={GLOW}
        variants={loop({ y: [-8, 0, -8] }, 2.6, { ease: 'easeInOut' })} />
      <motion.rect x="64" y="76" width="112" height="8" rx="3" {...mediumFill} stroke="none"
        variants={loop({ opacity: [0.5, 1, 0.5] }, 1.8)} />
      <motion.rect x="64" y="92" width="92" height="6" rx="3" {...softFill} stroke="none"
        variants={loop({ opacity: [0.4, 0.9, 0.4] }, 1.8, { delay: 0.2 })} />
      <rect x="64" y="106" width="100" height="6" rx="3" {...softFill} stroke="none" />
    </HeroMotionSvg>
  )
}

/** 30. Windows Store — 4 타일이 순차로 박동, 빨강 타일 부각 */
export function WindowsStoreIllustration() {
  return (
    <HeroMotionSvg>
      <motion.rect x="72" y="32" width="42" height="42" {...mediumFill} stroke="none" style={selfPivot}
        variants={loop({ scale: [0.9, 1, 0.9] }, 2.2, { repeatType: 'reverse', delay: 0 })} />
      <motion.rect x="126" y="32" width="42" height="42" fill="currentColor" fillOpacity="0.28" stroke="none" style={selfPivot}
        variants={loop({ scale: [0.9, 1, 0.9] }, 2.2, { repeatType: 'reverse', delay: 0.15 })} />
      <motion.rect x="72" y="86" width="42" height="42" fill="currentColor" fillOpacity="0.28" stroke="none" style={selfPivot}
        variants={loop({ scale: [0.9, 1, 0.9] }, 2.2, { repeatType: 'reverse', delay: 0.3 })} />
      <motion.rect x="126" y="86" width="42" height="42" fill={ACCENT} style={{ ...selfPivot, ...GLOW }}
        variants={loop({ scale: [0.9, 1, 0.9] }, 2.2, { repeatType: 'reverse', delay: 0.45 })} />
    </HeroMotionSvg>
  )
}

/** 31. Auto-update — 화살표가 계속 회전(업데이트) */
export function AutoUpdateIllustration() {
  return (
    <HeroMotionSvg>
      <motion.g style={viewPivot(120, 80)} variants={loop({ rotate: 360 }, 3, { ease: 'linear', hoverDur: 1.4 })}>
        <path d="M120 36 A44 44 0 1 1 76 80" {...muted} strokeWidth="6" strokeLinecap="round" />
        <path d="M120 22 L120 50 L96 36 Z" fill={ACCENT} style={GLOW} />
      </motion.g>
    </HeroMotionSvg>
  )
}

/** 32. DevTools — 렌치가 조이듯 좌우로 비틀림 */
export function DevToolsIllustration() {
  return (
    <HeroMotionSvg>
      <motion.path
        d="M88 60 A20 20 0 1 0 116 88 L162 134 L182 114 L136 68 A20 20 0 0 0 100 50 L112 62 L100 74 L88 60 Z"
        {...muted} strokeWidth="2" {...softFill}
        style={viewPivot(135, 95)}
        variants={loop({ rotate: [-7, 7, -7] }, 2.4, { ease: 'easeInOut' })} />
      <motion.circle cx="172" cy="124" r="5" fill={ACCENT} style={accentDot} variants={pulse(2)} />
    </HeroMotionSvg>
  )
}

/** 33. Profiling — 라인 차트가 좌→우로 그려지고 정점이 박동 */
export function ProfilingIllustration() {
  return (
    <HeroMotionSvg>
      <line x1="36" y1="128" x2="204" y2="128" {...muted} strokeWidth="1.6" />
      <line x1="36" y1="128" x2="36" y2="36" {...muted} strokeWidth="1.6" />
      <motion.path d="M36 110 L72 92 L104 100 L136 64 L168 76 L204 44"
        stroke={ACCENT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" style={GLOW}
        variants={loop({ pathLength: [0, 1] }, 2.6, { repeatType: 'reverse' })} />
      <motion.circle cx="136" cy="64" r="5" fill={ACCENT} style={accentDot} variants={pulse(2)} />
    </HeroMotionSvg>
  )
}

/** 34. Headless CI — 서버 랙 상태 점이 순차로 깜빡(running) */
export function HeadlessIllustration() {
  return (
    <HeroMotionSvg>
      {[40, 72, 104].map((y, i) => (
        <g key={y}>
          <rect x="48" y={y} width="144" height="22" rx="5" {...muted} strokeWidth="1.6" {...softFill} />
          <motion.circle cx="62" cy={y + 11} r="3.5"
            fill={i === 0 ? ACCENT : 'currentColor'} fillOpacity={i === 0 ? 1 : 0.4}
            style={i === 0 ? accentDot : selfPivot}
            variants={loop({ scale: [1, 1.35, 1], opacity: [0.5, 1, 0.5] }, 1.5, { delay: i * 0.3 })} />
          <rect x="76" y={y + 7} width="100" height="8" rx="3" {...mediumFill} stroke="none" />
        </g>
      ))}
    </HeroMotionSvg>
  )
}

/** 35. Glossary — 책 라인이 써지고 책갈피가 흔들림 */
export function GlossaryIllustration() {
  return (
    <HeroMotionSvg>
      <path d="M40 44 L120 56 L200 44 V128 L120 140 L40 128 Z" {...muted} strokeWidth="2" {...softFill} />
      <line x1="120" y1="56" x2="120" y2="140" {...muted} strokeWidth="2" />
      {[70, 84, 98].map((y, i) => (
        <motion.line key={`l${y}`} x1="56" y1={y} x2="106" y2={y + 1} stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.4"
          variants={loop({ pathLength: [0, 1] }, 2.4, { repeatType: 'reverse', delay: i * 0.2 })} />
      ))}
      {[70, 84, 98].map((y, i) => (
        <motion.line key={`r${y}`} x1="134" y1={y + 1} x2="184" y2={y} stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.4"
          variants={loop({ pathLength: [0, 1] }, 2.4, { repeatType: 'reverse', delay: 0.3 + i * 0.2 })} />
      ))}
      {/* 책갈피 — 살랑 흔들림 */}
      <motion.rect x="148" y="40" width="8" height="40" fill={ACCENT} style={{ ...fillPivot('top'), ...GLOW }}
        variants={loop({ rotate: [-4, 4, -4] }, 2.6, { ease: 'easeInOut' })} />
    </HeroMotionSvg>
  )
}

/** 36. Versioning — 점이 좌→우로 순차 점등, 마지막이 빨강 */
export function VersioningIllustration() {
  return (
    <HeroMotionSvg>
      <line x1="36" y1="80" x2="204" y2="80" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
      <motion.circle cx="68" cy="80" r="20" {...mediumFill} stroke="none" style={selfPivot}
        variants={loop({ scale: [0.85, 1, 0.85] }, 2.4, { repeatType: 'reverse', delay: 0 })} />
      <motion.circle cx="120" cy="80" r="20" {...mediumFill} stroke="none" style={selfPivot}
        variants={loop({ scale: [0.85, 1, 0.85] }, 2.4, { repeatType: 'reverse', delay: 0.25 })} />
      <motion.circle cx="172" cy="80" r="20" fill={ACCENT} style={{ ...selfPivot, ...GLOW }}
        variants={loop({ scale: [0.85, 1, 0.85] }, 2.4, { repeatType: 'reverse', delay: 0.5 })} />
    </HeroMotionSvg>
  )
}

/** 37. Breaking changes — 막대가 빨강 균열로 두 동강 났다 붙었다 */
export function BreakingChangesIllustration() {
  return (
    <HeroMotionSvg>
      <motion.rect x="32" y="68" width="80" height="24" rx="12" {...muted} strokeWidth="2" {...mediumFill}
        variants={loop({ x: [0, -6, 0] }, 2.2, { ease: 'easeInOut' })} />
      <motion.rect x="128" y="68" width="80" height="24" rx="12" {...muted} strokeWidth="2" {...mediumFill}
        variants={loop({ x: [0, 6, 0] }, 2.2, { ease: 'easeInOut' })} />
      {/* 균열 — 빨강 번개 */}
      <motion.path d="M112 56 L128 104" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" style={GLOW}
        variants={loop({ opacity: [0.3, 1, 0.3], pathLength: [0.5, 1, 0.5] }, 2.2)} />
    </HeroMotionSvg>
  )
}

/** 38. Patches — 반창고 중심이 박동(치유) */
export function PatchesIllustration() {
  return (
    <HeroMotionSvg>
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
      <motion.circle cx="120" cy="80" r="5" fill={ACCENT} style={accentDot} variants={pulse(1.8)} />
    </HeroMotionSvg>
  )
}

/** 39. app API — 중앙 app 객체 + 생명주기 링을 도는 빨강 단계 점 */
export function AppApiIllustration() {
  // 궤도 위 고정된 "생명주기 단계" 점들(모노톤). 빨강 점은 이 위를 계속 돈다.
  const orbit = [60, 120, 180, 240, 300]
  return (
    <HeroMotionSvg>
      {/* 생명주기 궤도(점선 원) */}
      <circle cx="120" cy="80" r="54" {...muted} strokeWidth="1.6" strokeDasharray="3 6" />
      {/* 중앙 app 객체 — 둥근 사각 + 내용 라인 */}
      <rect x="96" y="56" width="48" height="48" rx="12" {...muted} strokeWidth="2" {...mediumFill} />
      <rect x="108" y="68" width="24" height="6" rx="3" {...softFill} stroke="none" />
      <rect x="108" y="80" width="18" height="6" rx="3" {...softFill} stroke="none" />
      {/* 궤도 위 고정 단계 점들(모노톤) */}
      {orbit.map((deg) => {
        const rad = (deg * Math.PI) / 180
        return (
          <circle
            key={deg}
            cx={120 + Math.cos(rad) * 54}
            cy={80 + Math.sin(rad) * 54}
            r="5"
            fill="currentColor"
            fillOpacity={0.35}
          />
        )
      })}
      {/* 빨강 단계 점 — 궤도를 따라 한 바퀴씩 돈다(=생명주기 진행) */}
      <motion.g style={viewPivot(120, 80)} variants={loop({ rotate: 360 }, 8, { ease: 'linear' })}>
        <circle cx="120" cy="26" r="6" fill={ACCENT} style={GLOW} />
      </motion.g>
    </HeroMotionSvg>
  )
}

// ── 범용 API 카테고리 일러스트 ───────────────────────────────
// 모듈별 고유 일러스트는 비현실적이라, 카테고리 단위로 묶어 hero 에 매핑한다.
// (워크플로우가 모듈→일러스트 매핑을 정해 import 한다)

/** 40. Window 계열 — 타이틀바 창 + 안쪽에서 떠오르는 콘텐츠 */
export function WindowApiIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="40" y="30" width="160" height="100" rx="14" {...muted} strokeWidth="2" {...softFill} />
      <rect x="40" y="30" width="160" height="22" rx="14" {...mediumFill} stroke="none" />
      <motion.circle cx="56" cy="41" r="3.5" fill={ACCENT} style={accentDot} variants={pulse(2.2)} />
      <circle cx="68" cy="41" r="3.5" {...softFill} stroke="none" />
      <circle cx="80" cy="41" r="3.5" {...softFill} stroke="none" />
      {/* 본문 콘텐츠가 떠오름 */}
      <motion.rect x="60" y="70" width="120" height="10" rx="3" {...mediumFill} stroke="none"
        variants={loop({ width: [0, 120] }, 1.8, { repeatType: 'reverse' })} />
      <motion.rect x="60" y="90" width="84" height="10" rx="3" {...softFill} stroke="none"
        variants={loop({ width: [0, 84] }, 1.8, { repeatType: 'reverse', delay: 0.25 })} />
    </HeroMotionSvg>
  )
}

/** 41. IPC 계열 — 두 프로세스 사이를 왕복하는 메시지 패킷 */
export function IpcApiIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="24" y="48" width="74" height="64" rx="12" {...muted} strokeWidth="2" {...softFill} />
      <rect x="142" y="48" width="74" height="64" rx="12" {...muted} strokeWidth="2" {...softFill} />
      {/* 통신 라인 */}
      <line x1="98" y1="80" x2="142" y2="80" {...muted} strokeWidth="1.5" strokeDasharray="3 5" />
      {/* 패킷 왕복 */}
      <motion.circle cy="80" r="5" fill={ACCENT} style={GLOW}
        variants={loop({ cx: [98, 142, 98] }, 2.2)} />
    </HeroMotionSvg>
  )
}

/** 42. Menu/UI 계열 — 메뉴 행 + 내려오는 하이라이트 */
export function MenuApiIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="68" y="30" width="104" height="100" rx="12" {...muted} strokeWidth="2" {...softFill} />
      {[48, 68, 88, 108].map((y) => (
        <rect key={y} x="84" y={y} width="72" height="8" rx="3" {...mediumFill} stroke="none" />
      ))}
      {/* 선택 하이라이트가 항목 사이를 오르내림 */}
      <motion.rect x="76" width="88" height="14" rx="4" fill={ACCENT} style={GLOW}
        variants={loop({ y: [45, 65, 85, 105, 45] }, 3.2, { ease: 'easeInOut' })} />
    </HeroMotionSvg>
  )
}

/** 43. System/HW 계열 — 게이지 바늘이 흔들리는 계기 */
export function SystemApiIllustration() {
  return (
    <HeroMotionSvg>
      <path d="M52 122 A68 68 0 0 1 188 122" {...muted} strokeWidth="6" strokeLinecap="round" />
      {[0, 45, 90, 135, 180].map((deg) => {
        const rad = (Math.PI * (180 + deg)) / 180
        return (
          <line key={deg}
            x1={120 + Math.cos(rad) * 60} y1={122 + Math.sin(rad) * 60}
            x2={120 + Math.cos(rad) * 68} y2={122 + Math.sin(rad) * 68}
            {...muted} strokeWidth="2" />
        )
      })}
      {/* 바늘 — 좌우로 스윕 */}
      <motion.g style={viewPivot(120, 122)} variants={loop({ rotate: [-60, 60, -60] }, 3, { ease: 'easeInOut' })}>
        <line x1="120" y1="122" x2="120" y2="70" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" style={GLOW} />
      </motion.g>
      <circle cx="120" cy="122" r="6" fill={ACCENT} />
    </HeroMotionSvg>
  )
}

/** 44. Network/Storage 계열 — 노드 사이로 흐르는 데이터 */
export function NetworkApiIllustration() {
  return (
    <HeroMotionSvg>
      <circle cx="48" cy="80" r="14" {...muted} strokeWidth="2" {...mediumFill} />
      <circle cx="192" cy="80" r="14" {...muted} strokeWidth="2" {...mediumFill} />
      <rect x="100" y="60" width="40" height="40" rx="10" {...muted} strokeWidth="2" {...softFill} />
      <line x1="62" y1="80" x2="100" y2="80" {...muted} strokeWidth="1.6" />
      <line x1="140" y1="80" x2="178" y2="80" {...muted} strokeWidth="1.6" />
      {/* 데이터 패킷이 좌→우로 흐름 */}
      <motion.circle cy="80" r="4.5" fill={ACCENT} style={GLOW}
        variants={loop({ cx: [62, 178] }, 2.4, { repeatType: 'loop' })} />
    </HeroMotionSvg>
  )
}

/** 45. 범용 모듈 — 중앙 모듈 블록 + 박동하는 액센트 점(폴백) */
export function GenericApiIllustration() {
  return (
    <HeroMotionSvg>
      <rect x="84" y="44" width="72" height="72" rx="16" {...muted} strokeWidth="2" {...mediumFill} />
      <rect x="100" y="60" width="40" height="6" rx="3" {...softFill} stroke="none" />
      <rect x="100" y="74" width="32" height="6" rx="3" {...softFill} stroke="none" />
      <rect x="100" y="88" width="24" height="6" rx="3" {...softFill} stroke="none" />
      <motion.circle cx="120" cy="116" r="6" fill={ACCENT} style={accentDot} variants={pulse(2)} />
    </HeroMotionSvg>
  )
}
