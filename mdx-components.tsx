// 글로벌 MDX 컴포넌트 매핑.
// Nextra 4는 `useMDXComponents` 훅을 export하는 모듈을 통해 테마 기본 컴포넌트와
// 사용자 커스텀 컴포넌트를 병합한다.
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import type { MDXComponents } from 'mdx/types'

const docsComponents = getDocsMDXComponents()

export const useMDXComponents = (components?: MDXComponents): MDXComponents => ({
  ...docsComponents,
  ...components,
})
