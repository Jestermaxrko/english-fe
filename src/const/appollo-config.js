import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import { url as uri } from './base-url';
import gql from 'graphql-tag';

export const typeDefs = gql`
  type WordsFilter {
    sort: Int,
    filter: [String],
    query: String
  }
  type Query {
    wordsFilter: WordsFilter,
  }
`;

const httpLink = createHttpLink({ uri });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  typeDefs,
  resolvers: {
    Query : {
      wordsFilter: parent => parent,
      WordsFilter: {
        sort: parent => parent.sort,
        filter: parent => parent.filter,
        query: parent => parent.query,
      }
    }
  }
});

const initState = { 
  wordsFilter: { 
    sort: -12,
    filter: [],
    query: '',
    __typename: 'WordsFilter' 
  }
};

cache.writeData({
  data: initState
});

export default client;
