import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import EditIcon from '@material-ui/icons/Edit';

import GeneralInfo from './GeneralInfo';
import AvatarChange from './AvatarChange';

const styles = ({ color, breakpoints }) => ({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
    boxSizing: 'border-box'
  },
  content: {
    width: '70%',
    margin: 'auto',
    height: '100%',
    boxSizing: 'border-box',
    [breakpoints.down('xs')]: {
      width: '100%',
      padding: '0 5px'
    }
  },

  editableContent: {
    display: 'flex',
    marginTop: 20,
    backgroundColor: color.light,
    boxShadow: '-1px 2px 14px -1px rgba(0,0,0,0.75)',
    padding: 25,
    borderRadius: 4,
    [breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  avatar: {
    height: 200,
    backgroundColor: 'red',
    marginRight: 25,
    minWidth: 200
  }
});

const Profile = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className='flex flex-row flex-align-center'>
          <EditIcon/>
          Profile
        </div>
        <div className={classes.editableContent}>
          <AvatarChange/>
          <GeneralInfo />
        </div>

      </div>
    </div>
  );
};

export default withStyles(styles)(Profile);
