import React, { useState, Fragment, useEffect, useRef } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Input from '@material-ui/core/Input';
import { Search, Clear } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

import EmptySearchPopup from './EmptySearchPopup';

const styles = ({ color }) => ({
  inputWrapper: {
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  root: {
    height: '100%',
    paddingLeft: 10,
    backgroundColor: color.light,
    boxSizing: 'border-box',
  },
  input: {
    fontWeight: 500,
    fontSize: 12,
  },
  icon: {
    color: '#89a7a4',
    maxHeight: '100%',
    height: 30,
    margin: 0,
    width: 40,
    cursor: 'pointer',
    justifyContent: 'center',
    borderLeft: '2px solid #55bdab',
  },
  clearAdornment: {
    position: 'absolute',
    right: 40,
    cursor: 'pointer',
    color: color.red,
  },
  clearIcon: {
    fontSize: 14
  }
});

const SERCH_DICTIONATY_QUERY = gql`
  query dictionaries($query: String) {
    dictionaries(query: $query) {
      id
      name
      from
      to
    }
  }
`;
const DICTIONARIES_QUERY = gql`{
  dictionaries {
    name
    from
    to
    id
  }
}
`;

const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState();
  const onOpen = (currentTarget) => setAnchorEl(currentTarget);
  const onClose = () => setAnchorEl(null);
  return [anchorEl, onOpen, onClose];
};

const DictionarySearch = ({ classes, client }) => {
  const [searchQuery, setQuery] = useState('');
  const inputRef = useRef(null);
  const [anchorEl, onOpen, onClose] = usePopover();

  useEffect(() => {
    // onOpen(inputRef.current);
  }, []);

  const onChange = ({ target: { value } }) => setQuery(value);

  const handleKeyDown = ({ key }) => {
    key === 'Enter' && onSearch();
  };

  const handleClose = () => {
    onClose();
    onClear();
  };

  const onClear = () => {
    setQuery('');
    onSearch('');
  };

  const onSearch = async(query = searchQuery) => {
    const { data } = await client.query({ query: SERCH_DICTIONATY_QUERY, variables: { query } });
    if (data.dictionaries.length) client.writeQuery({ query: DICTIONARIES_QUERY, data });
    else {
      onOpen(inputRef.current);
    }
  };

  return (
    <Fragment>
      <EmptySearchPopup anchorEl={anchorEl} onClose={handleClose} />
      <div ref={inputRef} className={classes.inputWrapper}>
        <Input
          classes={{
            root: classes.root,
            input: classes.input
          }}
          fullWidth
          disableUnderline
          value={searchQuery}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder='Search dictionary'
          endAdornment={
            <InputAdornment
              classes={{ root: classes.icon }}
              onClick={onSearch}
              position="start">
              <Search />
            </InputAdornment>
          }
          startAdornment={
            searchQuery && <InputAdornment
              classes={{ root: classes.clearAdornment }}
              onClick={onClear}>
              <Clear className={classes.clearIcon} />
            </InputAdornment>
          }
        />
      </div>
    </Fragment>
  );
};

export default withApollo(withStyles(styles)(DictionarySearch));
