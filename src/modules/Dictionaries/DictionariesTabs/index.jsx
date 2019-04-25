import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import { BookOutlined, 
  // CalendarToday, GraphicEq, Home 
} from '@material-ui/icons';
import Actions from './Actions';
import DictionaryDrawer from './DictionaryDrawer';

const tabs = [
  {
    icon: BookOutlined,
    title: 'words'
  },
  {
    icon: BookOutlined,
    title: 'activity'
  },
];

const styles = ({ color }) => ({
  containter: {
    display: 'flex',
    alignItems: 'center',
    height: 36,
    margin: '7px 0',
    position: 'relative',
    justifyContent: 'space-between',
  },
  tabs: {
    width: 300,
    borderRadius: 30,
    boxSizing: 'border-box',
    overflow: 'hidden',
    display: 'flex',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: color.lightBlue,
    color: color.blue,
    boxSizing: 'border-box',
    height: '100%',
    padding: '5px 10px',
    textTransform: 'capitalize',
    borderRight: `1px solid ${color.light}`,
    '&:last-child': {
      borderRight: 'none'
    }
  },
  activeLink: {
    backgroundColor: color.blue,
    color: color.light
  },
  placeholder: {
    width: 30,
    marginLeft: 5
  }
});

const DictionaryTabs = ({ match, classes }) => {
  return <div className={classes.containter}>

    <div className={classes.placeholder}>
      <DictionaryDrawer/>
    </div>

    <div className={classes.tabs}>
      {tabs.map(tab => (
        <NavLink
          key={tab.title}
          to={`/dictionaries/${match.params.id}/${tab.title}`}
          className={classes.link}
          activeClassName={classes.activeLink}>
          {tab.title}
        </NavLink>
      ))}
    </div>

    <Actions/>

  </div>;
};

export default withRouter(withStyles(styles)(DictionaryTabs));
