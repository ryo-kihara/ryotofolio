declare module '*.svg' {
  import { type FC, type SVGProps } from 'react'
  const content: FC<SVGProps<SVGElement>>
  export default content
}
