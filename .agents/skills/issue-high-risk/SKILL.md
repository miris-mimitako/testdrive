---
name: issue-high-risk
description: >
  この testdrive リポジトリにおける高リスク変更（フレームワーク導入、ディレクトリ大再編、
  UI サンプル全面置換など）を安全に扱うスキル。現状は静的資料リポジトリであることを前提に、
  破壊的変更を避けながら進める。
argument-hint: "<依頼内容 または Issue番号>"
---

# issue-high-risk

## 前提
- このリポジトリは **2026-03-28 時点でアプリ本体未導入**
- 実在する主要ファイルは `AGENTS.md` と `_docs/ui_design_sample/dashboard.html`
- したがって、高リスク変更とは主に **構成変更リスク** を指す

## 高リスク扱いの例
- Astro / NestJS / pnpm workspace の導入
- `_docs/ui_design_sample/dashboard.html` の全面置換
- トップレベル構成の大幅変更
- 静的 HTML サンプルを削除・移設する変更
- 将来構成を前提にした大量の雛形追加

## 手順
1. まず現行構成を確認する
2. 何が壊れる可能性があるかを箇条書きする
3. 既存サンプルを残す方法を優先する
4. 変更理由と移行方針を docs に残す
5. 変更後は AGENTS.md も更新する

## 完了条件
- 既存の静的サンプル参照手段が失われていない
- 新旧構成の意図が説明できる
- AGENTS.md が実態と一致している
