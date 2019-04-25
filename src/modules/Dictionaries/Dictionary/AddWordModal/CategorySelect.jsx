import React, { useState, Fragment } from 'react';
import Select from '../../../../shared/elements/Inputs/OutlinedSelect';

import { CATEGORIES_QUERY } from './utils';

import MenuItem from '@material-ui/core/MenuItem';
import AddCatergory from './AddCategory';
import { Query } from 'react-apollo';

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const AddCategory = ( ) => {
  const [addCategoryMode, setCategoryMode] = useState(false);

  const onAddCategory = () => setCategoryMode(true);
  const onClose =() => setCategoryMode(false);

  return (
    <div>
      <Query query={CATEGORIES_QUERY}>
        {({ data }) => {
          let categories = [];

          if (data.categories) {
            categories = data.categories;
          }

          const options = categories.map(({ id, name }) => (
            <MenuItem className='capitalize' key={id} value={id}>{capitalize(name)}</MenuItem>
          ));

          return (
            <Fragment>
              {addCategoryMode ? 
                <AddCatergory onClose={onClose}/> 
                :
                <Select 
                  label='Category' 
                  name='categoryId' 
                  options={options} 
                  onAddItem={onAddCategory} />
              }

            </Fragment>
          );
        }}
      </Query>

    </div>
  );
};

export default AddCategory;
