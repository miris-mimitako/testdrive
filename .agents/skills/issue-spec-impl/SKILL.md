---
name: issue-spec-impl
description: >
  現行 repo の資料・構成方針に仕様影響がある変更を、対象ファイルだけ読んで進めるスキル。
  実装済み backend や OpenAPI は前提にせず、docs / UI sample / 将来構成メモの整合を取る。
argument-hint: "<依頼内容 または Issue番号>"
---

# issue-spec-impl

## 向いているケース
- `dashboard.html` の構成見直し
- `_docs/` に画面仕様や移行方針を追加
- 将来 Astro / NestJS 化のディレクトリ方針をまとめる
- AGENTS.md と docs の整合を取る

## 先に読むもの
- `AGENTS.md`
- 対象の `_docs/` ファイル
- 変更対象の HTML

## 手順
1. 変更点を 3〜7 項目に固定する
2. 実在ファイルだけを根拠に差分を整理する
3. docs / sample / AGENTS のうち必要範囲だけ更新する
4. 実装済みでないものは「予定」「草案」と明記する

## 禁止
- 存在しない backend 構成を既成事実化しない
- OpenAPI やテスト群がある前提で書かない
- ドキュメント全体の全面棚卸しに広げない
