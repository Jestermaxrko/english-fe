import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../../shared/elements/Inputs/BorderlessInput';
import { AlternateEmail, VpnKey } from '@material-ui/icons';

import Form from './Form';
import { LOGIN_MUTATION, ME_QUERY } from './query';
import { graphql, withApollo } from 'react-apollo';
import { isJsonString } from '../../shared/services/utils';

const SignIn = ({ mutate, client, history }) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values, setErrors) => {

    try {
      const { data } = await mutate({ variables: values });
      const { authorize: { user, token } } = data;
      const variables = {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        nickname: user.nickname,
      };
      client.writeData({ query: ME_QUERY, variables, data: { user } });
      window.localStorage.setItem('token', token);
      history.push('/');
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
    <Form isSignIn onSubmit={onSubmit} loading={loading}>
      <Input name='email' Icon={AlternateEmail} placeholder='Your email' />
      <Input Icon={VpnKey} name='password' type='password' />
    </Form>
  );
};

export default withRouter(withApollo(graphql(LOGIN_MUTATION)(SignIn)));
