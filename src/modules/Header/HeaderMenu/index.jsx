import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Popover from '@material-ui/core/Popover';

import HeaderMenuContent from './HeaderMenuContent';
import { usePopover } from '../../../shared/hooks/popoverHook';

export const ME_QUERY = gql`
{
 me {
  #  id
   nickname,
   avatar
   email
  #  firstname
  #  lastname
 }
}
`;

const styles = ({ color }) => ({
  img: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    marginLeft: 5
  },
  title: {
    color: color.light
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
    backgroundColor: '#2b2b2b',
    marginRight: 5,
    borderRadius: 5,
    cursor: 'pointer'
  }
});

const HeaderMenu = ({ classes }) => {
  const [anchorEl, onOpen, onClose] = usePopover();
  return (

    <Query query={ME_QUERY}>
      {({ data }) => {
        return (
          <Fragment>
            <div className={classes.container} onClick={onOpen}>
              <div className={classes.title}>{data.me.nickname}</div>
              <img className={classes.img} src={data.me.avatar} />
            </div>
            <Popover
              anchorEl={anchorEl}
              open={!!anchorEl}
              onClose={onClose}
            >
              <HeaderMenuContent />
            </Popover>
          </Fragment>

        );
      }}
    </Query>
  );
};

export default withStyles(styles)(HeaderMenu);
