# ポートフォリオサイト構築仕様書

## プロジェクト概要

### 目的
- Web制作・フロントエンド開発の案件獲得を目的としたポートフォリオサイトの構築
- ターゲット：個人事業主、スタートアップ・ベンチャー企業
- 初案件獲得を目指すフリーランスのポートフォリオサイト

### デザインコンセプト
- **スタイル**: ミニマル・シンプル × モダン・スタイリッシュ
- **参考サイト**: https://studio-spoon.co.jp/ のデザイン要素を取り入れる
- **カラースキーム**:
  - ベースカラー: 黒（#000000）、グレー（#333333, #666666, #999999）
  - アクセントカラー: ディープスカイブルー（#00BFFF）
  - 背景: 白（#FFFFFF）またはライトグレー（#F5F5F5）

### ブランディング
- **屋号**: またすけ（MATASUKE）
- **キャッチコピー**: "対話から生まれる、確かなカタチ。AIと共に創る、次世代のWeb体験"
  - サブコピー: "Communication First, AI-Powered Development"
- **ロゴ**: 後日デザイナーに依頼予定（仮置きでテキストロゴを使用）

## 技術要件

### 推奨技術スタック
```
- フレームワーク: Next.js 15（App Router）
- スタイリング: Tailwind CSS v4
- アニメーション: Framer Motion
- フォント: Google Fonts（日本語：Noto Sans JP、英語：Inter）
- アイコン: Lucide Icons
- ホスティング: GitHub Pages（開発中）→ Vercel（本番）
```

### GitHub Pages用の設定
```javascript
// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export',
  basePath: isProd ? '/portfolio-v2' : '',
  images: {
    unoptimized: true,
  },
}
```

### 必須要件
- レスポンシブデザイン（モバイルファースト）
- パフォーマンス最適化（Lighthouse スコア 90以上目標）
- SEO対策
- アクセシビリティ対応

## サイト構成

### 1. ヘッダー・ナビゲーション
- 固定ヘッダー（スクロール時に背景色変化）
- ロゴ（左側）
- ナビゲーションメニュー（右側）
  - HOME
  - WORKS
  - ABOUT
  - SERVICE
  - CONTACT
- ハンバーガーメニュー（モバイル）

### 2. ヒーローセクション
```
構成要素:
- 大きなタイポグラフィで「MATASUKE」
- キャッチコピー
- スクロールを促すアニメーション矢印
- 背景に subtle なグラデーションまたはパターン
```

### 3. WORKSセクション
```
表示する架空プロジェクト（6-8個）:
1. モダンなコーポレートサイト（IT企業）
2. ミニマルなポートフォリオサイト（デザイナー向け）
3. ECサイト（アパレルブランド）
4. ランディングページ（SaaSプロダクト）
5. レストランサイト（高級和食）
6. クリニックサイト（美容皮膚科）

各プロジェクトに含める情報:
- プロジェクト名
- 業種/カテゴリ
- 使用技術
- 制作期間（架空）
- サムネイル画像（ダミー）
- 詳細ページへのリンク
```

### 4. ABOUTセクション
```
含める内容:
- 自己紹介文
- スキルセット
  - HTML5 / CSS3
  - JavaScript (ES6+)
  - TypeScript
  - React / Next.js
  - Tailwind CSS
  - Responsive Design
  - Git / GitHub
  - AI Tools Integration
- 強み・特徴
  - 丁寧なコミュニケーション
  - AI活用による効率的な開発
  - 納期厳守
  - アフターサポート
```

### 5. SERVICE & PRICEセクション
```
サービス内容:
1. シンプルなLP制作
   - 5ページ以内: ¥80,000〜
   - レスポンシブ対応込み
   - 納期: 2週間〜

2. コーポレートサイト制作
   - 10ページ程度: ¥200,000〜
   - CMS導入可能
   - 納期: 1ヶ月〜

3. ECサイト構築
   - 基本構築: ¥300,000〜
   - 決済システム導入
   - 納期: 1.5ヶ月〜

4. 既存サイトの改修
   - 時給: ¥3,000〜
   - 最低稼働時間: 10時間〜

※すべて税抜価格
※詳細は要相談
```

### 6. CONTACTセクション
```
フォーム項目:
- お名前（必須）
- 会社名
- メールアドレス（必須）
- 電話番号
- お問い合わせ種別（選択）
  - 制作のご依頼
  - お見積もり
  - その他
- お問い合わせ内容（必須）
- 送信ボタン
```

### 7. フッター
- コピーライト
- SNSリンク（Twitter/X、GitHub）
- プライバシーポリシーリンク

## デザイン詳細

### アニメーション
- ページ読み込み時のフェードイン
- スクロールトリガーアニメーション
- ホバーエフェクト（スケール、色変化）
- スムーススクロール

### レイアウト
- 最大幅: 1200px
- パディング: 20px（モバイル）、40px（デスクトップ）
- セクション間隔: 80px（モバイル）、120px（デスクトップ）

### タイポグラフィ
- 見出し: Noto Sans JP（Bold）
- 本文: Noto Sans JP（Regular）
- 英語アクセント: Inter

## ファイル構造
```
portfolio-main/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── works/
│   │   └── [slug]/
│   │       └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Works.tsx
│   ├── About.tsx
│   ├── Service.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── styles/
│   └── globals.css
├── public/
│   ├── images/
│   └── favicon.ico
├── lib/
│   └── constants.ts
└── package.json
```

## 実装優先順位
1. 基本構造とレイアウト ✅
2. ヘッダー・フッター ✅
3. ヒーローセクション ✅
4. WORKSセクション（ダミーデータで実装） ✅
5. ABOUTセクション ✅
6. SERVICE & PRICEセクション ✅
7. CONTACTセクション（フォーム機能） ✅
8. アニメーション追加 ✅
9. レスポンシブ調整 ✅
10. パフォーマンス最適化 ✅

## 現在の実装状況
- **フレームワーク**: Next.js 15.4.5 (App Router)
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion 12.23.12
- **アイコン**: Lucide React 0.534.0
- **フォント**: Next.js Font Optimization (Google Fonts)
- **開発サーバー**: http://localhost:3003
- **ビルド**: 成功（First Load JS: 148kB）

## 注意事項
- 架空のプロジェクトであることを明記する ✅
- 実績が増えたら随時更新できる構造にする ✅
- お問い合わせフォームはEmailJSまたはSendGridを使用（準備済み）
- アクセシビリティに配慮（alt属性、適切な見出し構造など） ✅

## 今後の拡張予定
- GitHub Pages用のスタティックエクスポート設定
- ブログ機能
- 実績詳細ページ
- お客様の声セクション
- 多言語対応（英語）
- EmailJS連携（お問い合わせフォーム）

## 技術メモ
- Turbopack使用時にビルドエラーが発生するため通常のWebpackを使用
- CSS変数とTailwind CSS v4の組み合わせで実装
- 全セクション実装完了、正常動作確認済み