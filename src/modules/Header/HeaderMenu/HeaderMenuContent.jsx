import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import withRouter from 'react-router-dom/withRouter';

import MenuItem from '@material-ui/core/MenuItem';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Edit from '@material-ui/icons/Edit';
import { withApollo } from 'react-apollo';

const HeaderMenuContent = ({ history, client }) => {
  const logOut = async () => {
    window.localStorage.clear();
    await client.clearStore();
    history.push('/auth/sign-in');
  };
  return (
    <div>
      <NavLink to='/profile'>
        <MenuItem>
          <Edit />
          Edit Profile
        </MenuItem>
      </NavLink>
      <MenuItem onClick={logOut}>
        <ExitToApp /> Log Out
      </MenuItem>
    </div>
  );
};

export default withApollo(withRouter(HeaderMenuContent));
