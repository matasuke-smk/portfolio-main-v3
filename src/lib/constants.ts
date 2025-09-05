// サイト基本情報
export const SITE_CONFIG = {
  name: 'MATASUKE',
  title: 'MATASUKE - Web Development Portfolio',
  description: '対話から生まれる、確かなカタチ。AIと共に創る、次世代のWeb体験',
  url: 'https://matasuke-portfolio.vercel.app',
  ogImage: '/images/og-image.jpg',
  creator: 'MATASUKE',
  twitterCreator: '@matasuke_dev',
};

// ナビゲーションメニュー
export const NAVIGATION = [
  { name: 'HOME', href: '#home' },
  { name: 'WORKS', href: '#works' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICE', href: '#service' },
  { name: 'CONTACT', href: '#contact' },
];

// ヒーローセクション
export const HERO = {
  title: 'MATASUKE',
  subtitle: '対話から生まれる、確かなカタチ。',
  description: 'AIと共に創る、次世代のWeb体験',
  subDescription: 'Communication First, AI-Powered Development',
};

// スキルセット
export const SKILLS = [
  'HTML5 / CSS3',
  'JavaScript (ES6+)',
  'TypeScript',
  'React / Next.js',
  'Tailwind CSS',
  'Responsive Design',
  'Git / GitHub',
  'AI Tools Integration',
];

// 強み・特徴
export const STRENGTHS = [
  {
    title: '丁寧なコミュニケーション',
    description: 'お客様との対話を重視し、要件を正確に把握します',
  },
  {
    title: 'AI活用による効率的な開発',
    description: '最新のAIツールを活用し、高品質なコードを効率的に作成します',
  },
  {
    title: '納期厳守',
    description: 'プロジェクト管理を徹底し、約束した納期を必ず守ります',
  },
  {
    title: 'アフターサポート',
    description: '納品後も継続的なサポートとメンテナンスを提供します',
  },
];

// デモのプロジェクト実績
export const WORKS = [
  {
    id: '1',
    title: 'Midnight Brew',
    category: 'LP',
    industry: 'カフェ・飲食',
    period: '2025年8月 (3日)',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    description: '高級コーヒーブランドの魅力を伝えるエレガントなLP',
    image: '/images/midnight-brew-thumbnail.jpg',
    url: 'https://matasuke-smk.github.io/midnight-brew-v2/',
  },
  {
    id: '2',
    title: 'Atelier Bloom',
    category: 'ECサイト',
    industry: 'アパレル',
    period: '2025年8月 (2日)',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    description: 'エレガントなファッションブランドのECサイト',
    image: '/images/atelier-bloom-thumbnail.jpg',
    url: 'https://matasuke-smk.github.io/atelier-bloom/',
  },
  {
    id: '3',
    title: 'Bistro Lumière',
    category: 'レストランサイト',
    industry: 'カジュアルフレンチレストラン',
    period: '2025年9月 (2週間)',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    description: '「温かみと洗練が出会う場所」をコンセプトとしたフランス料理ビストロのWebサイト',
    image: '/images/BistroLumière-thumbnail.jpg',
    url: 'https://matasuke-smk.github.io/BistroLumi-re/',
  },
  {
    id: '4',
    title: 'Creative Designer Portfolio',
    category: 'CPサイト',
    industry: 'デザイナー',
    period: '制作中',
    technologies: ['React', 'CSS Modules', 'GSAP'],
    description: 'ミニマルなデザインでクリエイターの作品を効果的に魅せるCPサイト（現在制作中）',
    image: '/images/work-3.svg',
    url: '#',
  },
];

// サービス内容・料金
export const SERVICES = [
  {
    title: 'シンプルなLP制作',
    price: '¥80,000〜',
    period: '2週間〜',
    features: [
      '5ページ以内',
      'レスポンシブ対応込み',
      'SEO基本設定',
      'お問い合わせフォーム',
    ],
  },
  {
    title: 'コーポレートサイト制作',
    price: '¥200,000〜',
    period: '1ヶ月〜',
    features: [
      '10ページ程度',
      'CMS導入可能',
      'SEO最適化',
      'アクセス解析設定',
    ],
  },
  {
    title: 'ECサイト構築',
    price: '¥300,000〜',
    period: '1.5ヶ月〜',
    features: [
      '基本構築',
      '決済システム導入',
      '商品管理機能',
      '注文管理システム',
    ],
  },
  {
    title: '既存サイトの改修',
    price: '¥3,000〜/時間',
    period: '応相談',
    features: [
      '最低稼働時間: 10時間〜',
      'バグ修正',
      '機能追加',
      'パフォーマンス改善',
    ],
  },
];

// お問い合わせ種別
export const CONTACT_TYPES = [
  '制作のご依頼',
  'お見積もり',
  'その他',
];

// SNSリンク
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/matasuke_dev',
  github: 'https://github.com/matasuke',
};