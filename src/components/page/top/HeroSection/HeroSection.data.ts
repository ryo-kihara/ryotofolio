import MeImage from '@/assets/images/me.jpeg'

export const DATA = {
  name: 'Ryo',
  initial: 'R',
  avatar: MeImage.src,
  description: {
    ja: ['何でも屋のウェブ開発者です。', '最新技術に常に飢えています。'],
    en: ['Jack-of-all-trades web developer.Always hungry for the latest tech trends.'],
  },
} as const
