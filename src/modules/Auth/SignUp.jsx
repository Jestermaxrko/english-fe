import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../../shared/elements/Inputs/BorderlessInput';
import Form from './Form';
import { AccountCircle, AlternateEmail, VpnKey } from '@material-ui/icons';
import { REGISTER_MUTATION, ME_QUERY } from './query';
import { graphql, withApollo } from 'react-apollo';

import { isJsonString } from '../../shared/services/utils';

const SignUp = ({ mutate, client, history }) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values, setErrors) => {
    if (values.password !== values.passwordConf) {
      return setErrors({ password: 'Passwords dont match' });
    }

    try {
      setLoading(true);
      const { data } = await mutate({ variables: values });
      const { createUser: { user, token } } = data;
      const variables = {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        nickname: user.nickname,
      };
      client.writeQuery({ query: ME_QUERY, variables, data: { user } });
      window.localStorage.setItem('token', token);
      history.push('/');
    } catch (err) {
      if(isJsonString(err.graphQLErrors[0].message)) {
        const parsedErr = JSON.parse(err.graphQLErrors[0].message);
        setErrors(parsedErr);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={onSubmit} loading={loading}>
      <Input name='nickname' Icon={AccountCircle} placeholder='Your Nickname' />
      <Input name='email' Icon={AlternateEmail} placeholder='Your email' />

      <div className='flex-row'>
        <div className='flex margin-right'>
          <Input Icon={VpnKey} type='password' name='password' />
        </div>
        <Input Icon={VpnKey} type='password' name='passwordConf' />
      </div>
    </Form>
  );
};

export default withRouter(withApollo(graphql(REGISTER_MUTATION)(SignUp)));
