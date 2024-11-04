import { SiGithub, SiNotion, SiX, SiZenn } from '@icons-pack/react-simple-icons'
import { HomeIcon, MailIcon } from 'lucide-react'

export const DATA = {
  navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
  contact: {
    email: {
      name: 'Mail',
      href: 'mailto:work1008.rk@gmail.com',
      icon: MailIcon,
    },
    x: {
      name: 'X',
      href: 'https://x.com/rfse1008',
      icon: SiX,
    },
    github: {
      name: 'Github',
      href: 'https://github.com/ryo-kihara',
      icon: SiGithub,
    },
    zenn: {
      name: 'Zenn',
      href: 'https://zenn.dev/ryo_kihara',
      icon: SiZenn,
    },
    notionForm: {
      name: 'Notion Form',
      href: 'https://reinvented-mist-434.notion.site/134d0be1bb8d8141a560ec064ed20baf?pvs=105',
      icon: SiNotion,
    },
  },
} as const
