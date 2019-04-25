import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { withApollo } from 'react-apollo';
const styles = ({ color }) => ({
  root: {
    // backgroundColor: color.orange
    borderBottom: '1px solid #ccc',
    color: color.darkGrey
  },
  selected: {
    backgroundColor: '#e7ebff !important',
    color: color.primary,
    '&:hover': {
      // backgroundColor: `${color.orange} !important`,
    }
  },
});

const links = ['words', 'activity', 'calendar'];

const DictionaryListItem = ({ classes, history, onClose, client, item: { name, from, to, id } }) => {

  const handleClick = () => {
    if (!window.location.pathname.includes(id)) {
      const pathParams = window.location.pathname.split('/');
      const lastParam = pathParams[pathParams.length - 1];
      const subLink = links.includes(lastParam) ? lastParam : links[0];
      client.writeData({ data: { activeDictionary: id } });
      history.push(`/dictionaries/${id}/${subLink}`);
      onClose && onClose();
    }
  };

  return (
    <div onClick={handleClick}>
      <ListItem
        classes={classes}
        button
        selected={window.location.pathname.includes(id)}>
        <div className='capitalize'>
          {name || `${from} ${to}`}
        </div>
      </ListItem>
    </div>
  );
};

export default withApollo(withRouter(withStyles(styles)(DictionaryListItem)));
