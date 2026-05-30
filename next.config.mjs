import nextra from 'nextra'
import bundleAnalyzer from '@next/bundle-analyzer'

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

// `ANALYZE=true npm run build` 로 호출 시 번들 시각화 리포트 생성
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
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
  // basePath 를 컴포넌트에서도 읽게 노출(단일 소스). next/image 는 public 이미지
  // src 에 basePath 를 자동으로 붙여주지 않으므로, 직접 prefix 할 때 이 값을 쓴다.
  // (예: LangLayoutShell 의 로고 — 미적용 시 GitHub Pages 에서 404=깨진 이미지)
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoBasePath : '',
  },
  // 정적 export는 Next 런타임 이미지 옵티마이저를 못 쓰므로 비활성
  images: { unoptimized: true },
  // GitHub Pages 라우팅 안정성 (모든 경로가 `/`로 끝나도록)
  trailingSlash: true,
  // 패키지 임포트 최적화 — 큰 패키지의 트리셰이킹 강화 (체감 번들 ↓)
  experimental: {
    optimizePackageImports: [
      'nextra',
      'nextra-theme-docs',
      'nextra/components',
    ],
  },
  // 빌드 시 console.log 제거 (warn/error는 유지) — CLAUDE.md 규칙 보조
  compiler: {
    removeConsole: isProd ? { exclude: ['warn', 'error'] } : false,
  },
}

export default withBundleAnalyzer(withNextra(nextConfig))
