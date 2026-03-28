---
name: issue-triage
description: >
  このリポジトリの依頼を、軽微な静的修正か、資料整備か、高リスクな構成変更かへ分類するスキル。
argument-hint: "<依頼内容 または Issue番号>"
---

# issue-triage

実装はせず、分類だけ行います。

## 読むもの
- Issue title/body または依頼文
- `AGENTS.md`
- 必要なら `_docs/ui_design_sample/dashboard.html`

詳しい分類基準は `references/track-selection.md` を読む。

## 出力
- track: `quick-fix` / `spec-impl` / `high-risk` / `orchestration-c`
- risk: `low` / `medium` / `high`
- scope: single-file / docs-only / repo-structure
- spec_depth: `none` / `targeted` / `migration-plan`
- recommended_comment
- why
- minimum_sources
- escalation_rule

## ルール
- `dashboard.html` の局所修正は `quick-fix`
- docs 追加や方針整理は `spec-impl`
- フレームワーク導入や大再編は `high-risk`
- 段階移行計画が必要なら `orchestration-c`
