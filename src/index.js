import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import ThemeWrapper from './shared/styles/Theme';
import './index.scss';
import Router from './router';
import apolloClient from './const/appollo-config';

ReactDOM.render(
  <ThemeWrapper>
    <ApolloProvider client={apolloClient}>
      {Router} 
    </ApolloProvider>
  </ThemeWrapper>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
