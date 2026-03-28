---
name: issue-openapi-audit
description: >
  現行 repo では OpenAPI 監査対象が存在しないことを前提に、必要なら将来 API 導入のための
  契約メモや TODO を `_docs/` に整理するスキル。
argument-hint: "<依頼内容 または Issue番号>"
---

# issue-openapi-audit

## 現状
- このリポジトリに OpenAPI 定義はありません
- backend 実装もありません
- したがって、既存契約の runtime audit は現時点では行いません

## 使ってよいケース
- 将来 NestJS API を導入する前段として API メモを作る
- UI サンプルから必要になりそうな endpoint 一覧を `_docs/` に残す
- API 契約のたたき台を作る

## 手順
1. 実在する画面サンプルを確認する
2. 必要そうな API をメモレベルで整理する
3. まだ未実装であることを明記する
4. 正式な OpenAPI ではなく、草案として保存する

## 禁止
- 既存 OpenAPI がある前提で差分監査しない
- 実装済み request/response を断定しない
