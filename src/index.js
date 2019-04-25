import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ApolloProvider } from 'react-apollo';

import ThemeWrapper from './shared/styles/Theme';
import reducer from './reducers';
import './index.scss';
import Router from './router';
import apolloClient from './const/appollo-config';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <ThemeWrapper>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}> {Router} </Provider>
    </ApolloProvider>
  </ThemeWrapper>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
