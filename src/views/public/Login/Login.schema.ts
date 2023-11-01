import { InputsRule } from 'types';
import { LoginFormInputs } from './Login.enum';
import { LoginForm } from './Login.type';

export const initValues: LoginForm = {
  [LoginFormInputs.EMAIL]: '',
  [LoginFormInputs.PASSWORD]: ''
};

export const inputsRule: InputsRule = {
  [LoginFormInputs.EMAIL]: [
    {
      required: true,
      type: 'email'
    }
  ],
  [LoginFormInputs.PASSWORD]: [
    {
      required: true,
      min: 3,
      max: 40
    }
  ]
};
