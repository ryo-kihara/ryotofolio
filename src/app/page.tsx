import { GithubServiceHeatmap } from '@/components/Domain/GithubServiceHeatmap/GithubServiceHeatmap'
import { GoogleTodoServiceHeatmap } from '@/components/Domain/GoogleTodoServiceHeatmap/GoogleTodoServiceHeatmap'
import { XServiceHeatmap } from '@/components/Domain/XServiceHeatmap/XServiceHeatmap'

import styles from './page.module.css'

export default function HomePage() {
  return (
    <main className={styles.main}>
      <GithubServiceHeatmap />
      <XServiceHeatmap />
      <GoogleTodoServiceHeatmap />
    </main>
  )
}
