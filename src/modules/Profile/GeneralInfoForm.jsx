import React, { useEffect, useState } from 'react';
import { Form } from 'formik';
import Input from '../../shared/elements/Inputs/BorderlessInput';
import Button from '@material-ui/core/Button';
import { graphql, withApollo } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import Autorenew from '@material-ui/icons/Autorenew';
import { GENERAL_INFO_QUERY, UPDATE_GENERAL_INFO } from './query';
import { isJsonString } from '../../shared/services/utils';

const isChanged = (initInfo, curInfo) => {
  if (!initInfo || !curInfo) return false;
  return Object.keys(initInfo).some(key => initInfo[key] !== curInfo[key]);
};

const GeneralInfoForm = ({ setValues, setErrors, values, client, mutate }) => {
  const [initInfo, setInitInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const { data: { me } } = await client.query({ query: GENERAL_INFO_QUERY });
    setValues(me);
    setInitInfo(me);
  };

  const updateUser = async () => {
    setLoading(true);
    try {
      const { data } = await mutate({ variables: values });
      client.writeQuery({ query: GENERAL_INFO_QUERY, data: { me: data.updateUser } });
      setInitInfo(data.updateUser);
    } catch (err) {
      if (isJsonString(err.graphQLErrors[0].message)) {
        const parsedErr = JSON.parse(err.graphQLErrors[0].message);
        setErrors(parsedErr);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form>
      <Input name='nickname' label='Nickname' />
      <Input name='firstname' label='Firstname' />
      <Input name='lastname' label='Lastname' />
      <Input name='email' label='Email' />
      <div className='flex-row flex-justify-end'>

        {loading && <CircularProgress className='margin-right' size={32} />}
        <div className='margin-right'>
          <Button
            onClick={() => setValues(initInfo)}
            disabled={loading || !isChanged(initInfo, values)}>
            Reset
            <Autorenew />
          </Button>
        </div>

        <Button
          onClick={updateUser}
          disabled={loading || !isChanged(initInfo, values)}
          color='primary'
          variant='contained'>
          Save
        </Button>

      </div>
    </Form>
  );
};

export default graphql(UPDATE_GENERAL_INFO)(withApollo(GeneralInfoForm));

