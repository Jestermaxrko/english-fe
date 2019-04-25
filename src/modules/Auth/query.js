import gql from 'graphql-tag';

export const ME_QUERY = gql`
{
 me {
   id
   nickname,
   firstname
   lastname
 }
}
`;

export const REGISTER_MUTATION = gql`
  mutation createUser($nickname: String!, $email: String!, $password: String!, $passwordConf: String!) {
    createUser(nickname: $nickname, email: $email, password: $password, passwordConf: $passwordConf) {
      user {
        nickname,
        firstname,
        lastname,
        email
        id
      }
      token
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation authorize($email: String!, $password: String!) {
    authorize(email: $email, password: $password) {
      user {
        email
        id
      }
      token
    }
  }
`;
