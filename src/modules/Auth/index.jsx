import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import { ME_QUERY } from './query';
import { withStyles } from '@material-ui/core';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Spinner from '../../shared/elements/Spinner';

const styles = () => ({
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#584d84',
    background: 'url(https://p.w3layouts.com/demos/consent_sign_up_form/web/images/bg.jpg)',
    backgroundSize: 'cover',
  }
});

const Auth = ({ classes, match }) => {
  return (
    <div className={classes.container}>
      <Query query={ME_QUERY}>
        {({ loading, data }) => {
          if (loading) return <Spinner/>;
          if (data) return <Redirect to='/' />;
          return (
            <Switch>
              <Route exact path={`${match.path}/sign-up`} component={SignUp} />
              <Route exact path={`${match.path}/sign-in`} component={SignIn} />
              <Redirect to={`${match.path}/sign-in`} />
            </Switch>
          );
        }}
      </Query>
    </div>
  );
};

export default withStyles(styles)(Auth);
