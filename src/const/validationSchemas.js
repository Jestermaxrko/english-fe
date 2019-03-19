import { object, string, array } from 'yup';

export const wordSchema = object().shape({
  original: string().trim().required(),
  translation:  array().of(string().trim().required())
});