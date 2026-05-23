// "쉬운 풀이" 박스 — Callout 의 변형.
// 좌측에 RobotIcon, 우측에 본문. 빨강 액센트로 통일된 톤.
import type { ReactNode } from 'react'
import { RobotIcon } from './RobotIcon'

interface EasyNoteProps {
  children: ReactNode
  /** 좌측 작은 라벨. 기본: '쉽게 말하면' / 'In plain words' (lang 으로 결정) */
  label?: string
}

export function EasyNote({ children, label }: EasyNoteProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '52px 1fr',
        gap: '0.85rem',
        margin: '1.25rem 0',
        padding: '0.9rem 1.1rem',
        borderRadius: '12px',
        border: '1px solid rgba(239, 68, 68, 0.22)',
        background:
          'linear-gradient(135deg, rgba(239,68,68,0.06) 0%, rgba(239,68,68,0.02) 60%, transparent 100%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: '0.15rem',
          color: '#ef4444',
        }}
      >
        <RobotIcon size={36} />
      </div>
      <div>
        {label ? (
          <div
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#ef4444',
              marginBottom: '0.3rem',
            }}
          >
            {label}
          </div>
        ) : null}
        <div style={{ lineHeight: 1.65 }}>{children}</div>
      </div>
    </div>
  )
}

export default EasyNote
