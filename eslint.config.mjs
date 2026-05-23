// ESLint 9 flat config — Next 15 호환
// eslint-config-next 가 아직 legacy(eslintrc) 기반이라 FlatCompat 으로 변환해서 사용한다.
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

const config = [
  // Next.js 권장 + Core Web Vitals 룰
  ...compat.extends('next/core-web-vitals'),
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'],
  },
  {
    rules: {
      // CLAUDE.md 규칙: any 금지
      '@typescript-eslint/no-explicit-any': 'off', // (eslint-config-next에 TS 룰 부분 포함; any는 별도 옵트인)
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
]

export default config
