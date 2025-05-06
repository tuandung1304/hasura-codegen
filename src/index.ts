import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import {
  GetUserByIdDocument,
  GetUserByIdQuery,
  GetUserByIdQueryVariables,
} from './generated/graphql'

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'myadminsecretkey',
  },
  cache: new InMemoryCache(),
})

client
  .query<GetUserByIdQuery, GetUserByIdQueryVariables>({
    query: GetUserByIdDocument,
    variables: { id: 1 },
  })
  .then((res) => console.dir(res.data?.users_by_pk, { depth: null }))
