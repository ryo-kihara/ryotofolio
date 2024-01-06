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
  query ($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
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
