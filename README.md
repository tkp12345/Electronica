# ⚡ Electronica

> Electron을 학습하고 정리한 **개인 참고 문서 사이트**.
> `electronjs.org/docs/latest`와 유사한 룩앤필을 목표로 한 Nextra 4 + Next.js 15 정적 사이트.

배포 URL: <https://tkp12345.github.io/Electronica/>

---

## 기술 스택

| 영역 | 선택 | 이유 |
|---|---|---|
| 문서 프레임워크 | **Nextra 4** | electronjs.org와 동일 룩앤필, React 기반 |
| Next.js | **15 (App Router)** | RSC + 정적 export 안정 |
| 언어 | **TypeScript strict** | `noUncheckedIndexedAccess` 포함 |
| 스타일 | **Tailwind v4** | preflight 제외해 Nextra 기본 스타일과 공존 |
| 호스팅 | **GitHub Pages** | 무료, push 기반 자동 배포 |
| 폰트 | **Inter (self-host)** | Google Fonts CDN 요청 0회, CLS 0 |

---

## 빠른 시작

```bash
nvm use            # .nvmrc → Node 20
npm install
npm run dev        # http://localhost:3000
```

## 스크립트

| 명령 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 (HMR) |
| `npm run build` | 정적 export → `out/` 생성 |
| `npm run preview` | `out/`을 로컬에서 서빙 (배포 산출물 검증) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint flat config |
| `npm run analyze` | 번들 시각화 (`ANALYZE=true next build`) |

---

## 문서 추가하기

`app/docs/` 하위에 폴더 + `page.mdx`를 만들면 자동으로 사이드바에 등록됩니다.

```text
app/docs/
├─ _meta.ts                    # 사이드바 순서/라벨 정의
├─ getting-started/
│  └─ page.mdx                 # → /docs/getting-started
└─ my-new-topic/
   └─ page.mdx                 # → /docs/my-new-topic  ← 새로 추가
```

순서/제목을 바꾸려면 `app/docs/_meta.ts` 수정:

```ts
export default {
  'getting-started': '시작하기',
  'my-new-topic': '새 주제',   // 추가
  installation: '설치',
  api: 'API 레퍼런스',
}
```

MDX 안에서는 Nextra 컴포넌트(`Callout`, `Tabs`, `Cards`, `Steps`, `FileTree` 등)를 그대로 사용할 수 있습니다.

---

## 배포

`main` 브랜치에 푸시하면 `.github/workflows/deploy.yml` 이 실행되어 자동 배포됩니다.

GitHub Pages 활성화 절차 (최초 1회):

1. 리포지토리 **Settings → Pages**
2. **Source = GitHub Actions** 선택
3. 첫 푸시 후 Actions 탭에서 배포 완료 확인

---

## 성능 점검 (Lighthouse)

```bash
npm run build
npm run preview     # 로컬에서 production 빌드 서빙
# 별도 터미널에서:
npx lighthouse http://localhost:3000 --view
```

목표:
- Performance ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95

번들 크기를 확인하려면:
```bash
npm run analyze
# 빌드 완료 후 .next/analyze/*.html 자동 오픈
```

---

## 폴더 구조

```text
app/
├─ layout.tsx           # 루트 레이아웃 (Navbar/Footer/Layout)
├─ page.mdx             # 홈
├─ _meta.ts             # 루트 네비 메뉴
├─ globals.css          # Tailwind utilities (preflight 제외)
└─ docs/
   ├─ _meta.ts
   ├─ page.mdx
   ├─ getting-started/page.mdx
   ├─ installation/page.mdx
   └─ api/page.mdx

mdx-components.tsx      # Nextra 테마 MDX 컴포넌트 매핑
next.config.mjs         # Nextra + 정적 export + basePath
tailwind.config 미사용    # Tailwind v4 는 CSS 한 줄(@import "tailwindcss/...")
public/
└─ .nojekyll            # GitHub Pages가 _next/ 폴더 무시하지 않게
.github/workflows/
└─ deploy.yml           # main 푸시 → Pages 자동 배포
```

---

## 알려진 호환성 메모

- **zod 4.4.x 와 Nextra 4 충돌** ([nextra#4989](https://github.com/shuding/nextra/issues/4989)).
  `package.json`에서 `zod`를 **4.3.x로 고정**(`save-exact`) 해두었습니다.
  Nextra 패치 릴리스 이후 풀어도 됩니다.
- **Tailwind v4 의 preflight 는 의도적으로 미import** — Nextra 기본 타이포가 깨지지 않게.
  유틸리티 클래스(`flex`, `gap-4` 등)만 쓰며, 본문 reset이 필요한 컴포넌트는 자체 CSS로.

---

## License

MIT © Roberto
