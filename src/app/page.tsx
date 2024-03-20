import { Header } from '@/components/Base/Header/Header'
import { GithubServiceHeatmap } from '@/components/Domain/GithubServiceHeatmap/GithubServiceHeatmap'
import { GoogleTodoServiceHeatmap } from '@/components/Domain/GoogleTodoServiceHeatmap/GoogleTodoServiceHeatmap'
import { XServiceHeatmap } from '@/components/Domain/XServiceHeatmap/XServiceHeatmap'

import * as styles from './page.css'

export default async function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <GithubServiceHeatmap />
        <XServiceHeatmap />
        <GoogleTodoServiceHeatmap />
      </main>
    </>
  )
}
