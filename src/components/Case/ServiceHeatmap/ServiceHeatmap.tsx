import { clsx } from 'clsx'
import Image from 'next/image'

import { Heatmap, type Props as HeatmapProps } from '@/components/Base/Heatmap/Heatmap'

import * as styles from './ServiceHeatmap.css'

export type Props = {
  className?: string
  imgSrc: string
  imgAlt: string
  heatmapValue: HeatmapProps['value']
  heatmapColors?: HeatmapProps['panelColors']
}

export const ServiceHeatmap = ({ className, imgSrc, imgAlt, heatmapValue, heatmapColors }: Props) => {
  return (
    <div className={clsx(styles.container, className)}>
      <Image src={imgSrc} alt={imgAlt} width={40} height={40} />
      <Heatmap className={styles.heatmap} value={heatmapValue} panelColors={heatmapColors} />
    </div>
  )
}
