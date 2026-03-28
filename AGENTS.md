# testdrive Agent Guide

この `testdrive` リポジトリは、**UI 試作と設計メモを起点に、Astro ベースの画面へ育てていくためのリポジトリ**です。  
**2026-03-28 時点では Astro 実行環境は導入済みですが、NestJS 本体は未導入です。**

そのため、エージェントは **「Astro の画面実装は進めてよいが、バックエンド実装済み前提では進めない」** ことを守ります。

---

## 現在のリポジトリ構成

```text
.
├── AGENTS.md
├── astro.config.mjs
├── index.html
├── package.json
├── src/
│   ├── components/
│   │   ├── HomeHeader.astro
│   │   ├── HomeOverview.astro
│   │   ├── HomeSidebar.astro
│   │   └── HomeWorkflow.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
└── _docs/
    └── ui_design_sample/
        └── dashboard.html
```

### 各ファイルの役割

- `index.html`
  - もともとの静的トップページ。
  - UI 見本・比較対象として残している。
- `src/pages/index.astro`
  - 現在の `/` ページ本体。
- `src/layouts/BaseLayout.astro`
  - 共通レイアウト。
- `src/components/*.astro`
  - ホーム画面の分割済み UI コンポーネント。
- `_docs/ui_design_sample/dashboard.html`
  - 元の UI デザインサンプル。
- `package.json`
  - Astro 実行用スクリプトと依存関係を定義。
- `astro.config.mjs`
  - Astro 設定ファイル。
- `src/styles/global.css`
  - 公式の Astro + Tailwind 構成で使うグローバルスタイル。

---

## 最優先ルール

- **実在するファイルとディレクトリだけを前提に作業すること。**
- 存在しない `apps/`, `packages/`, `tests/` などを前提に説明しないこと。
- **フロントエンドは Astro 中心で進めてよい。**
- **NestJS / API / DB は未導入** なので、バックエンド実装済み前提の修正は行わないこと。
- 大きな構成変更を行う場合は、**現在の最小構成を壊さず、意図が分かる形で追加**すること。
- 元サンプル `_docs/ui_design_sample/dashboard.html` は、無言で削除しないこと。

---

## このリポジトリで許可される主な作業

- `src/pages/index.astro` の改善
- `src/components/` / `src/layouts/` への分割・整理
- `index.html` の見本更新
- `_docs/` 配下への設計メモ、移行メモの追加
- 将来の NestJS 導入を見据えた **非破壊の提案** や雛形追加
- AGENTS.md の更新

## 現時点で慎重に扱う作業

- NestJS 導入
- API / DB / 認証前提の実装追加
- ディレクトリ大再編
- 元サンプルの全面置換や削除

---

## Astro 作業ルール

- `/` は原則 `src/pages/index.astro` を正本として扱う。
- 画面が大きくなったら `src/components/` へ分割する。
- 共通 head / style は `src/layouts/BaseLayout.astro` に寄せる。
- まず見た目を整え、その後必要ならロジックを追加する。
- Tailwind は **公式の Astro + Tailwind 構成** を使う。色やトークンは `src/styles/global.css` で管理する。

### 開発コマンド

```bash
npm install
npm run dev
npm run build
npm run preview
```

---

## `index.html` の扱い

- `index.html` は旧静的版の見本として維持してよい。
- Astro 版との差分確認に使ってよい。
- ただし、現在の `/` 実装の中心は `src/pages/index.astro` とする。
- 新しい UI 調整は、原則 Astro 側を先に更新する。

---

## 将来 NestJS を導入する場合の扱い

ユーザーが今後このリポジトリを Astro / NestJS 構成へ発展させる可能性はあります。  
ただし、**NestJS はまだ導入済みであると決め打ちしてはいけません。**

導入するまでは以下の姿勢を守ります。

- Astro: **導入済みの UI 基盤**
- NestJS: **将来 API / application / domain を載せる候補**
- 現在: **Astro フロント + 静的資料段階**

将来バックエンドや API を追加したら、AGENTS.md も必ず更新し、実際の構成を反映します。

---

## 推奨する進め方

1. `src/pages/index.astro` を確認する
2. 必要なら `src/components/` を編集する
3. `npm run dev` で表示確認する
4. 構成変更したら AGENTS.md を更新する

---

## コミット・変更方針

- 1 変更 1 意図を基本にします。
- 画面修正と構成変更は、可能ならコミット意図を分けられる粒度で作業します。
- 不要な自動整形や無関係な文言修正を混ぜないこと。

例:

```text
feat: add astro home page scaffold
refactor: split home page into layout and components
docs: update AGENTS.md for astro-based structure
```

---

## エージェント向け補足

- 現在の `/` は **Astro で表示確認可能**です。
- 旧静的版 `index.html` と元サンプル `_docs/ui_design_sample/dashboard.html` は比較用に残っています。
- まずは Astro 側を正本として改善してください。
- 新しいトップレベル構成や backend を追加した場合は、**この AGENTS.md の「現在のリポジトリ構成」を更新**してください。
