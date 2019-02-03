import { object, string, array } from 'yup';

export const wordSchema = object().shape({
  english: string().trim().required(),
  translation:  array().of(string().trim().required())
})