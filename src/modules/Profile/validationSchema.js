
import { object, string } from 'yup';

export const generalInitialValues = {
  nickname: '',
  firstname: '',
  lastname: '',
  email: '',
};

export const generalValidationSchema = object().shape({
  nickname: string().label('Nickname').trim().required().min(2)
    .matches(/^[a-zA-Z0-9]*$/, 'Nickname nust contains only numbers and letters'),
  email: string().label('Email').email().required(),
});
