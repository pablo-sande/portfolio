import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const client = new ApolloClient({
  uri: 'http://localhost:4321/api/graphql', // Use env var
  cache: new InMemoryCache(),
});

export default client;