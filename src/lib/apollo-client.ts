import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const GRAPHQL_URL =
    import.meta.env.PUBLIC_GRAPHQL_URL ||
    import.meta.env.PUBLIC_GRAPHQL_URL_PROD

const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache(),
})

export default client
