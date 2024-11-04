import { SiGithub } from '@icons-pack/react-simple-icons'
import { Globe } from 'lucide-react'

import MitsumorenderLogo from '@/assets/images/projects/mitsumolendar.png'
import MiyasakaShotenLogo from '@/assets/images/projects/miyasaka-shoten.png'
import PortfolioImage from '@/assets/images/projects/portfolio.png'
import RecoputLogo from '@/assets/images/projects/recoput.png'

export const DATA = {
  projects: [
    {
      thumbnail: {
        src: RecoputLogo.src,
        width: 250,
        height: 150,
        className: 'mt-16 mb-14 lg:my-0',
      },
      title: 'Recoput',
      href: '',
      dates: '2022/6 - 現在',
      description:
        '「毎日新しい知識を得たい」という思いから始まり、友人4名と開発をスタート。毎日自分の興味のある記事を閲覧できる機能・継続して記事を読んでいることを可視化できる機能を実装。仕様のみならず実装も4人それぞれ意見を出し合いながら進めている。',
      stacks: ['Next.js', 'Typescript', 'shadcn/ui', 'Supabase', 'Cloudflare Pages'],
      links: [
        {
          type: 'Website',
          // TODO: リリース後にリンクを追加
          href: '',
          icon: Globe,
        },
      ],
    },
    {
      thumbnail: {
        src: MiyasakaShotenLogo.src,
        width: 500,
        height: 300,
        className: '',
      },
      title: '麺屋宮坂商店様 ホームページ制作',
      href: 'https://menya-miyasaka-shoten.com',
      dates: '2024/1 - 2024/9',
      description:
        '地元長野県の麺屋さんのホームページを制作。子供の頃からお世話になっている麺屋さんから依頼をいただいた。要件定義からデザイン・実装・デプロイまで実施。1stリリース時点で Lighthouse でもスコア100点を獲得。今後は売上の面でも貢献していきたい。',
      stacks: ['Astro', 'React', 'Typescript', 'Vercel', 'microCMS', 'Google Search Console'],
      links: [
        {
          type: 'Website',
          href: 'https://menya-miyasaka-shoten.com',
          icon: Globe,
        },
      ],
    },
    {
      thumbnail: {
        src: MitsumorenderLogo.src,
        width: 90,
        height: 90,
        className: 'my-8 md:my-0 lg:my-0',
      },
      title: 'みつもレンダー',
      href: 'https://mitsumorender.com',
      dates: '2023/1 - 2024/1',
      description:
        '彼女と2人で開発した日々見積もりの精度を高められるようにするアプリ。フロントとインフラを担当。インフラについてはAWS構築を1から実施しデプロイまで実施したことがなかったが、Terraformも使いデプロイまで完了させた。',
      stacks: ['React', 'Typescript', 'Mantine', 'OpenAPI', 'Laravel', 'AWS', 'Terraform'],
      links: [
        {
          type: 'Website',
          href: 'https://mitsumorender.com',
          icon: Globe,
        },
      ],
    },
    {
      thumbnail: {
        src: PortfolioImage.src,
        width: 400,
        height: 200,
        className: '',
      },
      title: 'ポートフォリオ',
      href: '',
      dates: '2024/10 - 2024/11',
      description:
        'これまでの経歴と技術スタックをまとめるため制作。また shadcn/ui や Magic UI といった UI ライブラリを使用してみたいと思い、制作した。',
      stacks: ['Next.js', 'Typescript', 'shadcn/ui', 'Magic UI', 'Vercel'],
      links: [
        {
          type: 'Website',
          href: 'https://ryotofolio.vercel.app',
          icon: Globe,
        },
        {
          type: 'GitHub',
          href: 'https://github.com/ryo-kihara/ryotofolio',
          icon: SiGithub,
        },
      ],
    },
  ],
} as const
