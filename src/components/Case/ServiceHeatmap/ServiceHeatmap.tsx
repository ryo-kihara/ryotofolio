import Image from 'next/image'

import { Heatmap, type Props as HeatmapProps } from '@/components/Base/Heatmap/Heatmap'

export type Props = {
  className?: string
  imgSrc: string
  imgAlt: string
  heatmapValue: HeatmapProps['value']
  heatmapColors?: HeatmapProps['panelColors']
}

export const ServiceHeatmap = ({ className, imgSrc, imgAlt, heatmapValue, heatmapColors }: Props) => {
  return (
    <div className={className}>
      <Image src={imgSrc} alt={imgAlt} width={40} height={40} />
      <Heatmap value={heatmapValue} panelColors={heatmapColors} />
    </div>
  )
}
