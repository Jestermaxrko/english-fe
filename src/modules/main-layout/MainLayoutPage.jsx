import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Header from '../Header';
import Dictionaries from '../Dictionaries';
import Spinner from '../../shared/elements/Spinner';

const ME_QUERY = gql`
{
 me {
   id
   firstname
   lastname
 }
}
`;

const styles = {
  container: {
    height: '100vh',
    overflow: 'hidden'
  },
  content: {
    height: '100vh',
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

