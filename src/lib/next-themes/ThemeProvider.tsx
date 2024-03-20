'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { FC } from 'react'

import type { ThemeProviderProps } from 'next-themes/dist/types'

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  return <NextThemesProvider {...props}>{props.children}</NextThemesProvider>
}
