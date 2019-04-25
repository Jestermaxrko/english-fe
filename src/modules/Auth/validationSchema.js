
import { object, string } from 'yup';

export const SignUpInitValues = {
  nickname: '',
  email: '',
  password: '',
  passwordConf: ''
};

export const SignInInitValues = {
  email: '',
  password: '',
};

export const SignUpValidationSchema = object().shape({
  nickname: string().label('Nickname').trim().required().min(2)
    .matches(/^[a-zA-Z0-9]*$/, 'Nickname nust contains only numbers and letters'),
  email: string().label('Email').email().required(),
  password: string().label('Password').required().min(6),
  passwordConf: string().label('Password').required().min(6)
});

export const SigInValidationSchema = object().shape({
  email: string().label('Email').email().required(),
  password: string().label('Password').required(),
}); 
