import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayoutPage from './modules/main-layout/MainLayoutPage';
import AuthPage from './modules/Auth';

const Routes = (
  <BrowserRouter basename="/">
    <Switch>
      <Route  path='/auth' component={AuthPage}/>
      <Route  path='/' component={MainLayoutPage} />
      
    </Switch>
  </BrowserRouter>
);

export default Routes;
