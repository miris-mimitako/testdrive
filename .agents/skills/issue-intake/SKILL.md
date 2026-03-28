---
name: issue-intake
description: >
  このリポジトリ向けの依頼を、現在の最小構成に即した GitHub Issue 文面へ整えるスキル。
  静的 UI サンプル修正なのか、docs 追加なのか、将来の Astro/NestJS 導入準備なのかを切り分ける。
argument-hint: "<依頼内容>"
---

# issue-intake

Issue 起票前の整理専用スキルです。実装はしません。

## 目的
- 曖昧な依頼を、このリポジトリに合う粒度へ落とす
- 現行構成で処理可能か、将来構成準備かを切り分ける
- 過去の hozen 前提に引きずられない Issue 文面にする

## 最小確認
1. `AGENTS.md` を読む
2. 現在のファイル構成を確認する
3. 依頼が次のどれかを判定する
   - `dashboard.html` の修正
   - `_docs/` への資料追加
   - 構成方針メモ作成
   - フレームワーク導入準備

## 出力
- issue title
- issue body（背景 / 現状 / 変更内容 / 完了条件）
- 対象パス
- 推奨トリガー 1 つ
- 推奨理由 1〜3 行

## トリガー選択ルール
- `/issue-quick-fix`: `dashboard.html` や docs の軽微修正
- `/issue-spec-impl`: 将来構成を見据えた資料追加や構成方針更新
- `/issue-high-risk`: フレームワーク導入や大再編
- `/issue-orchestration-c`: 現状では原則非推奨。複数フェーズの大規模移行計画だけ

## 禁止
- 存在しない API / OpenAPI / backend 実装を前提に本文を書かない
- multi-repo 前提の説明を混ぜない
