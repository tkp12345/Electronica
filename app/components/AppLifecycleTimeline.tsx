'use client'

// app API "생명주기 타임라인" — 인터랙티브 다이어그램.
// 앱이 켜져서(부팅) 꺼질 때까지(종료) 거치는 주요 단계를 클릭/키보드로 넘겨 보며
// 각 시점에 무슨 일이 일어나는지 + 대표 코드를 확인한다.
//
// 설계 의도
//  - 정적 SVG 일러스트만으로는 "순서"와 "시점"을 직관적으로 전달하기 어렵다.
//    실제로 단계를 눌러 보며 흐름을 따라가게 만들어 학습 효과를 높인다.
//  - 외부 상태/애니메이션 라이브러리 없이 useState 하나로만 구현(전역 규칙 준수).
//  - 영/한 카피를 컴포넌트 내부 데이터로 들고 lang prop 으로 분기 → MDX 는 깔끔하게 유지.
//
// 톤
//  - 사이트 공통 빨강 액센트(#ef4444). 선택된 단계만 빨강 강조, 나머지는 모노톤.

import { useState } from 'react'

type Lang = 'en' | 'ko'

const ACCENT = '#ef4444'

// 한 단계가 갖는 정보. summary/detail/code 는 표시용 텍스트.
interface Stage {
  /** 실제 app 이벤트/메서드 식별자 (탭 라벨로도 사용) */
  readonly id: string
  /** 한 줄 요약 — 이 시점이 "무엇인지" */
  readonly summary: string
  /** 두세 줄 설명 — 이 시점에 보통 무엇을 하는지 + 비유 */
  readonly detail: string
  /** 대표 코드 스니펫 (main.js 기준) */
  readonly code: string
  /** 플랫폼 한정 표시 (없으면 모든 플랫폼) */
  readonly platform?: string
}

interface AppLifecycleTimelineProps {
  /** 표시 언어 — 'en' | 'ko' */
  lang: Lang
}

// 각 언어별 단계 데이터. 순서가 곧 타임라인 순서다.
const STAGES: Record<Lang, readonly Stage[]> = {
  en: [
    {
      id: 'will-finish-launching',
      summary: 'The app is about to finish booting.',
      detail:
        'The very first checkpoint. On macOS this maps to applicationWillFinishLaunching — a good place to set up crash reporting or listeners before any window exists. Think of it as the stage manager arriving before the doors open.',
      code: `app.on('will-finish-launching', () => {
  // set up listeners that must exist before 'ready'
  // e.g. crash reporter, open-url handler on macOS
})`,
    },
    {
      id: 'ready',
      summary: 'Electron is initialized — now you may create windows.',
      detail:
        'The single most important event. Everything that touches the GUI (BrowserWindow, Menu, Tray) must wait for this. Most apps use the promise form app.whenReady().',
      code: `app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 800, height: 600 })
  win.loadFile('index.html')
})`,
    },
    {
      id: 'activate',
      summary: 'The app icon was clicked (macOS).',
      detail:
        'On macOS apps stay alive with no windows. When the user clicks the Dock icon, re-create a window if none are open. The classic "re-open" pattern.',
      code: `app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})`,
      platform: 'macOS',
    },
    {
      id: 'running',
      summary: 'The app is alive and doing its job.',
      detail:
        'While running, app keeps emitting helper events: browser-window-created, web-contents-created, certificate-error, render-process-gone, second-instance, and more. This is where your app spends 99% of its life.',
      code: `app.on('web-contents-created', (event, contents) => {
  // harden every page that gets created
  contents.setWindowOpenHandler(() => ({ action: 'deny' }))
})`,
    },
    {
      id: 'window-all-closed',
      summary: 'The last window was closed.',
      detail:
        'On Windows/Linux this usually means "quit the app". On macOS the convention is to stay running, so guard with a platform check.',
      code: `app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})`,
    },
    {
      id: 'before-quit',
      summary: 'Quitting has started — last chance to cancel.',
      detail:
        'Fired before windows begin closing. Call event.preventDefault() to abort the quit (e.g. "You have unsaved changes"). The point to flush important data.',
      code: `app.on('before-quit', (event) => {
  if (hasUnsavedWork()) {
    event.preventDefault()
    showSaveDialog()
  }
})`,
    },
    {
      id: 'will-quit',
      summary: 'All windows closed, app will quit now.',
      detail:
        'The final cleanup hook. Unregister global shortcuts, close database handles, stop background timers here.',
      code: `app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})`,
    },
    {
      id: 'quit',
      summary: 'The app is gone. Goodbye.',
      detail:
        'Emitted with the exit code as the process terminates. Nothing GUI-related runs after this. Curtains down, lights off.',
      code: `app.on('quit', (event, exitCode) => {
  // last log line before the process dies
})`,
    },
  ],
  ko: [
    {
      id: 'will-finish-launching',
      summary: '부팅을 막 끝내려는 첫 체크포인트.',
      detail:
        '가장 먼저 도달하는 지점이에요. macOS 의 applicationWillFinishLaunching 에 해당하며, 창이 하나도 없을 때 크래시 리포터나 리스너를 미리 걸어 두기 좋아요. 문 열기 전 미리 도착한 무대 감독 같은 느낌이에요.',
      code: `app.on('will-finish-launching', () => {
  // 'ready' 이전에 반드시 존재해야 하는 리스너 설정
  // 예: 크래시 리포터, macOS open-url 핸들러
})`,
    },
    {
      id: 'ready',
      summary: '초기화 완료 — 이제 창을 만들 수 있어요.',
      detail:
        '가장 중요한 이벤트예요. GUI(BrowserWindow·Menu·Tray)를 건드리는 모든 코드는 이 시점을 기다려야 해요. 보통 프로미스 형태인 app.whenReady() 를 써요.',
      code: `app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 800, height: 600 })
  win.loadFile('index.html')
})`,
    },
    {
      id: 'activate',
      summary: '앱 아이콘을 다시 클릭함 (macOS).',
      detail:
        'macOS 는 창이 없어도 앱이 살아 있어요. 사용자가 Dock 아이콘을 누르면 열린 창이 없을 때 새로 만들어 주는 게 관례예요. 이른바 "다시 열기" 패턴이에요.',
      code: `app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})`,
      platform: 'macOS',
    },
    {
      id: 'running',
      summary: '앱이 살아서 제 일을 하는 중.',
      detail:
        '실행 중에는 browser-window-created, web-contents-created, certificate-error, render-process-gone, second-instance 등 보조 이벤트가 계속 발생해요. 앱은 인생의 99%를 이 구간에서 보내요.',
      code: `app.on('web-contents-created', (event, contents) => {
  // 생성되는 모든 페이지를 안전하게 잠가요
  contents.setWindowOpenHandler(() => ({ action: 'deny' }))
})`,
    },
    {
      id: 'window-all-closed',
      summary: '마지막 창이 닫혔어요.',
      detail:
        'Windows/Linux 에서는 보통 "앱 종료" 를 뜻해요. macOS 는 그대로 살아 있는 게 관례라 플랫폼 분기로 막아 줘요.',
      code: `app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})`,
    },
    {
      id: 'before-quit',
      summary: '종료가 시작됨 — 취소할 마지막 기회.',
      detail:
        '창이 닫히기 전에 발생해요. event.preventDefault() 로 종료를 막을 수 있어요(예: "저장 안 한 변경사항이 있어요"). 중요한 데이터를 저장하는 지점이에요.',
      code: `app.on('before-quit', (event) => {
  if (hasUnsavedWork()) {
    event.preventDefault()
    showSaveDialog()
  }
})`,
    },
    {
      id: 'will-quit',
      summary: '모든 창이 닫혔고, 이제 정말 종료해요.',
      detail:
        '마지막 정리(clean-up) 훅이에요. 전역 단축키 해제, DB 핸들 닫기, 백그라운드 타이머 정지를 여기서 해요.',
      code: `app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})`,
    },
    {
      id: 'quit',
      summary: '앱이 사라졌어요. 안녕히.',
      detail:
        '프로세스가 종료되며 exitCode 와 함께 발생해요. 이 다음에는 GUI 관련 코드가 더는 실행되지 않아요. 막이 내리고 조명이 꺼져요.',
      code: `app.on('quit', (event, exitCode) => {
  // 프로세스가 죽기 직전 마지막 로그
})`,
    },
  ],
}

// 언어별 고정 문구.
const UI_TEXT: Record<Lang, { title: string; hint: string; codeLabel: string }> = {
  en: {
    title: 'App lifecycle — click a stage',
    hint: 'Boot ──▶ Run ──▶ Quit. Tap each step to see what happens and the code that hooks it.',
    codeLabel: 'main.js',
  },
  ko: {
    title: '앱 생명주기 — 단계를 눌러보세요',
    hint: '부팅 ──▶ 실행 ──▶ 종료. 각 단계를 누르면 그 시점에 일어나는 일과 연결 코드를 볼 수 있어요.',
    codeLabel: 'main.js',
  },
}

/**
 * 인터랙티브 생명주기 타임라인.
 *  - 상단: 가로 스텝퍼(각 단계 버튼). 선택된 단계는 빨강.
 *  - 하단: 선택된 단계의 요약/설명/코드.
 */
export function AppLifecycleTimeline({ lang }: AppLifecycleTimelineProps) {
  const stages = STAGES[lang]
  const ui = UI_TEXT[lang]
  // 선택된 단계의 인덱스. 기본은 가장 중요한 'ready'(인덱스 1).
  const [selected, setSelected] = useState<number>(1)
  // selected 는 항상 유효한 인덱스지만, noUncheckedIndexedAccess 대응으로 폴백을 둔다.
  const active = stages[selected] ?? stages[0]
  if (!active) return null

  return (
    <div
      style={{
        margin: '1.5rem 0',
        padding: '1.1rem 1.2rem 1.3rem',
        borderRadius: '16px',
        border: '1px solid rgba(239, 68, 68, 0.18)',
        background:
          'linear-gradient(135deg, rgba(239,68,68,0.06) 0%, rgba(239,68,68,0.02) 55%, transparent 100%)',
      }}
    >
      {/* 헤더 */}
      <div style={{ marginBottom: '0.9rem' }}>
        <div
          style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: ACCENT,
          }}
        >
          {ui.title}
        </div>
        <div
          style={{
            fontSize: '0.85rem',
            color: 'var(--x-color-fg-muted, #6b7280)',
            marginTop: '0.25rem',
          }}
        >
          {ui.hint}
        </div>
      </div>

      {/* 가로 스텝퍼 — 단계 버튼들 */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.4rem',
          alignItems: 'center',
        }}
      >
        {stages.map((stage, index) => {
          const isActive = index === selected
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => setSelected(index)}
              // 선택 여부를 보조기술에 알림
              aria-pressed={isActive}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.7rem',
                borderRadius: '999px',
                border: isActive
                  ? `1px solid ${ACCENT}`
                  : '1px solid rgba(127,127,127,0.28)',
                background: isActive ? ACCENT : 'transparent',
                color: isActive ? '#fff' : 'var(--x-color-fg, inherit)',
                fontSize: '0.78rem',
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                transition: 'background 0.15s, border-color 0.15s',
              }}
            >
              {/* 단계 번호 점 */}
              <span
                style={{
                  display: 'inline-block',
                  minWidth: '1.1rem',
                  height: '1.1rem',
                  lineHeight: '1.1rem',
                  textAlign: 'center',
                  borderRadius: '50%',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  background: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(239,68,68,0.12)',
                  color: isActive ? '#fff' : ACCENT,
                }}
              >
                {index + 1}
              </span>
              {stage.id}
            </button>
          )
        })}
      </div>

      {/* 선택된 단계 상세 */}
      <div style={{ marginTop: '1rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          <strong style={{ fontSize: '1.02rem' }}>{active.summary}</strong>
          {active.platform ? (
            <span
              style={{
                fontSize: '0.66rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: ACCENT,
                border: `1px solid ${ACCENT}`,
                borderRadius: '6px',
                padding: '0.05rem 0.4rem',
              }}
            >
              {active.platform}
            </span>
          ) : null}
        </div>
        <p
          style={{
            margin: '0.5rem 0 0.9rem',
            lineHeight: 1.65,
            color: 'var(--x-color-fg-muted, #4b5563)',
          }}
        >
          {active.detail}
        </p>

        {/* 코드 박스 — Nextra 코드블록과 톤을 맞춘 단순 pre */}
        <div
          style={{
            borderRadius: '10px',
            border: '1px solid rgba(127,127,127,0.22)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              fontSize: '0.7rem',
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
              color: 'var(--x-color-fg-muted, #9ca3af)',
              padding: '0.35rem 0.8rem',
              borderBottom: '1px solid rgba(127,127,127,0.18)',
              background: 'rgba(127,127,127,0.06)',
            }}
          >
            {ui.codeLabel}
          </div>
          <pre
            style={{
              margin: 0,
              padding: '0.85rem 1rem',
              overflowX: 'auto',
              fontSize: '0.82rem',
              lineHeight: 1.6,
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
            }}
          >
            <code>{active.code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default AppLifecycleTimeline
