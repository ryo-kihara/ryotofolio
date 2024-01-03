'use client'

import BaseHeatmap, { HeatMapValue, SVGProps } from '@uiw/react-heat-map'

export type Props = {
  className?: string
  value: HeatMapValue[]
  weekLabels?: string[]
  startDate?: Date
  endDate?: Date
  width?: number
  rectSize?: number
  panelColors?: SVGProps['panelColors']
  legendRender?: SVGProps['legendRender']
  rectRender?: SVGProps['rectRender']
}

export const Heatmap = ({
  className,
  value,
  weekLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''],
  startDate = new Date(`${new Date().getFullYear()}-01-01`),
  endDate = new Date(`${new Date().getFullYear()}-12-31`),
  width = 760,
  rectSize = 12,
  panelColors = undefined,
  legendRender = (props) => <rect {...props} key={props.key} rx={2.5} />,
  rectRender = (props) => <rect {...props} key={props.key} rx={2.5} />,
}: Props) => {
  return (
    <BaseHeatmap
      className={className}
      value={value}
      weekLabels={weekLabels}
      startDate={startDate}
      endDate={endDate}
      width={width}
      rectSize={rectSize}
      panelColors={panelColors}
      legendRender={legendRender}
      rectRender={rectRender}
    />
  )
}
