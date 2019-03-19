import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddPage from '../add-page';
import Calendar from '../calendar';
import Reader from '../Reader';

import Header from './Header';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  container: {
    height: '100vh',
    overflow: 'hidden'
  },
  content: {
    height: 'calc(100vh - 55px)',
    overflow: 'auto'
  }
};

const MainLayout = ({ classes }) => {
  return <div className={classes.container}>
    <Header />
    <div className={classes.content}>
      <Route path='/add' component={AddPage} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/words' component={Reader} />
    </div>

  </div>;
};

export default withStyles(styles)(MainLayout);