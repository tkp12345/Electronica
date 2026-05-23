import nextra from 'nextra'

/**
 * Nextra 4 설정.
 * - `search`: FlexSearch 인덱싱 활성 (코드블럭 포함)
 * - `defaultShowCopyCode`: 모든 코드블럭에 복사 버튼 자동 노출
 */
const withNextra = nextra({
  search: {
    codeblocks: true,
  },
  defaultShowCopyCode: true,
})

// GitHub Pages 프로젝트 사이트 (`tkp12345.github.io/Electronica`) 기준 basePath.
// 사용자 페이지(<user>.github.io)로 호스팅하려면 빈 문자열로 변경.
const repoBasePath = '/Electronica'
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 정적 사이트로 export — `next build` 시 `out/` 에 모든 HTML/JS 생성
  output: 'export',
  // GitHub Pages는 `/Electronica/` 서브경로에 호스팅되므로 prod 빌드에만 prefix
  basePath: isProd ? repoBasePath : '',
  assetPrefix: isProd ? `${repoBasePath}/` : '',
  // 정적 export는 Next 런타임 이미지 옵티마이저를 못 쓰므로 비활성
  images: { unoptimized: true },
  // GitHub Pages 라우팅 안정성 (모든 경로가 `/`로 끝나도록)
  trailingSlash: true,
}

export default withNextra(nextConfig)
