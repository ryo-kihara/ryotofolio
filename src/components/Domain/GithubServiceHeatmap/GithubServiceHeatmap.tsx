import { ServiceHeatmap } from '@/components/Case/ServiceHeatmap/ServiceHeatmap'

import { useGetContributionsCollection } from '@/hooks/api/external/github/graphql/useGetContributionsCollection'

export type Props = {
  className?: string
}

export const GithubServiceHeatmap = async ({ className }: Props) => {
  const { data } = await useGetContributionsCollection()

  const value = data.user.contributionsCollection.contributionCalendar.weeks
    .map((week) => week.contributionDays)
    .flat()
    .map((day) => ({ date: day.date, count: day.contributionCount }))

  return <ServiceHeatmap className={className} imgSrc="/github.svg" imgAlt="Github Logo" heatmapValue={value} />
}
