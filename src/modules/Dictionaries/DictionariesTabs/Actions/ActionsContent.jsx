import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Delete from '@material-ui/icons/Delete';
import Settings from '@material-ui/icons/Settings';
import ListItem from '@material-ui/core/ListItem';

const styles = ({ color }) => ({
  container: {
    width: 200,
  },
  title: {
    color: color.blue,
    textTransform: 'capitalize'
  },
  icon: {
    color: color.lightBlue
  }
});

const menuOptions = [
  {
    title: 'delete',
    icon: Delete,
  },
  {
    title: 'settings',
    icon: Settings,
  }
];

const ActionsContent = ({ classes, match }) => {

  return (
    <div className={classes.container}>

      {menuOptions.map(option => {
        const Icon = option.icon;
        return (
          <NavLink key={option.title} to={`/dictionaries/${match.params.id}/${option.title}`}>
            <ListItem className={classes.row} button>
              <Icon className={classes.icon} />
              <div className={classes.title}>{option.title}</div>
            </ListItem>
          </NavLink>
        );
      })}
    </div>
  );
};

export default withRouter(withStyles(styles)(ActionsContent));
