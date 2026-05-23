import nextra from 'nextra'

// Nextra 4: 옵션은 search, contentDirBasePath 등. 테마는 import로 적용.
const withNextra = nextra({
  // 빌드 시 .md/.mdx 내 모든 코드블럭에 대해 Shiki 하이라이트 (기본 활성)
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 정적 export / basePath 는 7단계에서 추가
}

export default withNextra(nextConfig)
