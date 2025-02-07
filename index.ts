import * as dotenv from 'dotenv';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {
  CreateUserDocument,
  CreateUserMutation,
  CreateUserMutationVariables,
  GetUserDocument,
  GetUserQuery,
  GetUserQueryVariables,
  SubscribeUserDocument,
  SubscribeUserSubscription,
  SubscribeUserSubscriptionVariables,
  UpdateUserDocument,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from './src/generated/graphql';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import WebSocket from 'ws';

dotenv.config();

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:8080/v1/graphql',
    webSocketImpl: WebSocket,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
      },
    },
  }),
);

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
  },
  cache: new InMemoryCache(),
  link: wsLink,
});

// Subscription
// const observable = client.subscribe<
//   SubscribeUserSubscription,
//   SubscribeUserSubscriptionVariables
// >({
//   query: SubscribeUserDocument,
// });

// observable.subscribe({
//   next(value) {
//     console.log('New data: ', JSON.stringify(value.data?.users));
//   },
//   error(error) {
//     console.error('Error: ', error);
//   },
// });

// Create
// client
//   .mutate<CreateUserMutation, CreateUserMutationVariables>({
//     mutation: CreateUserDocument,
//     variables: {
//       name: 'John Doe',
//       address: 'London',
//       age: 12,
//     },
//   })
//   .then((result) => {
//     console.log(result.data?.insert_users_one);
//   });

// Query
// client
//   .query<GetUserQuery, GetUserQueryVariables>({
//     query: GetUserDocument,
//     variables: {
//       id: 2,
//     },
//   })
//   .then((result) => console.dir(result.data.users_by_pk, { depth: null }));

// Update
client.mutate<UpdateUserMutation, UpdateUserMutationVariables>({
  mutation: UpdateUserDocument,
  variables: {
    id: 2,
    input: {
      name: 'Yeu em nhieu lam luon',
      address: 'Van Ninh',
    },
  },
});

