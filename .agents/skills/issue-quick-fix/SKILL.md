---
name: issue-quick-fix
description: >
  このリポジトリの軽微修正（`dashboard.html` の文言・レイアウト、docs 修正、AGENTS.md 更新）を
  最小確認で進めるスキル。
argument-hint: "<依頼内容 または Issue番号>"
---

# issue-quick-fix

## 対象
- `dashboard.html` の文言修正
- 軽微なレイアウト調整
- `_docs/` の資料修正
- AGENTS.md の微修正

## 手順
1. 対象ファイルを開く
2. 変更範囲を最小化する
3. 単体 HTML として成立するかを意識して直す
4. 構成に影響したら AGENTS.md も見る

## エスカレーション条件
次のどれかならこのスキルをやめる。
- フレームワーク導入
- ディレクトリ大再編
- 静的サンプル全面置換
- 将来 API 前提の大きな構成議論

## 完了報告
- changed files
- 変更意図
- 追加で AGENTS.md 更新が必要か
