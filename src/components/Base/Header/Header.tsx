'use client'

import { useTheme } from 'next-themes'
import { ComponentType } from 'react'
import { CiDark } from 'react-icons/ci'
import { CiMonitor } from 'react-icons/ci'
import { MdOutlineLightMode } from 'react-icons/md'

import * as styles from './Header.css'

type ThemeButton = {
  label: 'light' | 'dark' | 'system'
  icon: ComponentType<{ size: number; color: string }>
}
const themeButtons: ThemeButton[] = [
  { label: 'light', icon: MdOutlineLightMode },
  { label: 'dark', icon: CiDark },
  { label: 'system', icon: CiMonitor },
]

export const Header = () => {
  const { setTheme, resolvedTheme, theme } = useTheme()

  return (
    <header>
      <div className={styles.themeWrapper}>
        {themeButtons.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className={
              theme === label ? styles.themeButtonVariants[resolvedTheme as 'light' | 'dark'] : styles.themeButtonBase
            }
            onClick={() => setTheme(label)}
          >
            <Icon
              size={16}
              color={
                theme === label
                  ? theme === 'light'
                    ? 'hsla(0,0%,9% ,1)'
                    : 'hsla(0,0%,99% ,1)'
                  : theme === 'light'
                    ? 'hsla(0,0%,10% ,1)'
                    : 'hsla(0,0%,50% ,1)'
              }
            />
          </button>
        ))}
      </div>
    </header>
  )
}
