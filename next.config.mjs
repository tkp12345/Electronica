import nextra from 'nextra'

/**
 * Nextra 4 설정.
 * - `search`: FlexSearch 인덱싱 활성 (코드블럭 포함)
 * - `contentDirBasePath`: app/ 하위의 .mdx 가 라우팅되는 베이스 경로
 * - `defaultShowCopyCode`: 모든 코드블럭에 복사 버튼 자동 노출
 */
const withNextra = nextra({
  search: {
    codeblocks: true,
  },
  defaultShowCopyCode: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 정적 export / basePath 는 7단계에서 추가
}

export default withNextra(nextConfig)
