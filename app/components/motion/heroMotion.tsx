'use client'

// 히어로 일러스트 38개가 공유하는 모션 인프라.
//
// 설계 핵심 ─ "정지 프레임 = 완성 프레임" 원칙
//  · 각 일러스트의 SVG 기본 속성(attribute)은 "애니메이션이 끝난 완성 상태"로 그린다.
//  · 움직임은 rest/hover **variant** 로만 정의한다 (자식에 animate/initial 을 직접 주지 않는다).
//  · 그래야 부모(HeroMotionSvg)가 variant 라벨(rest↔hover)을 자식에 **전파**할 수 있고,
//    prefers-reduced-motion 일 때는 라벨을 안 주면 자식이 "완성된 정지 프레임"으로 남는다.
//
// 재생 흐름
//  · 스크롤로 화면에 들어오면 whileInView="rest" → 루프 시작 (viewport once:false 라 재진입 시 재생)
//  · 마우스 호버 시 whileHover="hover" 전파 → 루프가 빨라지고 액센트 글로우가 강해진다
//  · reduced-motion 이면 motion 없이 정적 SVG 로 렌더
import type { CSSProperties, ReactNode } from 'react'
import { motion, useReducedMotion, type Easing, type Variants } from 'framer-motion'

export { motion }

/** SVG 공통 래퍼 스타일 — overflow visible 로 액센트 글로우(drop-shadow)가 잘리지 않게 한다. */
export const wrap: CSSProperties = {
  width: '100%',
  height: 'auto',
  display: 'block',
  overflow: 'visible',
}

/** 액센트 색 — globals.css 의 CSS 변수(다크에서 더 밝게 + 글로우). */
export const ACCENT = 'var(--hero-accent)'

/** 액센트 요소에 붙이는 은은한 글로우(라이트=none, 다크=빨강 드롭섀도). */
export const GLOW: CSSProperties = { filter: 'var(--hero-glow)' }

/** Apple 톤 ease-out 곡선 — 부드럽게 도착. */
export const APPLE_EASE = [0.22, 1, 0.36, 1] as const

// 부모 컨테이너(svg) 자체의 등장 + 호버 변형.
// hidden → rest 로 페이드/상승, hover 에서 아주 살짝 확대.
const container: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  rest: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: APPLE_EASE } },
  hover: { opacity: 1, y: 0, scale: 1.012, transition: { duration: 0.3, ease: APPLE_EASE } },
}

interface HeroMotionSvgProps {
  children: ReactNode
  /** 자식 모션을 순차로 흘리고 싶을 때(선택). 각 자식 시작 시점을 stagger 초씩 지연. */
  stagger?: number
}

/**
 * 모든 히어로 일러스트의 루트 <svg>.
 *  - viewBox 240×160 고정, 등장/호버/reduced-motion 을 일괄 처리
 *  - 자식은 base 속성을 "완성 프레임"으로 두고 variants(rest/hover)만 정의하면 된다
 */
export function HeroMotionSvg({ children, stagger }: HeroMotionSvgProps) {
  const reduce = useReducedMotion()

  // 모션 최소화 설정 → 정적 SVG (자식들은 base 속성 = 완성 프레임으로 남는다)
  if (reduce) {
    return (
      <svg viewBox="0 0 240 160" style={wrap} fill="none">
        {children}
      </svg>
    )
  }

  // staggerChildren 을 쓰면 부모 rest/hover 변형에 오케스트레이션을 얹는다.
  const variants: Variants = stagger
    ? {
        ...container,
        rest: {
          ...(container.rest as object),
          transition: { duration: 0.55, ease: APPLE_EASE, staggerChildren: stagger },
        },
      }
    : container

  return (
    <motion.svg
      viewBox="0 0 240 160"
      style={wrap}
      fill="none"
      variants={variants}
      initial="hidden"
      whileInView="rest"
      whileHover="hover"
      viewport={{ once: false, amount: 0.5 }}
    >
      {children}
    </motion.svg>
  )
}

type Vals = Record<string, number | string | number[] | string[]>

interface LoopOpts {
  /** 호버 시 지속시간(기본: dur 의 절반 → 빨라짐). */
  hoverDur?: number
  ease?: Easing | Easing[]
  /** 'loop'(반복 점프) | 'reverse'(왕복) | 'mirror'. 기본 'loop'. */
  repeatType?: 'loop' | 'reverse' | 'mirror'
  /** 첫 시작 지연 — 무한 반복에선 영구적인 위상(phase) 오프셋이 된다(순차 웨이브용). */
  delay?: number
  /** 한 사이클 끝나고 다음 사이클 전 대기. */
  repeatDelay?: number
}

/**
 * 무한 루프 variant 한 쌍(rest/hover)을 만든다.
 *  - values: 애니메이션할 키프레임(예: { cx: [104,136,104] }, { scale: [1,1.3,1] })
 *  - 호버 시 같은 키프레임을 더 빠르게 재생
 * 예) loop({ scale: [1, 1.35, 1] }, 2.2)  // 펄스
 *     loop({ cx: [104, 136, 104] }, 2.2)  // 왕복 이동
 *     loop({ rotate: 360 }, 6, { ease: 'linear' })  // 연속 회전
 */
export function loop(values: Vals, dur: number, opts: LoopOpts = {}): Variants {
  const {
    hoverDur = dur * 0.5,
    ease = 'easeInOut',
    repeatType = 'loop',
    delay = 0,
    repeatDelay = 0,
  } = opts
  const base = { repeat: Infinity, repeatType, ease, delay, repeatDelay }
  return {
    rest: { ...values, transition: { ...base, duration: dur } },
    hover: { ...values, transition: { ...base, duration: hoverDur } },
  }
}

/** 액센트 점 펄스(scale + 글로우 톤). 가장 자주 쓰는 미세 모션. */
export function pulse(dur = 2.4, opts: LoopOpts = {}): Variants {
  return loop({ scale: [1, 1.3, 1], opacity: [0.85, 1, 0.85] }, dur, opts)
}
