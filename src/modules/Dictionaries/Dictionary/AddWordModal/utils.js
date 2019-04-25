import { object, string, array } from 'yup';
import gql from 'graphql-tag';

export const initialValues = {
  word: '',
  categoryId: '',
  translation: ['']
};

export const validationSchema = object().shape({
  word: string().label('Word').trim().required(),
  translation:  array().of(string().label('Translation').trim().required())
});

export const CREATE_WORD_MUTATION = gql`
mutation createWord($dictionaryId: String!, $word: String!, $translation: [String!]!, $categoryId: String) {
  createWord(dictionaryId: $dictionaryId, word: $word, translation: $translation, categoryId: $categoryId) {
    id
    word
    translation
  }
}
`;

export const DICTIONARY_QUERY = gql`
  query dictionary($id: String) {
    dictionary(id: $id) {
      from
      to
      words {
        id
        word
        translation
      }
    }
  }
`;

export const ACTIVITY_QUERY = gql`
  query dayAggs($dictionaryId: String!) {
    dayAggs(dictionaryId: $dictionaryId) {
      total
      date
    }
  }
`;

export const CATEGORIES_QUERY = gql`
{
  categories {
    id
    name
  }
}
`;

export const CREATE_CATEGORY = gql`
  mutation createCategory($name: String!) {
    createCategory(name: $name) {
      id
      name
  }
}
`;
