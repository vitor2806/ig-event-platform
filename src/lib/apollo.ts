import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rbxda90wra01z32yc1bk7m/master',
  cache: new InMemoryCache(),
});
