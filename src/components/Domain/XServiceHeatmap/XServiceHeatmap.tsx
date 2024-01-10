import { ServiceHeatmap } from '@/components/Case/ServiceHeatmap/ServiceHeatmap'

export type Props = {
  className?: string
}

const value = [
  { date: '2024/01/11', count: 2 },
  { date: '2024/01/12', count: 20 },
  { date: '2024/01/13', count: 10 },
  ...[...Array(17)].map((_, idx) => ({ date: `2024/02/${idx + 10}`, count: idx, content: '' })),
  { date: '2024/04/11', count: 2 },
  { date: '2024/05/01', count: 5 },
  { date: '2024/05/02', count: 5 },
  { date: '2024/05/04', count: 11 },
]

export const XServiceHeatmap = ({ className }: Props) => {
  return (
    <ServiceHeatmap
      className={className}
      imgSrc="/x.png"
      imgAlt="X Logo"
      heatmapValue={value}
      heatmapColors={{
        1: '#EBEDF0',
        4: '#DBE9F6',
        8: '#A4CCF4',
        12: '#4A99E9',
        32: '#000000',
      }}
    />
  )
}
