import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const client = new ApolloClient({
	uri: 'https://www.pablosande.dev/api/graphql', // Use env var
	cache: new InMemoryCache(),
})

export default client
