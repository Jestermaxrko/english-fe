import { object, string } from 'yup';
import gql from 'graphql-tag';

export const validationSchema = object().shape({
  from: string().label('from').required(),
  to: string().label('to').required()
});

export const initialValues = {
  name: '',
  from: '',
  to: ''
};

export const CREATE_MUTATION = gql`
mutation createDictionary($name: String, $from: String!, $to: String!) {
  createDictionary(name: $name, from: $from, to: $to) {
    name
    from
    to
    id
  }
}
`;
