import { getApolloClient } from '@/lib/apollo/client'

export const getGithubApolloClient = () => {
  return getApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `Bearer ${process.env.GITHUB_AUTHORIZATION_TOKEN}`,
    },
  })
}
