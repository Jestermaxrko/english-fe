import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import { url as uri } from './base-url';
import gql from 'graphql-tag';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloLink } from 'apollo-link';

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

const uploadLink = createUploadLink({ uri });

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

const link = ApolloLink.from([authLink, uploadLink]);

const client = new ApolloClient({
  link,
  cache,
  typeDefs,
  resolvers: {
    Query: {
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
