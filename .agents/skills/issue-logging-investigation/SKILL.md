---
name: issue-logging-investigation
description: >
  現行 repo では runtime logging 調査は基本対象外であることを明示するスキル。
  もし将来導入予定の Astro/NestJS 構成に向けてログ方針メモを作るなら、その用途に限定して使う。
argument-hint: "<依頼内容 または Issue番号>"
---

# issue-logging-investigation

## 現状
このリポジトリには **実行中の API / logger / CloudWatch / JSONL 実装はありません**。
そのため、過去リポジトリ向けの 500 調査スキルとしては使いません。

## 使ってよいケース
- 将来の Astro / NestJS 導入時のログ方針メモを書く
- `_docs/` に logging / error handling の設計メモを追加する
- UI サンプル上でエラー表示方針を整理する

## 手順
1. まず runtime 未導入であることを確認する
2. 実装調査ではなく、設計メモ作成タスクへ切り替える
3. `_docs/` 配下へログ方針やエラー方針を記述する
4. 必要なら AGENTS.md に新構成反映が必要か確認する

## 禁止
- 存在しない logger ファイルを前提に分析しない
- CloudWatch や NestJS filter 実装済みとして扱わない
