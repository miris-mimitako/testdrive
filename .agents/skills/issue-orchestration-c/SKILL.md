---
name: issue-orchestration-c
description: >
  この testdrive リポジトリでは、複数フェーズにまたがる大きな移行（例: 静的資料段階から
  Astro/NestJS 構成への段階的発展）を整理するための軽量オーケストレーションスキル。
  過去の multi-repo / UL YAML 前提は適用しない。
argument-hint: "<移行タスク説明>"
---

# issue-orchestration-c

## 現行前提
- single repo: `testdrive` のみ
- 現時点の主要ファイルは `AGENTS.md` と `_docs/ui_design_sample/dashboard.html`
- UL YAML / OpenAPI / TODO.yaml / 複数 repo 同期の前提は **存在しない**

## このスキルを使う場面
- 静的 HTML サンプルから Astro へ段階移行したい
- 将来の NestJS/API 構成をどう追加するかを段取り化したい
- `_docs` → 実装雛形 → アプリ本体 までのフェーズ分けが必要

## 進め方
1. 現在の実ファイルを確認する
2. 何を残し、何を新規追加するかを決める
3. フェーズを小さく分ける
   - Phase 1: docs/方針整理
   - Phase 2: 雛形追加
   - Phase 3: UI 移行
   - Phase 4: API 導入（必要なら）
4. 各フェーズ後に AGENTS.md を更新する

## 禁止
- hozen 系 3 repo 同期を前提にしない
- UL YAML / OpenAPI がある前提で進めない
- 現状の静的サンプルを無言で消さない
