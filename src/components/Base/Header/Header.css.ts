import { style, styleVariants } from '@vanilla-extract/css'

export const themeWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
})

export const themeButtonBase = style({
  borderRadius: '50%',
  padding: '0.5rem',
  border: 'none',
  cursor: 'pointer',
  background: 'transparent',
  width: '2rem',
  height: '2rem',
})

export const themeButtonVariants = styleVariants({
  light: [themeButtonBase, { backgroundColor: 'hsla( 0,0%,95% ,1)' }],
  dark: [themeButtonBase, { backgroundColor: 'hsla( 0,0%,20% ,1)' }],
})
