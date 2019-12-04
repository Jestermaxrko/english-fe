import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Header from '../Header';
import Dictionaries from '../Dictionaries';
import Profile from '../Profile';

import Spinner from '../../shared/elements/Spinner';
import Games from '../Games';
import PlayGame from '../PlayGame';

const ME_QUERY = gql`
{
 me {
   id
   nickname
   firstname
   lastname
   avatar
   email
 }
}
`;

const styles = {
  container: {
    height: '100vh',
    overflow: 'hidden'
  },
  content: {
    height: 'calc(100vh - 55px)',
    overflow: 'auto',
    position: 'relative'
  }
};

const MainLayout = ({ classes }) => {

  if (!window.localStorage.token) {
    return <Redirect to='/auth/sign-in' />;
  }

  return (
    <div className={classes.container}>
      <Query query={ME_QUERY}>
        {({ loading, error }) => {
          if (loading) return <Spinner />;
          if (error) return <Redirect to='/auth/sign-in' />;
          return (
            <Fragment>
              <Header />
              <div className={classes.content}>
                <Switch>
                  <Route path='/dictionaries' component={Dictionaries} />
                  <Route path='/games' component={Games} />
                  <Route path='/play-game' component={PlayGame} />
                  <Route path='/profile' component={Profile} />
                  <Redirect to="/dictionaries" />
                </Switch>
              </div>
            </Fragment>
          );
        }}
      </Query>
    </div>
  );
};

export default withStyles(styles)(MainLayout);

