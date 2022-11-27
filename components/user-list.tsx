'use client'

import { OrderUsersBy, SortOrder, useGetUsersQuery } from '@/generated/graphql/react'
import Button from '@mui/material/Button'
import Card from './mui/card'
import CardContent from './mui/card-content'
import Typography from './mui/typography'

export default function UserList(): React.ReactElement {
  const { data, loading, fetchMore } = useGetUsersQuery({
    variables: {
      orderBy: OrderUsersBy.CreatedAt,
      sortOrder: SortOrder.Desc,
      first: 4,
    },
  })
  
  const { endCursor, hasNextPage } = data?.users?.pageInfo|| {}

  return <div>
    {data?.users?.edges?.map((edge, index) => (<div key={`user-${index}`}>
      <Card sx={{ maxWidth: 345, m: 4 }} raised>
        <CardContent>
          <Typography>ID: {edge?.node?.id}</Typography>
          <Typography>Email: {edge?.node?.email}</Typography>
          <Typography>Role: {edge?.node?.role}</Typography>
          <Typography>createdAt: {edge?.node?.createdAt}</Typography>
          <Typography>updatedAt: {edge?.node?.updatedAt}</Typography>
        </CardContent>
      </Card>
    </div>))}
    {hasNextPage ? (
      <Button
        variant='contained'
        onClick={(): void => {
          fetchMore({
            variables: { after: endCursor },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              if (fetchMoreResult.users) {
                fetchMoreResult.users.edges = [
                  ...previousResult.users?.edges ?? [],
                  ...fetchMoreResult.users?.edges ?? [],
                ]
              }

              return fetchMoreResult
            },
          })
        }}
      >
            more
      </Button>
    ) : loading ? <p>Loading...</p>: (
      <p className="my-10 text-center font-medium">
        {'You\'ve reached the end!'}
      </p>
    )}
  </div>
  
}