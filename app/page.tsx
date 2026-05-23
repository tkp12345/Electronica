// 정적 export 환경에서 루트("/") → "/ko/" 로 자동 이동.
// next/navigation 의 redirect() 는 정적 export 와 호환되지 않으므로
// 클라이언트 라우터 push 로 처리한다. 사용자가 자바스크립트 비활성 시 노출되는 링크도 동시 제공.

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RootRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/ko/')
  }, [router])

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '2rem',
      }}
    >
      <p>
        Redirecting to <Link href="/ko/">/ko/</Link>…
      </p>
    </div>
  )
}
