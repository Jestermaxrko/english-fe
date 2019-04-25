import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import { withApollo } from 'react-apollo';

const styles = ({ breakpoints, color }) => ({
  card: {
    height: '100%',
    minWidth: '33%',
    marginRight: 20,
    [breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: 20,
      minHeight: '33%',
    }
    // flex: 1
  },
  cardAction: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  name: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: color.primary,
    marginBottom: 10,
  },
  languages: {
    textTransform: 'capitalize',
    color: color.darkGreen,
    fontSize: 14,
    fontWeight: 500
  }
});

const links = ['words', 'activity', 'calendar'];

const DictionatyCard = ({ classes, name, from, to, id, client, history }) => {

  const handleClick = () => {
    const pathParams = window.location.pathname.split('/');
    const lastParam = pathParams[pathParams.length - 1];
    const subLink = links.includes(lastParam) ? lastParam : links[0];

    client.writeData({ data: { activeDictionary: id } });
    history.push(`/dictionaries/${id}/${subLink}`);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardAction} onClick={handleClick}>
        <div className={classes.name}>{name}</div>
        <div className={classes.languages}>{from} - {to}</div>
      </CardActionArea>
    </Card>
  );
};

export default withApollo(withRouter(withStyles(styles)(DictionatyCard)));

