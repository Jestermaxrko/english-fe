import gql from 'graphql-tag';

export const GENERAL_INFO_QUERY = gql`
  query {
    me {
      id
      nickname
      firstname
      lastname
      email
  }
}
`;

export const UPLOAD_FILE = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) 
  }
`;

export const AVATAR_QUERY = gql`
  query {
    me {
      id
      avatar
    }
}
`;

export const UPDATE_GENERAL_INFO = gql`
   mutation updateUser($nickname: String!, $email: String!, $firstname: String, $lastname: String) {
    updateUser(nickname: $nickname, email: $email, firstname: $firstname, lastname: $lastname) {
      id,
      nickname,
      email,
      firstname,
      lastname,

    }
  }
`;
