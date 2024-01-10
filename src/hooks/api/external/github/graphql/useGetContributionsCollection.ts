import { gql } from '@apollo/client'

import { getGithubApolloClient } from './client'

// TODO: Apollo Client で型を生成したい
export type ContributionsCollection = {
  contributionCalendar: {
    totalContributions: number
    weeks: {
      contributionDays: {
        contributionCount: number
        date: string
      }
    }[]
  }
}

const query = gql`
  query ($userName: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $userName) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`

export const useGetContributionsCollection = async () => {
  const githubApolloClient = getGithubApolloClient()

  const { data } = await githubApolloClient.getClient().query({
    query,
    variables: {
      userName: 'ryo-kihara',
      from: `${new Date().getFullYear()}-01-01T00:00:00Z`,
      to: new Date().toISOString(),
    },
  })

  return {
    data,
  } as {
    // TODO: Apollo Client で型を生成したい
    data: {
      user: {
        contributionsCollection: ContributionsCollection
      }
    }
  }
}
