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

export const GoogleTodoServiceHeatmap = ({ className }: Props) => {
  return (
    <ServiceHeatmap
      className={className}
      imgSrc="/google-todo.png"
      imgAlt="Google ToDo Logo"
      heatmapValue={value}
      heatmapColors={{
        0: '#EBEDF0',
        4: '#CFDDF8',
        8: '#93B2EE',
        12: '#3871E0',
        32: '#1d3a73',
      }}
    />
  )
}
