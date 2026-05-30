// 정적 export 환경에서 루트("/") → "/ko/" 로 자동 이동.
// next/navigation 의 redirect() 는 정적 export 와 호환되지 않으므로
// 클라이언트 라우터 push 로 처리한다. 이동하는 짧은 순간에는 로딩 화면을 보여준다.
// (자바스크립트 비활성 시를 위한 대체 링크는 <noscript> 로 제공)

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LoadingScreen } from './components/LoadingScreen'

export default function RootRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/ko/')
  }, [router])

  return (
    <>
      <LoadingScreen label="불러오는 중…" />
      {/* JS 비활성 사용자용 대체 링크 */}
      <noscript>
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          <a href="/ko/">/ko/ 로 이동</a>
        </div>
      </noscript>
    </>
  )
}
