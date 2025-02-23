import { Building, ChartColumnIncreasing, Landmark, Newspaper, School, Truck, UserPen, FileText } from 'lucide-react'

export const DATA = {
  workExperiences: [
    {
      title: '受注処理システム開発案件',
      icon: FileText,
      dates: '2024/12 - 2025/2',
      positions: ['SE', 'PG'],
      stacks: ['Laravel', 'Linux', 'Docker'],
      description:
        'DDD を活用したドメインモデルの設計・クリーンアーキテクチャ構成での実装・インフラの作業として検証環境と本番環境の構築を担当。',
    },
    {
      title: 'ふるさと納税返礼品管理ツール開発',
      icon: Truck,
      dates: '2024/10 - 2024/11',
      positions: ['PL', 'SE'],
      stacks: ['Laravel', 'AWS', 'Figma'],
      description:
        'PLとしてアサインし、PM・TL・PGの他3名のメンバーと密な連携を行い、開発を進めた。タスクとして、WF作成・AWS設計・コードレビューを担当。',
    },
    {
      title: '広告運用管理ツール開発',
      icon: Newspaper,
      dates: '2024/9 - 2024/9',
      positions: ['SE', 'PG'],
      stacks: ['React', 'Node.js', 'MySQL'],
      description:
        'React・jsPDF・html2canvasを使用したPDF出力機能を担当。アサインがプロジェクト開始して間もない時期だったため、環境やREADMEなどのドキュメント整備も提案し実施。',
    },
    {
      title: '校務支援システム開発',
      icon: School,
      dates: '2023/12 - 2024/8',
      positions: ['PL'],
      stacks: ['PHP', 'HTML', 'CSS'],
      description:
        'PLとしてタスク管理・先方との密な連携を行った。開発としてはセキュリティやパフォーマンスなど非機能要件部分がメインだったが、PGへの技術的アドバイスもしながら開発を進めた。',
    },
    {
      title: '社内システム開発',
      icon: Building,
      dates: '2022/9-2023/11',
      positions: ['PL', 'SE', 'PG'],
      stacks: ['Next.js', 'Node.js', 'Nuxt.js', 'TypeScript', 'Laravel', 'WordPress', 'AWS'],
      description: '6プロジェクトほどの社内システム・事業LPの開発に携わり、社内業務の効率化・サービスの改善を行った。',
    },
    {
      title: 'マーケティング活動支援ツール開発',
      icon: ChartColumnIncreasing,
      dates: '2022/3-2022/8',
      positions: ['PG'],
      stacks: ['TypeScript', 'Nuxt.js', 'Laravel'],
      description:
        '1stリリース前にアサインし、難易度の高い実装タスクをメインに着手。フロント・バック両方のタスクに着手し、遅延なくリリースまで携わった。',
    },
    {
      title: '教育',
      icon: UserPen,
      dates: '2021/12-2024/11',
      positions: ['チームリーダー経験'],
      stacks: ['バックエンド', 'フロントエンド'],
      description:
        'メンターとして、約300名のエンジニア輩出に携わる。研修カリキュラムの執筆や、メンターのチームリーダーとしてチームや研修内容の課題解決を行った。',
    },
    {
      title: '行政機関管理ツール開発',
      icon: Landmark,
      dates: '2020/12-2021/11',
      positions: ['SE', 'PG'],
      stacks: ['TypeScript', 'Vue.js', 'Node.js', 'CouchDB'],
      description:
        'フロント・バック両方の設計と実装を担当。マイクロサービスで構築されており、約20のリポジトリ間での連携がされていたため、汎用性を重視した設計と実装を行った。',
    },
  ],
} as const
