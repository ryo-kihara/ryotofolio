import axios from 'axios'
import addOAuthInterceptor, { OAuthInterceptorConfig } from 'axios-oauth-1.0a'

import { GithubServiceHeatmap } from '@/components/Domain/GithubServiceHeatmap/GithubServiceHeatmap'
import { GoogleTodoServiceHeatmap } from '@/components/Domain/GoogleTodoServiceHeatmap/GoogleTodoServiceHeatmap'
import { XServiceHeatmap } from '@/components/Domain/XServiceHeatmap/XServiceHeatmap'

import * as styles from './page.css'

// TODO: TwitterServiceHeatmap コンポーネントの実装時に移動する
const AxiosClient = axios.create()
const options: OAuthInterceptorConfig = {
  algorithm: 'HMAC-SHA256',
  key: process.env.TWITTER_OAUTH_CONSUMER_KEY || '',
  secret: process.env.TWITTER_OAUTH_CONSUMER_SECRET || '',
  token: process.env.TWITTER_OAUTH_ACCESS_TOKEN || '',
  tokenSecret: process.env.TWITTER_OAUTH_ACCESS_TOKEN_SECRET || '',
}

addOAuthInterceptor(AxiosClient, options)

export default function HomePage() {
  return (
    <main className={styles.container}>
      <GithubServiceHeatmap />
      <XServiceHeatmap />
      <GoogleTodoServiceHeatmap />
    </main>
  )
}
