import axios from 'axios'
import addOAuthInterceptor, { OAuthInterceptorConfig } from 'axios-oauth-1.0a'

export type Params = {
  'user.fields': 'public_metrics'
}

export type Response = {
  id: string
  username: string
  name: string
  public_metrics?: {
    followers_count: number
    following_count: number
    tweet_count: number
    listed_count: number
    like_count: number
  }
}

const AxiosClient = axios.create()
const options: OAuthInterceptorConfig = {
  algorithm: 'HMAC-SHA256',
  key: process.env.TWITTER_OAUTH_CONSUMER_KEY || '',
  secret: process.env.TWITTER_OAUTH_CONSUMER_SECRET || '',
  token: process.env.TWITTER_OAUTH_ACCESS_TOKEN || '',
  tokenSecret: process.env.TWITTER_OAUTH_ACCESS_TOKEN_SECRET || '',
}

addOAuthInterceptor(AxiosClient, options)

export const useGetMe = async (params?: Params) => {
  const { data } = await AxiosClient.get<Response>('https://api.twitter.com/2/users/me', { params })

  return { data }
}
