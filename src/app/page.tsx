'use client'

import HeatMap, { SVGProps } from '@uiw/react-heat-map'
import Image from 'next/image'

import styles from './page.module.css'

const value = [
  { date: '2016/01/11', count: 2 },
  { date: '2016/01/12', count: 20 },
  { date: '2016/01/13', count: 10 },
  ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
  { date: '2016/04/11', count: 2 },
  { date: '2016/05/01', count: 5 },
  { date: '2016/05/02', count: 5 },
  { date: '2016/05/04', count: 11 },
]

const width = 760
const weekLabels = ['', 'Mon', '', 'Wed', '', 'Fri', '']
const startDate = new Date('2016/01/01')
const rectSize = 12
const legendRender: SVGProps['legendRender'] = (props) => <rect {...props} key={props.key} rx={2.5} />
const rectRender: SVGProps['rectRender'] = (props) => <rect {...props} key={props.key} rx={2.5} />
const xPanelColors = {
  0: '#EBEDF0',
  4: '#DBE9F6',
  8: '#A4CCF4',
  12: '#4A99E9',
  32: '#000000',
}
const googleTodoPanelColors = {
  0: '#EBEDF0',
  4: '#CFDDF8',
  8: '#93B2EE',
  12: '#3871E0',
  32: '#1d3a73',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src="/github.svg" alt="Github Logo" width={40} height={40} />
      <HeatMap
        value={value}
        width={width}
        weekLabels={weekLabels}
        startDate={startDate}
        rectSize={rectSize}
        legendRender={legendRender}
        rectRender={rectRender}
      />

      <Image src="/x.png" alt="X Logo" width={40} height={40} />
      <HeatMap
        value={value}
        width={width}
        weekLabels={weekLabels}
        startDate={startDate}
        rectSize={rectSize}
        legendRender={legendRender}
        rectRender={rectRender}
        panelColors={xPanelColors}
      />

      <Image src="/google-todo.png" alt="Google ToDo Logo" width={40} height={40} />
      <HeatMap
        value={value}
        width={width}
        weekLabels={weekLabels}
        startDate={startDate}
        rectSize={rectSize}
        legendRender={legendRender}
        rectRender={rectRender}
        panelColors={googleTodoPanelColors}
      />
    </main>
  )
}
