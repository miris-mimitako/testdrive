# testdrive Agent Guide

この `testdrive` リポジトリは、**Astro フロントエンドと NestJS API を同居させるフルスタック試作リポジトリ**です。  
**2026-03-28 時点では Astro フロントエンドと NestJS API の土台まで導入済みです。**

そのため、エージェントは **「フロントは Astro、API は NestJS」という責務を守りながら、安全に構成を育てる** ことを優先します。

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
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── api/
│   ├── src/
│   ├── test/
│   ├── package.json
│   └── nest-cli.json
└── _docs/
    └── ui_design_sample/
        └── dashboard.html
```

### 各ディレクトリの役割

- `src/`
  - Astro フロントエンド。
  - `/` 画面やレイアウト、UI コンポーネントを置く。
- `api/`
  - NestJS API。
  - 現在は `/api` と `/api/health` の最低限の疎通確認エンドポイントを持つ。
- `index.html`
  - 旧静的版の見本。
- `_docs/ui_design_sample/dashboard.html`
  - 元の UI デザインサンプル。

---

## 最優先ルール

- **実在するファイルとディレクトリだけを前提に作業すること。**
- フロントエンドは `src/`、API は `api/` を正本として扱うこと。
- **UI ロジックを Astro 側に寄せすぎないこと。**
- **業務ロジックや API 契約は NestJS 側に寄せること。**
- `index.html` と `_docs/ui_design_sample/dashboard.html` は、比較用・見本として無言で削除しないこと。

---

## このリポジトリで許可される主な作業

- `src/pages/index.astro` の改善
- `src/components/` / `src/layouts/` の整理
- `src/styles/` の整理
- `api/src/` への controller / service / module 追加
- `api/test/` への API テスト追加
- フロントから API を呼ぶための下準備
- AGENTS.md の更新

## 現時点で慎重に扱う作業

- DB 導入
- 認証 / 認可導入
- フロントと API の大規模なディレクトリ再編
- 旧静的見本の削除

---

## Astro 作業ルール

- `/` は原則 `src/pages/index.astro` を正本として扱う。
- 画面が大きくなったら `src/components/` へ分割する。
- 共通 head / style は `src/layouts/BaseLayout.astro` に寄せる。
- Tailwind は **公式の Astro + Tailwind 構成** を使う。色やトークンは `src/styles/global.css` で管理する。
- 新しい UI 調整は、原則 Astro 側を先に更新する。

### Astro 開発コマンド

```bash
npm install
npm run dev
npm run dev:all
npm run start
npm run build
npm run build:all
npm run test:all
npm run preview
```

---

## NestJS 作業ルール

- API は `api/` を正本とする。
- 現在のベース URL は **`/api`**。
- 疎通確認エンドポイント:
  - `GET /api`
  - `GET /api/health`
- 開発ポートは **Astro: `4321` / NestJS: `3001`** に固定する。
- 起動前にポート使用状況をチェックし、競合時は分かりやすいエラーを返す。
- CORS は Astro 側ローカル開発ポートを許可している。
- DTO を追加する場合は ValidationPipe 前提で設計する。

### NestJS 開発コマンド

```bash
cd api
npm install
npm run start:dev
npm run build
npm test
npm run test:e2e
```

---

## フロント / API の責務分離

- **Astro**
  - 画面表示
  - 入力受付
  - UI 状態管理
  - API 呼び出し
- **NestJS**
  - API 契約
  - バリデーション
  - ビジネスロジック
  - 将来の永続化・認証・認可

**最終的な業務判断は API 側に寄せる** 方針で進める。

---

## 推奨する進め方

1. フロント変更なら `src/pages/` と `src/components/` を確認する
2. API 変更なら `api/src/` と `api/test/` を確認する
3. 画面/API のどちらを変更したかに応じて build/test を実行する
4. 構成変更したら AGENTS.md を更新する

---

## コミット・変更方針

- 1 変更 1 意図を基本にします。
- フロント変更と API 変更は、可能ならコミット意図を分けられる粒度で作業します。
- 無関係な整形や文言修正を混ぜないこと。

例:

```text
feat: add nest health-check endpoints
feat: connect astro home to api status endpoint
refactor: split astro home into smaller components
docs: update AGENTS.md for astro and nest structure
```

---

## エージェント向け補足

- 現在のフロントは Astro、API は NestJS で起動可能です。
- 旧静的版 `index.html` と元サンプル `_docs/ui_design_sample/dashboard.html` は比較用に残しています。
- 今後 API を増やす場合は、まず `api/test/` の更新も検討してください。
- 新しいトップレベル構成や DB / auth を追加した場合は、**この AGENTS.md の「現在のリポジトリ構成」を更新**してください。
