import React, { useState } from 'react';
import Input from '../../../../shared/elements/Inputs/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import Check from '@material-ui/icons/Check';

import withStyles from '@material-ui/core/styles/withStyles';

import { CREATE_CATEGORY, CATEGORIES_QUERY } from './utils';
import { Mutation } from 'react-apollo';
import { connect } from 'formik';
const styles = ({ color }) => ({
  button: {
    padding: 3,
    marginBottom: 5,
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: color.lightRed,
    color: color.red
  },
  saveButton: {
    color: color.green,
    backgroundColor: color.lightGreen
  },
  error: {
    position: 'absolute',
    color: color.red,
    bottom: 3,
    fontSize: 12
  }
});

const AddCategory = ({ classes, formik, onClose }) => {
  const [categoryName, setCategoryName] = useState('');

  const onChange = ({ target: { value } }) => { setCategoryName(value); };

  const updateCategories = (store, { data: { createCategory } }) => {
    if(!categoryName) return onClose();
    const { categories } = store.readQuery({ query: CATEGORIES_QUERY });
    const newCategories = [createCategory, ...categories];
    store.writeQuery({ query: CATEGORIES_QUERY, data: { categories: newCategories } });
    formik.setFieldValue('categoryId', createCategory.id);
    onClose();
  };

  return (
    <Mutation
      mutation={CREATE_CATEGORY}
      variables={{ name: categoryName }}
      update={updateCategories}>

      {(handleSubmit, { error }) => {
        return (
          <div className='flex-row flex-align-center relative'>
            <Input value={categoryName} label='Add Category' name='category' onChange={onChange} />
            <IconButton onClick={onClose} className={`${classes.button} ${classes.deleteButton}`}>
              <Close />
            </IconButton>
            <IconButton onClick={handleSubmit} className={`${classes.button} ${classes.saveButton}`}>
              <Check />
            </IconButton>
            {error && <div className={classes.error}>You already have this category</div>}
          </div>
        );
      }}
    </Mutation>
  );
};

export default connect(withStyles(styles)(AddCategory));
