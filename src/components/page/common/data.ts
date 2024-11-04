import { SiGithub, SiX, SiZenn } from '@icons-pack/react-simple-icons'
import { HomeIcon, MailIcon } from 'lucide-react'

export const DATA = {
  navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
  contact: {
    email: {
      name: 'Mail',
      href: 'mailto:work1008.rk@gmail.com',
      icon: MailIcon,
    },
    X: {
      name: 'X',
      href: 'https://x.com/rfse1008',
      icon: SiX,
    },
    Github: {
      name: 'Github',
      href: 'https://github.com/ryo-kihara',
      icon: SiGithub,
    },
    Zenn: {
      name: 'Zenn',
      href: 'https://zenn.dev/ryo_kihara',
      icon: SiZenn,
    },
  },
} as const
